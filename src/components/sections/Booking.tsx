import { bookingCopy, site } from "@/content/site";
import { Button, SectionHeading } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BookingForm } from "@/components/BookingForm";

export function Booking() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="booking-title"
          eyebrow={bookingCopy.eyebrow}
          title={bookingCopy.title}
        />
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-[var(--radius-card)] bg-brand p-6 text-surface sm:p-8">
            <p className="font-semibold text-brand-soft">{site.offer.label}</p>
            <p className="mt-3 font-display text-3xl font-bold">{site.offer.price}</p>
            <p className="mt-3 text-lg">{site.offer.text}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Button href={site.contact.phoneHref}>
                <Icon name="phone" className="size-5" />
                {bookingCopy.call} {site.contact.phone}
              </Button>
              <Button href={site.contact.whatsappHref} variant="ghost" external>
                <Icon name="whatsapp" className="size-5 text-brand" />
                {bookingCopy.whatsapp}
              </Button>
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
