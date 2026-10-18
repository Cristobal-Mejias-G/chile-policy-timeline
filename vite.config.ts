// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GH_PAGES=1 (set by .github/workflows/pages.yml) prerenders "/" to static HTML
// under BASE_PATH so the site can be served from GitHub Pages.
const ghPages = process.env.GH_PAGES === "1";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(ghPages
      ? {
          pages: [{ path: "/" }],
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        }
      : {}),
  },
  ...(ghPages ? { vite: { base: process.env.BASE_PATH || "/" } } : {}),
});
