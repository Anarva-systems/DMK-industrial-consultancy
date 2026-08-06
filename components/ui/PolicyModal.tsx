"use client";

import React from "react";
import { X } from "lucide-react";

interface PolicyModalProps {
  isOpen: boolean;
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === "privacy";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-navy-900 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6 text-gray-300">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4">
            {isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
          </h3>

          {isPrivacy ? (
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong>DMK Industrial Consultancy</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates in Srikakulam, Andhra Pradesh. We respect your privacy and are committed to protecting the personal information you share with us through our website and consultancy services.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">1. Information We Collect</h4>
              <p>
                We collect information you voluntarily provide to us when submitting an industrial requirement inquiry, including your name, contact phone number, email address, and project requirements.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">2. How We Use Your Information</h4>
              <p>
                We use the provided information solely to evaluate your industrial project requirements, provide strategic consultancy guidance, contact you regarding your inquiry, and comply with legal or regulatory obligations.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">3. Data Security & Confidentiality</h4>
              <p>
                All industrial project details and client information are kept strictly confidential. We implement industry-standard administrative and technical security measures to protect your data against unauthorized access or disclosure.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">4. Third-Party Sharing</h4>
              <p>
                We do not sell, trade, or rent your personal information to third parties. Information is only disclosed to authorized statutory authorities when explicitly required for industrial compliance or approvals under Indian laws.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">5. Contact Information</h4>
              <p>
                For questions regarding this Privacy Policy, please contact DMK Industrial Consultancy at:
                <br />
                <strong>Email:</strong> info@dmkconsultancy.in
                <br />
                <strong>Location:</strong> Srikakulam, Andhra Pradesh - 532001
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Welcome to <strong>DMK Industrial Consultancy</strong>. By accessing our website or engaging our industrial consultancy services in Srikakulam, Andhra Pradesh, you agree to comply with the following Terms & Conditions.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">1. Scope of Consultancy Services</h4>
              <p>
                DMK Industrial Consultancy provides strategic guidance, planning support, documentation assistance, and project execution advice. Our consultancy services are based on regional industrial standards and client-provided data.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">2. Intellectual Property & Documentation</h4>
              <p>
                All project plans, reports, advisory documentation, and framework recommendations developed by DMK Industrial Consultancy remain the proprietary intellectual property of DMK until full payment and agreement terms are fulfilled.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">3. Client Responsibilities</h4>
              <p>
                Clients are responsible for providing accurate project specifications, legal property documentation, and operational data necessary for reliable industrial planning and compliance filing.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">4. Limitation of Liability</h4>
              <p>
                DMK Industrial Consultancy strives for maximum accuracy and success rates in project planning and execution support. However, external statutory approval timelines by government authorities remain subject to official regulatory procedures.
              </p>

              <h4 className="text-base font-semibold text-white pt-2">5. Governing Law</h4>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of India, under the exclusive jurisdiction of the courts in Srikakulam, Andhra Pradesh.
              </p>
            </div>
          )}

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#FF5500] hover:bg-[#E04B00] text-white font-semibold rounded-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
