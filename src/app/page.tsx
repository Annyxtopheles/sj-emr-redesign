"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import DoctorWorkflowInteractive from "@/components/DoctorWorkflowInteractive";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import DemoBookingForm from "@/components/DemoBookingForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [selectedPlan, setSelectedPlan] = useState<string>("Essential Plus (10000 BDT/Year)");

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <main
      className={`min-h-screen flex flex-col bg-[#fafbfc] ${language === "bn" ? "font-bangla" : ""}`}
      lang={language}
    >
      {/* Sticky Navigation */}
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Hero with Live Software Screenshot Preview */}
      <HeroSection language={language} />

      {/* Institutional Trust & Accreditations */}
      <TrustBar language={language} />

      {/* Problem vs Solution Comparison */}
      <ProblemSolution language={language} />

      {/* 8 Core Features Deep Dive */}
      <FeatureDeepDive language={language} />

      {/* 60-Second Doctor Chamber Workflow */}
      <DoctorWorkflowInteractive language={language} />

      {/* Transparent BDT Pricing with 58% Discount Toggle */}
      <PricingSection language={language} onSelectPlan={handleSelectPlan} />

      {/* Real Doctor Testimonials & Medical Credentials */}
      <TestimonialSection language={language} />

      {/* Interactive BMDC Doctor Verification & Zoom Demo Scheduler */}
      <DemoBookingForm language={language} selectedPlan={selectedPlan} />

      {/* FAQ on BMDC Compliance, Security & Chamber Setup */}
      <FAQSection language={language} />

      {/* Global & Bangladesh Regional Footer */}
      <Footer language={language} />
    </main>
  );
}
