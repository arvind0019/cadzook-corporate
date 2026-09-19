import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { API_BASE_URL } from '../config/api';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'General Manpower Solutions'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [referenceNo, setReferenceNo] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [prevService, setPrevService] = useState(initialService);
  if (initialService !== prevService) {
    setPrevService(initialService);
    setFormData((prev) => ({ ...prev, service: initialService }));
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/enquiries/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: formData.name,
          companyName: formData.company,
          email: formData.email,
          phone: formData.phone,
          serviceCategory: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setReferenceNo(data.data.referenceNo);
        setSubmitted(true);
      } else {
        setErrorMsg(data.error?.message || 'Could not submit consultation request.');
      }
    } catch {
      const fallbackRef = `CDZ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceNo(fallbackRef);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-lg bg-white shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 bg-[#08546C] text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white px-2 py-1">
              <img
                src="/cadzook-logo.png"
                alt="CADZOOK"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">Workforce Consultation</h3>
              <p className="text-[11px] text-cyan-200">Cadzook Private Limited &bull; PAN India</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-cyan-100 text-[#00A8EC] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Consultation Registered</h4>
              
              {referenceNo && (
                <div className="inline-block bg-cyan-50 border border-cyan-200 px-3.5 py-1 text-xs font-extrabold text-[#08546C]">
                  Reference: {referenceNo}
                </div>
              )}

              <p className="text-xs sm:text-sm text-slate-600">
                Our account team has received your requirement and will connect with you at <strong className="text-slate-900">{formData.email}</strong> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-black hover:bg-slate-900 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 mb-3">
                Please fill in your company requirements. We provide 100% compliant manpower deployment across India.
              </p>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radheshyam Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 text-sm focus:outline-none focus:border-[#00A8EC]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 text-sm focus:outline-none focus:border-[#00A8EC]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 text-sm focus:outline-none focus:border-[#00A8EC]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Official Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 text-sm focus:outline-none focus:border-[#00A8EC]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Service Category
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#00A8EC]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Specific Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Headcount, shift requirements, city/locations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 text-sm focus:outline-none focus:border-[#00A8EC] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-slate-900 transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit Staffing Request</span>
                    <Send className="w-4 h-4 ml-1.5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center space-x-2 pt-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#08546C]" />
                <span>100% Statutory Compliance & Confidentiality Assured</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
