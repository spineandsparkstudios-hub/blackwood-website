import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import type { Book } from "@/lib/catalog";
import { authorName, shortDate } from "@/lib/catalog";
import BookCover from "./BookCover";

export default function BookCard({
  book,
  showAuthor = true,
}: {
  book: Book;
  showAuthor?: boolean;
}) {
  const isLive = book.status === "live";

  return (
    <div className="group flex flex-col justify-between rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/50 p-4 shadow-md shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/30">
      <div>
        <Link
          to="/books/$bookSlug"
          params={{ bookSlug: book.slug }}
          className="relative mb-4 block aspect-[2/3] overflow-hidden rounded-lg border border-[#C9A24B]/10 bg-[#2B1B2E]"
        >
          <BookCover
            book={book}
            className="transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2.5 left-2.5">
            <span
              className={`inline-block rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase shadow-lg ${
                isLive
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                  : "border border-[#C9A24B]/30 bg-[#3D2438]/90 text-[#C9A24B]"
              }`}
            >
              {isLive ? "Out Now" : shortDate(book.releaseDate)}
            </span>
          </div>
        </Link>

        {book.series && (
          <span className="text-[10px] font-semibold tracking-wider text-[#E8B4C0] uppercase">
            {book.series}
            {book.seriesNumber ? ` #${book.seriesNumber}` : ""}
          </span>
        )}

        <h3 className="mt-1 font-serif text-lg leading-snug font-bold text-[#F5EFE6] transition-colors group-hover:text-[#C9A24B]">
          <Link to="/books/$bookSlug" params={{ bookSlug: book.slug }}>
            {book.title}
          </Link>
        </h3>

        {book.subtitle && (
          <p className="font-serif text-xs text-[#C9A24B]/80 italic">{book.subtitle}</p>
        )}

        {showAuthor && (
          <p className="mt-0.5 font-sans text-xs text-[#F5EFE6]/60">
            <Link
              to="/authors/$authorSlug"
              params={{ authorSlug: book.authorSlug }}
              className="transition-colors hover:text-[#C9A24B]"
            >
              By {authorName(book.authorSlug)}
            </Link>
          </p>
        )}

        <div className="mt-3 flex flex-wrap gap-1">
          {book.tropes.slice(0, 3).map((trope) => (
            <span
              key={trope}
              className="rounded-full border border-[#C9A24B]/10 bg-[#2B1B2E] px-2 py-0.5 text-[9px] text-[#F5EFE6]/85"
            >
              {trope}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 border-t border-[#C9A24B]/5 pt-4">
        {isLive && book.buyLink ? (
          <a
            href={book.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] py-2 text-xs font-bold tracking-wider text-[#1A1418] uppercase transition-opacity hover:opacity-90"
          >
            Read Now
            <ExternalLink className="h-3 w-3" />
          </a>
        ) : (
          <Link
            to="/books/$bookSlug"
            params={{ bookSlug: book.slug }}
            className="flex w-full items-center justify-center gap-1.5 rounded-md border border-[#C9A24B]/20 bg-[#2B1B2E] py-2 text-xs font-bold tracking-wider text-[#C9A24B] uppercase transition-colors hover:border-[#C9A24B]/50"
          >
            {shortDate(book.releaseDate)}
          </Link>
        )}
      </div>
    </div>
  );
}
