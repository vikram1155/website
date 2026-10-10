import { createClient } from "@supabase/supabase-js";
import { wedding } from "./wedding";

export type GuestMessage = {
  id: string;
  name: string;
  message: string;
};

type GuestMessageRow = {
  id: string | number;
  name: string;
  message: string;
};

const STORAGE_KEY = "vm-wedding-messages";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const isGuestbookConfigured = Boolean(supabase);

function createId() {
  return crypto.randomUUID();
}

function fromRow(row: GuestMessageRow): GuestMessage {
  return {
    id: String(row.id),
    name: row.name,
    message: row.message,
  };
}

function seedLocalMessages(): GuestMessage[] {
  return wedding.messages.map((item) => ({
    ...item,
    id: createId(),
  }));
}

function readLocalMessages(): GuestMessage[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved) as GuestMessage[];

    const seed = seedLocalMessages();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    return seed;
  } catch {
    return seedLocalMessages();
  }
}

function writeLocalMessages(messages: GuestMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // Storage can be unavailable in private browsing.
  }
}

export async function getGuestMessages(): Promise<GuestMessage[]> {
  if (!supabase) return readLocalMessages();

  const { data, error } = await supabase
    .from("guestbook_messages")
    .select("id, name, message")
    .order("id", { ascending: false });

  if (error) throw error;
  return (data as GuestMessageRow[]).map(fromRow);
}

export async function postGuestMessage(
  name: string,
  message: string,
): Promise<GuestMessage> {
  if (!supabase) {
    const posted = {
      id: createId(),
      name,
      message,
    };
    writeLocalMessages([posted, ...readLocalMessages()]);
    return posted;
  }

  const { data, error } = await supabase
    .from("guestbook_messages")
    .insert({ name, message })
    .select("id, name, message")
    .single();

  if (error) throw error;
  return fromRow(data as GuestMessageRow);
}

export async function deleteGuestMessage(id: string): Promise<void> {
  if (!supabase) {
    writeLocalMessages(readLocalMessages().filter((item) => item.id !== id));
    return;
  }

  const { error } = await supabase
    .from("guestbook_messages")
    .delete()
    .eq("id", id);

  if (error) throw error;
}