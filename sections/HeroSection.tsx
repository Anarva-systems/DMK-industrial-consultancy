"use client";

import React from "react";
import { Phone, Users, Calendar, Settings, MapPin, Headphones, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_DATA } from "@/constants/siteData";

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const heroT = t.hero;

  return (
    <section
      id="home"
      className="relative min-h-[760px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Full-bleed Background Image — fills entire hero */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero-bg.jpg')` }}
      />
      {/* Dark overlay — heavier on left so text is readable */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 via-[42%] to-black/10" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

      <div className="relative z-10 max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-10 w-full pt-28 lg:pt-32 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ── Left Column ── */}
          <div className="lg:col-span-8 space-y-6 lg:space-y-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-wide text-[#FF5500] uppercase">
                {heroT.tag}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-[800px] text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.35rem] font-extrabold text-white tracking-tight leading-[1.12]">
              {heroT.titlePart1}
              <span className="text-[#FF5500]">{heroT.titleHighlight}</span>
              {heroT.titlePart2}
            </h1>

            {/* Orange underline accent */}
            <div className="w-16 h-1 bg-[#FF5500]" />

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
              {heroT.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-4 px-7 py-4 bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-extrabold tracking-wide uppercase rounded-xl shadow-lg shadow-orange-500/30 transition-all"
              >
                <span>{heroT.btnDiscuss}</span>
                <span>→</span>
              </a>

              <a
                href={`tel:${SITE_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-black/30 border-2 border-white/80 hover:border-[#FF5500] text-white text-xs font-bold tracking-wide uppercase transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{heroT.btnCall}</span>
              </a>
            </div>

            {/* Bottom Feature Badges */}
            <div className="pt-6 grid grid-cols-3 gap-0 mt-3 max-w-[850px]">
              <div className="flex items-center gap-3 pr-5 border-r border-white/60">
                <ShieldCheck className="w-8 h-8 text-[#FF5500] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-200 leading-tight">
                  {heroT.badge1}
                </span>
              </div>
              <div className="flex items-center gap-3 px-5 border-r border-white/60">
                <MapPin className="w-8 h-8 text-[#FF5500] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-200 leading-tight">
                  {heroT.badge2}
                </span>
              </div>
              <div className="flex items-center gap-3 pl-5">
                <Headphones className="w-8 h-8 text-[#FF5500] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-200 leading-tight">
                  {heroT.badge3}
                </span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Fully Dark Glass Card ── */}
          <div className="lg:col-span-4 lg:-ml-8 xl:-ml-12">
            <div className="bg-black/80 border border-white/60 rounded-2xl p-7 lg:p-8 relative overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* Orange top accent bar */}

              <div className="space-y-6">
                {/* Tag */}
                <div>
                  <span className="text-sm font-extrabold text-[#FF5500] tracking-wide uppercase">
                    {heroT.cardTag}
                  </span>
                  <div className="w-12 h-1 bg-[#FF5500] mt-3" />
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-[1.8rem] font-bold text-white leading-[1.15]">
                  {heroT.cardTitle}
                </h3>

                {/* Steps */}
                <div className="border-t border-white/20 pt-4">
                  {[
                    { icon: <Users className="w-5 h-5" />, num: "01", label: heroT.step1 },
                    { icon: <Calendar className="w-5 h-5" />, num: "02", label: heroT.step2 },
                    { icon: <Settings className="w-5 h-5" />, num: "03", label: heroT.step3 },
                  ].map((step) => (
                    <div key={step.num} className="flex items-center gap-3 py-4 border-b border-white/15 last:border-b-0">
                      <div className="w-10 h-10 flex items-center justify-center text-white/80 flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-extrabold text-[#FF5500]">{step.num}</span>
                        <span className="text-base font-medium text-white/80">{step.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
