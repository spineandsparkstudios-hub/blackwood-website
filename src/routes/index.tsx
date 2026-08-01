import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Sparkles, BookOpen, UserCheck, ArrowRight, Calendar } from "lucide-react";
import NewsletterForm from "../components/NewsletterForm";
import BookCard from "../components/BookCard";
import BookCover from "../components/BookCover";
import {
  authors,
  books,
  upcomingBooks,
  liveBooks,
  authorName,
  formatDate,
  shortDate,
} from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blackwood Publishing Agency | Home of Premium Romance" },
      {
        name: "description",
        content:
          "Explore premium romance across all subgenres at Blackwood Publishing Agency. Fall in love on every page.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const upcoming = upcomingBooks();
  const thisWeek = upcoming.slice(0, 4);
  const featured = upcoming[0];
  const recent = liveBooks().slice(0, 4);

  return (
    <div className="flex flex-col overflow-hidden bg-[#2B1B2E]">
      {/* 1. HERO */}
      <section className="relative flex min-h-[80vh] items-center justify-center border-b border-[#C9A24B]/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3D2438] via-[#2B1B2E] to-[#1A1418] bg-cover bg-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-15"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#C9A24B]/30 bg-[#3D2438]/80 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#C9A24B] uppercase sm:mb-8">
            <Sparkles className="h-3 w-3 animate-pulse" />
            {books.length} Titles · {authors.length} Authors
          </span>

          <h1 className="mb-6 font-serif text-4xl leading-[1.1] font-bold tracking-tight text-[#F5EFE6] sm:text-6xl lg:text-7xl">
            Where Every Love Story <br />
            <span className="bg-gradient-to-r from-[#E8B4C0] via-[#C9A24B] to-[#E8B4C0] bg-clip-text text-transparent">
              Finds Its Reader
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl font-sans text-base leading-relaxed text-[#F5EFE6]/80 sm:mb-10 sm:text-lg lg:text-xl">
            We publish high-end, immersive, expertly crafted romance. Vampire courts,
            wolf packs, blood oaths and billionaires — every title free in Kindle
            Unlimited.
          </p>

          <div className="mx-auto max-w-md">
            <NewsletterForm
              placeholder="Enter your email for early releases..."
              buttonLabel="Get Early Access"
            />
          </div>
        </div>
      </section>

      {/* 2. RELEASE WEEK BANNER */}
      {thisWeek.length > 0 && (
        <section className="border-b border-[#C9A24B]/10 bg-[#1A1418] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A24B]/30 bg-[#3D2438] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#C9A24B] uppercase">
                <Calendar className="h-3.5 w-3.5" />
                Releasing Now
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[#F5EFE6] sm:text-4xl">
                Coming Next
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-[#F5EFE6]/70">
                A new release almost every day. Join the list and the buy link lands in
                your inbox the moment each book goes live.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {thisWeek.map((book) => (
                <Link
                  key={book.slug}
                  to="/books/$bookSlug"
                  params={{ bookSlug: book.slug }}
                  className="group text-center"
                >
                  <div className="mb-3 aspect-[2/3] overflow-hidden rounded-lg border border-[#C9A24B]/15 shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                    <BookCover book={book} />
                  </div>
                  <p className="text-[10px] font-bold tracking-widest text-[#C9A24B] uppercase">
                    {shortDate(book.releaseDate)}
                  </p>
                  <h3 className="mt-1 font-serif text-sm leading-tight font-bold text-[#F5EFE6] transition-colors group-hover:text-[#C9A24B]">
                    {book.title}
                  </h3>
                  <p className="text-[11px] text-[#F5EFE6]/60">
                    {authorName(book.authorSlug)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. BRAND PROMISE STRIP */}
      <section className="border-b border-[#C9A24B]/10 bg-[#2B1B2E] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div className="flex flex-col items-center gap-2">
              <Heart className="h-5 w-5 text-[#E8B4C0]" />
              <span className="text-xs font-semibold tracking-wider text-[#C9A24B] uppercase">
                Unmatched Tension
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#E8B4C0]" />
              <span className="text-xs font-semibold tracking-wider text-[#C9A24B] uppercase">
                Expertly Published
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#E8B4C0]" />
              <span className="text-xs font-semibold tracking-wider text-[#C9A24B] uppercase">
                Free in Kindle Unlimited
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <UserCheck className="h-5 w-5 text-[#E8B4C0]" />
              <span className="text-xs font-semibold tracking-wider text-[#C9A24B] uppercase">
                Diverse Voices
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED RELEASE */}
      {featured && (
        <section className="bg-[#2B1B2E] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="aspect-[2/3] overflow-hidden rounded-xl border border-[#C9A24B]/20 shadow-2xl">
                <BookCover book={featured} />
              </div>
            </div>
            <div className="space-y-5 md:col-span-8">
              <span className="rounded-md bg-[#C9A24B]/10 px-2.5 py-1 text-[10px] font-bold tracking-widest text-[#C9A24B] uppercase">
                Next Release · {formatDate(featured.releaseDate)}
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#F5EFE6] sm:text-4xl">
                {featured.title}
                {featured.subtitle && (
                  <span className="block text-xl font-normal text-[#C9A24B] italic">
                    {featured.subtitle}
                  </span>
                )}
              </h2>
              <p className="text-sm text-[#F5EFE6]/70">
                by {authorName(featured.authorSlug)}
              </p>
              <p className="text-sm leading-relaxed text-[#F5EFE6]/85 sm:text-base">
                {featured.blurb}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {featured.tropes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#C9A24B]/15 bg-[#1A1418]/60 px-3 py-1 text-[10px] text-[#F5EFE6]/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/books/$bookSlug"
                params={{ bookSlug: featured.slug }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] px-7 py-3 text-sm font-bold tracking-wider text-[#1A1418] uppercase transition-opacity hover:opacity-90"
              >
                See the Book
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 5. OUT NOW */}
      {recent.length > 0 && (
        <section className="border-t border-[#C9A24B]/10 bg-[#1A1418] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#F5EFE6] sm:text-4xl">
                  Out Now
                </h2>
                <p className="mt-2 text-sm text-[#F5EFE6]/70">
                  Start reading tonight. All free in Kindle Unlimited.
                </p>
              </div>
              <Link
                to="/books"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#C9A24B] uppercase transition-colors hover:text-[#E8B4C0]"
              >
                View Full Catalog
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {recent.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. AUTHORS */}
      <section className="bg-[#2B1B2E] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#F5EFE6] sm:text-4xl">
              Our Authors
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[#F5EFE6]/70">
              {authors.length} voices across paranormal, romantasy, urban, billionaire
              and Southern gothic romance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {authors.slice(0, 12).map((a) => (
              <Link
                key={a.slug}
                to="/authors/$authorSlug"
                params={{ authorSlug: a.slug }}
                className="group flex flex-col items-center rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/50 p-4 text-center transition-all hover:-translate-y-1 hover:border-[#C9A24B]/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#C9A24B]/20 bg-gradient-to-tr from-[#3D2438] to-[#C9A24B]/20 font-serif text-lg font-black text-[#C9A24B]">
                  {a.initials}
                </div>
                <p className="mt-3 font-serif text-xs leading-tight font-bold text-[#F5EFE6] transition-colors group-hover:text-[#C9A24B]">
                  {a.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/authors"
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A24B]/30 px-7 py-3 text-xs font-bold tracking-wider text-[#C9A24B] uppercase transition-colors hover:border-[#C9A24B]"
            >
              Meet All {authors.length} Authors
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER CTA */}
      <section className="border-t border-[#C9A24B]/10 bg-gradient-to-b from-[#1A1418] to-[#2B1B2E] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-[#F5EFE6] sm:text-4xl">
            The List Knows First
          </h2>
          <p className="mt-3 mb-8 text-sm text-[#F5EFE6]/70 sm:text-base">
            Release dates, cover reveals, and buy links the moment they go live — before
            anywhere else.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
