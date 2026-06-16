import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/authors")({
  head: () => ({
    meta: [
      { title: "Our Authors | Blackwood Publishing Agency" },
      { name: "description", content: "Meet the founding authors of Blackwood Publishing Agency: Everly Quinn, Scarlett Vale, and Zora Monroe." }
    ]
  }),
  component: Authors,
});

const authorsList = [
  {
    id: "everly-quinn",
    name: "Everly Quinn",
    genre: "Paranormal Romantic Comedy",
    avatar: "EQ",
    bio: "Everly Quinn writes laugh-out-loud paranormal romance featuring vampires, demons, dragons, immortals, and the women who accidentally stumble into their worlds. Her stories combine humor, heart, spice, and supernatural chaos into addictive page-turners.",
    series: "SUPERNATURAL MISTAKES",
    comps: "Jessica Cage, Kimberly Lemming, Cassandra Gannon, K.F. Breene",
    color: "from-pink-500/10 to-amber-500/10"
  },
  {
    id: "scarlett-vale",
    name: "Scarlett Vale",
    genre: "Dark Romantasy",
    avatar: "SV",
    bio: "Scarlett Vale writes dark romantasy featuring powerful heroines, dangerous rulers, forbidden attraction, and high-stakes magic, blending obsession, political intrigue, epic fantasy, and unforgettable romance.",
    series: "SHADOW KING CHRONICLES",
    comps: "Rebecca Yarros, Callie Hart, Carissa Broadbent, Raven Kennedy",
    color: "from-purple-950/20 to-rose-950/20"
  },
  {
    id: "zora-monroe",
    name: "Zora Monroe",
    genre: "Contemporary Magical Legacy Romance",
    avatar: "ZM",
    bio: "Zora Monroe writes contemporary fantasy romance rooted in legacy, power, hidden magic, and secret societies, featuring powerful women discovering extraordinary destinies while navigating love, family secrets, and ancient forces hidden in plain sight.",
    series: "THE MIDNIGHT SOCIETY",
    comps: "Tananarive Due, N.K. Jemisin, S.A. Cosby-meets-romantasy, Legendborn",
    color: "from-blue-500/10 to-indigo-500/10"
  }
];

function Authors() {
  return (
    <div className="bg-[#2B1B2E] text-[#F5EFE6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A24B]/30 bg-[#3D2438] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-4">
            <Sparkles className="h-3 w-3" />
            The Masterminds of Romance
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F5EFE6]">
            Our Founding Authors
          </h1>
          <p className="text-base sm:text-lg text-[#F5EFE6]/70 mt-4 leading-relaxed">
            We are proud to represent some of the most innovative, voice-driven, and captivating authors in contemporary romance. Discover their worlds below.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {authorsList.map((author) => (
            <div 
              key={author.id}
              className={`rounded-2xl border border-[#C9A24B]/10 bg-gradient-to-r ${author.color} p-8 sm:p-12 lg:flex lg:gap-12 items-center transition-all hover:border-[#C9A24B]/30`}
            >
              <div className="flex-shrink-0 flex items-center justify-center h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 rounded-2xl bg-gradient-to-tr from-[#C9A24B] via-[#E8B4C0] to-[#C9A24B] text-[#1A1418] font-serif font-black text-4xl sm:text-5xl lg:text-6xl shadow-2xl mx-auto lg:mx-0 mb-6 lg:mb-0">
                {author.avatar}
              </div>

              <div className="flex-grow space-y-6 text-center lg:text-left">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B4C0] bg-[#3D2438] border border-[#C9A24B]/20 px-3.5 py-1.5 rounded-full">
                    {author.genre}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EFE6] mt-4">
                    {author.name}
                  </h2>
                </div>

                <div className="text-sm sm:text-base text-[#F5EFE6]/80 leading-relaxed max-w-3xl">
                  <p>{author.bio}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs tracking-wider uppercase border-t border-[#C9A24B]/10 pt-6">
                  <div>
                    <span className="text-[#C9A24B] font-semibold">Signature Series:</span>
                    <p className="text-[#F5EFE6]/90 font-serif font-medium tracking-normal normal-case text-sm mt-1">
                      {author.series}
                    </p>
                  </div>
                  <div>
                    <span className="text-[#C9A24B] font-semibold">Perfect For Fans Of:</span>
                    <p className="text-[#F5EFE6]/90 font-sans tracking-normal normal-case text-xs mt-1">
                      {author.comps}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-center lg:justify-start">
                  <Link 
                    to={`/authors/${author.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#C9A24B] hover:text-[#E8B4C0] transition-colors group"
                  >
                    View Books & Bio
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-2xl bg-[#1A1418] border border-[#C9A24B]/10 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3D2438]/40 via-[#1A1418] to-[#1A1418] opacity-50"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <p className="font-serif text-lg sm:text-2xl italic text-[#F5EFE6]/90 leading-relaxed">
              "Our commitment is to empower authors with high-grade editing, luxurious packaging, and aggressive strategic marketing, while delivering sweeping escapism to readers worldwide."
            </p>
            <div className="h-[1px] w-20 bg-[#C9A24B]/30 mx-auto"></div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">The Blackwood Publishing Promise</span>
          </div>
        </div>
      </div>
    </div>
  );
}
