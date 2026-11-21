import { site } from "@/content/site";
import { Button, SectionHeading } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

// Illustrative map only – the clinic is fictional, so no real map tiles or coordinates.
function IllustratedMap() {
  return (
    <svg
      viewBox="0 0 600 400"
      role="img"
      aria-label="Illustrative map showing the clinic near a park and main road"
      className="h-full w-full"
    >
      <rect width="600" height="400" fill="var(--color-surface)" />
      <rect x="40" y="40" width="160" height="110" rx="16" fill="var(--color-brand-soft)" />
      <rect x="400" y="250" width="160" height="110" rx="16" fill="var(--color-brand-soft)" />
      <g stroke="#ffffff" strokeWidth="28" strokeLinecap="round" fill="none">
        <path d="M0 200 H600" />
        <path d="M300 0 V400" />
        <path d="M0 330 C150 300 200 260 300 200" />
      </g>
      <g stroke="var(--color-line)" strokeWidth="2" fill="none" strokeDasharray="8 8">
        <path d="M0 200 H600" />
        <path d="M300 0 V400" />
      </g>
      <g fill="#ffffff" stroke="var(--color-line)">
        <rect x="230" y="70" width="50" height="80" rx="6" />
        <rect x="330" y="80" width="70" height="60" rx="6" />
        <rect x="70" y="240" width="80" height="50" rx="6" />
        <rect x="330" y="240" width="50" height="70" rx="6" />
      </g>
      <text x="120" y="100" textAnchor="middle" fontSize="16" fill="var(--color-brand-dark)">
        Park
      </text>
      <text x="480" y="310" textAnchor="middle" fontSize="16" fill="var(--color-brand-dark)">
        Market
      </text>
      <g transform="translate(360 150)">
        <circle r="34" fill="var(--color-brand)" opacity="0.15" />
        <path
          d="M0 18 C-14 2 -18 -6 -18 -14 A18 18 0 0 1 18 -14 C18 -6 14 2 0 18Z"
          fill="var(--color-brand)"
        />
        <circle cy="-14" r="6" fill="#ffffff" />
      </g>
    </svg>
  );
}

export function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="location-title"
          eyebrow="Visit us"
          title="Easy to find, easy to park"
          text="Ground-floor clinic with step-free access and parking right outside."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="aspect-[3/2] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-line">
            <IllustratedMap />
          </div>
          <div className="rounded-[var(--radius-card)] border border-line p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold">{site.name}</h3>
            <address className="mt-2 not-italic text-muted">{site.contact.address}</address>
            <ul className="mt-5 space-y-2">
              {site.contact.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 border-b border-line pb-2">
                  <span className="font-medium">{h.days}</span>
                  <span className="text-muted">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Button href={site.contact.phoneHref} variant="secondary">
                <Icon name="phone" className="size-5" /> Call the clinic
              </Button>
              <Button href="#booking" variant="ghost">
                Book a visit
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted">
              Map is illustrative – this is a concept clinic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
