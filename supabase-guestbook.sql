create table if not exists public.guestbook_messages (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 80),
  message text not null check (char_length(message) between 1 and 2000)
);

alter table public.guestbook_messages enable row level security;

grant select, insert, delete on public.guestbook_messages to anon, authenticated;

create policy "Anyone can read guestbook messages"
  on public.guestbook_messages for select
  to anon, authenticated
  using (true);

create policy "Anyone can post guestbook messages"
  on public.guestbook_messages for insert
  to anon, authenticated
  with check (true);

-- This makes the requested public delete API work. Remove this policy later
-- and move deletes behind an authenticated admin function before production.
create policy "Anyone can delete guestbook messages"
  on public.guestbook_messages for delete
  to anon, authenticated
  using (true);