import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Mail, Phone, MapPin, Globe, ChevronRight, ShieldCheck } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

interface FooterProps {
  onOpenDbConsole?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDbConsole }) => {
  return (
    <footer className="bg-[#051026] text-white pt-16 pb-0 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Company Profile & Social Links */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#hero" className="inline-block bg-white p-2.5 shadow-md">
              <img
                src="/cadzook-logo.png"
                alt="CADZOOK Private Limited"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
              CADZOOK PRIVATE LIMITED is a premier manpower outsourcing and technical staffing organization delivering reliable, compliant, and scalable workforce solutions across India.
            </p>

            <div className="flex items-center space-x-3 pt-2 text-white">
              <a href="#contact" className="w-8 h-8 bg-white/10 hover:bg-[#00A8EC] flex items-center justify-center transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-8 h-8 bg-white/10 hover:bg-[#00A8EC] flex items-center justify-center transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-8 h-8 bg-white/10 hover:bg-[#00A8EC] flex items-center justify-center transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-8 h-8 bg-white/10 hover:bg-[#00A8EC] flex items-center justify-center transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links / Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold tracking-wider uppercase text-cyan-300 border-b border-slate-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              {COMPANY_INFO.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center hover:text-[#00A8EC] transition-colors py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#00A8EC]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services List with Blue Arrows */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold tracking-wider uppercase text-cyan-300 border-b border-slate-700 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <a href="#services" className="flex items-center hover:text-[#00A8EC] transition-colors py-1">
                  <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#00A8EC]" />
                  <span>Housekeeping & Facility Staff</span>
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center hover:text-[#00A8EC] transition-colors py-1">
                  <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#00A8EC]" />
                  <span>Office Support & Admin Staff</span>
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center hover:text-[#00A8EC] transition-colors py-1">
                  <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#00A8EC]" />
                  <span>Security & Guarding Services</span>
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center hover:text-[#00A8EC] transition-colors py-1">
                  <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#00A8EC]" />
                  <span>Skilled & Semi-Skilled Workforce</span>
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center hover:text-[#00A8EC] transition-colors py-1">
                  <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#00A8EC]" />
                  <span>Industrial & Factory Workforce</span>
                </a>
              </li>
              <li>
                <a href="#compliance" className="flex items-center hover:text-[#00A8EC] transition-colors py-1">
                  <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#00A8EC]" />
                  <span>Payroll & Statutory Compliance</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold tracking-wider uppercase text-cyan-300 border-b border-slate-700 pb-2">
              Get In Touch
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300 font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A8EC] shrink-0 mt-0.5" />
                <span>Noida Corporate HQ, Uttar Pradesh, India</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A8EC] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-cyan-300 font-semibold text-white">
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A8EC] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-cyan-300">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#00A8EC] shrink-0" />
                <a href={COMPANY_INFO.contact.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
                  {COMPANY_INFO.contact.website}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-[11px] text-cyan-300 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Statutory Compliance</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & DB Console Bar (Dark Teal #08546C) */}
      <div className="bg-[#08546C] text-slate-200 py-4 px-4 sm:px-8 text-xs border-t border-[#053D4F]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            &copy; {new Date().getFullYear()} <strong>{COMPANY_INFO.name}</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <span>CIN: Manpower Outsourcing Services</span>
            <span>&bull;</span>
            <span className="text-cyan-200">100% Statutory Compliance</span>
            {onOpenDbConsole && (
              <>
                <span>&bull;</span>
                <button
                  onClick={onOpenDbConsole}
                  className="text-white hover:text-cyan-300 font-bold underline cursor-pointer"
                >
                  Admin DB Console
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
