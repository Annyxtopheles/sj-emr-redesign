"use client";

import { XCircle, CheckCircle2, Zap, ArrowRight, Clock, ShieldCheck, Database, FileSpreadsheet } from "lucide-react";

interface ProblemSolutionProps {
  language: "en" | "bn";
}

export default function ProblemSolution({ language }: ProblemSolutionProps) {
  const painPoints = [
    {
      title: language === "en" ? "Lost or Forgotten Paper Records" : "কাগজের ফাইল হারিয়ে যাওয়া",
      desc:
        language === "en"
          ? "Patients frequently misplace previous prescriptions, lab reports, and diagnostic scans before follow-up visits, forcing redundant tests."
          : "ফলো-আপ ভিজিটে রোগীরা প্রায়ই পুরনো প্রেসক্রিপশন, এক্স-রে বা ল্যাব রিপোর্ট সঙ্গে আনতে ভুলে যান, ফলে পুনরায় টেস্ট করাতে হয়।",
    },
    {
      title: language === "en" ? "Illegible Handwriting & Drug Confusion" : "হাতের লেখার অস্পষ্টতা ও ওষুধের ভুল",
      desc:
        language === "en"
          ? "Misread medication names or dosages at retail pharmacies create high clinical risk for adverse reactions and patient harm."
          : "ফার্মেসিতে অস্পষ্ট হাতের লেখা পড়তে না পেরে ভুল ওষুধ বা ভুল ডোজ দেওয়ার মারাত্মক ঝুঁকি তৈরি হয়।",
    },
    {
      title: language === "en" ? "Repetitive Clerical Exhaustion" : "একই প্রেসক্রিপশন বারবার লেখার ক্লান্তি",
      desc:
        language === "en"
          ? "Manually handwriting identical brand names, dosages, and instructions for 40–80 patients daily drains hours of clinical stamina."
          : "প্রতিদিন ৪০-৮০ জন রোগীর জন্য একই ওষুধের নাম ও খাওয়ার নিয়ম হাতে লিখে চিকিৎসকের মূল্যবান সময় ও মনোযোগ নষ্ট হয়।",
    },
  ];

  const solutions = [
    {
      title: language === "en" ? "Instant Lifetime Patient History" : "এক ক্লিকেই রোগীর আজীবন ইতিহাস",
      desc:
        language === "en"
          ? "Lookup any patient by mobile number to review longitudinal visits, chronic diagnoses, past medications, and lab scans immediately."
          : "রোগীর মোবাইল নম্বর সার্চ করলেই আগের সব প্রেসক্রিপশন, ডোজ, রোগ নির্ণয় এবং এক্স-রে একসাথে স্ক্রিনে চলে আসে।",
    },
    {
      title: language === "en" ? "Standardized BMDC-Compliant Formats" : "স্বচ্ছ, নির্ভুল ও বিএমডিসি মানসম্মত ফরম্যাট",
      desc:
        language === "en"
          ? "Clean digital prescriptions printed on your existing pad or shared via patient portal, with verified Bangladeshi drug catalog autosuggest."
          : "বিএমডিসি মানসম্মত ফরম্যাট এবং ড্রাগ ডেটাবেস থেকে সঠিক ডোজ ও ফর্মুলেশন নির্বাচনের মাধ্যমে শতভাগ নির্ভুল সেবা।",
    },
    {
      title: language === "en" ? "Reclaim 2+ Hours Every Single Day" : "প্রতিদিন ২+ ঘণ্টার বেশি সময় সাশ্রয়",
      desc:
        language === "en"
          ? "Prepare comprehensive prescriptions in under 60 seconds with reusable templates and Voice-to-Note dictation."
          : "ক্লিনিক্যাল টেমপ্লেট ও ভয়েস ডিক্টেশনের মাধ্যমে এক মিনিটে প্রেসক্রিপশন তৈরি করে রোগীর শারীরিক পরীক্ষায় পূর্ণ মনোযোগ দিন।",
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

        {/* Infographic KPI Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono tracking-tight">&lt; 60s</div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              {language === "en" ? "Consultation to Rx" : "প্রেসক্রিপশন প্রস্তুতের সময়"}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === "en" ? "Down from 8-10 mins" : "৮-১০ মিনিটের বদলে ৬০ সেকেন্ড"}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 font-mono tracking-tight">100%</div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              {language === "en" ? "BMDC Compliance" : "বিএমডিসি নির্দেশিকা সম্মত"}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === "en" ? "Standardized legal pads" : "স্বচ্ছ ও সুনির্দিষ্ট প্রিন্ট ফরম্যাট"}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-mono tracking-tight">0%</div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              {language === "en" ? "Lost Patient Records" : "নথি হারানোর ঝুঁকি শূন্য"}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === "en" ? "Lifetime cloud storage" : "আজীবন ক্লাউড হিস্ট্রি সংরক্ষণ"}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-mono tracking-tight">2+ Hrs</div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              {language === "en" ? "Daily Time Saved" : "প্রতিদিন সময় সাশ্রয়"}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {language === "en" ? "More time for physical exams" : "রোগীর পরীক্ষায় পূর্ণ মনোযোগ"}
            </div>
          </div>
        </div>

        {/* Side by side comparison: Elevated cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Pain Points / The Paper Way */}
          <div className="rounded-3xl bg-white border border-rose-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-100">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center font-bold text-base">
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
                <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                  Legacy
                </span>
              </div>

              <div className="space-y-5">
                {painPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 flex items-center justify-between text-xs text-rose-700 font-medium">
              <span>8-10 mins wasted per consultation</span>
              <span className="text-rose-600 font-bold">High Risk</span>
            </div>
          </div>

          {/* Solutions / The SJ EMR Way */}
          <div className="rounded-3xl bg-white border-2 border-emerald-500/80 p-6 sm:p-8 shadow-lg shadow-emerald-950/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-xs">
              {language === "en" ? "Recommended" : "প্রস্তাবিত"}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-100">
                <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold text-base">
                  ✓
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {language === "en" ? "The SJ EMR AI Lite Way" : "আধুনিক এস জে ইএমআরের গতি"}
                  </h3>
                  <p className="text-xs text-emerald-700 font-medium">
                    {language === "en" ? "Rapid, organized, cloud-backed peace of mind" : "৬০ সেকেন্ডে প্রেসক্রিপশন, আজীবন ক্লাউড ব্যাকআপ"}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs text-emerald-800 font-semibold">
              <span>Ready in under 60 seconds</span>
              <a href="#contact" className="text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 font-bold">
                <span>{language === "en" ? "Upgrade Chamber" : "চেম্বার আধুনিক করুন"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
