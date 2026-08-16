"use client";

import React from "react";
import { Users, Calendar, HardHat, Cog, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";

const statIcons = [Users, Calendar, HardHat, Cog, MapPin];

export const AchievementsSection: React.FC = () => {
  const { t } = useLanguage();
  const achieveT = t.achievements;

  return (
    <section className="bg-[#f5f6f8] py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 space-y-12">
        <div className="text-center space-y-3">
          <SectionLabel centered>{achieveT.tag}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            {achieveT.titlePart1}
            <span className="text-[#FF5500]">{achieveT.titleHighlight}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed pt-1">
            {achieveT.subtitle}
          </p>
          <div className="mx-auto w-12 h-1 bg-[#FF5500] rounded-full mt-2" />
        </div>

        {/* 5 Stats Container Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
            {achieveT.stats.map((stat, idx) => {
              const Icon = statIcons[idx] ?? Users;
              const isLastOdd = idx === 4;
              return (
                <div
                  key={idx}
                  className={`p-5 sm:p-7 text-center space-y-2.5 sm:space-y-3.5 flex flex-col items-center justify-start hover:bg-slate-50/60 transition-colors ${
                    isLastOdd ? "col-span-2 sm:col-span-1 border-t sm:border-t-0" : ""
                  }`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF0E8] flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5500]" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#050C18] tracking-tight">
                    {stat.value}
                  </div>
                  <h3 className="text-[11px] sm:text-xs lg:text-sm font-black text-[#FF5500] uppercase tracking-wider">
                    {stat.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-normal">
                    {stat.description}
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
