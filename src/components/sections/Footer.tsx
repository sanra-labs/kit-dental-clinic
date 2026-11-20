import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export function ConceptBar() {
  return (
    <div className="bg-ink px-4 py-2 text-center text-xs text-slate-300">
      Concept project – {site.name} is a fictional clinic.{" "}
      <a href={site.credit.href} className="font-semibold text-white underline underline-offset-2">
        Built by Sanra Labs
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">{site.name}</p>
          <p className="mt-2 text-muted">{site.tagline}</p>
        </div>
        <div>
          <p className="font-semibold">Visit</p>
          <address className="mt-2 not-italic text-muted">{site.contact.address}</address>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {site.contact.hours.map((h) => (
              <li key={h.days}>
                <span className="font-medium text-ink">{h.days}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-2 space-y-2 text-muted">
            <li>
              <a href={site.contact.phoneHref} className="inline-flex items-center gap-2 hover:text-brand">
                <Icon name="phone" className="size-4" /> {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-brand">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-sm text-muted">
        © 2026 {site.name} (fictional) ·{" "}
        <a href={site.credit.href} className="font-semibold text-brand hover:underline">
          {site.credit.text}
        </a>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg md:hidden"
    >
      <Icon name="whatsapp" className="size-7" />
    </a>
  );
}
