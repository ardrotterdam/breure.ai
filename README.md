# Breure.ai

Breure.ai builds focused custom software for maritime workflows.

We develop tools for charterers, contractors and brokers — from vessel comparison to small custom workflows for technical and operational work.

The Vessel Comparison Tool is a demonstration of software for comparing vessel capabilities and technical data.

Brand and product source of truth: [`docs/BREURE_AI_DNA.md`](docs/BREURE_AI_DNA.md).

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Package manager: [pnpm](https://pnpm.io/)
- Deployed on [Vercel](https://vercel.com/)

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
pnpm build
pnpm start
```

## Deployment

This repository is connected to Vercel. Pushes to `main` trigger automatic production deployments.

- Production domain: [breure.ai](https://breure.ai)
- Vercel project: linked to `ardrotterdam/breure.ai`
