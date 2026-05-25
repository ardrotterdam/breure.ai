import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact | Plan een call | Breure Web Agency",
  description:
    "Neem contact op met Breure Web Agency in Rotterdam. Plan een vrijblijvend gesprek over asset websites voor uw offshore of maritieme vloot.",
  keywords: [
    "Breure contact",
    "offshore website contact",
    "maritime web agency Rotterdam",
    "plan een call",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://breure.ai/contact",
    title: "Contact | Breure Web Agency",
    description:
      "Plan een vrijblijvend gesprek met Breure Web Agency over asset websites voor uw offshore of maritieme vloot.",
    siteName: "Breure Web Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Breure Web Agency",
    description:
      "Plan een vrijblijvend gesprek met Breure Web Agency over asset websites voor uw offshore of maritieme vloot.",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 md:pt-28">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
