import { pricing, pricingCopy, site } from "@/content/site";
import { Button, SectionHeading } from "@/components/ui/Button";

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="pricing-title"
          eyebrow={pricingCopy.eyebrow}
          title={pricingCopy.title}
        />
        <div className="mt-10 flex flex-col items-start gap-6 rounded-[var(--radius-card)] bg-brand-soft p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-brand-dark">{site.offer.label}</p>
            <p className="mt-2 text-lg text-ink">
              {site.offer.text} <strong>{site.offer.price}</strong>
            </p>
          </div>
          <Button href="#booking">{pricingCopy.book}</Button>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {pricing.map((group) => (
            <article
              key={group.title}
              className="rounded-[var(--radius-card)] border border-line p-6"
            >
              <h3 className="font-display text-xl font-bold text-ink">{group.title}</h3>
              <ul className="mt-5 divide-y divide-line">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 py-4"
                  >
                    <span className="text-ink">{item.name}</span>
                    <span className="whitespace-nowrap text-sm text-muted">
                      {pricingCopy.from} <strong className="text-ink">{item.from}</strong>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">{pricingCopy.footnote}</p>
      </div>
    </section>
  );
}
