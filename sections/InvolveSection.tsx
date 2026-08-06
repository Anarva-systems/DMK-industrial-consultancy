"use client";

import React from "react";
import { Target, CalendarDays, Settings, ChartNoAxesCombined, Factory } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const InvolveSection: React.FC = () => {
  const { t } = useLanguage();
  const involveT = t.involve;

  const cardIcons = [
    <Target key="1" className="w-8 h-8 text-[#FF5500]" />,
    <CalendarDays key="2" className="w-8 h-8 text-[#FF5500]" />,
    <Settings key="3" className="w-8 h-8 text-[#FF5500]" />,
    <ChartNoAxesCombined key="4" className="w-8 h-8 text-[#FF5500]" />,
  ];
  const calloutParts = involveT.callout.split("DMK");

  return (
    <section className="relative overflow-hidden bg-[#00172E] text-white">
      <div
        className="absolute inset-0 blueprint-bg opacity-90"
        style={{ backgroundImage: "url('/dmk-blueprint.png')", backgroundPosition: "right center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00172E] via-[#00172E]/88 to-[#00172E]/20" />
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#00172E] via-[#00172E]/90 to-transparent" />

      <div className="relative z-10">
        <div className="max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-10 pt-24 lg:pt-28 pb-14">
          <div className="max-w-[760px] space-y-7">
            <SectionLabel>{involveT.tag}</SectionLabel>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              {involveT.titlePart1}
              <br />
              <span className="text-[#FF5500]">{involveT.titleHighlight}</span>
            </h2>

            <div className="w-16 h-1 bg-[#FF5500]" />
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {involveT.subtitle}
            </p>

            <div className="inline-flex items-center gap-5 px-7 py-5 rounded-xl bg-[#00172E]/80 border border-[#FF5500] w-fit mt-2">
              <Factory className="w-12 h-12 text-[#FF5500] flex-shrink-0" />
              <span className="text-lg sm:text-xl font-extrabold leading-tight tracking-wide uppercase">
                <span className="text-slate-300">{calloutParts[0]}</span>
                <span className="text-[#FF5500]">DMK{calloutParts.slice(1).join("DMK")}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 sm:px-8 lg:px-10">
            {involveT.cards.map((card, idx) => (
              <div
                key={idx}
                className="px-7 py-10 text-center space-y-5 border-b sm:border-b-0 sm:border-r border-white/20 last:border-r-0"
              >
                <div className="mx-auto w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  {cardIcons[idx]}
                </div>
                <h3 className="text-base font-extrabold tracking-wide uppercase">{card.title}</h3>
                <p className="text-base text-slate-300 leading-relaxed max-w-[250px] mx-auto">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
