import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreServices: () => void;
}

interface SlideData {
  id: number;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subtitle: string;
  image: string;
  alt: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 0,
    eyebrow: 'C A D Z O O K',
    headline: 'You Focus On Your Business.',
    headlineAccent: 'We Focus On Your Workforce.',
    subtitle: 'Where Employee Management meets Powerful Manpower & 100% Statutory Compliance Solutions across PAN India.',
    image: '/images/hero-slide-1.jpg',
    alt: 'CADZOOK Corporate Professional with Laptop',
  },
  {
    id: 1,
    eyebrow: '1 0 0 %   C O M P L I A N C E',
    headline: 'Statutory Rigor & Transparency.',
    headlineAccent: 'Zero Principal Liability.',
    subtitle: 'End-to-end EPF, ESIC, Minimum Wages and automated biometric attendance governance with certified monthly audit packs.',
    image: '/images/hero-slide-2.jpg',
    alt: 'CADZOOK Compliance & HR Advisory Specialist',
  },
  {
    id: 2,
    eyebrow: 'P A N   I N D I A   N E T W O R K',
    headline: 'Rapid Workforce Mobilization.',
    headlineAccent: 'Across All 7 National Hubs.',
    subtitle: 'Deploying skilled, semi-skilled, housekeeping, and security personnel across Noida, Delhi, Mumbai, Kolkata, Bhubaneswar, Bangalore & Chennai.',
    image: '/images/hero-slide-3.jpg',
    alt: 'CADZOOK On-Site Operations Supervisor',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreServices }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Touch Swipe Support for Android & iOS mobile devices
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-play slider every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNextSlide();
    } else if (isRightSwipe) {
      handlePrevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-0 overflow-hidden bg-[#F4BA89] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slides Container */}
        <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center">
          
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`w-full transition-all duration-700 ease-in-out grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center ${
                  isActive
                    ? 'opacity-100 translate-x-0 relative z-10'
                    : 'opacity-0 absolute inset-0 pointer-events-none translate-x-8'
                }`}
              >
                
                {/* Left Column: Planwey Editorial Typography & CTA */}
                <div className="lg:col-span-7 z-10 pt-2 pb-4 sm:py-6 lg:py-10 text-center lg:text-left">
                  
                  {/* Letter-spaced Eyebrow */}
                  <div className="mb-3 sm:mb-4">
                    <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.3em] sm:tracking-[0.4em] text-slate-900 uppercase inline-block">
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* Responsive Large Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-extrabold text-[#111827] leading-[1.12] sm:leading-[1.08] tracking-tight mb-4 sm:mb-6">
                    {slide.headline} <br />
                    <span className="text-slate-900">{slide.headlineAccent}</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg text-slate-800/90 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8">
                    {slide.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <button
                      onClick={onOpenEnquiry}
                      className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-black hover:bg-slate-900 rounded-none shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Book Online Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={onExploreServices}
                      className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 hover:text-black bg-white/80 hover:bg-white border border-slate-900/20 transition-all rounded-none cursor-pointer"
                    >
                      Explore Services
                    </button>
                  </div>

                  {/* Mini Trust Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-900/10 text-[11px] sm:text-xs font-semibold text-slate-800">
                    <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#08546C] shrink-0" />
                      <span>100% Compliant</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#08546C] shrink-0" />
                      <span>7 PAN India Hubs</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 col-span-2 sm:col-span-1">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#08546C] shrink-0" />
                      <span>Zero Discrepancy</span>
                    </div>
                  </div>

                </div>

                {/* Right Column: Seamless Photo with responsive sizing */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-full self-end">
                  <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px]">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-auto object-contain drop-shadow-xl relative z-10"
                      loading="eager"
                    />
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Planwey Style Bottom Slider Controls */}
        <div className="flex justify-between items-center py-3 sm:py-4 relative z-20">
          
          {/* Previous Arrow */}
          <button
            onClick={handlePrevSlide}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/75 hover:bg-white text-slate-800 flex items-center justify-center transition shadow-sm cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Interactive Slider Dots */}
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? 'w-7 sm:w-8 h-2 sm:h-2.5 rounded-full bg-[#00A8EC]'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-900/30 hover:bg-slate-900/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNextSlide}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/75 hover:bg-white text-slate-800 flex items-center justify-center transition shadow-sm cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

        </div>

      </div>

      {/* 4-Column Key Metrics Bar Below Hero */}
      <div className="bg-[#08546C] text-white py-4 sm:py-6 border-t border-[#053D4F] shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-x divide-white/10">
            
            <div className="px-1 sm:px-2">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-cyan-300 mb-0.5 sm:mb-1">
                100%
              </div>
              <div className="text-[10px] sm:text-xs tracking-wider uppercase text-slate-200 font-bold">
                Statutory Compliance
              </div>
            </div>

            <div className="px-1 sm:px-2">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-cyan-300 mb-0.5 sm:mb-1">
                7 Hubs
              </div>
              <div className="text-[10px] sm:text-xs tracking-wider uppercase text-slate-200 font-bold">
                PAN India Network
              </div>
            </div>

            <div className="px-1 sm:px-2">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-cyan-300 mb-0.5 sm:mb-1">
                &lt; 24h
              </div>
              <div className="text-[10px] sm:text-xs tracking-wider uppercase text-slate-200 font-bold">
                Deployment SLA
              </div>
            </div>

            <div className="px-1 sm:px-2">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-cyan-300 mb-0.5 sm:mb-1">
                Zero
              </div>
              <div className="text-[10px] sm:text-xs tracking-wider uppercase text-slate-200 font-bold">
                Payroll Discrepancy
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
