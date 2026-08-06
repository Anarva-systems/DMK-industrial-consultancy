import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { InvolveSection } from "@/sections/InvolveSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExpertiseSection } from "@/sections/ExpertiseSection";
import { ServicesGridSection } from "@/sections/ServicesGridSection";
import { AchievementsSection } from "@/sections/AchievementsSection";
import { SolutionsSection } from "@/sections/SolutionsSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white overflow-x-hidden selection:bg-[#FF5500] selection:text-white">
      <Navbar />
      <HeroSection />
      <InvolveSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesGridSection />
      <AchievementsSection />
      <SolutionsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
