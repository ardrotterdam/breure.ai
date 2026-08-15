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
  maritimeSoftware: { nl: "/maritieme-software", en: "/en/maritime-software" },
  /** Legacy services URLs — redirected to maritimeSoftware. Kept for locale mapping. */
  services: { nl: "/diensten", en: "/en/services" },
  process: { nl: "/proces", en: "/en/process" },
  portfolio: { nl: "/portfolio", en: "/en/portfolio" },
  /** Unlisted hospitality routes — kept live for migration safety. */
  horeca: { nl: "/horeca", en: "/en/horeca" },
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
      home: "Home",
      maritimeSoftware: "Maritieme Software",
      demo: "Demo",
      blog: "Blog",
      blogTitle: "Artikelen over maritieme software",
      contact: "Contact",
      cta: "Bespreek je workflow",
      services: "Maritieme Software",
      process: "Proces",
      portfolio: "Portfolio",
      horeca: "Horeca",
      tools: "Demo",
      insights: "Blog",
      insightsTitle: "Artikelen over maritieme software",
      openMenu: "Open menu",
      closeMenu: "Sluit menu",
      switchTo: "Wissel naar Engels",
      themeToggle: "Thema wisselen",
      themeLight: "Schakel naar lichte modus",
      themeDark: "Schakel naar donkere modus",
    },
    en: {
      home: "Home",
      maritimeSoftware: "Maritime Software",
      demo: "Demo",
      blog: "Blog",
      blogTitle: "Articles on maritime software",
      contact: "Contact",
      cta: "Discuss your workflow",
      services: "Maritime Software",
      process: "Process",
      portfolio: "Portfolio",
      horeca: "Hospitality",
      tools: "Demo",
      insights: "Blog",
      insightsTitle: "Articles on maritime software",
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
      eyebrow: "Gerichte maritieme software · Rotterdam",
      headlineMain: "Maritieme software",
      headlineAccent: "voor het probleem dat je spreadsheet niet meer oplost",
      headlineEnd: "",
      subheadline:
        "Breure.ai bouwt gerichte software voor charterers, contractors en brokers.",
      paragraph:
        "Van technische vergelijkingstools tot kleine workflows die handmatig werk wegnemen. Eén probleem. Eén gerichte tool.",
      ctaPrimary: "Bespreek je workflow",
      ctaSecondary: "Bekijk de demo",
      ctaPrimaryRoute: "contact",
      ctaSecondaryRoute: "tools",
      badgeOne: "Dagen, geen maanden",
      badgeTwo: "Puur maritiem",
    },
    en: {
      eyebrow: "Focused maritime software · Rotterdam",
      headlineMain: "Maritime software",
      headlineAccent: "for the problem your spreadsheet no longer solves",
      headlineEnd: "",
      subheadline:
        "Breure.ai builds focused software for charterers, contractors and brokers.",
      paragraph:
        "From technical comparison tools to small workflows that take away manual work. One problem. One focused tool.",
      ctaPrimary: "Discuss your workflow",
      ctaSecondary: "View the demo",
      ctaPrimaryRoute: "contact",
      ctaSecondaryRoute: "tools",
      badgeOne: "Days, not months",
      badgeTwo: "Maritime only",
    },
  },

  /**
   * Homepage-only copy. Shared keys for /maritieme-software, /proces, /contact and
   * tool pages stay in their own dict namespaces so those pages can be updated independently.
   */
  home: {
    why: {
      nl: {
        title: "Doe je dit nog handmatig?",
        intro:
          "Veel werk in de maritieme sector gebeurt nog steeds tussen Excel-bestanden, pdf's, e-mails en de kennis van mensen.",
        paragraphs: [
          "En vaak werkt dat prima.",
          "Totdat dezelfde handelingen steeds terugkomen.",
        ],
        reasons: [
          {
            title: "Specificaties naast elkaar",
            description:
              "Specificaties worden uit meerdere documenten naast elkaar gelegd.",
          },
          {
            title: "Steeds opnieuw in Excel",
            description:
              "Een berekening wordt voor ieder nieuw project opnieuw in Excel opgebouwd.",
          },
          {
            title: "Verspreide informatie",
            description:
              "Belangrijke informatie staat verspreid over pdf's en e-mails en moet telkens handmatig bij elkaar worden gezocht.",
          },
        ],
        closingLead:
          "Daar kan gerichte software het verschil maken. Niet meteen een compleet nieuw bedrijfssysteem.",
        closing: "Eén probleem. Eén gerichte tool.",
      },
      en: {
        title: "Still doing this by hand?",
        intro:
          "A lot of work in the maritime sector still happens between Excel files, PDFs, emails and the knowledge of people.",
        paragraphs: [
          "And often that works fine.",
          "Until the same actions keep coming back.",
        ],
        reasons: [
          {
            title: "Specs side by side",
            description:
              "Specifications from multiple documents are lined up next to each other by hand.",
          },
          {
            title: "Excel, every time again",
            description:
              "A calculation is rebuilt in Excel for every new project.",
          },
          {
            title: "Scattered information",
            description:
              "Important information sits across PDFs and emails and has to be gathered manually each time.",
          },
        ],
        closingLead:
          "Focused software can make the difference there. Not immediately a complete new business system.",
        closing: "One problem. One focused tool.",
      },
    },
    featuredTool: {
      nl: {
        eyebrow: "Bekijk het in de praktijk",
        titlePrefix: "Vessel Comparison Tool",
        titleAccent: "",
        description:
          "Dit is het soort gerichte maritieme workflow dat Breure.ai bouwt.",
        paragraphs: [
          "Vergelijk scheepsspecificaties, bekijk capabilities en kraancurves, en genereer een PDF-rapport — zonder vijf datasheets naast een spreadsheet.",
          "De huidige versie gebruikt fictieve scheepsdata en is bedoeld als demonstratie. Het principe erachter laat precies zien waar Breure.ai zich op richt: een terugkerende technische handeling omzetten in een duidelijke, bruikbare workflow.",
        ],
        features: [
          "Selecteer schepen",
          "Vergelijk specificaties",
          "Bekijk kraancurves",
          "Genereer een overzichtelijk PDF-rapport",
        ],
        cta: "Probeer de Vessel Comparison Tool",
        disclaimer: "Demo-omgeving — de getoonde scheepsgegevens zijn fictief.",
      },
      en: {
        eyebrow: "See it in practice",
        titlePrefix: "Vessel Comparison Tool",
        titleAccent: "",
        description:
          "This is the kind of focused maritime workflow Breure.ai builds.",
        paragraphs: [
          "Compare vessel specifications, inspect capabilities and crane curves, and generate a PDF report — without five datasheets open next to a spreadsheet.",
          "The current version uses fictional vessel data and is intended as a demonstration. The principle behind it shows exactly where Breure.ai focuses: turning a recurring technical task into a clear, usable workflow.",
        ],
        features: [
          "Select vessels",
          "Compare specifications",
          "Inspect crane curves",
          "Generate a clear PDF report",
        ],
        cta: "Open the Vessel Comparison Tool",
        disclaimer: "Demo environment — the vessel data shown is fictional.",
      },
    },
    services: {
      nl: {
        title: "Wat bouwen we?",
        intro:
          "Breure.ai richt zich op kleine, specifieke maritieme tools in plaats van grote softwareplatformen die maanden nodig hebben voordat iemand ermee kan werken.",
        items: [
          {
            tag: "Vergelijken",
            number: "01",
            title: "Vergelijkingstools",
            description:
              "Breng specificaties uit spreadsheets, pdf's of databases samen en vergelijk ze vanuit één omgeving.",
            features: [
              "Bijvoorbeeld voor scheepsselectie, equipmentvergelijkingen of technische beoordelingen.",
            ],
          },
          {
            tag: "Beslissen",
            number: "02",
            title: "Calculators & decision tools",
            description:
              "Zet een ingewikkelde of vaak gebruikte spreadsheet om in een eenvoudige tool die rond de daadwerkelijke berekening is gebouwd.",
            features: [
              "De logica blijft consistent en de uitkomst wordt makkelijker te begrijpen, controleren en delen.",
            ],
          },
          {
            tag: "Automatiseren",
            number: "03",
            title: "Workflowautomatisering",
            description:
              "Als mensen steeds dezelfde informatie tussen documenten, spreadsheets en e-mail kopiëren, kan een deel van dat proces vaak slimmer.",
            features: [
              "Gegevens uit PDF's halen, gestructureerde documentworkflows, rapportgeneratie en koppelingen tussen tools.",
              "Niet automatiseren omdat het technisch mogelijk is — wel wanneer het tijd bespaart, fouten vermindert of repetitief werk wegneemt.",
            ],
          },
        ],
      },
      en: {
        title: "What we build",
        intro:
          "Breure.ai focuses on small, specific maritime tools rather than large software platforms that take months before anyone can work with them.",
        items: [
          {
            tag: "Compare",
            number: "01",
            title: "Comparison tools",
            description:
              "Bring specifications from spreadsheets, PDFs or databases together and compare them from one environment.",
            features: [
              "For example vessel selection, equipment comparison or technical specification review.",
            ],
          },
          {
            tag: "Decide",
            number: "02",
            title: "Calculators & decision tools",
            description:
              "Turn a complex or frequently used spreadsheet into a simple tool built around the actual calculation.",
            features: [
              "The logic stays consistent and the result is easier to understand, check and share.",
            ],
          },
          {
            tag: "Automate",
            number: "03",
            title: "Workflow automation",
            description:
              "When people keep copying the same information between documents, spreadsheets and email, part of that process can often be smarter.",
            features: [
              "Extracting data from PDFs, structured document workflows, report generation and integrations between tools.",
              "Not automating because it is technically possible — only when it saves time, reduces errors or removes repetitive work.",
            ],
          },
        ],
      },
    },
    process: {
      nl: {
        eyebrow: "Aanpak",
        titlePrefix: "Van probleem naar",
        titleAccent: "werkende software",
        intro:
          "Bij een strak afgebakende workflow kan een eerste werkende versie vaak binnen enkele dagen klaar zijn. Dat beloven we niet voor ieder project — we beginnen bewust klein.",
        steps: [
          {
            number: "01",
            title: "Laat de workflow zien",
            description:
              "Een spreadsheet, een paar pdf's of een bestaand handmatig proces is vaak al genoeg. We kijken naar wat er nu gebeurt, waar tijd verloren gaat en welk deel daadwerkelijk slimmer kan.",
          },
          {
            number: "02",
            title: "Scope terugbrengen",
            description:
              "We brengen het probleem terug tot de kleinste versie die daadwerkelijk waarde levert. Geen platform, geen maandenlange inventarisatie — één gerichte tool.",
          },
          {
            number: "03",
            title: "Eerste werkende versie bouwen",
            description:
              "We bouwen zo snel mogelijk iets dat in de praktijk getest kan worden. Bij een duidelijk afgebakende workflow kan dat vaak binnen enkele dagen.",
          },
          {
            number: "04",
            title: "Testen met echt werk",
            description:
              "Software wordt pas interessant wanneer die in het echte werk terechtkomt. Daar blijkt welke aannames kloppen, wat ontbreekt en wat daadwerkelijk tijd bespaart.",
          },
          {
            number: "05",
            title: "Verbeteren wat ertoe doet",
            description:
              "Geen enorme roadmap vol functies. We verbeteren wat het werk sneller, duidelijker of betrouwbaarder maakt.",
          },
        ],
      },
      en: {
        eyebrow: "How we work",
        titlePrefix: "From problem to",
        titleAccent: "working software",
        intro:
          "For a tightly scoped workflow, a first working version can often be ready within days. That is not a promise for every project — we start small on purpose.",
        steps: [
          {
            number: "01",
            title: "Show the workflow",
            description:
              "A spreadsheet, a few PDFs or an existing manual process is often enough. We look at what happens now, where time is lost and which part can actually be smarter.",
          },
          {
            number: "02",
            title: "Reduce the scope",
            description:
              "We reduce the problem to the smallest version that actually delivers value. No platform, no months of discovery — one focused tool.",
          },
          {
            number: "03",
            title: "Build a first working version",
            description:
              "We build something that can be tested in practice as quickly as possible. For a clearly scoped workflow, that can often be within days.",
          },
          {
            number: "04",
            title: "Test with real work",
            description:
              "Software only becomes interesting when it lands in real work. That is where assumptions hold or fail, and where it becomes clear what actually saves time.",
          },
          {
            number: "05",
            title: "Improve what matters",
            description:
              "No huge roadmap of features. We improve what makes the work faster, clearer or more reliable.",
          },
        ],
      },
    },
    examples: {
      nl: {
        title: "Soms heb je geen nieuw platform nodig",
        eyebrow: "Bijvoorbeeld",
        intro:
          "Niet ieder operationeel probleem vraagt om een nieuw ERP-systeem, een groot SaaS-platform of maanden development.",
        lead: "Soms moet één terugkerende taak gewoon beter.",
        items: [
          "schepen vergelijken met projecteisen;",
          "gegevens uit technische documenten structureren;",
          "consistente klant- of projectrapporten genereren;",
          "dezelfde technische berekening uitvoeren zonder telkens een spreadsheet opnieuw op te bouwen;",
          "specificaties door meerdere documenten heen doorzoeken;",
          "informatie uit verschillende bronnen op één plek samenbrengen;",
          "een interne Excel-workflow omzetten in een tool die door meerdere mensen gebruikt kan worden.",
        ],
        closing:
          "Kun je de workflow duidelijk uitleggen, dan kunnen we meestal ook snel bepalen of er een gerichte tool van te maken is.",
      },
      en: {
        title: "Sometimes you don't need a new platform",
        eyebrow: "For example",
        intro:
          "Not every operational problem needs a new ERP system, a large SaaS platform or months of development.",
        lead: "Sometimes one recurring task just needs to work better.",
        items: [
          "comparing vessels against project requirements;",
          "structuring data from technical documents;",
          "generating consistent client or project reports;",
          "running the same technical calculation without rebuilding a spreadsheet each time;",
          "searching specifications across multiple documents;",
          "bringing information from different sources into one place;",
          "turning an internal Excel workflow into a tool several people can use.",
        ],
        closing:
          "If you can explain the workflow clearly, we can usually determine quickly whether a focused tool can be built from it.",
      },
    },
    whyBreure: {
      nl: {
        title: "Waarom Breure.ai?",
        intro: "",
        paragraphs: [],
        reasons: [
          {
            title: "Maritieme focus",
            description:
              "We bouwen niet voor iedere sector alles wat los en vast zit. Breure.ai richt zich bewust op maritieme workflows, waar technische informatie, documenten, spreadsheets en operationele beslissingen vaak samenkomen. Die focus helpt om sneller tot de kern van een probleem te komen.",
          },
          {
            title: "Klein beginnen",
            description:
              "We proberen niet direct een compleet platform te verkopen. Eerst bewijzen dat één oplossing in de praktijk waarde heeft. Daarna kan er worden uitgebreid als daar een goede reden voor is.",
          },
          {
            title: "Korte lijnen",
            description:
              "De mensen met wie het probleem wordt besproken, blijven betrokken bij het bouwen van de oplossing. Dat voorkomt onnodige overdracht en maakt het makkelijker om snel bij te sturen wanneer de praktijk anders blijkt te werken dan vooraf gedacht.",
          },
          {
            title: "Moderne development",
            description:
              "We combineren moderne softwareontwikkeling met AI-assisted development om de afstand tussen idee en werkende software kleiner te maken. AI helpt ons sneller bouwen, onderzoeken en itereren.",
          },
        ],
        closingLead: "Maar AI is niet het product.",
        closing: "De software die het probleem oplost is het product.",
      },
      en: {
        title: "Why Breure.ai?",
        intro: "",
        paragraphs: [],
        reasons: [
          {
            title: "Maritime focus",
            description:
              "We don't build everything for every sector. Breure.ai focuses on maritime workflows, where technical information, documents, spreadsheets and operational decisions often come together.",
          },
          {
            title: "Start small",
            description:
              "We don't try to sell a complete platform up front. First prove that one solution has value in practice. Then expand if there is a good reason to.",
          },
          {
            title: "Short lines",
            description:
              "The people who discuss the problem stay involved in building the solution. That avoids unnecessary handovers and makes it easier to adjust when practice differs from the plan.",
          },
          {
            title: "Modern development",
            description:
              "We combine modern software development with AI-assisted development to shorten the distance between idea and working software. AI helps us build, research and iterate faster. But AI is not the product.",
          },
        ],
        closingLead: "",
        closing: "The software that solves the problem is the product.",
      },
    },
    location: {
      nl: {
        title: "Gebouwd vanuit Rotterdam",
        paragraphs: [
          "Breure.ai bouwt gerichte software voor bedrijven en professionals in de maritieme sector.",
          "Vanuit Rotterdam werken we aan tools die bestaande workflows eenvoudiger maken zonder dat daar meteen een groot IT-project voor nodig is.",
          "We geloven dat veel operationele software kleiner kan beginnen: eerst één duidelijk probleem oplossen, in de praktijk bewijzen dat het werkt en daarna alleen uitbreiden waar dat waarde toevoegt.",
        ],
      },
      en: {
        title: "Built from Rotterdam",
        paragraphs: [
          "Breure.ai builds focused software for companies and professionals in the maritime sector.",
          "From Rotterdam we work on tools that make existing workflows simpler without requiring a large IT project first.",
          "We believe a lot of operational software can start smaller: solve one clear problem first, prove it works in practice, and only then expand where that adds value.",
        ],
      },
    },
    slotCta: {
      nl: {
        titlePrefix: "Welke maritieme workflow kost",
        titleAccent: "onnodig veel tijd?",
        intro: "Je hoeft vooraf niet te weten welke software je nodig hebt.",
        paragraphs: [
          "Begin bij het probleem.",
          "Laat de spreadsheet zien die steeds opnieuw wordt gebruikt. De pdf's die telkens naast elkaar moeten worden gelegd. De berekening die steeds opnieuw wordt gemaakt. Of die ene handeling waarvan iedereen binnen het team weet dat het eigenlijk slimmer zou moeten kunnen.",
          "We kijken naar de huidige workflow en bepalen of een gerichte tool daar daadwerkelijk iets kan verbeteren.",
          "Als dat zo is, maken we duidelijk hoe een eerste bruikbare versie eruit kan zien.",
        ],
        toolCta: "Of bekijk eerst de Vessel Comparison Tool",
      },
      en: {
        titlePrefix: "Which maritime workflow is costing",
        titleAccent: "more time than it should?",
        intro: "You do not need to know in advance which software you need.",
        paragraphs: [
          "Start with the problem.",
          "Show us the spreadsheet that keeps getting reused. The PDFs that have to be lined up every time. The calculation that is made over and over. Or that one step everyone on the team knows should be smarter.",
          "We look at the current workflow and determine whether a focused tool can actually improve it.",
          "If it can, we make clear what a first working version could look like.",
        ],
        toolCta: "Or look at the Vessel Comparison Tool first",
      },
    },
  },

  why: {
    nl: {
      title: "Waarom Breure.ai?",
      intro:
        "Breure.ai bouwt gerichte custom software voor maritieme workflows — voor charterers, contractors en brokers.",
      reasons: [
        {
          title: "Maritieme focus",
          description:
            "We bouwen niet voor iedere sector alles wat los en vast zit. Breure.ai richt zich bewust op maritieme workflows, waar technische informatie, documenten, spreadsheets en operationele beslissingen vaak samenkomen.",
        },
        {
          title: "Klein beginnen",
          description:
            "We proberen niet direct een compleet platform te verkopen. Eerst bewijzen dat één oplossing in de praktijk waarde heeft. Daarna kan er worden uitgebreid als daar een goede reden voor is.",
        },
        {
          title: "Korte lijnen",
          description:
            "De mensen met wie het probleem wordt besproken, blijven betrokken bij het bouwen van de oplossing. Dat voorkomt onnodige overdracht en maakt het makkelijker om snel bij te sturen.",
        },
        {
          title: "Moderne development",
          description:
            "We combineren moderne softwareontwikkeling met AI-assisted development om de afstand tussen idee en werkende software kleiner te maken. AI helpt ons sneller bouwen — maar AI is niet het product.",
        },
      ],
    },
    en: {
      title: "Why Breure.ai?",
      intro:
        "Breure.ai builds focused custom software for maritime workflows — for charterers, contractors and brokers.",
      reasons: [
        {
          title: "Maritime focus",
          description:
            "We don't build everything for every sector. Breure.ai focuses on maritime workflows, where technical information, documents, spreadsheets and operational decisions often come together.",
        },
        {
          title: "Start small",
          description:
            "We don't try to sell a complete platform up front. First prove that one solution has value in practice. Then expand if there is a good reason to.",
        },
        {
          title: "Short lines",
          description:
            "The people who discuss the problem stay involved in building the solution. That avoids unnecessary handovers and makes it easier to adjust when practice differs from the plan.",
        },
        {
          title: "Modern development",
          description:
            "We combine modern software development with AI-assisted development to shorten the distance between idea and working software. AI helps us build faster — but AI is not the product.",
        },
      ],
    },
  },

  services: {
    nl: {
      title: "Drie soorten gerichte maritieme software",
      intro:
        "Breure.ai bouwt geen grote platformen. We bouwen gerichte tools voor concrete operationele problemen — voor charterers, contractors, brokers en maritieme teams met repetitieve technische of operationele workflows.",
      items: [
        {
          tag: "Vergelijken",
          number: "01",
          title: "Vergelijkingstools",
          description:
            "Breng specificaties uit spreadsheets, pdf's of databases samen en vergelijk ze vanuit één omgeving.",
          features: [
            "Scheepsvergelijking",
            "Equipmentvergelijking",
            "Technische specificaties naast elkaar",
          ],
        },
        {
          tag: "Beslissen",
          number: "02",
          title: "Calculators & decision tools",
          description:
            "Zet een ingewikkelde of vaak gebruikte spreadsheet om in een eenvoudige tool die rond de daadwerkelijke berekening is gebouwd.",
          features: [
            "Herhaalde Excel-workflows vervangen",
            "Consistente berekeningen",
            "Makkelijker delen en rapporteren",
          ],
        },
        {
          tag: "Automatiseren",
          number: "03",
          title: "Workflowautomatisering",
          description:
            "Als mensen steeds dezelfde informatie tussen documenten, spreadsheets en e-mail kopiëren, kan een deel van dat proces vaak slimmer.",
          features: [
            "Gegevens uit PDF's halen",
            "Gestructureerde documentworkflows",
            "Rapportgeneratie en koppelingen tussen tools",
          ],
        },
      ],
    },
    en: {
      title: "Three kinds of focused maritime software",
      intro:
        "Breure.ai does not build large platforms. We build focused tools for concrete operational problems — for charterers, contractors, brokers and maritime teams with repetitive technical or operational workflows.",
      items: [
        {
          tag: "Compare",
          number: "01",
          title: "Comparison tools",
          description:
            "Bring specifications from spreadsheets, PDFs or databases together and compare them from one environment.",
          features: [
            "Vessel comparison",
            "Equipment comparison",
            "Technical specification comparison",
          ],
        },
        {
          tag: "Decide",
          number: "02",
          title: "Calculators & decision tools",
          description:
            "Turn a complex or frequently used spreadsheet into a simple tool built around the actual calculation.",
          features: [
            "Replace repeated Excel workflows",
            "Consistent calculations",
            "Easier sharing and reporting",
          ],
        },
        {
          tag: "Automate",
          number: "03",
          title: "Workflow automation",
          description:
            "When people keep copying the same information between documents, spreadsheets and email, part of that process can often be smarter.",
          features: [
            "Extracting data from PDFs",
            "Structured document workflows",
            "Report generation and integrations between tools",
          ],
        },
      ],
    },
  },

  process: {
    nl: {
      eyebrow: "Aanpak",
      titlePrefix: "Van probleem naar",
      titleAccent: "werkende software",
      intro:
        "Bij een strak afgebakende workflow kan een eerste werkende versie vaak binnen enkele dagen klaar zijn. Dat beloven we niet voor ieder project — we beginnen bewust klein.",
      steps: [
        {
          number: "01",
          title: "Laat de workflow zien",
          description:
            "Een spreadsheet, een paar pdf's of een bestaand handmatig proces is vaak al genoeg. We kijken naar wat er nu gebeurt, waar tijd verloren gaat en welk deel daadwerkelijk slimmer kan.",
        },
        {
          number: "02",
          title: "Scope terugbrengen",
          description:
            "We brengen het probleem terug tot de kleinste versie die daadwerkelijk waarde levert. Geen platform, geen maandenlange inventarisatie — één gerichte tool.",
        },
        {
          number: "03",
          title: "Eerste werkende versie bouwen",
          description:
            "We bouwen zo snel mogelijk iets dat in de praktijk getest kan worden. Bij een duidelijk afgebakende workflow kan dat vaak binnen enkele dagen.",
        },
        {
          number: "04",
          title: "Testen met echt werk",
          description:
            "Software wordt pas interessant wanneer die in het echte werk terechtkomt. Daar blijkt welke aannames kloppen, wat ontbreekt en wat daadwerkelijk tijd bespaart.",
        },
        {
          number: "05",
          title: "Verbeteren wat ertoe doet",
          description:
            "Geen enorme roadmap vol functies. We verbeteren wat het werk sneller, duidelijker of betrouwbaarder maakt.",
        },
      ],
    },
    en: {
      eyebrow: "How we work",
      titlePrefix: "From problem to",
      titleAccent: "working software",
      intro:
        "For a tightly scoped workflow, a first working version can often be ready within days. That is not a promise for every project — we start small on purpose.",
      steps: [
        {
          number: "01",
          title: "Show the workflow",
          description:
            "A spreadsheet, a few PDFs or an existing manual process is often enough. We look at what happens now, where time is lost and which part can actually be smarter.",
        },
        {
          number: "02",
          title: "Reduce the scope",
          description:
            "We reduce the problem to the smallest version that actually delivers value. No platform, no months of discovery — one focused tool.",
        },
        {
          number: "03",
          title: "Build a first working version",
          description:
            "We build something that can be tested in practice as quickly as possible. For a clearly scoped workflow, that can often be within days.",
        },
        {
          number: "04",
          title: "Test with real work",
          description:
            "Software only becomes interesting when it lands in real work. That is where assumptions hold or fail, and where it becomes clear what actually saves time.",
        },
        {
          number: "05",
          title: "Improve what matters",
          description:
            "No huge roadmap of features. We improve what makes the work faster, clearer or more reliable.",
        },
      ],
    },
  },

  portfolio: {
    nl: {
      eyebrow: "Demo",
      title: "Vessel Comparison Tool",
      intro:
        "De Vessel Comparison Tool is een demonstratie van software voor het vergelijken van scheepscapaciteiten en technische data. Dit is het soort gerichte maritieme workflow dat Breure.ai bouwt. Specifieke referenties delen we op aanvraag onder NDA.",
      ndaNote:
        "Specifieke referenties, technische case studies en demo-omgevingen delen we op aanvraag via het contactformulier, onder NDA waar nodig.",
      items: [
        {
          category: "Demonstratie",
          title: "Vessel Comparison Tool",
          description:
            "Vergelijk scheepsspecificaties, bekijk capabilities en kraancurves, en genereer een PDF-rapport. De huidige versie gebruikt fictieve scheepsdata en is bedoeld als demonstratie.",
          href: "/tools/vessel-comparison",
          metrics: [
            { label: "Vergelijking", value: "Specificaties naast elkaar" },
            { label: "Kraancurves", value: "Interactief" },
            { label: "Export", value: "PDF-rapport" },
          ],
        },
      ],
    },
    en: {
      eyebrow: "Demo",
      title: "Vessel Comparison Tool",
      intro:
        "The Vessel Comparison Tool is a demonstration of software for comparing vessel capabilities and technical data. This is the kind of focused maritime workflow Breure.ai builds. Specific case studies are shared under NDA on request.",
      ndaNote:
        "Specific references, technical case studies and demo environments are shared on request via the contact form, under NDA where required.",
      items: [
        {
          category: "Demonstration",
          title: "Vessel Comparison Tool",
          description:
            "Compare vessel specifications, inspect capabilities and crane curves, and generate a PDF report. The current version uses fictional vessel data and is intended as a demonstration.",
          href: "/en/tools/vessel-comparison",
          metrics: [
            { label: "Comparison", value: "Specs side by side" },
            { label: "Crane curves", value: "Interactive" },
            { label: "Export", value: "PDF report" },
          ],
        },
      ],
    },
  },

  contact: {
    nl: {
      eyebrow: "Contact",
      titlePrefix: "Welke maritieme workflow kost",
      titleAccent: "onnodig veel tijd?",
      intro:
        "Laat de spreadsheet, PDF, herhaalde berekening of het handmatige proces zien. We kijken of het omgezet kan worden in een gerichte softwaretool.",
      emailLabel: "E-mail",
      addressLabel: "Adres",
      address: ["Westplein 12", "3016 BM Rotterdam", "The Netherlands"],
      tagline: "Eén probleem. Eén gerichte tool.",
      form: {
        subject: "Nieuw contactverzoek via Breure.ai",
        fromName: "Breure.ai",
        nameLabel: "Naam",
        namePlaceholder: "Je naam",
        companyLabel: "Bedrijf",
        companyPlaceholder: "Je bedrijf",
        emailLabel: "E-mailadres",
        emailPlaceholder: "je@email.com",
        messageLabel: "Welke workflow kost te veel tijd?",
        messagePlaceholder:
          "Bijvoorbeeld: schepen vergelijken, gegevens uit PDF's halen, een Excel-berekening die steeds terugkomt…",
        submit: "Verstuur bericht",
        submitting: "Verzenden...",
        success: "Bedankt. We nemen per e-mail of telefoon contact op.",
        error: "Er ging iets fout. Probeer opnieuw.",
        consent:
          "Door dit formulier te verzenden ga je akkoord met verwerking van je gegevens voor het beantwoorden van je aanvraag.",
      },
    },
    en: {
      eyebrow: "Contact",
      titlePrefix: "Which maritime workflow is costing",
      titleAccent: "more time than it should?",
      intro:
        "Show us the spreadsheet, PDF, repeated calculation or manual process. We will look at whether it can be turned into a focused software tool.",
      emailLabel: "Email",
      addressLabel: "Address",
      address: ["Westplein 12", "3016 BM Rotterdam", "The Netherlands"],
      tagline: "One problem. One focused tool.",
      form: {
        subject: "New contact request via Breure.ai",
        fromName: "Breure.ai",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        companyLabel: "Company",
        companyPlaceholder: "Your company",
        emailLabel: "Email address",
        emailPlaceholder: "you@email.com",
        messageLabel: "Which workflow is costing too much time?",
        messagePlaceholder:
          "For example: comparing vessels, extracting data from PDFs, a spreadsheet calculation that keeps coming back…",
        submit: "Send message",
        submitting: "Sending...",
        success: "Thank you. We'll get back to you by email or phone.",
        error: "Something went wrong. Please try again.",
        consent:
          "By submitting this form you consent to your data being processed to respond to your enquiry.",
      },
    },
  },

  horeca: {
    nl: {
      hero: {
        eyebrow: "Horeca",
        title: "Websites waar je honger van krijgt.",
        description:
          "Premium websites voor restaurants, bistro's en friteries — snel, mobiel perfect, en met de sfeer van de zaak zelf.",
      },
      cases: {
        frietkot: {
          name: "Frietkot",
          location: "Bourg-Argental, Frankrijk",
          description:
            "Tweetalige site (FR/EN) voor een Belgische friterie met auberge. Editorial fotografie-opzet, warme typografie en een menukaart die de sfeer van de zaak draagt — van friet tot overnachting.",
          cta: "Bekijk live site",
          imageAlt:
            "Homepage van de Frietkot website — Belgische friterie in Bourg-Argental, ontworpen door Breure.ai",
        },
        indenkoning: {
          name: "Bistro In den Koning",
          location: "Waterlandkerkje, Zeeuws-Vlaanderen",
          label: "Concept",
          description:
            "Conceptdemo voor een bourgondische bistro. Diepe kleuren, rustige layout en ruimte voor menu, reserveren en het karakter van Zeeuws-Vlaanderen.",
          cta: "Bekijk live site",
          imageAlt:
            "Homepage van de Bistro In den Koning website — bourgondische bistro in Waterlandkerkje, ontworpen door Breure.ai",
        },
      },
      approach: {
        eyebrow: "Aanpak",
        title: "Hoe wij een zaak online zetten",
        items: [
          {
            title: "Sfeer eerst",
            description:
              "Het karakter van de zaak bepaalt het ontwerp — kleuren, typografie en fotografie volgen de keuken, niet andersom.",
          },
          {
            title: "Alles erin",
            description:
              "Menukaart, reserveren, meertalig als nodig. Wat gasten nodig hebben, staat klaar zonder rommel.",
          },
          {
            title: "Snel & vindbaar",
            description:
              "Laadt direct op telefoon en scoort in Google — zodat hongerige gasten je ook echt vinden.",
          },
        ],
      },
      cta: {
        title: "Benieuwd wat dit voor jouw zaak kan zijn?",
        description:
          "Vertel kort over je restaurant, bistro of friterie. Wij denken mee over sfeer, structuur en wat online het verschil maakt.",
        primary: "Neem contact op",
        mail: "Of mail ons",
      },
    },
    en: {
      hero: {
        eyebrow: "Hospitality",
        title: "Websites that make you hungry.",
        description:
          "Premium websites for restaurants, bistros and friteries — fast, mobile-perfect, and with the atmosphere of the place itself.",
      },
      cases: {
        frietkot: {
          name: "Frietkot",
          location: "Bourg-Argental, Frankrijk",
          description:
            "Bilingual site (FR/EN) for a Belgian friterie with an auberge. Editorial photography setup, warm typography and a menu that carries the character of the place — from fries to overnight stays.",
          cta: "View live site",
          imageAlt:
            "Homepage of the Frietkot website — Belgian friterie in Bourg-Argental, designed by Breure.ai",
        },
        indenkoning: {
          name: "Bistro In den Koning",
          location: "Waterlandkerkje, Zeeuws-Vlaanderen",
          label: "Concept",
          description:
            "Concept demo for a Burgundian bistro. Deep colours, a calm layout and room for the menu, reservations and the character of Zeeuws-Vlaanderen.",
          cta: "View live site",
          imageAlt:
            "Homepage of the Bistro In den Koning website — Burgundian bistro in Waterlandkerkje, designed by Breure.ai",
        },
      },
      approach: {
        eyebrow: "Approach",
        title: "How we put a venue online",
        items: [
          {
            title: "Atmosphere first",
            description:
              "The character of the place drives the design — colour, type and photography follow the kitchen, not the other way around.",
          },
          {
            title: "Everything in place",
            description:
              "Menu, reservations, multilingual when needed. What guests need is ready — without clutter.",
          },
          {
            title: "Fast & findable",
            description:
              "Loads instantly on phones and ranks in Google — so hungry guests can actually find you.",
          },
        ],
      },
      cta: {
        title: "Curious what this could do for your place?",
        description:
          "Tell us briefly about your restaurant, bistro or friterie. We'll think with you about atmosphere, structure and what makes the difference online.",
        primary: "Get in touch",
        mail: "Or email us",
      },
    },
  },

  pageHeaders: {
    nl: {
      services: {
        eyebrow: "Maritieme software",
        titlePrefix: "Gerichte software voor",
        titleAccent: "maritieme workflows",
        description:
          "Breure.ai bouwt vergelijkingstools, calculators en workflowautomatisering voor charterers, contractors en brokers. Geen groot platform — één probleem, één gerichte tool.",
      },
      process: {
        eyebrow: "Aanpak",
        titlePrefix: "Van probleem naar",
        titleAccent: "werkende software",
        description:
          "Bij een strak afgebakende workflow kan een eerste werkende versie vaak binnen enkele dagen klaar zijn. Vijf korte stappen: workflow laten zien, scope terugbrengen, bouwen, testen, verbeteren.",
      },
      portfolio: {
        eyebrow: "Demo",
        titlePrefix: "Vessel Comparison Tool —",
        titleAccent: "gerichte maritieme software",
        titleSuffix: "in de praktijk",
        description:
          "De Vessel Comparison Tool is een demonstratie van software voor het vergelijken van scheepscapaciteiten en technische data. De getoonde data is fictief.",
      },
      tools: {
        eyebrow: "Demo · Vessel Comparison Tool",
        titlePrefix: "Vergelijk schepen zonder",
        titleAccent: "losse PDF's",
        description:
          "Vergelijk scheepsspecificaties, bekijk capabilities en kraancurves, en genereer een PDF-rapport. Demonstratie met fictieve scheepsdata — dit is het soort gerichte maritieme workflow dat Breure.ai bouwt.",
      },
    },
    en: {
      services: {
        eyebrow: "Maritime software",
        titlePrefix: "Focused software for",
        titleAccent: "maritime workflows",
        description:
          "Breure.ai builds comparison tools, calculators and workflow automation for charterers, contractors and brokers. No large platform — one problem, one focused tool.",
      },
      process: {
        eyebrow: "Approach",
        titlePrefix: "From problem to",
        titleAccent: "working software",
        description:
          "For a tightly scoped workflow, a first working version can often be ready within days. Five short steps: show the workflow, reduce scope, build, test, improve.",
      },
      portfolio: {
        eyebrow: "Demo",
        titlePrefix: "Vessel Comparison Tool —",
        titleAccent: "focused maritime software",
        titleSuffix: "in practice",
        description:
          "The Vessel Comparison Tool is a demonstration of software for comparing vessel capabilities and technical data. The data shown is fictional.",
      },
      tools: {
        eyebrow: "Demo · Vessel Comparison Tool",
        titlePrefix: "Compare vessels without",
        titleAccent: "loose PDFs",
        description:
          "Compare vessel specifications, inspect capabilities and crane curves, and generate a PDF report. A demonstration with fictional vessel data — this is the kind of focused maritime workflow Breure.ai builds.",
      },
    },
  },

  contactRelated: {
    nl: {
      heading: "Meer over onze aanpak",
      description:
        "Bekijk wat we bouwen, de demo, of het blog voordat je contact opneemt.",
    },
    en: {
      heading: "More about our approach",
      description:
        "See what we build, the demo, or the blog before you get in touch.",
    },
  },

  latestInsight: {
    nl: {
      eyebrow: "Blog",
      title: "Laatste artikel",
      description:
        "Artikelen over maritieme software, workflows en gerichte tools voor charterers, contractors en brokers.",
      readArticle: "Lees artikel",
      viewAll: "Naar het blog",
      languageBadge: "",
    },
    en: {
      eyebrow: "Blog",
      title: "Latest article",
      description:
        "Articles on maritime software, workflows and focused tools for charterers, contractors and brokers.",
      readArticle: "Read article",
      viewAll: "Go to the blog",
      languageBadge: "",
    },
  },

  sectionLinks: {
    nl: {
      services: "Maritieme software bekijken",
      process: "Onze aanpak",
      portfolio: "Bekijk de demo",
      tools: "Open de Vessel Comparison Tool",
      contactPage: "Naar de contactpagina",
    },
    en: {
      services: "See maritime software",
      process: "See how we work",
      portfolio: "View the demo",
      tools: "Open the Vessel Comparison Tool",
      contactPage: "Go to the contact page",
    },
  },

  contactFaqs: {
    nl: {
      heading: "Veelgestelde vragen",
      intro:
        "Een kort overzicht van wat je kunt verwachten wanneer je een maritieme workflow met ons bespreekt.",
      items: [
        {
          question: "Welk type werk nemen jullie aan?",
          answer:
            "Gerichte custom software voor maritieme workflows. Vergelijkingstools, calculators en workflowautomatisering voor charterers, contractors, brokers en maritieme operators. De Vessel Comparison Tool is een demonstratie van dat soort werk.",
        },
        {
          question: "Hoe lang duurt een project?",
          answer:
            "Bij een strak afgebakende workflow kan een eerste werkende versie vaak binnen enkele dagen klaar zijn. Dat beloven we niet voor ieder project — we beginnen bewust klein en maken na de intake duidelijk wat realistisch is.",
        },
        {
          question: "Kunnen referenties onder NDA worden gedeeld?",
          answer:
            "Ja. Specifieke case studies, demo-omgevingen en technische referenties delen we op aanvraag via het contactformulier. Waar nodig werken we onder NDA — gangbaar in offshore en maritieme projecten.",
        },
        {
          question: "Waarom richt Breure.ai zich op maritiem?",
          answer:
            "Daar zitten de repetitieve technische en operationele workflows: charterers, contractors en brokers die tijd verliezen aan PDF's, spreadsheets en handmatig vergelijkwerk. We bouwen software voor dat werk — niet voor iedere sector.",
        },
        {
          question: "Hoe start ik een aanvraag?",
          answer:
            "Beschrijf de workflow in het formulier. We reageren per e-mail of telefoon — vrijblijvend en vertrouwelijk.",
        },
      ],
    },
    en: {
      heading: "Frequently asked questions",
      intro:
        "A brief overview of what to expect when you discuss a maritime workflow with us.",
      items: [
        {
          question: "What types of work do you take on?",
          answer:
            "Focused custom software for maritime workflows. Comparison tools, calculators and workflow automation for charterers, contractors, brokers and maritime operators. The Vessel Comparison Tool is a demonstration of that kind of work.",
        },
        {
          question: "What is a typical project timeline?",
          answer:
            "For a tightly scoped workflow, a first working version can often be ready within days. That is not a promise for every project — we start small on purpose and make the realistic timeline clear after intake.",
        },
        {
          question: "Can references be shared under NDA?",
          answer:
            "Yes. Specific case studies, demo environments and technical references are shared on request via the contact form. We work under NDA where required — common in offshore and maritime projects.",
        },
        {
          question: "Why do you focus on maritime?",
          answer:
            "That is where the repetitive technical and operational workflows sit: charterers, contractors and brokers losing time to PDFs, spreadsheets and manual comparison work. We build software for that work — not for every sector.",
        },
        {
          question: "How do I start a request?",
          answer:
            "Describe the workflow in the form. We respond by email or phone — no obligation, always confidential.",
        },
      ],
    },
  },

  ctas: {
    nl: {
      services: {
        eyebrow: "Klaar om te starten",
        title: "Welke maritieme workflow kost onnodig veel tijd?",
        description:
          "Laat de spreadsheet, PDF of het handmatige proces zien. We kijken of er een gerichte tool van te maken is.",
        primary: "Bespreek je workflow",
        secondary: "Bekijk de demo",
      },
      process: {
        eyebrow: "Start klein",
        title: "Klaar voor een gerichte tool?",
        description:
          "Stuur ons een bericht. We bespreken de workflow, de scope en wat een eerste werkende versie kan zijn. Vrijblijvend en altijd vertrouwelijk.",
        primary: "Bespreek je workflow",
        secondary: "Bekijk maritieme software",
      },
      portfolio: {
        eyebrow: "Zelfde soort tool nodig?",
        title: "Dit is het soort workflow dat Breure.ai bouwt.",
        description:
          "We bespreken graag of jouw spreadsheet, PDF-stroom of handmatige proces tot een gerichte tool te maken is.",
        primary: "Bespreek je workflow",
        secondary: "Bekijk maritieme software",
      },
    },
    en: {
      services: {
        eyebrow: "Ready to start",
        title: "Which maritime workflow is costing more time than it should?",
        description:
          "Show us the spreadsheet, PDF or manual process. We will look at whether a focused tool can be built from it.",
        primary: "Discuss your workflow",
        secondary: "View the demo",
      },
      process: {
        eyebrow: "Start small",
        title: "Ready for a focused tool?",
        description:
          "Send us a message. We will discuss the workflow, the scope and what a first working version could look like. Always confidential, never any pressure.",
        primary: "Discuss your workflow",
        secondary: "See maritime software",
      },
      portfolio: {
        eyebrow: "Need the same kind of tool?",
        title: "This is the kind of workflow Breure.ai builds.",
        description:
          "We will discuss whether your spreadsheet, PDF flow or manual process can become a focused tool.",
        primary: "Discuss your workflow",
        secondary: "See maritime software",
      },
    },
  },

  footer: {
    nl: {
      description:
        "Breure.ai bouwt gerichte custom software voor maritieme workflows. Tools voor charterers, contractors en brokers.",
      navHeading: "Navigatie",
      contactHeading: "Contact",
      copyright: (year: number) =>
        `© ${year} Breure.ai. Alle rechten voorbehouden.`,
    },
    en: {
      description:
        "Breure.ai builds focused custom software for maritime workflows. Tools for charterers, contractors and brokers.",
      navHeading: "Navigation",
      contactHeading: "Contact",
      copyright: (year: number) =>
        `© ${year} Breure.ai. All rights reserved.`,
    },
  },
} as const

export type MainNavItem = {
  label: string
  href: string
  title?: string
}

/** Public main navigation: Maritime Software — Demo — Blog — Contact. Home is the logo. */
export function mainNavItems(locale: Locale): MainNavItem[] {
  const t = dict.nav[locale]
  return [
    { label: t.maritimeSoftware, href: ROUTES.maritimeSoftware[locale] },
    { label: t.demo, href: ROUTES.tools[locale] },
    { label: t.blog, href: ROUTES.insights[locale], title: t.blogTitle },
    { label: t.contact, href: ROUTES.contact[locale] },
  ]
}

// ---------------------------------------------------------------------------
// SEO metadata
// ---------------------------------------------------------------------------

export const seo = {
  home: {
    nl: {
      title: "Breure.ai | Maritieme software op maat",
      description:
        "Breure.ai bouwt gerichte maritieme software voor charterers, contractors en brokers. Van vergelijkingstools tot slimme workflows voor technisch en operationeel werk.",
    },
    en: {
      title: "Breure.ai | Custom Maritime Software",
      description:
        "Focused maritime software for charterers, contractors and brokers. From vessel comparison tools to small custom workflows for technical and operational work.",
    },
  },
  maritimeSoftware: {
    nl: {
      title: "Maritieme software | Vergelijkingstools, calculators & workflows | Breure.ai",
      description:
        "Breure.ai bouwt gerichte maritieme software: vergelijkingstools, calculators en workflowautomatisering voor charterers, contractors en brokers.",
    },
    en: {
      title: "Maritime Software | Comparison tools, calculators & workflows | Breure.ai",
      description:
        "Breure.ai builds focused maritime software: comparison tools, calculators and workflow automation for charterers, contractors and brokers.",
    },
  },
  services: {
    nl: {
      title: "Maritieme software | Vergelijkingstools, calculators & workflows | Breure.ai",
      description:
        "Breure.ai bouwt gerichte maritieme software: vergelijkingstools, calculators en workflowautomatisering voor charterers, contractors en brokers.",
    },
    en: {
      title: "Maritime Software | Comparison tools, calculators & workflows | Breure.ai",
      description:
        "Breure.ai builds focused maritime software: comparison tools, calculators and workflow automation for charterers, contractors and brokers.",
    },
  },
  process: {
    nl: {
      title: "Aanpak | Van workflow naar werkende software | Breure.ai",
      description:
        "Bij een strak afgebakende maritieme workflow kan een eerste werkende versie vaak binnen enkele dagen klaar zijn. We beginnen klein en beloven geen vaste doorlooptijd voor ieder project.",
    },
    en: {
      title: "Approach | From workflow to working software | Breure.ai",
      description:
        "For a tightly scoped maritime workflow, a first working version can often be ready within days. We start small and do not promise a fixed timeline for every project.",
    },
  },
  portfolio: {
    nl: {
      title: "Demo | Vessel Comparison Tool | Breure.ai",
      description:
        "De Vessel Comparison Tool is een demonstratie van software voor het vergelijken van scheepscapaciteiten en technische data. Fictieve demo-data.",
    },
    en: {
      title: "Demo | Vessel Comparison Tool | Breure.ai",
      description:
        "The Vessel Comparison Tool is a demonstration of software for comparing vessel capabilities and technical data. Fictional demo data.",
    },
  },
  tools: {
    nl: {
      title: "Vessel Comparison Tool | Demo maritieme software | Breure.ai",
      description:
        "Demonstratie: vergelijk scheepsspecificaties, bekijk capabilities en kraancurves, en genereer een PDF-rapport. De getoonde scheepsdata is fictief.",
    },
    en: {
      title: "Vessel Comparison Tool | Maritime software demo | Breure.ai",
      description:
        "Demonstration: compare vessel specifications, inspect capabilities and crane curves, and generate a PDF report. The vessel data shown is fictional.",
    },
  },
  contact: {
    nl: {
      title: "Contact | Maritieme software Rotterdam | Breure.ai",
      description:
        "Welke maritieme workflow kost onnodig veel tijd? Laat de spreadsheet, PDF of het handmatige proces zien. Breure.ai in Rotterdam reageert per e-mail of telefoon.",
    },
    en: {
      title: "Contact | Maritime software Rotterdam | Breure.ai",
      description:
        "Which maritime workflow is costing more time than it should? Show us the spreadsheet, PDF or manual process. Breure.ai in Rotterdam responds by email or phone.",
    },
  },
  horeca: {
    nl: {
      title: "Horeca websites — Breure.ai",
      description:
        "Premium websites voor restaurants, bistro's en friteries. Sfeer, menukaart en reserveren — gebouwd met het karakter van jouw zaak.",
    },
    en: {
      title: "Hospitality websites — Breure.ai",
      description:
        "Premium websites for restaurants, bistros and friteries. Atmosphere, menus and reservations — built with the character of your place.",
    },
  },
} as const
