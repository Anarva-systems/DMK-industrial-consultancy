"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_DATA } from "@/constants/siteData";
import { PolicyModal } from "../ui/PolicyModal";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const footerT = t.footer;

  const [policyType, setPolicyType] = useState<"privacy" | "terms" | null>(null);
  const [year, setYear] = useState<number>(2026);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const video = videoRef.current;
    if (!video) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      video.removeAttribute("autoplay");
      video.pause();
      return;
    }

    // IntersectionObserver for viewport-aware playback
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {
                // Ignore autoplay/promise rejection if browser blocks
              });
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(video);
      return () => observer.disconnect();
    }
  }, []);

  // Line 1: Primary Navigation
  const navLinks = [
    { label: t.nav.home, href: "#home", isAction: false },
    { label: t.nav.about, href: "#about", isAction: false },
    { label: t.nav.services, href: "#services", isAction: false },
    { label: t.nav.contact, href: "#contact", isAction: false },
  ];

  // Line 2: Policies & Regional HQ
  const policyLinks = [
    { label: footerT.privacyPolicy, action: () => setPolicyType("privacy"), isAction: true },
    { label: footerT.termsConditions, action: () => setPolicyType("terms"), isAction: true },
    {
      label: "Srikakulam, AP",
      href: SITE_DATA.mapsUrl || "https://maps.google.com/?q=DMK+Industrial+Consultancy+Srikakulam",
      isAction: false,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  // Line 3: Direct Contact Channels
  const contactLinks = [
    {
      label: "+91 91000 44011",
      href: `tel:${SITE_DATA.phoneRaw || "+919100044011"}`,
      isAction: false,
    },
    {
      label: "WhatsApp",
      href: SITE_DATA.whatsappUrl || "https://wa.me/919100044011?text=Hello%20DMK%20Industrial%20Consultancy,%20I%20would%20like%20to%20discuss%20my%20industrial%20project%20requirement.",
      isAction: false,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "dmkindustrialconsultancy@gmail.com",
      href: `mailto:${SITE_DATA.email || "dmkindustrialconsultancy@gmail.com"}`,
      isAction: false,
    },
  ];

  return (
    <>
      <footer className="footer" id="meridian-footer">
        {/* DOM Order 1 (Visual Order 2): Engraved Viaduct Background Video */}
        <video
          ref={videoRef}
          className="footer__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260928_144832_2b6b23aa-4416-4fcb-9df4-132349c59edc.mp4"
            type="video/mp4"
          />
        </video>

        {/* DOM Order 2 (Visual Order 1): Centered Content Stack */}
        <div className="footer__content">
          {/* (a) Official DMK Logo */}
          <img
            src="/logo.png"
            alt="DMK Industrial Consultancy"
            className="footer__mark rounded-md shadow-sm border border-[#2b3a30]/15 bg-white p-0.5 object-contain"
          />

          {/* (b) Wordmark — lowercase Fraunces serif */}
          <p className="footer__brand">
            <a aria-label="DMK Industrial Consultancy home">
              DMK industrial consultancy
            </a>
          </p>

          {/* (c) Tagline */}
          <p className="footer__tagline">
            {footerT.desc || "Professional Industrial Consultancy Providing Practical Guidance For Planning, Development And Execution Of Industrial Projects."}
          </p>

          {/* (d) Three Balanced Lines for Mobile & Desktop */}
          <nav className="footer__nav" aria-label="Footer">
            {/* Line 1: Primary Navigation */}
            <ul className="footer__nav-row footer__nav-row--primary">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} aria-label={item.label}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Line 2: Policies & Location */}
            <ul className="footer__nav-row footer__nav-row--policy">
              {policyLinks.map((item, idx) => (
                <li key={idx}>
                  {item.isAction ? (
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={item.action}
                      aria-label={item.label}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={item.target}
                      rel={item.rel}
                      aria-label={item.label}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Line 3: Direct Contact Channels */}
            <ul className="footer__nav-row footer__nav-row--sub">
              {contactLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    aria-label={item.label}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Address location note */}
          <p className="text-[11.5px] text-[#6b746c] mt-2 font-normal tracking-wide">
            Opposite DLTC ITI, Bondilipuram, Srikakulam, Andhra Pradesh - 532001
          </p>

          {/* (e) Copyright & Attribution */}
          <p className="footer__copy !mt-1.5">
            © <span id="year">{year}</span> DMK Industrial Consultancy. All Rights Reserved. • Website by{" "}
            <a href="https://anarva.online" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2b3a30]">Anarva</a>
          </p>
        </div>
      </footer>

      {/* Policy Modal for Privacy & Terms dialogs */}
      <PolicyModal
        isOpen={policyType !== null}
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </>
  );
};
