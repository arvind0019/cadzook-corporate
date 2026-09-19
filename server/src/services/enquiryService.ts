import { db } from '../db/database.js';
import type { Enquiry, LeadStatus } from '../types/index.js';
import { AppError } from '../middleware/errorHandler.js';

export interface CreateEnquiryInput {
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  locationHub?: string;
  headcountEstimate?: number;
  requirementDetails: string;
  source?: Enquiry['source'];
}

export class EnquiryService {
  public static async createEnquiry(input: CreateEnquiryInput): Promise<Enquiry> {
    const created = db.createEnquiry({
      clientName: input.clientName.trim(),
      companyName: input.companyName.trim(),
      email: input.email.trim().toLowerCase(),
      phone: input.phone.trim(),
      serviceType: input.serviceType,
      locationHub: input.locationHub || 'Noida',
      headcountEstimate: input.headcountEstimate || 0,
      requirementDetails: input.requirementDetails.trim(),
      source: input.source || 'WEBSITE_CONTACT_FORM',
      status: 'NEW',
    });

    console.log(`📋 [New Lead Registered] Reference: ${created.referenceNo} | Client: ${created.clientName} (${created.companyName})`);
    return created;
  }

  public static async createConsultation(input: {
    clientName: string;
    companyName: string;
    email: string;
    phone: string;
    serviceCategory: string;
    message?: string;
  }): Promise<Enquiry> {
    return this.createEnquiry({
      clientName: input.clientName,
      companyName: input.companyName,
      email: input.email,
      phone: input.phone,
      serviceType: input.serviceCategory,
      requirementDetails: input.message || 'Quick consultation request via website modal.',
      source: 'QUICK_CONSULTATION_MODAL',
    });
  }

  public static async getEnquiries(filter?: {
    status?: string;
    serviceType?: string;
    locationHub?: string;
    search?: string;
  }): Promise<Enquiry[]> {
    return db.getEnquiries(filter);
  }

  public static async getEnquiryByRef(refNo: string): Promise<Enquiry> {
    const found = db.getEnquiryByReference(refNo);
    if (!found) {
      throw new AppError(`Enquiry with reference '${refNo}' was not found.`, 404, 'RESOURCE_NOT_FOUND');
    }
    return found;
  }

  public static async updateStatus(id: string, status: LeadStatus, notes?: string): Promise<Enquiry> {
    const updated = db.updateEnquiryStatus(id, status, notes);
    if (!updated) {
      throw new AppError(`Enquiry ID '${id}' not found.`, 404, 'RESOURCE_NOT_FOUND');
    }
    return updated;
  }

  public static async getAdminStats() {
    return db.getStats();
  }
}
