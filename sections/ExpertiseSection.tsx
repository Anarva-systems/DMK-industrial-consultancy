"use client";

import React from "react";
import {
  ArrowRight,
  Factory,
  ClipboardList,
  FileText,
  Users,
  Cog,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";

const serviceIcons = [Factory, ClipboardList, FileText, Users, Cog];
const outcomeIcons = [Target, Lightbulb, TrendingUp];

export const ExpertiseSection: React.FC = () => {
  const { t } = useLanguage();
  const expertiseT = t.expertise;
  const focusCard = expertiseT.focusCard;

  return (
    <section id="services" className="bg-[#030914] relative overflow-hidden min-h-[720px] flex items-center">
      {/* Right Side Industrial Refinery Photo at Night with Diagonal Cut */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[52%] bg-cover bg-center diagonal-image-right hidden lg:block"
        style={{ backgroundImage: "url('/industry-night.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent via-[40%] to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content Area */}
          <div className="lg:col-span-6 space-y-6 relative">
            <SectionLabel>{expertiseT.tag}</SectionLabel>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-white tracking-tight leading-tight">
              {expertiseT.titlePart1}
              <span className="text-[#FF5500] block mt-1">{expertiseT.titleHighlight}</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              {expertiseT.subtitle}
            </p>

            <div className="w-14 h-1 bg-[#FF5500] rounded-full" />

            {/* 5 Service Item Cards */}
            <div className="space-y-3 pt-2">
              {expertiseT.items.map((item, idx) => {
                const Icon = serviceIcons[idx] ?? Factory;
                return (
                  <div
                    key={idx}
                    className="flex items-center rounded-xl bg-[#0A1628] border border-white/10 hover:border-[#FF5500]/60 transition-all group overflow-hidden shadow-lg"
                  >
                    {/* Orange Left Badge */}
                    <div className="flex items-center justify-center w-14 sm:w-16 self-stretch bg-[#FF5500] text-white font-black text-lg flex-shrink-0">
                      {item.number}
                    </div>

                    {/* Content Block */}
                    <div className="flex items-center gap-3.5 flex-1 px-4 py-3 min-w-0">
                      <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#FF5500]/50 transition-colors">
                        <Icon className="w-5 h-5 text-white group-hover:text-[#FF5500] transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs sm:text-sm font-black text-white tracking-wider uppercase group-hover:text-[#FF5500] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug font-normal line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#FF5500] flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Floating Focus Card (Desktop & Mobile) */}
          <div className="lg:col-span-6 lg:col-start-7 flex items-end lg:justify-end lg:pt-48">
            <div className="bg-[#0A1628]/90 backdrop-blur-md border border-white/20 rounded-xl p-5 space-y-4 shadow-2xl w-full max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#FF5500]/40 bg-[#FF5500]/10 flex items-center justify-center flex-shrink-0">
                  <Factory className="w-5 h-5 text-[#FF5500]" />
                </div>
                <p className="text-xs sm:text-sm font-black tracking-wide uppercase">
                  <span className="text-white">{focusCard.tag} </span>
                  <span className="text-[#FF5500]">{focusCard.title}</span>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/15 divide-x divide-white/15">
                {focusCard.outcomes?.map((label, i) => {
                  const OutcomeIcon = outcomeIcons[i];
                  return (
                    <div key={i} className="flex flex-col items-center text-center gap-1.5 px-2 first:pl-0 last:pr-0">
                      <OutcomeIcon className="w-4 h-4 text-[#FF5500]" />
                      <span className="text-[10px] sm:text-xs font-bold text-white/90 leading-tight">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
