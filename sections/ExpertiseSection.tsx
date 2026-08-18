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
    <section id="services" className="bg-[#050C18] relative overflow-hidden py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-6 space-y-5">
            <SectionLabel>{expertiseT.tag}</SectionLabel>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {expertiseT.titlePart1}
              <span className="text-[#FF5500]">{expertiseT.titleHighlight}</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              {expertiseT.subtitle}
            </p>

            <div className="w-12 h-1 bg-[#FF5500] rounded-full" />

            <div className="space-y-2.5 pt-1">
              {expertiseT.items.map((item, idx) => {
                const Icon = serviceIcons[idx] ?? Factory;
                return (
                  <div
                    key={idx}
                    className="flex items-center rounded-xl bg-[#0A1628] border border-white/10 hover:border-[#FF5500]/50 transition-all group overflow-hidden shadow-sm"
                  >
                    <div className="flex items-center justify-center w-11 py-3 bg-[#FF5500] text-white font-black text-sm flex-shrink-0">
                      {item.number}
                    </div>
                    <div className="flex items-center gap-3.5 flex-1 px-3.5 py-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#FF5500]/50 transition-colors">
                        <Icon className="w-4 h-4 text-white group-hover:text-[#FF5500] transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs sm:text-xs font-black text-white tracking-wider uppercase group-hover:text-[#FF5500] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug font-normal line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF5500] flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side Image + Overlay Card */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl min-h-[340px] sm:min-h-[400px] lg:min-h-[460px] border border-white/10 flex items-end">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: "url('/industry-night.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050C18] via-[#050C18]/40 to-transparent" />

            {/* Floating Focus Card */}
            <div className="relative z-10 p-4 sm:p-6 w-full">
              <div className="bg-[#0A1628]/95 backdrop-blur-md border border-white/20 rounded-xl p-4 space-y-3 shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <Factory className="w-5 h-5 text-[#FF5500] flex-shrink-0" />
                  <p className="text-xs font-black tracking-wide uppercase">
                    <span className="text-white">{focusCard.tag} </span>
                    <span className="text-[#FF5500]">{focusCard.title}</span>
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-white/15">
                  {focusCard.outcomes?.map((label, i) => {
                    const OutcomeIcon = outcomeIcons[i];
                    return (
                      <div key={i} className="flex flex-col items-center text-center gap-1">
                        <OutcomeIcon className="w-4 h-4 text-[#FF5500]" />
                        <span className="text-[10px] sm:text-[11px] font-bold text-white/90 leading-tight">
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
      </div>
    </section>
  );
};
