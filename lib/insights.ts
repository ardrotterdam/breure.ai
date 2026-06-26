import type { Metadata } from "next"

import { absoluteUrl, buildInsightsPageMetadata } from "@/lib/page-metadata"

export const INSIGHTS_INDEX_PATH = "/en/insights" as const

export type InsightSection = {
  id: string
  heading: string
  paragraphs: string[]
}

export type InsightImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

export type InsightInlineImage = InsightImage & {
  afterSectionId: string
  caption?: string
}

export type InsightArticle = {
  title: string
  slug: string
  excerpt: string
  category: string
  date: string
  readingTime: string
  seoTitle: string
  metaDescription: string
  keywords: string[]
  canonicalUrl: string
  intro: string
  heroImage?: InsightImage
  inlineImages?: InsightInlineImage[]
  sections: InsightSection[]
  conclusion: {
    heading: string
    paragraphs: string[]
    cta: string
  }
}

export const insightsOverview = {
  seoTitle: "Insights | Maritime & Offshore Web Design | Breure.ai",
  metaDescription:
    "Practical perspectives on maritime website design, offshore credibility and digital trust for vessel owners, contractors and shipping companies.",
  canonicalUrl: "https://breure.ai/en/insights",
  title: "Insights",
  intro:
    "Breure.ai Insights covers maritime and offshore web design from an operator's perspective — clarity, capability, trust and the signals buyers look for before the first call.",
} as const

export const insightArticles: InsightArticle[] = [
  {
    title: "Why Maritime Companies Lose Trust Before the First Call",
    slug: "maritime-website-design-trust",
    excerpt:
      "In maritime and offshore, your website is judged long before a meeting is booked. Outdated structure, thin vessel pages and unclear capability signals can cost credibility before the first conversation starts.",
    category: "Maritime Web Design",
    date: "2026-06-26",
    readingTime: "6 min read",
    seoTitle:
      "Maritime Website Design: Why Offshore Companies Lose Trust Online",
    metaDescription:
      "Maritime website design is not just about visuals. Learn why offshore, vessel and shipping companies can lose trust online before the first client call.",
    keywords: [
      "maritime website design",
      "offshore website design",
      "vessel website design",
      "shipping company website",
      "maritime web design",
      "offshore contractor website",
    ],
    canonicalUrl:
      "https://breure.ai/en/insights/maritime-website-design-trust",
    intro:
      "In maritime and offshore, a website is not a digital brochure sitting beside the business. It is a trust signal. Before a buyer contacts a company, requests a capability pack, shares project details or starts a serious commercial conversation, they often check the website first. If the site feels outdated, unclear or thin, the company may lose credibility before the first call happens — regardless of how strong the operation is offshore.",
    heroImage: {
      src: "/images/insights/maritime-website-design-trust/breure-ai-maritime-website-design-offshore-trust-hero.webp",
      alt: "Breure.ai maritime website design showing offshore professional in modern ship bridge",
      width: 1536,
      height: 1024,
    },
    inlineImages: [
      {
        afterSectionId: "vessel-pages",
        src: "/images/insights/maritime-website-design-trust/breure-ai-offshore-web-design-vessel-page-wireframe.webp",
        alt: "Breure.ai offshore web design mockup with vessel page wireframes and maritime capability layout",
        caption:
          "A strong vessel page should turn technical capability into clear digital trust signals.",
        width: 1536,
        height: 1024,
      },
      {
        afterSectionId: "safety-compliance",
        src: "/images/insights/maritime-website-design-trust/breure-ai-vessel-website-design-ship-blueprints-office.webp",
        alt: "Breure.ai vessel website design with professional reviewing ship blueprints in harbor office",
        caption:
          "Maritime buyers look for operational seriousness, not just visual presentation.",
        width: 1536,
        height: 1024,
      },
    ],
    sections: [
      {
        id: "confidence-not-decoration",
        heading: "1. Maritime buyers look for confidence, not decoration",
        paragraphs: [
          "Maritime buyers — charterers, vessel owners, project teams, brokers and technical stakeholders — are not impressed by decorative design alone. They look for clarity, credibility, capability, technical seriousness and trust. A polished homepage with vague claims and no structure behind them creates suspicion, not confidence.",
          "Effective maritime website design presents information in a way that mirrors how the industry evaluates risk: who you are, what you operate, where you work, and what you can deliver under real project conditions. Visual quality matters, but only when it supports readable structure, credible content and a sense that the company understands its own operations.",
          "When a site prioritises aesthetics over substance, experienced buyers notice quickly. They have seen enough tender packs, fleet lists and capability summaries to know when a digital presence reflects operational discipline — and when it does not.",
        ],
      },
      {
        id: "old-websites-doubt",
        heading: "2. Old websites create doubt around serious operations",
        paragraphs: [
          "An outdated website can make a serious maritime company look smaller, slower or less professional than it really is. Layouts that have not moved with current standards, broken mobile views, slow load times and content that has clearly not been reviewed in years all send the same message: this organisation may not invest in how it presents itself to the market.",
          "That impression is unfair, but it is common. Offshore and shipping decisions involve high stakes, tight schedules and reputational risk. Buyers use every available signal — including the website — to reduce uncertainty before they pick up the phone.",
          "A company running modern assets with a site that looks stuck in an earlier decade creates a gap between operational reality and digital perception. Closing that gap is not about trend-chasing. It is about aligning the public face of the business with the standard of seriousness buyers expect in the sector.",
        ],
      },
      {
        id: "vessel-pages",
        heading: "3. Vessel pages should be more than PDF downloads",
        paragraphs: [
          "Vessel and fleet pages are often where maritime website design succeeds or fails. Too many sites treat each unit as a filename: a PDF link, maybe a thumbnail, and little else. PDFs have their place — especially for tenders and engineering review — but they should support the page, not replace it.",
          "A strong vessel page presents fleet details, capabilities, specifications, applications, visuals, contact options and context in a structured, readable format. Charterers and project engineers should be able to scan key data — crane capacity, deck load, DP class, POB, draft, transit speed, sector experience — without downloading a document first.",
          "When the website itself answers initial technical questions, you reduce friction for serious enquiries and filter out low-quality contact. When it does not, capable operators force buyers to do extra work — or simply move on to a competitor whose assets are easier to evaluate online.",
        ],
      },
      {
        id: "capability-clarity",
        heading: "4. Offshore and maritime websites must explain capability clearly",
        paragraphs: [
          "Buyers should not have to infer what a company does from a generic corporate narrative. Offshore contractors, vessel operators, shipping companies and maritime service providers need to show clearly what they deliver, where they operate, which sectors they serve and what types of projects they understand.",
          "Capability pages should read like structured answers to the questions a project team actually asks: scope of work, asset types, geographies, client profiles, mobilisation logic and the kind of challenges the organisation is equipped to handle. Generic phrases such as \"innovative solutions\" or \"world-class service\" add little. Specificity builds trust.",
          "For international audiences, this clarity also supports discoverability. Search terms around offshore website design, vessel website design and shipping company website structure map directly to how buyers look for partners online — but only if the site contains real, indexable content that reflects actual capability.",
        ],
      },
      {
        id: "safety-compliance",
        heading: "5. Safety, compliance and project experience need visible structure",
        paragraphs: [
          "Maritime and offshore buyers care deeply about safety, reliability, documentation, project discipline and operational seriousness. These themes belong on the website — not as marketing filler, but as visible, well-organised signals.",
          "That can include certifications, management systems, HSE approach, quality frameworks, incident prevention culture and the way projects are planned and executed. It can also include structured references to sectors served, project types handled and the documentation standards the company maintains for clients and partners.",
          "You do not need to expose confidential detail publicly. You do need to show that safety and compliance are integrated into how the organisation works — and that the website reflects the same rigour buyers expect in a pre-qualification or tender context.",
        ],
      },
      {
        id: "digital-expectations",
        heading: "6. Digital expectations are changing in maritime and offshore",
        paragraphs: [
          "Maritime is becoming more digital, even among traditionally conservative operators. Younger engineers, international procurement teams and remote decision-makers now expect to evaluate a company online before requesting a meeting. Recruitment, partnerships, tender shortlists and international visibility all pass through the website.",
          "A weak digital presence does not only affect new business. It can slow hiring, weaken brand consistency across regions and make it harder for commercial teams to share credible links in conversations that already move fast. The website is part of the operating environment — not a side project for when there is spare time.",
          "Companies that treat maritime web design as a strategic asset gain a practical advantage: their credibility is visible before the first conversation, across time zones and without relying on a single salesperson to explain the story from scratch.",
        ],
      },
      {
        id: "strong-website-checklist",
        heading: "7. What a strong maritime website should include",
        paragraphs: [
          "There is no single template for every operator, but strong maritime and offshore websites tend to share a clear set of building blocks:",
          "Clear positioning that states who the company serves and what problems it solves. Dedicated fleet and vessel pages with readable specs, visuals and enquiry paths. Service pages that explain scope, sectors and delivery logic. Project or capability pages that show experience without overclaiming. Visible safety and compliance signals, presented with structure rather than slogans.",
          "A strong contact flow that respects how maritime buyers prefer to reach out — direct, low-friction and professional. Fast performance and reliable mobile usability for users checking assets from terminals, offices and project sites. International language structure where the business operates across regions. Professional visuals that reflect the sector — industrial, precise and credible, not stock-photo generic.",
          "These elements work together. A fast site with weak content still fails the trust test. Beautiful design with no technical depth does the same. The goal is coherence: a digital presence that feels as serious as the operation behind it.",
        ],
      },
    ],
    conclusion: {
      heading: "8. Conclusion: Your website should feel as serious as your operations",
      paragraphs: [
        "Trust in maritime and offshore is built through consistency — between what a company claims, what it can demonstrate and how it presents itself under scrutiny. The website is often the first structured exposure a buyer has to that consistency. When it is clear, capable and current, it supports commercial conversations before they begin. When it is not, doubt sets in early — and early doubt is expensive to reverse.",
        "Investing in maritime website design is not about chasing awards or agency trends. It is about making credibility visible: for charterers comparing assets, for project teams shortlisting contractors, for partners evaluating fit, and for the people inside your organisation who need a site they are willing to share.",
      ],
      cta: "Breure.ai builds focused maritime websites for offshore, vessel, shipping and industrial companies that need to look credible before the first conversation starts.",
    },
  },
]

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((article) => article.slug === slug)
}

export function insightArticlePath(slug: string): string {
  return `${INSIGHTS_INDEX_PATH}/${slug}`
}

export function formatInsightDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate))
}

export function buildInsightsIndexMetadata(): Metadata {
  return buildInsightsPageMetadata({
    title: insightsOverview.seoTitle,
    description: insightsOverview.metaDescription,
    path: INSIGHTS_INDEX_PATH,
    keywords: [
      "maritime website design",
      "offshore web design",
      "maritime insights",
      "shipping company website",
    ],
  })
}

export function buildInsightArticleMetadata(article: InsightArticle): Metadata {
  return buildInsightsPageMetadata({
    title: article.seoTitle,
    description: article.metaDescription,
    path: insightArticlePath(article.slug),
    keywords: article.keywords,
  })
}

export function insightArticleWordCount(article: InsightArticle): number {
  const text = [
    article.intro,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
    ]),
    article.conclusion.heading,
    ...article.conclusion.paragraphs,
    article.conclusion.cta,
  ].join(" ")

  return text.split(/\s+/).filter(Boolean).length
}

export const insightSitemapPaths = [
  INSIGHTS_INDEX_PATH,
  ...insightArticles.map((article) => insightArticlePath(article.slug)),
] as const

export function insightSitemapEntries() {
  const lastModified = new Date()

  return insightSitemapPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === INSIGHTS_INDEX_PATH ? 0.75 : 0.7,
  }))
}
