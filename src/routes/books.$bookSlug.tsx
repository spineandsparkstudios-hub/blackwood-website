import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import {
  getBook,
  getAuthor,
  booksByAuthor,
  formatDate,
} from "@/lib/catalog";
import BookCover from "@/components/BookCover";
import BookCard from "@/components/BookCard";
import NewsletterForm from "@/components/NewsletterForm";

export const Route = createFileRoute("/books/$bookSlug")({
  loader: ({ params }) => {
    const book = getBook(params.bookSlug);
    if (!book) throw notFound();
    return book;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Book"} | Blackwood Publishing Agency` },
      { name: "description", content: loaderData?.blurb ?? "" },
    ],
  }),
  component: BookPage,
  notFoundComponent: () => (
    <div className="bg-[#2B1B2E] px-4 py-24 text-center text-[#F5EFE6]">
      <h1 className="font-serif text-3xl font-bold">Book not found</h1>
      <Link to="/books" className="mt-4 inline-block text-sm text-[#C9A24B] underline">
        Back to the catalog
      </Link>
    </div>
  ),
});

function BookPage() {
  const book = Route.useLoaderData();
  const author = getAuthor(book.authorSlug);
  const isLive = book.status === "live";
  const seriesMates = book.series
    ? booksByAuthor(book.authorSlug).filter(
        (b) => b.series === book.series && b.slug !== book.slug,
      )
    : [];

  return (
    <div className="bg-[#2B1B2E] px-4 py-12 text-[#F5EFE6] sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            to="/books"
            className="inline-flex items-center gap-1.5 text-xs tracking-wider text-[#C9A24B] uppercase transition-colors hover:text-[#E8B4C0]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* COVER */}
          <div className="md:col-span-4">
            <div className="aspect-[2/3] overflow-hidden rounded-xl border border-[#C9A24B]/20 shadow-2xl">
              <BookCover book={book} />
            </div>
          </div>

          {/* DETAILS */}
          <div className="space-y-5 md:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-md px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase ${
                  isLive
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-[#C9A24B]/10 text-[#C9A24B]"
                }`}
              >
                {isLive ? "Out Now" : "Coming Soon"}
              </span>
              {book.series && (
                <span className="text-[10px] font-semibold tracking-widest text-[#E8B4C0] uppercase">
                  {book.series}
                  {book.seriesNumber ? ` · Book ${book.seriesNumber}` : ""}
                </span>
              )}
            </div>

            <div>
              <h1 className="font-serif text-3xl font-bold text-[#F5EFE6] sm:text-4xl">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="mt-1 font-serif text-xl text-[#C9A24B] italic">
                  {book.subtitle}
                </p>
              )}
              {author && (
                <p className="mt-2 text-sm text-[#F5EFE6]/70">
                  by{" "}
                  <Link
                    to="/authors/$authorSlug"
                    params={{ authorSlug: author.slug }}
                    className="text-[#C9A24B] transition-colors hover:text-[#E8B4C0]"
                  >
                    {author.name}
                  </Link>
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#F5EFE6]/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#C9A24B]" />
                {formatDate(book.releaseDate)}
              </span>
              <span className="text-[#C9A24B]">{book.price}</span>
              <span>Free in Kindle Unlimited</span>
            </div>

            <p className="text-sm leading-relaxed text-[#F5EFE6]/85 sm:text-base">
              {book.blurb}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {book.tropes.map((trope) => (
                <span
                  key={trope}
                  className="rounded-full border border-[#C9A24B]/15 bg-[#1A1418]/60 px-3 py-1 text-[10px] tracking-wide text-[#F5EFE6]/80"
                >
                  {trope}
                </span>
              ))}
            </div>

            <div className="pt-2">
              {isLive && book.buyLink ? (
                <a
                  href={book.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] px-7 py-3 text-sm font-bold tracking-wider text-[#1A1418] uppercase transition-opacity hover:opacity-90"
                >
                  Read It Now
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <div className="rounded-lg border border-[#C9A24B]/20 bg-[#1A1418]/50 p-5">
                  <p className="text-sm font-semibold text-[#C9A24B]">
                    Releasing {formatDate(book.releaseDate)}
                  </p>
                  <p className="mt-1 mb-4 text-xs text-[#F5EFE6]/70">
                    Join our list and you'll get the link the moment it goes live.
                  </p>
                  <NewsletterForm />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SERIES */}
        {seriesMates.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-8 font-serif text-2xl font-bold text-[#F5EFE6]">
              More in {book.series}
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {seriesMates.map((b) => (
                <BookCard key={b.slug} book={b} showAuthor={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
