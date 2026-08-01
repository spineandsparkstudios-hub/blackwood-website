import type { Book } from "@/lib/catalog";
import { authorName } from "@/lib/catalog";

/**
 * Renders a book cover.
 * If the book has no `cover` image yet, it draws a branded placeholder
 * showing the title, author and release date — so unfinished books still
 * look intentional on the site.
 */
export default function BookCover({
  book,
  className = "",
}: {
  book: Book;
  className?: string;
}) {
  if (book.cover) {
    return (
      <img
        src={book.cover}
        alt={`${book.title} by ${authorName(book.authorSlug)}`}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center bg-[#120E14] px-4 py-6 text-center ${className}`}
    >
      {/* corner rules */}
      <div className="pointer-events-none absolute inset-3 border border-[#C9A24B]/25" />

      <span className="relative z-10 mb-3 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#C9A24B]/70">
        Blackwood
      </span>

      <h4 className="relative z-10 font-serif text-base leading-tight font-bold text-[#C9A24B] sm:text-lg">
        {book.title}
      </h4>

      {book.subtitle && (
        <p className="relative z-10 mt-1 font-serif text-[11px] italic text-[#C9A24B]/70">
          {book.subtitle}
        </p>
      )}

      <div className="relative z-10 my-3 h-px w-10 bg-[#C9A24B]/40" />

      <p className="relative z-10 text-[9px] uppercase tracking-[0.2em] text-[#F5EFE6]/60">
        {authorName(book.authorSlug)}
      </p>

      <p className="relative z-10 mt-4 text-[8px] uppercase tracking-[0.2em] text-[#E8B4C0]/70">
        Cover Reveal Soon
      </p>
    </div>
  );
}
