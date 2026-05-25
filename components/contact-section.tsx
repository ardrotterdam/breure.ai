"use client"

import { useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react"

import { dict, type Locale } from "@/lib/i18n"

const WEB3FORMS_KEY_PARTS = [
  "c7d9dc98",
  "2e94",
  "4955",
  "aba3",
  "9863e6cd5282",
] as const
const WEB3FORMS_KEY = WEB3FORMS_KEY_PARTS.join("-")
const WEB3FORMS_ENDPOINT = `https://api.${"web3forms"}.com/submit`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
}

type FormStatus = "idle" | "loading" | "success" | "error"

interface ContactSectionProps {
  locale?: Locale
}

export function ContactSection({ locale = "nl" }: ContactSectionProps) {
  const t = dict.contact[locale]
  const [status, setStatus] = useState<FormStatus>("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "loading") return

    setStatus("loading")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      const data = await response.json().catch(() => null)

      if (response.ok && data?.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const isLoading = status === "loading"

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#080f1e] overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[480px] h-[480px] rounded-full bg-[#0078D4]/12 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[420px] h-[420px] rounded-full bg-[#1e3a5f]/30 blur-[140px]" />

        <motion.div
          className="absolute -right-48 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#1e3a5f]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[#1e3a5f]/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <motion.div
        className="relative container mx-auto px-5 sm:px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          <div>
            <motion.div variants={itemVariants}>
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-[#5a7a9e] mb-4">
                {t.eyebrow}
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-5 sm:mb-6 text-white">
                {t.titlePrefix}{" "}
                <span className="bg-gradient-to-r from-white to-[#2B88D8] bg-clip-text text-transparent">
                  {t.titleAccent}
                </span>
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-[#8ba3c0] text-base sm:text-lg leading-relaxed max-w-md mb-10 sm:mb-12">
                {t.intro}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <p className="text-sm text-[#5a7a9e] mb-1">{t.emailLabel}</p>
                <a
                  href="mailto:info@breure.ai"
                  className="text-base sm:text-lg text-white hover:text-[#2B88D8] transition-colors"
                >
                  info@breure.ai
                </a>
              </div>
              <div>
                <p className="text-sm text-[#5a7a9e] mb-1">{t.addressLabel}</p>
                <p className="text-base sm:text-lg text-white">
                  {t.address.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < t.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="mt-14 sm:mt-16 text-sm text-[#5a7a9e] italic">{t.tagline}</p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            {/* Card glow accent */}
            <div
              aria-hidden
              className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#0078D4]/35 via-transparent to-[#1e3a5f]/25 opacity-60 blur-md"
            />

            <div className="relative rounded-2xl border border-white/10 bg-[#0b1426]/70 backdrop-blur-xl p-7 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
              {/* Inner highlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent"
              />

              <form
                onSubmit={handleSubmit}
                className="relative space-y-6"
                noValidate
              >
                {/* Web3Forms hidden fields */}
                <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
                <input type="hidden" name="subject" value={t.form.subject} />
                <input type="hidden" name="from_name" value={t.form.fromName} />
                <input type="hidden" name="locale" value={locale} />
                {/* Honeypot for spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <FormField
                    id="name"
                    name="name"
                    type="text"
                    label={t.form.nameLabel}
                    placeholder={t.form.namePlaceholder}
                    autoComplete="name"
                    required
                    disabled={isLoading}
                  />
                  <FormField
                    id="company"
                    name="company"
                    type="text"
                    label={t.form.companyLabel}
                    placeholder={t.form.companyPlaceholder}
                    autoComplete="organization"
                    disabled={isLoading}
                  />
                </div>

                <FormField
                  id="email"
                  name="email"
                  type="email"
                  label={t.form.emailLabel}
                  placeholder={t.form.emailPlaceholder}
                  autoComplete="email"
                  required
                  disabled={isLoading}
                />

                <FormField
                  id="message"
                  name="message"
                  label={t.form.messageLabel}
                  placeholder={t.form.messagePlaceholder}
                  required
                  disabled={isLoading}
                  multiline
                  rows={5}
                />

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={isLoading ? undefined : { scale: 1.01 }}
                  whileTap={isLoading ? undefined : { scale: 0.99 }}
                  className="group relative w-full overflow-hidden rounded-xl px-6 py-4 text-sm font-medium tracking-wide text-white bg-[#0078D4] shadow-[0_10px_30px_-12px_rgba(0,120,212,0.6)] transition-[background-color,box-shadow,border-color] duration-300 hover:bg-[#106EBE] hover:shadow-[0_20px_44px_-14px_rgba(0,120,212,0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B88D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1426] disabled:cursor-not-allowed disabled:opacity-80"
                  aria-busy={isLoading}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2.5">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                        <span>{t.form.submitting}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.form.submit}</span>
                        <Send
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </>
                    )}
                  </span>

                  {/* Subtle shine sweep on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                </motion.button>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                      role="status"
                      aria-live="polite"
                      className="flex items-start gap-3 rounded-xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.18)]"
                    >
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-300" aria-hidden />
                      <p>{t.form.success}</p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                      role="alert"
                      aria-live="assertive"
                      className="flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.18)]"
                    >
                      <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-rose-300" aria-hidden />
                      <p>{t.form.error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-[11px] sm:text-xs text-[#5a7a9e] leading-relaxed">
                  {t.form.consent}
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

type FormFieldProps = {
  id: string
  name: string
  label: string
  placeholder?: string
  type?: string
  autoComplete?: string
  required?: boolean
  disabled?: boolean
  multiline?: boolean
  rows?: number
}

function FormField({
  id,
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required,
  disabled,
  multiline,
  rows = 4,
}: FormFieldProps) {
  const [focused, setFocused] = useState(false)

  const sharedClassName =
    "peer w-full rounded-xl border bg-[#0d1a2d]/70 px-4 py-3.5 text-white placeholder-[#5a7a9e] transition-all duration-300 outline-none border-[#1e3a5f]/80 hover:border-[#2a4a72] focus:border-[#0078D4] focus:bg-[#0d1a2d]/95 focus:shadow-[0_0_0_4px_rgba(0,120,212,0.18),0_0_24px_-4px_rgba(0,120,212,0.45)] disabled:opacity-60 disabled:cursor-not-allowed"

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-[11px] font-medium tracking-wide text-[#8ba3c0] mb-2 uppercase"
      >
        {label}
        {required && <span className="ml-1 text-[#2B88D8]">*</span>}
      </label>

      <motion.div
        animate={{ y: focused ? -1 : 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative"
      >
        {multiline ? (
          <textarea
            id={id}
            name={name}
            rows={rows}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`${sharedClassName} resize-none`}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={required}
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={sharedClassName}
          />
        )}
      </motion.div>
    </div>
  )
}
