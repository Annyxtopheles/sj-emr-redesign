"use client";

import { Search, Zap, Printer, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import CountUp from "@/components/ui/CountUp";

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
    <section id="workflow" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "en" ? "Streamlined 60-Second Consultation" : "ব্যস্ত চেম্বারে দ্রুততম সেবা"}</span>
          </div>
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

        {/* Infographic KPI Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
              &lt; <CountUp to={60} duration={1.8} />s
            </div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              {language === "en" ? "Consultation to Rx" : "প্রেসক্রিপশন প্রস্তুতের সময়"}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === "en" ? "Down from 8-10 mins" : "৮-১০ মিনিটের বদলে ৬০ সেকেন্ড"}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
              <CountUp to={100} duration={1.6} />%
            </div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              {language === "en" ? "BMDC Compliance" : "বিএমডিসি নির্দেশিকা সম্মত"}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === "en" ? "Standardized legal pads" : "স্বচ্ছ ও সুনির্দিষ্ট প্রিন্ট ফরম্যাট"}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">0%</div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              {language === "en" ? "Lost Patient Records" : "নথি হারানোর ঝুঁকি শূন্য"}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === "en" ? "Lifetime cloud storage" : "আজীবন ক্লাউড হিস্ট্রি সংরক্ষণ"}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
              <CountUp to={2} duration={1.5} />+ Hrs
            </div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              {language === "en" ? "Daily Time Saved" : "প্রতিদিন সময় সাশ্রয়"}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === "en" ? "More time for physical exams" : "রোগীর পরীক্ষায় পূর্ণ মনোযোগ"}
            </div>
          </div>
        </div>

        {/* Clean Minimalist Step Timeline */}
        <div className="relative">
          {/* Subtle Horizontal Track Line for Desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-200 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Step Number & Time Pill */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                            {language === "en" ? `Step ${item.step}` : `ধাপ ${item.step}`}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        <span>{item.time}</span>
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug text-balance">
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 text-pretty">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Highlight Pill */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-pretty">{item.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Bottom Summary Strip */}
        <div className="mt-10 max-w-2xl mx-auto text-center">
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
