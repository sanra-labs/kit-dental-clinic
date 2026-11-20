// All brand copy lives here so the kit can be rebranded without touching components.
// This is a CONCEPT project: every name, number and address below is fictional.

export const site = {
  name: "The Smile Studio",
  shortName: "Smile Studio",
  tagline: "Gentle care. Confident smiles.",
  description:
    "A modern dental studio for check-ups, aligners, implants and family dentistry. Book online in under two minutes.",
  offer: {
    label: "New patient offer",
    text: "First consultation + digital X-ray",
    price: "₹499",
  },
  contact: {
    phone: "+91 00000 00000", // placeholder – concept project
    phoneHref: "tel:+910000000000",
    whatsappHref: "https://wa.me/910000000000", // placeholder number
    email: "hello@example.com",
    address: "12 Sample Street, Your City",
    hours: [
      { days: "Mon – Sat", time: "9:00 am – 8:30 pm" },
      { days: "Sunday", time: "10:00 am – 2:00 pm" },
    ],
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Why us", href: "#why-us" },
    { label: "Doctors", href: "#doctors" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  trust: ["Open 7 days", "Digital X-ray", "No-cost EMI", "Evening slots"],
  credit: {
    text: "Concept project by Sanra Labs",
    href: "https://sanralabs.com",
  },
} as const;

export type ServiceIcon =
  | "checkup"
  | "rootCanal"
  | "aligners"
  | "implant"
  | "whitening"
  | "kids";

export const services: {
  title: string;
  text: string;
  from: string;
  icon: ServiceIcon;
}[] = [
  {
    title: "Check-up & cleaning",
    text: "Full exam, scaling and polishing with a clear plan for what comes next.",
    from: "₹499",
    icon: "checkup",
  },
  {
    title: "Root canal",
    text: "Single-visit rotary root canal with modern anaesthesia. Pain-managed throughout.",
    from: "₹4,500",
    icon: "rootCanal",
  },
  {
    title: "Braces & aligners",
    text: "Metal, ceramic or clear aligners, planned with a 3D scan of your smile.",
    from: "₹35,000",
    icon: "aligners",
  },
  {
    title: "Dental implants",
    text: "Permanent replacement for missing teeth, placed and restored in-house.",
    from: "₹25,000",
    icon: "implant",
  },
  {
    title: "Teeth whitening",
    text: "In-clinic whitening that lifts several shades in a single 60-minute visit.",
    from: "₹6,000",
    icon: "whitening",
  },
  {
    title: "Kids dentistry",
    text: "Friendly first visits, sealants and fluoride care for children of all ages.",
    from: "₹399",
    icon: "kids",
  },
];

export const reasons = [
  {
    title: "Gentle, pain-managed care",
    text: "Topical numbing, computer-guided anaesthesia and time to talk before anything starts.",
  },
  {
    title: "Hospital-grade sterilisation",
    text: "Class B autoclave, sealed instrument pouches opened in front of you.",
  },
  {
    title: "Transparent pricing",
    text: "A written estimate before treatment. No surprises on the bill.",
  },
  {
    title: "Slots that fit your day",
    text: "Early mornings, evenings until 8:30 pm and Sunday appointments.",
  },
];
