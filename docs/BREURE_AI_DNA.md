# BREURE.AI — COMPANY DNA

> **Doel van dit bestand:** Dit is het levende strategie- en contextdocument voor Breure.ai.
> Plaats in de repo als `docs/BREURE_AI_DNA.md`. Voer het aan Cursor (en andere AI-agents)
> als context bij elke sessie: *"Lees docs/BREURE_AI_DNA.md — dit is onze strategie, bouw hiernaar."*
> Update dit bestand na elk strategiegesprek, pilotgesprek of belangrijke beslissing.

**Versie:** 2.0 · **Laatst bijgewerkt:** 2026-07-19 · **Eigenaar:** Ard Breure (solo founder)

---

## 1. Missie & Positionering

**Breure.ai bouwt razendsnel custom maritieme software.**

Wij luisteren diep naar het probleem van de klant, begrijpen het, en wikkelen de oplossing
in een tool die exact op hun workflow is gebouwd — geen generieke off-the-shelf software.

### De "wrapper around software"-filosofie
- Wij verkopen geen standaardsoftware; wij lossen specifieke maritieme problemen op met
  AI-gedreven custom tools, snel en betrouwbaar geleverd.
- **Deze filosofie is publiek** — hij staat op de website als missie. Transparantie bouwt vertrouwen.
- **De echte moat is de executie:** snelheid, servicekwaliteit, klantrelaties en als eerste
  aanwezig zijn in Rotterdam. Het idee is kopieerbaar; de uitvoering niet.

### Waarom wij winnen
| Kracht | Uitleg |
|---|---|
| **Snelheid** | Solo founder, wendbaar; custom tools in dagen i.p.v. maanden |
| **Focus** | Puur maritiem/offshore, geen generieke software-agency |
| **Service** | Intake Agent kwalificeert aanvragen; klant voelt zich direct begrepen |
| **Prijs** | Toegankelijk instapmodel, schaalbaar naar custom builds |

### Wat wij NIET zijn
- Geen VC-gefinancierde groeimachine — duurzaam, winstgevend solo-bedrijf
- Geen concurrent van grote maritieme software-suites op schaal of domeinkennis —
  wij winnen op snelheid en relatie, niet op omvang

---

## 2. Doelmarkt

**Fase 1 (nu):** 10–15 kleine/middelgrote Rotterdamse charterers, offshore contractors,
subsea-bedrijven en brokers. Bedrijven die multi-miljoen offshore projecten draaien en
tijd verliezen aan handmatig vergelijkwerk en versnipperde informatie.

**Fase 2 (later):** Wereldwijde havens (Antwerpen, Hamburg, Houston, Singapore, Midden-Oosten) —
zelfde problemen, zelfde oplossingsarchitectuur. Pas ná bewezen product-market fit in Rotterdam.

### De spelers (marktbegrip)
- **Projecteigenaar** (energiebedrijf): laat bv. een offshore windpark bouwen
- **Contractor**: wint het project, moet schepen inhuren → vaak de *charterer*
- **Charterer**: huurt een schip voor een specifieke klus (weken/maanden)
- **Reder / ship owner**: bezit de schepen (OSV's, supply vessels, heavy lift)
- **Broker**: tussenpersoon die vraag en aanbod matcht, stuurt spec-PDF's rond

**De pijn:** een charterer krijgt 5 spec-PDF's van verschillende brokers, elk anders
opgemaakt, kraancurves begraven op pagina 8. Uren handwerk om te vergelijken.

---

## 3. Productroadmap

### Tool #1 — Vessel Comparison Tool ✅ LIVE
- **URL:** breure.ai/tools/vessel-comparison
- **Probleem:** charterers verspillen uren aan het vergelijken van scheepsspecs uit losse PDF's
- **Oplossing:** 2–4 schepen naast elkaar, interactieve kraancurves (radius + giekhoek),
  directe PDF-export van de vergelijking
- **Status:** MVP live; eerst **bugvrij en betrouwbaar** maken (o.a. EN-nav fix), dan pas monetiseren
- **Sub-branding:** tools krijgen eigen namen onder de Breure-paraplu (zoals Microsoft → Word/Excel).
  Naam blijft voorlopig "Vessel Comparison Tool" — beschrijvend is goed.

### Tool #2 — Intake Agent 🎯 GEPLAND (game changer)
- **Probleem:** inkomende aanvragen zijn chaotisch; Ard heeft (nog) geen maritieme domeinkennis
  en geen tijd voor verkennende telefoontjes; risico op geloofwaardigheidsverlies in direct contact
- **Oplossing:** AI-agent (Claude-gebaseerd, tekst + spraak) voert het eerste gesprek,
  stelt scherpe maritieme vervolgvragen, structureert alles tot een heldere brief
- **Flow:** klant beschrijft probleem (5 min) → agent kwalificeert → Ard reviewt brief →
  offerte → levering "binnen 1 week" (veilige marge; bouw is vaak veel sneller)
- **Impact:** schalen zonder personeel; klanten versteld van de ervaring; Ard alleen
  betrokken bij gekwalificeerde projecten

### Tools #3+ — TBD
Bepaald door pilotfeedback, niet door gissen. Kandidaten uit gesprekken: crane capacity
onder weersomstandigheden, crew scheduling, project timeline planning, subsea equipment database.

---

## 4. Businessmodel & Pricing

### Standaardtools (SaaS, maandelijks)
| Tier | Prijs | Inhoud (indicatief) |
|---|---|---|
| Free | €0 | 2 schepen, basisvergelijking, geen export |
| Starter | €49/mnd | Meer schepen, PDF-export |
| Professional | €99/mnd | + opgeslagen vergelijkingen |
| Premium | €199/mnd | + integraties / API |

- **Auth vereist:** login via Supabase, zodat toegang stopt bij wanbetaling
- **Niet onderprijzen:** klanten draaien €10M+ projecten; €200/mnd is voor hen wisselgeld.
  Prijs is prijs — geen onderhandeling per standaardtool.

### Custom builds (projectbasis)
- Gescoped via Intake Agent → vaste prijs **€500–€5.000+** afhankelijk van complexiteit
- Levertijd: **1 week** gecommuniceerd (conservatief; realistisch vaak 3–6 uur bouw)

### Pilotstrategie (eerst!)
- Eerste 2–3 klanten: gratis of zeer goedkoop, feedback-first
- Doel: valideren, use cases verzamelen, input voor Tool #2–3
- **Kernvraag aan elke pilot:** *"Zou je dit echt gebruiken i.p.v. PDF's in ChatGPT gooien,
  of is het nice-to-have?"* (eerlijkheidstest)
- Niet schalen vóór bewezen product-market fit

---

## 5. Go-To-Market (Fase 1)

1. **Direct outreach:** 10–15 persoonlijke berichten aan Rotterdamse charterers/contractors.
   Framing: feedback vragen, geen salespitch. Doel: 2–3 pilotgesprekken in 1–2 maanden.
2. **LinkedIn + X:** geloofwaardigheidslaag, geen primair saleskanaal. Eerlijke posts over
   maritieme problemen, tool-launches, learnings. Lanceerpost klaar (posten met video/screenshot,
   NIET met linkpreview; di–do 08:00–10:00).
3. **Website:** heldere positionering + later case studies uit pilots.

**Messaging-principe:** lead met het probleem, niet met features.
*"I got tired of watching charterers compare vessel specs across a dozen PDFs. So I built something."*

---

## 6. Techniek & Werkwijze

- **Stack:** Next.js 16, React 19, TypeScript, Tailwind 4, shadcn/ui, Supabase (schema klaar,
  nog niet live — handmatige data-invoer voor MVP), Vercel
- **Package manager:** **ALTIJD pnpm, nooit npm** (lockfile-incident 2026-07)
- **Nieuwe dependencies:** check of build scripts approval nodig hebben in
  `pnpm-workspace.yaml` (`allowBuilds`)
- **Workflow:** PowerShell met `;` (nooit `&&`), selectieve `git add`, conventional lowercase
  commits, STAP 0 read-only audit vóór wijzigingen, `npm run build` vóór commit,
  geen commit/push zonder expliciete review van Ard
- **Rolverdeling:** Cursor = mechanische file-operaties; Claude = strategie, content, prompts
- **AI-agents:** Claude via API; intake straks met spraak + tekst

---

## 7. Risico's & Antwoorden

| Risico | Antwoord |
|---|---|
| **"Waarom niet gewoon ChatGPT?"** | Snelheid (30 sec vs 5 min), interactiviteit (kraancurves), herhaalbaarheid (database), maritieme geloofwaardigheid. → Valideren bij pilots. |
| **Grote spelers kopiëren het wrapper-idee** | Zij hebben netwerk + domeinkennis, wij niet. Moat = snelheid, relatie, als eerste embedded zijn in Rotterdam. Niet concurreren op schaal. |
| **Trage AI-adoptie in maritiem** | Starten bij early adopters, resultaten laten spreken, mond-tot-mond. |
| **Betrouwbaarheid** | Geen verkoop vóór het bugvrij is. Reputatie in een kleine industrie is alles. |

---

## 8. Succesmetrics (Jaar 1)

- Vessel Comparison Tool: 2–5 betalende klanten, €3k–€15k omzet (break-even is oké)
- Intake Agent: operationeel, 5–10 inbound aanvragen/maand
- Custom builds: 2–3 projecten gescoped en geleverd
- Helder beeld van wat maritieme teams écht nodig hebben (input Tools #2–3)

**Persoonlijke lat:** €2.000–€3.000/mnd nettowinst als solo founder = succes.
Het grote schaalverhaal (wereldhavens, agent-gedreven groei) is de stip op de horizon,
niet het plan voor dit jaar.

---

## 9. Directe next steps (deze sprint)

1. ☐ EN-nav layout-fix afronden (`navigation.tsx`) + verificatie lg/xl/1440, NL + EN
2. ☐ Volledige deploy-check: Tools in nav, vergelijking testen, PDF-export, mobiel
3. ☐ OG-image voor de toolpagina (1200×630)
4. ☐ LinkedIn-launchpost (met screen recording) + X-variant
5. ☐ 10–15 outreach-berichten opstellen en versturen
6. ☐ Pas daarna: Intake Agent verkennen (Tool #2)

---

## 10. Onthoud

- Executie > perfectie. Eerst bulletproof, dan itereren.
- Praat vroeg en vaak met pilots; hun feedback is meer waard dan aannames.
- Niet onderprijzen uit zenuwen.
- De wrapper-filosofie is publiek; de moat is hoe wij het uitvoeren.
