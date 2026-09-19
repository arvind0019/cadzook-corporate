export interface LocationPin {
  id: string;
  name: string;
  role: string;
  isHQ?: boolean;
  x: number; // SVG coordinate percentage
  y: number; // SVG coordinate percentage
  state: string;
  details: string;
}

export const COMPANY_INFO = {
  name: "Cadzook Private Limited",
  brandName: "CADZOOK",
  tagline: "Your Trusted Workforce Partner",
  business: "Manpower Outsourcing Services",
  coverage: "PAN India Operations",
  corePositioning: "100% Compliance | Accuracy | Transparency",
  
  about: {
    eyebrow: "ABOUT CADZOOK",
    heading: "About Us",
    description: "We are a leading manpower outsourcing and workforce management company providing end-to-end staffing solutions across India. With a strong commitment to compliance, accuracy, and transparency, we help organizations focus on their core business while we manage their workforce efficiently and ethically.",
  },

  vision: {
    title: "Our Vision",
    statement: "To become India’s most trusted manpower outsourcing partner through service excellence, compliance integrity, and long-term partnerships.",
  },

  mission: {
    title: "Our Mission",
    statement: "To deliver reliable, compliant, and scalable manpower solutions while ensuring employee welfare, client satisfaction, and sustainable business growth.",
  },

  contact: {
    email: "radheshyam@cadzook.com",
    phone: "+91 9044290823",
    phoneDisplay: "+91 90442 90823",
    website: "www.cadzook.com",
    websiteUrl: "https://www.cadzook.com",
    headquarters: "Noida, Uttar Pradesh, India",
    workingHours: "Mon - Sat: 9:00 AM - 6:30 PM",
  },

  locations: [
    {
      id: "noida",
      name: "Noida",
      role: "Corporate Headquarter",
      isHQ: true,
      x: 35.8,
      y: 28.5,
      state: "Uttar Pradesh",
      details: "Central Command & National Compliance Operations Center",
    },
    {
      id: "delhi",
      name: "Delhi",
      role: "Regional Hub",
      isHQ: false,
      x: 33.5,
      y: 27.2,
      state: "Delhi NCR",
      details: "Northern Zone Workforce Deployment & Client Liaison",
    },
    {
      id: "kolkata",
      name: "Kolkata",
      role: "Regional Hub",
      isHQ: false,
      x: 73.2,
      y: 47.8,
      state: "West Bengal",
      details: "Eastern Zone Operations & Industrial Staffing Hub",
    },
    {
      id: "bhubaneswar",
      name: "Bhubaneswar",
      role: "Regional Hub",
      isHQ: false,
      x: 68.5,
      y: 56.4,
      state: "Odisha",
      details: "Mining, Heavy Industry & Facility Management Wing",
    },
    {
      id: "mumbai",
      name: "Mumbai",
      role: "Regional Hub",
      isHQ: false,
      x: 21.0,
      y: 57.5,
      state: "Maharashtra",
      details: "Western Zone Corporate & Commercial Staffing Operations",
    },
    {
      id: "bangalore",
      name: "Bangalore",
      role: "Regional Hub",
      isHQ: false,
      x: 38.2,
      y: 78.5,
      state: "Karnataka",
      details: "Southern Technology Parks & Logistics Workforce Base",
    },
    {
      id: "chennai",
      name: "Chennai",
      role: "Regional Hub",
      isHQ: false,
      x: 48.5,
      y: 80.8,
      state: "Tamil Nadu",
      details: "Automotive, Manufacturing & Facility Support Network",
    },
  ] as LocationPin[],

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Compliance", href: "#compliance" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ]
};
