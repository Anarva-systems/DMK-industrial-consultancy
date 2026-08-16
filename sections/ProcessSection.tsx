"use client";

import React from "react";
import { ArrowRight, FileText, Lightbulb, Search, Cog } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stepIcons = [Search, FileText, Lightbulb, Cog];

export const ProcessSection: React.FC = () => {
  const { t } = useLanguage();
  const processT = t.process;

  return (
    <section id="process" className="bg-[#FAFAFA] py-20 lg:py-24 relative overflow-hidden">
      {/* Full-bleed Process Section Background Image (Compressed 46KB) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90 pointer-events-none"
        style={{ backgroundImage: "url('/process-bg.jpg')" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 space-y-12">
        <div className="text-center space-y-3">
          <SectionLabel centered>{processT.tag}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            {processT.titlePart1}
            <span>{processT.titleHighlight.replace(/\.$/, "")}</span>
            <span className="text-[#FF5500]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed pt-1">
            {processT.subtitle}
          </p>
          <div className="mx-auto w-12 h-1 bg-[#FF5500] rounded-full mt-2" />
        </div>

        {/* Responsive Layout: Mobile Timeline (< sm) & Tablet/Desktop Grid (sm+) */}
        <div className="pt-4">
          {/* ── MOBILE CUSTOM TIMELINE (< sm) ── */}
          <div className="block sm:hidden relative pl-6 space-y-8">
            {/* Vertical timeline line */}
            <div className="absolute top-4 bottom-4 left-9 w-0.5 bg-[#FF5500]/30" />

            {processT.steps.map((step, idx) => {
              const Icon = stepIcons[idx];
              return (
                <div key={idx} className="relative flex items-start gap-4 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 shadow-sm">
                  {/* Icon & Number Badge */}
                  <div className="relative z-10 shrink-0">
                    <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-[#FF5500] flex items-center justify-center text-white text-[10px] font-black shadow">
                      {step.number}
                    </div>
                    <div className="w-14 h-14 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 text-black stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <span className="text-[10px] font-black tracking-widest text-[#FF5500] uppercase block">
                      {step.subtitle}
                    </span>
                    <h3 className="text-sm font-black text-black tracking-wide uppercase mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── TABLET & DESKTOP GRID (sm+) ── */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processT.steps.map((step, idx) => {
              const Icon = stepIcons[idx];
              return (
                <div key={idx} className="relative flex flex-col items-center text-center group bg-white/70 lg:bg-transparent p-6 sm:p-5 lg:p-0 rounded-2xl border border-slate-200/60 lg:border-none shadow-xs lg:shadow-none">
                  {/* Connecting arrow line on desktop */}
                  {idx < processT.steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[65px] left-[calc(50%+65px)] w-[calc(100%-65px)] items-center z-0">
                      <div className="flex-1 h-[1.5px] bg-slate-300 relative flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                        <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 mb-5">
                    {/* Numbered orange badge */}
                    <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-[#FF5500] flex items-center justify-center text-white text-xs font-black shadow-md z-20">
                      {step.number}
                    </div>
                    {/* White circle icon container */}
                    <div className="w-[110px] h-[110px] lg:w-[125px] lg:h-[125px] rounded-full border-2 border-slate-200 bg-white shadow-sm flex items-center justify-center group-hover:border-[#FF5500]/40 transition-colors">
                      <Icon className="w-9 h-9 lg:w-10 lg:h-10 text-black stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="text-base lg:text-lg font-black text-black tracking-wider uppercase">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#FF5500] mt-0.5">{step.subtitle}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed max-w-[240px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
