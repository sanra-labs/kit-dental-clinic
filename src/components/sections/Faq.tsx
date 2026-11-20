import { faqHeading, faqs } from "@/content/site";
import { SectionHeading } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="faq-title" {...faqHeading} />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-line">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group py-2">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 rounded-[var(--radius-card)] px-3 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {question}
                <Icon
                  name="chevron"
                  className="size-5 shrink-0 text-brand motion-safe:transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="px-3 pb-5 leading-relaxed text-muted">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
