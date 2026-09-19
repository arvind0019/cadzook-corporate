export interface IndustryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  keyWorkforce: string[];
  icon: string;
  imageUrl: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "corporate-it-parks",
    title: "Corporate Offices & IT Parks",
    category: "Commercial Real Estate",
    description: "High-standard workplace support, admin staffing, executive housekeeping, and concierge security for premier corporate towers and technology campuses.",
    keyWorkforce: ["Pantry Attendants", "Admin Assistants", "Receptionists", "Housekeeping Crews"],
    icon: "Building2",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "manufacturing-industrial",
    title: "Manufacturing & Industrial Units",
    category: "Heavy & Light Industry",
    description: "Reliable shop-floor teams, production helpers, machine operators, and certified maintenance technicians adhering to strict plant safety standards.",
    keyWorkforce: ["Machine Operators", "Assembly Helpers", "Electricians", "Safety Marshals"],
    icon: "Factory",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "warehousing-logistics",
    title: "Warehousing & Logistics",
    category: "Supply Chain Hubs",
    description: "Scalable fulfillment crews, pickers, packers, forklift operators, and inventory loaders capable of managing high-throughput supply chain operations.",
    keyWorkforce: ["Pick & Pack Teams", "Material Handlers", "Dispatch Crews", "Supervisors"],
    icon: "Truck",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "healthcare-hospitals",
    title: "Healthcare & Hospitals",
    category: "Medical Facilities",
    description: "Specialized hospital ward attendants, sterile zone sanitation staff, patient mobility assistants, and round-the-clock facility support personnel.",
    keyWorkforce: ["Ward Boys & Ayahs", "Sterile Sanitation Staff", "Patient Helpers", "Gate Security"],
    icon: "Cross",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "retail-commercial",
    title: "Retail & Commercial Establishments",
    category: "Retail & Malls",
    description: "Customer-friendly store assistants, stock replenishment crews, billing cashiers, and mall security maintaining seamless retail experiences.",
    keyWorkforce: ["Store Helpers", "Stock Replenishers", "Housekeeping Staff", "Loss Prevention Guards"],
    icon: "ShoppingBag",
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hospitality-real-estate",
    title: "Hospitality & Real Estate",
    category: "Hospitality & Residential",
    description: "Comprehensive facility upkeep, clubhouse maintenance, front-desk greeting, and residential estate security for premier properties.",
    keyWorkforce: ["Concierge Staff", "Facility Caretakers", "Gardening & Upkeep", "Perimeter Guards"],
    icon: "Hotel",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  }
];
