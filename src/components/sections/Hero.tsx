import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const slots = ["10:30 am", "12:00 pm", "5:30 pm", "7:00 pm"];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 size-[28rem] rounded-full bg-brand-soft blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-brand shadow-sm ring-1 ring-brand-soft">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            {site.offer.label}: {site.offer.text} at {site.offer.price}
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Gentle dental care for <span className="text-brand">confident smiles</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Check-ups, aligners, implants and family dentistry under one roof. Clear prices, evening
            slots and an online booking that takes under two minutes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#booking">
              Book appointment <Icon name="arrow" className="size-5" />
            </Button>
            <Button href={site.contact.whatsappHref} variant="ghost" external>
              <Icon name="whatsapp" className="size-5 text-brand" /> Chat on WhatsApp
            </Button>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 text-sm font-medium text-ink sm:flex sm:flex-wrap sm:gap-6">
            {site.trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="size-5 text-brand" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Booking preview card – illustrative UI, no photos needed */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-xl ring-1 ring-line">
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-bold">Next available</p>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
                Today
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">Check-up &amp; cleaning · 45 min</p>
            <ul className="mt-5 grid grid-cols-2 gap-3" aria-label="Sample time slots">
              {slots.map((s, i) => (
                <li
                  key={s}
                  className={`rounded-xl border px-4 py-3 text-center text-sm font-semibold ${
                    i === 2 ? "border-brand bg-brand text-white" : "border-line text-ink"
                  }`}
                >
                  {s}
                </li>
              ))}
            </ul>
            <a
              href="#booking"
              className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-brand font-semibold text-white hover:bg-brand-dark"
            >
              Confirm 5:30 pm
            </a>
          </div>
          <div className="animate-float absolute -bottom-6 -left-4 hidden items-center gap-3 sm:flex rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-line sm:-left-10">
            <span className="grid size-10 place-items-center rounded-full bg-accent/20 text-accent-dark">
              <Icon name="check" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Written estimate</p>
              <p className="text-xs text-muted">before any treatment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
