import Image from "next/image";
import { doctors, doctorsCopy } from "@/content/site";
import { SectionHeading } from "@/components/ui/Button";

export function Doctors() {
  return (
    <section id="doctors" aria-labelledby="doctors-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="doctors-title"
          eyebrow={doctorsCopy.eyebrow}
          title={doctorsCopy.title}
        />
        <p className="mt-4 text-center text-sm text-muted">{doctorsCopy.disclaimer}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="rounded-[var(--radius-card)] border border-line p-6 sm:p-8"
            >
              {doctor.image ? (
                <Image
                  src={doctor.image.src}
                  alt={doctor.image.alt}
                  width={doctor.image.width}
                  height={doctor.image.height}
                  sizes="96px"
                  className="size-24 rounded-full object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex size-24 items-center justify-center rounded-full bg-brand-soft font-display text-3xl font-bold text-brand-dark"
                >
                  {doctor.initials}
                </div>
              )}
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">{doctor.name}</h3>
              <p className="mt-2 font-semibold text-brand-dark">
                {doctor.qualifications} – {doctor.specialty}
              </p>
              <p className="mt-2 text-sm text-muted">{doctor.experience}</p>
              <p className="mt-4 leading-relaxed text-muted">{doctor.bio}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {doctor.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-brand-soft px-3 py-2 text-sm font-medium text-brand-dark"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
