import React from 'react';
import { COMPLIANCE_DATA } from '../data/compliance';
import { DynamicIcon } from './DynamicIcon';
import { CheckCircle2 } from 'lucide-react';

interface PayrollProps {
  onOpenEnquiry?: () => void;
}

export const Payroll: React.FC<PayrollProps> = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00A8EC] uppercase block mb-2">
            PAYROLL PRECISION & TRANSPARENCY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Payroll Accuracy & Timely Disbursement
          </h2>
          <div className="w-16 h-1 bg-[#00A8EC] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered systems guaranteeing on-time salary disbursements, digital pay slips, and zero calculation discrepancies.
          </p>
        </div>

        {/* 6 Precision Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPLIANCE_DATA.payrollFeatures.map((feat) => (
            <div
              key={feat.id}
              className="bg-white p-6 shadow-xs border border-slate-200 hover:border-[#00A8EC] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-[#E6F5F9] text-[#00A8EC] flex items-center justify-center mb-4">
                  <DynamicIcon name={feat.icon} className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {feat.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {feat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-[#08546C]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8EC] mr-1.5 shrink-0" />
                <span>100% Audit Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
