import { site, services } from "@/content/site";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { ConceptBar, Footer, WhatsAppFab } from "@/components/sections/Footer";
import { BookingPlaceholder } from "@/components/sections/BookingPlaceholder";

const jsonLd = {
  "@context": "https://schema.org",
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
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        <WhyUs />
        {/* Upcoming sections (see AGENTS.md task list): Doctors, ClinicTour, Pricing, Faq, Booking, Location */}
        <BookingPlaceholder />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
