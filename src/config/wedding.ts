export const wedding = {
  couple: {
    groom: "VikraM",
    bride: "Monica",
    monogram: "V & M",
    dates: "12 - 13 December 2026",
    location: "Madurai",
    timezone: "Asia/Kolkata",
  },
  intro: {
    tagline: "Yep, we are getting married 😊",
    durationMs: 5000,
  },
  hero: {
    image: "/images/hero.jpg",
    fallback: "A very important photo is loading here later.",
    note: "Two days. One wedding. A suspicious amount of planning.",
  },
  venue: {
    name: "Samyughtha Mahal, Madurai",
    address: "Madurai, Tamil Nadu",
    mapsUrl: "https://maps.app.goo.gl/2PG6jWmsMjiWnMdm9",
  },
  events: [
    {
      date: "12 December",
      label: "Reception / Engagement 💍",
      time: "4:00 PM onwards",
    },
    { date: "13 December", label: "Wedding ✨", time: "7:00 AM onwards" },
  ],
  countdown: "2026-12-12T18:00:00+05:30",
  story: [
    {
      date: "10 March 2018",
      title: "We Knew Each Other",
      text: "Apparently, this was the beginning. Neither of us knew it yet.",
      image: "/images/story-01.jpg",
    },
    {
      date: "11 May 2018",
      title: "We Became Friends",
      text: "We started talking, hanging out and becoming suspiciously comfortable around each other.",
      image: "/images/story-02.jpg",
    },
    {
      date: "September / October 2018",
      title: "Best Friends",
      text: "Somewhere along the way, “friend” stopped being enough to describe whatever this was.",
      image: "/images/story-03.jpg",
    },
    {
      date: "2020",
      title: "More Than Best Friends",
      text: "And eventually, we stopped pretending this was just friendship.",
      image: "/images/story-04.jpg",
    },
    {
      date: "2021",
      title: "COVID",
      text: "Excellent timing. Terrible circumstances. Somehow, we survived both.",
      image: "/images/story-05.jpg",
    },
    {
      date: "2021",
      title: "College Graduation",
      text: "College ended. The conversations didn't.",
      image: "/images/story-06.jpg",
    },
    {
      date: "2022–2024",
      title: "Long Distance",
      text: "Different places. Same person. A lot of calls, messages and “when are we meeting next?”",
      image: "/images/story-07.jpg",
    },
    {
      date: "2025",
      title: "Talked to the Parents",
      text: "The relationship officially entered its most difficult boss level.",
      image: "/images/story-08.jpg",
    },
    {
      date: "December 2026",
      title: "Wedding",
      text: "And now we're here.",
      image: "/images/story-01.jpg",
    },
  ],
  photoMissions: [
    "Get a photo with someone you haven't met in years.",
    "All the group photos you took",
    "wedding food and how you enjoyed it",
    "Take some photos of the couple looking at each other.",
    "Find Vikram looking confused and staring",
    "Find Monica laughing out loud",
    "Take multiple photos with us.",
    "A cute photo of us in our wedding outfits 😊",
  ],
  randomFacts: [
    "Classic Vikram: no popcorn for Monica, buying the cheapest 60-rupee tickets, and upgrading themselves to the 200-rupee seats 😈",
    "Vikram thinks 100x before acting once. Monica acts a 100x before thinking even once 🙃",
    "Vikram and Monica have been texting/talking non-stop for 9 years straight. Literally zero days off 👀",
    "",
    
    "Vikram can spend an unreasonable amount of time comparing two products that are ₹300 apart.",
    "Monica has somehow developed the ability to know when Vikram is about to say something stupid.",
    "We have had conversations that started with “one quick question” and lasted an hour.",
    "Vikram believes every problem can be solved with enough research.",
    "Monica occasionally disagrees with this theory.",
    "We have a suspicious number of inside jokes that make absolutely no sense to anyone else.",
    "We can argue about what to eat for longer than it takes to actually eat.",
    "One of us says “I’m ready” significantly faster than the other.",
    "We have collectively said “let’s not overthink this” and then overthought it.",
    "Our chat history should probably never be released publicly.",
    "We have survived long distance, which should count as a qualification.",
    "We have sent each other things online with the message “this is literally you.”",
    "There is always one more story to tell.",
    "We occasionally communicate using references that require absolutely no explanation - to us.",
    "We have mastered the art of discussing serious things while simultaneously discussing food.",
    "One of us researches. The other one waits for the summary.",
    "We have changed our minds about plans approximately 47 times.",
    "We somehow made it from college conversations to wedding planning.",
    "We still occasionally behave like we’re back in college.",
    "Apparently, after all that, we decided marriage was a good idea.",
  ],
  photoSharing: { telegramUrl: "TELEGRAM_GROUP_URL_HERE" },
  moi: {
    qrValue: "UPI_QR_VALUE_HERE",
    amounts: ["₹200", "₹500", "₹1,000", "₹2,000"],
  },
  messages: [
    {
      name: "Arun",
      message:
        "Still waiting for Vikram to explain how this was somehow his idea.",
    },
    {
      name: "Priya",
      message:
        "Congratulations! May your arguments always be short and your food orders always be correct.",
    },
    {
      name: "Anonymous",
      message: "I came for the food. Stayed for the wedding.",
    },
    {
      name: "Karthik",
      message: "From college nonsense to an actual wedding. Respect.",
    },
    {
      name: "Anonymous",
      message: "Advice: never go to bed angry. Also never go to bed hungry.",
    },
  ],
  contacts: {
    vikram: "PHONE_NUMBER_HERE",
    monica: "PHONE_NUMBER_HERE",
    instagram: "INSTAGRAM_URL_HERE",
  },
} as const;

export type GuestMessage = { name: string; message: string; createdAt: string };
