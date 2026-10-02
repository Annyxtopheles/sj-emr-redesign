"use client";

import CountUp from "@/components/ui/CountUp";

interface MergedStatsProps {
  language: "en" | "bn";
}

export default function MergedStats({ language }: MergedStatsProps) {
  return (
    <section className="pt-6 sm:pt-8 pb-6 sm:pb-8 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-start text-left">
          {/* Stat 1: Lead Social-Proof Stat */}
          <div className="flex flex-col justify-start">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-600 tracking-tight leading-none mb-2">
              <CountUp to={62000} separator="," duration={2} />+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              {language === "en" ? "Consultations Completed" : "সম্পন্ন ডিজিটাল প্রেসক্রিপশন"}
            </div>
          </div>

          {/* Stat 2: Consultation to Rx */}
          <div className="flex flex-col justify-start">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-600 tracking-tight leading-none mb-2">
              &lt; {language === "en" ? <><CountUp to={60} duration={1.8} />s</> : <>৬০ সে.</>}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              {language === "en" ? "Consultation to Rx" : "কনসালটেশন ও প্রেসক্রিপশন"}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              {language === "en" ? "Down from 8-10 mins" : "৮-১০ মিনিটের জায়গায়"}
            </div>
          </div>

          {/* Stat 3: Daily Time Saved */}
          <div className="flex flex-col justify-start">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-600 tracking-tight leading-none mb-2">
              {language === "en" ? "2+ Hrs" : "২+ ঘণ্টা"}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              {language === "en" ? "Daily Time Saved" : "প্রতিদিন সময় সাশ্রয়"}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              {language === "en" ? "More time for physical exams" : "রোগীকে বেশি সময় দেওয়ার সুযোগ"}
            </div>
          </div>

          {/* Stat 4: Lost Patient Records */}
          <div className="flex flex-col justify-start">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-600 tracking-tight leading-none mb-2">
              0%
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              {language === "en" ? "Lost Patient Records" : "রেকর্ড হারানোর ঝুঁকি"}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              {language === "en" ? "Lifetime cloud storage" : "আজীবন ক্লাউড স্টোরেজ"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
