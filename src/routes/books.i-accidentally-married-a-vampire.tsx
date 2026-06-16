import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ShoppingCart, ArrowLeft } from "lucide-react";
import NewsletterForm from "../components/NewsletterForm";

export const Route = createFileRoute("/books/i-accidentally-married-a-vampire")({
  head: () => ({
    meta: [
      { title: "I Accidentally Married a Vampire | Everly Quinn" },
      { name: "description", content: "Preorder I Accidentally Married a Vampire by Everly Quinn. The hilarious, witty, and spicy paranormal romantic comedy about Vegas marriage and a vampire prince." }
    ]
  }),
  component: LeadBookPage,
});

function LeadBookPage() {


  return (
    <div className="bg-[#2B1B2E] text-[#F5EFE6] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link to="/books" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C9A24B] hover:text-[#E8B4C0] transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cover art block */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] opacity-40 blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden border border-[#C9A24B]/30 shadow-2xl">
                <img 
                  src="/images/cover-vampire.png" 
                  alt="I Accidentally Married a Vampire Book Cover" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#C9A24B]">
              <Sparkles className="h-4 w-4" />
              <span>Includes premium gold foil detailing on hardcover</span>
            </div>
          </div>

          {/* Book Content Block */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E8B4C0]/10 border border-[#E8B4C0]/30 text-xs font-bold text-[#E8B4C0]">
                🔥 Hot Release Next Week
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5EFE6] leading-tight">
                I Accidentally Married a Vampire
              </h1>
              <p className="text-sm tracking-widest text-[#C9A24B] uppercase font-sans font-semibold">
                By Everly Quinn
              </p>
            </div>

            {/* Release status */}
            <div className="flex items-center gap-3 border-b border-[#C9A24B]/10 pb-4">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#C9A24B]">Releasing Next Week</span>
              <span className="text-xs text-[#F5EFE6]/60 uppercase tracking-wider">Join the list to be first to read it</span>
            </div>

            {/* Tropes tags */}
            <div className="flex flex-wrap gap-2">
              {['Marriage of Convenience', 'Vampire Prince', 'Forced Proximity', 'Fated Mates', 'Touch Her and Die', 'Paranormal Politics'].map((trope) => (
                <span key={trope} className="text-xs bg-[#1A1418] border border-[#C9A24B]/20 px-3 py-1 rounded-full text-[#F5EFE6]">
                  {trope}
                </span>
              ))}
            </div>

            {/* Summary */}
            <div className="space-y-4 text-sm sm:text-base text-[#F5EFE6]/80 leading-relaxed">
              <p className="font-medium text-[#E8B4C0] italic">
                "Harper thinks her biggest mistake was marrying a gorgeous stranger after celebrating her promotion in Vegas — until he shows up at her apartment with fangs and a royal entourage."
              </p>
              <p>
                Lucien reveals their impulsive wedding triggered an ancient supernatural law naming Harper his permanent mate, and rival vampire clans now see her as leverage in a brewing war. The only way to survive is to stay married.
              </p>
              <p>
                The longer they pretend, the less pretending it becomes. Can a mortal girl from Chicago handle the courts of the undead, or will her accidental prince steal her heart before he steals her blood?
              </p>
            </div>

            {/* CTA - notify on release */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#notify"
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#1A1418] hover:opacity-95 transition-opacity shadow-lg shadow-black/25 flex-1 sm:flex-initial"
              >
                <ShoppingCart className="h-4.5 w-4.5" />
                Notify Me on Release Day
              </a>
            </div>

            {/* Early ARC newsletter signup */}
            <div id="notify" className="scroll-mt-24 rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/40 p-6 space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#C9A24B]">Get Sneak Peeks & Character Art</h3>
              <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
                Join our special launch mailing list for Everly Quinn readers to receive the exclusive prequel novella and custom digital character stickers.
              </p>
              <NewsletterForm layout="stack" placeholder="Enter your email..." buttonLabel="Notify Me" successMessage="✨ You're on the list! Sneak peeks and release news are on the way." />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
