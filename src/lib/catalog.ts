// ============================================================================
//  BLACKWOOD PUBLISHING — CATALOG
//
//  ⭐ THIS IS THE ONLY FILE YOU EDIT WHEN A BOOK RELEASES. ⭐
//
//  WEEKLY RELEASE CHECKLIST
//  ------------------------
//  When a book goes live on Amazon:
//    1. Find its entry in the BOOKS list below.
//    2. Change   status: "coming-soon"   to   status: "live"
//    3. Paste the Amazon link into   buyLink: "https://..."
//    4. If you have the finished cover, drop the image in
//       public/images/ and set   cover: "/images/your-file.jpg"
//       (Leave `cover` blank and the site shows a branded
//        "coming soon" placeholder with the title on it.)
//    5. Commit + push. Netlify redeploys automatically.
//
//  Everything else — the homepage, the catalog, each author's page,
//  each book's page — updates itself from this file.
// ============================================================================

export type BookStatus = "live" | "coming-soon";

export interface Book {
  slug: string;
  title: string;
  subtitle?: string;
  authorSlug: string;
  series?: string;
  seriesNumber?: number;
  releaseDate: string; // ISO: "2026-08-03"
  price: string;
  status: BookStatus;
  cover?: string; // blank => branded placeholder
  blurb: string;
  tropes: string[];
  buyLink?: string;
}

export interface Author {
  slug: string;
  name: string;
  initials: string;
  lane: string;
  tagline: string;
  bio: string;
  comps: string;
  series?: string;
}

// ---------------------------------------------------------------------------
//  AUTHORS
// ---------------------------------------------------------------------------

export const authors: Author[] = [
  {
    slug: "everly-quinn",
    name: "Everly Quinn",
    initials: "EQ",
    lane: "Paranormal Rom-Com",
    tagline: "Supernatural chaos, extremely competent heroines.",
    bio: "Everly Quinn writes laugh-out-loud paranormal romance featuring vampires, immortals, and the very organized women who accidentally stumble into their worlds. Her heroines solve problems with competence rather than luck, and she firmly believes a legal pad is a love language.",
    comps: "Jessica Cage, Kimberly Lemming, Cassandra Gannon, K.F. Breene",
    series: "Accidentally Yours",
  },
  {
    slug: "precious-banks",
    name: "Précious Banks",
    initials: "PB",
    lane: "Urban Royal Romance",
    tagline: "Crowns, packs, and women who don't fold.",
    bio: "Précious Banks writes fated-mate romance where the heroine never folds and the alpha always kneels eventually. Her stories live at the crossroads of Southern wolf packs, old family debts, and love that plays for keeps.",
    comps: "Ashley Antoinette, Jahquel J., Porscha Sterling",
    series: "Crowned Queen",
  },
  {
    slug: "scarlett-vale",
    name: "Scarlett Vale",
    initials: "SV",
    lane: "Dark Romantasy",
    tagline: "Deadly academies. Vows with teeth.",
    bio: "Scarlett Vale believes a good villain is just a love interest who hasn't met the right person yet, and that the best romances should scare you a little. She builds academies designed to kill her characters, then writes the scenes she probably shouldn't have.",
    comps: "Rebecca Yarros, LJ Shen, Sarah J. Maas",
    series: "Blood Oath Academy",
  },
  {
    slug: "zora-monroe",
    name: "Zora Monroe",
    initials: "ZM",
    lane: "Southern Gothic Fantasy",
    tagline: "Old magic. Older debts.",
    bio: "Zora Monroe writes lush Black Southern gothic fantasy rooted in ancestral magic and family stories three generations deep. She believes our elders left us more than we were told, and that a woman coming into her inheritance is the most dangerous, most beautiful thing there is.",
    comps: "Tomi Adeyemi, Ayana Gray",
    series: "The Midnight Society",
  },
  {
    slug: "kehlani-broadnax",
    name: "Kehlani Broadnax",
    initials: "KB",
    lane: "Urban Romance",
    tagline: "She wanted stability. She married chaos.",
    bio: "Kehlani Broadnax writes urban romance about loyalty, love, and the men who make both complicated.",
    comps: "Ashley Antoinette, Jahquel J.",
  },
  {
    slug: "sanaa-gadson",
    name: "Sanaa Gadson",
    initials: "SG",
    lane: "Urban Romance",
    tagline: "Empires run on fear. Love doesn't.",
    bio: "Sanaa Gadson writes high-stakes urban romance where power is currency and the heroine is never the weakest person in the room.",
    comps: "Ashley Antoinette, Porscha Sterling",
  },
  {
    slug: "amara-batiste",
    name: "Amara Batiste",
    initials: "AB",
    lane: "Urban Family Saga",
    tagline: "Money long, loyalty longer.",
    bio: "Amara Batiste writes sprawling Southern urban sagas about family, legacy, and love that plays for keeps below the Mason-Dixon.",
    comps: "Ashley Antoinette, Jahquel J.",
  },
  {
    slug: "journee-rucker",
    name: "Journee Rucker",
    initials: "JR",
    lane: "Urban Romance",
    tagline: "She knew better. He made sure she didn't care.",
    bio: "Journee Rucker writes magnetic urban romance about dangerous men and the women who refuse to be saved by them.",
    comps: "Porscha Sterling, Jahquel J.",
  },
  {
    slug: "nia-copeland",
    name: "Nia Copeland",
    initials: "NC",
    lane: "Urban Romance",
    tagline: "Family said he was off limits.",
    bio: "Nia Copeland writes forbidden-love urban romance where loyalty and longing pull in opposite directions.",
    comps: "Jahquel J., Ashley Antoinette",
  },
  {
    slug: "imani-whitfield",
    name: "Imani Whitfield",
    initials: "IW",
    lane: "Urban Heist Romance",
    tagline: "He takes what he wants. So does she.",
    bio: "Imani Whitfield writes slick, fast-moving heist romance where the chemistry is as dangerous as the job.",
    comps: "Porscha Sterling, Ashley Antoinette",
  },
  {
    slug: "elodie-sinclair",
    name: "Elodie Sinclair",
    initials: "ES",
    lane: "Billionaire Romance",
    tagline: "The contract was supposed to be temporary.",
    bio: "Elodie Sinclair writes luxe billionaire romance built on contracts, convenient marriages, and the clause nobody reads closely enough.",
    comps: "Ana Huang, Lauren Asher",
  },
  {
    slug: "colette-ashby",
    name: "Colette Ashby",
    initials: "CA",
    lane: "Billionaire Revenge",
    tagline: "He named his price. She raised the stakes.",
    bio: "Colette Ashby writes billionaire romance with a revenge edge, where every bargain costs more than it promises.",
    comps: "Ana Huang, LJ Shen",
  },
  {
    slug: "margaux-fontaine",
    name: "Margaux Fontaine",
    initials: "MF",
    lane: "Billionaire Romance",
    tagline: "Everything about her is off limits.",
    bio: "Margaux Fontaine writes forbidden billionaire romance for readers who like their tension slow and their fallout expensive.",
    comps: "Lauren Asher, Ana Huang",
  },
  {
    slug: "wren-cole",
    name: "Wren Cole",
    initials: "WC",
    lane: "Paranormal Romance",
    tagline: "The treaty demanded a bride.",
    bio: "Wren Cole writes fated-mate paranormal romance about treaties, bargains, and kings who did not plan on falling in love.",
    comps: "Kenya Wright, K.F. Breene",
  },
  {
    slug: "esme-larkin",
    name: "Esme Larkin",
    initials: "EL",
    lane: "Shifter Romance",
    tagline: "He waited a lifetime for the bond.",
    bio: "Esme Larkin writes rejected-mate and fated-mate shifter romance with all the ache and none of the apology.",
    comps: "K.F. Breene, Kimberly Lemming",
  },
  {
    slug: "catalina-vazquez",
    name: "Catalina Vazquez",
    initials: "CV",
    lane: "Dark Mafia Romance",
    tagline: "Taken as leverage. Kept as something else.",
    bio: "Catalina Vazquez writes dark bratva romance where possession is the love language and the heroine's mind is the weapon.",
    comps: "J.T. Geissinger, Sadie Kincaid",
  },
  {
    slug: "reyna-bautista",
    name: "Reyna Bautista",
    initials: "RB",
    lane: "Dark Mafia Romance",
    tagline: "His world took everything from her.",
    bio: "Reyna Bautista writes dark mafia romance about captivity, complicity, and the terrible pull between them.",
    comps: "Sadie Kincaid, J.T. Geissinger",
  },
  {
    slug: "nova-cross",
    name: "Nova Cross",
    initials: "NX",
    lane: "Romantasy",
    tagline: "The crown burned once.",
    bio: "Nova Cross writes epic romantasy about scorched thrones, impossible bargains, and women who wear what's left of the crown.",
    comps: "Sarah J. Maas, Rebecca Yarros",
  },
  {
    slug: "vesper-locke",
    name: "Vesper Locke",
    initials: "VL",
    lane: "Fae Romantasy",
    tagline: "Mortals don't survive his court.",
    bio: "Vesper Locke writes fae romantasy full of dangerous courts, sharper bargains, and mortals who refuse to be pawns.",
    comps: "Sarah J. Maas, Holly Black",
  },
  {
    slug: "sable-voss",
    name: "Sable Voss",
    initials: "SB",
    lane: "Dark Romantasy",
    tagline: "Every rose in this kingdom draws blood.",
    bio: "Sable Voss writes thorned, gothic romantasy where beauty and violence share a bloodline.",
    comps: "Rebecca Yarros, Sarah J. Maas",
  },
  {
    slug: "winter-hale",
    name: "Winter Hale",
    initials: "WH",
    lane: "Romantasy",
    tagline: "Born of two powers that should never have met.",
    bio: "Winter Hale writes elemental romantasy about forbidden bloodlines, hunted heirs, and power that refuses to stay buried.",
    comps: "Sarah J. Maas, Rebecca Yarros",
  },
];

// ---------------------------------------------------------------------------
//  BOOKS
// ---------------------------------------------------------------------------

export const books: Book[] = [
  // ===== EVERLY QUINN — Accidentally Yours =====
  {
    slug: "i-accidentally-married-a-vampire",
    title: "I Accidentally Married a Vampire",
    authorSlug: "everly-quinn",
    series: "Accidentally Yours",
    seriesNumber: 1,
    releaseDate: "2026-07-06",
    price: "$2.99",
    status: "live",
    cover: "/images/cover-vampire.png",
    blurb:
      "Vegas. Too much tequila. A handsome stranger with very good manners and very sharp teeth. Harper Brooks wakes up married to Lucien Devereaux, a 354-year-old vampire prince, and learns their impulsive wedding triggered an ancient law naming her his permanent mate. She came to plan a wedding. She did not plan on being in one.",
    tropes: ["Accidental Marriage", "Vampire Prince", "Fated Mates", "Forced Proximity"],
    buyLink: "https://amzn.to/4eHw0Wm",
  },
  {
    slug: "i-accidentally-started-a-vampire-war",
    title: "I Accidentally Started a Vampire War",
    authorSlug: "everly-quinn",
    series: "Accidentally Yours",
    seriesNumber: 2,
    releaseDate: "2026-08-03",
    price: "$3.99",
    status: "coming-soon",
    cover: "/images/cover-vampire-war.jpg",
    blurb:
      "The marriage was an accident. The war is entirely her fault. Forty days. Nine ancient houses. One formal presentation before each, where a single misstep can be taken as an insult to a bloodline older than most countries. Harper made it through exactly three before she offended House Cavara so gravely they declared a blood claim on the spot. They started a war with a wedding planner. They should have chosen differently.",
    tropes: ["Accidental Marriage", "Vampire Court Intrigue", "Protective Hero", "Forced Proximity"],
  },

  // ===== PRÉCIOUS BANKS — Crowned Queen =====
  {
    slug: "crowned-queen-to-a-menace",
    title: "Crowned Queen to a Menace",
    authorSlug: "precious-banks",
    series: "Crowned Queen",
    seriesNumber: 1,
    releaseDate: "2026-07-17",
    price: "$2.99",
    status: "live",
    cover: "/images/cover-crowned-queen.jpg",
    blurb:
      "She was promised to him before she was born. Nobody asked her a thing. He's the alpha king of the oldest pack in the South. She's the last daughter of the bloodline that owes him a two-hundred-year-old debt, and the debt comes due at the blood moon. She said no. The pact didn't care.",
    tropes: ["Arranged Marriage", "Fated Mates", "Alpha King", "Reluctant Bride"],
    buyLink: "https://amzn.to/4wfehvG",
  },
  {
    slug: "pregnant-queen-to-a-menace",
    title: "Pregnant Queen to a Menace",
    authorSlug: "precious-banks",
    series: "Crowned Queen",
    seriesNumber: 2,
    releaseDate: "2026-08-04",
    price: "$4.99",
    status: "coming-soon",
    cover: "/images/cover-pregnant-queen.jpg",
    blurb:
      "She took the crown. Now she's carrying the heir, and every wolf in the South wants it. An heir carrying both the alpha line and the old working has never existed. Some families want the child controlled. Some want it gone. The pact was built to contain her. Nobody built anything to contain what she's carrying.",
    tropes: ["Surprise Pregnancy", "Fated Mates", "Protective Alpha", "Pack Politics"],
  },

  // ===== SCARLETT VALE — Blood Oath Academy =====
  {
    slug: "the-dark-princes-vow",
    title: "The Dark Prince's Vow",
    authorSlug: "scarlett-vale",
    series: "Blood Oath Academy",
    seriesNumber: 1,
    releaseDate: "2026-07-13",
    price: "$2.99",
    status: "live",
    cover: "/images/cover-dark-princes-vow.jpg",
    blurb:
      "Enemies to lovers, a deadly academy, and a vow six years in the making. Where it all started.",
    tropes: ["Enemies to Lovers", "Dark Academia", "Blood Oath", "Touch Her and Die"],
    buyLink: "https://amzn.to/4eVKHVP",
  },
  {
    slug: "the-dark-princes-reckoning",
    title: "The Dark Prince's Reckoning",
    subtitle: "The First Vow",
    authorSlug: "scarlett-vale",
    series: "Blood Oath Academy",
    seriesNumber: 2,
    releaseDate: "2026-08-05",
    price: "$3.99",
    status: "coming-soon",
    cover: "/images/cover-dark-princes-reckoning.jpg",
    blurb:
      "He swore two vows. She only knows about one. He claimed her in front of the entire academy, put his blood on the stone, and dared two hundred killers to argue. It should have saved her. It made her a target with a crown on it.",
    tropes: ["Enemies to Lovers", "Deadly Trials", "Possessive Hero", "Hidden Past"],
  },

  // ===== ZORA MONROE — The Midnight Society =====
  {
    slug: "the-last-daughter-of-briar-house",
    title: "The Last Daughter of Briar House",
    authorSlug: "zora-monroe",
    series: "The Midnight Society",
    seriesNumber: 1,
    releaseDate: "2026-07-23",
    price: "$2.99",
    status: "live",
    cover: "/images/cover-last-daughter-briar.jpg",
    blurb:
      "When the last daughter of Briar House comes home, she inherits more than land. She inherits the debt her family owed the dark, the society that has kept it quiet for a century, and the thing beneath the floorboards that remembers her name.",
    tropes: ["Southern Gothic", "Ancestral Magic", "Secret Society", "Forbidden Guardian"],
    buyLink: "https://amzn.to/4y6fnuT",
  },
  {
    slug: "the-last-door-of-briar-house",
    title: "The Last Door of Briar House",
    authorSlug: "zora-monroe",
    series: "The Midnight Society",
    seriesNumber: 2,
    releaseDate: "2026-08-06",
    price: "$3.99",
    status: "coming-soon",
    cover: "/images/cover-last-door-briar.jpg",
    blurb:
      "She opened the door. Something walked out wearing her grandmother's face. Everyone believes her grandmother came home. Only Ava and Kaius know what's actually sitting at that kitchen table.",
    tropes: ["Southern Gothic", "Ancestral Magic", "Slow Burn", "Forbidden Love"],
  },

  // ===== WEEK B — URBAN =====
  {
    slug: "married-to-mayhem",
    title: "Married to Mayhem",
    authorSlug: "kehlani-broadnax",
    releaseDate: "2026-08-10",
    price: "$3.99",
    status: "coming-soon",
    blurb: "She wanted stability. She married chaos in a tailored suit.",
    tropes: ["Marriage of Convenience", "Bad Boy", "Loyalty"],
  },
  {
    slug: "wife-of-a-cartel-king",
    title: "Wife of a Cartel King",
    authorSlug: "sanaa-gadson",
    releaseDate: "2026-08-11",
    price: "$3.99",
    status: "coming-soon",
    blurb: "His empire runs on fear. She's the one thing in it he can't control.",
    tropes: ["Dangerous Hero", "Forced Marriage", "Power Couple"],
  },
  {
    slug: "them-dirty-south-boys",
    title: "Them Dirty South Boys",
    authorSlug: "amara-batiste",
    releaseDate: "2026-08-12",
    price: "$3.99",
    status: "coming-soon",
    blurb: "Money long, loyalty longer, and love that plays for keeps below the Mason-Dixon.",
    tropes: ["Family Saga", "Southern Roots", "Ride or Die"],
  },
  {
    slug: "seduced-by-a-savage",
    title: "Seduced By a Savage",
    authorSlug: "journee-rucker",
    releaseDate: "2026-08-13",
    price: "$3.99",
    status: "coming-soon",
    blurb: "She knew better. He made sure she didn't care.",
    tropes: ["Bad Boy", "Forbidden Attraction", "Slow Burn"],
  },
  {
    slug: "falling-for-my-brothers-enemy",
    title: "Falling for My Brother's Enemy",
    authorSlug: "nia-copeland",
    releaseDate: "2026-08-14",
    price: "$2.99",
    status: "coming-soon",
    blurb: "Family says he's off limits. Her heart didn't get the memo.",
    tropes: ["Forbidden Romance", "Enemies to Lovers", "Family Loyalty"],
  },
  {
    slug: "the-one-who-steals-hearts",
    title: "The One Who Steals Hearts",
    authorSlug: "imani-whitfield",
    releaseDate: "2026-08-15",
    price: "$2.99",
    status: "coming-soon",
    blurb: "He takes what he wants. She's about to return the favor.",
    tropes: ["Heist", "Rivals to Lovers", "Banter"],
  },

  // ===== WEEK C — BILLIONAIRE / PARANORMAL / MAFIA =====
  {
    slug: "the-billionaires-marriage-trap",
    title: "The Billionaire's Marriage Trap",
    authorSlug: "elodie-sinclair",
    releaseDate: "2026-08-17",
    price: "$4.99",
    status: "coming-soon",
    blurb: "The contract was supposed to be temporary. So was her immunity to him.",
    tropes: ["Fake Marriage", "Billionaire", "Forced Proximity"],
  },
  {
    slug: "the-ruthless-bargain",
    title: "The Ruthless Bargain",
    authorSlug: "colette-ashby",
    releaseDate: "2026-08-18",
    price: "$3.99",
    status: "coming-soon",
    blurb: "He named his price. She raised the stakes.",
    tropes: ["Revenge", "Billionaire", "Enemies to Lovers"],
  },
  {
    slug: "forbidden-by-the-billionaire",
    title: "Forbidden by the Billionaire",
    authorSlug: "margaux-fontaine",
    releaseDate: "2026-08-19",
    price: "$3.99",
    status: "coming-soon",
    blurb: "Everything about her is off limits. He's never respected a limit in his life.",
    tropes: ["Forbidden Romance", "Billionaire", "Age Gap"],
  },
  {
    slug: "promised-to-the-vampire-king",
    title: "Promised to the Vampire King",
    authorSlug: "wren-cole",
    releaseDate: "2026-08-20",
    price: "$3.99",
    status: "coming-soon",
    blurb: "The treaty demanded a bride. Nobody warned the king he'd want to keep her.",
    tropes: ["Fated Mates", "Vampire King", "Arranged Marriage"],
  },
  {
    slug: "the-werewolfs-fated-mate",
    title: "The Werewolf's Fated Mate",
    authorSlug: "esme-larkin",
    releaseDate: "2026-08-21",
    price: "$2.99",
    status: "coming-soon",
    blurb: "He's waited a lifetime for the bond. She just wants an explanation.",
    tropes: ["Rejected Mate", "Fated Mates", "Second Chance"],
  },
  {
    slug: "the-bratvas-captive-bride",
    title: "The Bratva's Captive Bride",
    authorSlug: "catalina-vazquez",
    releaseDate: "2026-08-22",
    price: "$3.99",
    status: "coming-soon",
    blurb: "Taken as leverage. Kept as something far more dangerous.",
    tropes: ["Dark Mafia", "Captive Romance", "Obsession"],
  },

  // ===== WEEK D — MAFIA / ROMANTASY =====
  {
    slug: "captive-of-the-don",
    title: "Captive of the Don",
    authorSlug: "reyna-bautista",
    releaseDate: "2026-08-24",
    price: "$2.99",
    status: "coming-soon",
    blurb: "His world took everything from her. Now she's living in the middle of it.",
    tropes: ["Dark Mafia", "Captive Romance", "Enemies to Lovers"],
  },
  {
    slug: "a-throne-of-ash-and-thorns",
    title: "A Throne of Ash and Thorns",
    authorSlug: "nova-cross",
    releaseDate: "2026-08-25",
    price: "$4.99",
    status: "coming-soon",
    blurb: "The crown burned once. She intends to wear what's left.",
    tropes: ["Romantasy", "Fallen Kingdom", "Enemies to Lovers"],
  },
  {
    slug: "the-fae-kings-captive",
    title: "The Fae King's Captive",
    authorSlug: "vesper-locke",
    releaseDate: "2026-08-26",
    price: "$3.99",
    status: "coming-soon",
    blurb: "Mortals don't survive his court. She plans to run it.",
    tropes: ["Fae Court", "Captive Romance", "Bargains"],
  },
  {
    slug: "kingdom-of-thorns-and-sorrow",
    title: "Kingdom of Thorns and Sorrow",
    authorSlug: "sable-voss",
    releaseDate: "2026-08-27",
    price: "$3.99",
    status: "coming-soon",
    blurb: "Every rose in this kingdom draws blood. She's done bleeding quietly.",
    tropes: ["Dark Romantasy", "Gothic", "Court Intrigue"],
  },
  {
    slug: "daughter-of-shadow-and-flame",
    title: "Daughter of Shadow and Flame",
    authorSlug: "winter-hale",
    releaseDate: "2026-08-28",
    price: "$3.99",
    status: "coming-soon",
    blurb: "Born of two powers that should never have met. Hunted by both.",
    tropes: ["Romantasy", "Forbidden Bloodline", "Chosen One"],
  },
];

// ---------------------------------------------------------------------------
//  HELPERS — used by the pages, no need to edit
// ---------------------------------------------------------------------------

export const getAuthor = (slug: string) => authors.find((a) => a.slug === slug);

export const getBook = (slug: string) => books.find((b) => b.slug === slug);

export const booksByAuthor = (authorSlug: string) =>
  books
    .filter((b) => b.authorSlug === authorSlug)
    .sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));

export const authorName = (slug: string) => getAuthor(slug)?.name ?? "";

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const shortDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

/** Books releasing on or after today, soonest first. */
export const upcomingBooks = () => {
  const today = new Date().toISOString().slice(0, 10);
  return books
    .filter((b) => b.releaseDate >= today)
    .sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
};

/** Books already published, newest first. */
export const liveBooks = () =>
  books
    .filter((b) => b.status === "live")
    .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));

/** The next book due out — drives the homepage hero. */
export const nextRelease = () => upcomingBooks()[0];
