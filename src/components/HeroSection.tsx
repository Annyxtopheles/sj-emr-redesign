"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Video,
  FileText,
  Clock,
  ArrowRight,
  Layers,
} from "lucide-react";
import SpecularButton from "@/components/ui/SpecularButton";
import { AuroraText } from "@/components/ui/AuroraText";
import { ProgressiveBlur } from "@/components/ui/ProgressiveBlur";
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

  const screenshots = {
    dashboard: {
      src: "/assets/dashboard-main.png",
      alt: "SJ EMR Main Doctor Dashboard",
      label: language === "en" ? "Doctor Control Tower" : "ডাক্তার ড্যাশবোর্ড",
      desc:
        language === "en"
          ? "Real-time appointments, pending follow-ups, and instant patient search."
          : "দৈনিক অ্যাপয়েন্টমেন্ট, ফলো-আপ তালিকা ও তাৎক্ষণিক রোগী সার্চ সুবিধা।",
    },
    calendar: {
      src: "/assets/calendar-schedule.png",
      alt: "SJ EMR Weekly Appointment Schedule Calendar",
      label: language === "en" ? "Interactive Chamber Schedule" : "চেম্বার শিডিউল ক্যালেন্ডার",
      desc:
        language === "en"
          ? "Weekly & daily patient slot booking with doctor availability sync."
          : "সাপ্তাহিক ও দৈনিক স্লট বুকিং এবং ডাক্তারদের সময়সূচির পূর্ণাঙ্গ সমন্বয়।",
    },
    actions: {
      src: "/assets/dashboard-actions.png",
      alt: "SJ EMR Fast Prescription & Clinical Shortcuts",
      label: language === "en" ? "Quick Rx & Clinical Tools" : "দ্রুত প্রেসক্রিপশন ও টুলস",
      desc:
        language === "en"
          ? "Pre-loaded clinical tags (Fever, Gastric, BP, Cold) for 60-second prescribing."
          : "ক্লিনিক্যাল টেমপ্লেট ও ড্রাগ সাজেশনের মাধ্যমে মাত্র ৬০ সেকেন্ডে পূর্ণাঙ্গ প্রেসক্রিপশন।",
    },
  };

  return (
    <section className="relative pt-10 pb-0 lg:pt-16 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* Showcase Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5">
            <button
              type="button"
              onClick={() => setActiveTab("dashboard")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "dashboard"
                  ? "bg-emerald-900 text-white shadow-md shadow-emerald-900/20"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{screenshots.dashboard.label}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("calendar")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "calendar"
                  ? "bg-emerald-900 text-white shadow-md shadow-emerald-900/20"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{screenshots.calendar.label}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("actions")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "actions"
                  ? "bg-emerald-900 text-white shadow-md shadow-emerald-900/20"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{screenshots.actions.label}</span>
            </button>
          </div>

          {/* Clean Showcase Frame with Authentic Live Software Screens & Progressive Blur */}
          <div className="relative rounded-t-2xl sm:rounded-t-3xl rounded-b-none overflow-hidden border border-b-0 border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10">
            <div className="relative aspect-[16/10] sm:aspect-[16/8.8] w-full bg-slate-50 overflow-hidden">
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

              {/* Progressive Blur Effect on the bottom of the screens fading cleanly right to edge */}
              <ProgressiveBlur position="bottom" height="42%" tint="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
