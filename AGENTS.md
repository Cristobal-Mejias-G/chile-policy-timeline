<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Timeline events live in `src/data/eventos.ts` (static data, no backend) — the site is deployed as static HTML to GitHub Pages.
- GitHub Pages build is gated by `GH_PAGES=1` in vite.config.ts (prerender + base path); the router uses `import.meta.env.BASE_URL` as basepath so it works under `/<repo>/`.
