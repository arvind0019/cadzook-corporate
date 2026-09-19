import type { HubInfo } from '../types/index.js';
import { AppError } from '../middleware/errorHandler.js';

export const NATIONAL_HUBS_DATA: HubInfo[] = [
  {
    id: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    isHQ: true,
    role: "National Corporate Headquarter",
    details: "Central Command & National Compliance Operations Center",
    coordinates: { x: 272, y: 236 },
    mobilizationSLA: "< 24 Hours",
    coverageAreas: ["Delhi NCR", "Noida", "Greater Noida", "Ghaziabad", "Meerut"],
  },
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    isHQ: false,
    role: "Northern Regional Hub",
    details: "Northern Zone Workforce Deployment & Client Liaison",
    coordinates: { x: 252, y: 228 },
    mobilizationSLA: "< 24 Hours",
    coverageAreas: ["Central Delhi", "South Delhi", "Okhla Industrial Area", "Gurgaon Corridor"],
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    isHQ: false,
    role: "Western Regional Hub",
    details: "Western Zone Corporate & Commercial Staffing Operations",
    coordinates: { x: 172, y: 432 },
    mobilizationSLA: "< 48 Hours",
    coverageAreas: ["MMR", "Navi Mumbai", "Thane", "Bhiwandi", "Pune Industrial Corridor"],
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    isHQ: false,
    role: "Eastern Regional Hub",
    details: "Eastern Zone Operations & Industrial Staffing Hub",
    coordinates: { x: 472, y: 342 },
    mobilizationSLA: "< 48 Hours",
    coverageAreas: ["Salt Lake Sector V", "Rajarhat", "Howrah Logistics Park", "Dankuni"],
  },
  {
    id: "bhubaneswar",
    name: "Bhubaneswar",
    state: "Odisha",
    isHQ: false,
    role: "Eastern Industrial Hub",
    details: "Mining, Heavy Industry & Facility Management Wing",
    coordinates: { x: 438, y: 408 },
    mobilizationSLA: "< 48 Hours",
    coverageAreas: ["Infocity", "Chandaka Industrial Estate", "Paradeep Port Zone", "Cuttack"],
  },
  {
    id: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    isHQ: false,
    role: "Southern Technology Hub",
    details: "Southern Technology Parks & Logistics Workforce Base",
    coordinates: { x: 258, y: 588 },
    mobilizationSLA: "< 48 Hours",
    coverageAreas: ["Whitefield", "Electronic City", "Outer Ring Road", "Peenya Industrial Area"],
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    isHQ: false,
    role: "Southern Manufacturing Hub",
    details: "Automotive, Manufacturing & Facility Support Network",
    coordinates: { x: 308, y: 598 },
    mobilizationSLA: "< 48 Hours",
    coverageAreas: ["Sriperumbudur", "Oragadam Auto Cluster", "OMR IT Corridor", "Guindy"],
  },
];

export class HubService {
  public static getAllHubs(): HubInfo[] {
    return NATIONAL_HUBS_DATA;
  }

  public static getHubById(id: string): HubInfo {
    const hub = NATIONAL_HUBS_DATA.find((h) => h.id.toLowerCase() === id.toLowerCase());
    if (!hub) {
      throw new AppError(`Hub '${id}' not found in national directory.`, 404, 'RESOURCE_NOT_FOUND');
    }
    return hub;
  }
}
