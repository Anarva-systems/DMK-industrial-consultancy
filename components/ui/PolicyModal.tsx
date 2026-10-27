"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
  const { language } = useLanguage();
  const isTe = language === "te";

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  const isPrivacy = type === "privacy";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#0B1320] text-gray-200 border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          suppressHydrationWarning
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all focus:outline-none"
          aria-label={isTe ? "మోడల్ మూసివేయండి" : "Close modal"}
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="space-y-6">
          {/* Header Title */}
          <div className="border-b border-white/10 pb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF5500] block mb-1">
              DMK Industrial Consultancy • {isTe ? "చట్టపరమైన సమాచారం" : "Official Legal Notice"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {isPrivacy
                ? isTe
                  ? "గోప్యతా విధానం (Privacy Policy)"
                  : "Privacy Policy"
                : isTe
                  ? "నిబంధనలు & షరతులు (Terms & Conditions)"
                  : "Terms & Conditions"}
            </h3>
          </div>

          {/* Modal Body: Privacy Policy */}
          {isPrivacy ? (
            <div className={`space-y-5 text-sm ${isTe ? "leading-[1.8] text-gray-200" : "leading-relaxed text-gray-300"}`}>
              {isTe ? (
                <>
                  <p className="text-[14.5px]">
                    <strong>డిఎంకె ఇండస్ట్రియల్ కన్సల్టెన్సీ</strong> (&quot;మేము&quot;, &quot;మా&quot; లేదా &quot;మా సంస్థ&quot;) ఆంధ్రప్రదేశ్ రాష్ట్రంలోని శ్రీకాకుళంలో తన ప్రధాన కార్యకలాపాలు నిర్వహిస్తోంది. మా వెబ్‌సైట్ మరియు పారిశ్రామిక సలహా సేవల ద్వారా మీరు మాతో పంచుకునే వ్యక్తిగత మరియు వ్యాపార సమాచారాన్ని అత్యంత సురక్షితంగా ఉంచడానికి మేము కట్టుబడి ఉన్నాము.
                  </p>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">01.</span> మేము సేకరించే సమాచారం
                    </h4>
                    <p>
                      మీరు మాకు పారిశ్రామిక ప్రాజెక్ట్ విచారణను సమర్పించినప్పుడు మీ పేరు, మొబైల్ ఫోన్ నంబర్, ఈమెయిల్ చిరునామా, కంపెనీ లేదా పారిశ్రామిక విభాగం పేరు మరియు మీ ప్రాజెక్ట్ అవసరాల వివరాలను మేము స్వచ్ఛందంగా సేకరిస్తాము.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">02.</span> మీ సమాచారాన్ని మేము ఎలా ఉపయోగిస్తాము
                    </h4>
                    <p>
                      మీరు అందించిన సమాచారాన్ని కేవలం మీ పారిశ్రామిక ప్రాజెక్ట్ అవసరాలను విశ్లేషించడానికి, ఆచరణాత్మక కన్సల్టెన్సీ మార్గదర్శకత్వాన్ని రూపొందించడానికి, మీ విచారణపై మిమ్మల్ని సంప్రదించడానికి మరియు చట్టబద్ధమైన రెగ్యులేటరీ నిబంధనలను పాటించడానికి మాత్రమే ఉపయోగిస్తాము.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">03.</span> సమాచార భద్రత మరియు ప్రాజెక్ట్ గోప్యత
                    </h4>
                    <p>
                      అన్ని పారిశ్రామిక ప్రాజెక్ట్ వివరాలు, ఇంజనీరింగ్ లేఅవుట్‌లు మరియు క్లయింట్ సమాచారం అత్యంత కట్టుదిట్టమైన గోప్యతతో నిర్వహించబడతాయి. అనధికారిక ప్రవేశం లేదా సమాచార బహిర్గతం కాకుండా నిరోధించడానికి మేము అత్యున్నత సాంకేతిక మరియు పరిపాలనా భద్రతా ప్రమాణాలను అమలు చేస్తున్నాము.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">04.</span> మూడవ పక్షాలతో భాగస్వామ్యం నిబంధనలు
                    </h4>
                    <p>
                      మేము మీ వ్యక్తిగత లేదా వ్యాపార వివరాలను ఏ ఇతర మూడవ పక్షాలకు విక్రయించము లేదా అద్దెకు ఇవ్వము. భారతీయ చట్టాలు మరియు పారిశ్రామిక అనుమతుల నిబంధనల ప్రకారం ప్రభుత్వం లేదా చట్టబద్ధమైన అధికారులకు అవసరమైనప్పుడు మాత్రమే సమాచారం అందించబడుతుంది.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">05.</span> సంప్రదింపు వివరాలు & న్యాయ పరిధి
                    </h4>
                    <p>
                      ఈ గోప్యతా విధానంపై ఏవైనా సందేహాలు ఉంటే, దయచేసి డిఎంకె ఇండస్ట్రియల్ కన్సల్టెన్సీని సంప్రదించండి:
                    </p>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                      <p><strong>ఈమెయిల్:</strong> dmkindustrialconsultancy@gmail.com</p>
                      <p><strong>ఫోన్:</strong> +91 91000 44011</p>
                      <p><strong>కార్యాలయం:</strong> DLTC ITI ఎదురుగా, బొందిలీపురం, శ్రీకాకుళం, ఆంధ్రప్రదేశ్ - 532001</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    <strong>DMK Industrial Consultancy</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates in Srikakulam, Andhra Pradesh. We respect your privacy and are committed to protecting the personal information you share with us through our website and consultancy services.
                  </p>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-semibold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">01.</span> Information We Collect
                    </h4>
                    <p>
                      We collect information you voluntarily provide to us when submitting an industrial requirement inquiry, including your name, contact phone number, email address, and project requirements.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-semibold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">02.</span> How We Use Your Information
                    </h4>
                    <p>
                      We use the provided information solely to evaluate your industrial project requirements, provide strategic consultancy guidance, contact you regarding your inquiry, and comply with legal or regulatory obligations.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-semibold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">03.</span> Data Security & Confidentiality
                    </h4>
                    <p>
                      All industrial project details and client information are kept strictly confidential. We implement industry-standard administrative and technical security measures to protect your data against unauthorized access or disclosure.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-semibold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">04.</span> Third-Party Sharing
                    </h4>
                    <p>
                      We do not sell, trade, or rent your personal information to third parties. Information is only disclosed to authorized statutory authorities when explicitly required for industrial compliance or approvals under Indian laws.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-semibold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">05.</span> Contact Information
                    </h4>
                    <p>
                      For questions regarding this Privacy Policy, please contact DMK Industrial Consultancy at:
                    </p>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                      <p><strong>Email:</strong> dmkindustrialconsultancy@gmail.com</p>
                      <p><strong>Phone:</strong> +91 91000 44011</p>
                      <p><strong>Location:</strong> Opposite DLTC ITI, Bondilipuram, Srikakulam, Andhra Pradesh - 532001</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* Modal Body: Terms & Conditions */
            <div className={`space-y-5 text-sm ${isTe ? "leading-[1.8] text-gray-200" : "leading-relaxed text-gray-300"}`}>
              {isTe ? (
                <>
                  <p className="text-[14.5px]">
                    <strong>డిఎంకె ఇండస్ట్రియల్ కన్సల్టెన్సీ</strong>కి స్వాగతం. మా వెబ్‌సైట్‌ను సందర్శించడం లేదా శ్రీకాకుళం, ఆంధ్రప్రదేశ్‌లో మా పారిశ్రామిక సలహా సేవలను పొందడం ద్వారా, మీరు ఈ క్రింది నిబంధనలు మరియు షరతులకు కట్టుబడి ఉండటానికి అంగీకరిస్తున్నారు.
                  </p>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">01.</span> కన్సల్టెన్సీ సేవల పరిధి
                    </h4>
                    <p>
                      డిఎంకె ఇండస్ట్రియల్ కన్సల్టెన్సీ పారిశ్రామిక ప్లానింగ్, సమగ్ర ప్రాజెక్ట్ నివేదికలు (DPR), ప్రభుత్వ అనుమతులు, మెషినరీ లేఅవుట్ మరియు ప్రాజెక్ట్ అమలు సలహా సేవలను అందిస్తుంది. మా సేవలు ప్రాంతీయ పారిశ్రామిక ప్రమాణాలు మరియు క్లయింట్ అందించిన ప్రాజెక్ట్ వివరాల ఆధారంగా ఉంటాయి.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">02.</span> మేధో సంపత్తి & డాక్యుమెంటేషన్
                    </h4>
                    <p>
                      డిఎంకె ఇండస్ట్రియల్ కన్సల్టెన్సీ రూపొందించిన అన్ని ప్రాజెక్ట్ ప్రణాళికలు, లేఅవుట్ డిజైన్లు, ఫీజిబిలిటీ నివేదికలు మరియు సాంకేతిక సిఫార్సులు క్లయింట్ ఒప్పందం మరియు పూర్తి చెల్లింపులు పూర్తయ్యే వరకు డిఎంకె యొక్క మేధో సంపత్తిగా పరిగణించబడతాయి.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">03.</span> క్లయింట్ల బాధ్యతలు
                    </h4>
                    <p>
                      సమర్థవంతమైన పారిశ్రామిక ప్రణాళిక మరియు చట్టబద్ధమైన అనుమతుల కోసం ఖచ్చితమైన ప్రాజెక్ట్ వివరాలు, భూమి యాజమాన్య పత్రాలు మరియు అవసరమైన కార్యాచరణ సమాచారాన్ని సకాలంలో అందించే బాధ్యత క్లయింట్‌పై ఉంటుంది.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">04.</span> బాధ్యత పరిమితి
                    </h4>
                    <p>
                      ప్రాజెక్ట్ ప్లానింగ్ మరియు అమలు మద్దతులో మేము గరిష్ట ఖచ్చితత్వం మరియు నాణ్యతను అందిస్తాము. అయితే, ప్రభుత్వ సంస్థల నుండి వచ్చే చట్టబద్ధమైన అనుమతుల కాలపరిమితి సంబంధిత ప్రభుత్వ నిబంధనలు మరియు అధికారిక ప్రక్రియలకు లోబడి ఉంటుంది.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">05.</span> చట్ట పరిధి & న్యాయస్థానం
                    </h4>
                    <p>
                      ఈ నిబంధనలు మరియు షరతులు భారతదేశ చట్టాలకు లోబడి నిర్వహించబడతాయి. ఏవైనా వివాదాలు తలెత్తితే, అవి ఆంధ్రప్రదేశ్‌లోని శ్రీకాకుళం న్యాయస్థానాల ప్రత్యేక అధికార పరిధికి లోబడి పరిష్కరించబడతాయి.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    Welcome to <strong>DMK Industrial Consultancy</strong>. By accessing our website or engaging our industrial consultancy services in Srikakulam, Andhra Pradesh, you agree to comply with the following Terms & Conditions.
                  </p>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-semibold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">01.</span> Scope of Consultancy Services
                    </h4>
                    <p>
                      DMK Industrial Consultancy provides strategic guidance, planning support, documentation assistance, and project execution advice. Our consultancy services are based on regional industrial standards and client-provided data.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-semibold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">02.</span> Intellectual Property & Documentation
                    </h4>
                    <p>
                      All project plans, reports, advisory documentation, and framework recommendations developed by DMK Industrial Consultancy remain the proprietary intellectual property of DMK until full payment and agreement terms are fulfilled.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-semibold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">03.</span> Client Responsibilities
                    </h4>
                    <p>
                      Clients are responsible for providing accurate project specifications, legal property documentation, and operational data necessary for reliable industrial planning and compliance filing.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-semibold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">04.</span> Limitation of Liability
                    </h4>
                    <p>
                      DMK Industrial Consultancy strives for maximum accuracy and success rates in project planning and execution support. However, external statutory approval timelines by government authorities remain subject to official regulatory procedures.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-base font-semibold text-white flex items-center gap-2">
                      <span className="text-[#FF5500]">05.</span> Governing Law
                    </h4>
                    <p>
                      These Terms & Conditions shall be governed by and construed in accordance with the laws of India, under the exclusive jurisdiction of the courts in Srikakulam, Andhra Pradesh.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              suppressHydrationWarning
              className="px-6 py-2.5 bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              {isTe ? "మూసివేయండి" : "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
