export type InsightLocale = "nl" | "en"

export const INSIGHTS_INDEX_PATH = "/en/insights" as const

export type InsightSection = {
  id: string
  heading: string
  paragraphs: string[]
  headingNl?: string
  paragraphsNl?: string[]
}

export type InsightImage = {
  src: string
  alt: string
  width?: number
  height?: number
  altNl?: string
}

export type InsightInlineImage = InsightImage & {
  afterSectionId: string
  caption?: string
  captionNl?: string
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
    headingNl?: string
    paragraphsNl?: string[]
    ctaNl?: string
  }
  slugNl?: string
  titleNl?: string
  excerptNl?: string
  categoryNl?: string
  readingTimeNl?: string
  seoTitleNl?: string
  metaDescriptionNl?: string
  keywordsNl?: string[]
  canonicalUrlNl?: string
  introNl?: string
}

export type InsightsOverview = {
  seoTitle: string
  metaDescription: string
  canonicalUrl: string
  title: string
  intro: string
}

export const insightsOverview: InsightsOverview = {
  seoTitle: "Insights | Maritime & Offshore Web Design | Breure.ai",
  metaDescription:
    "Practical perspectives on maritime website design, offshore credibility and digital trust for vessel owners, contractors and shipping companies.",
  canonicalUrl: "https://breure.ai/en/insights",
  title: "Insights",
  intro:
    "Breure.ai Insights covers maritime and offshore web design from an operator's perspective — clarity, capability, trust and the signals buyers look for before the first call.",
}

export const insightsOverviewNl: InsightsOverview = {
  seoTitle: "Inzichten | Maritiem & Offshore Webdesign | Breure.ai",
  metaDescription:
    "Praktische perspectieven op maritiem webdesign, offshore-geloofwaardigheid en digitaal vertrouwen voor scheepseigenaren, aannemers en scheepvaartbedrijven.",
  canonicalUrl: "https://breure.ai/inzichten",
  title: "Inzichten",
  intro:
    "Breure.ai Inzichten behandelt maritiem en offshore webdesign vanuit het perspectief van de operator — helderheid, capability, vertrouwen en de signalen die kopers zoeken vóór het eerste gesprek.",
}

export function getInsightsOverview(locale: InsightLocale): InsightsOverview {
  return locale === "nl" ? insightsOverviewNl : insightsOverview
}

const baseInsightArticles: InsightArticle[] = [
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

/** Applies Dutch translations for the maritime trust article. */
function withMaritimeTrustNl(article: InsightArticle): InsightArticle {
  const slugNl = "maritiem-webdesign-vertrouwen"

  const sectionNl: Record<string, { headingNl: string; paragraphsNl: string[] }> = {
    "confidence-not-decoration": {
      headingNl: "1. Maritieme kopers zoeken vertrouwen, geen decoratie",
      paragraphsNl: [
        "Maritieme kopers — charterers, scheepseigenaren, projectteams, brokers en technische stakeholders — laten zich niet alleen imponeren door decoratief design. Zij zoeken helderheid, geloofwaardigheid, capability, technische degelijkheid en vertrouwen. Een gepolijste homepage met vage claims en geen structuur erachter wekt argwaan, geen vertrouwen.",
        "Effectief maritiem webdesign presenteert informatie op een manier die aansluit bij hoe de sector risico beoordeelt: wie u bent, wat u operateert, waar u werkt en wat u levert onder echte projectomstandigheden. Visuele kwaliteit telt, maar alleen wanneer die leesbare structuur, geloofwaardige content en het gevoel ondersteunt dat het bedrijf zijn eigen operatie begrijpt.",
        "Wanneer een site esthetiek boven inhoud stelt, merken ervaren kopers dat snel op. Zij hebben genoeg tender packs, vlootoverzichten en capability-samenvattingen gezien om te weten wanneer een digitale presentatie operationele discipline weerspiegelt — en wanneer niet.",
      ],
    },
    "old-websites-doubt": {
      headingNl: "2. Verouderde websites wekken twijfel over serieuze operaties",
      paragraphsNl: [
        "Een verouderde website kan een serieus maritiem bedrijf kleiner, trager of minder professioneel laten lijken dan het in werkelijkheid is. Layouts die niet meebewegen met huidige standaarden, kapotte mobiele weergaven, trage laadtijden en content die duidelijk jaren niet is herzien — allemaal hetzelfde signaal: deze organisatie investeert misschien niet in hoe zij zich presenteert aan de markt.",
        "Dat beeld is onterecht, maar het komt vaak voor. Offshore- en scheepvaartbeslissingen gaan gepaard met hoge inzet, strakke planning en reputatierisico. Kopers gebruiken elk beschikbaar signaal — inclusief de website — om onzekerheid te verkleinen vóór zij de telefoon pakken.",
        "Een bedrijf met moderne assets en een site die vast lijkt te zitten in een vroeger decennium creëert een kloof tussen operationele werkelijkheid en digitale perceptie. Die kloof dichten is geen trendjagen. Het gaat erom het publieke gezicht van het bedrijf af te stemmen op het niveau van professionaliteit dat kopers in de sector verwachten.",
      ],
    },
    "vessel-pages": {
      headingNl: "3. Scheepspagina's moeten meer zijn dan PDF-downloads",
      paragraphsNl: [
        "Scheeps- en vlootpagina's zijn vaak het punt waar maritiem webdesign slaagt of faalt. Te veel sites behandelen elke unit als een bestandsnaam: een PDF-link, misschien een thumbnail, verder niets. PDF's hebben hun plaats — zeker bij tenders en engineering review — maar zij moeten de pagina ondersteunen, niet vervangen.",
        "Een sterke scheepspagina presenteert vlootdetails, capabilities, specificaties, toepassingen, beelden, contactopties en context in een gestructureerd, leesbaar formaat. Charterers en project engineers moeten kerngegevens kunnen scannen — crane capacity, deck load, DP class, POB, draft, transit speed, sectorervaring — zonder eerst een document te downloaden.",
        "Wanneer de website zelf de eerste technische vragen beantwoordt, verlaagt u de drempel voor serieuze aanvragen en filtert u contact van lage kwaliteit. Wanneer dat niet zo is, dwingen capabele operators kopers tot extra werk — of stappen zij simpelweg over naar een concurrent wiens assets online makkelijker te beoordelen zijn.",
      ],
    },
    "capability-clarity": {
      headingNl: "4. Offshore- en maritieme websites moeten capability helder uitleggen",
      paragraphsNl: [
        "Kopers moeten niet hoeven af te leiden wat een bedrijf doet uit een generiek corporate verhaal. Offshore-aannemers, scheepsoperators, scheepvaartbedrijven en maritieme dienstverleners moeten duidelijk tonen wat zij leveren, waar zij opereren, welke sectoren zij bedienen en welk type projecten zij begrijpen.",
        "Capability-pagina's moeten lezen als gestructureerde antwoorden op de vragen die een projectteam werkelijk stelt: scope of work, asset types, geografieën, klantprofielen, mobilisatielogica en het soort uitdagingen waarvoor de organisatie is ingericht. Generieke frases als \"innovatieve oplossingen\" of \"world-class service\" voegen weinig toe. Specificiteit bouwt vertrouwen.",
        "Voor internationale doelgroepen ondersteunt deze helderheid ook vindbaarheid. Zoektermen rond offshore webdesign, scheepswebsites en de structuur van scheepvaartbedrijf-sites sluiten direct aan op hoe kopers online partners zoeken — maar alleen als de site echte, indexeerbare content bevat die werkelijke capability weerspiegelt.",
      ],
    },
    "safety-compliance": {
      headingNl: "5. Veiligheid, compliance en projectervaring vragen om zichtbare structuur",
      paragraphsNl: [
        "Maritieme en offshore-kopers hechten sterk aan veiligheid, betrouwbaarheid, documentatie, projectdiscipline en operationele degelijkheid. Deze thema's horen op de website — niet als marketingvulling, maar als zichtbare, goed georganiseerde signalen.",
        "Dat kan certificeringen, managementsystemen, HSE-aanpak, kwaliteitskaders, incidentpreventiecultuur en de manier waarop projecten worden gepland en uitgevoerd omvatten. Ook gestructureerde verwijzingen naar bediende sectoren, projecttypes en de documentatiestandaarden die het bedrijf voor klanten en partners hanteert.",
        "U hoeft geen vertrouwelijke details publiek te maken. U moet wel tonen dat veiligheid en compliance zijn geïntegreerd in hoe de organisatie werkt — en dat de website dezelfde degelijkheid weerspiegelt die kopers verwachten in een pre-kwalificatie- of tendercontext.",
      ],
    },
    "digital-expectations": {
      headingNl: "6. Digitale verwachtingen veranderen in maritiem en offshore",
      paragraphsNl: [
        "Maritiem wordt digitaler, ook bij traditioneel conservatieve operators. Jonge engineers, internationale inkoopteams en remote beslissers verwachten steeds vaker een bedrijf online te beoordelen vóór zij een meeting aanvragen. Recruitment, partnerships, tender shortlists en internationale zichtbaarheid lopen allemaal via de website.",
        "Een zwakke digitale presentatie raakt niet alleen nieuwe business. Het kan hiring vertragen, merkconsistentie over regio's verzwakken en het commerciële team bemoeilijken om geloofwaardige links te delen in gesprekken die al snel verlopen. De website maakt deel uit van de operating environment — geen bijproject voor als er tijd over is.",
        "Bedrijven die maritiem webdesign als strategisch asset behandelen, behalen een praktisch voordeel: hun geloofwaardigheid is zichtbaar vóór het eerste gesprek, over tijdzones heen en zonder te vertrouwen op één verkoper die het verhaal vanaf nul moet uitleggen.",
      ],
    },
    "strong-website-checklist": {
      headingNl: "7. Wat een sterke maritieme website moet bevatten",
      paragraphsNl: [
        "Er is geen enkele template voor elke operator, maar sterke maritieme en offshore-websites delen vaak een duidelijke set bouwstenen:",
        "Heldere positionering die benoemt wie het bedrijf bedient en welke problemen het oplost. Dedicated vloot- en scheepspagina's met leesbare specs, beelden en aanvraagpaden. Dienstpagina's die scope, sectoren en delivery-logica uitleggen. Project- of capability-pagina's die ervaring tonen zonder te overclaimen. Zichtbare veiligheids- en compliance-signalen, gestructureerd gepresenteerd in plaats van als slogans.",
        "Een sterk contactflow die aansluit bij hoe maritieme kopers prefereren contact op te nemen — direct, laagdrempelig en professioneel. Snelle performance en betrouwbare mobiele bruikbaarheid voor gebruikers die assets bekijken vanaf terminals, kantoren en projectlocaties. Internationale taalstructuur waar het bedrijf over regio's heen opereert. Professionele visuals die de sector weerspiegelen — industrieel, precies en geloofwaardig, niet generiek stockbeelden.",
        "Deze elementen werken samen. Een snelle site met zwakke content faalt nog steeds de vertrouwentest. Mooi design zonder technische diepgang evenzeer. Het doel is coherentie: een digitale presentatie die zo serieus aanvoelt als de operatie erachter.",
      ],
    },
  }

  return {
    ...article,
    slugNl,
    canonicalUrlNl: `https://breure.ai/inzichten/${slugNl}`,
    titleNl: "Waarom maritieme bedrijven vertrouwen verliezen vóór het eerste gesprek",
    excerptNl:
      "In maritiem en offshore wordt uw website beoordeeld lang vóór een meeting wordt gepland. Verouderde structuur, magere scheepspagina's en onduidelijke capability-signalen kunnen geloofwaardigheid kosten vóór het eerste gesprek begint.",
    categoryNl: "Maritiem webdesign",
    readingTimeNl: "6 min lezen",
    seoTitleNl:
      "Maritiem webdesign: waarom offshore-bedrijven online vertrouwen verliezen",
    metaDescriptionNl:
      "Maritiem webdesign gaat niet alleen om visuals. Ontdek waarom offshore-, scheeps- en scheepvaartbedrijven online vertrouwen kunnen verliezen vóór het eerste klantgesprek.",
    keywordsNl: [
      "maritiem webdesign",
      "offshore website",
      "scheepswebsite",
      "website scheepvaartbedrijf",
      "maritieme website",
      "website offshore aannemer",
    ],
    introNl:
      "In maritiem en offshore is een website geen digitale brochure naast het bedrijf. Het is een vertrouwenssignaal. Vóór een koper contact opneemt, een capability pack aanvraagt, projectdetails deelt of een serieus commercieel gesprek start, bekijkt hij of zij vaak eerst de website. Voelt de site verouderd, onduidelijk of mager, dan kan het bedrijf geloofwaardigheid verliezen vóór het eerste gesprek — ongeacht hoe sterk de operatie offshore is.",
    heroImage: article.heroImage
      ? {
          ...article.heroImage,
          altNl:
            "Breure.ai maritiem webdesign met offshore professional in moderne scheepsbrug",
        }
      : undefined,
    inlineImages: article.inlineImages?.map((image) => {
      if (image.afterSectionId === "vessel-pages") {
        return {
          ...image,
          altNl:
            "Breure.ai offshore webdesign mockup met scheepspagina-wireframes en maritieme capability-layout",
          captionNl:
            "Een sterke scheepspagina vertaalt technische capability naar duidelijke digitale vertrouwenssignalen.",
        }
      }
      if (image.afterSectionId === "safety-compliance") {
        return {
          ...image,
          altNl:
            "Breure.ai scheepswebsite-design met professional die scheepsblauwdrukken bekijkt in havenkantoor",
          captionNl:
            "Maritieme kopers zoeken operationele degelijkheid, niet alleen visuele presentatie.",
        }
      }
      return image
    }),
    sections: article.sections.map((section) => ({
      ...section,
      headingNl: sectionNl[section.id]?.headingNl ?? section.heading,
      paragraphsNl: sectionNl[section.id]?.paragraphsNl ?? section.paragraphs,
    })),
    conclusion: {
      ...article.conclusion,
      headingNl: "8. Conclusie: uw website moet zo serieus aanvoelen als uw operatie",
      paragraphsNl: [
        "Vertrouwen in maritiem en offshore wordt opgebouwd door consistentie — tussen wat een bedrijf claimt, wat het kan aantonen en hoe het zich presenteert onder scrutiny. De website is vaak de eerste gestructureerde blootstelling die een koper heeft aan die consistentie. Is die helder, capabel en actueel, dan ondersteunt zij commerciële gesprekken vóór zij beginnen. Is dat niet zo, dan ontstaat twijfel vroeg — en vroege twijfel is duur om ongedaan te maken.",
        "Investeren in maritiem webdesign gaat niet om awards of agency-trends najagen. Het gaat erom geloofwaardigheid zichtbaar te maken: voor charterers die assets vergelijken, voor projectteams die aannemers shortlisten, voor partners die fit beoordelen, en voor mensen binnen uw organisatie die een site nodig hebben die zij willen delen.",
      ],
      ctaNl:
        "Breure.ai bouwt gerichte maritieme websites voor offshore-, scheeps-, scheepvaart- en industriële bedrijven die geloofwaardig moeten zijn vóór het eerste gesprek begint.",
    },
  }
}

export const insightArticles: InsightArticle[] = baseInsightArticles.map((article) =>
  article.slug === "maritime-website-design-trust"
    ? withMaritimeTrustNl(article)
    : article,
)

export function insightsIndexPath(locale: InsightLocale): string {
  return locale === "nl" ? "/inzichten" : "/en/insights"
}

export function insightArticlePath(
  article: InsightArticle,
  locale: InsightLocale,
): string {
  const slug =
    locale === "nl" ? (article.slugNl ?? article.slug) : article.slug
  return `${insightsIndexPath(locale)}/${slug}`
}

type InsightLocalizableScalarField =
  | "title"
  | "excerpt"
  | "category"
  | "readingTime"
  | "seoTitle"
  | "metaDescription"
  | "intro"

export function getInsightField(
  article: InsightArticle,
  field: InsightLocalizableScalarField,
  locale: InsightLocale,
): string {
  if (locale === "nl") {
    const nlKey = `${field}Nl` as keyof InsightArticle
    const nlValue = article[nlKey]
    if (typeof nlValue === "string") return nlValue
  }
  return article[field]
}

export function getInsightKeywords(
  article: InsightArticle,
  locale: InsightLocale,
): string[] {
  if (locale === "nl" && article.keywordsNl) return article.keywordsNl
  return article.keywords
}

export function getInsightSlug(
  article: InsightArticle,
  locale: InsightLocale,
): string {
  if (locale === "nl") return article.slugNl ?? article.slug
  return article.slug
}

export function getSectionHeading(
  section: InsightSection,
  locale: InsightLocale,
): string {
  if (locale === "nl" && section.headingNl) return section.headingNl
  return section.heading
}

export function getSectionParagraphs(
  section: InsightSection,
  locale: InsightLocale,
): string[] {
  if (locale === "nl" && section.paragraphsNl) return section.paragraphsNl
  return section.paragraphs
}

export function getConclusionHeading(
  article: InsightArticle,
  locale: InsightLocale,
): string {
  if (locale === "nl" && article.conclusion.headingNl) {
    return article.conclusion.headingNl
  }
  return article.conclusion.heading
}

export function getConclusionParagraphs(
  article: InsightArticle,
  locale: InsightLocale,
): string[] {
  if (locale === "nl" && article.conclusion.paragraphsNl) {
    return article.conclusion.paragraphsNl
  }
  return article.conclusion.paragraphs
}

export function getConclusionCta(
  article: InsightArticle,
  locale: InsightLocale,
): string {
  if (locale === "nl" && article.conclusion.ctaNl) {
    return article.conclusion.ctaNl
  }
  return article.conclusion.cta
}

export function getImageAlt(
  image: InsightImage,
  locale: InsightLocale,
): string {
  if (locale === "nl" && image.altNl) return image.altNl
  return image.alt
}

export function getInlineImageCaption(
  image: InsightInlineImage,
  locale: InsightLocale,
): string | undefined {
  if (locale === "nl" && image.captionNl) return image.captionNl
  return image.caption
}

export function findArticleBySlug(
  slug: string,
  locale: InsightLocale,
): InsightArticle | undefined {
  return insightArticles.find((article) =>
    locale === "nl"
      ? article.slugNl === slug || article.slug === slug
      : article.slug === slug,
  )
}

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return findArticleBySlug(slug, "en")
}

export function formatInsightDate(
  isoDate: string,
  locale: InsightLocale = "en",
): string {
  const tag = locale === "nl" ? "nl-NL" : "en-GB"
  return new Intl.DateTimeFormat(tag, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate))
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

export function insightSitemapPaths(locale: InsightLocale): string[] {
  return [
    insightsIndexPath(locale),
    ...insightArticles.map((article) => insightArticlePath(article, locale)),
  ]
}

export function toOppositeInsightPath(
  pathname: string,
  target: InsightLocale,
): string | null {
  const normalized = pathname.replace(/\/+$/, "") || "/"
  const nlIndex = insightsIndexPath("nl")
  const enIndex = insightsIndexPath("en")

  if (normalized === nlIndex || normalized === enIndex) {
    return insightsIndexPath(target)
  }

  const nlMatch = normalized.match(/^\/inzichten\/([^/]+)$/)
  if (nlMatch) {
    const article = findArticleBySlug(nlMatch[1], "nl")
    return article
      ? insightArticlePath(article, target)
      : insightsIndexPath(target)
  }

  const enMatch = normalized.match(/^\/en\/insights\/([^/]+)$/)
  if (enMatch) {
    const article = findArticleBySlug(enMatch[1], "en")
    return article
      ? insightArticlePath(article, target)
      : insightsIndexPath(target)
  }

  return null
}
