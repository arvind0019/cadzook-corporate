export interface ComplianceAct {
  id: string;
  shortName: string;
  fullName: string;
  description: string;
  governanceDetail: string;
  icon: string;
}

export const COMPLIANCE_DATA = {
  heading: "100% Statutory Compliance",
  leadText: "We strictly adhere to all applicable labour laws and statutory requirements, including:",
  supportingStatement: "All documentation, challans, and returns are shared transparently with clients.",
  
  acts: [
    {
      id: "epf-esic",
      shortName: "EPF & ESIC",
      fullName: "Employees' Provident Fund & State Insurance",
      description: "Timely monthly deposit of PF and ESI contributions with individual Universal Account Numbers (UAN) and biometric e-pehchan cards generated for all staff.",
      governanceDetail: "Monthly ECR challans generated and verified before client billing cycle.",
      icon: "Shield"
    },
    {
      id: "minimum-wages",
      shortName: "Minimum Wages Act",
      fullName: "State Minimum Wages & VDA Notifications",
      description: "Strict alignment with central and state-specific minimum wage schedules across unskilled, semi-skilled, skilled, and highly skilled categories.",
      governanceDetail: "Dynamic adjustment following every state gazette revision and VDA notification.",
      icon: "Scale"
    },
    {
      id: "bonus-gratuity",
      shortName: "Bonus Act & Gratuity Act",
      fullName: "Payment of Bonus Act & Payment of Gratuity Act",
      description: "Complete provisioning and transparent disbursement of annual statutory bonuses, leave encashment, and gratuity entitlements as per law.",
      governanceDetail: "Maintained in statutory Form C registers with audited payout acknowledgments.",
      icon: "Award"
    },
    {
      id: "shops-establishment",
      shortName: "Shops & Establishment Act",
      fullName: "State Shops & Commercial Establishments Regulations",
      description: "Full compliance with state-specific working hours, overtime regulations, national holidays, weekly off protocols, and annual establishment renewals.",
      governanceDetail: "Valid licenses active across all regional operating branches nationwide.",
      icon: "Building"
    },
    {
      id: "contract-labour",
      shortName: "Contract Labour (R&A) Act",
      fullName: "Contract Labour (Regulation & Abolition) Act, 1970",
      description: "Principal employer compliance facilitation, Form V issuance, labor license procurement, and maintenance of Form XIII / Form XVI muster rolls.",
      governanceDetail: "Zero legal exposure for client organizations through end-to-end statutory indemnification.",
      icon: "FileCheck"
    },
    {
      id: "pt-lwf",
      shortName: "Professional Tax & Labour Welfare Fund",
      fullName: "State PT Act & Labour Welfare Fund Contributions",
      description: "Accurate monthly state Professional Tax deduction and semi-annual Labour Welfare Fund contributions deposited within designated statutory windows.",
      governanceDetail: "Timely government receipts archived in dedicated digital compliance vaults.",
      icon: "Coins"
    }
  ] as ComplianceAct[],

  payrollFeatures: [
    {
      id: "automated-processing",
      title: "Automated and error-free payroll processing",
      description: "Centralized enterprise payroll engine eliminating manual calculation discrepancies, overtime oversights, and deduction anomalies.",
      icon: "Cpu"
    },
    {
      id: "bank-disbursement",
      title: "Salary disbursement through bank transfers",
      description: "100% cashless direct wage credit to individual employee bank accounts via NEFT/RTGS with verified bank payout confirmations.",
      icon: "CreditCard"
    },
    {
      id: "digitized-records",
      title: "Digitized attendance and wage records",
      description: "Biometric and geo-tagged digital attendance logs integrated directly into wage computation registers with tamper-proof audit trails.",
      icon: "Fingerprint"
    },
    {
      id: "compliance-reports",
      title: "Monthly statutory compliance reports",
      description: "Comprehensive monthly audit dossier containing consolidated PF/ESI ECRs, paid challans, and proof-of-deposit certificates.",
      icon: "FileText"
    },
    {
      id: "payslips-registers",
      title: "Employee payslips and registers shared with clients",
      description: "Standardized itemized payslips issued to every worker and full statutory Form B/C/D wage registers provided to client HR teams.",
      icon: "Receipt"
    },
    {
      id: "audit-documentation",
      title: "Complete accuracy, confidentiality, and audit-ready documentation",
      description: "Robust data security standards ensuring confidential wage structures with institutional audit preparedness for labor inspections.",
      icon: "CheckCircle2"
    }
  ]
};
