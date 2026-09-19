import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Target, Compass } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00A8EC] uppercase block mb-2">
            STRATEGIC DIRECTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Vision & Mission
          </h2>
          <div className="w-12 h-1 bg-[#00A8EC] mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-white p-8 border-t-4 border-[#00A8EC] shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#00A8EC]/10 flex items-center justify-center text-[#00A8EC]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {COMPANY_INFO.vision.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              "{COMPANY_INFO.vision.statement}"
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 border-t-4 border-[#08546C] shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#08546C]/10 flex items-center justify-center text-[#08546C]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {COMPANY_INFO.mission.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              "{COMPANY_INFO.mission.statement}"
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
