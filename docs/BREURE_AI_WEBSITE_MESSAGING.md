# BREURE.AI — WEBSITE MESSAGING & STRUCTUUR

> **Doel:** dit document definieert de boodschap en structuur van breure.ai zodat elke
> bezoeker binnen 10 seconden begrijpt: wat wij zijn, voor wie, en waarom het werkt.
> Plaats in de repo als `docs/BREURE_AI_WEBSITE_MESSAGING.md` en voer aan Cursor als
> context bij website-wijzigingen, samen met `docs/BREURE_AI_DNA.md`.

**Versie:** 1.0 · **Datum:** 2026-07-19 · **Talen:** NL + EN (copy voor beide hieronder)

---

## 1. De kernboodschap (één zin)

**NL:** Breure.ai bouwt custom software voor de maritieme industrie — in dagen, niet maanden.

**EN:** Breure.ai builds custom software for the maritime industry — in days, not months.

Alles op de site moet deze zin ondersteunen. Als een sectie dit niet versterkt, hoort hij er niet.

### Wat wij zijn (intern kompas, niet letterlijk op de site)
- Geen gewoon webbureau: wij bouwen **werkende tools**, geen brochuresites
- Geen software-suite: wij lossen **één specifiek probleem per tool** op
- De "wrapper"-filosofie is publiek: wij wikkelen AI-kracht in tools die exact
  op de workflow van de klant passen — snelheid en service zijn de moat

---

## 2. Het messaging-frame: Probleem → Bewijs → Belofte

Elke pagina volgt dezelfde volgorde. Nooit leiden met features.

| Stap | Wat | Voorbeeld |
|---|---|---|
| **1. Probleem** | Herkenbaar, specifiek, maritiem | "5 spec-PDF's van 5 brokers, kraancurves op pagina 8" |
| **2. Bewijs** | Laat de tool zien (demo, screenshot, video) | Vessel Comparison Tool live te proberen |
| **3. Belofte** | Wat wij voor JOUW probleem doen | "Beschrijf je probleem, binnen een week een werkende tool" |

---

## 3. Sitestructuur (aanbevolen)

```
/                    Homepage — het volledige verhaal in 6 secties
/tools/…             Live tools (demo = beste salespitch)
/diensten (/services) Custom builds — het "wij bouwen ook voor jou"-verhaal
/proces (/process)    Hoe het werkt: intake → bouw → levering in 1 week
/portfolio            Cases (nu: eigen tools; later: pilotcases)
/inzichten (/insights) Geloofwaardigheid: maritieme problemen + learnings
/contact              Laagdrempelig: "beschrijf je probleem" (straks: Intake Agent)
```

Geen nieuwe pagina's nodig — de huidige structuur klopt. Het gaat om de **copy en volgorde**.

---

## 4. Homepage: sectie voor sectie

### 4.1 Hero
**NL kop:** Custom maritieme software. Gebouwd in dagen.
**NL sub:** Wij bouwen tools die exact passen op jouw workflow — voor charterers,
offshore contractors en brokers die geen maanden kunnen wachten op software.
**EN kop:** Custom maritime software. Built in days.
**EN sub:** We build tools that fit your exact workflow — for charterers, offshore
contractors and brokers who can't wait months for software.

**CTA primair:** "Probeer de Vessel Comparison Tool" / "Try the Vessel Comparison Tool"
**CTA secundair:** "Beschrijf jouw probleem" / "Tell us your problem" → /contact
*(Let op: hero-CTA wijst nu naar tools — goed. Overweeg de secundaire naar contact
i.p.v. beide naar tools/services.)*

### 4.2 Het probleem (Why-sectie herframen)
**NL:** Maritieme teams verliezen uren aan handwerk: specs vergelijken uit losse PDF's,
kraancurves overtypen, informatie bij elkaar rapen uit mails van brokers.
Generieke software lost dit niet op — die is niet voor jouw workflow gebouwd.
**EN:** Maritime teams lose hours to manual work: comparing specs across scattered PDFs,
retyping crane curves, piecing together broker emails. Generic software doesn't fix
this — it wasn't built for your workflow.

### 4.3 Featured Tool (staat er al — copy check)
**NL kop:** Stop met specs vergelijken in PDF's
**NL sub:** Vergelijk 2–4 schepen naast elkaar. Interactieve kraancurves. Directe
PDF-export. Gratis te proberen.
**EN kop:** Stop comparing vessel specs in PDFs
**EN sub:** Compare 2–4 vessels side by side. Interactive crane load charts. Instant
PDF export. Free to try.
**CTA:** "Open de tool" / "Open the tool"

### 4.4 Zo werken wij (Services/Process samengevat)
Drie stappen, maximaal één zin per stap:
1. **Vertel je probleem** — 5 minuten, geen salesgesprek
   *(EN: Tell us your problem — 5 minutes, no sales call)*
2. **Wij bouwen jouw tool** — exact op jouw workflow, geen generieke software
   *(EN: We build your tool — fitted to your workflow, nothing generic)*
3. **Live binnen een week** — vaste prijs, geen verrassingen
   *(EN: Live within a week — fixed price, no surprises)*

### 4.5 Waarom Breure.ai (vertrouwenssectie)
- **Maritiem, niks anders** — geen generiek bureau / *Maritime only — not a generic agency*
- **Snelheid als standaard** — dagen, niet maanden / *Speed as standard — days, not months*
- **Probeer voordat je betaalt** — elke tool heeft een gratis demo / *Try before you buy*
- **Rotterdam** — wij zitten waar jij zit / *Based in Rotterdam — where you are*

### 4.6 Slot-CTA
**NL:** Heb je een terugkerend probleem dat software zou moeten oplossen?
Beschrijf het. Binnen een week heb je een werkende tool.
**EN:** Got a recurring problem software should solve?
Describe it. You'll have a working tool within a week.

---

## 5. Toon & taalregels

- **Direct en concreet.** Geen "innovatieve AI-oplossingen" — wel "kraancurves in 30
  seconden vergelijken in plaats van 20 minuten bladeren".
- **Eerlijk over wie wij zijn.** Solo founder is een kracht (snelheid, direct contact),
  niet iets om te verbergen. Niet doen alsof we een team van 50 zijn.
- **Vakjargon mag.** DP class, crane capacity, deck area — de doelgroep spreekt dit.
  Tool-UI blijft bewust Engels (industrienorm); site-chrome volgt de gekozen taal.
- **Eén CTA per sectie.** Niet drie knoppen naast elkaar.
- **Cijfers boven bijvoeglijke naamwoorden.** "Binnen 1 week" > "razendsnel".

---

## 6. Wat NIET op de site

- Prijzen van custom builds op de homepage (die komen uit de intake — scope verschilt)
- Beloftes die we nog niet waarmaken (integraties, API's die er nog niet zijn)
- Het woord "wrapper" als kop — de filosofie mag genoemd op /proces of /diensten,
  maar de klant koopt een opgelost probleem, geen architectuurterm
- Stockfoto's van containerschepen bij zonsondergang — screenshots van échte tools
  zijn het bewijs

---

## 7. Prioriteit van aanpassingen (voorstel voor Cursor)

1. Hero-copy NL + EN naar §4.1 (incl. secundaire CTA naar /contact heroverwegen)
2. Why-sectie herframen naar probleem-taal (§4.2)
3. Featured Tool-copy checken tegen §4.3
4. "Zo werken wij"-driestapper toevoegen of bestaande proces-samenvatting herschrijven (§4.4)
5. Slot-CTA (§4.6)
6. /diensten en /proces daarna in dezelfde toon herschrijven (aparte sessie)

Elke stap: STAP 0 audit eerst, dan copy-wijziging, `pnpm build`, review door Ard, commit.
