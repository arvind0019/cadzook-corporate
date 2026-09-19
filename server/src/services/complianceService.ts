import { db } from '../db/database.js';
import type { AuditPackRequest } from '../types/index.js';

export const COMPLIANCE_ACTS_DATA = [
  {
    id: "epf-esic",
    shortName: "EPF & ESIC",
    fullName: "Employees' Provident Fund & Employees' State Insurance Act",
    statutoryFiling: "Monthly ECR by 15th",
    challanGenerated: true,
    description: "Provident fund and health insurance coverage with direct UAN linking and biometric e-pehchan cards."
  },
  {
    id: "minimum-wages",
    shortName: "Minimum Wages Act",
    fullName: "State Minimum Wages & VDA Gazette Compliance",
    statutoryFiling: "Per State Gazette Revision",
    challanGenerated: true,
    description: "Strict wage compliance aligned with skilled, semi-skilled, and unskilled state schedules."
  },
  {
    id: "bonus-gratuity",
    shortName: "Bonus Act & Gratuity Act",
    fullName: "Payment of Bonus Act & Payment of Gratuity Act",
    statutoryFiling: "Annual Form C Registers",
    challanGenerated: true,
    description: "Statutory bonus provisioning and structured gratuity calculations."
  },
  {
    id: "shops-establishment",
    shortName: "Shops & Establishment Act",
    fullName: "State Shops & Commercial Establishments Act",
    statutoryFiling: "Annual License Renewals",
    challanGenerated: true,
    description: "Working hour limits, overtime compensation, and state operating permissions."
  },
  {
    id: "contract-labour",
    shortName: "Contract Labour (R&A) Act",
    fullName: "Contract Labour (Regulation and Abolition) Act, 1970",
    statutoryFiling: "Form V & Form XIII Registers",
    challanGenerated: true,
    description: "Principal employer indemnification, labor licensing, and muster roll registers."
  },
  {
    id: "pt-lwf",
    shortName: "Professional Tax & Labour Welfare Fund",
    fullName: "State PT & Labour Welfare Fund Regulations",
    statutoryFiling: "Monthly & Semi-Annual Deposits",
    challanGenerated: true,
    description: "State-specific PT deductions and welfare contributions with government receipts."
  }
];

export class ComplianceService {
  public static getStatutoryActs() {
    return {
      totalActs: COMPLIANCE_ACTS_DATA.length,
      complianceRate: "100%",
      statement: "All documentation, challans, and returns are shared transparently with clients.",
      acts: COMPLIANCE_ACTS_DATA,
    };
  }

  public static async requestAuditPack(input: {
    clientName: string;
    companyName: string;
    email: string;
    phone: string;
  }): Promise<AuditPackRequest> {
    const record = db.createAuditPackRequest({
      clientName: input.clientName.trim(),
      companyName: input.companyName.trim(),
      email: input.email.trim().toLowerCase(),
      phone: input.phone.trim(),
      status: 'PENDING_DISPATCH',
    });

    console.log(`🛡️ [Compliance Audit Pack Requested] Ref: ${record.referenceNo} for ${record.companyName} (${record.email})`);
    return record;
  }
}
