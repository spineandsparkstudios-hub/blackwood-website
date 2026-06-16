import { Link } from '@tanstack/react-router';
import { Instagram, Facebook, Compass } from 'lucide-react';
import NewsletterForm from './NewsletterForm';
import { SOCIAL_INSTAGRAM, SOCIAL_FACEBOOK, SOCIAL_THREADS } from '../lib/site-config';

export default function Footer() {
  return (
    <footer className="bg-[#1A1418] border-t border-[#C9A24B]/10 text-[#F5EFE6] font-sans">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Blackwood Logo" 
                className="h-10 w-12 object-cover rounded-full border border-[#C9A24B]/20"
              />
              <span className="font-serif text-lg font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F5EFE6] to-[#C9A24B]">
                BLACKWOOD
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#F5EFE6]/70 max-w-sm">
              Where every love story finds its reader. We publish premium romance across contemporary, romantasy, dark romance, and rom-com subgenres.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={SOCIAL_INSTAGRAM} aria-label="Instagram" className="text-[#F5EFE6]/50 hover:text-[#C9A24B] transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SOCIAL_FACEBOOK} aria-label="Facebook" className="text-[#F5EFE6]/50 hover:text-[#C9A24B] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={SOCIAL_THREADS} aria-label="Threads" className="text-[#F5EFE6]/50 hover:text-[#C9A24B] transition-colors">
                <Compass className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="text-[#F5EFE6]/70 hover:text-[#C9A24B] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/books" className="text-[#F5EFE6]/70 hover:text-[#C9A24B] transition-colors">Books Catalog</Link>
              </li>
              <li>
                <Link to="/authors" className="text-[#F5EFE6]/70 hover:text-[#C9A24B] transition-colors">Our Authors</Link>
              </li>
              <li>
                <Link to="/about" className="text-[#F5EFE6]/70 hover:text-[#C9A24B] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F5EFE6]/70 hover:text-[#C9A24B] transition-colors">Submissions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">Authors & Imprints</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#F5EFE6]/70">
              <li>
                <Link to="/authors" className="hover:text-[#C9A24B] transition-colors">Everly Quinn (Comedy)</Link>
              </li>
              <li>
                <Link to="/authors" className="hover:text-[#C9A24B] transition-colors">Scarlett Vale (Dark Romantasy)</Link>
              </li>
              <li>
                <Link to="/authors" className="hover:text-[#C9A24B] transition-colors">Zora Monroe (Magical Legacy)</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">Join the Inner Circle</h3>
            <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
              Get early access chapters, character art drops, and release alerts straight to your inbox.
            </p>
            <NewsletterForm layout="stack" buttonLabel="Subscribe" />
          </div>

        </div>

        <div className="mt-12 border-t border-[#C9A24B]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F5EFE6]/50">
          <p>© 2026 Blackwood Publishing Agency. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Romance, expertly published.</p>
        </div>
      </div>
    </footer>
  );
}
