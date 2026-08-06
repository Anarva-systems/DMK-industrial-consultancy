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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 pt-4">
          {processT.steps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {/* Connecting arrow line on desktop */}
                {idx < processT.steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[65px] left-[calc(50%+65px)] w-[calc(100%-65px)] items-center z-0">
                    <div className="flex-1 h-[1.5px] bg-slate-300 relative flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                      <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                )}

                <div className="relative z-10 mb-6">
                  {/* Numbered orange badge */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-[#FF5500] flex items-center justify-center text-white text-xs font-black shadow-md z-20">
                    {step.number}
                  </div>
                  {/* White circle icon container */}
                  <div className="w-[125px] h-[125px] rounded-full border-2 border-slate-200 bg-white shadow-sm flex items-center justify-center group-hover:border-[#FF5500]/40 transition-colors">
                    <Icon className="w-10 h-10 text-black stroke-[1.5]" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-black tracking-wider uppercase">
                  {step.title}
                </h3>
                <p className="text-sm font-bold text-[#FF5500] mt-0.5">{step.subtitle}</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
