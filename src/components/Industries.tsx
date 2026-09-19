import React from 'react';
import { INDUSTRIES, type IndustryItem } from '../data/industries';
import { DynamicIcon } from './DynamicIcon';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndustriesProps {
  onOpenEnquiry: (serviceTitle: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="industries" className="py-20 bg-[#F8FAFC] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00A8EC] uppercase block mb-2">
            INDUSTRY VERTICALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industries We Proudly Serve
          </h2>
          <div className="w-16 h-1 bg-[#00A8EC] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Delivering domain-specialized, compliance-vetted workforce solutions across diverse corporate, industrial, and commercial sectors.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INDUSTRIES.map((ind: IndustryItem) => (
            <div
              key={ind.id}
              className="bg-white p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 border-t-4 border-[#00A8EC] group"
            >
              <div>
                <div className="w-12 h-12 bg-[#00A8EC]/10 flex items-center justify-center text-[#00A8EC] group-hover:bg-[#00A8EC] group-hover:text-white transition-colors duration-200 mb-6">
                  <DynamicIcon name={ind.icon} className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#00A8EC] transition-colors mb-3">
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {ind.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                  {ind.keyWorkforce.map((role: string, idx: number) => (
                    <div key={idx} className="flex items-center text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8EC] mr-2 shrink-0" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry(`Industry Staffing: ${ind.title}`)}
                className="w-full py-2.5 px-4 text-xs font-bold tracking-wider uppercase text-slate-900 hover:text-white bg-slate-100 hover:bg-black transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Hire For {ind.title.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
