# Satriags Developer Portfolio

Personal portfolio built with Nuxt 4, TypeScript, Tailwind CSS, and Bun.

## Local development

```bash
bun install
bun run dev
```

## Cloudflare Pages deployment

This site is prepared as a static Nuxt deployment. In Cloudflare Dashboard:

1. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select this repository and use these settings:
   - Production branch: `main`
   - Build command: `bun run generate`
   - Build output directory: `.output/public`
   - Environment variable: `BUN_VERSION=1.3.13`
3. After the first deployment, go to **Custom domains** and add `satriags.com`.
4. Add `www.satriags.com`, then configure a permanent redirect to `https://satriags.com`.

Cloudflare Pages automatically provisions TLS for a custom domain managed in the same Cloudflare account. The `*.pages.dev` URL is suitable for preview; use `satriags.com` as the public canonical URL.

## Verification

```bash
bun run typecheck
bun run generate
```
