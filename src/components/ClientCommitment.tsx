import React from 'react';
import { CLIENT_COMMITMENT_DATA } from '../data/process';
import { ShieldCheck, Clock, HeartHandshake, FileText, CheckCircle } from 'lucide-react';

export const ClientCommitment: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-forest bg-brand-forest-light px-3.5 py-1.5 rounded-full">
            {CLIENT_COMMITMENT_DATA.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mt-3 mb-4">
            {CLIENT_COMMITMENT_DATA.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            "{CLIENT_COMMITMENT_DATA.content}"
          </p>
        </div>

        {/* 4 Strategic Commitment Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_COMMITMENT_DATA.commitments.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-subtle transition-all duration-300 hover:shadow-card-hover hover:border-brand-forest/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-brand-forest flex items-center justify-center mb-5">
                  {idx === 0 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 1 && <Clock className="w-6 h-6" />}
                  {idx === 2 && <HeartHandshake className="w-6 h-6" />}
                  {idx === 3 && <FileText className="w-6 h-6" />}
                </div>

                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-brand-forest">
                <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-brand-forest" />
                <span>Executive Pledge</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
