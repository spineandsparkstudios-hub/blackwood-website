import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// Static single-page-app build. Produces a plain `dist/` folder of HTML/CSS/JS
// that can be hosted anywhere (Netlify drag-and-drop, Cloudflare Pages, etc.)
// — no server required.
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  build: {
    outDir: "dist",
  },
});
