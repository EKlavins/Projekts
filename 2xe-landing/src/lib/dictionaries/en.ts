import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    htmlLang: "en",
    title: "2XE: plastic and metal part manufacturing, 3D printing and scanning in Riga",
    description:
      "Full-cycle technical 3D printing, part design, 3D scanning and restoration. Plastic and metal, print temperatures up to 390 °C. Based in Riga, shipping across Latvia and Europe.",
    ogAlt: "2XE: technical 3D printing and part manufacturing",
  },

  nav: {
    label: "Main navigation",
    services: "Services",
    work: "Work",
    materials: "Materials",
    process: "Process",
    capabilities: "Capabilities",
    contact: "Contact",
    cta: "Request a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    switchLanguage: "Pārslēgt uz latviešu valodu",
  },

  hero: {
    eyebrow: "Shipping across Latvia and Europe",
    titleLead: "From an idea to a",
    titleAccent: "finished part",
    subtitle:
      "Full-cycle technical 3D printing, part design and 3D scanning. We manufacture plastic and metal parts, from a sketch on paper or a broken original through to a finished product.",
    primaryCta: "Request a quote",
    secondaryCta: "See materials",
    specs: [
      { value: "up to 390 °C", label: "Print temperature" },
      { value: "0.2-0.8 mm", label: "Nozzle range" },
      { value: "STL · STEP · IGES", label: "File formats" },
    ],
    figureAlt:
      "Technical drawing of a 3D printed part with dimension lines and layer structure",
  },

  trust: {
    heading: "Industries we build parts for",
    industries: [
      { label: "Automotive & moto", icon: "car" },
      { label: "Home appliances", icon: "appliance" },
      { label: "Industrial machinery", icon: "factory" },
      { label: "Electronics", icon: "chip" },
      { label: "Hobby & modelling", icon: "hobby" },
      { label: "Manufacturing", icon: "boxes" },
    ],
    stats: [
      {
        numeric: 390,
        suffix: " °C",
        label: "Maximum print temperature",
        note: "Puts PEEK and PEI within reach",
      },
      {
        numeric: 14,
        suffix: "",
        label: "Material types",
        note: "From PLA to carbon fibre and metal",
      },
      {
        numeric: 0.2,
        decimals: 1,
        suffix: " mm",
        label: "Smallest nozzle",
        note: "For maximum detail",
      },
      {
        text: "LV + EU",
        label: "Delivery area",
        note: "Parcel lockers and courier",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "The whole route from concept to the part in your hand",
    subtitle:
      "It doesn't matter which stage you're at: an idea in your head or a finished drawing. We pick the project up wherever it is.",
    items: [
      {
        icon: "cycle",
        title: "Full-cycle development",
        body: "We take on any concept, whether you have only an idea, rough dimensions, a sketch on paper or a finished technical drawing.",
      },
      {
        icon: "scan",
        title: "3D scanning & copying",
        body: "Complex or broken parts get scanned and rebuilt as a precise 3D model, ready for production.",
      },
      {
        icon: "restore",
        title: "Restoration & replacement",
        body: "We restore broken, worn or discontinued plastic and metal parts, including ones the original manufacturer no longer sells.",
      },
      {
        icon: "assembly",
        title: "Assemblies & mechanisms",
        body: "Mounts, housings, adapters, brackets and high-load gears built to survive real service conditions.",
      },
      {
        icon: "metal",
        title: "Metal part manufacturing",
        body: "When plastic isn't strong enough, we produce the part in aluminium, steel or another metal from the very same 3D model.",
      },
      {
        icon: "tune",
        title: "Model optimisation",
        body: "We prepare and improve the model before printing. Wall thickness and infill are tuned to the real loads, not to default slicer settings.",
      },
    ],
  },

  why: {
    eyebrow: "Why 2XE",
    heading: "Technical printing, not souvenir printing",
    subtitle:
      "The difference between a part that looks right and a part that works is the material and the preparation. We take both seriously.",
    items: [
      {
        title: "Industrial temperature, not hobby grade",
        body: "A print temperature of up to 390 °C means PEEK, PEI and carbon-fibre composites that a standard printer physically cannot process.",
      },
      {
        title: "No file? No problem",
        body: "We scan the existing part or model it from scratch off a sketch, a photo or dimensions. You don't need to be an engineer.",
      },
      {
        title: "Engineered for load, not for the printer",
        body: "Wall thickness, infill and layer orientation are matched to the real loads and operating conditions, never left on a default profile.",
      },
      {
        title: "Plastic and metal under one roof",
        body: "One 3D model, two production routes. If plastic won't hold, the same part goes to metal without a redesign.",
      },
    ],
  },

  work: {
    eyebrow: "Work",
    heading: "Real projects from our bench",
    subtitle:
      "Each of these models started from an existing part, a sketch or a set of dimensions and ended as a finished part ready to fit.",
    items: {
      "vent-insert": {
        title: "Louvred vent insert",
        body: "The original part was scanned and new louvres modelled straight onto the scanned surface, so the replacement follows the original form exactly.",
        tags: ["3D scanning", "Surface modelling"],
        alt: "3D model of a louvred vent insert with a scanned outer surface and modelled louvres",
      },
      "duct-elbow": {
        title: "Mitsubishi Lancer Evolution VI air duct",
        body: "The original part was 3D scanned and the model redrawn from that scan, giving a precise, production-ready air duct.",
        tags: ["3D scanning", "Automotive part"],
        alt: "3D model of a Mitsubishi Lancer Evolution VI air duct, redrawn from a scan of the original part",
      },
      "surface-model": {
        title: "Reconstruction from a scan",
        body: "The model is built directly on the scan using reference planes and cross-sections, so the new part mates with the existing assembly.",
        tags: ["Reconstruction", "3D scanning"],
        alt: "3D model of a part shown with reference planes and cross-section sketches",
      },
      "cad-session": {
        title: "Surface modelling in CAD",
        body: "Every part is built from surfaces and checked before printing, not simply carved out of a file someone sent over.",
        tags: ["CAD", "Preparation"],
        alt: "CAD application view showing a part's surface model and its feature tree",
      },
    },
  },

  materials: {
    eyebrow: "Materials",
    heading: "A material for every job",
    subtitle:
      "Industrial print temperatures let us work with standard plastics, high-strength composites and metal alike.",
    groups: [
      {
        name: "Standard plastics",
        tags: ["PLA", "PETG"],
        body: "Ideal for prototypes, housings and standard parts where form and cost matter most.",
      },
      {
        name: "Engineering plastics",
        tags: ["ABS", "ASA", "Nylon (PA)", "PC"],
        body: "UV and temperature resistant parts for vehicle exteriors and interiors. Polyamide and polycarbonate are exceptionally impact resistant, which makes them ideal for plain bearings and gears.",
      },
      {
        name: "Composites & high temperature",
        tags: ["PA+CF", "PETG+CF", "PEEK", "PEI (Ultem)"],
        body: "Carbon-fibre reinforced materials for maximum structural stiffness. Super-plastics for extreme environments, chemical and thermal resistance.",
        featured: true,
      },
      {
        name: "Flexible materials",
        tags: ["TPU", "TPE"],
        body: "Rubber-like parts, seals, bushings and dampers across a range of shore hardnesses.",
      },
      {
        name: "Metal",
        tags: ["Aluminium", "Steel", "and more"],
        body: "When plastic isn't strong enough, we manufacture the part in metal from the designed or scanned 3D model.",
      },
    ],
    featuredBadge: "Highest strength",
  },

  process: {
    eyebrow: "Process",
    heading: "Four steps to a finished part",
    steps: [
      {
        title: "Consultation",
        body: "Send us the idea, a photo, a sketch, dimensions or the part itself. Together we work out the conditions it has to survive.",
      },
      {
        title: "Model or scan",
        body: "No file? We scan the existing part or model it from scratch. We work with STL, OBJ, STEP, IGES and other formats.",
      },
      {
        title: "Manufacturing",
        body: "We select the material and print parameters to match the loads. Where it's needed, we produce the part in metal.",
      },
      {
        title: "Delivery",
        body: "Shipped by parcel locker or courier across Latvia and Europe. Local pickup available in Riga.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Technical capabilities",
    heading: "The numbers you can plan your project around",
    subtitle:
      "No promises, just the technical parameters we work to every day.",
    specs: [
      {
        label: "Print temperature",
        value: "up to 390 °C",
        body: "An industrial hot end that puts PEEK, PEI and carbon-fibre composites within reach.",
      },
      {
        label: "Nozzle range",
        value: "0.2-0.8 mm",
        body: "0.2 mm for maximum detail, 0.8 mm for speed and for massive, high-strength parts.",
      },
      {
        label: "File formats",
        value: "STL · OBJ · STEP · IGES",
        body: "Other formats welcome too. If there's no file at all, we'll scan it or build it from scratch.",
      },
      {
        label: "Material range",
        value: "14 types",
        body: "From PLA and PETG through to PEEK, PEI, carbon-fibre composites and metal.",
      },
      {
        label: "Model preparation",
        value: "Included",
        body: "Infill, wall thickness and layer orientation are tuned before every single print.",
      },
      {
        label: "Delivery",
        value: "Latvia & EU",
        body: "Parcel lockers and courier. Local pickup available in Riga.",
      },
    ],
  },

  cta: {
    heading: "Send us the part, the sketch, or just the idea",
    subtitle:
      "We'll assess what's possible and tell you how to make it. Free of charge and with no obligation.",
    primary: "Send an email",
    secondary: "Call us",
    note: "We reply within 24 hours on business days.",
  },

  footer: {
    tagline:
      "Plastic and metal part manufacturing, modelling and 3D scanning. Full-cycle technical 3D printing in Riga.",
    columns: {
      services: "Services",
      company: "Company",
      contact: "Contact",
    },
    companyLinks: {
      process: "How it works",
      capabilities: "Technical capabilities",
      materials: "Materials",
    },
    location: "Riga, Latvia",
    delivery: "Shipping across Latvia and Europe",
    rights: "All rights reserved.",
    socialLabel: "2XE on social media",
  },
};
