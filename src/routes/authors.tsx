import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { Users, ArrowRight } from "lucide-react";
import { authors, booksByAuthor } from "@/lib/catalog";

export const Route = createFileRoute("/authors")({
  head: () => ({
    meta: [
      { title: "Our Authors | Blackwood Publishing Agency" },
      {
        name: "description",
        content:
          "Meet the Blackwood Publishing authors writing paranormal romance, dark romantasy, urban romance, billionaire romance and Southern gothic fantasy.",
      },
    ],
  }),
  component: AuthorsLayout,
});

function AuthorsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/authors/$authorSlug");
  if (isChild) return <Outlet />;
  return <AuthorsIndex />;
}

function AuthorsIndex() {
  return (
    <div className="bg-[#2B1B2E] px-4 py-16 text-[#F5EFE6] sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#C9A24B]/30 bg-[#3D2438] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#C9A24B] uppercase">
            <Users className="h-3.5 w-3.5" />
            The Blackwood Roster
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#F5EFE6] sm:text-6xl">
            Our Authors
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#F5EFE6]/70 sm:text-lg">
            {authors.length} voices across paranormal romance, dark romantasy, urban
            romance, billionaire romance and Southern gothic fantasy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => {
            const count = booksByAuthor(author.slug).length;
            return (
              <Link
                key={author.slug}
                to="/authors/$authorSlug"
                params={{ authorSlug: author.slug }}
                className="group flex flex-col rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-[#C9A24B]/20 bg-gradient-to-tr from-[#3D2438] to-[#C9A24B]/20 font-serif text-xl font-black text-[#C9A24B]">
                    {author.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg font-bold text-[#F5EFE6] transition-colors group-hover:text-[#C9A24B]">
                      {author.name}
                    </h3>
                    <p className="mt-0.5 text-[10px] font-semibold tracking-wider text-[#E8B4C0] uppercase">
                      {author.lane}
                    </p>
                  </div>
                </div>

                <p className="mt-4 flex-1 font-serif text-sm text-[#F5EFE6]/70 italic">
                  {author.tagline}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#C9A24B]/5 pt-4">
                  <span className="text-[10px] tracking-wider text-[#F5EFE6]/50 uppercase">
                    {count} {count === 1 ? "Title" : "Titles"}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#C9A24B] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
