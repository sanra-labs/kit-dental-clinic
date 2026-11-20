import type { ServiceIcon } from "@/content/site";

type IconName =
  ServiceIcon | "check" | "whatsapp" | "phone" | "menu" | "close" | "arrow" | "chevron";

const paths: Record<IconName, React.ReactNode> = {
  checkup: (
    <>
      <path d="M12 21c-1.5 0-2-3-2.5-5S8 13 7 13c-2 0-3-2-3-5 0-3 2-5 4.5-5 1.3 0 2.2.6 3.5.6S14.2 3 15.5 3C18 3 20 5 20 8c0 3-1 5-3 5-1 0-1.5 1-2 3s-1 5-2.5 5Z" />
      <path d="m9.5 8 1.8 1.8L14.5 6.5" />
    </>
  ),
  rootCanal: (
    <>
      <path d="M12 21c-1.5 0-2-3-2.5-5S8 13 7 13c-2 0-3-2-3-5 0-3 2-5 4.5-5 1.3 0 2.2.6 3.5.6S14.2 3 15.5 3C18 3 20 5 20 8c0 3-1 5-3 5-1 0-1.5 1-2 3s-1 5-2.5 5Z" />
      <path d="M12 7v9" />
    </>
  ),
  aligners: (
    <>
      <path d="M3 10c3-3 15-3 18 0" />
      <path d="M4 10v3c0 2 3 3 8 3s8-1 8-3v-3" />
      <path d="M8 10.5v4M12 10v5.5M16 10.5v4" />
    </>
  ),
  implant: (
    <>
      <path d="M7 4h10l-1 5H8L7 4Z" />
      <path d="M9 9h6M9.5 12h5M10 15h4M10.5 18h3M12 18v3" />
    </>
  ),
  whitening: (
    <>
      <path d="M12 21c-1.5 0-2-3-2.5-5S8 13 7 13c-2 0-3-2-3-5 0-3 2-5 4.5-5 1.3 0 2.2.6 3.5.6S14.2 3 15.5 3C18 3 20 5 20 8c0 3-1 5-3 5-1 0-1.5 1-2 3s-1 5-2.5 5Z" />
      <path d="M17 1.5v3M15.5 3h3" />
    </>
  ),
  kids: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14c1 1.5 2.2 2 3.5 2s2.5-.5 3.5-2" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  phone: (
    <path d="M5 3h3.5l1.5 4.5-2 1.5a12 12 0 0 0 7 7l1.5-2L21 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3l-4.5 1.5Z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a5 5 0 0 1-2.3-2.3l.8-1-1-2L9 8.5Z" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
};

export function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
