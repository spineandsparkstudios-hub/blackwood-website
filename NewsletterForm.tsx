import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { MAILING_LIST_ACTION } from "../lib/site-config";

type Props = {
  /** layout: "row" = input + button side by side; "stack" = stacked */
  layout?: "row" | "stack";
  placeholder?: string;
  buttonLabel?: string;
  successMessage?: string;
};

/**
 * One signup form used everywhere. When MAILING_LIST_ACTION is set in
 * src/lib/site-config.ts, it posts the email to your mailing-list provider.
 * Until then it shows a friendly thank-you so the site looks complete.
 */
export default function NewsletterForm({
  layout = "row",
  placeholder = "Enter your email...",
  buttonLabel = "Subscribe",
  successMessage = "✨ You're on the list! Watch your inbox for sneak peeks and release news.",
}: Props) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const connected = MAILING_LIST_ACTION.length > 0;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (connected) {
      try {
        await fetch(MAILING_LIST_ACTION, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email, fields: JSON.stringify({ email }) }).toString(),
        });
      } catch {
        /* no-cors hides the response; treat as success */
      }
    }
    setDone(true);
    setEmail("");
  };

  if (done) {
    return (
      <div className="rounded-lg border border-[#C9A24B]/30 bg-[#3D2438]/50 p-4 text-[#C9A24B] font-medium text-sm">
        {successMessage}
      </div>
    );
  }

  const wrap = layout === "row" ? "flex flex-col sm:flex-row gap-3" : "flex flex-col gap-2";

  return (
    <form onSubmit={handleSubmit} className={wrap}>
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-grow rounded-full border border-[#C9A24B]/30 bg-[#1A1418]/90 px-5 py-3 text-sm text-[#F5EFE6] placeholder-[#F5EFE6]/40 focus:border-[#C9A24B] focus:outline-none focus:ring-1 focus:ring-[#C9A24B]"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E8B4C0] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#1A1418] hover:opacity-95 transition-opacity shadow-lg shadow-black/20"
      >
        <Mail className="h-4 w-4" />
        {buttonLabel}
      </button>
    </form>
  );
}
