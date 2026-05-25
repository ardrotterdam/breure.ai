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
  contact: { nl: "/contact", en: "/en/contact" },
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
      contact: "Contact",
      cta: "Plan een call",
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
      contact: "Contact",
      cta: "Book a call",
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
      eyebrow: "Offshore & Maritieme Webdesign",
      headlineMain: "Maritieme websites",
      headlineAccent: "ontworpen voor vertrouwen",
      headlineEnd: ".",
      subheadline:
        "Premium digitale platforms voor offshore-, maritieme- en zware industriële bedrijven.",
      paragraph:
        "Wij ontwerpen krachtige websites voor offshore-operators, scheepseigenaren, engineeringbedrijven en maritieme professionals. Gebouwd voor geloofwaardigheid, helderheid en commercieel vertrouwen.",
      ctaPrimary: "Plan een call",
      ctaSecondary: "Bekijk wat we voor uw assets doen",
      badgeOne: "AI-Powered Data",
      badgeTwo: "Real-time Specs",
      stats: [
        { value: "50+", label: "Asset websites" },
        { value: "15", label: "Jaar ervaring" },
        { value: "€2B+", label: "Aan assets online" },
      ],
      footerLine: "Breure Web Agency · Westplein 12, 3016 BM Rotterdam · info@breure.ai",
    },
    en: {
      eyebrow: "Offshore & Maritime Web Design",
      headlineMain: "Maritime websites",
      headlineAccent: "engineered for trust",
      headlineEnd: ".",
      subheadline:
        "Premium digital platforms for offshore, maritime and heavy industry companies.",
      paragraph:
        "We design high-performance websites for offshore operators, vessel owners, engineering companies and maritime professionals. Built for credibility, clarity and commercial trust.",
      ctaPrimary: "Book a call",
      ctaSecondary: "See what we build for your assets",
      badgeOne: "AI-Powered Data",
      badgeTwo: "Real-time Specs",
      stats: [
        { value: "50+", label: "Asset websites" },
        { value: "15", label: "Years experience" },
        { value: "€2B+", label: "Assets online" },
      ],
      footerLine: "Breure Web Agency · Westplein 12, 3016 BM Rotterdam · info@breure.ai",
    },
  },

  why: {
    nl: {
      title: "Waarom offshore-bedrijven voor Breure kiezen",
      intro:
        "Offshore assets draaien op day rates. Elke extra charterdag telt. Een heldere digitale presentatie versnelt beslissingen, verkleint risico's en vergroot vertrouwen bij operators en contractors.",
      reasons: [
        {
          title: "Asset first, niet corporate first",
          description:
            "Engineers, charterers en tenderteams zoeken niet naar uw holding, maar naar concrete capaciteit: crane, deck, DP, POB, transit. Wij structureren de site rond de asset.",
        },
        {
          title: "Technische taal, begrijpelijke opbouw",
          description:
            "Wij combineren technische details (SWL, outreach, hook height, draft, bollard pull) met begrijpelijke navigatie. Zo vinden zowel de project engineer als de commerciële manager direct wat hij zoekt.",
        },
        {
          title: "AI-visuals & snelle iteratie",
          description:
            "Met moderne AI-visualisatie creëren wij sterke offshore beelden zonder dure heli-flights of renders. Dat geeft flexibiliteit en snelheid bij nieuwbouw, conversies en rebranding.",
        },
      ],
    },
    en: {
      title: "Why offshore companies choose Breure",
      intro:
        "Offshore assets operate on day rates. Every additional charter day matters. A sharp digital presence accelerates decisions, reduces risk and builds trust with operators and contractors.",
      reasons: [
        {
          title: "Asset first, not corporate first",
          description:
            "Engineers, charterers and tender teams aren't searching for your holding, they're searching for concrete capability: crane, deck, DP, POB, transit. We structure the site around the asset.",
        },
        {
          title: "Technical language, clear structure",
          description:
            "We combine technical detail (SWL, outreach, hook height, draft, bollard pull) with intuitive navigation. Project engineers and commercial managers each find exactly what they need.",
        },
        {
          title: "AI visuals & rapid iteration",
          description:
            "Modern AI visualisation lets us produce strong offshore imagery without costly heli-flights or renders. That delivers flexibility and speed for newbuilds, conversions and rebrands.",
        },
      ],
    },
  },

  services: {
    nl: {
      title: "Wat wij bouwen voor offshore & maritieme klanten",
      intro:
        "Uw asset verdient meer dan een vermelding op de corporate website. Wij bouwen gerichte, snelle microsites per schip of platform — volledig afgestemd op chartering, engineering en tendering.",
      items: [
        {
          tag: "Asset microsites",
          number: "01",
          title: "Vessel & platform websites",
          description:
            "Dedicated websites voor heavy-lift vessels, jack-ups, barges, construction vessels en support ships.",
          features: [
            "Technische specs & crane load charts",
            "Deck layouts en POB-capaciteit",
            "Projectreferenties en foto/visual galleries",
          ],
        },
        {
          tag: "Engineering-ready",
          number: "02",
          title: "Datasheets & capability pages",
          description:
            "Structuur en content die direct bruikbaar is in tenders, FEED-studies en engineering reviews.",
          features: [
            "PDF-downloads per asset",
            "Lift scenarios & deck load zones",
            "DP-capability, fuel & transit data",
          ],
        },
        {
          tag: "Online zichtbaarheid",
          number: "03",
          title: "SEO & charter marketing",
          description:
            "Vindbaar op de termen waarop brokers, contractors en operators zoeken naar assets en capaciteit.",
          features: [
            "Gerichte SEO op offshore keywords",
            "Scherpe, technische copywriting",
            "Snel en veilig gehost, wereldwijd bereikbaar",
          ],
        },
      ],
    },
    en: {
      title: "What we build for offshore & maritime clients",
      intro:
        "Your asset deserves more than a footnote on the corporate site. We build focused, fast microsites per vessel or platform — fully aligned with chartering, engineering and tendering.",
      items: [
        {
          tag: "Asset microsites",
          number: "01",
          title: "Vessel & platform websites",
          description:
            "Dedicated websites for heavy-lift vessels, jack-ups, barges, construction vessels and support ships.",
          features: [
            "Technical specs & crane load charts",
            "Deck layouts and POB capacity",
            "Project references and photo / visual galleries",
          ],
        },
        {
          tag: "Engineering-ready",
          number: "02",
          title: "Datasheets & capability pages",
          description:
            "Structure and content that's immediately usable in tenders, FEED studies and engineering reviews.",
          features: [
            "PDF downloads per asset",
            "Lift scenarios & deck load zones",
            "DP capability, fuel & transit data",
          ],
        },
        {
          tag: "Online visibility",
          number: "03",
          title: "SEO & charter marketing",
          description:
            "Found on the terms brokers, contractors and operators use when looking for assets and capacity.",
          features: [
            "Targeted SEO on offshore keywords",
            "Sharp, technical copywriting",
            "Fast and secure hosting, globally available",
          ],
        },
      ],
    },
  },

  process: {
    nl: {
      eyebrow: "Ons proces",
      titlePrefix: "Van specs naar",
      titleAccent: "online impact",
      intro:
        "Een gestroomlijnd proces dat past bij de snelheid van de offshore industrie. Geen maanden wachten, maar resultaat binnen weken.",
      steps: [
        {
          number: "01",
          title: "Asset inventarisatie",
          description:
            "Wij verzamelen alle technische data, GA-plans, specs en visueel materiaal van uw asset.",
        },
        {
          number: "02",
          title: "Structuur & content",
          description:
            "Een logische opbouw die aansluit bij hoe charterers en engineers zoeken en vergelijken.",
        },
        {
          number: "03",
          title: "Design & ontwikkeling",
          description:
            "Premium design met AI-gegenereerde visuals waar nodig. Snel, responsief, SEO-geoptimaliseerd.",
        },
        {
          number: "04",
          title: "Launch & optimalisatie",
          description:
            "Live binnen weken. Daarna continue verbetering op basis van data en gebruikersgedrag.",
        },
      ],
    },
    en: {
      eyebrow: "Our process",
      titlePrefix: "From specs to",
      titleAccent: "online impact",
      intro:
        "A streamlined process that matches the speed of the offshore industry. No months of waiting — results in weeks.",
      steps: [
        {
          number: "01",
          title: "Asset inventory",
          description:
            "We gather all technical data, GA plans, specs and visual material for your asset.",
        },
        {
          number: "02",
          title: "Structure & content",
          description:
            "A logical structure aligned with how charterers and engineers search and compare.",
        },
        {
          number: "03",
          title: "Design & development",
          description:
            "Premium design with AI-generated visuals where needed. Fast, responsive, SEO-optimised.",
        },
        {
          number: "04",
          title: "Launch & optimisation",
          description:
            "Live within weeks. Continuous improvement based on data and user behaviour afterwards.",
        },
      ],
    },
  },

  portfolio: {
    nl: {
      eyebrow: "Selected works",
      title: "Asset websites, capability pages en vloot-platforms",
      intro:
        "Een greep uit het werk dat wij realiseren voor offshore operators, contractors en vlooteigenaren. Specifieke case studies delen wij graag onder NDA.",
      ndaNote:
        "Specifieke referenties, technische case studies en demo-omgevingen delen wij graag in een persoonlijk gesprek, onder NDA waar nodig.",
      items: [
        {
          category: "Heavy-lift vessel",
          title: "Crane vessel asset microsite",
          description:
            "Dedicated microsite voor een heavy-lift crane vessel met dynamische load charts, deck layout en projectreferenties. Direct bruikbaar in tenders en FEED-studies.",
          metrics: [
            { label: "SWL & outreach charts", value: "Live" },
            { label: "Talen", value: "NL · EN" },
            { label: "Time to launch", value: "5 weken" },
          ],
        },
        {
          category: "Jack-up platform",
          title: "Jack-up capability page",
          description:
            "Capability page voor een wind installation jack-up. Compleet met leg length, payload, accommodatie, transit data en downloadbare datasheets voor contractors.",
          metrics: [
            { label: "Datasheets (PDF)", value: "Per asset" },
            { label: "Sectoren", value: "Wind · O&G" },
            { label: "Time to launch", value: "4 weken" },
          ],
        },
        {
          category: "Support fleet",
          title: "Multi-vessel fleet site",
          description:
            "Vloot-website voor een offshore support operator. Per schip een eigen detailpagina met specs, foto's en charter-aanvraag, gekoppeld aan een centrale brand experience.",
          metrics: [
            { label: "Vessels online", value: "12" },
            { label: "Charter aanvragen", value: "+38%" },
            { label: "Time to launch", value: "8 weken" },
          ],
        },
        {
          category: "Offshore contractor",
          title: "Corporate site met asset library",
          description:
            "Corporate website met geïntegreerde asset library. Tenderteams, brokers en charterers vinden in één omgeving zowel het bedrijfsverhaal als concrete capability data.",
          metrics: [
            { label: "Asset profielen", value: "20+" },
            { label: "PageSpeed", value: "98 / 100" },
            { label: "Time to launch", value: "10 weken" },
          ],
        },
      ],
    },
    en: {
      eyebrow: "Selected works",
      title: "Asset websites, capability pages and fleet platforms",
      intro:
        "A glimpse of the work we deliver for offshore operators, contractors and fleet owners. Specific case studies are shared under NDA on request.",
      ndaNote:
        "Specific references, technical case studies and demo environments are shared during a personal conversation, under NDA where required.",
      items: [
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
      titlePrefix: "Klaar om uw assets",
      titleAccent: "online te brengen?",
      intro:
        "Plan een vrijblijvend gesprek. Wij analyseren uw huidige online aanwezigheid en bespreken de mogelijkheden voor uw vloot.",
      emailLabel: "E-mail",
      addressLabel: "Adres",
      address: ["Westplein 12", "3016 BM Rotterdam", "The Netherlands"],
      tagline: "Techniek. Vertrouwen. Resultaat.",
      form: {
        subject: "Nieuw contactverzoek via Breure.ai",
        fromName: "Breure.ai Website",
        nameLabel: "Naam",
        namePlaceholder: "Uw naam",
        companyLabel: "Bedrijf",
        companyPlaceholder: "Uw bedrijf",
        emailLabel: "E-mailadres",
        emailPlaceholder: "uw@email.com",
        messageLabel: "Vertel ons over uw project",
        messagePlaceholder:
          "Welke assets wilt u online brengen? Hoeveel schepen of platforms betreft het?",
        submit: "Verstuur bericht",
        submitting: "Verzenden...",
        success: "Bedankt. Wij nemen snel contact met u op.",
        error: "Er ging iets fout. Probeer opnieuw.",
        consent:
          "Door dit formulier te verzenden gaat u akkoord met verwerking van uw gegevens voor het beantwoorden van uw aanvraag.",
      },
    },
    en: {
      eyebrow: "Contact",
      titlePrefix: "Ready to bring your assets",
      titleAccent: "online?",
      intro:
        "Book an introductory call. We'll review your current online presence and discuss the possibilities for your fleet.",
      emailLabel: "Email",
      addressLabel: "Address",
      address: ["Westplein 12", "3016 BM Rotterdam", "The Netherlands"],
      tagline: "Engineering. Trust. Results.",
      form: {
        subject: "New contact request via Breure.ai",
        fromName: "Breure.ai Website",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        companyLabel: "Company",
        companyPlaceholder: "Your company",
        emailLabel: "Email address",
        emailPlaceholder: "you@email.com",
        messageLabel: "Tell us about your project",
        messagePlaceholder:
          "Which assets would you like to bring online? How many vessels or platforms are involved?",
        submit: "Send message",
        submitting: "Sending...",
        success: "Thank you. We'll be in touch shortly.",
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
        titlePrefix: "Asset websites die meegaan op",
        titleAccent: "tender, charter en engineering review",
        description:
          "Wij bouwen gerichte, snelle microsites per schip of platform — volledig afgestemd op chartering, engineering en tendering. Geen corporate brochure, maar werkbare digitale assets.",
      },
      process: {
        eyebrow: "Proces",
        titlePrefix: "Van GA-plan en spec sheet naar",
        titleAccent: "live asset website",
        description:
          "Geen maanden wachten, maar resultaat binnen weken. Vier heldere fases die aansluiten op hoe charterers, engineers en tenderteams werken — zodat uw site direct waarde levert.",
      },
      portfolio: {
        eyebrow: "Portfolio",
        titlePrefix: "Asset websites waarop",
        titleAccent: "charterers en contractors",
        titleSuffix: "beslissen",
        description:
          "Een selectie uit ons werk voor offshore operators, jack-up eigenaren, heavy-lift contractors en multi-vessel vloten. Premium digitale presentaties op het niveau van de assets zelf.",
      },
    },
    en: {
      services: {
        eyebrow: "Services",
        titlePrefix: "Asset websites that hold up in",
        titleAccent: "tender, charter and engineering review",
        description:
          "We build focused, fast microsites per vessel or platform — fully aligned with chartering, engineering and tendering. Not a corporate brochure, but working digital assets.",
      },
      process: {
        eyebrow: "Process",
        titlePrefix: "From GA plan and spec sheet to",
        titleAccent: "live asset website",
        description:
          "No months of waiting — results in weeks. Four clear phases that match how charterers, engineers and tender teams work — so your site delivers value immediately.",
      },
      portfolio: {
        eyebrow: "Portfolio",
        titlePrefix: "Asset websites that",
        titleAccent: "charterers and contractors",
        titleSuffix: "decide on",
        description:
          "A selection from our work for offshore operators, jack-up owners, heavy-lift contractors and multi-vessel fleets. Premium digital presentations at the level of the assets themselves.",
      },
    },
  },

  ctas: {
    nl: {
      services: {
        eyebrow: "Klaar voor uw vloot",
        title: "Laat uw assets werken — ook online.",
        description:
          "In een vrijblijvend gesprek bespreken wij welke diensten passen bij uw vloot, doelgroep en commerciële doelen.",
        primary: "Plan een call",
        secondary: "Bekijk ons proces",
      },
      process: {
        eyebrow: "Start uw project",
        title: "Klaar om uw asset live te zetten?",
        description:
          "Wij bespreken graag uw vloot, doelgroep en tijdlijn. Vrijblijvend, en altijd vertrouwelijk.",
        primary: "Plan een call",
        secondary: "Bekijk onze diensten",
      },
      portfolio: {
        eyebrow: "Uw asset volgende?",
        title: "Laat uw vloot zien zoals hij verdient.",
        description:
          "Wij bespreken graag welke aanpak past bij uw assets, doelgroep en commerciële doelen. Voorbeelden en demo-omgevingen tonen wij in een persoonlijk gesprek.",
        primary: "Plan een call",
        secondary: "Bekijk onze diensten",
      },
    },
    en: {
      services: {
        eyebrow: "Ready for your fleet",
        title: "Make your assets perform — online too.",
        description:
          "In an introductory call we'll discuss which services fit your fleet, audience and commercial goals.",
        primary: "Book a call",
        secondary: "See our process",
      },
      process: {
        eyebrow: "Start your project",
        title: "Ready to take your asset live?",
        description:
          "We'd be glad to discuss your fleet, audience and timeline. Always confidential, never any pressure.",
        primary: "Book a call",
        secondary: "See our services",
      },
      portfolio: {
        eyebrow: "Your asset next?",
        title: "Show your fleet the way it deserves.",
        description:
          "We'll discuss the approach that fits your assets, audience and commercial goals. Examples and demo environments are shared in a personal conversation.",
        primary: "Book a call",
        secondary: "See our services",
      },
    },
  },

  footer: {
    nl: {
      description:
        "Premium digitale platforms voor offshore-, maritieme- en zware industriële bedrijven. Gebouwd voor geloofwaardigheid, helderheid en commercieel vertrouwen.",
      navHeading: "Navigatie",
      contactHeading: "Contact",
      copyright: (year: number) =>
        `© ${year} Breure Web Agency. Alle rechten voorbehouden.`,
    },
    en: {
      description:
        "Premium digital platforms for offshore, maritime and heavy industry companies. Built for credibility, clarity and commercial trust.",
      navHeading: "Navigation",
      contactHeading: "Contact",
      copyright: (year: number) =>
        `© ${year} Breure Web Agency. All rights reserved.`,
    },
  },
} as const

// ---------------------------------------------------------------------------
// SEO metadata
// ---------------------------------------------------------------------------

export const seo = {
  home: {
    nl: {
      title: "Breure.ai | Maritieme Websites voor Offshore & Maritime",
      description:
        "Premium digitale platforms voor offshore-, maritieme- en zware industriële bedrijven. Wij ontwerpen krachtige websites voor operators, scheepseigenaren en engineeringbedrijven.",
    },
    en: {
      title: "Breure.ai | Maritime Websites Engineered for Trust",
      description:
        "Premium digital platforms for offshore, maritime and heavy industry companies. We design high-performance websites for operators, vessel owners and engineering firms.",
    },
  },
  services: {
    nl: {
      title: "Diensten | Asset websites voor offshore & maritiem | Breure.ai",
      description:
        "Asset microsites, capability pages, SEO en charter marketing voor heavy-lift vessels, jack-ups, platforms en support ships.",
    },
    en: {
      title: "Services | Asset websites for offshore & maritime | Breure.ai",
      description:
        "Asset microsites, capability pages, SEO and charter marketing for heavy-lift vessels, jack-ups, platforms and support ships.",
    },
  },
  process: {
    nl: {
      title: "Proces | Van specs naar online impact | Breure.ai",
      description:
        "Een gestroomlijnd proces voor offshore & maritieme websites: asset-inventarisatie, structuur & content, design & development, en launch & optimalisatie.",
    },
    en: {
      title: "Process | From specs to online impact | Breure.ai",
      description:
        "A streamlined process for offshore & maritime websites: asset inventory, structure & content, design & development, and launch & optimisation.",
    },
  },
  portfolio: {
    nl: {
      title: "Portfolio | Asset websites & capability pages | Breure.ai",
      description:
        "Selected works: asset microsites, capability pages en multi-vessel fleet sites voor offshore operators, contractors en vlooteigenaren.",
    },
    en: {
      title: "Portfolio | Asset websites & capability pages | Breure.ai",
      description:
        "Selected works: asset microsites, capability pages and multi-vessel fleet sites for offshore operators, contractors and fleet owners.",
    },
  },
  contact: {
    nl: {
      title: "Contact | Plan een call | Breure.ai",
      description:
        "Neem contact op met Breure.ai in Rotterdam. Plan een vrijblijvend gesprek over websites voor uw offshore of maritieme vloot.",
    },
    en: {
      title: "Contact | Book a call | Breure.ai",
      description:
        "Get in touch with Breure.ai in Rotterdam. Book an introductory call about websites for your offshore or maritime fleet.",
    },
  },
} as const
