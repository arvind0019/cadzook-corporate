export type LeadStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'ASSESSMENT_SCHEDULED'
  | 'PROPOSAL_SENT'
  | 'CONTRACTED'
  | 'REJECTED';

export type LeadSource =
  | 'WEBSITE_CONTACT_FORM'
  | 'QUICK_CONSULTATION_MODAL'
  | 'COMPLIANCE_AUDIT_PACK'
  | 'DIRECT_INQUIRY';

export interface Enquiry {
  id: string;
  referenceNo: string;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  locationHub?: string;
  headcountEstimate?: number;
  requirementDetails: string;
  source: LeadSource;
  status: LeadStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuditPackRequest {
  id: string;
  referenceNo: string;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  status: 'PENDING_DISPATCH' | 'DISPATCHED';
  dossierSummary: {
    epfChallanSample: boolean;
    esicEcrSample: boolean;
    minimumWageMatrix: boolean;
    ptLwfReceiptSample: boolean;
  };
  createdAt: string;
}

export interface HubInfo {
  id: string;
  name: string;
  state: string;
  isHQ: boolean;
  role: string;
  details: string;
  coordinates: { x: number; y: number };
  mobilizationSLA: string;
  coverageAreas: string[];
}

export interface ServiceVertical {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  badge: string;
  bulletPoints: string[];
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    timestamp: string;
  };
}

export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    details?: any[];
    timestamp: string;
    path?: string;
  };
}
