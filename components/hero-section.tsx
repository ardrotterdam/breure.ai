import { FadeIn } from "@/components/animated-text"
import { HeroCta } from "@/components/hero/hero-cta"
import { HeroHeadline } from "@/components/hero/hero-headline"
import { HeroIllustration } from "@/components/hero/hero-illustration"
import { HeroScrollIndicator } from "@/components/hero/hero-scroll-indicator"
import { FadeInOnMount } from "@/components/motion/fade-in-on-mount"
import { OceanAnimation } from "@/components/ocean-animation"
import { dict, type Locale } from "@/lib/i18n"

interface HeroSectionProps {
  locale?: Locale
}

export function HeroSection({ locale = "nl" }: HeroSectionProps) {
  const t = dict.hero[locale]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pb-24 sm:pb-32">
      <OceanAnimation />

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div className="absolute inset-x-0 bottom-0 h-48 sm:h-56 bg-gradient-to-b from-transparent via-background/40 to-secondary pointer-events-none" />

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-12 pt-32 sm:pt-36 lg:pt-40 pb-8 sm:pb-12">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="max-w-2xl">
            <FadeInOnMount delay={0.2}>
              <p className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-accent-soft mb-5 sm:mb-6">
                {t.eyebrow}
              </p>
            </FadeInOnMount>

            <HeroHeadline
              headlineMain={t.headlineMain}
              headlineAccent={t.headlineAccent}
              headlineEnd={t.headlineEnd}
            />

            <FadeIn delay={1.3}>
              <p
                className={`text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed ${
                  t.paragraph ? "mb-4" : "mb-9 sm:mb-10"
                }`}
              >
                {t.subheadline}
              </p>
              {t.paragraph ? (
                <p className="text-sm sm:text-[15px] text-text-dim max-w-xl leading-relaxed mb-9 sm:mb-10">
                  {t.paragraph}
                </p>
              ) : null}
            </FadeIn>

            <FadeIn delay={1.5}>
              <HeroCta
                locale={locale}
                primaryLabel={t.ctaPrimary}
                secondaryLabel={t.ctaSecondary}
              />
            </FadeIn>

            <HeroIllustration
              variant="mobile"
              badgeOne={t.badgeOne}
              badgeTwo={t.badgeTwo}
            />
          </div>

          <HeroIllustration
            variant="desktop"
            badgeOne={t.badgeOne}
            badgeTwo={t.badgeTwo}
          />
        </div>
      </div>

      <HeroScrollIndicator />
    </section>
  )
}
