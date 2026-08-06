"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "../ui/Button";

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3 lg:py-4"
          : "bg-gradient-to-b from-black/95 via-navy-950/70 to-transparent border-b border-white/15 py-4 lg:py-6"
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Original DMK mark supplied with the visual design */}
        <a href="#home" className="flex items-center group" aria-label="DMK Industrial Consultancy home">
          <img
            src="/logo.png"
            alt="DMK Industrial Consultancy"
            className="h-14 w-14 rounded-sm object-contain bg-white transition-transform duration-200 group-hover:scale-105 lg:h-[78px] lg:w-[78px]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative text-xs font-bold tracking-widest transition-colors py-1 ${
                  isActive ? "text-[#FF5500]" : "text-gray-100 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5500] rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Language Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button href="#contact" variant="primary" size="lg" showArrow className="min-w-[215px] lg:min-w-[280px] rounded-xl">
            {t.nav.getConsultation}
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white bg-navy-850 border border-white/10 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold tracking-wider py-2 border-b border-white/5 ${
                  activeSection === link.id
                    ? "text-[#FF5500] pl-2 border-l-2 border-l-[#FF5500]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              showArrow
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.getConsultation}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
