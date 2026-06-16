import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowLeft, Sparkle } from "lucide-react";

export const Route = createFileRoute("/authors/zora-monroe")({
  head: () => ({
    meta: [
      { title: "Zora Monroe | Blackwood Publishing Agency" },
      { name: "description", content: "Meet Zora Monroe, author of contemporary magical legacy romance including The Midnight Society series." }
    ]
  }),
  component: ZoraMonroePage,
});

function ZoraMonroePage() {
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
            <div className="h-48 w-48 sm:h-64 sm:w-48 rounded-2xl bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 text-[#C9A24B] font-serif font-black text-6xl sm:text-7xl flex items-center justify-center border border-[#C9A24B]/20 shadow-2xl">
              ZM
            </div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B4C0] bg-[#3D2438] border border-[#C9A24B]/20 px-3.5 py-1.5 rounded-full">
                Contemporary Magical Legacy
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-4 text-[#F5EFE6]">Zora Monroe</h1>
              <p className="text-xs uppercase text-[#C9A24B] tracking-wider mt-1">Series: THE MIDNIGHT SOCIETY</p>
            </div>
            <p className="text-sm sm:text-base text-[#F5EFE6]/80 leading-relaxed">
              Zora Monroe writes contemporary fantasy romance rooted in legacy, power, hidden magic, and secret societies, featuring powerful women discovering extraordinary destinies while navigating love, family secrets, and ancient forces hidden in plain sight.
            </p>
            <div className="border-t border-[#C9A24B]/10 pt-6">
              <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#C9A24B] mb-2">Comps & Fans Of:</h3>
              <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
                Tananarive Due, N.K. Jemisin, S.A. Cosby-meets-romantasy, Legendborn
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Book */}
        <div className="mt-16 rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/40 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3">
            <img 
              src="/images/cover-briar-house.png" 
              alt="The Last Daughter of Briar House Book Cover" 
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-[#C9A24B]/20"
            />
          </div>
          <div className="md:col-span-9 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A24B] bg-[#3D2438] border border-[#C9A24B]/30 px-2.5 py-1 rounded-md">Coming Soon</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFE6]">The Last Daughter of Briar House</h3>
            <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
              A historic mansion, a hidden lineage, family secrets, and an ancient magical force that binds her to the one she must never love.
            </p>
            <div className="pt-2">
              <button 
                disabled
                className="rounded-full bg-[#2B1B2E] border border-[#C9A24B]/30 px-5 py-2.5 text-xs font-bold uppercase text-[#C9A24B]/60 cursor-not-allowed"
              >
                Preorder Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
