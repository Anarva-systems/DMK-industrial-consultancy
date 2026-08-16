"use client";

import React from "react";
import { Phone, MessageSquare, ShieldCheck, UserCheck, Clock, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactForm } from "@/components/ui/ContactForm";
import { SITE_DATA } from "@/constants/siteData";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const contactT = t.contactSection;

  const guarantees = [
    {
      icon: ShieldCheck,
      title: contactT.guarantees[0].title,
      description: contactT.guarantees[0].description,
    },
    {
      icon: UserCheck,
      title: contactT.guarantees[1].title,
      description: contactT.guarantees[1].description,
    },
    {
      icon: Clock,
      title: contactT.guarantees[2].title,
      description: contactT.guarantees[2].description,
    },
    {
      icon: Target,
      title: contactT.guarantees[3].title,
      description: contactT.guarantees[3].description,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050C18]">
      {/* ── TOP HERO CONTACT & FORM ── */}
      <div className="relative min-h-[640px] flex items-center py-16 lg:py-24">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/refinery-sunset.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050C18] via-[#050C18]/95 via-[55%] to-[#050C18]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050C18] via-transparent to-[#050C18]/50" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel>{contactT.tag}</SectionLabel>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                {contactT.titlePart1}
                <br />
                <span className="text-[#FF5500]">{contactT.titleHighlight}</span>
              </h2>

              <div className="w-12 h-1 bg-[#FF5500] rounded-full" />

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg font-normal">
                {contactT.subtitle}
              </p>

              {/* Call & WhatsApp Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={`tel:${SITE_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-black tracking-wider uppercase transition-colors shadow-lg shadow-orange-500/25 min-w-[200px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactT.callBtn}</span>
                </a>

                <a
                  href={SITE_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-transparent border border-white/40 hover:border-[#FF5500] text-white text-xs font-black tracking-wider uppercase transition-colors min-w-[200px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{contactT.waBtn}</span>
                </a>
              </div>
            </div>

            {/* Right White Form Box */}
            <div className="lg:col-span-6 lg:pl-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM 4 GUARANTEES BAR ── */}
      <div className="bg-white border-t border-slate-200 py-8 lg:py-10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 gap-6 sm:gap-0">
            {guarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 px-2 sm:px-6 py-2 first:pl-0 last:pr-0"
                >
                  <div className="w-10 h-10 rounded-full border border-[#FF5500]/30 bg-[#FFF0E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#FF5500]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-xs lg:text-sm font-black text-[#050C18] uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
