import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { Enquiry, AuditPackRequest } from '../types/index.js';

interface DatabaseSchema {
  enquiries: Enquiry[];
  auditPackRequests: AuditPackRequest[];
  meta: {
    lastReferenceId: number;
    version: string;
    createdAt: string;
    updatedAt: string;
  };
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../../data');
const DB_FILE = path.join(DATA_DIR, 'cadzook_db.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial Database State with realistic initial records
const INITIAL_DB: DatabaseSchema = {
  enquiries: [
    {
      id: 'enq_01_init',
      referenceNo: 'CDZ-2026-1001',
      clientName: 'Sanjay Deshmukh',
      companyName: 'Apex Industrial Logistics Ltd.',
      email: 'sanjay.deshmukh@apexlogistics.in',
      phone: '+91 98201 45678',
      serviceType: 'Industrial & Factory Workforce',
      locationHub: 'Mumbai',
      headcountEstimate: 75,
      requirementDetails: 'Need 75 warehouse packaging and loading personnel for 24/7 rotational shifts at Bhiwandi logistics park.',
      source: 'WEBSITE_CONTACT_FORM',
      status: 'ASSESSMENT_SCHEDULED',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      updatedAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: 'enq_02_init',
      referenceNo: 'CDZ-2026-1002',
      clientName: 'Pooja Narayanan',
      companyName: 'NovaTech Towers & IT Parks',
      email: 'pooja.n@novatechpark.com',
      phone: '+91 98401 23456',
      serviceType: 'Housekeeping & Facility Management Staff',
      locationHub: 'Noida',
      headcountEstimate: 30,
      requirementDetails: 'Mechanized housekeeping and pantry support staff for 120,000 sq.ft commercial tech park facility.',
      source: 'QUICK_CONSULTATION_MODAL',
      status: 'PROPOSAL_SENT',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      updatedAt: new Date().toISOString(),
    }
  ],
  auditPackRequests: [],
  meta: {
    lastReferenceId: 1002,
    version: '1.0.0',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
};

class DatabaseManager {
  private data: DatabaseSchema;

  constructor() {
    this.data = this.loadDatabase();
  }

  private loadDatabase(): DatabaseSchema {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        return JSON.parse(raw);
      }
    } catch (err) {
      console.warn('⚠️ Could not read existing database file, initializing new one.', err);
    }

    // Save initial state
    this.saveDatabase(INITIAL_DB);
    return INITIAL_DB;
  }

  private saveDatabase(data: DatabaseSchema): void {
    try {
      data.meta.updatedAt = new Date().toISOString();
      const tmpFile = `${DB_FILE}.tmp`;
      fs.writeFileSync(tmpFile, JSON.stringify(data, null, 2), 'utf-8');
      fs.renameSync(tmpFile, DB_FILE);
    } catch (err) {
      console.error('❌ Database write error:', err);
    }
  }

  public getNextReferenceNo(): string {
    this.data.meta.lastReferenceId += 1;
    const ref = `CDZ-2026-${this.data.meta.lastReferenceId}`;
    this.saveDatabase(this.data);
    return ref;
  }

  // Enquiry CRUD
  public getEnquiries(filter?: { status?: string; serviceType?: string; locationHub?: string; search?: string }): Enquiry[] {
    let list = [...this.data.enquiries];

    if (filter?.status) {
      list = list.filter((e) => e.status === filter.status);
    }
    if (filter?.serviceType) {
      list = list.filter((e) => e.serviceType === filter.serviceType);
    }
    if (filter?.locationHub) {
      list = list.filter((e) => e.locationHub === filter.locationHub);
    }
    if (filter?.search) {
      const q = filter.search.toLowerCase();
      list = list.filter(
        (e) =>
          e.clientName.toLowerCase().includes(q) ||
          e.companyName.toLowerCase().includes(q) ||
          e.referenceNo.toLowerCase().includes(q) ||
          e.email.toLowerCase().includes(q)
      );
    }

    return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  public getEnquiryById(id: string): Enquiry | undefined {
    return this.data.enquiries.find((e) => e.id === id);
  }

  public getEnquiryByReference(refNo: string): Enquiry | undefined {
    return this.data.enquiries.find((e) => e.referenceNo === refNo);
  }

  public createEnquiry(enquiry: Omit<Enquiry, 'id' | 'referenceNo' | 'createdAt' | 'updatedAt'>): Enquiry {
    const newEnquiry: Enquiry = {
      ...enquiry,
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      referenceNo: this.getNextReferenceNo(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.data.enquiries.unshift(newEnquiry);
    this.saveDatabase(this.data);
    return newEnquiry;
  }

  public updateEnquiryStatus(id: string, status: Enquiry['status'], notes?: string): Enquiry | null {
    const index = this.data.enquiries.findIndex((e) => e.id === id);
    if (index === -1) return null;

    this.data.enquiries[index].status = status;
    if (notes) {
      this.data.enquiries[index].notes = notes;
    }
    this.data.enquiries[index].updatedAt = new Date().toISOString();

    this.saveDatabase(this.data);
    return this.data.enquiries[index];
  }

  // Audit Pack Request CRUD
  public createAuditPackRequest(req: Omit<AuditPackRequest, 'id' | 'referenceNo' | 'createdAt' | 'dossierSummary'>): AuditPackRequest {
    const record: AuditPackRequest = {
      ...req,
      id: `apr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      referenceNo: `CDZ-AUDIT-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'PENDING_DISPATCH',
      dossierSummary: {
        epfChallanSample: true,
        esicEcrSample: true,
        minimumWageMatrix: true,
        ptLwfReceiptSample: true,
      },
      createdAt: new Date().toISOString(),
    };

    this.data.auditPackRequests.unshift(record);
    this.saveDatabase(this.data);
    return record;
  }

  public getStats() {
    const total = this.data.enquiries.length;
    const byStatus = this.data.enquiries.reduce((acc, curr) => {
      acc[curr.status] = (acc[curr.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const byService = this.data.enquiries.reduce((acc, curr) => {
      acc[curr.serviceType] = (acc[curr.serviceType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const byHub = this.data.enquiries.reduce((acc, curr) => {
      const hub = curr.locationHub || 'Unspecified';
      acc[hub] = (acc[hub] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalLeads: total,
      byStatus,
      byService,
      byHub,
      totalAuditRequests: this.data.auditPackRequests.length,
      lastUpdated: this.data.meta.updatedAt,
    };
  }
}

export const db = new DatabaseManager();
