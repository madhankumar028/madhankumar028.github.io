# madhankumar028.dev

Personal portfolio site — rewritten in Next.js 14 (App Router) with TypeScript.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (zero dependencies, no Tailwind)
- **Fonts**: Syne (display) + DM Mono (code/body) via Google Fonts
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating Content

All site content lives in a single file:

```
src/lib/data.ts
```

Edit `siteConfig`, `hero`, `about`, `experience`, `projects`, `blogPosts`, and `contact` to update everything.

### Adding Blog Posts

In `src/lib/data.ts`, add to the `blogPosts` array:

```ts
export const blogPosts = [
  {
    title: "Your Post Title",
    slug: "your-post-slug",
    date: "Mar 2026",
    excerpt: "Short description...",
    readTime: "5 min read",
  },
]
```

Then create the MDX/page file at `src/app/blog/[slug]/page.tsx`.

## Deployment

Push to GitHub and connect the repo to [Vercel](https://vercel.com). It will auto-detect Next.js and deploy.

Set your custom domain `madhankumar028.dev` in the Vercel project settings under **Domains**.
