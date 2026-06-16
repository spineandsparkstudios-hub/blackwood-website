import { Link } from '@tanstack/react-router';
import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#C9A24B]/20 bg-[#2B1B2E]/95 backdrop-blur-md text-[#F5EFE6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/images/logo.png" 
                alt="Blackwood Logo" 
                className="h-12 w-12 rounded-full border border-[#C9A24B]/30 object-cover transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#F5EFE6] via-[#E8B4C0] to-[#C9A24B]">
                  BLACKWOOD
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#C9A24B] font-sans">
                  Publishing Agency
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-[#C9A24B] transition-colors [&.active]:text-[#C9A24B]">
              Home
            </Link>
            <Link to="/books" className="hover:text-[#C9A24B] transition-colors [&.active]:text-[#C9A24B]">
              Books
            </Link>
            <Link to="/authors" className="hover:text-[#C9A24B] transition-colors [&.active]:text-[#C9A24B]">
              Our Authors
            </Link>
            <Link to="/about" className="hover:text-[#C9A24B] transition-colors [&.active]:text-[#C9A24B]">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-[#C9A24B] transition-colors [&.active]:text-[#C9A24B]">
              Submissions
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link 
              to="/books/i-accidentally-married-a-vampire"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A1418] hover:opacity-90 transition-opacity shadow-lg shadow-black/20"
            >
              <Heart className="h-3.5 w-3.5 fill-current" />
              Featured Release
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#F5EFE6] hover:text-[#C9A24B] hover:bg-[#3D2438] focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2B1B2E] border-b border-[#C9A24B]/10 animate-fade-in">
          <div className="space-y-1 px-4 pb-6 pt-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-[#3D2438] hover:text-[#C9A24B] transition-colors [&.active]:text-[#C9A24B]"
            >
              Home
            </Link>
            <Link
              to="/books"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-[#3D2438] hover:text-[#C9A24B] transition-colors [&.active]:text-[#C9A24B]"
            >
              Books
            </Link>
            <Link
              to="/authors"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-[#3D2438] hover:text-[#C9A24B] transition-colors [&.active]:text-[#C9A24B]"
            >
              Our Authors
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-[#3D2438] hover:text-[#C9A24B] transition-colors [&.active]:text-[#C9A24B]"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-[#3D2438] hover:text-[#C9A24B] transition-colors [&.active]:text-[#C9A24B]"
            >
              Submissions
            </Link>
            <div className="pt-4">
              <Link
                to="/books/i-accidentally-married-a-vampire"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] py-3 text-sm font-semibold uppercase tracking-wider text-[#1A1418] shadow-lg hover:opacity-90 transition-opacity"
              >
                <Heart className="h-4 w-4 fill-current" />
                Featured Release
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
