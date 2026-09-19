import React from 'react';
import { CORE_SERVICES, type ServiceItem } from '../data/services';
import { DynamicIcon } from './DynamicIcon';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onOpenEnquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="services" className="py-20 lg:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Planwey Cyan Accent */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00A8EC] uppercase block mb-2">
            OUR EXPERTISE & SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Workforce Outsourcing Solutions
          </h2>
          <div className="w-16 h-1 bg-[#00A8EC] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Tailored manpower, technical staffing, facility management, and statutory payroll compliance designed for seamless corporate operations.
          </p>
        </div>

        {/* 7 Services in Planwey Dark Charcoal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CORE_SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-[#222222] hover:bg-[#2B2B2B] text-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1.5 border-t-4 border-[#00A8EC] group"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-extrabold tracking-widest text-slate-400">
                    SERVICE {service.number}
                  </span>
                  <div className="w-12 h-12 bg-[#00A8EC]/15 flex items-center justify-center text-[#00A8EC] group-hover:bg-[#00A8EC] group-hover:text-white transition-colors duration-300">
                    <DynamicIcon name={service.icon} className="w-6 h-6" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#00A8EC] group-hover:text-white transition-colors duration-200 mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Key Capability Bullets */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-slate-700/60">
                  {service.bulletPoints.map((bp, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8EC] shrink-0 mr-2 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenEnquiry(service.title)}
                className="w-full py-3 px-4 text-xs font-bold tracking-wider uppercase text-white bg-black hover:bg-[#00A8EC] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
