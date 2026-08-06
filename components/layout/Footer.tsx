"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ExternalLink, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_DATA } from "@/constants/siteData";
import { PolicyModal } from "../ui/PolicyModal";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const footerT = t.footer;

  const [policyType, setPolicyType] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <footer className="bg-[#050C18] border-t border-white/10 pt-16 pb-8 text-gray-300 relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF5500]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Info Column (col-span-4) */}
            <div className="md:col-span-4 space-y-4">
              <a href="#home" className="flex items-center gap-3 inline-block">
                <img
                  src="/logo.png"
                  alt="DMK Industrial Consultancy"
                  className="h-16 w-16 rounded-md object-contain bg-white p-1 border border-white/20 shadow-md"
                />
              </a>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm pt-2">
                {footerT.desc}
              </p>
            </div>

            {/* Contact Us Column (col-span-3) */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-black tracking-widest text-[#FF5500] uppercase">
                {footerT.contactHeader}
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm font-normal">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FF5500] flex-shrink-0" />
                  <a
                    href={`tel:${SITE_DATA.phoneRaw}`}
                    className="hover:text-white transition-colors"
                  >
                    {SITE_DATA.phonePrimary}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-[#FF5500] flex-shrink-0" />
                  <a
                    href={SITE_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {SITE_DATA.phoneSecondary}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FF5500] flex-shrink-0" />
                  <a
                    href={`mailto:${SITE_DATA.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {SITE_DATA.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Official Location Column with Map Preview (col-span-5) */}
            <div className="md:col-span-5 space-y-4">
              <h4 className="text-xs font-black tracking-widest text-[#FF5500] uppercase">
                {footerT.locationHeader}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-[#FF5500] flex-shrink-0 mt-1" />
                    <p className="text-slate-300 whitespace-pre-line leading-relaxed font-normal">
                      {footerT.locationAddress}
                    </p>
                  </div>

                  <div className="pt-1">
                    <a
                      href={SITE_DATA.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#0A1628] hover:bg-[#12223c] border border-white/20 rounded-lg text-xs font-bold text-white transition-all group"
                    >
                      <span>{footerT.viewMapBtn}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FF5500]" />
                    </a>
                  </div>
                </div>

                {/* Map Thumbnail Card */}
                <div className="rounded-xl overflow-hidden border border-white/15 h-28 relative group cursor-pointer shadow-md">
                  <a href={SITE_DATA.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=18.2969,83.8968&zoom=14&size=400x200&sensor=false&markers=color:orange%7Clabel:D%7C18.2969,83.8968&key=')`,
                        backgroundColor: '#1E293B'
                      }}
                    >
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                        <span className="text-[10px] font-black uppercase text-white bg-black/70 px-2 py-1 rounded backdrop-blur-sm border border-white/20">
                          Srikakulam, AP
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              <p>{footerT.rights}</p>
            </div>

            <div className="flex items-center gap-6" suppressHydrationWarning>
              <button
                onClick={() => setPolicyType("privacy")}
                className="hover:text-white transition-colors cursor-pointer"
                suppressHydrationWarning
              >
                {footerT.privacyPolicy}
              </button>
              <span>•</span>
              <button
                onClick={() => setPolicyType("terms")}
                className="hover:text-white transition-colors cursor-pointer"
                suppressHydrationWarning
              >
                {footerT.termsConditions}
              </button>
            </div>

            <div>
              <p className="text-slate-400">
                Website by <span className="text-[#FF5500] font-bold">Anarva Systems</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <PolicyModal
        isOpen={policyType !== null}
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </>
  );
};
