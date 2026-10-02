"use client";

import {
  Scan,
  FileText,
  Building2,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";

interface TeleradiologyShowcaseProps {
  language: "en" | "bn";
}

export default function TeleradiologyShowcase({ language }: TeleradiologyShowcaseProps) {
  return (
    <section id="teleradiology" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <Scan className="w-3.5 h-3.5 text-emerald-700" />
              <span>{language === "en" ? "Diagnostic Imaging Network" : "টেলিরেডিওলজি ও ডায়াগনস্টিক নেটওয়ার্ক"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              {language === "en"
                ? "Connect Diagnostic Centers with Certified Radiologists"
                : "ডায়াগনস্টিক সেন্টার ও বিশেষজ্ঞ রেডিওলজিস্টদের সমন্বয়ে সমন্বিত নেটওয়ার্ক"}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
              {language === "en"
                ? "Beyond individual doctor chambers, SJ EMR powers a complete teleradiology portal. Diagnostic centers across Bangladesh upload X-rays and scans, while certified radiologists report cases remotely with custom templates and digital signatures."
                : "ব্যক্তিগত চেম্বার ছাড়াও এস জে ইএমআরে রয়েছে টেলিরেডিওলজি সুবিধা। বাংলাদেশের যে কোনো প্রান্তের ল্যাব থেকে এক্স-রে বা স্ক্যান আপলোড এবং প্রত্যয়িত রেডিওলজিস্টদের মাধ্যমে রিমোট রিপোর্ট তৈরির ব্যবস্থা।"}
            </p>

            {/* 4 Feature Pillars in Clean Bright Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {language === "en" ? "Lab Tech Case Intake" : "ল্যাব টেকনিশিয়ান এন্ট্রি"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === "en"
                    ? "Phone-first patient lookup, scan uploads, and automated study date assignment."
                    : "মোবাইল নম্বর সার্চ, দ্রুত স্ক্যান আপলোড ও কেস ট্র্যাকিং।"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {language === "en" ? "Radiologist Worklist" : "রেডিওলজিস্ট ওয়ার্কলিস্ট"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === "en"
                    ? "Clean report editor, specialized chest/skeletal templates, and fast review tools."
                    : "সম্পূর্ণ ওয়ার্ড-স্টাইল এডিটর ও প্রস্তুতকৃত স্পেশালাইজড টেমপ্লেট।"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {language === "en" ? "Digital Signature & PDF" : "ডিজিটাল স্বাক্ষর ও পিডিএফ"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === "en"
                    ? "Hospital branding header, BMDC doctor verification, and downloadable patient reports."
                    : "হাসপাতালের নিজস্ব ব্র্যান্ডিং, চিকিৎসকের সিল ও তাৎক্ষণিক ডাউনলোড।"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {language === "en" ? "Transparent Fee Tracking" : "ফি ও ট্র্যাকিং লেজার"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === "en"
                    ? "Automated per-case fees, diagnostic facility invoices, and doctor payouts."
                    : "স্বচ্ছ কেস ফি হিসাব, ল্যাব ইনভয়েস ও চিকিৎসকের সম্মানী লেজার।"}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <span>{language === "en" ? "Inquire for Diagnostic Centers" : "ডায়াগনস্টিক সেন্টারের জন্য যোগাযোগ"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Mockup Card of Teleradiology Playground */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
            {/* Top Bar simulating the software header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-700 shadow-2xs">
                  <Scan className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">BD Radiology Analyzer</h3>
                  <div className="text-[11px] text-slate-500">Case #RAD-2026-0842 • Chest X-Ray PA View</div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Ready for Review
              </span>
            </div>

            {/* Split Screen Simulation: X-ray Viewer + Clinical Report */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Simulated X-Ray Viewer */}
              <div className="relative aspect-[3/4] rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between p-3 overflow-hidden text-white">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>FOV: 35x43cm</span>
                  <span>120 kVp • 4 mAs</span>
                </div>

                {/* Visual Chest X-ray silhouette representation */}
                <div className="my-auto text-center space-y-1 opacity-70">
                  <div className="w-20 h-20 mx-auto border-2 border-slate-700 rounded-3xl flex items-center justify-center relative">
                    <div className="w-14 h-14 border border-slate-600 rounded-full" />
                    <div className="w-px h-14 bg-slate-600 absolute" />
                  </div>
                  <div className="text-[10px] text-slate-300">CHEST PA • CARDIAC OUTLINE NORMAL</div>
                </div>

                <div className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-1 rounded border border-emerald-800/60 text-center font-medium">
                  Scan Quality: Clear Exposure
                </div>
              </div>

              {/* Simulated Word-Style Doctor Report */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-3 flex flex-col justify-between text-xs">
                <div className="space-y-2">
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Radiological Findings
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-700 leading-relaxed">
                    Lungs are clear with normal bronchovascular markings. Both costophrenic angles are sharp. Cardiac size and contour are within normal physiological limits.
                  </div>
                  <div className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Impression: Normal study of chest.</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>E-Signature:</span>
                    <span className="text-emerald-800 font-semibold">DR-BMDC-49281-SEALED</span>
                  </div>
                  <div className="w-full py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs text-center shadow-xs">
                    Export Official PDF Report
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-200/80">
              <span>Trusted by diagnostic facilities in Dhaka, Sylhet, and Chittagong.</span>
              <span className="text-emerald-700 font-semibold">DICOM Compatible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
