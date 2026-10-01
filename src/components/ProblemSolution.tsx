"use client";

import { XCircle, CheckCircle2, Zap, ArrowRight } from "lucide-react";

interface ProblemSolutionProps {
  language: "en" | "bn";
}

export default function ProblemSolution({ language }: ProblemSolutionProps) {
  const painPoints = [
    {
      title: language === "en" ? "Lost or Forgotten Paper Records" : "কাগজের ফাইল হারিয়ে যাওয়া",
      desc:
        language === "en"
          ? "Patients frequently misplace previous prescriptions, lab reports, and diagnostic scans before follow-up visits."
          : "ফলো-আপ ভিজিটে রোগীরা প্রায়ই পুরনো প্রেসক্রিপশন, এক্স-রে বা ল্যাব রিপোর্ট সঙ্গে আনতে ভুলে যান।",
    },
    {
      title: language === "en" ? "Illegible Handwriting & Drug Confusion" : "হাতের লেখার অস্পষ্টতা ও ওষুধের ভুল",
      desc:
        language === "en"
          ? "Misread medication names or dosages at pharmacies lead to adverse drug reactions and treatment risks."
          : "ফার্মেসিতে অস্পষ্ট হাতের লেখা পড়তে না পেরে ভুল ওষুধ বা ভুল ডোজ দেওয়ার মারাত্মক ঝুঁকি তৈরি হয়।",
    },
    {
      title: language === "en" ? "Repetitive Clerical Fatigue" : "একই প্রেসক্রিপশন বারবার লেখার ক্লান্তি",
      desc:
        language === "en"
          ? "Manually writing the same brand names and instructions for 40–80 patients a day drains hours of clinical time."
          : "প্রতিদিন ৪০-৮০ জন রোগীর জন্য একই ওষুধের নাম ও খাওয়ার নিয়ম হাতে লিখে মূল্যবান ঘণ্টার পর ঘণ্টা নষ্ট হয়।",
    },
  ];

  const solutions = [
    {
      title: language === "en" ? "Instant Lifetime Patient History" : "এক ক্লিকেই রোগীর আজীবন ইতিহাস",
      desc:
        language === "en"
          ? "Search any mobile number to review past visits, chronic diagnoses, past medications, and lab scans immediately."
          : "রোগীর মোবাইল নম্বর সার্চ করলেই আগের সব প্রেসক্রিপশন, ডোজ, রোগ নির্ণয় এবং এক্স-রে একসাথে স্ক্রিনে।",
    },
    {
      title: language === "en" ? "Clear, Verified e-Prescriptions" : "স্বচ্ছ, নির্ভুল ও প্রিন্ট উপযোগী ফরম্যাট",
      desc:
        language === "en"
          ? "Standardized BMDC-compliant format with auto-suggested brand and generic dosages directly from the registry."
          : "বিএমডিসি মানসম্মত ফরম্যাট এবং ড্রাগ ডেটাবেস থেকে সঠিক ডোজ ও ফর্মুলেশন নির্বাচনের সুযোগ।",
    },
    {
      title: language === "en" ? "Reclaim 2+ Hours Every Single Day" : "প্রতিদিন ২+ ঘণ্টার বেশি সময় সাশ্রয়",
      desc:
        language === "en"
          ? "Prepare prescriptions in under 60 seconds with reusable templates, letting you focus on thorough patient examination."
          : "ক্লিনিক্যাল টেমপ্লেটের মাধ্যমে এক মিনিটে প্রেসক্রিপশন তৈরি করে রোগীর শারীরিক পরীক্ষায় পূর্ণ মনোযোগ দিন।",
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === "en" ? "Practice Transformation" : "চেম্বারের আধুনিক রূপান্তর"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Why Bangladeshi Doctors Are Switching from Paper to SJ EMR"
              : "কেন বাংলাদেশের চিকিৎসকরা খাতা-কলম ছেড়ে এস জে ইএমআর বেছে নিচ্ছেন"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            {language === "en"
              ? "Replace disorganized filing cabinets and clerical fatigue with a fast, modern digital practice."
              : "কাগজের প্রেসক্রিপশন ও এলোমেলো নথিপত্রের ঝামেলা দূর করে আপনার চেম্বারে আনুন আধুনিক গতি।"}
          </p>
        </div>

        {/* Side by side comparison: Clean, balanced, uncluttered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Pain Points / The Paper Way */}
          <div className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-100">
                <span className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center font-bold text-sm">
                  ✕
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {language === "en" ? "The Traditional Paper Way" : "সনাতন কাগজ ও খাতার চেম্বার"}
                  </h3>
                  <p className="text-xs text-rose-600 font-medium">
                    {language === "en" ? "Slow, prone to loss, high clerical fatigue" : "সময় অপচয়, নথি হারানোর ভয় ও ত্রুটির ঝুঁকি"}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {painPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 text-pretty">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 text-xs text-rose-700 bg-rose-50/60 p-3 rounded-xl">
              {language === "en"
                ? "Doctors spend ~40% of consultation time on manual pen-work instead of examination."
                : "ডাক্তারদের ৪০% মূল্যবান সময় শারীরিক পরীক্ষার পরিবর্তে শুধু খাতা লিখতেই চলে যায়।"}
            </div>
          </div>

          {/* Solutions / The SJ EMR Way */}
          <div className="rounded-2xl bg-white border-2 border-emerald-500 p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-100">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-300 flex items-center justify-center font-bold text-sm">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {language === "en" ? "The SJ EMR Standard" : "এস জে ইএমআর ডিজিটাল মান"}
                    </h3>
                    <p className="text-xs text-emerald-700 font-medium">
                      {language === "en" ? "Instant retrieval, clean prescriptions, verified doses" : "তাৎক্ষণিক তথ্য, ৬০ সেকেন্ডে প্রেসক্রিপশন, নিশ্চিন্ত সেবা"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1 text-pretty">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-100 text-xs text-emerald-800 bg-emerald-50/70 p-3 rounded-xl flex items-center justify-between">
              <span>
                {language === "en"
                  ? "Saves 2+ hours daily while standardizing clinical care."
                  : "প্রতিদিন ২+ ঘণ্টার বেশি সময় বাঁচায় এবং নির্ভুল প্রেসক্রিপশন নিশ্চিত করে।"}
              </span>
              <a
                href="#pricing"
                className="text-emerald-700 hover:text-emerald-900 font-bold inline-flex items-center gap-1 shrink-0 ml-2"
              >
                <span>{language === "en" ? "See Plans" : "প্ল্যান দেখুন"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
