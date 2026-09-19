import React from 'react';
import { WELFARE_DATA } from '../data/process';
import { DynamicIcon } from './DynamicIcon';
import { Heart } from 'lucide-react';

export const EmployeeWelfare: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Human-Focused Image with Callout */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-premium border border-slate-200/80 bg-slate-100">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={WELFARE_DATA.imageUrl}
                    alt="CADZOOK workforce training and employee welfare"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-8 bg-brand-navy text-white p-5 sm:p-6 rounded-2xl shadow-xl max-w-[280px] border border-slate-700">
                <Heart className="w-6 h-6 text-rose-400 mb-2 fill-rose-400/20" />
                <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                  "{WELFARE_DATA.statement}"
                </p>
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider block mt-3">
                  Core People Philosophy
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Welfare Features */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3.5 py-1.5 rounded-full">
              PEOPLE-FIRST GOVERNANCE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mt-3 mb-4">
              {WELFARE_DATA.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              A motivated, secure, and respected workforce delivers reliable operational continuity and superior service excellence across client sites.
            </p>

            <div className="space-y-4">
              {WELFARE_DATA.features.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-brand-blue/40 hover:shadow-subtle transition-all duration-200 flex items-start space-x-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-white text-brand-blue border border-slate-200 shadow-sm flex items-center justify-center shrink-0 mt-0.5">
                    <DynamicIcon name={item.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-navy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
