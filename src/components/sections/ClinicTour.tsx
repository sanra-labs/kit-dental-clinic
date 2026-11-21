import { tour, tourCopy } from "@/content/site";
import { SectionHeading } from "@/components/ui/Button";
import { TourGallery } from "@/components/TourGallery";

export function ClinicTour() {
  return (
    <section id="tour" aria-labelledby="tour-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="tour-title"
          eyebrow={tourCopy.eyebrow}
          title={tourCopy.title}
          text={tourCopy.text}
        />
        <TourGallery images={tour} />
      </div>
    </section>
  );
}
