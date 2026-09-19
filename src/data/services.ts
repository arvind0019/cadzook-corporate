export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  bulletPoints: string[];
  icon: string;
  badge: string;
}

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "facility-management",
    number: "01",
    title: "Housekeeping & Facility Management Staff",
    shortDesc: "Trained housekeeping professionals, mechanized cleaning specialists, and pantry crews maintaining pristine commercial hygiene standards.",
    bulletPoints: [
      "Deep cleaning & mechanized floor maintenance",
      "Corporate pantry & hospitality attendants",
      "Restroom sanitation & waste segregation systems",
      "Daily hygiene audit & consumption tracking"
    ],
    icon: "Sparkles",
    badge: "Facility Care"
  },
  {
    id: "office-admin-support",
    number: "02",
    title: "Office Support & Admin Staff",
    shortDesc: "Vetted administrative executives, front-desk receptionists, data entry operators, and office runners to ensure friction-free workplace operations.",
    bulletPoints: [
      "Front-desk & guest concierge coordinators",
      "MIS, billing & computerized documentation staff",
      "Office assistants, dispatchers & runners",
      "Meeting room & executive support personnel"
    ],
    icon: "Briefcase",
    badge: "Corporate Support"
  },
  {
    id: "security-services",
    number: "03",
    title: "Security Services",
    shortDesc: "Disciplined, background-verified security guards, gatekeepers, and surveillance monitoring teams protecting assets and premises 24/7.",
    bulletPoints: [
      "Uniformed security guards & patrol marshals",
      "Visitor gate entry & material in-out logging",
      "CCTV & electronic perimeter surveillance",
      "Emergency response & incident reporting SOPs"
    ],
    icon: "ShieldCheck",
    badge: "Asset Protection"
  },
  {
    id: "skilled-semi-skilled",
    number: "04",
    title: "Skilled & Semi-Skilled Manpower",
    shortDesc: "Certified electricians, plumbers, HVAC technicians, machine operators, and carpentry specialists for demanding operational requirements.",
    bulletPoints: [
      "Licensed electricians & DG set operators",
      "HVAC, plumbing & mechanical maintenance staff",
      "Carpenters, painters & multi-utility technicians",
      "Skill-verified trade personnel ready for deployment"
    ],
    icon: "Wrench",
    badge: "Technical Trades"
  },
  {
    id: "industrial-workforce",
    number: "05",
    title: "Industrial & Factory Workforce",
    shortDesc: "Robust shop-floor manpower, assembly line operators, packaging crews, and material handlers tailored for manufacturing environments.",
    bulletPoints: [
      "Assembly line & batch production teams",
      "Packaging, labeling & dispatch crews",
      "Heavy material handlers & loading personnel",
      "Strict compliance with 5S & safety protocols"
    ],
    icon: "Factory",
    badge: "Plant Operations"
  },
  {
    id: "contract-staffing",
    number: "06",
    title: "Contract Staffing & Temporary Staffing",
    shortDesc: "Agile, scalable manpower solutions for seasonal surges, project-based surges, and turnkey contract workforce deployments nationwide.",
    bulletPoints: [
      "Peak season & flash surge ramp-up capabilities",
      "Fixed-term contract compliance management",
      "End-to-end recruitment, onboarding & offboarding",
      "Zero liability transition & replacement backup"
    ],
    icon: "Users",
    badge: "Flexible Scale"
  },
  {
    id: "payroll-compliance",
    number: "07",
    title: "Payroll & Compliance Management",
    shortDesc: "End-to-end statutory compliance governance, automated wage disbursement, EPF/ESIC administration, and audit-ready documentation.",
    bulletPoints: [
      "Automated biometric attendance & wage computation",
      "Timely direct bank transfers (NEFT/RTGS/IMPS)",
      "EPF, ESIC, PT, LWF & Bonus filing challans",
      "Monthly 100% transparent audit pack for clients"
    ],
    icon: "FileCheck2",
    badge: "Zero Liability"
  }
];
