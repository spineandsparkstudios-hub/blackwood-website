import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getAuthor, booksByAuthor, formatDate } from "@/lib/catalog";
import BookCover from "@/components/BookCover";
import BookCard from "@/components/BookCard";

export const Route = createFileRoute("/authors/$authorSlug")({
  loader: ({ params }) => {
    const author = getAuthor(params.authorSlug);
    if (!author) throw notFound();
    return author;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Author"} | Blackwood Publishing Agency` },
      {
        name: "description",
        content: loaderData?.bio ?? "A Blackwood Publishing author.",
      },
    ],
  }),
  component: AuthorPage,
  notFoundComponent: () => (
    <div className="bg-[#2B1B2E] px-4 py-24 text-center text-[#F5EFE6]">
      <h1 className="font-serif text-3xl font-bold">Author not found</h1>
      <Link to="/authors" className="mt-4 inline-block text-sm text-[#C9A24B] underline">
        Back to all authors
      </Link>
    </div>
  ),
});

function AuthorPage() {
  const author = Route.useLoaderData();
  const list = booksByAuthor(author.slug);
  const featured = list.find((b) => b.status !== "live") ?? list[0];
  const rest = list.filter((b) => b.slug !== featured?.slug);

  return (
    <div className="bg-[#2B1B2E] px-4 py-12 text-[#F5EFE6] sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            to="/authors"
            className="inline-flex items-center gap-1.5 text-xs tracking-wider text-[#C9A24B] uppercase transition-colors hover:text-[#E8B4C0]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Authors
          </Link>
        </div>

        {/* AUTHOR HEADER */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="flex justify-center md:col-span-4">
            <div className="flex h-48 w-48 items-center justify-center rounded-2xl border border-[#C9A24B]/20 bg-gradient-to-tr from-[#3D2438] to-[#C9A24B]/20 font-serif text-6xl font-black text-[#C9A24B] shadow-2xl sm:h-64 sm:w-48 sm:text-7xl">
              {author.initials}
            </div>
          </div>
          <div className="space-y-6 md:col-span-8">
            <div>
              <span className="rounded-full border border-[#C9A24B]/20 bg-[#3D2438] px-3.5 py-1.5 text-xs font-semibold tracking-widest text-[#E8B4C0] uppercase">
                {author.lane}
              </span>
              <h1 className="mt-4 font-serif text-4xl font-bold text-[#F5EFE6] sm:text-5xl">
                {author.name}
              </h1>
              {author.series && (
                <p className="mt-1 text-xs tracking-wider text-[#C9A24B] uppercase">
                  Series: {author.series}
                </p>
              )}
            </div>

            <p className="text-sm leading-relaxed text-[#F5EFE6]/80 sm:text-base">
              {author.bio}
            </p>

            <div className="border-t border-[#C9A24B]/10 pt-6">
              <h3 className="mb-2 font-serif text-sm font-semibold tracking-wider text-[#C9A24B] uppercase">
                For Readers Of
              </h3>
              <p className="text-xs leading-relaxed text-[#F5EFE6]/70">{author.comps}</p>
            </div>
          </div>
        </div>

        {/* FEATURED BOOK */}
        {featured && (
          <div className="mt-16 grid grid-cols-1 items-center gap-8 rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/40 p-6 sm:p-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="aspect-[2/3] overflow-hidden rounded-lg border border-[#C9A24B]/20 shadow-lg">
                <BookCover book={featured} />
              </div>
            </div>
            <div className="space-y-4 md:col-span-9">
              <span
                className={`rounded-md px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase ${
                  featured.status === "live"
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-[#C9A24B]/10 text-[#C9A24B]"
                }`}
              >
                {featured.status === "live"
                  ? "Out Now"
                  : `Coming ${formatDate(featured.releaseDate)}`}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F5EFE6] sm:text-3xl">
                {featured.title}
                {featured.subtitle && (
                  <span className="block text-lg font-normal text-[#C9A24B] italic">
                    {featured.subtitle}
                  </span>
                )}
              </h3>
              <p className="text-xs leading-relaxed text-[#F5EFE6]/70 sm:text-sm">
                {featured.blurb}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Link
                  to="/books/$bookSlug"
                  params={{ bookSlug: featured.slug }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A24B]/30 px-5 py-2.5 text-xs font-bold tracking-wider text-[#C9A24B] uppercase transition-colors hover:border-[#C9A24B]"
                >
                  Book Details
                </Link>
                {featured.buyLink && (
                  <a
                    href={featured.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] px-5 py-2.5 text-xs font-bold tracking-wider text-[#1A1418] uppercase transition-opacity hover:opacity-90"
                  >
                    Read Now
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* MORE BOOKS */}
        {rest.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 font-serif text-2xl font-bold text-[#F5EFE6]">
              More from {author.name}
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((book) => (
                <BookCard key={book.slug} book={book} showAuthor={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
