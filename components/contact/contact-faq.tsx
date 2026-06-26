import { dict, type Locale } from "@/lib/i18n"

interface ContactFaqProps {
  locale?: Locale
}

export function ContactFaq({ locale = "nl" }: ContactFaqProps) {
  const t = dict.contactFaqs[locale]

  return (
    <section
      aria-labelledby="contact-faq-heading"
      className="border-t border-border/50 py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-3xl">
        <h2
          id="contact-faq-heading"
          className="text-xl sm:text-2xl font-light text-foreground mb-3"
        >
          {t.heading}
        </h2>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
          {t.intro}
        </p>
        <dl className="space-y-8">
          {t.items.map((item) => (
            <div key={item.question}>
              <dt className="text-base sm:text-lg font-medium text-foreground mb-2">
                {item.question}
              </dt>
              <dd className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
