"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const AchievementsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isTe = language === "te";

  const cards = [
    {
      id: "card-1",
      cardClass: "elo-card-1",
      clientName: isTe ? "ఇండస్ట్రియల్ గ్రీన్‌ఫీల్డ్ యూనిట్స్" : "Industrial Greenfield Units",
      outcome: isTe ? "ప్లానింగ్, DPR మరియు అనుమతులు" : "Planning, DPR & Approvals Executed",
      monogram: (
        // Minimalist mountain/factory geometric monogram
        <svg
          className="w-8 h-8 text-white/90 stroke-[1.5]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2 20 7-13 5 9 3-4 5 8" />
        </svg>
      ),
      stat1: {
        value: "150+",
        label: isTe ? "సంతృప్తి చెందిన క్లయింట్లు" : "Satisfied Clients",
      },
      stat2: {
        value: "100%",
        label: isTe ? "రెగ్యులేటరీ క్లియరెన్స్ రేటు" : "Regulatory Clearances",
      },
      image: "/industrial/hero-greenfield.jpg",
      imageAlt: "Industrial greenfield pre-engineered facility",
    },
    {
      id: "card-2",
      cardClass: "elo-card-2",
      clientName: isTe ? "తయారీ మరియు ఆగ్రో ప్లాంట్లు" : "Manufacturing & Agro Plants",
      outcome: isTe ? "ఆలోచన నుండి ప్రత్యక్ష ఉత్పత్తి వరకు" : "From Requirement to Commissioning",
      monogram: (
        // Architectural plant/unit line monogram
        <svg
          className="w-8 h-8 text-white/90 stroke-[1.5]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
          <path d="M9 9v.01" />
          <path d="M9 13v.01" />
          <path d="M9 17v.01" />
        </svg>
      ),
      stat1: {
        value: "200+",
        label: isTe ? "పూర్తి చేసిన ప్రాజెక్ట్‌లు" : "Projects Delivered",
      },
      stat2: {
        value: "98%",
        label: isTe ? "విజయవంతమైన అమలు రేటు" : "Execution Success Rate",
      },
      image: "/industrial/hero-agro.jpg",
      imageAlt: "Automated modern agro and food processing facility",
    },
    {
      id: "card-3",
      cardClass: "elo-card-3",
      clientName: isTe ? "మల్టీ-సెక్టార్ ఇండస్ట్రియల్ హబ్స్" : "Multi-Sector Industrial Hubs",
      outcome: isTe ? "సంపూర్ణ పారిశ్రామిక విస్తరణ" : "End-to-End Operational Scale",
      monogram: (
        // Geometric lotus / precision gear emblem
        <svg
          className="w-8 h-8 text-white/90 stroke-[1.5]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c5-5 8-9.5 8-13.5a8 8 0 0 0-16 0c0 4 3 8.5 8 13.5Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      stat1: {
        value: "15+",
        label: isTe ? "సీనియర్ నిపుణుల బృందం" : "Senior Technical Experts",
      },
      stat2: {
        value: "5+",
        label: isTe ? "సేవలు అందిస్తున్న రంగాలు" : "Core Industrial Sectors",
      },
      image: "/industrial/hero-machinery.jpg",
      imageAlt: "Heavy precision machinery and production facility",
    },
  ];

  return (
    <section className="bg-[#F4F6F0] text-[#0F281E] py-20 lg:py-28 relative overflow-hidden border-t border-[#0F281E]/10">
      {/* Background ambient subtle glow */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10 space-y-14">
        {/* Editorial Headline block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionLabel centered>
            {isTe ? "మా విజయాలు & నిరూపిత ఫలితాలు" : "MEASURABLE INDUSTRIAL RESULTS"}
          </SectionLabel>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-[#0F281E] tracking-tight leading-[1.18]">
            {isTe ? (
              <>
                పరిశ్రమలు DMK ద్వారా సాధించిన{" "}
                <span className="text-[#FF5500]">నిరూపిత ఫలితాలు</span>
              </>
            ) : (
              <>
                How businesses achieve measurable{" "}
                <span className="text-[#FF5500]">results with DMK</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#3D4A41] font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            {isTe
              ? "మా క్లయింట్లు విభిన్న పారిశ్రామిక రంగాల నుండి వచ్చినప్పటికీ, లక్ష్యం ఎల్లప్పుడూ ఒకటే: కొలవదగిన ఫలితాలు. క్రింది ప్రాజెక్టులు ఆచరణాత్మక కన్సల్టెన్సీ ద్వారా సాధించిన ఫలితాలను ప్రతిబింబిస్తాయి."
              : "Our clients come from diverse industrial sectors, but the goal is always the same: measurable results. The projects below demonstrate the outcomes made possible through our hands-on guidance."}
          </p>
        </div>

        {/* Elo One 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`group relative rounded-[20px] p-6 sm:p-7 text-white flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl overflow-hidden ${card.cardClass}`}
            >
              {/* Top Row: Name, Outcome & Monogram */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                      {card.clientName}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-white/80 font-medium">
                      {card.outcome}
                    </p>
                  </div>
                  <div className="shrink-0 p-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
                    {card.monogram}
                  </div>
                </div>

                {/* Stats Row with thin divider */}
                <div className="grid grid-cols-2 gap-4 pt-3 pb-2 border-t border-white/20">
                  <div className="pr-3 border-r border-white/20">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {card.stat1.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-white/85 font-medium leading-snug mt-1">
                      {card.stat1.label}
                    </div>
                  </div>
                  <div className="pl-1">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {card.stat2.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-white/85 font-medium leading-snug mt-1">
                      {card.stat2.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Image with Stacked "Paper" Layers */}
              <div className="mt-7 pt-4 relative">
                {/* Layer 1 (Back paper tab) */}
                <div className="elo-paper-layer-1" />
                {/* Layer 2 (Front paper tab) */}
                <div className="elo-paper-layer-2" />

                {/* Main Photo Card */}
                <div className="relative z-10 rounded-[14px] overflow-hidden aspect-[3/2] shadow-lg border border-white/20">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered Pill Button */}
        <div className="text-center pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white hover:bg-slate-50 text-[#B8460F] font-bold text-xs sm:text-sm tracking-wide rounded-full border border-[#B8460F]/30 shadow-md hover:shadow-lg hover:border-[#B8460F] transition-all"
          >
            <span>{isTe ? "మరిన్ని వివరాలకు సంప్రదించండి" : "Discuss Your Industrial Project"}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
