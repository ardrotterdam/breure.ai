type InsightHeroPlaceholderProps = {
  label?: string
}

export function InsightHeroPlaceholder({
  label = "Maritieme software",
}: InsightHeroPlaceholderProps) {
  return (
    <div className="absolute inset-0 bg-ocean-deep" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent 0%, rgb(0 0 0 / 0.28) 100%),
            radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.16) 1px, transparent 0)`,
          backgroundSize: "auto, 28px 28px",
        }}
      />
      <div
        className="absolute -top-24 -left-16 h-[70%] w-[55%] rounded-full blur-[90px]"
        style={{ backgroundColor: "var(--accent-blur)" }}
      />
      <div
        className="absolute -bottom-20 right-[-10%] h-[65%] w-[50%] rounded-full blur-[100px]"
        style={{ backgroundColor: "var(--divider-blur)" }}
      />

      <div className="absolute inset-x-8 inset-y-7 sm:inset-x-12 sm:inset-y-10">
        <div className="h-full w-full rounded-lg border border-white/10 bg-black/20 p-3 sm:p-4">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          </div>
          <div className="grid h-[calc(100%-1.25rem)] grid-cols-6 grid-rows-5 gap-1.5 sm:gap-2">
            {Array.from({ length: 30 }, (_, index) => (
              <div
                key={index}
                className="rounded-[3px] bg-white/[0.06]"
                style={{
                  opacity: index < 6 ? 0.9 : 0.35 + ((index * 7) % 5) * 0.08,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {label ? (
        <p className="absolute bottom-3 left-4 sm:bottom-4 sm:left-5 text-[10px] sm:text-xs font-medium tracking-[0.28em] uppercase text-white/45">
          {label}
        </p>
      ) : null}
    </div>
  )
}
