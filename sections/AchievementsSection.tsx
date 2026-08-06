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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
            {achieveT.stats.map((stat, idx) => {
              const Icon = statIcons[idx] ?? Users;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 text-center space-y-3.5 flex flex-col items-center justify-start hover:bg-slate-50/60 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-[#FFF0E8] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#FF5500]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#050C18] tracking-tight">
                    {stat.value}
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-[#FF5500] uppercase tracking-wider">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
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
