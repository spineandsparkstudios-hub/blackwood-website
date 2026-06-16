import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Heart, Anchor, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Blackwood Publishing Agency" },
      { name: "description", content: "Discover the Blackwood mission: empowering authors and delivering sweeping, unforgettable, and premium romance across all subgenres." }
    ]
  }),
  component: AboutPage,
});

function About() {
  return (
    <div className="bg-[#2B1B2E] text-[#F5EFE6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* HERO INTRO */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A24B]/30 bg-[#3D2438] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-4">
            <Sparkles className="h-3 w-3" />
            Our Vision & Mission
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F5EFE6]">
            Romance, Expertly Published.
          </h1>
          <p className="text-base sm:text-lg text-[#F5EFE6]/70 mt-4 leading-relaxed">
            Blackwood Publishing Agency is a boutique romance publisher born out of a desire to elevate voice-driven, highly immersive, and emotional storytelling.
          </p>
        </div>

        {/* IMAGE BREAK & BRAND STORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative overflow-hidden rounded-xl border border-[#C9A24B]/20 shadow-2xl">
            <img 
              src="/images/hero.png" 
              alt="Blackwood Brand Teaser" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFE6]">
              A Sanctuary for Every Romance Reader
            </h2>
            <p className="text-sm sm:text-base text-[#F5EFE6]/80 leading-relaxed">
              We do not limit ourselves to dragons or simple high schools. At Blackwood, we believe love is a multi-faceted magic. Whether you crave the cozy, witty banter of paranormal roommate comedies, the high stakes and dark political intrigue of dark romantasy, or contemporary family magic hidden in secret societies—we are your home.
            </p>
            <p className="text-sm sm:text-base text-[#F5EFE6]/80 leading-relaxed">
              Our founding mission is simple: to connect ravenous bookworms with unforgettable, voice-driven stories packaged in luxurious physical covers with gorgeous detailing.
            </p>
          </div>
        </div>

        {/* GUIDING PRINCIPLES */}
        <div className="rounded-2xl border border-[#C9A24B]/10 bg-[#1A1418]/50 p-8 sm:p-12 mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center mb-10 text-[#C9A24B]">
            Our Core Promises
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center md:text-left">
              <Heart className="h-6 w-6 text-[#E8B4C0] mx-auto md:mx-0" />
              <h3 className="font-serif text-lg font-bold">Unapologetic Intimacy</h3>
              <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
                We champion emotional intensity, magnetic tension, and high-heat chemistry that feels earned and beautifully written.
              </p>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <Anchor className="h-6 w-6 text-[#E8B4C0] mx-auto md:mx-0" />
              <h3 className="font-serif text-lg font-bold">Author-Centric Support</h3>
              <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
                We provide our authors with meticulous editing, custom branding, high-concept visual asset design, and aggressive marketing.
              </p>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <ShieldCheck className="h-6 w-6 text-[#E8B4C0] mx-auto md:mx-0" />
              <h3 className="font-serif text-lg font-bold">Bespoke Physical Quality</h3>
              <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
                From gold-foil edges to beautiful hidden covers and custom sprayed designs—we make books worth holding.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function AboutPage() {
  return <About />;
}
