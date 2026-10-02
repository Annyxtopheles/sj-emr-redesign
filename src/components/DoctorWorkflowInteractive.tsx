"use client";

import { Search, Zap, Printer, Clock, CheckCircle2 } from "lucide-react";

interface DoctorWorkflowInteractiveProps {
  language: "en" | "bn";
}

export default function DoctorWorkflowInteractive({ language }: DoctorWorkflowInteractiveProps) {
  const steps = [
    {
      step: "01",
      icon: Search,
      time: language === "en" ? "< 5 Sec" : "< ৫ সেকেন্ড",
      title: language === "en" ? "Patient Intake & History" : "রোগীর আগমন ও অতীত ইতিহাস",
      desc:
        language === "en"
          ? "Search by mobile number or serial token. Instantly retrieve lifetime clinical visits, drug allergies, and past lab reports with zero paper digging."
          : "মোবাইল নম্বর সার্চ করতেই রোগীর পূর্ববর্তী ভিজিট, ওষুধের অ্যালার্জি ও টেস্ট রিপোর্ট সাথে সাথে স্ক্রিনে চলে আসে। কোনো পুরনো ফাইল খোঁজার প্রয়োজন নেই।",
      highlight: language === "en" ? "Instant medical record retrieval" : "পুরনো প্রেসক্রিপশন ও রিপোর্ট এক ক্লিকে",
    },
    {
      step: "02",
      icon: Zap,
      time: language === "en" ? "< 35 Sec" : "< ৩৫ সেকেন্ড",
      title: language === "en" ? "Smart Drug Auto-Suggest" : "স্মার্ট ড্রাগ অটো-সাজেশন",
      desc:
        language === "en"
          ? "Type 2-3 letters of any brand or generic. The built-in Bangladeshi medicine registry auto-fills dosages, or apply your 1-click clinical templates."
          : "ওষুধের ২-৩টি অক্ষর লিখলেই দেশের অনুমোদিত ডেটাবেস থেকে সঠিক ডোজ ও ফর্মুলেশন চলে আসে, অথবা পছন্দের ক্লিনিক্যাল টেমপ্লেট অ্যাপ্লাই করুন।",
      highlight: language === "en" ? "Zero spelling or dosage errors" : "নির্ভুল জেনেরিক ও ব্র্যান্ড ড্রপডাউন",
    },
    {
      step: "03",
      icon: Printer,
      time: language === "en" ? "< 10 Sec" : "< ১০ সেকেন্ড",
      title: language === "en" ? "1-Click Print & Patient SMS" : "১-ক্লিকে প্রিন্ট ও পেশেন্ট এসএমএস",
      desc:
        language === "en"
          ? "Print a crisp, BMDC-compliant prescription on your existing chamber pad while SJ EMR automatically texts a digital copy to the patient's phone."
          : "আপনার নিজস্ব চেম্বার প্যাডে নিখুঁত প্রিন্ট নিন এবং স্বয়ংক্রিয়ভাবে রোগীর মোবাইলে এসএমএস ও পেশেন্ট পোর্টালে প্রেসক্রিপশন পাঠিয়ে দিন।",
      highlight: language === "en" ? "Total consultation: under 60s" : "মাত্র ৬০ সেকেন্ডেই সম্পূর্ণ প্রেসক্রিপশন প্রস্তুত",
    },
  ];

  return (
    <section id="workflow" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "From Patient Intake to Prescription in 60 Seconds"
              : "রোগীর আগমন থেকে প্রেসক্রিপশন প্রিন্ট—মাত্র ৬০ সেকেন্ডে"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            {language === "en"
              ? "Three clear steps engineered to eliminate clerical friction in busy Bangladeshi OPD chambers handling 40–80 patients daily."
              : "ব্যস্ততম চেম্বারে প্রতিদিন ৪০-৮০ জন রোগীর নির্ভুল চিকিৎসাসেবা নিশ্চিত করতে সহজ ও দ্রুত ৩টি ধাপ।"}
          </p>
        </div>

        {/* Unboxed 3-Step Typographic Workflow Layout */}
        <div className="relative">
          {/* Subtle Thin Connecting Line for Desktop */}
          <div
            className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-slate-200 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col">
                  {/* Top Row: Large Typographic Step Numeral & Quiet Time Label */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-5xl sm:text-6xl font-black text-emerald-600 tracking-tight select-none">
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{item.time}</span>
                    </span>
                  </div>

                  {/* Step Title & Icon */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 text-pretty">
                    {item.desc}
                  </p>

                  {/* Clean Bottom Highlight */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-pretty">{item.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Bottom Summary Strip */}
        <div className="mt-14 max-w-2xl mx-auto text-center pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            {language === "en"
              ? "Compatible with standard Windows PCs, laptops, regular thermal/laser printers, and pre-printed letterheads."
              : "সাধারণ উইন্ডোজ কম্পিউটার, ল্যাপটপ এবং যেকোনো চেম্বার প্যাড প্রিন্টারের সাথে সম্পূর্ণভাবে উপযোগী।"}
          </p>
        </div>
      </div>
    </section>
  );
}
