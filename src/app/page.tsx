"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MergedStats from "@/components/MergedStats";
import TrustBar from "@/components/TrustBar";
import VideoShowcase from "@/components/VideoShowcase";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import DoctorWorkflowInteractive from "@/components/DoctorWorkflowInteractive";
import GoPaperlessInteractive from "@/components/GoPaperlessInteractive";
import TeleradiologyShowcase from "@/components/TeleradiologyShowcase";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import DemoBookingForm from "@/components/DemoBookingForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "bn">("bn");
  const [selectedPlan, setSelectedPlan] = useState<string>("Essential Plus (10000 BDT/Year)");

  useEffect(() => {
    try {
      // Clear legacy localStorage override that was causing unwanted revert to English on reload
      localStorage.removeItem("sjemr_language");
    } catch {
      // ignore
    }
  }, []);

  const handleLanguageChange = (newLang: "en" | "bn") => {
    setLanguage(newLang);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#fafbfc]" lang={language}>
      {/* Sticky Navigation with Enlarged Logo */}
      <Navbar language={language} setLanguage={handleLanguageChange} />

      {/* Hero with Live Software Screenshot Preview */}
      <HeroSection language={language} />

      {/* Unified Key Performance & Impact Statistics */}
      <MergedStats language={language} />

      {/* Institutional Trust & Accreditations (BASIS, BMDC, SCCI) */}
      <TrustBar language={language} />

      {/* Official YouTube Video Showcase (Elevated: Real Walkthrough, Doctor Talks & Advocacy) */}
      <VideoShowcase language={language} />

      {/* 3 Core Pillars + 10 Specialized Clinical AI Tools from dev software */}
      <FeatureDeepDive language={language} />

      {/* 60-Second Mobile AI Prescription Wizard Workflow with Infographic KPI Stats */}
      <DoctorWorkflowInteractive language={language} />

      {/* 3D Interactive Paper Crumple "Go Paperless" Transformation Stage */}
      <GoPaperlessInteractive language={language} />

      {/* Teleradiology & Diagnostic Centers Portal (PACS DICOM Workstation Simulator) */}
      <TeleradiologyShowcase language={language} />

      {/* Real Doctor Testimonials & Medical Credentials */}
      <TestimonialSection language={language} />

      {/* Transparent BDT Pricing with 58% Discount Toggle */}
      <PricingSection language={language} onSelectPlan={handleSelectPlan} />

      {/* Interactive BMDC Doctor Verification & Zoom Demo Scheduler */}
      <DemoBookingForm language={language} selectedPlan={selectedPlan} />

      {/* FAQ on BMDC Compliance, Security & Chamber Setup */}
      <FAQSection language={language} />

      {/* Global & Bangladesh Regional Footer */}
      <Footer language={language} />
    </main>
  );
}
