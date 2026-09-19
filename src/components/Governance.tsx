import React from 'react';
import { GOVERNANCE_DATA } from '../data/process';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Governance: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Structured Governance Pillars */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-forest bg-brand-forest-light px-3.5 py-1.5 rounded-full">
              {GOVERNANCE_DATA.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mt-3 mb-6">
              {GOVERNANCE_DATA.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8">
              {GOVERNANCE_DATA.content}
            </p>

            {/* 3 Governance Pillars */}
            <div className="space-y-4">
              {GOVERNANCE_DATA.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FAFAF9] border border-slate-200/80 hover:bg-white hover:border-brand-forest/30 transition-all duration-200"
                >
                  <h4 className="text-base font-bold text-brand-navy flex items-center mb-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest mr-2 shrink-0" />
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-6">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Governance / Audit Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-premium border border-slate-200/80 bg-slate-100">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={GOVERNANCE_DATA.imageUrl}
                    alt="CADZOOK Quality Assurance, internal compliance audit and corporate governance"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Audit Card */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-200/80 max-w-[270px]">
                <div className="flex items-center space-x-2 text-brand-forest mb-1.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">Zero Non-Compliance</span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Continuous legal gazette surveillance and pre-emptive wage adaptations.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
