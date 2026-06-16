import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowLeft, Shield } from "lucide-react";

export const Route = createFileRoute("/authors/scarlett-vale")({
  head: () => ({
    meta: [
      { title: "Scarlett Vale | Blackwood Publishing Agency" },
      { name: "description", content: "Meet Scarlett Vale, author of dark romantasy featuring powerful heroines, dangerous rulers, and high-stakes magic." }
    ]
  }),
  component: ScarlettValePage,
});

function ScarlettValePage() {
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
            <div className="h-48 w-48 sm:h-64 sm:w-48 rounded-2xl bg-gradient-to-tr from-purple-950/30 to-rose-950/30 text-[#C9A24B] font-serif font-black text-6xl sm:text-7xl flex items-center justify-center border border-[#C9A24B]/20 shadow-2xl">
              SV
            </div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B4C0] bg-[#3D2438] border border-[#C9A24B]/20 px-3.5 py-1.5 rounded-full">
                Dark Romantasy
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-4 text-[#F5EFE6]">Scarlett Vale</h1>
              <p className="text-xs uppercase text-[#C9A24B] tracking-wider mt-1">Series: SHADOW KING CHRONICLES</p>
            </div>
            <p className="text-sm sm:text-base text-[#F5EFE6]/80 leading-relaxed">
              Scarlett Vale writes dark romantasy featuring powerful heroines, dangerous rulers, forbidden attraction, and high-stakes magic, blending obsession, political intrigue, epic fantasy, and unforgettable romance.
            </p>
            <div className="border-t border-[#C9A24B]/10 pt-6">
              <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#C9A24B] mb-2">Comps & Fans Of:</h3>
              <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
                Rebecca Yarros, Callie Hart, Carissa Broadbent, Raven Kennedy
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Book */}
        <div className="mt-16 rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/40 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3">
            <img 
              src="/images/cover-shadow-king.png" 
              alt="The Shadow King's Bargain Book Cover" 
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-[#C9A24B]/20"
            />
          </div>
          <div className="md:col-span-9 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A24B] bg-[#3D2438] border border-[#C9A24B]/30 px-2.5 py-1 rounded-md">Coming Soon</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFE6]">The Shadow King's Bargain</h3>
            <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
              A fierce heroine, a powerful ruler, forbidden shadow bargains, and dark political games. When shadows crawl closer, desire burns even brighter.
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
