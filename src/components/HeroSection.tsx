"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  CheckCircle2,
  Video,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Layers,
  ChevronRight,
} from "lucide-react";

interface HeroSectionProps {
  language: "en" | "bn";
}

export default function HeroSection({ language }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"dashboard" | "calendar" | "actions">("dashboard");

  const screenshots = {
    dashboard: {
      src: "/assets/dashboard-main.png",
      alt: "SJ EMR Main Doctor Dashboard",
      label: language === "en" ? "Doctor Control Tower" : "ডাক্তার ড্যাশবোর্ড",
      desc:
        language === "en"
          ? "Real-time appointments, pending follow-ups, and instant patient search."
          : "দৈনিক অ্যাপয়েন্টমেন্ট, ফলো-আপ তালিকা ও তাৎক্ষণিক রোগী সার্চ সুবিধা।",
      badge: language === "en" ? "Real-time Tele-chamber" : "রিয়েল-টাইম চেম্বার ভিউ",
    },
    calendar: {
      src: "/assets/calendar-schedule.png",
      alt: "SJ EMR Weekly Appointment Schedule Calendar",
      label: language === "en" ? "Interactive Chamber Schedule" : "চেম্বার শিডিউল ক্যালেন্ডার",
      desc:
        language === "en"
          ? "Weekly & daily patient slot booking with doctor availability sync."
          : "সাপ্তাহিক ও দৈনিক স্লট বুকিং এবং ডাক্তারদের সময়সূচির পূর্ণাঙ্গ সমন্বয়।",
      badge: language === "en" ? "Smart Slots & Token Sync" : "স্মার্ট স্লট ম্যানেজমেন্ট",
    },
    actions: {
      src: "/assets/dashboard-actions.png",
      alt: "SJ EMR Fast Prescription & Clinical Shortcuts",
      label: language === "en" ? "Quick Rx & Clinical Tools" : "দ্রুত প্রেসক্রিপশন ও টুলস",
      desc:
        language === "en"
          ? "Pre-loaded clinical tags (Fever, Gastric, BP, Cold) for 60-second prescribing."
          : "ক্লিনিক্যাল টেমপ্লেট ও ড্রাগ সাজেশনের মাধ্যমে মাত্র ৬০ সেকেন্ডে পূর্ণাঙ্গ প্রেসক্রিপশন।",
      badge: language === "en" ? "60s Digital Prescription" : "৬০ সেকেন্ডে ই-প্রেসক্রিপশন",
    },
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden hero-glow">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 blur-3xl -z-10">
        <div className="w-96 h-96 bg-emerald-300 rounded-full mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>
              {language === "en"
                ? "SJ EMR • Specially Engineered for Bangladeshi Doctors"
                : "এস জে ইএমআর • বাংলাদেশি চিকিৎসকদের জন্য বিশেষভাবে নির্মিত"}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            {language === "en" ? (
              <>
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                  #1 Doctor-First EMR
                </span>{" "}
                & Telemedicine Software in Bangladesh
              </>
            ) : (
              <>
                বাংলাদেশের চিকিৎসকদের জন্য{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                  #১ নির্ভরযোগ্য ইএমআর
                </span>{" "}
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-md hover:shadow-lg transition-all"
            >
              <Video className="w-5 h-5" />
              <span>{language === "en" ? "Book a 1-on-1 Zoom Demo" : "লাইভ জুম ডেমো বুক করুন"}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all"
            >
              <FileText className="w-5 h-5 text-emerald-600" />
              <span>{language === "en" ? "Start 14-Day Free Trial" : "১৪ দিনের ফ্রি ট্রায়াল শুরু করুন"}</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 mb-12">
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === "en" ? "14-Day Free Trial (0 BDT)" : "১৪ দিনের ফ্রি ট্রায়াল (০ টাকা)"}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === "en" ? "BMDC Compliant Format" : "BMDC নির্দেশিকা সমর্থিত"}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === "en" ? "Android Patient App Ready" : "রোগীর জন্য ডেডিকেটেড অ্যাপ"}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === "en" ? "24/7 Support in Dhaka & Sylhet" : "ঢাকা ও সিলেটে সার্বক্ষণিক সাপোর্ট"}</span>
            </div>
          </div>
        </div>

        {/* Interactive Showcase Container with Real Screenshots */}
        <div id="preview" className="relative max-w-6xl mx-auto scroll-mt-24">
          {/* Showcase Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <button
              type="button"
              onClick={() => setActiveTab("dashboard")}
              className={`px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "dashboard"
                  ? "bg-emerald-900 text-white shadow-md shadow-emerald-900/20"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{screenshots.dashboard.label}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("calendar")}
              className={`px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "calendar"
                  ? "bg-emerald-900 text-white shadow-md shadow-emerald-900/20"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{screenshots.calendar.label}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("actions")}
              className={`px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "actions"
                  ? "bg-emerald-900 text-white shadow-md shadow-emerald-900/20"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{screenshots.actions.label}</span>
            </button>
          </div>

          {/* Mockup Frame */}
          <div className="rounded-2xl bg-slate-900 p-2 sm:p-3 shadow-2xl shadow-emerald-950/20 border border-slate-800">
            {/* Browser top chrome */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1 rounded-md text-[11px] text-slate-300 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>emr.com.bd/app/dashboard</span>
              </div>
              <div className="text-[11px] font-semibold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60 hidden sm:block">
                {screenshots[activeTab].badge}
              </div>
            </div>

            {/* Main Screenshot Screen */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-950">
              <Image
                src={screenshots[activeTab].src}
                alt={screenshots[activeTab].alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top transition-opacity duration-300"
              />
            </div>

            {/* Description strip below mockup */}
            <div className="px-3 py-2.5 mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-medium text-slate-200">{screenshots[activeTab].desc}</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <span>{language === "en" ? "Schedule Live Interactive Walkthrough" : "লাইভ সফটওয়্যার ওয়াকথ্রু দেখুন"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
