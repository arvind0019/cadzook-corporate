import React from 'react';
import { PROCESS_DATA } from '../data/process';
import { DynamicIcon } from './DynamicIcon';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface RecruitmentProcessProps {
  onOpenEnquiry?: () => void;
}

export const RecruitmentProcess: React.FC<RecruitmentProcessProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="process" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00A8EC] uppercase block mb-2">
            STANDARDIZED WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            5-Stage Recruitment & Deployment Process
          </h2>
          <div className="w-16 h-1 bg-[#00A8EC] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600">
            A rigorous, compliance-vetted operational roadmap from initial talent sourcing to on-site induction and continuous support.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12">
          {PROCESS_DATA.steps.map((step) => (
            <div
              key={step.step}
              className="bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col justify-between hover:border-[#00A8EC] hover:bg-white hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#00A8EC]">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 group-hover:text-[#00A8EC] shadow-xs transition-colors">
                    <DynamicIcon name={step.icon} className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-[#00A8EC] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <span className="text-[10px] font-bold text-[#08546C] uppercase tracking-wider block mb-2">
                  Key Deliverables
                </span>
                <ul className="space-y-1">
                  {step.details.slice(0, 2).map((detail: string, idx: number) => (
                    <li key={idx} className="flex items-center text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-[#00A8EC] mr-1.5 shrink-0" />
                      <span className="truncate">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="text-center">
          {onOpenEnquiry && (
            <button
              onClick={onOpenEnquiry}
              className="px-8 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-black hover:bg-slate-900 rounded-none shadow-md hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Initiate Deployment Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
