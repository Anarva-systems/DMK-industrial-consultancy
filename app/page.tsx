import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EditorialGrainOverlay } from "@/components/ui/EditorialGrainOverlay";
import { HeroSection } from "@/sections/HeroSection";
import { EditorialStatementSection } from "@/sections/EditorialStatementSection";
import { EditorialDossierSection } from "@/sections/EditorialDossierSection";
import { AchievementsSection } from "@/sections/AchievementsSection";
import { ServicesGridSection } from "@/sections/ServicesGridSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F6F0] text-[#0F281E] overflow-x-hidden selection:bg-[#FF5500] selection:text-white relative">
      {/* Editorial tactile paper grain texture overlay */}
      <EditorialGrainOverlay />

      {/* Floating navigation with segmented language switch & footer auto-hide */}
      <Navbar />

      {/* 1. Hero with documentary photography & 3D carousel */}
      <HeroSection />

      {/* 2. Editorial Statement with inline circular photo pills & emblem */}
      <EditorialStatementSection />

      {/* 3. Quick Facts Editorial Dossier with 48-tick rotating badge & hairlines table */}
      <EditorialDossierSection />

      {/* 4. Falcon AI Operations Overview Triptych (Our Services) */}
      <ServicesGridSection />

      {/* 5. Elo One Case Studies & Measurable Industrial Results */}
      <AchievementsSection />

      {/* 6. Execution Methodology & Process Dossier */}
      <ProcessSection />

      {/* 7. Direct Consultation & Contact Dossier */}
      <ContactSection />

      {/* 8. Meridian Viaduct Full-Viewport Engraved Footer */}
      <Footer />
    </main>
  );
}
