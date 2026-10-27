"use client";

import React from "react";
import { Phone, MessageSquare, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactForm } from "@/components/ui/ContactForm";
import { SITE_DATA } from "@/constants/siteData";

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === "te";

  return (
    <section
      id="contact"
      className="bg-[#F4F6F0] text-[#0F281E] py-24 sm:py-32 lg:py-36 px-5 sm:px-8 relative overflow-hidden border-t border-[#0F281E]/10 selection:bg-[#FF5500] selection:text-white"
    >
      <div className="max-w-3xl mx-auto text-center space-y-10 sm:space-y-12">
        {/* Header Block matching the design: "Let's grow! Fill in the form and we'll be in touch" */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.18] tracking-tight text-[#0F281E]">
            {isTe ? (
              <>
                <span className="font-serif italic font-normal text-[#FF5500]">కలిసి ఎదుగుదాం!</span>{" "}
                <span className="font-serif font-bold">వివరాలు నమోదు చేయండి</span>
                <br />
                <span className="font-normal">మేము మిమ్మల్ని సంప్రదిస్తాము</span>
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-[#FF5500]">Let&apos;s grow!</span>{" "}
                <span className="font-serif font-bold">Fill in the form</span>
                <br />
                <span className="font-normal">and we&apos;ll be in touch</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#3D4A41] font-normal max-w-lg mx-auto">
            {isTe
              ? "మా పారిశ్రామిక ప్రణాళిక మరియు అమలు సేవల గురించి మమ్మల్ని అడగండి"
              : "Ask us about our industrial planning & execution services"}
          </p>
        </div>

        {/* Minimal Underline Form */}
        <div className="pt-2">
          <ContactForm />
        </div>

        {/* Discreet Direct Quick Contact Options */}
        <div className="pt-8 sm:pt-10 border-t border-[#0F281E]/12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#6A7870]">
          <a
            href={`tel:${SITE_DATA.phoneRaw}`}
            className="inline-flex items-center gap-2 hover:text-[#FF5500] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>+91 91000 44011</span>
          </a>

          <span className="text-[#0F281E]/20 hidden sm:inline">•</span>

          <a
            href={SITE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#FF5500] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>WhatsApp Direct</span>
          </a>

          <span className="text-[#0F281E]/20 hidden sm:inline">•</span>

          <a
            href={SITE_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#FF5500] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Srikakulam, Andhra Pradesh</span>
          </a>
        </div>
      </div>
    </section>
  );
};
