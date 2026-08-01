import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { useState } from "react";
import { books, liveBooks, upcomingBooks } from "@/lib/catalog";
import BookCard from "@/components/BookCard";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books Catalog | Blackwood Publishing Agency" },
      {
        name: "description",
        content:
          "Explore the Blackwood Publishing romance catalog — paranormal romance, dark romantasy, urban romance, billionaire romance and Southern gothic fantasy.",
      },
    ],
  }),
  component: BooksLayout,
});

type Filter = "all" | "upcoming" | "live";

function BooksLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/books/$bookSlug");
  if (isChild) return <Outlet />;
  return <BooksCatalog />;
}

function BooksCatalog() {
  const [filter, setFilter] = useState<Filter>("all");

  const list =
    filter === "live"
      ? liveBooks()
      : filter === "upcoming"
        ? upcomingBooks()
        : [...books].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));

  const tabs: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "All Books", count: books.length },
    { key: "upcoming", label: "Coming Soon", count: upcomingBooks().length },
    { key: "live", label: "Out Now", count: liveBooks().length },
  ];

  return (
    <div className="bg-[#2B1B2E] px-4 py-16 text-[#F5EFE6] sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#C9A24B]/30 bg-[#3D2438] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#C9A24B] uppercase">
            <BookOpen className="h-3.5 w-3.5" />
            Discover Your Next Obsession
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#F5EFE6] sm:text-6xl">
            The Romance Catalog
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#F5EFE6]/70 sm:text-lg">
            Vampire courts, wolf packs, blood oaths, billionaires and old doors that
            should have stayed shut. Every title free in Kindle Unlimited.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
                filter === tab.key
                  ? "bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] text-[#1A1418]"
                  : "border border-[#C9A24B]/20 text-[#F5EFE6]/70 hover:border-[#C9A24B]/50 hover:text-[#C9A24B]"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
          {list.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
