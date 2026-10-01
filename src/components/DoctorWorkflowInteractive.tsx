"use client";

import { useState } from "react";
import { Search, Zap, Printer, CheckCircle, Clock, ShieldCheck, FileCheck, Smartphone } from "lucide-react";

interface DoctorWorkflowInteractiveProps {
  language: "en" | "bn";
}

export default function DoctorWorkflowInteractive({ language }: DoctorWorkflowInteractiveProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: language === "en" ? "Instant Patient Lookup" : "তাৎক্ষণিক রোগী অনুসন্ধান",
      duration: "< 5 Sec",
      desc:
        language === "en"
          ? "Input patient mobile number or scan token. Instantly access lifetime medical history, past prescriptions, chief complaints, and past diagnostic reports."
          : "রোগীর মোবাইল নম্বর চাপতেই চোখের সামনে ভেসে উঠবে তার অতীত রোগ বিবরণী, পূর্ববর্তী প্রেসক্রিপশন, অ্যালার্জি ও এক্স-রে রিপোর্ট।",
      highlight: language === "en" ? "No manual paper search" : "পুরনো ফাইল খোঁজাখুঁজির ঝামেলা নেই",
    },
    {
      number: "02",
      icon: Zap,
      title: language === "en" ? "Smart Drug Auto-Suggest" : "স্মার্ট ড্রাগ অটো-সাজেশন ও টেমপ্লেট",
      duration: "< 35 Sec",
      desc:
        language === "en"
          ? "Type just 2-3 letters to fetch verified pharmaceutical brands and dosages from the Bangladeshi medicine registry, or apply your 1-click clinical templates."
          : "ওষুধের ২-৩টি অক্ষর লিখলেই বাংলাদেশের অনুমোদিত ওষুধ, ড্রপডাউন ডোজ ও খাবার নিয়ম চলে আসে। অথবা আপনার পছন্দের প্রি-সেট টেমপ্লেট অ্যাপ্লাই করুন।",
      highlight: language === "en" ? "Zero spelling or dosage errors" : "নির্ভুল জেনেরিক ও ব্র্যান্ড প্রেসক্রিপশন",
    },
    {
      number: "03",
      icon: Printer,
      title: language === "en" ? "1-Click Print & Patient SMS" : "১ ক্লিকে প্রিন্ট ও পেশেন্ট অ্যাপ সিঙ্ক",
      duration: "< 10 Sec",
      desc:
        language === "en"
          ? "Print crisp BMDC-compliant prescription on your official chamber letterhead, or deliver directly to the patient's Android app and phone via SMS."
          : "আপনার নিজস্ব প্যাডে প্রেসক্রিপশন সরাসরি প্রিন্ট দিন এবং স্বয়ংক্রিয়ভাবে রোগীর মোবাইলে এসএমএস ও অ্যান্ড্রয়েড অ্যাপে পৌঁছে দিন।",
      highlight: language === "en" ? "Total consultation ~ 60 seconds" : "মাত্র ৬০ সেকেন্ডেই পূর্ণাঙ্গ কাজ সম্পন্ন",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "en" ? "Peak Chamber Efficiency" : "ব্যস্ত চেম্বারে দ্রুততম সেবা"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {language === "en"
              ? "From Patient Intake to Prescription in 60 Seconds"
              : "রোগীর আগমন থেকে প্রেসক্রিপশন প্রিন্ট—মাত্র ৬০ সেকেন্ডে"}
          </h2>
          <p className="text-base text-slate-600">
            {language === "en"
              ? "Designed specifically for busy Bangladeshi OPD clinics handling 40–80 patients per session without delays."
              : "ব্যস্ততম চেম্বারে প্রতিদিন ৪০-৮০ জন রোগীর নিখুঁত সেবা দিতে এই ৩-ধাপের দ্রুততম প্রক্রিয়া।"}
          </p>
        </div>

        {/* 3 Steps interactive cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all border relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-emerald-500 shadow-xl ring-2 ring-emerald-500/20"
                    : "bg-white/80 border-slate-200 hover:border-emerald-300 hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-black ${
                        isSelected ? "text-emerald-600" : "text-slate-300"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>{step.duration}</span>
                    </span>
                  </div>

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      isSelected ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
