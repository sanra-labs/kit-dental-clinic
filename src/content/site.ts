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
    { label: "Pricing", href: "#pricing" },
    { label: "Why us", href: "#why-us" },
    { label: "Doctors", href: "#doctors" },
    { label: "Clinic", href: "#tour" },
    { label: "FAQ", href: "#faq" },
  ],
  trust: ["Open 7 days", "Digital X-ray", "No-cost EMI", "Evening slots"],
  credit: {
    text: "Concept project by Sanra Labs",
    href: "https://sanralabs.com",
  },
} as const;

export type ServiceIcon = "checkup" | "rootCanal" | "aligners" | "implant" | "whitening" | "kids";

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

export const faqHeading = { eyebrow: "FAQ", title: "Questions before your visit" };

export const faqs = [
  {
    question: "Does treatment hurt?",
    answer:
      "We use numbing and pain-managed techniques, explain each step and pause whenever you need a break.",
  },
  {
    question: "How much will it cost?",
    answer:
      "Starting prices are listed on this site. You will receive a written estimate after consultation, before treatment begins.",
  },
  {
    question: "Do you offer EMI?",
    answer:
      "No-cost EMI options are available for eligible treatments. Ask about eligibility and terms during your consultation.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. We offer gentle first visits, check-ups and preventive care for children of all ages.",
  },
  {
    question: "What if I have a dental emergency?",
    answer:
      "Call during opening hours to ask about an urgent appointment. For a serious injury or difficulty breathing, seek emergency care immediately.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Coverage depends on your policy. Check with your provider before treatment; we can help with treatment estimates and invoices.",
  },
];

export const pricingCopy = {
  eyebrow: "Pricing",
  title: "Clear prices, thoughtful care",
  book: "Book",
  from: "From",
  footnote: "Final price confirmed in a written estimate after consultation.",
};

export const pricing = [
  {
    title: "Preventive",
    items: [
      { name: services[0].title, from: services[0].from },
      { name: services[5].title, from: services[5].from },
      { name: "Fluoride care", from: "₹600" },
    ],
  },
  {
    title: "Restorative",
    items: [
      { name: "Tooth-coloured filling", from: "₹1,200" },
      { name: services[1].title, from: services[1].from },
      { name: services[3].title, from: services[3].from },
    ],
  },
  {
    title: "Cosmetic & orthodontic",
    items: [
      { name: services[4].title, from: services[4].from },
      { name: services[2].title, from: services[2].from },
      { name: "Dental veneers", from: "₹8,000" },
    ],
  },
];

export const bookingCopy = {
  eyebrow: "Booking",
  title: "Book your first visit",
  call: "Call",
  whatsapp: "WhatsApp us",
  demo: "Concept demo only. No appointment is sent or booked; please use sample details.",
  labels: {
    name: "Full name",
    phone: "Phone",
    service: "Service",
    date: "Preferred date",
    slot: "Time slot",
    notes: "Notes (optional)",
  },
  phoneHint: "Enter a 10-digit Indian mobile number, without +91.",
  chooseService: "Choose a service",
  slots: ["Morning", "Afternoon", "Evening"],
  submit: "Request an appointment",
  submitting: "Sending request…",
  success: "Request received – we'll call you to confirm",
  errors: {
    name: "Enter your full name.",
    phone: "Enter 10 digits starting with 6, 7, 8 or 9.",
    service: "Choose a service from the list.",
    date: "Choose a valid date today or later.",
    slot: "Choose a time slot.",
  },
};

export const doctorsCopy = {
  eyebrow: "Our doctors",
  title: "Meet the people behind your care",
  disclaimer: "Doctors shown are fictional (concept project). Photos are AI-generated.",
};

type Doctor = {
  name: string;
  initials: string;
  qualifications: string;
  specialty: string;
  experience: string;
  bio: string;
  tags: string[];
  // Use a local, AI-generated WebP/AVIF portrait when available.
  image?: { src: string; alt: string; width: number; height: number };
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Meera Rao",
    initials: "MR",
    qualifications: "BDS, MDS",
    specialty: "Orthodontics",
    experience: "9 years",
    bio: "Meera helps patients explore braces and clear aligners with simple explanations and a treatment plan built around their daily routine.",
    tags: ["Clear aligners", "Braces", "Smile planning"],
    image: {
      src: "/images/doctor-meera.webp",
      alt: "Dentist in mask and loupes examining a patient",
      width: 900,
      height: 900,
    },
  },
  {
    name: "Dr. Arjun Menon",
    initials: "AM",
    qualifications: "BDS",
    specialty: "Implants & general dentistry",
    experience: "7 years",
    bio: "Arjun focuses on everyday dental care and restoring missing teeth, taking time to explain each step and help patients feel at ease.",
    tags: ["Dental implants", "Preventive care", "Gentle dentistry"],
    image: {
      src: "/images/doctor-arjun.webp",
      alt: "Dentist's gloved hands holding a clear aligner",
      width: 900,
      height: 900,
    },
  },
];

export const tourCopy = {
  eyebrow: "Clinic tour",
  title: "A calm space, built around you",
  text: "Take a look inside before your first visit.",
};

export const tour = [
  {
    src: "/images/tour-reception.webp",
    alt: "Bright reception with armchairs, plants and a wooden front desk",
    caption: "Reception & waiting lounge",
  },
  {
    src: "/images/tour-treatment.webp",
    alt: "Treatment room with a teal dental chair and a screen showing an X-ray",
    caption: "Treatment room with digital X-ray",
  },
  {
    src: "/images/tour-sterilisation.webp",
    alt: "Autoclave and sealed instrument pouches on a clean counter",
    caption: "Sterilisation area",
  },
  {
    src: "/images/tour-kids.webp",
    alt: "Kids corner with small chairs, books and a play mat",
    caption: "Kids corner",
  },
] as const;
