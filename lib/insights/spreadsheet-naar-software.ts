import type { InsightArticle, InsightBlock, InsightSection } from "@/lib/insights"

const SLUG = "maritime-spreadsheet-to-software"
const SLUG_NL = "maritieme-spreadsheet-naar-software"
const CANONICAL = `https://breure.ai/en/insights/${SLUG}`
const CANONICAL_NL = `https://breure.ai/inzichten/${SLUG_NL}`
const HERO_SRC =
  "/images/insights/maritieme-spreadsheet-naar-software/maritieme-spreadsheet-naar-software-breure-ai-hero.webp"

const spreadsheetToSoftwareEn: InsightArticle = {
  slug: SLUG,
  locales: ["nl", "en"],
  listed: true,
  date: "2026-08-20",
  dateModified: "2026-08-20",
  category: "Maritime software",
  readingTime: "10 min read",
  title: "When should a maritime spreadsheet become software?",
  excerpt:
    "Excel is inexpensive. The manual workflow around it often is not. When maritime teams repeatedly search, copy and verify the same data, a focused software tool can remove a surprising amount of repetitive work.",
  seoTitle: "When should a maritime spreadsheet become software? | Breure.ai",
  metaDescription:
    "Many maritime workflows still rely on Excel, PDFs and manual work. See when focused custom software can reduce repetitive work, errors and processing time.",
  keywords: [
    "maritime software",
    "custom maritime software",
    "maritime spreadsheet",
    "maritime workflow automation",
    "vessel data software",
    "PDF data extraction",
    "vessel comparison software",
    "chartering tools",
  ],
  canonicalUrl: CANONICAL,
  intro:
    "Many maritime processes run perfectly well in Excel for years. But once people repeatedly search for, copy, verify and reprocess the same information, an inexpensive spreadsheet can quietly become an expensive workflow.",
  heroImage: {
    src: HERO_SRC,
    alt: "From Excel and PDFs to focused vessel comparison software for a maritime workflow.",
    width: 1536,
    height: 1024,
  },
  opening: [
    { type: "paragraph", text: "A request comes in." },
    {
      type: "paragraph",
      text: "Three vessels need to be compared. The technical specifications are spread across several PDFs. Some of the data is already in Excel. The latest version of a file is probably sitting in someone's inbox. One person looks up the crane capacity, another checks the deck dimensions, and eventually the most important information is copied manually into a new overview.",
    },
    { type: "paragraph", text: "It works." },
    { type: "paragraph", text: "The quotation goes out." },
    {
      type: "paragraph",
      text: "And next week, almost the same process starts again.",
    },
    {
      type: "paragraph",
      text: "Workflows like this are common across the maritime industry. That is exactly why their cost is easy to underestimate.",
    },
    {
      type: "paragraph",
      text: "Not because Excel is bad. Not because people are doing their jobs incorrectly. But because a process that once started as a small spreadsheet can gradually grow into dozens of manual steps that are repeated every week.",
    },
    {
      type: "paragraph",
      text: "At that point, the most important question is no longer:",
    },
    { type: "emphasis", text: "Does our spreadsheet still work?" },
    { type: "paragraph", text: "It becomes:" },
    { type: "callout", text: "Why are we still doing this manually?" },
  ],
  sections: [
    {
      id: "echte-kosten",
      heading: "The real cost of Excel is not on the Microsoft invoice",
      blocks: [
        { type: "paragraph", text: "A spreadsheet costs almost nothing." },
        {
          type: "paragraph",
          text: "The workflow around it can be far more expensive.",
        },
        {
          type: "paragraph",
          text: "Consider the time spent each week on:",
        },
        {
          type: "list",
          items: [
            "searching for information in technical PDFs",
            "entering the same data again",
            "checking different file versions",
            "copying formulas",
            "comparing vessels manually",
            "rebuilding tables",
            "copying data from emails",
            "preparing reports",
            "repeating the same calculation for a new project",
            "checking errors created during previous manual steps",
          ],
        },
        {
          type: "paragraph",
          text: "Each individual action seems small.",
        },
        { type: "paragraph", text: "Five minutes here. Ten minutes there." },
        {
          type: "paragraph",
          text: "But when a workflow is repeated dozens or hundreds of times per year, often by several people, it can quietly become a structural operating cost.",
        },
        {
          type: "paragraph",
          text: "That is where [focused custom software](/en/maritime-software) becomes interesting.",
        },
        {
          type: "paragraph",
          text: 'Not because a company needs to become "more digital".',
        },
        {
          type: "paragraph",
          text: "But because software can organize a process once and then execute the same logic consistently every time.",
        },
      ],
    },
    {
      id: "eenvoudig-voorbeeld",
      heading: "A simple example",
      blocks: [
        {
          type: "paragraph",
          text: "Imagine a maritime contractor that regularly needs to assess suitable vessels for new projects.",
        },
        {
          type: "paragraph",
          text: "For every request, six vessels may need to be reviewed.",
        },
        {
          type: "paragraph",
          text: "For each vessel, someone collects information such as:",
        },
        {
          type: "list",
          items: [
            "dimensions",
            "deck space",
            "crane capacity",
            "draft",
            "speed",
            "accommodation",
            "technical limitations",
            "relevant project data",
          ],
        },
        {
          type: "paragraph",
          text: "Some of that information sits in a spreadsheet. Other details are in vessel specification sheets. Certain values need to be checked again.",
        },
        {
          type: "paragraph",
          text: "The vessels are then placed side by side and an overview is prepared for internal use or for a client.",
        },
        {
          type: "paragraph",
          text: "Suppose that process takes only 45 minutes.",
        },
        { type: "paragraph", text: "That does not sound dramatic." },
        {
          type: "paragraph",
          text: "But if the same workflow is performed 200 times per year, that is already 150 hours of work.",
        },
        { type: "paragraph", text: "And that is only one workflow." },
        {
          type: "paragraph",
          text: "If several employees perform similar work, or multiple versions need to be checked, the total increases further.",
        },
        {
          type: "paragraph",
          text: "The business case for software therefore does not always begin with a huge project.",
        },
        {
          type: "paragraph",
          text: "Sometimes the biggest opportunity is a relatively small tool that removes the same repetitive work every week.",
        },
      ],
    },
    {
      id: "van-45-minuten",
      heading: "From 45 minutes to a few actions",
      blocks: [
        {
          type: "paragraph",
          text: "Now imagine that the same company has a simple internal web application.",
        },
        {
          type: "paragraph",
          text: "Vessel data is stored centrally.",
        },
        { type: "paragraph", text: "A user selects six vessels." },
        {
          type: "paragraph",
          text: "The software automatically shows:",
        },
        {
          type: "list",
          items: [
            "relevant technical specifications",
            "important differences",
            "available capabilities",
            "standardized calculations",
            "project-relevant information",
          ],
        },
        {
          type: "paragraph",
          text: "A PDF report can then be generated with one action.",
        },
        {
          type: "paragraph",
          text: "That is not a giant maritime software platform.",
        },
        {
          type: "paragraph",
          text: "It is one focused tool for one recurring problem.",
        },
        {
          type: "paragraph",
          text: "And that is exactly where custom software can create significant value.",
        },
      ],
    },
    {
      id: "geen-miljoenenproject",
      heading: "Custom software does not need to be a million-euro project",
      blocks: [
        {
          type: "paragraph",
          text: 'When companies hear "custom software", they may still imagine a major IT project.',
        },
        { type: "paragraph", text: "Months of analysis." },
        { type: "paragraph", text: "Long requirements documents." },
        { type: "paragraph", text: "Large implementations." },
        { type: "paragraph", text: "Training programmes." },
        { type: "paragraph", text: "Consultants." },
        {
          type: "paragraph",
          text: "And eventually a system containing hundreds of functions, many of which are rarely used.",
        },
        {
          type: "paragraph",
          text: "That does not need to be the starting point.",
        },
        {
          type: "paragraph",
          text: "For many operational workflows, the opposite approach is more useful.",
        },
        { type: "callout", text: "One problem. One focused tool." },
        { type: "paragraph", text: "For example:" },
        {
          type: "quote",
          text: "We spend too much time comparing vessel specifications.",
        },
        { type: "paragraph", text: "Or:" },
        {
          type: "quote",
          text: "Our team extracts the same information from technical PDFs every week.",
        },
        { type: "paragraph", text: "Or:" },
        {
          type: "quote",
          text: "This calculation is rebuilt in Excel for every tender.",
        },
        { type: "paragraph", text: "Or:" },
        {
          type: "quote",
          text: "Creating this client PDF takes forty minutes every time.",
        },
        {
          type: "paragraph",
          text: "These are interesting software problems because the scope is clear.",
        },
        {
          type: "paragraph",
          text: "The first version does not need to do everything.",
        },
        {
          type: "paragraph",
          text: "It mainly needs to make one process measurably easier.",
        },
      ],
    },
    {
      id: "saaie-kansen",
      heading: "The best software opportunities are often boring",
      blocks: [
        {
          type: "paragraph",
          text: "A new AI application may sound more exciting than a tool that combines data from six spreadsheets.",
        },
        {
          type: "paragraph",
          text: "But commercially, the second application may be much more valuable.",
        },
        {
          type: "paragraph",
          text: "Look at the work nobody in the company enjoys doing.",
        },
        {
          type: "list",
          items: [
            "Open a file.",
            "Copy data.",
            "Open another spreadsheet.",
            "Check a value.",
            "Find a PDF.",
            "Copy another value.",
            "Adjust a formula.",
            "Create a screenshot.",
            "Export a report.",
            "Send an email.",
            "Do it again tomorrow.",
          ],
        },
        {
          type: "paragraph",
          text: "Processes like these are often excellent candidates for automation.",
        },
        {
          type: "paragraph",
          text: "Not because they are technologically spectacular, but because they are predictable and repetitive.",
        },
        {
          type: "paragraph",
          text: "Software is very good at work that follows roughly the same rules every time.",
        },
        {
          type: "paragraph",
          text: "People are far more valuable when they are assessing exceptions, making commercial decisions, negotiating or dealing with operational judgement calls.",
        },
      ],
    },
    {
      id: "niet-alleen-tijd",
      heading: "Do not look only at time",
      blocks: [
        {
          type: "paragraph",
          text: "Time savings are the most visible part of the business case, but certainly not the only one.",
        },
        { type: "heading", text: "Fewer errors" },
        {
          type: "paragraph",
          text: "Every manual transfer of information creates another opportunity for something to go wrong.",
        },
        { type: "paragraph", text: "The wrong cell." },
        { type: "paragraph", text: "An outdated specification." },
        { type: "paragraph", text: "A forgotten formula." },
        {
          type: "paragraph",
          text: "A value entered in the wrong unit.",
        },
        {
          type: "paragraph",
          text: "Focused software can validate input, use fixed calculation logic and present information consistently.",
        },
        { type: "heading", text: "Faster response" },
        {
          type: "paragraph",
          text: "In chartering, broking and contracting, speed can have commercial value.",
        },
        {
          type: "paragraph",
          text: "If someone first needs to collect information from multiple files before a comparison can be made, time is lost.",
        },
        {
          type: "paragraph",
          text: "If the data is already structured and available, the same assessment can be completed much faster.",
        },
        { type: "heading", text: "Knowledge stays inside the company" },
        {
          type: "paragraph",
          text: "Some spreadsheets have effectively become small software applications.",
        },
        {
          type: "paragraph",
          text: "The problem is that eventually only one employee understands exactly how they work.",
        },
        { type: "paragraph", text: "That creates dependency." },
        {
          type: "paragraph",
          text: "When logic, calculations and workflows are captured in a clear application, company knowledge becomes less dependent on one individual or one file.",
        },
        { type: "heading", text: "Consistent output" },
        {
          type: "paragraph",
          text: "If five employees create the same report, five slightly different results may emerge.",
        },
        {
          type: "paragraph",
          text: "Not necessarily wrong, but structured differently, calculated differently or presented differently.",
        },
        {
          type: "paragraph",
          text: "Software can standardize output without requiring employees to manually follow the same procedure every time.",
        },
      ],
    },
    {
      id: "pdf-kostenlek",
      heading: "PDFs are another hidden cost centre",
      blocks: [
        {
          type: "paragraph",
          text: "The maritime sector works with enormous quantities of documents.",
        },
        {
          type: "paragraph",
          text: "Specification sheets, manuals, certificates, reports, drawings, equipment documentation and commercial documents.",
        },
        {
          type: "paragraph",
          text: "Much of the information inside them is already digital, yet it is still read and copied manually.",
        },
        { type: "paragraph", text: "That creates an unusual situation." },
        {
          type: "paragraph",
          text: "The computer already contains the information.",
        },
        {
          type: "paragraph",
          text: "A person reads it from the screen and then types it into another system.",
        },
        {
          type: "paragraph",
          text: "For occasional work, that is not a problem.",
        },
        {
          type: "paragraph",
          text: "When the same types of information need to be extracted from documents repeatedly, document processing becomes an interesting automation opportunity.",
        },
        {
          type: "paragraph",
          text: "A focused workflow could, for example:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "receive a PDF",
            "identify relevant information",
            "place it into a fixed structure",
            "flag missing information",
            "allow a person to verify the extracted data",
            "use the approved data in a comparison or report",
          ],
        },
        { type: "paragraph", text: "AI can sometimes help with this." },
        { type: "paragraph", text: "But AI is not the objective." },
        {
          type: "paragraph",
          text: "The objective is that someone no longer needs to type the same information for the hundredth time.",
        },
      ],
    },
    {
      id: "begin-niet-met-software",
      heading: "Do not begin by asking what software you want",
      blocks: [
        {
          type: "paragraph",
          text: "A much better first question is:",
        },
        {
          type: "callout",
          text: "Which recurring task in our company would we prefer never to perform manually again?",
        },
        {
          type: "paragraph",
          text: "That question can reveal opportunities surprisingly quickly.",
        },
        {
          type: "paragraph",
          text: "Look at a normal working week and identify processes where employees:",
        },
        {
          type: "list",
          items: [
            "enter the same data repeatedly",
            "keep several files open at the same time",
            "repeat the same calculations",
            "extract information from PDFs",
            "create comparisons manually",
            "rebuild reports",
            "copy data between systems",
            "spend significant time checking work",
            "depend on one complex spreadsheet",
          ],
        },
        {
          type: "paragraph",
          text: "This is not an abstract digital transformation strategy.",
        },
        {
          type: "paragraph",
          text: "These are concrete activities for which a business case can be calculated.",
        },
      ],
    },
    {
      id: "reken-eerst",
      heading: "Calculate first, build second",
      blocks: [
        {
          type: "paragraph",
          text: "Not every workflow should become software.",
        },
        { type: "paragraph", text: "That matters." },
        {
          type: "paragraph",
          text: "If a spreadsheet is used four times per year and each use takes ten minutes, there is probably no problem to solve.",
        },
        {
          type: "paragraph",
          text: "Building software simply because software sounds modern is not a strategy.",
        },
        {
          type: "paragraph",
          text: "The interesting workflows are where **frequency, time and business value** come together.",
        },
        {
          type: "paragraph",
          text: "A simple first calculation can already provide useful insight:",
        },
        {
          type: "formula",
          text: "Number of times per year × time per task × internal hourly cost",
        },
        {
          type: "paragraph",
          text: "Other factors can then be considered:",
        },
        {
          type: "list",
          items: [
            "cost of errors",
            "delays",
            "duplicate work",
            "checking and review work",
            "lost commercial speed",
            "maintaining multiple files and versions",
          ],
        },
        {
          type: "paragraph",
          text: "Those costs can be compared with the development and maintenance cost of a focused tool.",
        },
        {
          type: "paragraph",
          text: "Then it becomes a normal investment decision.",
        },
        { type: "paragraph", text: "No technology hype." },
        { type: "paragraph", text: "Just economics." },
      ],
    },
    {
      id: "kleine-tool",
      heading: "A small tool can have a large impact",
      blocks: [
        {
          type: "paragraph",
          text: "Imagine that a new tool does not replace an entire business process.",
        },
        {
          type: "paragraph",
          text: "It only saves twenty minutes.",
        },
        {
          type: "paragraph",
          text: "But that task is performed fifteen times per week.",
        },
        { type: "paragraph", text: "That is five hours per week." },
        { type: "paragraph", text: "More than 250 hours per year." },
        {
          type: "paragraph",
          text: "And if that workflow grows with the company, the saving grows with it.",
        },
        {
          type: "paragraph",
          text: "That is why small custom tools can be economically interesting.",
        },
        {
          type: "paragraph",
          text: "The value is not necessarily in the number of features.",
        },
        {
          type: "paragraph",
          text: "The value is in how often a useful feature is used.",
        },
      ],
    },
    {
      id: "excel-hoeft-niet-weg",
      heading: "Excel does not need to disappear",
      blocks: [
        {
          type: "paragraph",
          text: "The conclusion is not that maritime companies should stop using Excel.",
        },
        { type: "paragraph", text: "Quite the opposite." },
        {
          type: "paragraph",
          text: "Excel remains an excellent tool for many analyses.",
        },
        {
          type: "paragraph",
          text: "The problem begins when a spreadsheet effectively becomes responsible for a recurring business process that Excel was never designed to manage.",
        },
        {
          type: "paragraph",
          text: "When more people become dependent on it.",
        },
        {
          type: "paragraph",
          text: "When the same information is entered repeatedly.",
        },
        {
          type: "paragraph",
          text: "When multiple versions begin to circulate.",
        },
        {
          type: "paragraph",
          text: "When reporting remains manual.",
        },
        {
          type: "paragraph",
          text: "When mistakes become increasingly expensive.",
        },
        {
          type: "paragraph",
          text: "And especially when employees spend time every week solving a problem that software could solve once.",
        },
        {
          type: "paragraph",
          text: "That is when it becomes worth looking further.",
        },
      ],
    },
    {
      id: "belangrijkste-vraag",
      heading: "The most important question",
      blocks: [
        {
          type: "paragraph",
          text: "Custom software does not begin with programming.",
        },
        { type: "paragraph", text: "It begins with observation." },
        { type: "paragraph", text: "Where is time disappearing?" },
        {
          type: "paragraph",
          text: "Where is information entered twice?",
        },
        {
          type: "paragraph",
          text: "Which spreadsheets have quietly become business-critical?",
        },
        {
          type: "paragraph",
          text: "Which PDFs are being read again and again?",
        },
        {
          type: "paragraph",
          text: "Which comparison is rebuilt every week?",
        },
        {
          type: "paragraph",
          text: "Which employee is performing a task that everyone already knows should be easier?",
        },
        {
          type: "paragraph",
          text: "Behind that question there may be a surprisingly small software solution.",
        },
        {
          type: "paragraph",
          text: "And in an industry with complex technical information, large volumes of documentation and recurring operational workflows, a focused tool can deliver much more than a few minutes of time savings.",
        },
        {
          type: "paragraph",
          text: "It can make a process faster, more consistent and easier to manage.",
        },
        {
          type: "callout",
          text: "Not more software than necessary. Just the software that solves the problem.",
        },
      ],
    },
  ],
  conclusion: {
    heading: "See what a focused maritime tool can look like",
    paragraphs: [
      "Breure.ai builds focused custom software for maritime workflows.",
      "The [Vessel Comparison Tool](/en/tools/vessel-comparison) demonstrates how technical vessel data can be compared in one interface and turned into useful output.",
      "The tool uses fictional demo data and is intended solely as an example of the type of focused software that can be built around a specific maritime workflow.",
    ],
    cta: "",
    ctaLabel: "View the Vessel Comparison Tool",
    ctaHref: "/en/tools/vessel-comparison",
  },
}

const openingNl: InsightBlock[] = [
  { type: "paragraph", text: "Een offerte komt binnen." },
  {
    type: "paragraph",
    text: "Er moeten drie schepen worden vergeleken. De technische specificaties staan verspreid over verschillende PDF's. Een deel van de gegevens staat al in Excel. De laatste versie van een bestand zit waarschijnlijk in een e-mail. Iemand zoekt de juiste kraancapaciteit op, een collega controleert de deck dimensions en uiteindelijk worden de belangrijkste gegevens handmatig in een nieuw overzicht gezet.",
  },
  { type: "paragraph", text: "Het werkt." },
  { type: "paragraph", text: "De offerte gaat eruit." },
  {
    type: "paragraph",
    text: "En volgende week begint bijna hetzelfde proces opnieuw.",
  },
  {
    type: "paragraph",
    text: "Dit soort workflows zijn in de maritieme sector heel normaal. Juist daarom worden de kosten ervan gemakkelijk onderschat.",
  },
  {
    type: "paragraph",
    text: "Niet omdat Excel slecht is. Niet omdat medewerkers hun werk verkeerd doen. Maar omdat een proces dat ooit klein begon langzaam kan uitgroeien tot tientallen handmatige stappen die iedere week opnieuw worden uitgevoerd.",
  },
  {
    type: "paragraph",
    text: "Op dat moment is de belangrijkste vraag niet meer:",
  },
  { type: "emphasis", text: "Werkt onze spreadsheet nog?" },
  { type: "paragraph", text: "Maar:" },
  {
    type: "callout",
    text: "Waarom doen we dit eigenlijk nog steeds handmatig?",
  },
]

const sectionNl: Record<string, { headingNl: string; blocksNl: InsightBlock[] }> =
  {
    "echte-kosten": {
      headingNl:
        "De echte kosten van Excel staan niet op de factuur van Microsoft",
      blocksNl: [
        { type: "paragraph", text: "Een spreadsheet kost bijna niets." },
        {
          type: "paragraph",
          text: "De workflow eromheen kan veel duurder zijn.",
        },
        {
          type: "paragraph",
          text: "Denk aan tijd die iedere week verdwijnt in:",
        },
        {
          type: "list",
          items: [
            "informatie zoeken in technische PDF's",
            "gegevens opnieuw invoeren",
            "verschillende versies controleren",
            "formules kopiëren",
            "schepen handmatig vergelijken",
            "tabellen opnieuw opmaken",
            "data uit e-mails overnemen",
            "rapportages samenstellen",
            "dezelfde berekening voor een nieuw project opnieuw uitvoeren",
            "fouten controleren die door eerdere handmatige stappen zijn ontstaan",
          ],
        },
        {
          type: "paragraph",
          text: "Iedere afzonderlijke handeling lijkt klein.",
        },
        { type: "paragraph", text: "Vijf minuten hier. Tien minuten daar." },
        {
          type: "paragraph",
          text: "Maar een workflow die door meerdere medewerkers tientallen of honderden keren per jaar wordt uitgevoerd, kan ongemerkt een structurele kostenpost worden.",
        },
        {
          type: "paragraph",
          text: "Dat is precies waar [gerichte custom software](/maritieme-software) interessant wordt.",
        },
        {
          type: "paragraph",
          text: 'Niet omdat een bedrijf "meer digitaal" moet worden.',
        },
        {
          type: "paragraph",
          text: "Maar omdat software een proces één keer goed kan organiseren en het daarna steeds opnieuw kan uitvoeren.",
        },
      ],
    },
    "eenvoudig-voorbeeld": {
      headingNl: "Een eenvoudig voorbeeld",
      blocksNl: [
        {
          type: "paragraph",
          text: "Stel dat een maritime contractor regelmatig geschikte schepen moet beoordelen voor nieuwe projecten.",
        },
        {
          type: "paragraph",
          text: "Voor iedere aanvraag worden bijvoorbeeld zes schepen bekeken.",
        },
        {
          type: "paragraph",
          text: "Een medewerker verzamelt per schip:",
        },
        {
          type: "list",
          items: [
            "afmetingen",
            "deck space",
            "crane capacity",
            "draft",
            "snelheid",
            "accommodatie",
            "technische beperkingen",
            "relevante projectdata",
          ],
        },
        {
          type: "paragraph",
          text: "Een deel staat in een spreadsheet. Een ander deel staat in vessel specification sheets. Sommige gegevens moeten opnieuw worden gecontroleerd.",
        },
        {
          type: "paragraph",
          text: "Daarna worden de schepen naast elkaar gezet en wordt een overzicht voor intern gebruik of voor de klant gemaakt.",
        },
        {
          type: "paragraph",
          text: "Misschien kost dit proces gemiddeld maar 45 minuten.",
        },
        { type: "paragraph", text: "Dat lijkt niet bijzonder." },
        {
          type: "paragraph",
          text: "Maar wordt dezelfde workflow 200 keer per jaar uitgevoerd, dan gaat het al om 150 uur werk.",
        },
        { type: "paragraph", text: "En dat is slechts één workflow." },
        {
          type: "paragraph",
          text: "Wanneer meerdere medewerkers hetzelfde proces uitvoeren of wanneer verschillende versies moeten worden gecontroleerd, loopt dat verder op.",
        },
        {
          type: "paragraph",
          text: "De interessante businesscase voor software ontstaat daarom niet altijd bij enorme projecten.",
        },
        {
          type: "paragraph",
          text: "Soms zit de winst juist in een relatief kleine tool die iedere week hetzelfde vervelende werk wegneemt.",
        },
      ],
    },
    "van-45-minuten": {
      headingNl: "Van 45 minuten naar een paar handelingen",
      blocksNl: [
        {
          type: "paragraph",
          text: "Stel nu dat dezelfde organisatie een eenvoudige interne webtool heeft.",
        },
        {
          type: "paragraph",
          text: "De scheepsgegevens staan centraal opgeslagen.",
        },
        {
          type: "paragraph",
          text: "Een gebruiker selecteert zes schepen.",
        },
        {
          type: "paragraph",
          text: "De software toont automatisch:",
        },
        {
          type: "list",
          items: [
            "relevante technische specificaties",
            "belangrijke verschillen",
            "beschikbare capabilities",
            "gestandaardiseerde berekeningen",
            "projectrelevante informatie",
          ],
        },
        {
          type: "paragraph",
          text: "Vervolgens kan met één handeling een PDF-rapport worden gegenereerd.",
        },
        {
          type: "paragraph",
          text: "Dat is geen gigantisch maritiem softwareplatform.",
        },
        {
          type: "paragraph",
          text: "Het is één gerichte tool voor één terugkerend probleem.",
        },
        {
          type: "paragraph",
          text: "En precies daarin kan custom software veel waarde leveren.",
        },
      ],
    },
    "geen-miljoenenproject": {
      headingNl: "Custom software hoeft geen miljoenenproject te zijn",
      blocksNl: [
        {
          type: "paragraph",
          text: "Bij maatwerksoftware denken bedrijven soms nog aan grote IT-projecten.",
        },
        { type: "paragraph", text: "Maanden analyse." },
        { type: "paragraph", text: "Lange requirements-documenten." },
        { type: "paragraph", text: "Grote implementaties." },
        { type: "paragraph", text: "Trainingen." },
        { type: "paragraph", text: "Consultants." },
        {
          type: "paragraph",
          text: "En uiteindelijk een systeem met honderden functies waarvan een groot deel nauwelijks wordt gebruikt.",
        },
        {
          type: "paragraph",
          text: "Dat hoeft niet het uitgangspunt te zijn.",
        },
        {
          type: "paragraph",
          text: "Voor veel operationele workflows is het interessanter om precies andersom te beginnen.",
        },
        { type: "callout", text: "Eén probleem. Eén gerichte tool." },
        { type: "paragraph", text: "Bijvoorbeeld:" },
        {
          type: "quote",
          text: "We besteden te veel tijd aan het vergelijken van vessel specifications.",
        },
        { type: "paragraph", text: "Of:" },
        {
          type: "quote",
          text: "Onze medewerkers halen iedere week dezelfde gegevens uit technische PDF's.",
        },
        { type: "paragraph", text: "Of:" },
        {
          type: "quote",
          text: "Deze berekening wordt voor iedere tender opnieuw in Excel opgebouwd.",
        },
        { type: "paragraph", text: "Of:" },
        {
          type: "quote",
          text: "Het maken van deze klant-PDF kost iedere keer veertig minuten.",
        },
        {
          type: "paragraph",
          text: "Dat zijn interessante softwareproblemen omdat de scope duidelijk is.",
        },
        {
          type: "paragraph",
          text: "De eerste versie hoeft dan niet alles te kunnen.",
        },
        {
          type: "paragraph",
          text: "Hij moet vooral één proces aantoonbaar eenvoudiger maken.",
        },
      ],
    },
    "saaie-kansen": {
      headingNl: "De beste softwarekansen zijn vaak saai",
      blocksNl: [
        {
          type: "paragraph",
          text: "Een opvallende nieuwe AI-applicatie klinkt interessanter dan een tool die gegevens uit zes spreadsheets samenbrengt.",
        },
        {
          type: "paragraph",
          text: "Maar zakelijk gezien kan die tweede toepassing veel waardevoller zijn.",
        },
        {
          type: "paragraph",
          text: "Kijk naar de werkzaamheden waar niemand binnen het bedrijf enthousiast van wordt.",
        },
        {
          type: "list",
          items: [
            "Een bestand openen.",
            "Gegevens kopiëren.",
            "Een andere spreadsheet openen.",
            "Controleren.",
            "PDF zoeken.",
            "Nog een waarde overnemen.",
            "Formule aanpassen.",
            "Screenshot maken.",
            "Rapport exporteren.",
            "E-mail versturen.",
            "Morgen opnieuw.",
          ],
        },
        {
          type: "paragraph",
          text: "Dat soort processen zijn vaak uitstekende kandidaten voor automatisering.",
        },
        {
          type: "paragraph",
          text: "Niet omdat ze technologisch spectaculair zijn, maar juist omdat ze voorspelbaar en repetitief zijn.",
        },
        {
          type: "paragraph",
          text: "Software is bijzonder goed in werk dat iedere keer volgens ongeveer dezelfde regels moet worden uitgevoerd.",
        },
        {
          type: "paragraph",
          text: "Mensen zijn veel waardevoller voor het beoordelen van uitzonderingen, commerciële beslissingen, onderhandelingen en operationele afwegingen.",
        },
      ],
    },
    "niet-alleen-tijd": {
      headingNl: "Kijk niet alleen naar tijd",
      blocksNl: [
        {
          type: "paragraph",
          text: "Tijdwinst is de meest zichtbare businesscase, maar zeker niet de enige.",
        },
        { type: "heading", text: "Minder fouten" },
        {
          type: "paragraph",
          text: "Iedere handmatige overdracht van informatie is een extra moment waarop iets verkeerd kan gaan.",
        },
        { type: "paragraph", text: "Een verkeerde cel." },
        { type: "paragraph", text: "Een oude specificatie." },
        { type: "paragraph", text: "Een vergeten formule." },
        {
          type: "paragraph",
          text: "Een waarde die in de verkeerde eenheid wordt ingevoerd.",
        },
        {
          type: "paragraph",
          text: "Gerichte software kan invoer controleren, vaste berekeningen gebruiken en gegevens op een consistente manier presenteren.",
        },
        { type: "heading", text: "Sneller reageren" },
        {
          type: "paragraph",
          text: "In chartering, broking en contracting kan snelheid commercieel belangrijk zijn.",
        },
        {
          type: "paragraph",
          text: "Wanneer een medewerker eerst informatie uit verschillende bestanden moet verzamelen voordat een vergelijking kan worden gemaakt, kost dat tijd.",
        },
        {
          type: "paragraph",
          text: "Als de gegevens al gestructureerd beschikbaar zijn, kan dezelfde beoordeling veel sneller plaatsvinden.",
        },
        { type: "heading", text: "Kennis blijft binnen het bedrijf" },
        {
          type: "paragraph",
          text: "Sommige spreadsheets zijn feitelijk kleine softwareprogramma's geworden.",
        },
        {
          type: "paragraph",
          text: "Alleen begrijpt uiteindelijk nog maar één medewerker precies hoe ze werken.",
        },
        { type: "paragraph", text: "Dat is kwetsbaar." },
        {
          type: "paragraph",
          text: "Wanneer logica, berekeningen en processen in een duidelijke applicatie zijn vastgelegd, wordt bedrijfskennis minder afhankelijk van één persoon of één bestand.",
        },
        { type: "heading", text: "Consistente output" },
        {
          type: "paragraph",
          text: "Wanneer vijf medewerkers hetzelfde rapport maken, kunnen vijf verschillende resultaten ontstaan.",
        },
        {
          type: "paragraph",
          text: "Niet noodzakelijk inhoudelijk verkeerd, maar wel anders opgebouwd, anders berekend of anders gepresenteerd.",
        },
        {
          type: "paragraph",
          text: "Software maakt standaardisatie mogelijk zonder medewerkers iedere keer opnieuw een procedure te laten volgen.",
        },
      ],
    },
    "pdf-kostenlek": {
      headingNl: "PDF's zijn een ander verborgen kostenlek",
      blocksNl: [
        {
          type: "paragraph",
          text: "De maritieme sector werkt met enorme hoeveelheden documenten.",
        },
        {
          type: "paragraph",
          text: "Specification sheets, manuals, certificates, reports, drawings, equipment documentation en commerciële documenten.",
        },
        {
          type: "paragraph",
          text: "Veel informatie daarin is digitaal beschikbaar, maar wordt alsnog handmatig gelezen en overgenomen.",
        },
        { type: "paragraph", text: "Dat is een opmerkelijke situatie." },
        { type: "paragraph", text: "De computer bevat de informatie al." },
        {
          type: "paragraph",
          text: "Een medewerker leest die informatie vervolgens van het scherm en typt hem opnieuw in een ander systeem.",
        },
        {
          type: "paragraph",
          text: "Bij incidenteel gebruik is dat geen probleem.",
        },
        {
          type: "paragraph",
          text: "Wanneer dezelfde gegevens structureel uit documenten moeten worden gehaald, kan documentverwerking een interessante automatiseringskans worden.",
        },
        {
          type: "paragraph",
          text: "Een gerichte workflow kan bijvoorbeeld:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "een PDF ontvangen",
            "relevante gegevens herkennen",
            "deze in een vaste structuur plaatsen",
            "ontbrekende informatie aangeven",
            "een medewerker de gegevens laten controleren",
            "de goedgekeurde data verder gebruiken in een vergelijking of rapport",
          ],
        },
        {
          type: "paragraph",
          text: "AI kan daarbij soms nuttig zijn.",
        },
        { type: "paragraph", text: "Maar AI is niet het doel." },
        {
          type: "paragraph",
          text: "Het doel is dat iemand niet voor de honderdste keer dezelfde informatie hoeft over te typen.",
        },
      ],
    },
    "begin-niet-met-software": {
      headingNl: "Begin niet met de vraag welke software u wilt",
      blocksNl: [
        {
          type: "paragraph",
          text: "Een veel betere eerste vraag is:",
        },
        {
          type: "callout",
          text: "Welke terugkerende handeling binnen ons bedrijf zouden we het liefst nooit meer handmatig uitvoeren?",
        },
        {
          type: "paragraph",
          text: "Dat kan verrassend snel duidelijk maken waar kansen liggen.",
        },
        {
          type: "paragraph",
          text: "Loop bijvoorbeeld eens door een normale werkweek en noteer processen waarbij medewerkers:",
        },
        {
          type: "list",
          items: [
            "dezelfde gegevens opnieuw invoeren",
            "meerdere bestanden naast elkaar openen",
            "steeds dezelfde berekeningen uitvoeren",
            "informatie uit PDF's halen",
            "handmatig vergelijkingen maken",
            "rapportages opnieuw opbouwen",
            "gegevens tussen systemen kopiëren",
            "veel tijd besteden aan controleren",
            "afhankelijk zijn van één complexe spreadsheet",
          ],
        },
        {
          type: "paragraph",
          text: "Dat is geen theoretische digitaliseringsstrategie.",
        },
        {
          type: "paragraph",
          text: "Het zijn concrete werkzaamheden waarvoor een businesscase kan worden berekend.",
        },
      ],
    },
    "reken-eerst": {
      headingNl: "Reken eerst, bouw daarna",
      blocksNl: [
        {
          type: "paragraph",
          text: "Niet iedere workflow moet software worden.",
        },
        { type: "paragraph", text: "Dat is belangrijk." },
        {
          type: "paragraph",
          text: "Als een spreadsheet vier keer per jaar wordt gebruikt en iedere keer tien minuten kost, is er waarschijnlijk niets aan de hand.",
        },
        {
          type: "paragraph",
          text: "Software bouwen omdat software modern klinkt, is geen strategie.",
        },
        {
          type: "paragraph",
          text: "De interessante workflows zitten waar **frequentie, tijd en bedrijfswaarde** samenkomen.",
        },
        {
          type: "paragraph",
          text: "Een eenvoudige eerste berekening kan al veel inzicht geven:",
        },
        {
          type: "formula",
          text: "Aantal uitvoeringen per jaar × tijd per uitvoering × interne uurkosten",
        },
        {
          type: "paragraph",
          text: "Daar kunnen vervolgens andere factoren bij worden meegenomen:",
        },
        {
          type: "list",
          items: [
            "foutkosten",
            "vertraging",
            "dubbel werk",
            "controlewerk",
            "gemiste commerciële snelheid",
            "onderhoud van verschillende bestanden",
          ],
        },
        {
          type: "paragraph",
          text: "Daartegenover staan de kosten van ontwikkeling en onderhoud.",
        },
        {
          type: "paragraph",
          text: "Dan ontstaat een normale investeringsbeslissing.",
        },
        { type: "paragraph", text: "Geen technologiehype." },
        { type: "paragraph", text: "Gewoon rekenen." },
      ],
    },
    "kleine-tool": {
      headingNl: "Een kleine tool kan een grote impact hebben",
      blocksNl: [
        {
          type: "paragraph",
          text: "Stel dat een nieuwe tool geen volledig bedrijfsproces vervangt.",
        },
        {
          type: "paragraph",
          text: "Hij bespaart slechts twintig minuten.",
        },
        {
          type: "paragraph",
          text: "Maar die handeling vindt vijftien keer per week plaats.",
        },
        { type: "paragraph", text: "Dat is vijf uur per week." },
        { type: "paragraph", text: "Ruim 250 uur per jaar." },
        {
          type: "paragraph",
          text: "En wanneer dezelfde workflow groeit met het bedrijf, groeit die besparing mee.",
        },
        {
          type: "paragraph",
          text: "Dat is waarom kleine maatwerktools economisch interessant kunnen zijn.",
        },
        {
          type: "paragraph",
          text: "De waarde zit niet noodzakelijk in het aantal functies.",
        },
        {
          type: "paragraph",
          text: "De waarde zit in het aantal keren dat een nuttige functie wordt gebruikt.",
        },
      ],
    },
    "excel-hoeft-niet-weg": {
      headingNl: "Excel hoeft niet weg",
      blocksNl: [
        {
          type: "paragraph",
          text: "De conclusie is daarom niet dat maritieme bedrijven afscheid moeten nemen van Excel.",
        },
        { type: "paragraph", text: "Integendeel." },
        {
          type: "paragraph",
          text: "Excel blijft voor veel analyses een uitstekend gereedschap.",
        },
        {
          type: "paragraph",
          text: "Het probleem ontstaat wanneer een spreadsheet feitelijk verantwoordelijk wordt voor een terugkerend bedrijfsproces waarvoor Excel nooit ontworpen is.",
        },
        {
          type: "paragraph",
          text: "Wanneer steeds meer mensen ervan afhankelijk worden.",
        },
        {
          type: "paragraph",
          text: "Wanneer dezelfde gegevens steeds opnieuw worden ingevoerd.",
        },
        {
          type: "paragraph",
          text: "Wanneer verschillende versies ontstaan.",
        },
        {
          type: "paragraph",
          text: "Wanneer rapportage handmatig blijft.",
        },
        {
          type: "paragraph",
          text: "Wanneer fouten steeds kostbaarder worden.",
        },
        {
          type: "paragraph",
          text: "En vooral wanneer medewerkers iedere week opnieuw tijd besteden aan een probleem dat software één keer zou kunnen oplossen.",
        },
        {
          type: "paragraph",
          text: "Dan wordt het interessant om verder te kijken.",
        },
      ],
    },
    "belangrijkste-vraag": {
      headingNl: "De belangrijkste vraag",
      blocksNl: [
        {
          type: "paragraph",
          text: "Custom software begint niet met programmeren.",
        },
        { type: "paragraph", text: "Het begint met observeren." },
        { type: "paragraph", text: "Waar verdwijnt tijd?" },
        {
          type: "paragraph",
          text: "Waar wordt informatie dubbel ingevoerd?",
        },
        {
          type: "paragraph",
          text: "Welke spreadsheets zijn inmiddels bedrijfskritisch?",
        },
        {
          type: "paragraph",
          text: "Welke PDF's worden steeds opnieuw gelezen?",
        },
        {
          type: "paragraph",
          text: "Welke vergelijking wordt iedere week opnieuw gemaakt?",
        },
        {
          type: "paragraph",
          text: "Welke medewerker voert een taak uit waarvan iedereen weet dat het eigenlijk eenvoudiger zou moeten kunnen?",
        },
        {
          type: "paragraph",
          text: "Daar kan een verrassend kleine softwareoplossing achter zitten.",
        },
        {
          type: "paragraph",
          text: "En juist in een sector met complexe technische informatie, veel documentatie en terugkerende operationele workflows kan zo'n gerichte tool veel meer betekenen dan alleen een paar minuten tijdwinst.",
        },
        {
          type: "paragraph",
          text: "Het kan een proces sneller, consistenter en eenvoudiger maken.",
        },
        {
          type: "callout",
          text: "Niet meer software dan nodig. Wel precies de software die het probleem oplost.",
        },
      ],
    },
  }

function withSpreadsheetNl(article: InsightArticle): InsightArticle {
  return {
    ...article,
    slugNl: SLUG_NL,
    canonicalUrlNl: CANONICAL_NL,
    titleNl: "Wanneer wordt een maritieme spreadsheet beter als software?",
    excerptNl:
      "Excel is goedkoop. De handmatige workflow eromheen soms niet. Wanneer dezelfde maritieme gegevens telkens opnieuw worden gezocht, gekopieerd en gecontroleerd, kan een kleine maatwerktool verrassend veel tijd besparen.",
    categoryNl: "Maritieme software",
    readingTimeNl: "10 min lezen",
    seoTitleNl:
      "Wanneer wordt een maritieme spreadsheet beter als software? | Breure.ai",
    metaDescriptionNl:
      "Veel maritieme workflows draaien nog op Excel, PDF's en handmatig werk. Ontdek wanneer gerichte custom software tijd, fouten en terugkerend werk kan besparen.",
    keywordsNl: [
      "maritieme software",
      "custom software maritieme sector",
      "Excel workflow",
      "maritime workflow automation",
      "vessel data",
      "PDF data extraction",
      "workflow software",
    ],
    introNl:
      "Veel maritieme processen draaien jarenlang prima in Excel. Maar zodra medewerkers steeds dezelfde gegevens zoeken, kopiëren, controleren en opnieuw verwerken, kan een goedkope spreadsheet ongemerkt een dure workflow worden.",
    heroImage: article.heroImage
      ? {
          ...article.heroImage,
          altNl:
            "Van Excel en PDF's naar gerichte vessel comparison software voor een maritieme workflow.",
        }
      : undefined,
    openingNl,
    inlineImages: [
      {
        afterSectionId: "echte-kosten",
        src: "/images/insights/maritieme-spreadsheet-naar-software/maritieme-handmatige-workflow-excel-pdf-vessel-data.webp",
        alt: "Handmatige maritieme workflow met Excel, PDF's, vessel data en tijdrovende controles.",
        altNl:
          "Handmatige maritieme workflow met Excel, PDF's, vessel data en tijdrovende controles.",
        width: 1672,
        height: 941,
        captionNl:
          "Veel kleine handmatige stappen kunnen samen een structurele kostenpost worden.",
        locales: ["nl"],
      },
      {
        afterSectionId: "van-45-minuten",
        src: "/images/insights/maritieme-spreadsheet-naar-software/maritieme-software-workflow-van-handmatig-naar-gerichte-tool.webp",
        alt: "Van handmatige maritieme workflow naar gerichte software voor vessel comparison en snellere rapportage.",
        altNl:
          "Van handmatige maritieme workflow naar gerichte software voor vessel comparison en snellere rapportage.",
        width: 1536,
        height: 1024,
        captionNl:
          "Een gerichte tool brengt verspreide vessel data, controles en rapportage samen in één workflow.",
        locales: ["nl"],
      },
      {
        afterSectionId: "pdf-kostenlek",
        src: "/images/insights/maritieme-spreadsheet-naar-software/maritieme-pdf-naar-gestructureerde-vessel-data-software.webp",
        alt: "Maritieme PDF automatisch omzetten naar gestructureerde vessel data voor vergelijking en verdere verwerking.",
        altNl:
          "Maritieme PDF automatisch omzetten naar gestructureerde vessel data voor vergelijking en verdere verwerking.",
        width: 1672,
        height: 941,
        captionNl:
          "Technische vessel data kan uit documenten worden gehaald, gecontroleerd en direct gestructureerd worden voor verder gebruik.",
        locales: ["nl"],
      },
    ],
    sections: article.sections.map((section): InsightSection => ({
      ...section,
      headingNl: sectionNl[section.id]?.headingNl ?? section.heading,
      blocksNl: sectionNl[section.id]?.blocksNl ?? section.blocks,
    })),
    conclusion: {
      ...article.conclusion,
      headingNl: "Bekijk hoe een gerichte maritieme tool eruit kan zien",
      paragraphsNl: [
        "Breure.ai bouwt gerichte custom software voor maritieme workflows.",
        "De [Vessel Comparison Tool](/tools/vessel-comparison) laat zien hoe technische vessel data in één overzicht kan worden vergeleken en hoe daar bruikbare output van kan worden gemaakt.",
        "De tool gebruikt fictieve demodata en is uitsluitend bedoeld als demonstratie van het soort gerichte software dat rond een specifieke maritieme workflow kan worden gebouwd.",
      ],
      ctaNl: "",
      ctaLabelNl: "Bekijk de Vessel Comparison Tool",
      ctaHrefNl: "/tools/vessel-comparison",
    },
  }
}

export const spreadsheetToSoftwareArticle = withSpreadsheetNl(
  spreadsheetToSoftwareEn,
)
