import React, { useState } from 'react';
import type { LocationPin } from '../data/company';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Shield, Compass } from 'lucide-react';

export const PanIndia: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationPin>(
    COMPANY_INFO.locations.find((l) => l.isHQ) || COMPANY_INFO.locations[0]
  );

  // Accurate SVG coordinates for the authentic India Map (ViewBox: 0 0 650 720)
  const MAP_PINS: Record<string, { x: number; y: number; labelPos: 'left' | 'right' | 'top' | 'bottom' }> = {
    delhi: { x: 252, y: 228, labelPos: 'left' },
    noida: { x: 272, y: 236, labelPos: 'right' },
    mumbai: { x: 172, y: 432, labelPos: 'left' },
    bangalore: { x: 258, y: 588, labelPos: 'left' },
    chennai: { x: 308, y: 598, labelPos: 'right' },
    bhubaneswar: { x: 438, y: 408, labelPos: 'right' },
    kolkata: { x: 472, y: 342, labelPos: 'right' },
  };

  return (
    <section id="pan-india" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00A8EC] uppercase block mb-2">
            NATIONWIDE WORKFORCE NETWORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            PAN India Presence & Regional Hubs
          </h2>
          <div className="w-16 h-1 bg-[#00A8EC] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Operating across all major industrial belts and commercial metros with centralized compliance oversight and local mobilization agility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Authentic Detailed India Map with Pinpoints */}
          <div className="lg:col-span-6 bg-[#F8FAFC] p-6 sm:p-8 border border-slate-200 relative shadow-md flex flex-col items-center">
            
            <div className="w-full flex justify-between items-center mb-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span className="flex items-center text-slate-900 font-bold">
                <Compass className="w-4 h-4 mr-1.5 text-[#00A8EC]" />
                Interactive India Map ({COMPANY_INFO.locations.length} Hubs)
              </span>
              <span className="text-[#00A8EC] font-semibold bg-cyan-50 px-2.5 py-1 border border-cyan-200">
                Click Pins to Inspect
              </span>
            </div>

            {/* India Map SVG Container with realistic geometry */}
            <div className="relative w-full max-w-[480px] aspect-[1/1.12] mx-auto select-none py-2">
              <svg
                viewBox="0 0 650 720"
                className="w-full h-full drop-shadow-md"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="indiaLandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E2E8F0" />
                    <stop offset="50%" stopColor="#CBD5E1" />
                    <stop offset="100%" stopColor="#94A3B8" />
                  </linearGradient>

                  <linearGradient id="oceanGridGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F1F5F9" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.2" />
                  </linearGradient>

                  <filter id="hqGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#00A8EC" floodOpacity="0.6" />
                  </filter>
                  <filter id="hubGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#08546C" floodOpacity="0.4" />
                  </filter>
                </defs>

                {/* Ocean Background */}
                <circle cx="325" cy="360" r="330" fill="url(#oceanGridGrad)" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="20" y1="230" x2="630" y2="230" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                <line x1="20" y1="430" x2="630" y2="430" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                <line x1="20" y1="600" x2="630" y2="600" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

                {/* Geographic Border */}
                <path
                  d="M 235 48 
                     C 245 42, 260 38, 275 40 
                     C 290 42, 305 52, 318 68 
                     C 328 80, 340 100, 335 118 
                     C 330 132, 315 142, 320 155 
                     C 325 168, 348 172, 355 185 
                     C 362 195, 360 205, 375 212 
                     C 390 220, 420 222, 440 225 
                     C 448 215, 458 208, 470 205 
                     C 485 200, 510 195, 535 190 
                     C 560 185, 585 195, 600 215 
                     C 610 230, 615 250, 605 265 
                     C 595 278, 575 285, 565 298 
                     C 555 310, 560 330, 545 342 
                     C 530 352, 508 348, 495 360 
                     C 485 370, 480 388, 470 398 
                     C 455 412, 435 425, 420 445 
                     C 405 465, 395 490, 380 515 
                     C 368 535, 355 558, 340 580 
                     C 325 605, 310 635, 295 660 
                     C 288 672, 280 685, 272 690 
                     C 265 685, 258 668, 250 648 
                     C 240 622, 230 595, 222 568 
                     C 215 540, 205 515, 195 488 
                     C 185 460, 172 435, 160 410 
                     C 150 390, 138 375, 122 365 
                     C 105 355, 82 358, 68 345 
                     C 55 332, 60 315, 75 305 
                     C 90 295, 115 300, 130 290 
                     C 145 280, 140 260, 135 245 
                     C 128 228, 115 215, 125 198 
                     C 135 180, 160 172, 175 160 
                     C 190 148, 198 130, 205 110 
                     C 212 88, 222 60, 235 48 Z"
                  fill="url(#indiaLandGrad)"
                  stroke="#475569"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Location Pins */}
                {COMPANY_INFO.locations.map((loc) => {
                  const pin = MAP_PINS[loc.id] || { x: 300, y: 300, labelPos: 'right' };
                  const isSelected = selectedLocation.id === loc.id;
                  const isHQ = loc.isHQ;

                  return (
                    <g
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc)}
                      className="cursor-pointer transition-all duration-200 group"
                    >
                      {/* Pulse Ping for Active */}
                      {(isHQ || isSelected) && (
                        <circle
                          cx={pin.x}
                          cy={pin.y}
                          r={isHQ ? "22" : "18"}
                          fill="#00A8EC"
                          opacity="0.3"
                          className="animate-ping origin-center"
                        />
                      )}

                      {/* Pin Outer Disc */}
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r={isHQ ? "12" : (isSelected ? "11" : "9")}
                        fill={isHQ ? "#08546C" : (isSelected ? "#00A8EC" : "#1E293B")}
                        stroke="#FFFFFF"
                        strokeWidth={isHQ ? "3" : "2.5"}
                        filter={isHQ ? "url(#hqGlow)" : "url(#hubGlow)"}
                      />

                      {/* Pin Inner Dot */}
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r={isHQ ? "5" : "4"}
                        fill={isHQ ? "#00E676" : (isSelected ? "#FFFFFF" : "#E0F2FE")}
                      />

                      {/* Label */}
                      <g transform={`translate(${pin.labelPos === 'left' ? pin.x - 14 : pin.x + 16}, ${pin.y + 4})`}>
                        <rect
                          x={pin.labelPos === 'left' ? -90 : -4}
                          y="-13"
                          width={isHQ ? "96" : "80"}
                          height="20"
                          rx="4"
                          fill={isSelected ? "#08546C" : "rgba(255, 255, 255, 0.94)"}
                          stroke={isSelected ? "#00A8EC" : "#CBD5E1"}
                          strokeWidth="1"
                        />
                        <text
                          x={pin.labelPos === 'left' ? -42 : 44}
                          y="1"
                          textAnchor="middle"
                          fill={isSelected ? "#FFFFFF" : "#0F172A"}
                          fontSize={isHQ ? "11.5" : "11"}
                          fontWeight={isHQ || isSelected ? "800" : "700"}
                          fontFamily="sans-serif"
                        >
                          {loc.name} {isHQ && '★ HQ'}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Selected Location Quick Detail Panel */}
            <div className="w-full mt-4 p-4 bg-white border-l-4 border-[#00A8EC] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className={`p-3 ${selectedLocation.isHQ ? 'bg-[#08546C] text-white' : 'bg-cyan-50 text-[#00A8EC]'}`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-base font-extrabold text-slate-900">
                      {selectedLocation.name}
                    </h4>
                    {selectedLocation.isHQ ? (
                      <span className="px-2.5 py-0.5 text-[10px] font-extrabold bg-[#08546C] text-white">
                        NATIONAL HQ
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-cyan-100 text-[#08546C]">
                        REGIONAL HUB
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {selectedLocation.state} &bull; {selectedLocation.role}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Deployment SLA</span>
                <span className="text-xs font-bold text-[#08546C] bg-cyan-50 px-2 py-0.5 border border-cyan-200">
                  {selectedLocation.isHQ ? '< 24 Hours' : '< 48 Hours'} Mobilization
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: Complete Location Directory from Company Profile */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-extrabold text-slate-900">
                National Operational Hubs ({COMPANY_INFO.locations.length} Locations)
              </h3>
              <span className="text-xs font-semibold text-slate-500">
                100% Centralized Governance
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMPANY_INFO.locations.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <div
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`p-4 border transition-all duration-200 cursor-pointer text-left ${
                      isSelected
                        ? 'bg-white border-[#00A8EC] shadow-md border-l-4'
                        : 'bg-white hover:bg-slate-50 border-slate-200 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-bold text-slate-900 flex items-center">
                        <MapPin className={`w-4 h-4 mr-1.5 ${loc.isHQ ? 'text-[#00A8EC]' : (isSelected ? 'text-[#00A8EC]' : 'text-slate-400')}`} />
                        {loc.name}
                      </h4>
                      {loc.isHQ ? (
                        <span className="px-2 py-0.5 text-[10px] font-extrabold bg-[#08546C] text-white">
                          HQ
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5">
                          Hub
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{loc.state}</p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {loc.details}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Centralized Compliance Assurance Card */}
            <div className="mt-6 p-6 bg-[#08546C] text-white shadow-md relative overflow-hidden">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 text-cyan-300 shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Centralized PAN India Compliance Governance
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    Every deployment across Noida, Delhi, Mumbai, Kolkata, Bhubaneswar, Bangalore, and Chennai operates under unified central audit oversight, statutory ECR verification, and zero legal liability.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
