"use client";

interface MergedStatsProps {
  language: "en" | "bn";
}

export default function MergedStats({ language }: MergedStatsProps) {
  return (
    <section className="pt-14 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-start text-left">
          {/* Stat 1: Lead Social-Proof Stat */}
          <div className="flex flex-col justify-start">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-600 tracking-tight leading-none mb-2">
              {language === "en" ? "62,000+" : "৬২,০০০+"}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              {language === "en" ? "Consultations Completed" : "সম্পন্ন ডিজিটাল প্রেসক্রিপশন"}
            </div>
          </div>

          {/* Stat 2: Consultation to Rx */}
          <div className="flex flex-col justify-start">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-600 tracking-tight leading-none mb-2">
              {language === "en" ? "< 60s" : "< ৬০ সে."}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              {language === "en" ? "Consultation to Rx" : "কনসালটেশন ও প্রেসক্রিপশন"}
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
          </div>

          {/* Stat 4: Lost Patient Records */}
          <div className="flex flex-col justify-start">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-600 tracking-tight leading-none mb-2">
              {language === "en" ? "0%" : "০%"}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              {language === "en" ? "Lost Patient Records" : "রেকর্ড হারানোর ঝুঁকি"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
