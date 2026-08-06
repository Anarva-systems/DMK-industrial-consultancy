"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ClipboardCheck,
  Cog,
  Factory,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cardIcons = [Factory, TrendingUp, ClipboardCheck, ShieldCheck];

export const SolutionsSection: React.FC = () => {
  const { t } = useLanguage();
  const solutionsT = t.solutions;

  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    fullDetails: string;
  }>({ isOpen: false, title: "", description: "", fullDetails: "" });

  return (
    <section className="bg-[#050C18] py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10 space-y-12">
        <div className="text-center space-y-3">
          <SectionLabel centered>{solutionsT.tag}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {solutionsT.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 4 Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solutionsT.cards.map((card, idx) => {
              const Icon = cardIcons[idx] ?? Cog;
              return (
                <div
                  key={card.id}
                  onClick={() =>
                    setActiveModal({
                      isOpen: true,
                      title: card.title,
                      description: card.description,
                      fullDetails: card.description,
                    })
                  }
                  className="rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#FF5500]/50 transition-all bg-[#0A1628] flex flex-col justify-between shadow-md"
                >
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent" />
                  </div>
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-5 h-5 text-[#FF5500] flex-shrink-0" />
                        <h3 className="text-base font-black text-white tracking-wide">{card.title}</h3>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">{card.description}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#FF5500] text-xs font-black uppercase tracking-wider pt-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side Featured Card */}
          <div className="lg:col-span-4">
            <div className="h-full rounded-xl bg-[#0A1628] border border-white/15 p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6 text-[#FF5500]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {solutionsT.sideCard.title}
                </h3>
                <div className="w-12 h-1 bg-[#FF5500] rounded-full" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {solutionsT.sideCard.subtitle}
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-black tracking-wider uppercase transition-colors shadow-lg shadow-orange-500/20"
              >
                {solutionsT.sideCard.btn}
              </a>
            </div>
          </div>
        </div>
      </div>

      <ServiceModal
        isOpen={activeModal.isOpen}
        title={activeModal.title}
        description={activeModal.description}
        fullDetails={activeModal.fullDetails}
        onClose={() => setActiveModal({ isOpen: false, title: "", description: "", fullDetails: "" })}
        onConsult={() => {
          setActiveModal({ isOpen: false, title: "", description: "", fullDetails: "" });
          window.location.hash = "contact";
        }}
      />
    </section>
  );
};
