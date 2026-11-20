import { site, services, faqs } from "@/content/site";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Faq } from "@/components/sections/Faq";
import { Pricing } from "@/components/sections/Pricing";
import { Doctors } from "@/components/sections/Doctors";
import { WhyUs } from "@/components/sections/WhyUs";
import { ConceptBar, Footer, WhatsAppFab } from "@/components/sections/Footer";
import { Booking } from "@/components/sections/Booking";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  telephone: site.contact.phone,
  email: site.contact.email,
  address: { "@type": "PostalAddress", streetAddress: site.contact.address },
  openingHours: ["Mo-Sa 09:00-20:30", "Su 10:00-14:00"],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title },
  })),
  }, {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question", name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <ConceptBar />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Pricing />
        <WhyUs />
        <Doctors />
        <Faq />
        {/* Upcoming sections (see AGENTS.md task list): ClinicTour, Location */}
        <Booking />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
