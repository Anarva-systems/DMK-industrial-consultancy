"use client";

import React from "react";
import {
  MapPin,
  Settings,
  Users,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Headphones,
  Quote,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const aboutT = t.about;

  const cardIcons = [MapPin, Settings, Users];
  const badgeIcons = [ShieldCheck, TrendingUp, Handshake, Headphones];

  return (
    <section id="about" className="overflow-hidden bg-white">
      {/* ── TOP HERO AREA ── */}
      <div className="relative bg-[#FAFAFA] overflow-hidden min-h-[600px] lg:min-h-[660px]">
        {/* Background photo filling full vertical height on right with diagonal clip path */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-[52%] bg-cover bg-center bg-no-repeat diagonal-image-right"
          style={{ backgroundImage: "url('/about-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/95 via-[45%] to-transparent lg:via-[#FAFAFA]/60 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 pt-16 lg:pt-20 pb-12 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
            {/* Left Content Area */}
            <div className="lg:col-span-6 space-y-6 pt-2">
              <SectionLabel>{aboutT.tag}</SectionLabel>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight leading-[1.18] text-black">
                <span>{aboutT.titlePart1}</span>
                {aboutT.titlePart2 && <span className="block">{aboutT.titlePart2}</span>}
                <span className="text-[#FF5500] block mt-1">{aboutT.titleHighlight}</span>
              </h2>

              <div className="w-14 h-1 bg-[#FF5500] rounded-full transition-all duration-300 hover:w-20" />

              <div className="space-y-4 text-xs sm:text-sm lg:text-base leading-relaxed text-gray-700 font-normal max-w-lg">
                <p>{aboutT.paragraph}</p>
              </div>
            </div>

            {/* Right Overlapping Angled Dark Container Cards (01, 02, 03) */}
            <div className="lg:col-span-6 lg:mt-32">
              <div className="bg-[#060D1E] rounded-2xl lg:rounded-tl-[2.5rem] lg:rounded-tr-none border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#FF5500]/40 hover:shadow-orange-500/10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
                  {aboutT.cards.map((card, index) => {
                    const Icon = cardIcons[index] ?? MapPin;
                    return (
                      <div
                        key={card.number}
                        className="pt-5 sm:pt-0 first:pt-0 sm:px-4 first:pl-0 last:pr-0 space-y-3 flex flex-col items-start group"
                      >
                        <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#FF5500] group-hover:bg-[#FF5500]/10 transition-all duration-300">
                          <Icon className="h-5 w-5 text-[#FF5500] group-hover:scale-110 transition-transform" />
                        </div>
                        <p className="text-xl font-black text-[#FF5500] leading-none pt-1">
                          {card.number}
                        </p>
                        <h3 className="text-xs sm:text-sm font-black leading-tight tracking-wider text-white uppercase group-hover:text-[#FF5500] transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs leading-relaxed text-slate-300 font-normal">
                          {card.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4 TRUST BADGES BAR ── */}
      <div className="bg-white py-8 lg:py-10 border-t border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 gap-6 sm:gap-0">
            {aboutT.badges.map((badge, index) => {
              const Icon = badgeIcons[index] ?? ShieldCheck;
              return (
                <div
                  key={badge.title}
                  className="flex items-start gap-4 px-3 sm:px-6 py-2 first:pl-0 last:pr-0 group cursor-default"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-black mt-0.5 shadow-md group-hover:bg-[#FF5500] transition-colors duration-300">
                    <Icon className="h-6 w-6 text-[#FF5500] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-black leading-tight tracking-wider text-black uppercase group-hover:text-[#FF5500] transition-colors">
                      {badge.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                      {badge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── QUOTE FOOTER BANNER ── */}
      <div className="relative overflow-hidden bg-[#060D1E] py-10 lg:py-12 border-t border-white/10">
        <div
          className="absolute inset-0 blueprint-bg opacity-15"
          style={{ backgroundImage: "url('/blueprint-bg.jpg')" }}
        />
        <div className="relative z-10 max-w-[1180px] mx-auto flex items-start sm:items-center gap-4 px-5 sm:px-8">
          <Quote className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 fill-[#FF5500] text-[#FF5500] mt-1 sm:mt-0 animate-pulse" />
          <div className="space-y-1">
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed">
              {aboutT.quotePart1}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-[#FF5500] font-black leading-relaxed">
              {aboutT.quotePart2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
