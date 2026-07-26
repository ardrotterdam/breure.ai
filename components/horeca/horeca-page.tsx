import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { Navigation } from "@/components/navigation"
import {
  FRIETKOT_ACCENT,
  HorecaCasePanel,
  INDENKONING_ACCENT,
} from "@/components/horeca/horeca-case-panel"
import { HorecaApproach } from "@/components/horeca/horeca-approach"
import { HorecaCta } from "@/components/horeca/horeca-cta"
import { HorecaHero } from "@/components/horeca/horeca-hero"
import { dict, type Locale } from "@/lib/i18n"

type HorecaPageProps = {
  locale: Locale
}

export function HorecaPage({ locale }: HorecaPageProps) {
  const cases = dict.horeca[locale].cases

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="horeca" />
      <Navigation locale={locale} />
      <main>
        <HorecaHero locale={locale} />
        <HorecaCasePanel
          name={cases.frietkot.name}
          location={cases.frietkot.location}
          description={cases.frietkot.description}
          cta={cases.frietkot.cta}
          href="https://demo-frietkot.breure.ai"
          imageSrc="/images/horeca/frietkot-belgische-friterie-website-bourg-argental.webp"
          imageAlt={cases.frietkot.imageAlt}
          imageWidth={1309}
          imageHeight={836}
          accent={FRIETKOT_ACCENT}
        />
        <HorecaCasePanel
          name={cases.indenkoning.name}
          location={cases.indenkoning.location}
          description={cases.indenkoning.description}
          cta={cases.indenkoning.cta}
          href="https://demo-indenkoning.breure.ai"
          imageSrc="/images/horeca/bistro-in-den-koning-website-waterlandkerkje.webp"
          imageAlt={cases.indenkoning.imageAlt}
          imageWidth={1473}
          imageHeight={958}
          accent={INDENKONING_ACCENT}
          label={cases.indenkoning.label}
          reverse
        />
        <HorecaApproach locale={locale} />
        <HorecaCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
