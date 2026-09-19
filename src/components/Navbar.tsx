import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronRight } from 'lucide-react';
import { FacebookIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenDbConsole?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenDbConsole }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'industries', 'compliance', 'process', 'pan-india', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-xs transition-all duration-300">
      {/* 1. TOP UTILITY BAR (Deep Teal #08546C) - Fully responsive for mobile/tablet */}
      <div className="bg-[#08546C] text-white py-1.5 px-3 sm:px-6 lg:px-8 text-[11px] sm:text-xs font-medium border-b border-[#053D4F]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left: Quick Location & Live Status */}
          <div className="flex items-center space-x-2 sm:space-x-4 truncate">
            <span className="flex items-center gap-1 text-cyan-300 truncate">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span className="truncate">Noida HQ &bull; PAN India</span>
            </span>
            <span className="hidden md:inline-block text-white/40">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              100% Statutory Compliance
            </span>
          </div>

          {/* Right: Contact details + Social Icons + DB Console */}
          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="flex items-center gap-1 hover:text-cyan-300 transition-colors font-semibold"
              title="Call Us Directly"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-300" />
              <span>{COMPANY_INFO.contact.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="hidden lg:flex items-center gap-1 hover:text-cyan-300 transition-colors"
              title="Email Us"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-300" />
              <span>{COMPANY_INFO.contact.email}</span>
            </a>

            <div className="hidden sm:flex items-center space-x-2 text-white/80 pl-2 border-l border-white/20">
              <a href="#contact" className="hover:text-cyan-300 transition" aria-label="Facebook">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#contact" className="hover:text-cyan-300 transition" aria-label="LinkedIn">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#contact" className="hover:text-cyan-300 transition" aria-label="Instagram">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {onOpenDbConsole && (
              <button
                onClick={onOpenDbConsole}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00A8EC] hover:bg-[#0092CF] text-white font-bold text-[10px] sm:text-[11px] shadow transition cursor-pointer"
                title="Open Live Database Console"
              >
                <span>DB Console</span>
              </button>
            )}
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* CADZOOK Logo */}
            <a href="#hero" className="flex items-center focus:outline-none group py-1">
              <img
                src="/cadzook-logo.png"
                alt="CADZOOK Private Limited"
                className="h-8 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[12px] xl:text-[13px] font-bold tracking-wider uppercase">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className={`transition-colors duration-150 ${
                  activeSection === 'hero' ? 'text-[#00A8EC]' : 'text-slate-700 hover:text-[#00A8EC]'
                }`}
              >
                HOME
              </a>

              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className={`transition-colors duration-150 ${
                  activeSection === 'about' ? 'text-[#00A8EC]' : 'text-slate-700 hover:text-[#00A8EC]'
                }`}
              >
                ABOUT
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className={`inline-flex items-center gap-1 transition-colors duration-150 ${
                    activeSection === 'services' ? 'text-[#00A8EC]' : 'text-slate-700 hover:text-[#00A8EC]'
                  }`}
                >
                  <span>SERVICES</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </a>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-2xl border border-slate-100 py-3 mt-1 z-50 text-xs font-semibold normal-case">
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-4 py-2 hover:bg-cyan-50 hover:text-[#00A8EC] transition text-slate-800"
                    >
                      Skilled & Semi-Skilled Workforce
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-4 py-2 hover:bg-cyan-50 hover:text-[#00A8EC] transition text-slate-800"
                    >
                      Facility Management & Housekeeping
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-4 py-2 hover:bg-cyan-50 hover:text-[#00A8EC] transition text-slate-800"
                    >
                      Security Services & Access Guarding
                    </a>
                    <a
                      href="#compliance"
                      onClick={(e) => handleNavClick(e, '#compliance')}
                      className="block px-4 py-2 hover:bg-cyan-50 hover:text-[#00A8EC] transition text-slate-800"
                    >
                      Payroll & Statutory Compliance
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-4 py-2 hover:bg-cyan-50 hover:text-[#00A8EC] transition text-slate-800"
                    >
                      Technical & Engineering Staffing
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-4 py-2 hover:bg-cyan-50 hover:text-[#00A8EC] transition text-slate-800"
                    >
                      Logistics & Warehouse Operations
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#industries"
                onClick={(e) => handleNavClick(e, '#industries')}
                className={`transition-colors duration-150 ${
                  activeSection === 'industries' ? 'text-[#00A8EC]' : 'text-slate-700 hover:text-[#00A8EC]'
                }`}
              >
                INDUSTRIES
              </a>

              <a
                href="#pan-india"
                onClick={(e) => handleNavClick(e, '#pan-india')}
                className={`transition-colors duration-150 ${
                  activeSection === 'pan-india' ? 'text-[#00A8EC]' : 'text-slate-700 hover:text-[#00A8EC]'
                }`}
              >
                PRESENCE
              </a>

              <a
                href="#why-us"
                onClick={(e) => handleNavClick(e, '#why-us')}
                className={`transition-colors duration-150 ${
                  activeSection === 'why-us' ? 'text-[#00A8EC]' : 'text-slate-700 hover:text-[#00A8EC]'
                }`}
              >
                WHY US
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`transition-colors duration-150 ${
                  activeSection === 'contact' ? 'text-[#00A8EC]' : 'text-slate-700 hover:text-[#00A8EC]'
                }`}
              >
                CONTACT US
              </a>
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-2.5 xl:px-6 xl:py-3 text-xs font-bold tracking-wider uppercase text-white bg-black hover:bg-slate-900 shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
              >
                Book Online Now
              </button>
            </div>

            {/* Mobile Hamburger Button (Touch Target Optimized) */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-800 hover:text-[#00A8EC] hover:bg-slate-100 transition focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. MOBILE FULL DRAWER NAVIGATION (iPhone / Android Touch Optimized) */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[90px] bottom-0 bg-white shadow-2xl transition-all duration-300 ease-in-out z-40 overflow-y-auto ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-5 py-6 space-y-4">
          
          <div className="space-y-1 font-bold text-sm tracking-wider uppercase border-b border-slate-100 pb-4">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className={`flex items-center justify-between px-3 py-3 rounded-lg ${
                activeSection === 'hero' ? 'text-[#00A8EC] bg-cyan-50' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>HOME</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className={`flex items-center justify-between px-3 py-3 rounded-lg ${
                activeSection === 'about' ? 'text-[#00A8EC] bg-cyan-50' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>ABOUT US</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            {/* Expandable Services for Mobile */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-slate-800 hover:bg-slate-50 uppercase text-left font-bold text-sm tracking-wider cursor-pointer"
              >
                <span className={activeSection === 'services' ? 'text-[#00A8EC]' : ''}>OUR SERVICES</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-lg normal-case font-medium text-xs text-slate-700">
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block py-2 hover:text-[#00A8EC]">
                    &bull; Skilled & Semi-Skilled Workforce
                  </a>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block py-2 hover:text-[#00A8EC]">
                    &bull; Facility Management & Housekeeping
                  </a>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block py-2 hover:text-[#00A8EC]">
                    &bull; Security Services & Access Guarding
                  </a>
                  <a href="#compliance" onClick={(e) => handleNavClick(e, '#compliance')} className="block py-2 hover:text-[#00A8EC]">
                    &bull; Payroll & Statutory Compliance
                  </a>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block py-2 hover:text-[#00A8EC]">
                    &bull; Technical & Engineering Staffing
                  </a>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block py-2 hover:text-[#00A8EC]">
                    &bull; Logistics & Warehouse Operations
                  </a>
                </div>
              )}
            </div>

            <a
              href="#industries"
              onClick={(e) => handleNavClick(e, '#industries')}
              className={`flex items-center justify-between px-3 py-3 rounded-lg ${
                activeSection === 'industries' ? 'text-[#00A8EC] bg-cyan-50' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>INDUSTRIES</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#pan-india"
              onClick={(e) => handleNavClick(e, '#pan-india')}
              className={`flex items-center justify-between px-3 py-3 rounded-lg ${
                activeSection === 'pan-india' ? 'text-[#00A8EC] bg-cyan-50' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>PRESENCE (7 HUBS)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#why-us"
              onClick={(e) => handleNavClick(e, '#why-us')}
              className={`flex items-center justify-between px-3 py-3 rounded-lg ${
                activeSection === 'why-us' ? 'text-[#00A8EC] bg-cyan-50' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>WHY CHOOSE US</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`flex items-center justify-between px-3 py-3 rounded-lg ${
                activeSection === 'contact' ? 'text-[#00A8EC] bg-cyan-50' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>CONTACT US</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="pt-2 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3.5 text-center font-bold text-xs tracking-wider uppercase text-white bg-black hover:bg-slate-900 shadow transition cursor-pointer"
            >
              Book Online Now
            </button>

            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="w-full py-3 text-center font-bold text-xs tracking-wider uppercase text-[#08546C] bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A8EC]" />
              <span>Call {COMPANY_INFO.contact.phoneDisplay}</span>
            </a>

            {onOpenDbConsole && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDbConsole();
                }}
                className="w-full py-2.5 text-center font-semibold text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition cursor-pointer"
              >
                Open Admin Database Console
              </button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
