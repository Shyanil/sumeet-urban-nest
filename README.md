# Sumeet Urban Nest

Official landing page for Sumeet Urban Nest, built with Next.js and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

## Cloudflare build

Build the Cloudflare Worker locally with:

```bash
npm run cf:build
```

Cloudflare Workers Builds should use `npm run cf:build` as its build command
and `npx wrangler preview` as its preview command for pull requests. Keep
`main` as the production branch so commits to `dev` create previews for review.
