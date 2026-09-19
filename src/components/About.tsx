import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenEnquiry?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Planwey Style "Welcome To Cadzook" */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            {/* Header with Cyan Accent Underline */}
            <div>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#00A8EC] uppercase block mb-2">
                ABOUT CADZOOK PRIVATE LIMITED
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Welcome To Cadzook Private Limited
              </h2>
              <div className="w-16 h-1 bg-[#00A8EC] mt-3"></div>
            </div>

            {/* Core Description from Official PDF */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {COMPANY_INFO.about.description}
            </p>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8EC] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  End-to-End Staffing Solutions
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8EC] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  100% Statutory Compliance
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8EC] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Zero Discrepancy Payroll
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8EC] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  PAN India Operational Reach
                </span>
              </div>
            </div>

            {/* Direct Callout Box (Planwey Style) */}
            <div className="bg-[#E6F5F9] border-l-4 border-[#00A8EC] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#08546C]">Have Questions or Immediate Hiring Needs?</div>
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="text-base sm:text-xl font-extrabold text-[#00A8EC] hover:underline flex items-center gap-2 mt-0.5"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{COMPANY_INFO.contact.phoneDisplay}</span>
                </a>
              </div>

              {onOpenEnquiry && (
                <button
                  onClick={onOpenEnquiry}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs font-bold tracking-wider uppercase text-white bg-black hover:bg-slate-900 rounded-none shadow transition cursor-pointer self-start sm:self-auto shrink-0 flex items-center gap-1.5"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Right: Overlapping Image Collage with responsive padding */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image 1 */}
              <div className="relative z-10 rounded-none overflow-hidden shadow-xl border-2 sm:border-4 border-white">
                <img
                  src="/images/about-team.jpg"
                  alt="CADZOOK Corporate Team & Leadership"
                  className="w-full h-64 sm:h-80 lg:h-84 object-cover"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 z-20 w-3/5 rounded-none overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/about-facility.jpg"
                  alt="CADZOOK On-Site Operations"
                  className="w-full h-44 lg:h-48 object-cover"
                />
              </div>

              {/* Floating Experience / Trust Pill */}
              <div className="absolute top-3 right-3 sm:top-4 sm:-right-4 z-30 bg-[#08546C] text-white p-3 sm:p-4 shadow-xl border-2 border-white">
                <div className="text-xl sm:text-2xl font-black text-cyan-300">PAN India</div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-200">Workforce Partner</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
