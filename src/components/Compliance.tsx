import React from 'react';
import { COMPLIANCE_DATA, type ComplianceAct } from '../data/compliance';
import { DynamicIcon } from './DynamicIcon';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ComplianceProps {
  onOpenEnquiry?: () => void;
}

export const Compliance: React.FC<ComplianceProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="compliance" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00A8EC] uppercase block mb-2">
            LEGAL GOVERNANCE & INTEGRITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            100% Statutory Compliance Framework
          </h2>
          <div className="w-16 h-1 bg-[#00A8EC] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Absolute adherence to Indian labour laws, central & state regulations, timely filings, and zero principal employer liability.
          </p>
        </div>

        {/* 6 Statutory Acts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {COMPLIANCE_DATA.acts.map((act: ComplianceAct) => (
            <div
              key={act.id}
              className="bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col justify-between hover:border-[#00A8EC] hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold px-2.5 py-1 bg-[#00A8EC]/10 text-[#00A8EC] tracking-wider uppercase">
                    {act.shortName}
                  </span>
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-600 group-hover:text-[#00A8EC] shadow-xs transition-colors">
                    <DynamicIcon name={act.icon} className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#00A8EC] transition-colors">
                  {act.fullName}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {act.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <span className="text-[11px] font-semibold text-[#08546C] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8EC]" />
                  {act.governanceDetail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Pledge Banner (Planwey Deep Teal #08546C Style) */}
        <div className="bg-[#08546C] text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero-Liability Compliance Guarantee</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Complete Audit Pack & Challan Verification Provided Monthly
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Every month, CADZOOK provides clients with certified EPF/ESIC ECR challans, salary slips, bank transfer logs, and attendance registers.
            </p>
          </div>

          {onOpenEnquiry && (
            <button
              onClick={onOpenEnquiry}
              className="px-8 py-3.5 text-xs font-bold tracking-wider uppercase text-slate-900 bg-white hover:bg-cyan-300 transition-colors shadow-lg shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>Request Audit Pack</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
