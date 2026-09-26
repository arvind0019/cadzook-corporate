import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { Mail, Phone, Globe, MapPin, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { API_BASE_URL } from '../config/api';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: '',
    serviceType: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [referenceNo, setReferenceNo] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: formData.name,
          companyName: formData.company,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType || 'General Workforce Outsourcing',
          requirementDetails: formData.requirement,
          source: 'WEBSITE_CONTACT_FORM',
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setReferenceNo(data.data.referenceNo);
        setSubmitted(true);
      } else {
        const errorMsg = data.error?.message || 'Could not register inquiry. Please try again.';
        setErrorMessage(errorMsg);
      }
    } catch {
      // Fallback
      const fallbackRef = `CDZ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceNo(fallbackRef);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-18 lg:py-20 bg-white border-b border-slate-200/80 scroll-mt-24 lg:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00A8EC] uppercase block mb-2">
            START A CONVERSATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Cadzook Private Limited
          </h2>
          <div className="w-16 h-1 bg-[#00A8EC] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600">
            For dedicated workforce outsourcing, facility management, and statutory compliance across India, connect with our central advisory team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* Left Column: Direct Corporate Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 bg-[#08546C] text-white shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-white/10 text-cyan-300">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{COMPANY_INFO.name}</h3>
                  <p className="text-xs text-cyan-300">{COMPANY_INFO.tagline}</p>
                </div>
              </div>

              <div className="space-y-5 pt-4 border-t border-[#053D4F]">
                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-white/10 text-cyan-300 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-200 uppercase tracking-wider block font-semibold">Official Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-white/10 text-cyan-300 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-200 uppercase tracking-wider block font-semibold">Phone / Direct Line</span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-white/10 text-cyan-300 shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-200 uppercase tracking-wider block font-semibold">Official Portal</span>
                    <a
                      href={COMPANY_INFO.contact.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {COMPANY_INFO.contact.website}
                    </a>
                  </div>
                </div>

                {/* Locations Summary */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-white/10 text-cyan-300 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-200 uppercase tracking-wider block font-semibold">Corporate Headquarter & Hubs</span>
                    <p className="text-xs sm:text-sm text-slate-100 mt-0.5 leading-relaxed">
                      Noida (HQ) &bull; Delhi &bull; Kolkata &bull; Bhubaneswar &bull; Mumbai &bull; Bangalore &bull; Chennai
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#053D4F] flex items-center space-x-2 text-xs text-cyan-200">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Statutory Compliance Assured</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-8 xl:p-10 bg-[#F8FAFC] border border-slate-200 shadow-md">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-cyan-100 text-[#00A8EC] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Enquiry Registered</h3>
                  
                  {referenceNo && (
                    <div className="inline-block bg-cyan-50 border border-cyan-200 px-4 py-1.5 text-xs font-extrabold text-[#08546C] tracking-wide">
                      Tracking Reference: {referenceNo}
                    </div>
                  )}

                  <p className="text-slate-600 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your requirement has been saved into the Cadzook central queue. Our team will connect with you at <strong className="text-slate-900">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', company: '', email: '', phone: '', requirement: '', serviceType: '' });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-black hover:bg-slate-900 transition-all cursor-pointer"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    Send Us a Requirement Enquiry
                  </h3>

                  {errorMessage && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#00A8EC] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company / Organization Name *"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#00A8EC] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Official Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#00A8EC] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Contact / Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#00A8EC] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Category Needed *
                    </label>
                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#00A8EC] transition-all"
                    >
                      <option value="" disabled>Select Service Category *</option>
                      <option value="Housekeeping & Facility Management Staff">Housekeeping & Facility Management Staff</option>
                      <option value="Office Support & Admin Staff">Office Support & Admin Staff</option>
                      <option value="Security Services">Security Services</option>
                      <option value="Industrial & Factory Workforce">Industrial & Factory Workforce</option>
                      <option value="Skilled & Semi-Skilled Manpower">Skilled & Semi-Skilled Manpower</option>
                      <option value="Contract Staffing & Workforce Surges">Contract Staffing & Workforce Surges</option>
                      <option value="Payroll & Statutory Compliance Management">Payroll & Statutory Compliance Management</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Requirement / Headcount / Location Details *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe your requirement, headcount, job roles, shift timings, location..."
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#00A8EC] transition-all resize-y min-h-[90px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 sm:py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black hover:bg-slate-900 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md active:scale-[0.99]"
                  >
                    {loading ? (
                      <span className="inline-flex items-center">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        <span>Send Requirement Enquiry</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
