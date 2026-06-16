import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Calendar, BookOpen, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books Catalog | Blackwood Publishing Agency" },
      { name: "description", content: "Explore the Blackwood Publishing romance books catalog. Sweeping contemporary romance, dark romantasy, and paranormal romantic comedy." }
    ]
  }),
  component: BooksCatalog,
});

const booksList = [
  {
    id: "i-accidentally-married-a-vampire",
    title: "I Accidentally Married a Vampire",
    author: "Everly Quinn",
    status: "Releasing Next Week",
    cover: "/images/cover-vampire.png",
    subgenre: "Paranormal Rom-Com",
    tropes: ["Marriage of Convenience", "Vampire Prince", "Fated Mates"]
  },
  {
    id: "the-last-daughter-of-briar-house",
    title: "The Last Daughter of Briar House",
    author: "Zora Monroe",
    status: "Coming Soon",
    cover: "/images/cover-briar-house.png",
    subgenre: "Magical Legacy Romance",
    tropes: ["Secret Societies", "Hidden Power", "Forbidden Romance"]
  },
  {
    id: "the-shadow-kings-bargain",
    title: "The Shadow King's Bargain",
    author: "Scarlett Vale",
    status: "Coming Soon",
    cover: "/images/cover-shadow-king.png",
    subgenre: "Dark Romantasy",
    tropes: ["Enemies to Lovers", "Royal Bargain", "Obsession"]
  },
  {
    id: "my-boss-is-a-demon",
    title: "My Boss is a Demon",
    author: "Everly Quinn",
    status: "Coming Soon",
    cover: "/images/cover-coming-soon.svg",
    subgenre: "Paranormal Rom-Com",
    tropes: ["Office Romance", "Demon Lord", "Banter"]
  },
  {
    id: "the-secret-keepers",
    title: "The Secret Keepers",
    author: "Zora Monroe",
    status: "Coming Soon",
    cover: "/images/cover-coming-soon.svg",
    subgenre: "Magical Legacy Romance",
    tropes: ["Ancient Society", "Slow Burn", "Fated Lovers"]
  },
  {
    id: "blood-oath-academy",
    title: "Blood Oath Academy",
    author: "Scarlett Vale",
    status: "Coming Soon",
    cover: "/images/cover-coming-soon.svg",
    subgenre: "Dark Romantasy",
    tropes: ["Dark Academy", "Enemies to Lovers", "Blood Pact"]
  },
  {
    id: "i-summoned-a-demon-for-relationship-advice",
    title: "I Summoned a Demon for Relationship Advice",
    author: "Everly Quinn",
    status: "Coming Soon",
    cover: "/images/cover-coming-soon.svg",
    subgenre: "Paranormal Rom-Com",
    tropes: ["Accidental Summoning", "Love Triangle Coach", "Fated Lovers"]
  },
  {
    id: "the-thirteenth-circle",
    title: "The Thirteenth Circle",
    author: "Zora Monroe",
    status: "Coming Soon",
    cover: "/images/cover-coming-soon.svg",
    subgenre: "Magical Legacy Romance",
    tropes: ["Ancient Forces", "Covenant", "Second Chance"]
  },
  {
    id: "the-villain-s-bride",
    title: "The Villain's Bride",
    author: "Scarlett Vale",
    status: "Coming Soon",
    cover: "/images/cover-coming-soon.svg",
    subgenre: "Dark Romantasy",
    tropes: ["Arranged Marriage", "Villain Protagonist", "Touch Her & Die"]
  },
  {
    id: "my-roommate-is-a-dragon",
    title: "My Roommate is a Dragon",
    author: "Everly Quinn",
    status: "Coming Soon",
    cover: "/images/cover-coming-soon.svg",
    subgenre: "Paranormal Rom-Com",
    tropes: ["Roommates to Lovers", "Dragon Shifter", "Heartwarming"]
  },
  {
    id: "the-midnight-covenant",
    title: "The Midnight Covenant",
    author: "Zora Monroe",
    status: "Coming Soon",
    cover: "/images/cover-coming-soon.svg",
    subgenre: "Magical Legacy Romance",
    tropes: ["Legacy Power", "Forbidden Alliance", "Secret Society"]
  },
  {
    id: "the-prince-of-black-roses",
    title: "The Prince of Black Roses",
    author: "Scarlett Vale",
    status: "Coming Soon",
    cover: "/images/cover-coming-soon.svg",
    subgenre: "Dark Romantasy",
    tropes: ["Gothic Castle", "Enemies to Lovers", "Forbidden Spell"]
  }
];

function BooksCatalog() {
  return (
    <div className="bg-[#2B1B2E] text-[#F5EFE6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A24B]/30 bg-[#3D2438] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-4">
            <BookOpen className="h-3.5 w-3.5" />
            Discover Your Next Obsidian Obsession
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F5EFE6]">
            The Romance Catalog
          </h1>
          <p className="text-base sm:text-lg text-[#F5EFE6]/70 mt-4 leading-relaxed">
            From playful paranormal banter to epic dark romantasy and magical legacy dynastic family secrets. Filtered by romance, built for escape.
          </p>
        </div>

        {/* BOOK GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {booksList.map((book) => (
            <div 
              key={book.id} 
              className="group flex flex-col justify-between rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/50 p-4 hover:border-[#C9A24B]/30 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/10"
            >
              <div>
                {/* Book Cover Container */}
                <div className="relative overflow-hidden rounded-lg aspect-[2/3] mb-4 bg-[#2B1B2E] border border-[#C9A24B]/10">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md shadow-lg ${
                      book.status === "Releasing Next Week" 
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white" 
                        : "bg-[#3D2438]/90 border border-[#C9A24B]/30 text-[#C9A24B]"
                    }`}>
                      {book.status}
                    </span>
                  </div>
                </div>

                {/* Subgenre & Title */}
                <span className="text-[10px] uppercase tracking-wider text-[#E8B4C0] font-semibold">
                  {book.subgenre}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#F5EFE6] leading-snug mt-1 group-hover:text-[#C9A24B] transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-[#F5EFE6]/60 font-sans mt-0.5">By {book.author}</p>

                {/* Tropes tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {book.tropes.map((trope) => (
                    <span key={trope} className="text-[9px] bg-[#2B1B2E] border border-[#C9A24B]/10 px-2 py-0.5 rounded-full text-[#F5EFE6]/85">
                      {trope}
                    </span>
                  ))}
                </div>
              </div>

              {/* View/Preorder Action Button */}
              <div className="mt-5 pt-4 border-t border-[#C9A24B]/5">
                {book.id === "i-accidentally-married-a-vampire" ? (
                  <Link 
                    to="/books/i-accidentally-married-a-vampire"
                    className="flex w-full items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] py-2 text-xs font-bold uppercase tracking-wider text-[#1A1418] hover:opacity-90 transition-opacity"
                  >
                    Preorder Page
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                ) : (
                  <button 
                    disabled 
                    className="flex w-full items-center justify-center gap-1.5 rounded-md bg-[#2B1B2E] border border-[#C9A24B]/20 py-2 text-xs font-bold uppercase tracking-wider text-[#C9A24B]/60 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
