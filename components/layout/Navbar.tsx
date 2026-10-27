"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [inFooter, setInFooter] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check if user reached or entered the full-viewport footer
      const footerEl = document.getElementById("meridian-footer");
      if (footerEl) {
        const footerRect = footerEl.getBoundingClientRect();
        // Cleanly hide navbar as footer approaches top of screen to prevent overlap with logo
        setInFooter(footerRect.top <= 120);
      } else {
        setInFooter(false);
      }

      // Section highlight observer
      const sections = ["home", "about", "services", "process", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home", id: "home" },
    { name: t.nav.about, href: "#about", id: "about" },
    { name: t.nav.services, href: "#services", id: "services" },
    { name: t.nav.process, href: "#process", id: "process" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 pointer-events-none px-3 sm:px-6 pt-3 sm:pt-4 ${
        inFooter ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Floating Capsule Bar */}
      <div
        className={`pointer-events-auto max-w-[1240px] mx-auto flex items-center justify-between gap-3 sm:gap-4 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-2xl border border-[#0F281E]/12 shadow-[0_12px_36px_-10px_rgba(15,40,30,0.15)] px-3.5 sm:px-5 py-2 sm:py-2.5"
            : "bg-white/80 backdrop-blur-xl border border-[#0F281E]/10 shadow-[0_8px_24px_-10px_rgba(15,40,30,0.08)] px-4 sm:px-6 py-2 sm:py-2.5"
        }`}
      >
        {/* Brand Logo & Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="DMK Industrial Consultancy home"
        >
          <div className="relative p-1 bg-white rounded-xl border border-[#0F281E]/12 shadow-xs transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo.png"
              alt="DMK Industrial Consultancy"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-serif font-black text-[13px] sm:text-sm tracking-tight text-[#0F281E] group-hover:text-[#FF5500] transition-colors">
              DMK
            </span>
            <span className="text-[8.5px] sm:text-[9px] font-extrabold uppercase tracking-widest text-[#FF5500]">
              Consultancy
            </span>
          </div>
        </a>

        {/* Desktop & Tablet Segmented Navigation Capsule */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-[#0F281E]/[0.04] border border-[#0F281E]/[0.06] rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 lg:px-4 py-1.5 rounded-full text-[11px] lg:text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-[#0F281E] text-white shadow-xs"
                    : "text-[#0F281E]/75 hover:text-[#0F281E] hover:bg-white/80"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Language Toggle */}
        <div className="hidden md:flex items-center gap-2.5 sm:gap-3 shrink-0">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap group"
          >
            <span>{t.nav.getConsultation}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 text-[#0F281E] hover:text-[#FF5500] bg-[#0F281E]/[0.05] hover:bg-white border border-[#0F281E]/10 rounded-full focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Floating Frosted Card beneath capsule) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden max-w-[1240px] mx-auto mt-2 bg-white/95 backdrop-blur-2xl border border-[#0F281E]/10 rounded-3xl p-5 shadow-2xl animate-in slide-in-from-top-4 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold tracking-wider py-2.5 px-3 rounded-xl transition-all ${
                  activeSection === link.id
                    ? "bg-[#0F281E] text-white"
                    : "text-[#0F281E]/80 hover:bg-[#0F281E]/[0.05] hover:text-[#0F281E]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#0F281E]/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#FF5500] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-orange-500/25"
            >
              <span>{t.nav.getConsultation}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
