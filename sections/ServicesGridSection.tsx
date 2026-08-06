"use client";

import React, { useState } from "react";
import {
  Calendar,
  ClipboardCheck,
  FileText,
  Handshake,
  Award,
  TrendingUp,
  ChevronRight,
  HardHat,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  MapPin,
  Cog,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_DATA } from "@/constants/siteData";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceModal } from "@/components/ui/ServiceModal";

const serviceIcons = [
  ClipboardCheck,
  Calendar,
  FileText,
  Handshake,
  Award,
  TrendingUp,
];

export const ServicesGridSection: React.FC = () => {
  const { t } = useLanguage();
  const servicesT = t.services;

  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    fullDetails: string;
  }>({ isOpen: false, title: "", description: "", fullDetails: "" });

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top Header with Image */}
      <div className="relative min-h-[440px] lg:min-h-[480px] bg-[#f8f8f7] flex items-center">
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-[52%] bg-cover bg-center bg-no-repeat diagonal-image-right"
          style={{ backgroundImage: "url('/refinery-sunset.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f7] via-[#f8f8f7]/95 to-transparent lg:via-[#f8f8f7]/60" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 w-full py-16 lg:py-20">
          <div className="max-w-[620px] space-y-4">
            <SectionLabel>{servicesT.tag}</SectionLabel>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
              {servicesT.titlePart1}
              <span className="text-[#FF5500]">{servicesT.titleHighlight}</span>
            </h2>

            <div className="w-12 h-1 bg-[#FF5500] rounded-full" />
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">{servicesT.subtitle}</p>
          </div>
        </div>
      </div>

      {/* 6 White Card Grid */}
      <div className="bg-[#eef0f3] py-14 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesT.cards.map((card, idx) => {
              const Icon = serviceIcons[idx] ?? Cog;
              return (
                <div
                  key={card.id}
                  onClick={() =>
                    setActiveModal({
                      isOpen: true,
                      title: card.title,
                      description: card.description,
                      fullDetails: card.fullDetails || card.description,
                    })
                  }
                  className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-[#FF5500]/40 transition-all cursor-pointer group flex flex-col justify-between min-h-[190px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFF0E8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF5500] transition-colors">
                      <Icon className="w-6 h-6 text-[#FF5500] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h3 className="text-base sm:text-lg font-black text-black leading-snug group-hover:text-[#FF5500] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end pt-4">
                    <ChevronRight className="w-5 h-5 text-[#FF5500] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Callout Banner */}
      <div className="bg-[#050C18] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="bg-[#0A1628] rounded-2xl border border-white/15 p-7 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex items-start gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#FF5500] bg-[#FF5500]/10 flex items-center justify-center flex-shrink-0">
                  <HardHat className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF5500]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    {servicesT.banner.title}
                  </h3>
                  <p className="text-lg sm:text-xl font-black text-[#FF5500]">
                    {servicesT.banner.highlight}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    {servicesT.banner.desc}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3.5 lg:justify-end">
                <a
                  href={`tel:${SITE_DATA.phoneRaw}`}
                  className="inline-flex flex-col items-center justify-center gap-0.5 px-6 py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white transition-colors shadow-lg shadow-orange-500/20 text-center min-w-[180px]"
                >
                  <span className="flex items-center gap-2 text-xs font-black tracking-wider uppercase">
                    <Phone className="w-4 h-4" />
                    {servicesT.banner.callBtn}
                  </span>
                  <span className="text-xs font-bold opacity-90">{SITE_DATA.phonePrimary}</span>
                </a>
                <a
                  href={SITE_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center justify-center gap-0.5 px-6 py-3.5 rounded-xl bg-transparent border border-white/40 hover:border-[#FF5500] text-white transition-colors text-center min-w-[180px]"
                >
                  <span className="flex items-center gap-2 text-xs font-black tracking-wider uppercase">
                    <MessageSquare className="w-4 h-4" />
                    {servicesT.banner.waBtn}
                  </span>
                  <span className="text-xs font-medium opacity-80">{servicesT.banner.waBtnSub}</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF5500]" />
                {servicesT.banner.hours}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF5500]" />
                {servicesT.banner.email}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                {servicesT.banner.location}
              </span>
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
