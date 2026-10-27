"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === "te";

  const reels = [
    {
      id: "reel-1",
      title: isTe ? "రిఫైనరీ & ప్రాసెస్ ప్లాంట్" : "Refinery & Process Plant",
      image: "/industrial/hero-refinery.jpg",
      className: "reelmark-card-1",
    },
    {
      id: "reel-2",
      title: isTe ? "ప్రిసిషన్ తయారీ విభాగం" : "Precision Manufacturing",
      image: "/industrial/hero-manufacturing.jpg",
      className: "reelmark-card-2",
    },
    {
      id: "reel-3",
      title: isTe ? "హెవీ మెషినరీ లేఅవుట్" : "Heavy Machinery Setup",
      image: "/industrial/hero-machinery.jpg",
      className: "reelmark-card-3",
    },
    {
      id: "reel-4",
      title: isTe ? "గ్రీన్‌ఫీల్డ్ PEB ప్లాంట్" : "Greenfield PEB Facility",
      image: "/industrial/hero-greenfield.jpg",
      className: "reelmark-card-4",
    },
    {
      id: "reel-5",
      title: isTe ? "DPR & రెగ్యులేటరీ క్లియరెన్స్" : "DPR Clearances & Permits",
      image: "/industrial/hero-dpr.jpg",
      className: "reelmark-card-5",
    },
    {
      id: "reel-6",
      title: isTe ? "ప్లాంట్ యుటిలిటీస్ & పైపింగ్" : "Plant Utilities & Piping",
      image: "/industrial/hero-utilities.jpg",
      className: "reelmark-card-6",
    },
    {
      id: "reel-7",
      title: isTe ? "ఆగ్రో & ఫుడ్ ప్రాసెసింగ్" : "Agro & Food Processing",
      image: "/industrial/hero-agro.jpg",
      className: "reelmark-card-7",
    },
  ];

  return (
    <section
      id="home"
      className="bg-[#F4F6F0] text-[#0F281E] pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 overflow-hidden relative selection:bg-[#FF5500] selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8 lg:space-y-10">
        {/* Top Badge: "Trusted by 150+ Industrial Enterprises" */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E2EADB] border border-[#CBD8C2] text-[#244A32] text-xs sm:text-[13px] font-semibold tracking-wide shadow-xs">
          <span>{isTe ? "150+ పారిశ్రామిక సంస్థల విశ్వాసం" : "Trusted by 150+ industrial enterprises in AP"}</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 max-w-4xl mx-auto relative">
          {/* Hand-drawn double slash accent */}
          <div className="hidden lg:block absolute -left-12 top-6 text-[#2E5A40]/40 font-mono text-2xl font-bold select-none">
            //
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] xl:text-[4.8rem] font-extrabold text-[#0F281E] tracking-tight leading-[1.08]">
            {isTe ? (
              <>
                నిరూపిత ప్రణాళికతో <br />
                <span className="text-[#0F281E]">పరిశ్రమను విస్తరించండి</span>
              </>
            ) : (
              <>
                Captivate Growth <br />
                <span className="text-[#0F281E]">with Proven Industrial Planning</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#375244] font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            {isTe
              ? "శ్రీకాకుళం మరియు ఆంధ్రప్రదేశ్ లో పారిశ్రామిక ప్లానింగ్, ప్రభుత్వ అనుమతులు మరియు పూర్తి స్థాయి ప్లాంట్ అమలులో ఆచరణాత్మక మార్గదర్శకత్వం."
              : "Practical industrial consultancy providing hands-on guidance for planning, statutory approvals, and execution of manufacturing projects across Srikakulam & Andhra Pradesh."}
          </p>

          {/* Hand-drawn annotation top-right: "Turnkey execution" with curved arrow */}
          <div className="hidden md:flex flex-col items-center absolute -right-8 lg:-right-16 top-16 select-none pointer-events-none">
            <span className="font-serif italic text-sm text-[#2E5A40] -rotate-6">
              {isTe ? "సంపూర్ణ అమలు" : "Turnkey execution"}
            </span>
            <svg
              className="w-12 h-12 text-[#2E5A40] translate-y-1 rotate-12"
              viewBox="0 0 50 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M10 10 Q35 15 35 40 M28 32 L35 40 L42 32" />
            </svg>
          </div>
        </div>

        {/* ── Continuous Scrolling Showcase (Infinite Loop with Pause on Hover) ── */}
        <div className="pt-4 sm:pt-6 pb-2 relative overflow-hidden hero-scroll-container">
          {/* Subtle left & right gradient fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F4F6F0] via-[#F4F6F0]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F4F6F0] via-[#F4F6F0]/80 to-transparent z-20" />

          {/* Marquee Track with duplicated set for 100% seamless continuity */}
          <div className="hero-scroll-track py-6 flex items-center gap-5 sm:gap-6 px-4">
            {[...reels, ...reels].map((reel, idx) => (
              <div
                key={`${reel.id}-${idx}`}
                className="hero-photo-card shrink-0 w-[190px] sm:w-[230px] md:w-[260px] lg:w-[280px] aspect-[9/13] rounded-[22px] overflow-hidden relative shadow-md hover:shadow-2xl cursor-pointer bg-white border border-[#0F281E]/10 group"
              >
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                {/* Subtle gradient vignette for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F281E]/90 via-[#0F281E]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Corner Pill: Plant Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[10px] font-bold text-white uppercase tracking-wider shadow-xs">
                    DMK #{((idx % 7) + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF5500] block">
                    {isTe ? "ఆన్-సైట్ యూనిట్" : "Operational Facility"}
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white truncate drop-shadow-sm mt-0.5">
                    {reel.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button Block with Dashed Outer Ring & "Direct consultation" annotation */}
        <div className="pt-2 flex flex-col items-center justify-center relative">
          {/* Bottom-left hand-drawn arrow annotation: "Direct consultation" */}
          <div className="hidden sm:flex items-center gap-2 absolute left-1/2 -translate-x-56 -top-3 select-none pointer-events-none">
            <span className="font-serif italic text-sm text-[#2E5A40] -rotate-6">
              {isTe ? "ప్రత్యక్ష సలహా" : "Direct consultation"}
            </span>
            <svg
              className="w-10 h-10 text-[#2E5A40] translate-y-2 -rotate-12"
              viewBox="0 0 50 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M10 38 Q30 35 38 12 M30 18 L38 12 L44 20" />
            </svg>
          </div>

          {/* Dashed Outer Pill Ring wrapping the Dark Button */}
          <div className="p-1 rounded-full border border-dashed border-[#0F281E]/30 transition-transform duration-300 hover:scale-105">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#0F281E] hover:bg-[#FF5500] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-orange-500/25"
            >
              <span>{isTe ? "కన్సల్టేషన్ ప్రారంభించండి" : "Get Consultation"}</span>
              <ArrowRight className="w-4 h-4 text-white/80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
