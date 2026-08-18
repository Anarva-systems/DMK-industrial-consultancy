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
    <section id="services" className="bg-[#050C18] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[760px]">
        {/* Left Side Content */}
        <div className="relative z-10 px-5 sm:px-8 lg:px-12 xl:px-16 py-20 lg:py-24 space-y-7 flex flex-col justify-center">
          <SectionLabel>{expertiseT.tag}</SectionLabel>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-xl">
            {expertiseT.titlePart1}
            <span className="text-[#FF5500]">{expertiseT.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
            {expertiseT.subtitle}
          </p>

          <div className="w-14 h-1 bg-[#FF5500] rounded-full" />

          <div className="space-y-3.5 pt-2">
            {expertiseT.items.map((item, idx) => {
              const Icon = serviceIcons[idx] ?? Factory;
              return (
                <div
                  key={idx}
                  className="flex items-center rounded-xl bg-[#0A1628] border border-white/10 hover:border-[#FF5500]/50 transition-all group overflow-hidden shadow-sm"
                >
                  <div className="flex items-center justify-center w-14 h-full min-h-[72px] bg-[#FF5500] text-white font-black text-lg flex-shrink-0">
                    {item.number}
                  </div>
                  <div className="flex items-center gap-4 flex-1 p-3.5 sm:p-4 min-w-0">
                    <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#FF5500]/50 transition-colors">
                      <Icon className="w-5 h-5 text-white group-hover:text-[#FF5500] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm font-black text-white tracking-wider uppercase group-hover:text-[#FF5500] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-snug font-normal line-clamp-2">
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

        {/* Right Side Image + Overlay Card */}
        <div className="relative min-h-[460px] lg:min-h-full flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/industry-night.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050C18] via-transparent to-transparent lg:hidden" />

          {/* Floating Focus Card */}
          <div className="relative z-10 p-5 sm:p-8 w-full max-w-xl mx-auto lg:max-w-none">
            <div className="bg-[#0A1628]/90 backdrop-blur-md border border-white/20 rounded-xl p-5 sm:p-6 space-y-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <Factory className="w-6 h-6 text-[#FF5500] flex-shrink-0" />
                <p className="text-xs sm:text-sm font-black tracking-wide uppercase">
                  <span className="text-white">{focusCard.tag} </span>
                  <span className="text-[#FF5500]">{focusCard.title}</span>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/15">
                {focusCard.outcomes?.map((label, i) => {
                  const OutcomeIcon = outcomeIcons[i];
                  return (
                    <div key={i} className="flex flex-col items-center text-center gap-1.5">
                      <OutcomeIcon className="w-5 h-5 text-[#FF5500]" />
                      <span className="text-[11px] sm:text-xs font-bold text-white/90 leading-tight">
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
