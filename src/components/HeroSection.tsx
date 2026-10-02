"use client";

import { useState, useEffect } from "react";
import { FileText, Video, ArrowRight } from "lucide-react";
import SpecularButton from "@/components/ui/SpecularButton";
import { AuroraText } from "@/components/ui/AuroraText";
import { ProgressiveBlur } from "@/components/ui/ProgressiveBlur";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import {
  LiveDashboardScreen,
  LiveCalendarScreen,
  LiveActionsScreen,
} from "@/components/hero/LiveSoftwareScreens";

interface HeroSectionProps {
  language: "en" | "bn";
}

export default function HeroSection({ language }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"dashboard" | "calendar" | "actions">("dashboard");

  useEffect(() => {
    const keys: ("dashboard" | "calendar" | "actions")[] = ["dashboard", "calendar", "actions"];
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const nextIdx = (keys.indexOf(prev) + 1) % keys.length;
        return keys[nextIdx];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-10 pb-0 lg:pt-16 lg:pb-0 overflow-hidden">
      {/* Subtle Interactive Brand Green Background Ripple Grid */}
      <BackgroundRippleEffect
        rows={12}
        cols={34}
        cellSize={50}
        borderColor="rgba(16, 185, 129, 0.1)"
        fillColor="rgba(16, 185, 129, 0.02)"
        className="opacity-80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            {language === "en" ? (
              <>
                The{" "}
                <AuroraText>
                  #1 Doctor-First EMR
                </AuroraText>{" "}
                & Telemedicine Software in Bangladesh
              </>
            ) : (
              <>
                বাংলাদেশের চিকিৎসকদের জন্য{" "}
                <AuroraText>
                  #১ নির্ভরযোগ্য ইএমআর
                </AuroraText>{" "}
                ও টেলিমেডিসিন সফটওয়্যার
              </>
            )}
          </h1>

          {/* Reserved slot for Bangla supporting line (hidden until approved copy is supplied) */}
          <p
            lang="bn"
            data-slot="hero-bangla-support"
            data-approved="false"
            className="hidden font-sans text-lg sm:text-xl lg:text-2xl text-emerald-800 font-medium leading-relaxed max-w-2xl mx-auto mb-6"
          >
            [BANGLA LINE – APPROVED COPY NEEDED]
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            {language === "en"
              ? "Say goodbye to lost paper records and illegible handwriting. Empower your chamber or clinic with instant e-prescriptions, comprehensive Bangladeshi medicine database, Zoom video consultations, and an Android patient portal."
              : "হারিয়ে যাওয়া কাগজের ফাইল এবং অস্পষ্ট হাতের লেখার দিন শেষ। বিল্ট-ইন বাংলাদেশি ড্রাগ ডেটাবেস, মাত্র ৬০ সেকেন্ডে ই-প্রেসক্রিপশন, স্বয়ংক্রিয় জুম ভিডিও কল এবং অ্যান্ড্রয়েড পেশেন্ট পোর্টাল দিয়ে আপনার চেম্বারকে করুন আধুনিক ও ডিজিটাল।"}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <SpecularButton
              size="lg"
              tint="#059669"
              lineColor="#6ee7b7"
              baseColor="#064e3b"
              textColor="#ffffff"
              href="#contact"
              className="w-full sm:w-auto"
            >
              <Video className="w-5 h-5 mr-1 text-emerald-200" />
              <span>{language === "en" ? "Book Demo" : "ডেমো বুক করুন"}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </SpecularButton>

            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all"
            >
              <FileText className="w-5 h-5 text-emerald-600" />
              <span>{language === "en" ? "Start Free Trial" : "ফ্রি ট্রায়াল শুরু করুন"}</span>
            </a>
          </div>
        </div>

        {/* Interactive Showcase Container with Clean Screenshots & Auto-Loop */}
        <div id="preview" className="relative max-w-6xl mx-auto scroll-mt-24">
          {/* Clean Showcase Frame with Green Gradient Border & Progressive Blur */}
          <div
            className="relative rounded-t-2xl sm:rounded-t-3xl rounded-b-none p-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 shadow-2xl shadow-emerald-950/15"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0) 100%)",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0) 100%)",
            }}
          >
            <div className="relative rounded-t-[calc(1rem-2px)] sm:rounded-t-[calc(1.5rem-2px)] rounded-b-none overflow-hidden bg-white h-[340px] sm:h-[400px] md:h-[450px]">
              {/* Screen 1: Dashboard */}
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeTab === "dashboard"
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-[1.012] pointer-events-none z-0"
                }`}
              >
                <LiveDashboardScreen language={language} />
              </div>

              {/* Screen 2: Calendar */}
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeTab === "calendar"
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-[1.012] pointer-events-none z-0"
                }`}
              >
                <LiveCalendarScreen language={language} />
              </div>

              {/* Screen 3: Actions */}
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeTab === "actions"
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-[1.012] pointer-events-none z-0"
                }`}
              >
                <LiveActionsScreen language={language} />
              </div>

              {/* Progressive Blur tight at the bottom edge */}
              <ProgressiveBlur position="bottom" height="24%" tint="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
