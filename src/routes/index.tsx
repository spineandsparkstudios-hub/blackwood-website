import { createFileRoute, Link } from '@tanstack/react-router';
import { Heart, Sparkles, BookOpen, UserCheck, Star } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Blackwood Publishing Agency | Home of Premium Romance' },
      { name: 'description', content: 'Explore premium romance across all subgenres at Blackwood Publishing Agency. fall in love on every page.' }
    ]
  }),
  component: Index,
});

function Index() {


  return (
    <div className="flex flex-col bg-[#2B1B2E] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center py-20 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3D2438] via-[#2B1B2E] to-[#1A1418] border-b border-[#C9A24B]/10">
        <div className="absolute inset-0 bg-[url('/images/hero.png')] opacity-15 bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-4xl text-center mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A24B]/30 bg-[#3D2438]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-6 sm:mb-8">
            <Sparkles className="h-3 w-3 animate-pulse" />
            A Brand New Realm of Desire
          </span>
          
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5EFE6] leading-[1.1] mb-6">
            Where Every Love Story <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B4C0] via-[#C9A24B] to-[#E8B4C0]">
              Finds Its Reader
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#F5EFE6]/80 font-sans max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            We publish high-end, immersive, and expertly crafted romance. From heart-pounding tension to sweeping fantasy, discover your next obsidian obsession.
          </p>
          
          {/* Email Capture */}
          <div className="max-w-md mx-auto">
            <NewsletterForm placeholder="Enter your email for early releases..." buttonLabel="Get Early Access" />
          </div>
        </div>
      </section>

      {/* 2. BRAND PROMISE STRIP */}
      <section className="bg-[#1A1418] py-8 border-b border-[#C9A24B]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Heart className="h-5 w-5 text-[#E8B4C0]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">Unmatched Tension</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#E8B4C0]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">Expertly Published</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <UserCheck className="h-5 w-5 text-[#E8B4C0]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">Beloved Characters</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="h-5 w-5 text-[#E8B4C0]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">Luxe Physical Books</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED RELEASE SPOTLIGHT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2B1B2E] to-[#1A1418]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">Lead Title Launching Next Week</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#F5EFE6]">Featured Spotlight</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Book Cover Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] opacity-40 blur-xl group-hover:opacity-65 transition-opacity"></div>
                <div className="relative overflow-hidden rounded-xl shadow-2xl border border-[#C9A24B]/30">
                  <img 
                    src="/images/cover-vampire.png" 
                    alt="I Accidentally Married a Vampire" 
                    className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8B4C0]/10 border border-[#E8B4C0]/30 px-3.5 py-1 text-xs font-semibold text-[#E8B4C0]">
                  Paranormal Rom-Com
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl font-bold mt-3 text-[#F5EFE6]">I Accidentally Married a Vampire</h3>
                <p className="text-sm text-[#C9A24B] tracking-wider uppercase mt-1">By Everly Quinn</p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#F5EFE6]/80 leading-relaxed">
                <p className="font-medium italic text-[#E8B4C0]">"Harper thinks her biggest mistake was marrying a gorgeous stranger after celebrating her promotion in Vegas... until he shows up at her apartment with fangs."</p>
                <p>Lucien reveals their impulsive wedding triggered an ancient supernatural law naming Harper his permanent mate, and rival vampire clans now see her as leverage in a brewing war. The only way to survive is to stay married. The longer they pretend, the less pretending it becomes.</p>
              </div>

              {/* Tropes */}
              <div className="flex flex-wrap gap-2">
                {['Marriage of Convenience', 'Vampire Prince', 'Forced Proximity', 'Fated Mates', 'Touch Her and Die', 'Paranormal Politics'].map((trope) => (
                  <span key={trope} className="rounded-full border border-[#C9A24B]/20 bg-[#3D2438]/40 px-3 py-1 text-xs font-medium text-[#F5EFE6]/90">
                    {trope}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/books/i-accidentally-married-a-vampire"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#1A1418] hover:opacity-95 transition-opacity shadow-lg"
                >
                  Preorder Now
                </Link>
                <Link 
                  to="/authors"
                  className="inline-flex items-center justify-center rounded-full border border-[#C9A24B]/40 hover:bg-[#3D2438]/50 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#F5EFE6] transition-colors"
                >
                  Meet Everly Quinn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR AUTHORS PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2B1B2E] border-t border-[#C9A24B]/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">The Minds Behind the Magic</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-[#F5EFE6]">Founding Authors</h2>
            <p className="text-sm text-[#F5EFE6]/60 max-w-md mx-auto mt-3">
              Diverse voices delivering sweeping romance across multiple worlds and subgenres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Everly Quinn */}
            <div className="rounded-xl border border-[#C9A24B]/20 bg-[#1A1418]/60 p-6 flex flex-col justify-between hover:border-[#C9A24B]/40 transition-colors">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] flex items-center justify-center font-serif text-[#1A1418] font-bold text-xl">EQ</div>
                <h3 className="font-serif text-2xl font-bold text-[#F5EFE6]">Everly Quinn</h3>
                <p className="text-xs uppercase text-[#C9A24B] tracking-wider">Paranormal Rom-Com</p>
                <p className="text-sm text-[#F5EFE6]/70 leading-relaxed">
                  Everly Quinn writes laugh-out-loud paranormal romance featuring vampires, demons, dragons, and immortals stumbling into romance.
                </p>
              </div>
              <Link to="/authors" className="text-sm font-semibold text-[#E8B4C0] hover:text-[#C9A24B] transition-colors mt-6 inline-block">Read Bio →</Link>
            </div>

            {/* Scarlett Vale */}
            <div className="rounded-xl border border-[#C9A24B]/20 bg-[#1A1418]/60 p-6 flex flex-col justify-between hover:border-[#C9A24B]/40 transition-colors">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] flex items-center justify-center font-serif text-[#1A1418] font-bold text-xl">SV</div>
                <h3 className="font-serif text-2xl font-bold text-[#F5EFE6]">Scarlett Vale</h3>
                <p className="text-xs uppercase text-[#C9A24B] tracking-wider">Dark Romantasy</p>
                <p className="text-sm text-[#F5EFE6]/70 leading-relaxed">
                  Scarlett Vale writes dark romantasy featuring powerful heroines, dangerous rulers, forbidden attraction, and high-stakes magic.
                </p>
              </div>
              <Link to="/authors" className="text-sm font-semibold text-[#E8B4C0] hover:text-[#C9A24B] transition-colors mt-6 inline-block">Read Bio →</Link>
            </div>

            {/* Zora Monroe */}
            <div className="rounded-xl border border-[#C9A24B]/20 bg-[#1A1418]/60 p-6 flex flex-col justify-between hover:border-[#C9A24B]/40 transition-colors">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] flex items-center justify-center font-serif text-[#1A1418] font-bold text-xl">ZM</div>
                <h3 className="font-serif text-2xl font-bold text-[#F5EFE6]">Zora Monroe</h3>
                <p className="text-xs uppercase text-[#C9A24B] tracking-wider">Contemporary Magical Legacy</p>
                <p className="text-sm text-[#F5EFE6]/70 leading-relaxed">
                  Zora Monroe writes contemporary fantasy romance rooted in legacy, power, hidden magic, and high-stakes secret societies.
                </p>
              </div>
              <Link to="/authors" className="text-sm font-semibold text-[#E8B4C0] hover:text-[#C9A24B] transition-colors mt-6 inline-block">Read Bio →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER SIGNUP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3D2438] to-[#1A1418] border-t border-[#C9A24B]/10">
        <div className="mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EFE6]">Never Miss a Swoon-Worthy Moment</h2>
          <p className="text-sm sm:text-base text-[#F5EFE6]/80 max-w-xl mx-auto leading-relaxed">
            Subscribe to our newsletter to receive advance review copies (ARCs), beautiful character artwork releases, and exclusive author Q&As.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm placeholder="Enter your email address..." buttonLabel="Join the Circle" />
          </div>
        </div>
      </section>

    </div>
  );
}
