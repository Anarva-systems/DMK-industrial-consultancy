"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, BarChart3, Clock, CheckCircle2, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ServicesGridSection: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === "te";

  // Dynamic counter simulation for Card 3
  const [hoursSaved, setHoursSaved] = useState(112);

  useEffect(() => {
    const timer = setInterval(() => {
      setHoursSaved((prev) => (prev >= 128 ? 128 : prev + 1));
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="bg-[#EBEFE6] text-[#0F281E] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#0F281E]/10 relative selection:bg-[#FF5500] selection:text-white">
      <div className="max-w-[1440px] mx-auto space-y-12 lg:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2EADB] text-[#244A32] text-[11px] font-bold tracking-widest uppercase">
            <span>{isTe ? "కార్యాచరణ ముఖ్యాంశాలు" : "OPERATIONS OVERVIEW"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F281E] tracking-tight leading-tight">
            {isTe ? (
              <>
                పారిశ్రామిక విజయానికి <span className="text-[#FF5500]">మూడు మూలస్తంభాలు</span>
              </>
            ) : (
              <>
                Engineered for <span className="text-[#FF5500]">Industrial Execution</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#4A6355] leading-relaxed max-w-xl mx-auto">
            {isTe
              ? "ప్లానింగ్, ప్రభుత్వ అనుమతులు మరియు ఫ్యాక్టరీ కమీషనింగ్‌ను వేగవంతం చేయడానికి రూపొందించిన మూడు సమగ్ర సేవలు."
              : "Three operational pillars designed to eliminate bottlenecks across feasibility, statutory clearances, and turnkey commissioning."}
          </p>
        </div>

        {/* ── Falcon AI Operations Triptych Wrapper with Container Queries ── */}
        <div className="falcon-triptych-wrapper max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* ── CARD 1: Instant Visibility (Statutory & Clearances) ── */}
            <div className="falcon-card p-6 sm:p-8 flex flex-col justify-between group shadow-sm">
              <div className="space-y-6">
                {/* Header Tag & Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#FF5500] uppercase tracking-wider">
                    <span>{isTe ? "స్పష్టత" : "Instant Visibility"}</span>
                    <BarChart3 className="w-4 h-4 text-[#FF5500]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F281E] tracking-tight">
                    {isTe ? "రెగ్యులేటరీ పర్యవేక్షణ" : "Statutory & DPR Clearances"}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4A6355] leading-relaxed pt-1">
                    {isTe
                      ? "ప్రభుత్వ నిబంధనలు మరియు అనుమతుల ప్రతి మైలురాయిపై పూర్తి పారదర్శకత."
                      : "Real-time visibility across land approvals, PCB clearances, power sanctions, and statutory filings."}
                  </p>
                </div>

                {/* Interactive Glowing Orange Bar Chart */}
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#0F281E]/8 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#4A6355]">
                    <span>{isTe ? "మైలురాళ్ళు" : "Approval Milestones"}</span>
                    <span className="text-[#FF5500] font-bold">100% Adherence</span>
                  </div>

                  <div className="h-28 flex items-end justify-between gap-3 pt-2 px-2">
                    {/* Bar 1: DPR */}
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full falcon-bar falcon-bar-1 bg-[#FF5500]/70 group-hover:bg-[#FF5500] group-hover:shadow-[0_0_12px_rgba(255,85,0,0.6)] rounded-t-md h-[55%]" />
                      <span className="text-[10px] font-bold text-[#4A6355]">DPR</span>
                    </div>

                    {/* Bar 2: PCB */}
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full falcon-bar falcon-bar-2 bg-[#FF5500]/80 group-hover:bg-[#FF5500] group-hover:shadow-[0_0_14px_rgba(255,85,0,0.7)] rounded-t-md h-[70%]" />
                      <span className="text-[10px] font-bold text-[#4A6355]">PCB</span>
                    </div>

                    {/* Bar 3: Fire */}
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full falcon-bar falcon-bar-3 bg-[#FF5500]/60 group-hover:bg-[#FF5500] group-hover:shadow-[0_0_12px_rgba(255,85,0,0.5)] rounded-t-md h-[45%]" />
                      <span className="text-[10px] font-bold text-[#4A6355]">Fire</span>
                    </div>

                    {/* Bar 4: Power */}
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full falcon-bar falcon-bar-4 bg-[#FF5500] group-hover:shadow-[0_0_16px_rgba(255,85,0,0.8)] rounded-t-md h-[85%]" />
                      <span className="text-[10px] font-bold text-[#FF5500]">Grid</span>
                    </div>

                    {/* Bar 5: Factory */}
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full falcon-bar falcon-bar-5 bg-[#FF5500]/75 group-hover:bg-[#FF5500] group-hover:shadow-[0_0_12px_rgba(255,85,0,0.6)] rounded-t-md h-[65%]" />
                      <span className="text-[10px] font-bold text-[#4A6355]">NOC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="pt-6 border-t border-[#0F281E]/8 flex items-center justify-between text-xs text-[#244A32] font-semibold">
                <span>{isTe ? "లైవ్ రిపోర్టింగ్" : "Direct Liaison"}</span>
                <span className="text-[#FF5500]">Active →</span>
              </div>
            </div>

            {/* ── CARD 2: Autonomous Workflows (Greenfield Plant Execution) ── */}
            <div className="falcon-card p-6 sm:p-8 flex flex-col justify-between group shadow-sm border-[#FF5500]/20 bg-gradient-to-b from-white via-white to-orange-50/20">
              <div className="space-y-6">
                {/* Header Tag & Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#FF5500] uppercase tracking-wider">
                    <span>{isTe ? "స్వయంప్రతిపత్తి" : "Autonomous Workflows"}</span>
                    <Zap className="w-4 h-4 text-[#FF5500]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F281E] tracking-tight">
                    {isTe ? "గ్రీన్‌ఫీల్డ్ ప్లాంట్ అమలు" : "Greenfield Turnkey Setup"}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4A6355] leading-relaxed pt-1">
                    {isTe
                      ? "భూమి కేటాయింపు నుండి మెషినరీ వ్యవస్థాపన వరకు క్రమబద్ధమైన వర్క్‌ఫ్లోలు."
                      : "Structured execution blueprints orchestrating civil design, electrical loads, and equipment procurement."}
                  </p>
                </div>

                {/* Pulsing Automate Button with Sparkles + Workflow Steps */}
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#0F281E]/8 space-y-4 text-center">
                  <button
                    type="button"
                    suppressHydrationWarning
                    className="w-full py-3 px-5 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md animate-pulse-glow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    <span>{isTe ? "అమలును వేగవంతం చేయండి" : "Automate Workflows"}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>

                  {/* Connected Workflow Nodes */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-semibold text-[#0F281E]">
                    <div className="p-2 rounded-lg bg-white border border-[#0F281E]/8 flex flex-col items-center">
                      <span className="text-[#FF5500] font-black">01</span>
                      <span>Layout</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-[#0F281E]/8 flex flex-col items-center">
                      <span className="text-[#FF5500] font-black">02</span>
                      <span>Machinery</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-[#0F281E]/8 flex flex-col items-center">
                      <span className="text-[#FF5500] font-black">03</span>
                      <span>Launch</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="pt-6 border-t border-[#0F281E]/8 flex items-center justify-between text-xs text-[#244A32] font-semibold">
                <span>{isTe ? "జీరో ఆటంకాలు" : "Zero Commissioning Lags"}</span>
                <span className="text-[#FF5500]">98% On-Time →</span>
              </div>
            </div>

            {/* ── CARD 3: Faster Decisions (DPR & Efficiency Counter) ── */}
            <div className="falcon-card p-6 sm:p-8 flex flex-col justify-between group shadow-sm">
              <div className="space-y-6">
                {/* Header Tag & Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#FF5500] uppercase tracking-wider">
                    <span>{isTe ? "వేగవంతమైన నిర్ణయాలు" : "Faster Decisions"}</span>
                    <Clock className="w-4 h-4 text-[#FF5500]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F281E] tracking-tight">
                    {isTe ? "ఆప్టిమైజేషన్ & సామర్థ్యం" : "Operations & DPR Precision"}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4A6355] leading-relaxed pt-1">
                    {isTe
                      ? "ఖచ్చితమైన సాధ్యాసాధ్యాల నివేదికలు మరియు పెట్టుబడి ఆప్టిమైజేషన్."
                      : "Data-grounded financial models preventing capex overruns and factory layout bottlenecks."}
                  </p>
                </div>

                {/* Dynamic Efficiency Counter Widget: 128 Hrs Saved */}
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#0F281E]/8 space-y-3">
                  <div className="text-[11px] font-semibold text-[#4A6355] flex items-center justify-between">
                    <span>{isTe ? "సమయం ఆదా" : "Cumulative Efficiency"}</span>
                    <span className="text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full text-[10px] font-bold">
                      +42% Velocity
                    </span>
                  </div>

                  <div className="py-2 text-center">
                    <div className="text-4xl sm:text-5xl font-black text-[#0F281E] tracking-tight">
                      <span className="text-[#FF5500]">{hoursSaved}</span>{" "}
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#0F281E]">Hrs</span>
                    </div>
                    <span className="text-xs font-medium text-[#4A6355] block mt-1">
                      {isTe ? "ప్రాజెక్ట్ అమలులో ఆదా అయిన సగటు సమయం" : "Saved per industrial project setup"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-medium text-[#4A6355] pt-2 border-t border-[#0F281E]/6">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ₹45L+ Capex Guard
                    </span>
                    <span>Direct Impact</span>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="pt-6 border-t border-[#0F281E]/8 flex items-center justify-between text-xs text-[#244A32] font-semibold">
                <span>{isTe ? "ప్రణాళిక నైపుణ్యం" : "Continuous Tuning"}</span>
                <span className="text-[#FF5500]">Explore →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Centered Direct Consultation Action */}
        <div className="text-center pt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0F281E] hover:bg-[#183D2F] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
          >
            <span>{isTe ? "మీ పారిశ్రామిక ప్రాజెక్ట్ ప్రారంభించండి" : "Deploy Operations for Your Plant"}</span>
            <ArrowRight className="w-4 h-4 text-white/80" />
          </a>
        </div>
      </div>
    </section>
  );
};
