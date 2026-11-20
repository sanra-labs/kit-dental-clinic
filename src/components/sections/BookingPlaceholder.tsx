import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

// Temporary: replaced by the full Booking form section (task: booking-form).
export function BookingPlaceholder() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl rounded-[var(--radius-card)] bg-brand px-6 py-14 text-center text-white sm:px-12">
        <h2 id="booking-title" className="font-display text-3xl font-bold sm:text-4xl">
          Book your first visit for {site.offer.price}
        </h2>
        <p className="mt-3 text-lg text-brand-soft">{site.offer.text}. Online booking opens soon.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={site.contact.phoneHref}>
            <Icon name="phone" className="size-5" /> Call {site.contact.phone}
          </Button>
          <Button href={site.contact.whatsappHref} variant="ghost" external>
            <Icon name="whatsapp" className="size-5 text-brand" /> WhatsApp us
          </Button>
        </div>
      </div>
    </section>
  );
}
