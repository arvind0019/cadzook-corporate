import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { PanIndia } from './components/PanIndia';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Compliance } from './components/Compliance';
import { Payroll } from './components/Payroll';
import { RecruitmentProcess } from './components/RecruitmentProcess';
import { EmployeeWelfare } from './components/EmployeeWelfare';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Governance } from './components/Governance';
import { ClientCommitment } from './components/ClientCommitment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuickEnquiryModal } from './components/QuickEnquiryModal';
import { DatabaseConsoleModal } from './components/DatabaseConsoleModal';
import { FacebookIcon, InstagramIcon } from './components/SocialIcons';
import { Phone, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/company';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dbConsoleOpen, setDbConsoleOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleOpenEnquiry = (serviceTitle?: string) => {
    setSelectedServiceForModal(serviceTitle || 'General Manpower Solutions');
    setModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans antialiased selection:bg-[#00A8EC] selection:text-white relative overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenDbConsole={() => setDbConsoleOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 2. HERO (Touch & Swipe Enabled Slider) */}
        <Hero
          onOpenEnquiry={() => handleOpenEnquiry()}
          onExploreServices={handleExploreServices}
        />

        {/* 3. ABOUT US (Welcome To Cadzook) */}
        <About onOpenEnquiry={() => handleOpenEnquiry('Company Overview Consultation')} />

        {/* 4. VISION & MISSION */}
        <VisionMission />

        {/* 5. SERVICES */}
        <Services onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. INDUSTRIES WE SERVE */}
        <Industries onOpenEnquiry={handleOpenEnquiry} />

        {/* 7. 100% STATUTORY COMPLIANCE */}
        <Compliance onOpenEnquiry={() => handleOpenEnquiry('Compliance Advisory')} />

        {/* 8. PAYROLL ACCURACY & TRANSPARENCY */}
        <Payroll onOpenEnquiry={() => handleOpenEnquiry('Payroll Management')} />

        {/* 9. RECRUITMENT & DEPLOYMENT PROCESS */}
        <RecruitmentProcess onOpenEnquiry={() => handleOpenEnquiry('Workforce Deployment')} />

        {/* 10. PAN INDIA PRESENCE */}
        <PanIndia />

        {/* 11. EMPLOYEE WELFARE */}
        <EmployeeWelfare />

        {/* 12. WHY CHOOSE US */}
        <WhyChooseUs onOpenEnquiry={() => handleOpenEnquiry('Partnership Inquiry')} />

        {/* 13. GOVERNANCE & QUALITY */}
        <Governance />

        {/* 14. CLIENT COMMITMENT */}
        <ClientCommitment />

        {/* 15. CONTACT US */}
        <Contact />
      </main>

      {/* 16. FOOTER */}
      <Footer onOpenDbConsole={() => setDbConsoleOpen(true)} />

      {/* ================= FLOATING WIDGETS ================= */}

      {/* Left Vertical Floating Social Bar (Desktop & Tablet only - hidden on mobile so it doesn't block content) */}
      <aside aria-label="Social and Quick Contact Dock" className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col bg-[#00A8EC] shadow-xl text-white">
        <a
          href="#contact"
          className="p-3 hover:bg-[#0092CF] transition-colors flex items-center justify-center border-b border-white/15"
          title="Facebook"
          aria-label="Facebook"
        >
          <FacebookIcon className="w-4 h-4" />
        </a>
        <a
          href="#contact"
          className="p-3 hover:bg-[#0092CF] transition-colors flex items-center justify-center border-b border-white/15"
          title="Instagram"
          aria-label="Instagram"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
        <a
          href={`tel:${COMPANY_INFO.contact.phone}`}
          className="p-3 hover:bg-[#0092CF] transition-colors flex items-center justify-center border-b border-white/15"
          title="Direct Call"
          aria-label="Direct Call"
        >
          <Phone className="w-4 h-4" />
        </a>
        <a
          href="#pan-india"
          className="p-3 hover:bg-[#0092CF] transition-colors flex items-center justify-center"
          title="PAN India Hubs"
          aria-label="PAN India Hubs"
        >
          <MapPin className="w-4 h-4" />
        </a>
      </aside>

      {/* Bottom-Right Floating "Contact us" Pill + Chat Bubble */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => handleOpenEnquiry('Instant Consultation Request')}
          className="bg-white text-slate-800 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold shadow-2xl border border-slate-200 hover:bg-slate-50 transition cursor-pointer hidden sm:inline-block"
        >
          Contact us
        </button>
        <button
          onClick={() => handleOpenEnquiry('Instant Chat / Callback Request')}
          className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#00A8EC] hover:bg-[#0092CF] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          title="Open Instant Contact Desk"
          aria-label="Contact Desk"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Quick Consultation Modal */}
      <QuickEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedServiceForModal}
      />

      {/* Enterprise Database Console Modal */}
      <DatabaseConsoleModal
        isOpen={dbConsoleOpen}
        onClose={() => setDbConsoleOpen(false)}
      />
    </div>
  );
}

export default App;
