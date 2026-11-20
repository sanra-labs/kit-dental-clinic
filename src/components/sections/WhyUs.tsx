import { reasons, site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="bg-ink py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-soft">Why {site.shortName}</p>
          <h2 id="why-title" className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Dentistry that feels calm, clear and on your schedule
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Most people put off the dentist because of pain, cost surprises or timing. We designed the
            whole visit around removing those three worries.
          </p>
          <a
            href="#booking"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-ink hover:bg-amber-400"
          >
            See available slots <Icon name="arrow" className="size-5" />
          </a>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r) => (
            <li key={r.title} className="rounded-[var(--radius-card)] bg-white/5 p-6 ring-1 ring-white/10">
              <span className="grid size-10 place-items-center rounded-full bg-brand text-white">
                <Icon name="check" className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-slate-300">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
