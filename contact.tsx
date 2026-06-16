import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Mail, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Submissions & Contact | Blackwood Publishing Agency" },
      { name: "description", content: "Query Blackwood Publishing Agency. We are open to agented and unagented queries across all subgenres of romance." }
    ]
  }),
  component: ContactPage,
});

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", genre: "Contemporary", query: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#2B1B2E] text-[#F5EFE6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A24B]/30 bg-[#3D2438] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-4">
            <Sparkles className="h-3 w-3" />
            Query Our Editors
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Submissions & Queries
          </h1>
          <p className="text-sm sm:text-base text-[#F5EFE6]/70 mt-3 leading-relaxed">
            We are open to agented and unagented manuscript submissions. We publish romance of all subgenres. Read our guidelines below to send your query.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* GUIDELINES */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/30 p-6 space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#C9A24B]">What We Seek:</h3>
              <ul className="list-disc pl-5 text-xs text-[#F5EFE6]/80 space-y-2.5 leading-relaxed">
                <li>Contemporary Romance (heavy on banter, high emotion)</li>
                <li>Dark Romantasy (high stakes, moral grey characters, obsession)</li>
                <li>Paranormal & Sci-Fi Romance (humor, heart, fated-mates)</li>
                <li>Historical & Magical Legacy crossovers</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#C9A24B]/10 bg-[#1A1418]/30 p-6 space-y-3">
              <h3 className="font-serif text-sm font-bold text-[#E8B4C0] uppercase tracking-wider">How to query:</h3>
              <p className="text-xs text-[#F5EFE6]/70 leading-relaxed">
                Please submit your query letter, a 3-page synopsis, and the first three chapters. Our typical review window is 4-6 weeks.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="rounded-xl border border-[#C9A24B]/30 bg-[#3D2438]/50 p-8 text-center space-y-4">
                <CheckCircle className="h-12 w-12 text-[#C9A24B] mx-auto" />
                <h3 className="font-serif text-xl font-bold text-[#F5EFE6]">Submission Received!</h3>
                <p className="text-xs text-[#F5EFE6]/70 max-w-sm mx-auto leading-relaxed">
                  Thank you for sharing your heart and story with Blackwood. Our editorial board has been notified and will be in touch shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#C9A24B] hover:underline"
                >
                  Submit another query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full rounded-md border border-[#C9A24B]/20 bg-[#1A1418] px-3.5 py-2.5 text-xs text-[#F5EFE6] focus:border-[#C9A24B] focus:outline-none"
                    placeholder="E.g. Jennifer Armentrout"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-md border border-[#C9A24B]/20 bg-[#1A1418] px-3.5 py-2.5 text-xs text-[#F5EFE6] focus:border-[#C9A24B] focus:outline-none"
                    placeholder="you@domain.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-1">Subgenre</label>
                  <select
                    value={formData.genre}
                    onChange={(e) => setFormData({...formData, genre: e.target.value})}
                    className="w-full rounded-md border border-[#C9A24B]/20 bg-[#1A1418] px-3.5 py-2.5 text-xs text-[#F5EFE6] focus:border-[#C9A24B] focus:outline-none"
                  >
                    <option value="Contemporary">Contemporary Romance</option>
                    <option value="Romantasy">Dark Romantasy / Fantasy Romance</option>
                    <option value="Paranormal">Paranormal / Comedy / Sci-Fi Romance</option>
                    <option value="Other">Other Romance subgenre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-1">Pitch / Query Text (and Google Doc link)</label>
                  <textarea
                    rows={6}
                    required
                    value={formData.query}
                    onChange={(e) => setFormData({...formData, query: e.target.value})}
                    className="w-full rounded-md border border-[#C9A24B]/20 bg-[#1A1418] px-3.5 py-2.5 text-xs text-[#F5EFE6] focus:border-[#C9A24B] focus:outline-none"
                    placeholder="Paste your query letter here. Please include a link to your full manuscript if available..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#C9A24B] py-3 text-xs font-bold uppercase tracking-wider text-[#1A1418] hover:bg-[#C9A24B]/90 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5" />
                  Submit Query
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

function ContactPage() {
  return <Contact />;
}
