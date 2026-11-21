"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

// Floating WhatsApp button on mobile. Hides while the booking form is on screen
// so it never covers form fields.
export function WhatsAppFab() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const booking = document.getElementById("booking");
    if (!booking) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(booking);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      className={`fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 md:hidden ${
        hidden ? "pointer-events-none translate-y-24 opacity-0" : ""
      }`}
    >
      <Icon name="whatsapp" className="size-7" />
    </a>
  );
}
