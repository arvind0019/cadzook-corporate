import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../data/process';
import { DynamicIcon } from './DynamicIcon';
import { COMPANY_INFO } from '../data/company';
import { Phone, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEnquiry?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="why-us" className="py-20 bg-[#F8FAFC] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00A8EC] uppercase block mb-2">
            WHY CADZOOK PRIVATE LIMITED
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Advantages & Strategic Value
          </h2>
          <div className="w-16 h-1 bg-[#00A8EC] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Why leading enterprises choose CADZOOK as their long-term workforce and compliance partner.
          </p>
        </div>

        {/* 6 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_CHOOSE_US_DATA.reasons.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 sm:p-8 border-t-4 border-[#00A8EC] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-[#00A8EC]/10 flex items-center justify-center text-[#00A8EC] group-hover:bg-[#00A8EC] group-hover:text-white transition-colors duration-200 mb-6">
                  <DynamicIcon name={item.icon} className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#00A8EC] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-[#08546C] tracking-wide uppercase">
                  100% Verified Capability
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Call / CTA Banner */}
        <div className="bg-[#08546C] text-white p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">
              Ready to Strengthen Your Workforce?
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Speak with our Manpower & Compliance Specialists
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="px-6 py-3 text-xs font-bold tracking-wider uppercase text-slate-900 bg-white hover:bg-cyan-300 transition-colors shadow flex items-center gap-2 cursor-pointer shrink-0"
            >
              <Phone className="w-4 h-4 text-[#08546C]" />
              <span>Call Now</span>
            </a>

            {onOpenEnquiry && (
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 text-xs font-bold tracking-wider uppercase text-white bg-black hover:bg-slate-900 transition-colors shadow flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Book Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
