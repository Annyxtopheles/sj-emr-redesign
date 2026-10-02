"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Scan,
  FileText,
  ShieldCheck,
  Building2,
  Stethoscope,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Share2,
  Zap,
} from "lucide-react";

interface TeleradiologyShowcaseProps {
  language: "en" | "bn";
}

export default function TeleradiologyShowcase({ language }: TeleradiologyShowcaseProps) {
  return (
    <section id="teleradiology" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-b border-slate-900 scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <Scan className="w-3.5 h-3.5" />
              <span>{language === "en" ? "Diagnostic Imaging Network" : "টেলিরেডিওলজি ও ডায়াগনস্টিক নেটওয়ার্ক"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {language === "en" ? (
                <>
                  Connect Diagnostic Centers with Top Radiologists via{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                    BD Radiology Analyzer
                  </span>
                </>
              ) : (
                <>
                  ডায়াগনস্টিক সেন্টার ও বিশেষজ্ঞ রেডিওলজিস্টদের সমন্বয়ে{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                    টেলিরেডিওলজি প্ল্যাটফর্ম
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {language === "en"
                ? "Beyond doctor chambers, SJ EMR powers a full-fledged teleradiology workflow. Diagnostic centers across Bangladesh upload X-rays and scans, while certified radiologists report cases remotely with AI diagnostic assist and automated e-signatures."
                : "চেম্বার ছাড়াও এস জে ইএমআরে রয়েছে স্বয়ংসম্পূর্ণ টেলিরেডিওলজি পোর্টাল। বাংলাদেশের যে কোনো প্রান্তের ল্যাব থেকে এক্স-রে বা স্ক্যান আপলোড এবং প্রত্যয়িত রেডিওলজিস্টদের দ্বারা রিমোট রিপোর্ট প্রস্তুতের শতভাগ নিরাপদ ব্যবস্থা।"}
            </p>

            {/* 4 Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800/80 flex items-center justify-center text-sky-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  {language === "en" ? "Lab Tech Case Intake" : "ল্যাব টেকনিশিয়ান এন্ট্রি"}
                </h3>
                <p className="text-xs text-slate-400">
                  {language === "en"
                    ? "Phone-first patient lookup, scan uploads, and automated study date assignment."
                    : "মোবাইল নম্বর সার্চ, দ্রুত স্ক্যান আপলোড ও কেস ট্র্যাকিং।"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  {language === "en" ? "Doctor Report Playground" : "রেডিওলজিস্ট প্লেগ্রাউন্ড"}
                </h3>
                <p className="text-xs text-slate-400">
                  {language === "en"
                    ? "Rich Word-style editor, specialized chest/skeletal templates, and AI radiological assistance."
                    : "সম্পূর্ণ ওয়ার্ড-স্টাইল এডিটর ও এআই রেডিয়োলজিক্যাল সহায়তা।"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-800/80 flex items-center justify-center text-indigo-400">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  {language === "en" ? "Digital Signature & PDF" : "ডিজিটাল স্বাক্ষর ও পিডিএফ"}
                </h3>
                <p className="text-xs text-slate-400">
                  {language === "en"
                    ? "Branded hospital header, BMDC doctor seal, and instant downloadable patient report."
                    : "হাসপাতালের নিজস্ব ব্র্যান্ডিং, চিকিৎসকের সিল ও তাৎক্ষণিক ডাউনলোড।"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-teal-950 border border-teal-800/80 flex items-center justify-center text-teal-400">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  {language === "en" ? "Automated Fee Tracking" : "ফি ও ট্র্যাকিং লেজার"}
                </h3>
                <p className="text-xs text-slate-400">
                  {language === "en"
                    ? "Transparent per-case fee calculation, monthly facility invoices, and doctor earnings."
                    : "স্বচ্ছ কেস ফি হিসাব, ল্যাব ইনভয়েস ও চিকিৎসকের সম্মানী লেজার।"}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-sky-950/50"
              >
                <span>{language === "en" ? "Inquire for Diagnostic Centers" : "ডায়াগনস্টিক সেন্টারের জন্য যোগাযোগ"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Mockup Card of Teleradiology Playground */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
            {/* Top Bar simulating the actual software header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400">
                  <Scan className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">BD Radiology Analyzer</h3>
                  <div className="text-[11px] text-slate-400">Case #RAD-2026-0842 • Chest X-Ray PA View</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                Ready for Review
              </span>
            </div>

            {/* Split Screen Simulation: X-ray Viewer + Clinical Report */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Simulated X-Ray Viewer */}
              <div className="relative aspect-[3/4] rounded-2xl bg-black border border-slate-800 flex flex-col justify-between p-3 overflow-hidden">
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>FOV: 35x43cm</span>
                  <span>120 kVp • 4 mAs</span>
                </div>

                {/* Visual Chest X-ray silhouette representation */}
                <div className="my-auto text-center space-y-1 opacity-70">
                  <div className="w-24 h-24 mx-auto border-2 border-slate-700/60 rounded-3xl flex items-center justify-center relative">
                    <div className="w-16 h-16 border border-slate-600/40 rounded-full" />
                    <div className="w-px h-16 bg-slate-600/40 absolute" />
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">CHEST PA • NORMAL CARDIOTHORACIC RATIO</div>
                </div>

                <div className="text-[10px] text-sky-400 bg-sky-950/80 px-2 py-1 rounded border border-sky-800/60 font-mono text-center">
                  AI Pre-Screen: No Infiltration Detected
                </div>
              </div>

              {/* Simulated Word-Style Doctor Report */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 space-y-3 flex flex-col justify-between text-xs">
                <div className="space-y-2">
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Radiological Impression
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 text-[11px] text-slate-300 leading-relaxed font-sans">
                    Lungs are clear with normal vascular markings. Both costophrenic angles are sharp. Cardiac size and contour are within normal physiological limits.
                  </div>
                  <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Impression: Normal study of chest.
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>E-Signature:</span>
                    <span className="text-emerald-400 font-semibold font-mono">DR-BMDC-49281-SEALED</span>
                  </div>
                  <div className="w-full py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-[11px] text-center shadow-md">
                    Export Official PDF Report
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>Trusted by diagnostic networks in Dhaka, Sylhet, and Chittagong.</span>
              <span className="text-sky-400 font-semibold">100% DICOM Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
