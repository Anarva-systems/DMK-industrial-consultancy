"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const EditorialDossierSection: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === "te";

  // 48 radial ticks generator for the 84px rotating badge
  const ticks = Array.from({ length: 48 });

  const facts = isTe
    ? [
        { label: "ప్రధాన కార్యాలయం", value: "శ్రీకాకుళం, ఆంధ్రప్రదేశ్" },
        { label: "ముఖ్య నైపుణ్యం", value: "గ్రీన్‌ఫీల్డ్ & DPR తయారీ" },
        { label: "క్లయింట్ల సంఖ్య", value: "150+ పారిశ్రామిక సంస్థలు" },
        { label: "పూర్తి చేసిన ప్రాజెక్ట్‌లు", value: "200+ సఫలీకృత ప్లాంట్లు" },
        { label: "అనుమతుల శాతం", value: "100% రెగ్యులేటరీ సమ్మతి" },
        { label: "సేవా విధానం", value: "ప్రత్యక్ష ఆన్-సైట్ సాంకేతిక మద్దతు" },
      ]
    : [
        { label: "Headquarters", value: "Srikakulam, Andhra Pradesh" },
        { label: "Core Expertise", value: "Greenfield Setup & DPR" },
        { label: "Industrial Clients", value: "150+ Enterprises Served" },
        { label: "Projects Planned", value: "200+ Successfully Delivered" },
        { label: "Statutory Clearances", value: "100% Regulatory Adherence" },
        { label: "Consultancy Model", value: "Direct On-Site Technical Advisory" },
      ];

  return (
    <section className="bg-[#F4F6F0] text-[#0F281E] py-20 lg:py-28 px-5 sm:px-8 relative overflow-hidden selection:bg-[#FF5500] selection:text-white border-b border-[#0F281E]/10">
      {/* 1180px reference column with hairline on top */}
      <div className="max-w-[1180px] mx-auto border-t border-[#0F281E]/12 pt-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ── Left Column (1.12fr -> col-span-4) ── */}
          <div className="lg:col-span-4 space-y-7">
            {/* Brand label */}
            <p className="text-[#FF5500] text-[10.5px] font-semibold tracking-[0.2em] uppercase">
              {isTe ? "పారిశ్రామిక వివరణ" : "KEY DOSSIER"}
            </p>

            {/* Bodoni / Fraunces stacked title — one word per line */}
            <h3 className="font-serif uppercase text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.04] text-[#0F281E] font-medium tracking-tight">
              {isTe ? (
                <>
                  నిపుణులైన <br />
                  ప్రణాళిక <br />
                  మరియు <br />
                  విశ్వసనీయత
                </>
              ) : (
                <>
                  PROVEN <br />
                  GUIDANCE <br />
                  ACROSS <br />
                  SECTORS
                </>
              )}
            </h3>

            {/* 84px rotating radial tick play badge */}
            <div className="pt-2 flex items-center gap-4">
              <div className="relative w-[84px] h-[84px] flex items-center justify-center shrink-0">
                {/* 48 radial ticks turning once every 16s */}
                <svg
                  className="w-full h-full text-[#0F281E] animate-spin-slow"
                  viewBox="0 0 84 84"
                  fill="none"
                >
                  {ticks.map((_, i) => {
                    const angle = (i * 360) / 48;
                    return (
                      <line
                        key={i}
                        x1="42"
                        y1="2"
                        x2="42"
                        y2={i % 4 === 0 ? "10" : "6"}
                        stroke="currentColor"
                        strokeWidth={i % 4 === 0 ? "1.5" : "0.75"}
                        strokeOpacity={i % 4 === 0 ? "0.9" : "0.35"}
                        transform={`rotate(${angle} 42 42)`}
                      />
                    );
                  })}
                </svg>

                {/* Center Badge Disc with Play Arrow / Compass */}
                <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#EBEFE6] border border-[#0F281E]/20 flex items-center justify-center shadow-sm">
                  <svg
                    className="w-4 h-4 text-[#FF5500] translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

              {/* Caption */}
              <div className="space-y-0.5">
                <span className="text-[10.5px] font-bold text-[#FF5500] tracking-[0.16em] uppercase block">
                  {isTe ? "అనుభవం" : "FIELD RECORD"}
                </span>
                <span className="text-xs font-semibold text-[#0F281E] tracking-wider uppercase">
                  {isTe ? "15+ సంవత్సరాల నైపుణ్యం" : "15+ Years Track Record"}
                </span>
              </div>
            </div>
          </div>

          {/* ── Middle Column (1.12fr -> col-span-4) ── */}
          <div className="lg:col-span-4 space-y-6">
            {/* 13.4px Editorial Keystone Paragraph */}
            <p className="text-[13.5px] leading-[1.65] text-[#3D4A41] font-normal">
              {isTe
                ? "శ్రీకాకుళం మరియు ఆంధ్రప్రదేశ్ లోని వ్యాపారాలు పారిశ్రామిక ప్రాజెక్టులను నిర్మించేటప్పుడు ఎదుర్కొనే భూమి గుర్తింపు, డిజైన్, లైసెన్సులు మరియు DPR డాక్యుమెంటేషన్ ప్రక్రియలను వేగవంతం చేస్తూ, మొదటి అడుగు నుండే స్పష్టమైన దిశానిర్దేశం కల్పించడమే DMK లక్ష్యం."
                : "DMK Industrial Consultancy functions as a keystone advisory for enterprises navigating industrial development in Andhra Pradesh. We transform complex regulatory mandates, DPR feasibility blueprints, and equipment commissioning into a structured, executable roadmap."}
            </p>

            {/* Facts table with delicate hairlines: label ink, value rust right-aligned */}
            <div className="border-t border-[#0F281E]/12 divide-y divide-[#0F281E]/12">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="py-2.5 flex items-baseline justify-between gap-3 text-xs sm:text-[12.5px]"
                >
                  <span className="text-[#0F281E] font-medium">{fact.label}</span>
                  <span className="text-[#FF5500] font-semibold text-right">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column (0.96fr -> col-span-4) ── */}
          <div className="lg:col-span-4">
            {/* Tall 2:3 Documentary Portrait with subtle frame */}
            <div className="relative rounded-[16px] overflow-hidden aspect-[2/3] max-h-[500px] w-full shadow-lg border border-[#0F281E]/12 bg-[#EBEFE6] group">
              <img
                src="/industrial/dossier-director.jpg"
                alt="DMK Industrial Facility Engineering"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Soft editorial gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F281E]/80 via-[#0F281E]/20 to-transparent opacity-75" />

              {/* Bottom Corner Tag */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#E2EADB] uppercase block">
                  {isTe ? "పారిశ్రామిక ప్రాజెక్ట్" : "PROJECT SPOTLIGHT"}
                </span>
                <span className="text-xs font-semibold tracking-wide">
                  {isTe ? "ఆధునిక ప్లాంట్ నిర్మాణం & పర్యవేక్షణ" : "Industrial Infrastructure & Plant Planning"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
