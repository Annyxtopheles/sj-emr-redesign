"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Mic,
  ScanLine,
  Sparkles,
  AlertCircle,
  FileCheck2,
  Languages,
  CalendarClock,
  History,
  Tag,
  BarChart3,
  Check,
  Stethoscope,
  ShieldCheck,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  Printer,
  Send,
  Activity,
  FileText,
  Clock,
  Pill,
  CheckCircle2,
  AlertTriangle,
  HeartPulse,
  Baby,
  UserCheck,
} from "lucide-react";
import SpecularButton from "@/components/ui/SpecularButton";
import GlowCard from "@/components/ui/GlowCard";
import { GlassIconBadge } from "@/components/ui/GlassIcons";

interface FeatureDeepDiveProps {
  language: "en" | "bn";
}

export default function FeatureDeepDive({ language }: FeatureDeepDiveProps) {
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Top 3 Flagship Pillars with Custom Spot Graphics
  const spotlightFeatures = [
    {
      image: "/assets/spot-rx.jpg",
      alt: "SJ EMR Smart Digital Prescription Interface",
      badge: language === "en" ? "60-Second Prescribing" : "৬০ সেকেন্ডে প্রেসক্রিপশন",
      title: language === "en" ? "Smart e-Prescription & Drug Directory" : "স্মার্ট ই-প্রেসক্রিপশন ও ড্রাগ ডেটাবেস",
      tagline:
        language === "en"
          ? "BMDC-Compliant Format with Instant Drug Auto-Suggest"
          : "বিএমডিসি নির্দেশিকা সম্মত ও স্বয়ংক্রিয় ড্রাগ ড্রপডাউন",
      desc:
        language === "en"
          ? "Type 2-3 letters of any brand or generic to select exact dosages, formulations, and instructions from the comprehensive Bangladeshi drug registry."
          : "ওষুধের ২-৩টি অক্ষর লিখলেই দেশের অনুমোদিত ড্রাগ ডেটাবেস থেকে সঠিক ডোজ ও ফর্মুলেশন চলে আসে। চেম্বার প্যাডে প্রিন্ট বা এসএমএসে পাঠানো যায় নিমিষেই।",
      points: [
        language === "en" ? "Auto-suggested Bangladeshi drug directory" : "হাজারো দেশীয় ওষুধের ড্রপডাউন সাজেশন",
        language === "en" ? "Custom specialty templates for 60-second prescribing" : "স্পেশালিটি ভিত্তিক রেডিমেড টেমপ্লেট শর্টকাট",
        language === "en" ? "Millimeter-exact margin settings for existing pads" : "পূর্বে ছাপানো নিজস্ব চেম্বার প্যাডে নিখুঁত প্রিন্ট",
      ],
    },
    {
      image: "/assets/spot-telemedicine.jpg",
      alt: "SJ EMR Automated Video Telemedicine Consultation",
      badge: language === "en" ? "1-Click Telemedicine" : "স্বয়ংক্রিয় জুম কল",
      title: language === "en" ? "Automated Zoom Video Consultations" : "স্বয়ংক্রিয় জুম ভিডিও কনসাল্টেশন",
      tagline:
        language === "en"
          ? "Instant Zoom Meeting Rooms Dispatched via SMS"
          : "অ্যাপয়েন্টমেন্ট হলেই রোগীর মোবাইলে এসএমএস লিংক",
      desc:
        language === "en"
          ? "When an appointment is scheduled, SJ EMR instantly provisions a secure Zoom room and texts the meeting ID and password directly to the patient's phone."
          : "ভিডিও কনসাল্টেশনের অ্যাপয়েন্টমেন্ট শিডিউল হলেই রোগীর মোবাইলে এসএমএসে জুম মিটিং লিংক ও পাসওয়ার্ড পৌঁছে যায়। আলাদা করে লিংক পাঠানোর কোনো ঝামেলা নেই।",
      points: [
        language === "en" ? "Automatic SMS link delivery to patient phones" : "রোগীর ফোনে সরাসরি এসএমএস নোটিফিকেশন",
        language === "en" ? "Integrated tele-consultation notes & Rx writer" : "ভিডিও কলের পাশাপাশি প্রেসক্রিপশন লেখার সুবিধা",
        language === "en" ? "High-definition video on both mobile and desktop" : "মোবাইল ও ল্যাপটপে নিরবচ্ছিন্ন অডিও-ভিডিও",
      ],
    },
    {
      image: "/assets/spot-records.jpg",
      alt: "SJ EMR Encrypted Cloud Patient Records & Diagnostics",
      badge: language === "en" ? "Zero Paperwork" : "আজীবন স্বাস্থ্য নথি",
      title: language === "en" ? "Patient Demographics & Centralized Cloud PHI" : "রোগীর ডেমোগ্রাফি ও আজীবন ডিজিটাল রেকর্ড",
      tagline:
        language === "en"
          ? "Complete Lifetime Records with Diagnostic Uploads"
          : "মোবাইল নম্বর সার্চে এক্স-রে, রিপোর্ট ও অতীত ভিজিট",
      desc:
        language === "en"
          ? "Retrieve complete patient files in seconds using their mobile number. Eliminate paper loss and review past clinical visits, attached X-rays, and lab scans."
          : "রোগীর মোবাইল নম্বর দিয়ে সার্চ করলেই আগের সব প্রেসক্রিপশন, চিফ কমপ্লেইন্টস এবং এক্স-রে বা ল্যাব টেস্টের ছবি ডিজিটালভাবে সুরক্ষিত পাওয়া যায়।",
      points: [
        language === "en" ? "Instant lookup by patient mobile number" : "মোবাইল নম্বর দিয়ে এক ক্লিকে রেকর্ড অনুসন্ধান",
        language === "en" ? "Centralized X-ray, radiology, and lab report storage" : "এক্স-রে, সিটি স্ক্যান ও ডায়াগনস্টিক রিপোর্ট সংরক্ষণ",
        language === "en" ? "Encrypted cloud storage with automated daily backups" : "এনক্রিপ্টেড ও সম্পূর্ণ নিরাপদ ক্লাউড ব্যাকআপ",
      ],
    },
  ];

  // The 10 Specialized Clinical AI Tools directly from the dev software (src/features/ai/screens/)
  const clinicalAiTools = [
    {
      id: "voice-to-note",
      icon: Mic,
      color: "indigo",
      theme: {
        bg: "rgba(99, 102, 241, 0.16)",
        border: "rgba(99, 102, 241, 0.35)",
        icon: "#a5b4fc",
      },
      slug: "voice-to-note",
      badge: "STT Engine",
      title: language === "en" ? "Voice-to-Note (STT)" : "ভয়েস-টু-নোট (বাংলা ও ইংরেজি)",
      desc:
        language === "en"
          ? "Dictate clinical observations in colloquial Bangla or English; AI structures them into standardized SOAP notes."
          : "বাংলা ও ইংরেজি ভয়েস ডিক্টেশন সরাসরি মাইক্রোফোনে রেকর্ড করে স্বয়ংক্রিয়ভাবে নির্ভুল SOAP ফরম্যাটে রূপান্তর করুন।",
    },
    {
      id: "handwritten-ocr",
      icon: ScanLine,
      color: "purple",
      theme: {
        bg: "rgba(168, 85, 247, 0.16)",
        border: "rgba(168, 85, 247, 0.35)",
        icon: "#d8b4fe",
      },
      slug: "handwritten-ocr",
      badge: "Vision OCR",
      title: language === "en" ? "Handwritten Pad OCR" : "হাতের লেখার প্রেসক্রিপশন OCR",
      desc:
        language === "en"
          ? "Photograph existing paper prescription pads; AI extracts drug names, dosages, and frequencies into digital fields."
          : "হাতে লেখা প্রেসক্রিপশনের ছবি বা ফাইল আপলোড করলে এআই স্বয়ংক্রিয়ভাবে ওষুধের নাম ও মাত্রা ডিজিটাল করে।",
    },
    {
      id: "diagnosis-assist",
      icon: Sparkles,
      color: "emerald",
      theme: {
        bg: "rgba(16, 185, 129, 0.16)",
        border: "rgba(16, 185, 129, 0.35)",
        icon: "#6ee7b7",
      },
      slug: "diagnosis-assist",
      badge: "ICD Differential",
      title: language === "en" ? "Diagnosis Assist" : "ডায়াগনসিস অ্যাসিস্ট ও ডিফারেনশিয়াল",
      desc:
        language === "en"
          ? "Cross-references chief complaints and clinical findings to suggest ranked differential diagnoses with ICD-10 codes."
          : "লক্ষণ ও ক্লিনিক্যাল ডেটা বিশ্লেষণ করে সম্ভাব্য রোগ নির্ণয় এবং ডাক্তারের চূড়ান্ত অনুমোদনের জন্য পরামর্শ দেয়।",
    },
    {
      id: "medication-safety",
      icon: AlertCircle,
      color: "rose",
      theme: {
        bg: "rgba(244, 63, 94, 0.16)",
        border: "rgba(244, 63, 94, 0.35)",
        icon: "#fda4af",
      },
      slug: "medication-safety",
      badge: "DGDA Safety",
      title: language === "en" ? "Medication Safety Check" : "ওষুধের নিরাপত্তা ও ইন্টারঅ্যাকশন চেক",
      desc:
        language === "en"
          ? "Automated screening for drug-drug interactions, duplicate classes, and patient age/weight contraindications."
          : "ড্রাগ ইন্টারঅ্যাকশন, ক্ষতিকর ড্রাগ কম্বিনেশন এবং রোগীর বয়স অনুযায়ী সঠিক ডোজ স্বয়ংক্রিয়ভাবে যাচাই করে।",
    },
    {
      id: "lab-interpreter",
      icon: FileCheck2,
      color: "sky",
      theme: {
        bg: "rgba(2, 132, 199, 0.16)",
        border: "rgba(2, 132, 199, 0.35)",
        icon: "#7dd3fc",
      },
      slug: "lab-interpreter",
      badge: "Pathology Analyzer",
      title: language === "en" ? "Lab Results Interpreter" : "ল্যাব রিপোর্ট অ্যানালাইজার",
      desc:
        language === "en"
          ? "Extracts numerical test parameters from pathology PDFs or photos, flagging out-of-range biomarkers automatically."
          : "প্যাথলজি টেস্টের ফাইল থেকে স্বয়ংক্রিয়ভাবে অস্বাভাবিক রিডিং শনাক্ত করে এবং ক্লিনিক্যাল সামারি তৈরি করে।",
    },
    {
      id: "bangla-education",
      icon: Languages,
      color: "amber",
      theme: {
        bg: "rgba(245, 158, 11, 0.16)",
        border: "rgba(245, 158, 11, 0.35)",
        icon: "#fcd34d",
      },
      slug: "patient-education",
      badge: "Bangla Advisory",
      title: language === "en" ? "Bangla Patient Education" : "রোগীর জন্য সহজ বাংলায় নির্দেশনা",
      desc:
        language === "en"
          ? "Converts complex clinical advice and diet restrictions into empathetic, easily understood colloquial Bengali handouts."
          : "ওষুধের সেবনবিধি ও খাদ্য সতর্কতা রোগীদের সহজে বোঝার সুবিধার্থে স্পষ্ট বাংলা ভাষায় প্রিন্ট ও এসএমএস করে।",
    },
    {
      id: "followup-planner",
      icon: CalendarClock,
      color: "teal",
      theme: {
        bg: "rgba(20, 184, 166, 0.16)",
        border: "rgba(20, 184, 166, 0.35)",
        icon: "#5eead4",
      },
      slug: "followup-planner",
      badge: "Chronic Recall",
      title: language === "en" ? "Follow-up & Recall Planner" : "ফলো-আপ প্ল্যানার ও শিডিউল রিকল",
      desc:
        language === "en"
          ? "Calculates clinical revisit intervals based on chronic disease curves and queues automated SMS reminders."
          : "রোগীর অবস্থা অনুযায়ী পরবর্তী সাক্ষাতের সময় নির্ধারণ এবং স্বয়ংক্রিয় এসএমএস রিমাইন্ডার প্রেরণের ব্যবস্থা।",
    },
    {
      id: "patient-history",
      icon: History,
      color: "blue",
      theme: {
        bg: "rgba(59, 130, 246, 0.16)",
        border: "rgba(59, 130, 246, 0.35)",
        icon: "#93c5fd",
      },
      slug: "patient-history",
      badge: "Longitudinal Record",
      title: language === "en" ? "Patient History Summarizer" : "রোগীর আজীবন ইতিহাসের সামারি",
      desc:
        language === "en"
          ? "Synthesizes multi-year visits, known drug allergies, and vital trends into a high-yield 1-screen consultation briefing."
          : "বহু বছরের জটিল হিস্ট্রি, অতীত ভিজিট ও অ্যালার্জির ইতিহাস চেম্বারে ঢোকার আগেই ১ স্ক্রিনে উপস্থাপন করে।",
    },
    {
      id: "smart-coding",
      icon: Tag,
      color: "violet",
      theme: {
        bg: "rgba(139, 92, 246, 0.16)",
        border: "rgba(139, 92, 246, 0.35)",
        icon: "#c4b5fd",
      },
      slug: "smart-coding",
      badge: "WHO ICD-11",
      title: language === "en" ? "Smart Diagnostic Coding" : "স্মার্ট রোগ নির্ণয় ট্যাগিং ও কোডিং",
      desc:
        language === "en"
          ? "Maps physician clinical notes to standardized WHO ICD-10 and ICD-11 diagnostic codes for compliant medical records."
          : "ক্লিনিক্যাল নোট থেকে স্বয়ংক্রিয়ভাবে আন্তর্জাতিক ICD রোগ কোড যুক্ত করে স্বাস্থ্য অধিদপ্তরের ফরম্যাট বজায় রাখে।",
    },
    {
      id: "clinic-insights",
      icon: BarChart3,
      color: "cyan",
      theme: {
        bg: "rgba(6, 182, 212, 0.16)",
        border: "rgba(6, 182, 212, 0.35)",
        icon: "#67e8f9",
      },
      slug: "ai-dashboard",
      badge: "OPD Analytics",
      title: language === "en" ? "Clinic AI Insights Dashboard" : "চেম্বার ইনসাইটস ও প্র্যাকটিস অ্যানালিটিক্স",
      desc:
        language === "en"
          ? "Aggregates daily visit volumes, prevalent disease trends, average prescription speed, and chamber collections."
          : "দৈনিক রোগী সংখ্যা, সবচেয়ে প্রচলিত রোগের প্রবণতা এবং চেম্বারের আয়-ব্যয়ের সার্বিক অ্যানালিটিক্স রিপোর্ট।",
    },
  ];

  // Auto-cycle timer (5 seconds per tool) with pause-on-hover
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const intervalTime = 50; // ms
    const totalDuration = 5000; // 5 seconds per slide
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveToolIndex((current) => (current + 1) % clinicalAiTools.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isPaused, clinicalAiTools.length]);

  const handleSelectTool = (index: number) => {
    setActiveToolIndex(index);
    setProgress(0);
  };

  const activeTool = clinicalAiTools[activeToolIndex];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Designed for Bangladeshi Doctors, Built for Speed & Precision"
              : "বাংলাদেশের চিকিৎসকদের বাস্তব অভিজ্ঞতার আলোকে নির্মিত ফিচারসমূহ"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty max-w-2xl mx-auto">
            {language === "en"
              ? "Every tool is tailored to cut clerical burden, eliminate prescription errors, and ensure seamless patient\u00A0follow-up."
              : "প্রতিটি ফিচার তৈরি করা হয়েছে চেম্বারের সময় বাঁচাতে, প্রেসক্রিপশনের নির্ভুলতা নিশ্চিত করতে এবং রোগীদের উন্নত সেবা দিতে।"}
          </p>
        </div>

        {/* Top 3 Flagship Spotlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {spotlightFeatures.map((item, idx) => (
            <GlowCard
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-lg hover:border-emerald-400 transition-all group"
            >
              <div>
                <div className="relative h-44 sm:h-52 w-full bg-slate-50/90 rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden mb-6 group-hover:bg-emerald-50/40 group-hover:border-emerald-200/60 transition-colors">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mb-3">
                  <span className="inline-block text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md uppercase tracking-wider border border-emerald-200/70">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-800 transition-colors text-balance leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mb-3 text-pretty">
                  {item.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 text-pretty">
                  {item.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug text-pretty">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* 10 Clinical AI Tools Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Comprehensive Clinical Suite Built Inside SJ EMR AI Lite"
              : "এস জে ইএমআর সফটওয়্যারে সরাসরি সংযুক্ত এআই টুলস"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            {language === "en"
              ? "Every clinical AI tool operates under a strict Doctor-First mandate: AI prepares suggestions, and the doctor retains complete authority to Accept, Edit, or Discard."
              : "প্রতিটি এআই টুল সম্পূর্ণ ডাক্তারের নিয়ন্ত্রণাধীন—ডাক্তারের চূড়ান্ত অনুমোদন ছাড়া কোনো তথ্য মেডিকেল ফাইলে যুক্ত হয় না।"}
          </p>
        </div>

        {/* Restructured 10 Clinical AI Tools: Left Stacked Selector + Right Interactive Live Software Screen */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT: Stacked List of 10 Tools (Compact, cleanly fits height with active state & progress bar) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-1.5 h-full">
            {clinicalAiTools.map((tool, idx) => {
              const Icon = tool.icon;
              const isActive = activeToolIndex === idx;

              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => handleSelectTool(idx)}
                  className={`text-left w-full px-3 py-2 rounded-xl border transition-all relative overflow-hidden flex items-center justify-between gap-3 group cursor-pointer ${
                    isActive
                      ? "bg-emerald-50/90 border-emerald-400 text-emerald-950 shadow-xs ring-1 ring-emerald-500/20"
                      : "bg-white hover:bg-slate-50 border-slate-200/90 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {/* Active progress bar indicator for auto-cycle */}
                  {isActive && isAutoPlaying && !isPaused && (
                    <div
                      className="absolute bottom-0 left-0 h-0.5 bg-emerald-600 transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  )}

                  <div className="flex items-center gap-3 min-w-0">
                    {/* 3D Glass Icon Badge (Refined compact size with dark tinted glass) */}
                    <GlassIconBadge
                      icon={<Icon className="w-3.5 h-3.5" />}
                      color={tool.color}
                      size={28}
                      isActive={isActive}
                    />

                    {/* Title (No numbers) */}
                    <span
                      className={`text-xs sm:text-[13px] truncate transition-colors ${
                        isActive
                          ? "text-emerald-950 font-bold"
                          : "text-slate-800 font-medium group-hover:text-emerald-900"
                      }`}
                    >
                      {tool.title}
                    </span>
                  </div>

                  {/* Right active status indicator */}
                  <div className="shrink-0 flex items-center">
                    {isActive ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-md border border-emerald-200/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>Active</span>
                      </span>
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 opacity-40 group-hover:opacity-100 group-hover:text-emerald-600 transition-all" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Live Authentic Software Interface Display (Direct from dev software code) */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <div className="rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 p-5 sm:p-6 shadow-2xl shadow-slate-950/20 flex flex-col justify-between h-full text-slate-100 font-sans">
              {/* Clean Clinical Screen Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow-xs"
                    style={{
                      backgroundColor: activeTool.theme.bg,
                      borderColor: activeTool.theme.border,
                      color: activeTool.theme.icon,
                    }}
                  >
                    <activeTool.icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-100 text-sm sm:text-base leading-tight truncate">
                      {activeTool.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">
                      {activeTool.desc}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <span
                    className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded border shadow-2xs"
                    style={{
                      backgroundColor: activeTool.theme.bg,
                      borderColor: activeTool.theme.border,
                      color: activeTool.theme.icon,
                    }}
                  >
                    Tool {String(activeToolIndex + 1).padStart(2, "0")} / 10
                  </span>
                </div>
              </div>

              {/* Dynamic Authentic Software Screen Container */}
              <div className="flex-1 flex flex-col justify-between">
                {/* 1. Voice-to-Note Screen */}
                {activeToolIndex === 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center">
                          <Mic className="w-4 h-4 animate-pulse" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200">Live Voice Transcription (Bangla + English)</div>
                          <div className="text-[10px] text-rose-400 font-medium">Recording active • 00:14 / 02:00</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded font-medium">Auto-SOAP</span>
                    </div>

                    {/* Waveform indicator */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1 w-full h-6">
                        {[40, 70, 30, 90, 60, 100, 45, 80, 55, 95, 30, 85, 65, 40, 90, 75, 50, 85, 30, 60, 95, 45, 80].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-emerald-400/80 rounded-full transition-all duration-150"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-emerald-400 shrink-0 ml-2">102 bpm</span>
                    </div>

                    {/* Transcribed Speech */}
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-300 space-y-1">
                      <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Detected Audio Stream</div>
                      <p className="italic text-slate-200">
                        &quot;Patient reports 3 days of high fever and persistent dry cough, anorexia, and body ache. Temp 102.2°F. Throat is erythematous, lungs clear on auscultation. Prescribed Napa Extend and Bilastine.&quot;
                      </p>
                    </div>

                    {/* Structured SOAP Note */}
                    <div className="bg-slate-900 border border-emerald-900/60 rounded-xl p-3.5 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[11px] font-bold text-emerald-400 border-b border-slate-800 pb-1.5">
                        <span>Generated Clinical SOAP Note</span>
                        <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded text-[10px] border border-emerald-800">
                          High Confidence
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                          <span className="font-bold text-slate-400 block mb-0.5">S (Subjective):</span>
                          <span className="text-slate-200">Fever (3d), dry cough, body ache, loss of appetite.</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                          <span className="font-bold text-slate-400 block mb-0.5">O (Objective):</span>
                          <span className="text-slate-200">Temp 102.2°F, Chest clear bilaterally, Throat congestion +.</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                          <span className="font-bold text-slate-400 block mb-0.5">A (Assessment):</span>
                          <span className="text-emerald-300 font-semibold">Acute Upper Respiratory Viral Infection (J06.9)</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                          <span className="font-bold text-slate-400 block mb-0.5">P (Plan):</span>
                          <span className="text-slate-200">Tab Napa Extend 665mg 1+1+1 (3d), Tab Bilastine 20mg 0+0+1 (5d).</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Handwritten Pad OCR Screen */}
                {activeToolIndex === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                          <ScanLine className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200">Handwritten Pad OCR & Drug Parser</div>
                          <div className="text-[10px] text-slate-400">Photo uploaded: prescription_sheet_042.jpg</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded font-bold">
                        98% Extraction Match
                      </span>
                    </div>

                    {/* Prescription Table Extracted */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden text-xs">
                      <div className="bg-slate-850 px-3 py-2 border-b border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider grid grid-cols-12 gap-2">
                        <span className="col-span-5">Medication & Strength</span>
                        <span className="col-span-3">Dosage / Timing</span>
                        <span className="col-span-2">Duration</span>
                        <span className="col-span-2 text-right">Status</span>
                      </div>
                      <div className="divide-y divide-slate-800">
                        <div className="px-3 py-2.5 grid grid-cols-12 gap-2 items-center text-[11px]">
                          <div className="col-span-5 font-bold text-slate-100">
                            Cap. Cefixime 200 mg
                            <span className="block text-[10px] text-slate-400 font-normal">Generic: Cefixime Trihydrate</span>
                          </div>
                          <div className="col-span-3 text-slate-300">1 + 0 + 1 (খাবার পর)</div>
                          <div className="col-span-2 text-slate-300">7 Days</div>
                          <div className="col-span-2 text-right text-emerald-400 font-bold text-[10px]">Verified ✓</div>
                        </div>

                        <div className="px-3 py-2.5 grid grid-cols-12 gap-2 items-center text-[11px]">
                          <div className="col-span-5 font-bold text-slate-100">
                            Tab. Montelukast 10 mg
                            <span className="block text-[10px] text-slate-400 font-normal">Brand: Montene 10</span>
                          </div>
                          <div className="col-span-3 text-slate-300">0 + 0 + 1 (রাতে)</div>
                          <div className="col-span-2 text-slate-300">14 Days</div>
                          <div className="col-span-2 text-right text-emerald-400 font-bold text-[10px]">Verified ✓</div>
                        </div>

                        <div className="px-3 py-2.5 grid grid-cols-12 gap-2 items-center text-[11px]">
                          <div className="col-span-5 font-bold text-slate-100">
                            Tab. Paracetamol 500 mg
                            <span className="block text-[10px] text-slate-400 font-normal">Brand: Ace 500</span>
                          </div>
                          <div className="col-span-3 text-slate-300">১টি করে প্রয়োজনে</div>
                          <div className="col-span-2 text-slate-300">3 Days</div>
                          <div className="col-span-2 text-right text-emerald-400 font-bold text-[10px]">Verified ✓</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-950/60 border border-emerald-800/80 rounded-xl p-3 flex items-center justify-between text-xs text-emerald-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>All 3 medicines matched against DGDA Bangladesh Drug Database.</span>
                      </div>
                      <span className="font-semibold text-white">Ready to digitalize</span>
                    </div>
                  </div>
                )}

                {/* 3. Diagnosis Assist Screen */}
                {activeToolIndex === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200">AI Differential Diagnosis Engine</div>
                          <div className="text-[10px] text-slate-400">Chief complaint input: Fever, productive cough, chest tightness (4d)</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">ICD-10 Mapped</span>
                    </div>

                    {/* Ranked Differentials */}
                    <div className="space-y-2.5">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Ranked Diagnostic Hypotheses
                      </div>

                      <div className="bg-slate-900 border border-emerald-500/60 rounded-xl p-3 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-emerald-300">1. Acute Bronchitis (ICD-10: J20.9)</span>
                          <span className="text-emerald-400 font-bold text-[11px] bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                            88% Match
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          Strong alignment with non-specific airway congestion, subacute cough onset, and absence of consolidation on auscultation.
                        </p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-200">2. Community-Acquired Pneumonia (ICD-10: J18.9)</span>
                          <span className="text-slate-400 font-bold text-[11px] bg-slate-800 px-2 py-0.5 rounded">
                            64% Match
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Secondary probability if productive sputum intensifies. Monitor focal crackles or SpO2 decline.
                        </p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-200">3. Viral Rhinopharyngitis (ICD-10: J06.9)</span>
                          <span className="text-slate-400 font-bold text-[11px] bg-slate-800 px-2 py-0.5 rounded">
                            41% Match
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-[11px] text-slate-300 flex items-center justify-between">
                      <span className="text-slate-400">Suggested Investigations:</span>
                      <span className="font-semibold text-emerald-400">Chest X-Ray P/A View • CBC with ESR</span>
                    </div>
                  </div>
                )}

                {/* 4. Medication Safety Check Screen */}
                {activeToolIndex === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                          <AlertCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200">DGDA Drug Interaction & Safety Shield</div>
                          <div className="text-[10px] text-slate-400">Screening 4 concurrent chamber medications</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded font-bold">
                        0 Severe Warnings
                      </span>
                    </div>

                    {/* Interaction Alert Banner */}
                    <div className="bg-amber-950/40 border border-amber-800/80 rounded-xl p-3.5 space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 text-amber-400 font-bold">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>Mild Drug-Drug Interaction Detected (Monitored)</span>
                      </div>
                      <p className="text-[11px] text-amber-200 leading-relaxed pl-6">
                        <strong>Amlodipine (5mg) + Atorvastatin (10mg):</strong> Co-administration can slightly increase statin bioavailability via CYP3A4 pathway. Dosage is conservative; recommended routine hepatic function profile during subsequent 6-month revisit.
                      </p>
                    </div>

                    {/* Drug Validation Cards */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                        <div className="text-[10px] text-emerald-400 font-bold uppercase">Metformin 500mg</div>
                        <div className="text-[11px] text-slate-200 mt-0.5">Dose: 1000mg/day (Safe)</div>
                        <div className="text-[10px] text-slate-400">Renal clearance: Normal</div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                        <div className="text-[10px] text-emerald-400 font-bold uppercase">Clopidogrel 75mg</div>
                        <div className="text-[11px] text-slate-200 mt-0.5">Dose: 75mg/day (Standard)</div>
                        <div className="text-[10px] text-slate-400">No antiplatelet clash detected</div>
                      </div>
                    </div>

                    <div className="bg-slate-900 border border-emerald-900/60 rounded-xl p-3 text-xs text-slate-300 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Dosage verified against national geriatric & adult guidelines.</span>
                      </div>
                      <span className="font-bold text-emerald-400">Safe to Print</span>
                    </div>
                  </div>
                )}

                {/* 5. Lab Results Interpreter Screen */}
                {activeToolIndex === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
                          <FileCheck2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200">Pathology & Biochemistry OCR Interpreter</div>
                          <div className="text-[10px] text-slate-400">Report: Popular Diagnostic Sylhet (CBC + FBS)</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded font-bold">
                        Extracted
                      </span>
                    </div>

                    {/* Biomarker Table */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden text-xs">
                      <div className="bg-slate-850 px-3 py-2 border-b border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider grid grid-cols-12 gap-2">
                        <span className="col-span-4">Biomarker</span>
                        <span className="col-span-3">Patient Value</span>
                        <span className="col-span-3">Reference Range</span>
                        <span className="col-span-2 text-right">Indicator</span>
                      </div>
                      <div className="divide-y divide-slate-800">
                        <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center text-[11px]">
                          <span className="col-span-4 font-bold text-slate-200">Hemoglobin (Hb)</span>
                          <span className="col-span-3 font-semibold text-amber-400">10.8 g/dL</span>
                          <span className="col-span-3 text-slate-400">12.0 – 15.5 g/dL</span>
                          <span className="col-span-2 text-right text-amber-400 font-bold text-[10px] bg-amber-950/60 px-1.5 py-0.5 rounded">
                            Low
                          </span>
                        </div>
                        <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center text-[11px]">
                          <span className="col-span-4 font-bold text-slate-200">Total WBC Count</span>
                          <span className="col-span-3 font-semibold text-rose-400">11,400 /uL</span>
                          <span className="col-span-3 text-slate-400">4,000 – 11,000</span>
                          <span className="col-span-2 text-right text-rose-400 font-bold text-[10px] bg-rose-950/60 px-1.5 py-0.5 rounded">
                            High
                          </span>
                        </div>
                        <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center text-[11px]">
                          <span className="col-span-4 font-bold text-slate-200">Platelet Count</span>
                          <span className="col-span-3 font-semibold text-emerald-400">245,000 /uL</span>
                          <span className="col-span-3 text-slate-400">150,000 – 450,000</span>
                          <span className="col-span-2 text-right text-emerald-400 font-bold text-[10px] bg-emerald-950/60 px-1.5 py-0.5 rounded">
                            Normal
                          </span>
                        </div>
                        <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center text-[11px]">
                          <span className="col-span-4 font-bold text-slate-200">Fasting Blood Sugar</span>
                          <span className="col-span-3 font-semibold text-rose-400">7.9 mmol/L</span>
                          <span className="col-span-3 text-slate-400">3.9 – 6.1 mmol/L</span>
                          <span className="col-span-2 text-right text-rose-400 font-bold text-[10px] bg-rose-950/60 px-1.5 py-0.5 rounded">
                            Elevated
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-[11px] text-slate-300 space-y-1">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">AI Clinical Summary:</span>
                      <p>
                        Mild microcytic hypochromic anemia co-occurring with reactive leukocytosis. Elevated fasting glucose indicates sub-optimal glycemic control. Suggest checking HbA1c and Serum Ferritin.
                      </p>
                    </div>
                  </div>
                )}

                {/* 6. Bangla Patient Education Screen */}
                {activeToolIndex === 5 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                          <Languages className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200">Colloquial Bangla Patient Advisory</div>
                          <div className="text-[10px] text-slate-400">Patient: Kalam Hossain (52y) • Type 2 Diabetes</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                        সহজ বাংলা ফরম্যাট
                      </span>
                    </div>

                    {/* Bangla Guidance Handout */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 text-xs">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ১
                        </span>
                        <div>
                          <strong className="text-emerald-300 block mb-0.5">ঔষধ সেবনের নিয়ম:</strong>
                          <span className="text-slate-200 leading-relaxed text-[11px]">
                            মেটফরমিন ট্যাবলেট অবশ্যই ভরা পেটে (খাবার খাওয়ার ঠিক পরে) খাবেন, এতে পেটে গ্যাস বা বমি ভাব হবে না।
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ২
                        </span>
                        <div>
                          <strong className="text-emerald-300 block mb-0.5">খাদ্যাভ্যাস ও সতর্কতা:</strong>
                          <span className="text-slate-200 leading-relaxed text-[11px]">
                            মিষ্টি ও অতিরিক্ত লবণাক্ত খাবার পুরোপুরি এড়িয়ে চলুন। প্রতিদিন অন্তত ৩০ মিনিট ঘাম ঝরিয়ে দ্রুত হাঁটুন।
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-rose-950 text-rose-400 border border-rose-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ৩
                        </span>
                        <div>
                          <strong className="text-rose-400 block mb-0.5">জরুরি সতর্কতা (হাইপোগ্লাইসেমিয়া):</strong>
                          <span className="text-slate-200 leading-relaxed text-[11px]">
                            যদি হঠাৎ বুক ধড়ফড় করে বা শরীর অতিরিক্ত ঘেমে হাত-পা কাঁপে, তৎক্ষণাৎ ১ গ্লাস মিষ্টি শরবত বা মিষ্টি খেয়ে চিকিৎসকের পরামর্শ নিন।
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 flex items-center justify-between text-xs text-slate-300">
                        <span>SMS Dispatch: 01707-XXXXXX</span>
                        <Send className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 flex items-center gap-1.5 text-xs text-slate-300">
                        <Printer className="w-3.5 h-3.5 text-slate-400" />
                        <span>Print</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. Follow-up Planner Screen */}
                {activeToolIndex === 6 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center">
                          <CalendarClock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200">Chronic Revisit & Patient Recall Protocol</div>
                          <div className="text-[10px] text-slate-400">Diagnosis: Uncontrolled HTN + T2DM</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-teal-950 text-teal-300 border border-teal-800 px-2 py-0.5 rounded font-bold">
                        Calculated
                      </span>
                    </div>

                    {/* Schedule Recommendation */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Recommended Next Visit:</span>
                        <span className="text-sm font-bold text-emerald-400">3 Weeks (21 Days)</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-2">
                        <span>Target Calibration Date:</span>
                        <span className="text-slate-200 font-semibold">21 October 2026 (Wednesday)</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>Required Pre-tests:</span>
                        <span className="text-amber-400 font-semibold">Fasting Blood Sugar (1 day prior)</span>
                      </div>
                    </div>

                    {/* Queued SMS Preview */}
                    <div className="bg-slate-900/90 border border-emerald-900/60 rounded-xl p-3.5 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                        <span>Queued Bangla SMS Reminder</span>
                        <span>Auto-send in 18d</span>
                      </div>
                      <p className="text-[11px] text-slate-200 leading-relaxed italic">
                        &quot;জনাব কালাম, ডা. এম. এস. রহমানের চেম্বারে আপনার পরবর্তী ফলো-আপ ভিজিট আগামী ২১ অক্টোবর। সাক্ষাতের ৩ দিন আগে সকালের খালি পেটের সুগার টেস্ট করাবেন। সিরিয়ালের জন্য কল করুন: ০১৭০৭-০৭৪৫৭৭।&quot;
                      </p>
                    </div>
                  </div>
                )}

                {/* 8. Patient History Summarizer Screen */}
                {activeToolIndex === 7 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center">
                          <History className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200">Longitudinal Patient History Synthesizer</div>
                          <div className="text-[10px] text-slate-400">Hosne Ara Begum (61y, Female) • Patient ID #8841</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">4 Visits Total</span>
                    </div>

                    {/* Critical Allergy Pill */}
                    <div className="bg-rose-950/70 border border-rose-800 rounded-xl p-3 flex items-center gap-2.5 text-xs text-rose-200">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      <div>
                        <strong className="text-rose-400">Known Severe Drug Allergy:</strong> Penicillin &amp; Amoxicillin (Causes facial angioedema).
                      </div>
                    </div>

                    {/* Multi-visit Timeline */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2 text-xs">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Historical Trajectory (2024 - 2026)
                      </div>
                      <div className="space-y-2 text-[11px]">
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                          <div>
                            <span className="text-slate-400 mr-2">12 Jan 2024:</span>
                            <span className="text-slate-200">Initial intake for uncontrolled hypertension</span>
                          </div>
                          <span className="text-rose-400 font-bold">BP 158/95</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                          <div>
                            <span className="text-slate-400 mr-2">18 Jun 2024:</span>
                            <span className="text-slate-200">Amlodipine titrated to 5mg, diet modified</span>
                          </div>
                          <span className="text-amber-400 font-bold">BP 140/88</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-slate-400 mr-2">02 Oct 2026:</span>
                            <span className="text-slate-200">Current review — normotensive, asymptomatic</span>
                          </div>
                          <span className="text-emerald-400 font-bold">BP 126/80 ✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 9. Smart Diagnostic Coding Screen */}
                {activeToolIndex === 8 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                          <Tag className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200">WHO ICD-10 & ICD-11 Diagnostic Tagger</div>
                          <div className="text-[10px] text-slate-400">Source: Consultation notes free-text parsing</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded font-bold">
                        WHO Compliant
                      </span>
                    </div>

                    {/* Mapped Codes */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Standardized Codes Mapped to File
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-emerald-400">ICD-10: I10</span>
                          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Primary Diagnosis</span>
                        </div>
                        <div className="text-xs text-slate-200 font-semibold">Essential (Primary) Hypertension</div>
                        <p className="text-[11px] text-slate-400">WHO Standard Category: Diseases of the circulatory system</p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-teal-400">ICD-10: E11.9</span>
                          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Secondary Comorbidity</span>
                        </div>
                        <div className="text-xs text-slate-200 font-semibold">Type 2 Diabetes Mellitus without complications</div>
                        <p className="text-[11px] text-slate-400">WHO Standard Category: Endocrine, nutritional and metabolic diseases</p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-cyan-400">ICD-11: BA00</span>
                          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">ICD-11 Ready</span>
                        </div>
                        <div className="text-xs text-slate-200 font-semibold">Essential Hypertension</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 10. Clinic AI Insights Dashboard Screen */}
                {activeToolIndex === 9 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                          <BarChart3 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200">Daily OPD Practice Analytics</div>
                          <div className="text-[10px] text-slate-400">Chamber: Dr. M. S. Rahman (Green Life, Dhaka)</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded font-bold">
                        Live Today
                      </span>
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                        <div className="text-lg font-bold text-emerald-400">48</div>
                        <div className="text-[10px] text-slate-400">Patients Seen</div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                        <div className="text-lg font-bold text-teal-400">54s</div>
                        <div className="text-[10px] text-slate-400">Avg Rx Time</div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                        <div className="text-lg font-bold text-cyan-400">100%</div>
                        <div className="text-[10px] text-slate-400">Digital Pad</div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                        <div className="text-lg font-bold text-emerald-300">28.8k</div>
                        <div className="text-[10px] text-slate-400">BDT Collected</div>
                      </div>
                    </div>

                    {/* Disease Distribution Bar Chart */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2 text-xs">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Top Prevalent Symptoms Diagnosed Today
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div>
                          <div className="flex justify-between text-slate-300 mb-0.5">
                            <span>Viral Fever &amp; Respiratory (J06)</span>
                            <span className="font-bold text-emerald-400">38% (18 pts)</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: "38%" }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-slate-300 mb-0.5">
                            <span>Hypertension / CVD Follow-up (I10)</span>
                            <span className="font-bold text-teal-400">26% (12 pts)</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-teal-500 rounded-full" style={{ width: "26%" }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-slate-300 mb-0.5">
                            <span>Gastritis / Peptic Ulcer (K29)</span>
                            <span className="font-bold text-cyan-400">20% (10 pts)</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-500 rounded-full" style={{ width: "20%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner callout with SpecularButton */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white p-6 sm:p-10 border border-emerald-800/60 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                {language === "en" ? "Specialty Modules Ready" : "স্পেশালাইজড ক্লিনিক্যাল মডিউল"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2 text-balance">
                {language === "en"
                  ? "Pre-Configured for Your Medical Specialty & Chamber"
                  : "আপনার স্পেশালিটি ও চেম্বারের জন্য রেডিমেড ফরম্যাট"}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed text-pretty">
                {language === "en"
                  ? "Pre-loaded with specialized clinical templates, ICD-10 diagnostic codes, and examination checklists tailored for individual disciplines."
                  : "মেডিসিন, হৃদরোগ, শিশুরোগ, চর্মরোগ, অর্থোপেডিক ও স্ত্রীরোগের জন্য তৈরি বিশেষ প্রেসক্রিপশন টেমপ্লেট ও ড্রাগ সাজেশন্স।"
                }
              </p>
            </div>
            <div className="shrink-0">
              <SpecularButton
                size="md"
                tint="#047857"
                lineColor="#34d399"
                baseColor="#064e3b"
                textColor="#ffffff"
                href="#contact"
              >
                <span>{language === "en" ? "Contact Sales" : "যোগাযোগ করুন"}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </SpecularButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
