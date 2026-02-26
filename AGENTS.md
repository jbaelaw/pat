## Cursor Cloud specific instructions

This is a Hugo static site ("Pat") serving ~5000 Korean legal reference documents.

### Key tools
- **Hugo extended v0.140.2** — static site generator (installed via `.deb` from GitHub releases)
- **Pagefind** (via `npx pagefind`) — optional client-side search indexing

### Dev server
```bash
hugo server --bind 0.0.0.0 --port 1313 --baseURL http://localhost:1313/ --disableFastRender
```
- First build takes ~2.5 minutes due to ~5000 pages.
- Content directory is `docs/` (set in `hugo.toml` via `contentDir`).

### Build (production-like)
```bash
hugo --minify
npx pagefind --site public --glob "**/*.html"
```
- Full build + Pagefind indexing takes ~7 minutes total.

### Caveats
- There are no automated tests, linting, or `package.json` in this project.
- The `content/docs/` directory is a duplicate of `docs/`; Hugo uses `docs/` as the content directory per `hugo.toml`.
- Pagefind does not support Korean stemming; search still works but won't match across root words.
- The site's `baseURL` in `hugo.toml` is set for GitHub Pages (`/pat/`); override with `--baseURL` when running locally.
