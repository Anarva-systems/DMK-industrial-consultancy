"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/types";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider text-gray-200 bg-navy-850 hover:bg-navy-800 border border-white/15 rounded-md transition-all cursor-pointer"
        aria-label="Select Language"
      >
        <span>{language === "en" ? t.nav.eng : t.nav.tel}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-28 rounded-lg bg-navy-900 border border-white/15 shadow-2xl backdrop-blur-xl z-50 overflow-hidden py-1 animate-in fade-in zoom-in-95">
          <button
            onClick={() => handleSelect("en")}
            className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
              language === "en"
                ? "bg-[#FF5500] text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span>English</span>
            {language === "en" && <span>✓</span>}
          </button>
          <button
            onClick={() => handleSelect("te")}
            className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
              language === "te"
                ? "bg-[#FF5500] text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span>తెలుగు</span>
            {language === "te" && <span>✓</span>}
          </button>
        </div>
      )}
    </div>
  );
};
