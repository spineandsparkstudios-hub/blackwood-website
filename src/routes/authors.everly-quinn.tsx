import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowLeft, Star, Heart } from "lucide-react";

export const Route = createFileRoute("/authors/everly-quinn")({
  head: () => ({
    meta: [
      { title: "Everly Quinn | Blackwood Publishing Agency" },
      { name: "description", content: "Meet Everly Quinn, author of laugh-out-loud paranormal romantic comedies including the Supernatural Mistakes series." }
    ]
  }),
  component: EverlyQuinnPage,
});

function EverlyQuinnPage() {
  return (
    <div className="bg-[#2B1B2E] text-[#F5EFE6] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link to="/authors" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C9A24B] hover:text-[#E8B4C0] transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Authors
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="h-48 w-48 sm:h-64 sm:w-48 rounded-2xl bg-gradient-to-tr from-pink-500/30 to-amber-500/30 text-[#C9A24B] font-serif font-black text-6xl sm:text-7xl flex items-center justify-center border border-[#C9A24B]/20 shadow-2xl">
              EQ
            </div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B4C0] bg-[#3D2438] border border-[#C9A24B]/20 px-3.5 py-1.5 rounded-full">
                Paranormal Rom-Com
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-4 text-[#F5EFE6]">Everly Quinn</h1>
              <p className="text-xs uppercase text-[#C9A24B] tracking-wider mt-1">Series: SUPERNATURAL MISTAKES</p>
            </div>
            <p className="text-sm sm:text-base text-[#F5EFE6]/80 leading-relaxed">
              Everly Quinn writes laugh-out-loud paranormal romance featuring vampires, demons, dragons, immortals, and the women who accidentally stumble into their worlds. Her stories combine humor, heart, spice, and supernatural chaos into addictive page-turners.
            </p>
            <div className="border-t border-[#C9A24B]/10 pt-6">
              <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#C9A24B] mb-2">Comps & Fans Of:</h3>
              <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
                Jessica Cage, Kimberly Lemming, Cassandra Gannon, K.F. Breene
              </p>
            </div>
          </div>
        </div>

        {/* Featured Book */}
        <div className="mt-16 rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/40 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3">
            <img 
              src="/images/cover-vampire.png" 
              alt="I Accidentally Married a Vampire Book Cover" 
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-[#C9A24B]/20"
            />
          </div>
          <div className="md:col-span-9 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md">Launching Next Week</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFE6]">I Accidentally Married a Vampire</h3>
            <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
              Vegas. Too much tequila. A handsome stranger. Fangs. Lucien reveals their impulsive wedding triggered an ancient supernatural law naming Harper his permanent mate.
            </p>
            <div className="pt-2">
              <Link 
                to="/books/i-accidentally-married-a-vampire"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1A1418] hover:opacity-90 transition-opacity"
              >
                Preorder Book Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
