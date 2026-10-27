"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TranslationStructure } from "@/types";
import { translations } from "@/constants/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStructure;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("dmk_lang") as Language;
    const activeLang = savedLang === "en" || savedLang === "te" ? savedLang : "en";
    setLanguageState(activeLang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = activeLang;
      document.documentElement.classList.toggle("lang-te", activeLang === "te");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("dmk_lang", lang);
      } catch (err) {
        console.warn("Could not save language to localStorage:", err);
      }
      document.documentElement.lang = lang;
      document.documentElement.classList.toggle("lang-te", lang === "te");
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
