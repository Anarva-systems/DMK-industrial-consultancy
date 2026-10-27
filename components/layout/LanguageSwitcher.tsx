"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/types";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggle = (lang: Language) => {
    if (language !== lang) {
      setLanguage(lang);
    }
  };

  return (
    <div
      className="inline-flex items-center p-0.5 rounded-full bg-[#0F281E]/[0.06] border border-[#0F281E]/10 shadow-inner backdrop-blur-md"
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => handleToggle("en")}
        aria-pressed={language === "en"}
        className={`px-3 py-1 text-[11px] font-bold tracking-wider rounded-full transition-all cursor-pointer ${
          language === "en"
            ? "bg-[#FF5500] text-white shadow-sm shadow-orange-500/30 scale-[1.02]"
            : "text-[#0F281E]/75 hover:text-[#0F281E] hover:bg-white/80"
        }`}
      >
        ENG
      </button>
      <button
        type="button"
        onClick={() => handleToggle("te")}
        aria-pressed={language === "te"}
        className={`px-3 py-1 text-[11px] font-bold tracking-wider rounded-full transition-all cursor-pointer ${
          language === "te"
            ? "bg-[#FF5500] text-white shadow-sm shadow-orange-500/30 scale-[1.02]"
            : "text-[#0F281E]/75 hover:text-[#0F281E] hover:bg-white/80"
        }`}
      >
        తెలుగు
      </button>
    </div>
  );
};

