import { services } from "@/content/site";
import { SectionHeading } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="Everything your smile needs"
          text="From a routine clean to a full smile makeover, planned around you and priced up front."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 transition-shadow hover:shadow-lg"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand-dark transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-muted">{s.text}</p>
              <p className="mt-5 text-sm text-muted">
                From <span className="text-base font-bold text-ink">{s.from}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
