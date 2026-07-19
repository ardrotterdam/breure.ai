import { toOppositeInsightPath } from "@/lib/insights"

export type Locale = "nl" | "en"

export const LOCALES: Locale[] = ["nl", "en"]
export const DEFAULT_LOCALE: Locale = "nl"

/**
 * Route map between locales. Keys are page identifiers; values are the URL paths.
 * Used by the language toggle to navigate to the matching page in the other locale.
 */
export const ROUTES = {
  home: { nl: "/", en: "/en" },
  services: { nl: "/diensten", en: "/en/services" },
  process: { nl: "/proces", en: "/en/process" },
  portfolio: { nl: "/portfolio", en: "/en/portfolio" },
  tools: { nl: "/tools/vessel-comparison", en: "/en/tools/vessel-comparison" },
  contact: { nl: "/contact", en: "/en/contact" },
  insights: { nl: "/inzichten", en: "/en/insights" },
} as const

export type RouteKey = keyof typeof ROUTES

/** Resolve a route key + locale into a URL path. */
export function routePath(key: RouteKey, locale: Locale): string {
  return ROUTES[key][locale]
}

/**
 * Given the current pathname, find the equivalent path in the target locale.
 * Falls back to the home page in the target locale.
 */
export function toOppositeLocalePath(pathname: string, target: Locale): string {
  const normalized = pathname.replace(/\/+$/, "") || "/"

  const insightPath = toOppositeInsightPath(normalized, target)
  if (insightPath) return insightPath

  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    const entry = ROUTES[key]
    if (entry.nl === normalized || entry.en === normalized) {
      return entry[target]
    }
  }
  return ROUTES.home[target]
}

/** Infer locale from a pathname. Anything starting with /en is English; everything else is Dutch. */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "nl"
}

// ---------------------------------------------------------------------------
// Translation dictionary
// ---------------------------------------------------------------------------

export const dict = {
  nav: {
    nl: {
      services: "Diensten",
      process: "Proces",
      portfolio: "Portfolio",
      tools: "Tools",
      insights: "Inzichten",
      insightsTitle: "Artikelen over maritiem & offshore",
      contact: "Contact",
      cta: "Neem contact op",
      openMenu: "Open menu",
      closeMenu: "Sluit menu",
      switchTo: "Wissel naar Engels",
      themeToggle: "Thema wisselen",
      themeLight: "Schakel naar lichte modus",
      themeDark: "Schakel naar donkere modus",
    },
    en: {
      services: "Services",
      process: "Process",
      portfolio: "Portfolio",
      tools: "Tools",
      insights: "Insights",
      insightsTitle: "Articles on maritime & offshore",
      contact: "Contact",
      cta: "Get in touch",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchTo: "Switch to Dutch",
      themeToggle: "Toggle theme",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
    },
  },

  hero: {
    nl: {
      eyebrow: "Custom maritieme software · Rotterdam",
      headlineMain: "Custom maritieme software.",
      headlineAccent: "Gebouwd in dagen",
      headlineEnd: ".",
      subheadline:
        "Wij bouwen tools die exact passen op jouw workflow — voor charterers, offshore contractors en brokers die geen maanden kunnen wachten op software.",
      paragraph: "",
      ctaPrimary: "Probeer de Vessel Comparison Tool",
      ctaSecondary: "Beschrijf jouw probleem",
      badgeOne: "Dagen, geen maanden",
      badgeTwo: "Puur maritiem",
    },
    en: {
      eyebrow: "Custom maritime software · Rotterdam",
      headlineMain: "Custom maritime software.",
      headlineAccent: "Built in days",
      headlineEnd: ".",
      subheadline:
        "We build tools that fit your exact workflow — for charterers, offshore contractors and brokers who can't wait months for software.",
      paragraph: "",
      ctaPrimary: "Try the Vessel Comparison Tool",
      ctaSecondary: "Tell us your problem",
      badgeOne: "Days, not months",
      badgeTwo: "Maritime only",
    },
  },

  /**
   * Homepage-only copy (messaging doc §4). Keeps shared keys for /diensten,
   * /proces, /contact and tool pages unchanged.
   */
  home: {
    why: {
      nl: {
        title: "Het probleem dat wij oplossen",
        intro:
          "Maritieme teams verliezen uren aan handwerk: specs vergelijken uit losse PDF's, kraancurves overtypen, informatie bij elkaar rapen uit mails van brokers. Generieke software lost dit niet op — die is niet voor jouw workflow gebouwd.",
        reasons: [
          {
            title: "Specs uit losse PDF's",
            description:
              "Vijf brokers, vijf layouts — uren kwijt aan vessel-specs naast elkaar zetten voordat je überhaupt kunt beslissen.",
          },
          {
            title: "Kraancurves en broker-mails",
            description:
              "Kraancurves overtypen, outreach zoeken op pagina 8, puzzelen met fragmenten uit e-mails. Handwerk dat niet schaalt.",
          },
          {
            title: "Generieke software faalt",
            description:
              "Off-the-shelf tools zijn niet voor jouw workflow gebouwd. Wat je nodig hebt, is software die exact op het probleem past.",
          },
        ],
      },
      en: {
        title: "The problem we solve",
        intro:
          "Maritime teams lose hours to manual work: comparing specs across scattered PDFs, retyping crane curves, piecing together broker emails. Generic software doesn't fix this — it wasn't built for your workflow.",
        reasons: [
          {
            title: "Specs across scattered PDFs",
            description:
              "Five brokers, five layouts — hours spent lining up vessel specs before you can even decide.",
          },
          {
            title: "Crane curves and broker emails",
            description:
              "Retyping crane curves, digging outreach out of page 8, piecing together email fragments. Manual work that doesn't scale.",
          },
          {
            title: "Generic software fails",
            description:
              "Off-the-shelf tools weren't built for your workflow. You need software fitted exactly to the problem.",
          },
        ],
      },
    },
    featuredTool: {
      nl: {
        eyebrow: "Vessel Comparison Tool",
        titlePrefix: "Stop met specs vergelijken",
        titleAccent: "in PDF's",
        description:
          "Vergelijk 2–4 schepen naast elkaar. Interactieve kraancurves. Directe PDF-export. Gratis te proberen.",
        cta: "Open de tool",
      },
      en: {
        eyebrow: "Vessel Comparison Tool",
        titlePrefix: "Stop comparing vessel specs",
        titleAccent: "in PDFs",
        description:
          "Compare 2–4 vessels side by side. Interactive crane load charts. Instant PDF export. Free to try.",
        cta: "Open the tool",
      },
    },
    process: {
      nl: {
        eyebrow: "Zo werken wij",
        titlePrefix: "Van probleem naar",
        titleAccent: "werkende tool",
        intro:
          "Drie stappen. Geen salestraject. Wel een tool die past op jouw workflow.",
        steps: [
          {
            number: "01",
            title: "Vertel je probleem",
            description: "5 minuten, geen salesgesprek",
          },
          {
            number: "02",
            title: "Wij bouwen jouw tool",
            description: "Exact op jouw workflow, geen generieke software",
          },
          {
            number: "03",
            title: "Live binnen een week",
            description: "Vaste prijs, geen verrassingen",
          },
        ],
      },
      en: {
        eyebrow: "How we work",
        titlePrefix: "From problem to",
        titleAccent: "working tool",
        intro:
          "Three steps. No sales process. Just a tool that fits your workflow.",
        steps: [
          {
            number: "01",
            title: "Tell us your problem",
            description: "5 minutes, no sales call",
          },
          {
            number: "02",
            title: "We build your tool",
            description: "Fitted to your workflow, nothing generic",
          },
          {
            number: "03",
            title: "Live within a week",
            description: "Fixed price, no surprises",
          },
        ],
      },
    },
    slotCta: {
      nl: {
        titlePrefix: "Heb je een terugkerend probleem",
        titleAccent: "dat software zou moeten oplossen?",
        intro:
          "Beschrijf het. Binnen een week heb je een werkende tool.",
      },
      en: {
        titlePrefix: "Got a recurring problem",
        titleAccent: "software should solve?",
        intro:
          "Describe it. You'll have a working tool within a week.",
      },
    },
  },

  why: {
    nl: {
      title: "Waarom maritieme teams voor Breure.ai kiezen",
      intro:
        "Wij verkopen geen standaardsoftware. Wij lossen één specifiek probleem op met een tool die past — en leveren die sneller dan een agency of suite ooit kan.",
      reasons: [
        {
          title: "Snelheid",
          description:
            "Solo founder, wendbaar. Custom tools in dagen in plaats van maanden — zodat u niet wacht tot het seizoen voorbij is.",
        },
        {
          title: "Puur maritiem",
          description:
            "Geen generieke software-agency. Focus op charterers, offshore contractors, brokers en de echte workflow rond specs, kraancurves en projectdruk.",
        },
        {
          title: "Probleem eerst",
          description:
            "Wij luisteren diep, vatten de pijn, en wikkelen de oplossing in software. De filosofie is open; het verschil zit in de uitvoering.",
        },
      ],
    },
    en: {
      title: "Why maritime teams choose Breure.ai",
      intro:
        "We don’t sell shelfware. We solve one specific problem with a tool that fits — and ship it faster than an agency or suite ever will.",
      reasons: [
        {
          title: "Speed",
          description:
            "Solo founder, highly agile. Custom tools in days instead of months — so you don’t wait until the season has passed.",
        },
        {
          title: "Maritime only",
          description:
            "Not a generic software agency. Focused on charterers, offshore contractors, brokers and the real workflow around specs, crane curves and project pressure.",
        },
        {
          title: "Problem first",
          description:
            "We listen deeply, capture the pain, and wrap the solution in software. The philosophy is public; the difference is in the execution.",
        },
      ],
    },
  },

  services: {
    nl: {
      title: "Wat wij bouwen voor maritieme teams",
      intro:
        "Van live tools tot custom builds: software die één concrete pijn wegneemt. Websites bouwen we nog steeds — wanneer dat het juiste antwoord op het probleem is.",
      items: [
        {
          tag: "Live tool",
          number: "01",
          title: "Vessel Comparison Tool",
          description:
            "Vergelijk 2–4 schepen naast elkaar op kraancapaciteit, deck, DP en meer — met interactieve kraancurves en PDF-export. Gebouwd voor charterers die klaar zijn met losse spec-PDF’s.",
          features: [
            "Side-by-side vergelijking in seconden",
            "Interactieve kraan-lastdiagrammen",
            "Directe PDF-export van de vergelijking",
          ],
        },
        {
          tag: "Custom builds",
          number: "02",
          title: "Tools op maat voor uw workflow",
          description:
            "U beschrijft het probleem; wij wikkelen de oplossing in een tool die exact past. Snel gescoord, snel geleverd — geen maandenlange trajecten.",
          features: [
            "Scoped op één helder probleem",
            "Levering in dagen tot ongeveer een week",
            "AI-gedreven waar het echt versnelt",
          ],
        },
        {
          tag: "Desgevraagd",
          number: "03",
          title: "Maritieme websites & asset-pagina’s",
          description:
            "Wanneer geloofwaardigheid online het knelpunt is: gerichte sites en capaciteitspagina’s voor offshore en scheepvaart — asset-first, niet corporate-first.",
          features: [
            "Asset-microsites en vlootpresentatie",
            "Technische specs die tenderteams snappen",
            "Snel, scherp en sectorgericht",
          ],
        },
      ],
    },
    en: {
      title: "What we build for maritime teams",
      intro:
        "From live tools to custom builds: software that removes one concrete pain. We still build websites — when that is the right answer to the problem.",
      items: [
        {
          tag: "Live tool",
          number: "01",
          title: "Vessel Comparison Tool",
          description:
            "Compare 2–4 vessels side by side on crane capacity, deck, DP and more — with interactive crane curves and PDF export. Built for charterers done with loose spec PDFs.",
          features: [
            "Side-by-side comparison in seconds",
            "Interactive crane load charts",
            "Direct PDF export of the comparison",
          ],
        },
        {
          tag: "Custom builds",
          number: "02",
          title: "Tools built around your workflow",
          description:
            "You describe the problem; we wrap the solution in a tool that fits. Scoped fast, shipped fast — no multi-month programmes.",
          features: [
            "Scoped to one clear problem",
            "Delivery in days to about a week",
            "AI-driven where it truly accelerates",
          ],
        },
        {
          tag: "When needed",
          number: "03",
          title: "Maritime websites & asset pages",
          description:
            "When online credibility is the bottleneck: focused sites and capability pages for offshore and shipping — asset-first, not corporate-first.",
          features: [
            "Asset microsites and fleet presentation",
            "Technical specs tender teams understand",
            "Fast, sharp and sector-specific",
          ],
        },
      ],
    },
  },

  process: {
    nl: {
      eyebrow: "Ons proces",
      titlePrefix: "Van probleem naar",
      titleAccent: "werkende tool",
      intro:
        "Kort, helder en gebouwd voor tempo. Geen maandenlange trajecten — wel een tool die uw team meteen kan gebruiken.",
      steps: [
        {
          number: "01",
          title: "Probleem begrijpen",
          description:
            "U beschrijft de pijn in de workflow. Wij stellen scherpe vragen tot het probleem écht scherp staat.",
        },
        {
          number: "02",
          title: "Scope & aanpak",
          description:
            "Vaste scope, vaste prijsindicatie, geen verrassingen. Alleen wat nodig is om het probleem weg te nemen.",
        },
        {
          number: "03",
          title: "Bouwen",
          description:
            "Wij bouwen de tool snel en iteratief — met focus op betrouwbaarheid, niet op features die niemand gebruikt.",
        },
        {
          number: "04",
          title: "Opleveren",
          description:
            "Live binnen dagen tot ongeveer een week. Daarna bijsturen op basis van hoe uw team hem écht gebruikt.",
        },
      ],
    },
    en: {
      eyebrow: "Our process",
      titlePrefix: "From problem to",
      titleAccent: "working tool",
      intro:
        "Short, clear and built for speed. No multi-month programmes — just a tool your team can use immediately.",
      steps: [
        {
          number: "01",
          title: "Understand the problem",
          description:
            "You describe the pain in the workflow. We ask sharp follow-ups until the problem is truly clear.",
        },
        {
          number: "02",
          title: "Scope & approach",
          description:
            "Fixed scope, clear pricing, no surprises. Only what is needed to remove the problem.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "We build the tool fast and iteratively — focused on reliability, not features nobody uses.",
        },
        {
          number: "04",
          title: "Deliver",
          description:
            "Live in days to about a week. Then we refine based on how your team actually uses it.",
        },
      ],
    },
  },

  portfolio: {
    nl: {
      eyebrow: "Tools & projecttypes",
      title: "Live tools, custom builds en asset-presentaties",
      intro:
        "Wat wij bouwen voor charterers, contractors en vlooteigenaren — te beginnen bij software die een concrete pijn wegneemt. Specifieke referenties delen wij op aanvraag onder NDA.",
      ndaNote:
        "Specifieke referenties, technische case studies en demo-omgevingen delen wij op aanvraag via het contactformulier, onder NDA waar nodig.",
      items: [
        {
          category: "SaaS-tool",
          title: "Vessel Comparison Tool",
          description:
            "Interactieve vergelijkingstool voor offshore support vessels. Charterers en aannemers zetten 2–4 schepen naast elkaar, filteren op kraancapaciteit, DP-klasse en dekoppervlak, en exporteren de vergelijking als PDF — zonder uren in datasheets te zoeken.",
          href: "/tools/vessel-comparison",
          metrics: [
            { label: "Vergelijking", value: "2–4 schepen naast elkaar" },
            { label: "Kraan-charts", value: "Interactief" },
            { label: "Export", value: "Direct als PDF" },
          ],
        },
        {
          category: "Heavy-lift vessel",
          title: "Microsite voor crane vessel",
          description:
            "Dedicated microsite voor een heavy-lift crane vessel met dynamische load charts, deck layout en projectreferenties. Direct bruikbaar in tenders en FEED-studies.",
          metrics: [
            { label: "Load charts", value: "SWL & outreach" },
            { label: "Talen", value: "NL · EN" },
            { label: "Doorlooptijd", value: "4–8 weken" },
          ],
        },
        {
          category: "Jack-up platform",
          title: "Capaciteitspagina jack-up",
          description:
            "Capaciteitspagina voor een wind-installatie jack-up. Compleet met leg length, payload, accommodatie, transitdata en downloadbare datasheets voor contractors.",
          metrics: [
            { label: "Datasheets", value: "PDF per asset" },
            { label: "Sectoren", value: "Wind · O&G" },
            { label: "Doorlooptijd", value: "4–8 weken" },
          ],
        },
        {
          category: "Supportvloot",
          title: "Vlootplatform multi-vessel",
          description:
            "Vlootwebsite voor een offshore support operator. Per schip een eigen detailpagina met specs, beeldmateriaal en charter-aanvraag — gekoppeld aan één merkbeleving.",
          metrics: [
            { label: "Vlootpresentatie", value: "Per schip" },
            { label: "Charterflow", value: "Geïntegreerd" },
            { label: "Doorlooptijd", value: "6–10 weken" },
          ],
        },
        {
          category: "Offshore contractor",
          title: "Corporate site met asset library",
          description:
            "Corporate website met geïntegreerde asset library. Tenderteams, brokers en charterers vinden in één omgeving zowel het bedrijfsverhaal als concrete capability data.",
          metrics: [
            { label: "Assetprofielen", value: "Centraal beheer" },
            { label: "Performance", value: "Core Web Vitals" },
            { label: "Doorlooptijd", value: "8–12 weken" },
          ],
        },
      ],
    },
    en: {
      eyebrow: "Tools & project types",
      title: "Live tools, custom builds and asset presentations",
      intro:
        "What we build for charterers, contractors and fleet owners — starting with software that removes a concrete pain. Specific case studies are shared under NDA on request.",
      ndaNote:
        "Specific references, technical case studies and demo environments are shared on request via the contact form, under NDA where required.",
      items: [
        {
          category: "SaaS tool",
          title: "Vessel Comparison Tool",
          description:
            "Interactive comparison tool for offshore support vessels. Charterers and contractors put 2–4 vessels side by side, filter by crane capacity, DP class and deck area, then export the comparison as PDF — without hours spent hunting through datasheets.",
          href: "/en/tools/vessel-comparison",
          metrics: [
            { label: "Comparison", value: "2–4 vessels side-by-side" },
            { label: "Crane charts", value: "Interactive" },
            { label: "Export", value: "Instant PDF" },
          ],
        },
        {
          category: "Heavy-lift vessel",
          title: "Crane vessel asset microsite",
          description:
            "Dedicated microsite for a heavy-lift crane vessel with dynamic load charts, deck layout and project references. Ready to use in tenders and FEED studies.",
          metrics: [
            { label: "SWL & outreach charts", value: "Live" },
            { label: "Languages", value: "NL · EN" },
            { label: "Time to launch", value: "5 weeks" },
          ],
        },
        {
          category: "Jack-up platform",
          title: "Jack-up capability page",
          description:
            "Capability page for a wind installation jack-up. Complete with leg length, payload, accommodation, transit data and downloadable datasheets for contractors.",
          metrics: [
            { label: "Datasheets (PDF)", value: "Per asset" },
            { label: "Sectors", value: "Wind · O&G" },
            { label: "Time to launch", value: "4 weeks" },
          ],
        },
        {
          category: "Support fleet",
          title: "Multi-vessel fleet site",
          description:
            "Fleet website for an offshore support operator. Per vessel a dedicated detail page with specs, photos and charter request, linked to a central brand experience.",
          metrics: [
            { label: "Vessels online", value: "12" },
            { label: "Charter requests", value: "+38%" },
            { label: "Time to launch", value: "8 weeks" },
          ],
        },
        {
          category: "Offshore contractor",
          title: "Corporate site with asset library",
          description:
            "Corporate website with integrated asset library. Tender teams, brokers and charterers find both the company story and concrete capability data in one place.",
          metrics: [
            { label: "Asset profiles", value: "20+" },
            { label: "PageSpeed", value: "98 / 100" },
            { label: "Time to launch", value: "10 weeks" },
          ],
        },
      ],
    },
  },

  contact: {
    nl: {
      eyebrow: "Contact",
      titlePrefix: "Klaar om uw probleem",
      titleAccent: "in software te vatten?",
      intro:
        "Vul het contactformulier in. Wij reageren per e-mail of telefoon en bespreken welk probleem wij als eerste kunnen oplossen.",
      emailLabel: "E-mail",
      addressLabel: "Adres",
      address: ["Westplein 12", "3016 BM Rotterdam", "The Netherlands"],
      tagline: "Snelheid. Focus. Resultaat.",
      form: {
        subject: "Nieuw contactverzoek via Breure.ai",
        fromName: "Breure.ai Website",
        nameLabel: "Naam",
        namePlaceholder: "Uw naam",
        companyLabel: "Bedrijf",
        companyPlaceholder: "Uw bedrijf",
        emailLabel: "E-mailadres",
        emailPlaceholder: "uw@email.com",
        messageLabel: "Welk probleem wilt u oplossen?",
        messagePlaceholder:
          "Bijvoorbeeld: vessel-specs vergelijken, kraancapaciteit beoordelen, of een ander knelpunt in uw maritieme workflow…",
        submit: "Verstuur bericht",
        submitting: "Verzenden...",
        success: "Bedankt. Wij nemen per e-mail of telefoon contact met u op.",
        error: "Er ging iets fout. Probeer opnieuw.",
        consent:
          "Door dit formulier te verzenden gaat u akkoord met verwerking van uw gegevens voor het beantwoorden van uw aanvraag.",
      },
    },
    en: {
      eyebrow: "Contact",
      titlePrefix: "Ready to wrap your problem",
      titleAccent: "in software?",
      intro:
        "Use the contact form below. We'll respond by email or phone and discuss which problem we can solve first.",
      emailLabel: "Email",
      addressLabel: "Address",
      address: ["Westplein 12", "3016 BM Rotterdam", "The Netherlands"],
      tagline: "Speed. Focus. Results.",
      form: {
        subject: "New contact request via Breure.ai",
        fromName: "Breure.ai Website",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        companyLabel: "Company",
        companyPlaceholder: "Your company",
        emailLabel: "Email address",
        emailPlaceholder: "you@email.com",
        messageLabel: "What problem should we solve?",
        messagePlaceholder:
          "For example: comparing vessel specs, reviewing crane capacity, or another bottleneck in your maritime workflow…",
        submit: "Send message",
        submitting: "Sending...",
        success: "Thank you. We'll get back to you by email or phone.",
        error: "Something went wrong. Please try again.",
        consent:
          "By submitting this form you consent to your data being processed to respond to your enquiry.",
      },
    },
  },

  pageHeaders: {
    nl: {
      services: {
        eyebrow: "Diensten",
        titlePrefix: "Custom maritieme software — van live tools tot",
        titleAccent: "builds op maat",
        description:
          "Wij lossen specifieke maritieme problemen op met AI-gedreven tools. Start met de Vessel Comparison Tool, of laat ons een tool bouwen die exact op uw workflow past.",
      },
      process: {
        eyebrow: "Proces",
        titlePrefix: "Van scherp probleem naar",
        titleAccent: "werkende tool",
        description:
          "Geen maanden wachten — oplevering in dagen tot ongeveer een week. Vier heldere stappen: begrijpen, scopen, bouwen, opleveren.",
      },
      portfolio: {
        eyebrow: "Portfolio",
        titlePrefix: "Tools en projecten waarop",
        titleAccent: "charterers en contractors",
        titleSuffix: "beslissen",
        description:
          "Van de live Vessel Comparison Tool tot custom builds en asset-presentaties voor offshore-teams. Software eerst — websites wanneer dat het probleem oplost.",
      },
      tools: {
        eyebrow: "Vessel Comparison Tool",
        titlePrefix: "Stop met vessel-specs vergelijken",
        titleAccent: "in PDF's",
        description:
          "Vergelijk 2–4 offshore support vessels side-by-side op kraancapaciteit, dekoppervlak, DP-klasse en meer. Verken interactieve kraan-lastdiagrammen en exporteer de vergelijking als PDF — gebouwd voor charterers en offshore-aannemers in Rotterdam en daarbuiten.",
      },
    },
    en: {
      services: {
        eyebrow: "Services",
        titlePrefix: "Custom maritime software — from live tools to",
        titleAccent: "builds on demand",
        description:
          "We solve specific maritime problems with AI-driven tools. Start with the Vessel Comparison Tool, or let us build a tool that fits your workflow exactly.",
      },
      process: {
        eyebrow: "Process",
        titlePrefix: "From a sharp problem to a",
        titleAccent: "working tool",
        description:
          "No months of waiting — delivery in days to about a week. Four clear steps: understand, scope, build, deliver.",
      },
      portfolio: {
        eyebrow: "Portfolio",
        titlePrefix: "Tools and projects that",
        titleAccent: "charterers and contractors",
        titleSuffix: "decide on",
        description:
          "From the live Vessel Comparison Tool to custom builds and asset presentations for offshore teams. Software first — websites when that solves the problem.",
      },
      tools: {
        eyebrow: "Vessel Comparison Tool",
        titlePrefix: "Stop comparing vessel specs",
        titleAccent: "in PDFs",
        description:
          "Compare 2–4 offshore support vessels side by side on crane capacity, deck area, DP class and more. Explore interactive crane load charts and export the comparison as PDF — built for charterers and offshore contractors in Rotterdam and beyond.",
      },
    },
  },

  contactRelated: {
    nl: {
      heading: "Meer over onze aanpak",
      description:
        "Bekijk onze diensten, het stappenplan en portfolio voordat u contact opneemt — zo weet u direct of een tool, custom build of website past.",
    },
    en: {
      heading: "More about our approach",
      description:
        "Review our services, process and portfolio before you get in touch — so you know whether a tool, custom build or website fits.",
    },
  },

  latestInsight: {
    nl: {
      eyebrow: "Inzichten",
      title: "Laatste inzicht",
      description:
        "Praktische perspectieven op maritieme workflows, offshore-geloofwaardigheid en digitaal vertrouwen.",
      readArticle: "Lees artikel",
      viewAll: "Alle inzichten",
      languageBadge: "",
    },
    en: {
      eyebrow: "Insights",
      title: "Latest maritime insight",
      description:
        "Practical perspectives on maritime workflows, offshore credibility and digital trust.",
      readArticle: "Read article",
      viewAll: "All insights",
      languageBadge: "",
    },
  },

  sectionLinks: {
    nl: {
      services: "Alle diensten bekijken",
      process: "Ons volledige proces",
      portfolio: "Bekijk ons portfolio",
      tools: "Open de Vessel Comparison Tool",
      contactPage: "Naar de contactpagina",
    },
    en: {
      services: "View all services",
      process: "See our full process",
      portfolio: "View our portfolio",
      tools: "Open the Vessel Comparison Tool",
      contactPage: "Go to the contact page",
    },
  },

  contactFaqs: {
    nl: {
      heading: "Veelgestelde vragen",
      intro:
        "Een kort overzicht van wat u kunt verwachten wanneer u een maritiem softwareprobleem met ons bespreekt.",
      items: [
        {
          question: "Welk type werk neemt u aan?",
          answer:
            "Custom maritieme tools die één concreet probleem oplossen — plus de live Vessel Comparison Tool. Maritieme websites bouwen wij wanneer online geloofwaardigheid het knelpunt is.",
        },
        {
          question: "Hoe lang duurt een project gemiddeld?",
          answer:
            "Custom tools leveren wij doorgaans in dagen tot ongeveer een week. Grotere scopes of websites plannen wij na de eerste intake realistisch in.",
        },
        {
          question: "Kunnen referenties onder NDA worden gedeeld?",
          answer:
            "Ja. Specifieke case studies, demo-omgevingen en technische referenties delen wij op aanvraag via het contactformulier. Waar nodig werken wij onder NDA — gangbaar in offshore en maritieme projecten.",
        },
        {
          question: "Waarom richt Breure.ai zich op maritiem en offshore?",
          answer:
            "Daar zit de pijn én het tempo: charterers, contractors en brokers die tijd verliezen aan PDF’s, versnipperde data en handmatig vergelijkwerk. Wij winnen op snelheid en relatie, niet op omvang.",
        },
        {
          question: "Hoe start ik een aanvraag?",
          answer:
            "Beschrijf het probleem in het formulier. Wij reageren per e-mail of telefoon en plannen een verkennend gesprek — vrijblijvend en vertrouwelijk.",
        },
      ],
    },
    en: {
      heading: "Frequently asked questions",
      intro:
        "A brief overview of what to expect when you discuss a maritime software problem with us.",
      items: [
        {
          question: "What types of work do you take on?",
          answer:
            "Custom maritime tools that solve one concrete problem — plus the live Vessel Comparison Tool. We still build maritime websites when online credibility is the bottleneck.",
        },
        {
          question: "What is a typical project timeline?",
          answer:
            "Custom tools usually ship in days to about a week. Larger scopes or websites get a realistic schedule after the first intake.",
        },
        {
          question: "Can references be shared under NDA?",
          answer:
            "Yes. Specific case studies, demo environments and technical references are shared on request via the contact form. We work under NDA where required — common in offshore and maritime projects.",
        },
        {
          question: "Why do you focus on maritime and offshore?",
          answer:
            "That’s where the pain and the pace are: charterers, contractors and brokers losing time to PDFs, fragmented data and manual comparison work. We win on speed and relationship, not scale.",
        },
        {
          question: "How do I start a request?",
          answer:
            "Describe the problem in the form. We respond by email or phone and schedule an exploratory call — no obligation, always confidential.",
        },
      ],
    },
  },

  ctas: {
    nl: {
      services: {
        eyebrow: "Klaar om te starten",
        title: "Welk maritiem probleem lossen wij als eerste op?",
        description:
          "Via het contactformulier bespreken wij of een live tool, custom build of website het juiste antwoord is.",
        primary: "Vraag een verkennend gesprek aan",
        secondary: "Bekijk ons proces",
      },
      process: {
        eyebrow: "Start uw project",
        title: "Klaar voor een tool die past?",
        description:
          "Stuur ons een bericht. Wij bespreken graag het probleem, de scope en de tijdlijn. Vrijblijvend en altijd vertrouwelijk.",
        primary: "Neem contact op",
        secondary: "Bekijk onze diensten",
      },
      portfolio: {
        eyebrow: "Volgende tool?",
        title: "Zie wat er al live staat — en wat wij voor u kunnen bouwen.",
        description:
          "Wij bespreken graag welke aanpak past bij uw probleem en workflow. Demo’s delen wij op aanvraag via het contactformulier.",
        primary: "Bespreek uw probleem",
        secondary: "Bekijk onze diensten",
      },
    },
    en: {
      services: {
        eyebrow: "Ready to start",
        title: "Which maritime problem should we solve first?",
        description:
          "Use the contact form and we’ll discuss whether a live tool, custom build or website is the right answer.",
        primary: "Get in touch",
        secondary: "See our process",
      },
      process: {
        eyebrow: "Start your project",
        title: "Ready for a tool that fits?",
        description:
          "Send us a message. We’ll discuss the problem, scope and timeline. Always confidential, never any pressure.",
        primary: "Get in touch",
        secondary: "See our services",
      },
      portfolio: {
        eyebrow: "Next tool?",
        title: "See what’s already live — and what we can build for you.",
        description:
          "We’ll discuss the approach that fits your problem and workflow. Demos are shared on request via the contact form.",
        primary: "Tell us the problem",
        secondary: "See our services",
      },
    },
  },

  footer: {
    nl: {
      description:
        "Breure.ai bouwt razendsnel custom maritieme software. Specifieke problemen, opgelost in tools die exact op de workflow passen.",
      navHeading: "Navigatie",
      contactHeading: "Contact",
      copyright: (year: number) =>
        `© ${year} Breure.ai. Alle rechten voorbehouden.`,
    },
    en: {
      description:
        "Breure.ai builds custom maritime software at speed. Specific problems, solved in tools that fit the real workflow.",
      navHeading: "Navigation",
      contactHeading: "Contact",
      copyright: (year: number) =>
        `© ${year} Breure.ai. All rights reserved.`,
    },
  },
} as const

// ---------------------------------------------------------------------------
// SEO metadata
// ---------------------------------------------------------------------------

export const seo = {
  home: {
    nl: {
      title: "Breure.ai | Custom maritieme software, razendsnel gebouwd",
      description:
        "Breure.ai bouwt custom maritieme software voor charterers, offshore contractors en brokers. Van de Vessel Comparison Tool tot tools op maat — probleem eerst, snel geleverd.",
    },
    en: {
      title: "Breure.ai | Custom maritime software, built at speed",
      description:
        "Breure.ai builds custom maritime software for charterers, offshore contractors and brokers. From the Vessel Comparison Tool to tools on demand — problem first, shipped fast.",
    },
  },
  services: {
    nl: {
      title: "Diensten | Custom maritieme software & tools | Breure.ai",
      description:
        "Live tools, custom builds en desgevraagd maritieme websites. Specifieke offshore- en charterproblemen opgelost in software die op de workflow past.",
    },
    en: {
      title: "Services | Custom maritime software & tools | Breure.ai",
      description:
        "Live tools, custom builds and maritime websites when needed. Specific offshore and charter problems solved in software that fits the workflow.",
    },
  },
  process: {
    nl: {
      title: "Proces | Van probleem naar werkende tool | Breure.ai",
      description:
        "Kort proces voor custom maritieme software: probleem begrijpen, scopen, bouwen en opleveren — in dagen tot ongeveer een week.",
    },
    en: {
      title: "Process | From problem to working tool | Breure.ai",
      description:
        "A short process for custom maritime software: understand the problem, scope, build and deliver — in days to about a week.",
    },
  },
  portfolio: {
    nl: {
      title: "Portfolio | Maritieme tools & projecten | Breure.ai",
      description:
        "Vessel Comparison Tool, custom builds en asset-presentaties voor offshore-teams. Referenties op aanvraag onder NDA.",
    },
    en: {
      title: "Portfolio | Maritime tools & projects | Breure.ai",
      description:
        "Vessel Comparison Tool, custom builds and asset presentations for offshore teams. References available under NDA on request.",
    },
  },
  tools: {
    nl: {
      title: "Vessel Comparison Tool | Compare offshore vessels | Breure.ai",
      description:
        "Free vessel comparison tool for charterers and offshore contractors. Compare 2–4 support vessels side by side — crane capacity, deck area, DP class, interactive load charts and PDF export.",
    },
    en: {
      title: "Vessel Comparison Tool | Compare offshore vessels | Breure.ai",
      description:
        "Free vessel comparison tool for charterers and offshore contractors. Compare 2–4 support vessels side by side — crane capacity, deck area, DP class, interactive load charts and PDF export.",
    },
  },
  contact: {
    nl: {
      title: "Contact | Custom maritieme software Rotterdam | Breure.ai",
      description:
        "Neem contact op met Breure.ai in Rotterdam voor custom maritieme software, tools en gerichte websites. Stuur een bericht via het formulier — wij reageren per e-mail of telefoon.",
    },
    en: {
      title: "Contact | Custom maritime software Rotterdam | Breure.ai",
      description:
        "Get in touch with Breure.ai in Rotterdam for custom maritime software, tools and focused websites. Send a message through the form — we will respond by email or phone.",
    },
  },
} as const
