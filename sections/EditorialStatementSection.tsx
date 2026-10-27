"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const EditorialStatementSection: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === "te";

  return (
    <section
      id="about"
      className="bg-[#EBEFE6] text-[#0F281E] py-24 sm:py-32 lg:py-40 px-5 sm:px-8 relative overflow-hidden flex flex-col items-center justify-center text-center selection:bg-[#FF5500] selection:text-white border-y border-[#0F281E]/10"
    >
      {/* Background subtle noise & soft radial glow */}
      <div className="absolute inset-0 bg-radial from-[#F4F6F0] via-[#EBEFE6] to-[#E2E8DC] opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Rust uppercase label: 600, 10.5px, tracking .2em */}
        <p className="text-[#FF5500] text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
          {isTe ? "ఆంధ్రప్రదేశ్‌లో పారిశ్రామిక మార్గదర్శకత్వం" : "PRACTICAL INDUSTRIAL GUIDANCE"}
        </p>

        {/* Statement: 3 lines of uppercase Didone capitals with inline round photo pills */}
        <h2 className="tana-statement-text max-w-4xl mx-auto">
          {isTe ? (
            <>
              నిపుణులైన{" "}
              <span className="tana-photo-pill" title="Industrial Plant Unit">
                <img src="/industrial/hero-refinery.jpg" alt="DMK Plant Unit" />
              </span>{" "}
              పారిశ్రామిక
              <br />
              సలహా సేవలు{" "}
              <span className="tana-photo-pill" title="Manufacturing Facility">
                <img src="/industrial/hero-manufacturing.jpg" alt="DMK Facility" />
              </span>{" "}
              మరియు
              <br />
              ఆచరణాత్మక ఫలితాలు
            </>
          ) : (
            <>
              THE{" "}
              <span className="tana-photo-pill" title="Industrial Infrastructure">
                <img src="/industrial/hero-refinery.jpg" alt="Industrial Facility" />
              </span>{" "}
              LANDMARK
              <br />
              INDUSTRIAL ADVISORY{" "}
              <span className="tana-photo-pill" title="Precision Manufacturing">
                <img src="/industrial/hero-manufacturing.jpg" alt="Manufacturing Execution" />
              </span>{" "}
              FOR
              <br />
              ANDHRA PRADESH
            </>
          )}
        </h2>

        {/* 66px Brand line emblem: double ring with precision industrial compass / gear star */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <div className="w-[66px] h-[66px] relative text-[#FF5500] transition-transform duration-700 hover:rotate-45 cursor-default">
            <svg
              viewBox="0 0 66 66"
              fill="none"
              stroke="currentColor"
              className="w-full h-full stroke-[1.2]"
            >
              {/* Outer Ring */}
              <circle cx="33" cy="33" r="31" strokeDasharray="3 3" />
              {/* Inner Solid Ring */}
              <circle cx="33" cy="33" r="26" />
              {/* Center Industrial Compass Rose / Gear Crest */}
              <path d="M33 13v40M13 33h40M19 19l28 28M19 47 47 19" strokeOpacity="0.4" />
              <circle cx="33" cy="33" r="4.5" fill="currentColor" />
              <polygon points="33,18 36,29 47,33 36,37 33,48 30,37 19,33 30,29" stroke="currentColor" fill="none" strokeWidth="1.2" />
            </svg>
          </div>
        </div>

        {/* Short editorial subtext */}
        <p className="text-xs sm:text-[13.5px] text-[#3D4A41]/85 font-normal tracking-wide max-w-lg mx-auto leading-relaxed">
          {isTe
            ? "శ్రీకాకుళం నుండి రాయలసీమ వరకు — పారిశ్రామిక ప్రాజెక్టుల ప్రణాళిక, అనుమతులు మరియు పూర్తి స్థాయి అమలులో నిపుణుల తోడ్పాటు."
            : "From project conception to full operational clearances — guiding enterprise industrial projects across Srikakulam and Andhra Pradesh."}
        </p>
      </div>
    </section>
  );
};
