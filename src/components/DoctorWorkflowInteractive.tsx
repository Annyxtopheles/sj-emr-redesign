"use client";

import { useState } from "react";
import {
  Search,
  Zap,
  Printer,
  CheckCircle,
  Clock,
  ArrowRight,
  User,
  Pill,
  Smartphone,
  ShieldCheck,
  Send,
} from "lucide-react";

interface DoctorWorkflowInteractiveProps {
  language: "en" | "bn";
}

export default function DoctorWorkflowInteractive({ language }: DoctorWorkflowInteractiveProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: language === "en" ? "Patient Intake & History Lookup" : "রোগী আগমন ও অতীত হিস্ট্রি চেক",
      timing: language === "en" ? "0s – 5s" : "০ – ৫ সেকেন্ড",
      duration: "< 5 Sec",
      badge: language === "en" ? "Step 1: Intake" : "ধাপ ১: আগমন",
      desc:
        language === "en"
          ? "Staff enters the patient's mobile number or serial token. Instantly access lifetime medical history, past prescriptions, chief complaints, and past diagnostic reports."
          : "রোগীর মোবাইল নম্বর চাপতেই চোখের সামনে ভেসে উঠবে তার অতীত রোগ বিবরণী, পূর্ববর্তী প্রেসক্রিপশন, ড্রাগ অ্যালার্জি ও এক্স-রে রিপোর্ট।",
      highlight: language === "en" ? "Zero paper search or lost records" : "পুরনো ফাইল খোঁজাখুঁজির ঝামেলা নেই",
    },
    {
      number: "02",
      icon: Zap,
      title: language === "en" ? "Smart Drug Auto-Suggest & Templates" : "স্মার্ট ড্রাগ অটো-সাজেশন ও টেমপ্লেট",
      timing: language === "en" ? "5s – 40s" : "৫ – ৪০ সেকেন্ড",
      duration: "< 35 Sec",
      badge: language === "en" ? "Step 2: Prescribing" : "ধাপ ২: প্রেসক্রিপশন",
      desc:
        language === "en"
          ? "Type just 2-3 letters of any brand or generic. The local drug directory auto-suggests dosages and frequencies, or apply your 1-click clinical templates."
          : "ওষুধের ২-৩টি অক্ষর লিখলেই বাংলাদেশের অনুমোদিত ওষুধ, ড্রপডাউন ডোজ ও খাবার নিয়ম চলে আসে। অথবা আপনার পছন্দের প্রি-সেট টেমপ্লেট অ্যাপ্লাই করুন।",
      highlight: language === "en" ? "Zero spelling or dosage calculation errors" : "নির্ভুল জেনেরিক ও ব্র্যান্ড প্রেসক্রিপশন",
    },
    {
      number: "03",
      icon: Printer,
      title: language === "en" ? "1-Click Chamber Print & Patient SMS" : "১ ক্লিকে প্রিন্ট ও পেশেন্ট অ্যাপ সিঙ্ক",
      timing: language === "en" ? "40s – 60s" : "৪০ – ৬০ সেকেন্ড",
      duration: "< 10 Sec",
      badge: language === "en" ? "Step 3: Dispatch" : "ধাপ ৩: প্রিন্ট ও এসএমএস",
      desc:
        language === "en"
          ? "Print a crisp, BMDC-compliant prescription on your pre-printed doctor pad, while SJ EMR automatically texts a digital prescription link directly to the patient's phone."
          : "আপনার নিজস্ব প্যাডে প্রেসক্রিপশন সরাসরি প্রিন্ট দিন এবং স্বয়ংক্রিয়ভাবে রোগীর মোবাইলে এসএমএস ও অ্যান্ড্রয়েড অ্যাপে পৌঁছে দিন।",
      highlight: language === "en" ? "Total consultation ~ 60 seconds" : "মাত্র ৬০ সেকেন্ডেই পূর্ণাঙ্গ কাজ সম্পন্ন",
    },
  ];

  const step1Data = {
    query: "01712-894520",
    patient: {
      name: language === "en" ? "Abdul Karim (Male, 48 yrs)" : "আব্দুল করিম (পুরুষ, ৪৮ বছর)",
      id: "PT-2026-0841",
      history: language === "en" ? "Type 2 Diabetes, Hypertension" : "টাইপ-২ ডায়াবেটিস, উচ্চ রক্তচাপ",
      allergy: language === "en" ? "Penicillin (Severe)" : "পেনিসিলিন অ্যালার্জি",
      lastVisit: language === "en" ? "12 Sept 2026 (BP: 135/85)" : "১২ সেপ্টেম্বর ২০২৬ (বিপি: ১৩৫/৮৫)",
    },
  };

  const step2Data = {
    suggested: "Tab. Napa Extra (Paracetamol 500mg + Caffeine 65mg - Beximco)",
    dose: language === "en" ? "1 + 0 + 1 (After meals) — 3 Days" : "১ + ০ + ১ (খাবারের পর) — ৩ দিন",
    advice: language === "en" ? "Drink adequate water, avoid cold exposure." : "পর্যাপ্ত পানি পান করুন, ঠান্ডা পরিহার করুন।",
  };

  const step3Data = {
    printStatus: language === "en" ? "BMDC Format Sent to Chamber Printer" : "বিএমডিসি ফরম্যাটে প্রিন্টারে পাঠানো হয়েছে",
    smsStatus: language === "en" ? "Digital Prescription SMS Dispatched" : "ডিজিটাল প্রেসক্রিপশন এসএমএস পাঠানো হয়েছে",
    targetPhone: "+880 1712-894520",
    portal: language === "en" ? "Synced to Android Patient Portal" : "অ্যান্ড্রয়েড পেশেন্ট পোর্টালে সিঙ্ক সম্পন্ন",
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "en" ? "Peak Chamber Efficiency" : "ব্যস্ত চেম্বারে দ্রুততম সেবা"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "From Patient Intake to Prescription in 60 Seconds"
              : "রোগীর আগমন থেকে প্রেসক্রিপশন প্রিন্ট—মাত্র ৬০ সেকেন্ডে"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            {language === "en"
              ? "Engineered specifically for busy Bangladeshi OPD clinics handling 40–80 patients per consultation session without administrative bottlenecks."
              : "ব্যস্ততম চেম্বারে প্রতিদিন ৪০-৮০ জন রোগীর নিখুঁত সেবা দিতে এই ৩-ধাপের দ্রুততম প্রক্রিয়া।"}
          </p>
        </div>

        {/* Continuous Process Timeline Flow (Desktop & Tablet) */}
        <div className="relative mb-12 hidden md:block">
          {/* Connecting Background Line */}
          <div className="absolute top-1/2 left-12 right-12 -translate-y-1/2 h-1 bg-slate-200 z-0">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500"
              style={{
                width: activeStep === 0 ? "25%" : activeStep === 1 ? "60%" : "100%",
              }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="grid grid-cols-3 relative z-10">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = activeStep >= idx;
              const Icon = step.icon;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  {/* Step Node Circle */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                      isSelected
                        ? "bg-emerald-600 text-white scale-110 ring-4 ring-emerald-500/20 shadow-emerald-950/20"
                        : isPassed
                        ? "bg-emerald-800 text-emerald-100"
                        : "bg-white text-slate-400 border-2 border-slate-300 hover:border-slate-400"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Timing Pill */}
                  <div className="mt-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider transition-colors ${
                        isSelected
                          ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {step.timing}
                    </span>
                  </div>

                  {/* Step Label */}
                  <div className="mt-1 text-center">
                    <span
                      className={`text-xs sm:text-sm font-bold transition-colors ${
                        isSelected ? "text-emerald-800" : "text-slate-600"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Cards Grid (Interactive Stepper Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const Icon = step.icon;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all border relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-emerald-500 shadow-xl ring-2 ring-emerald-500/20"
                    : "bg-slate-50/80 border-slate-200 hover:border-emerald-300 hover:bg-white"
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border ${
                        isSelected
                          ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                          : "bg-slate-100 text-slate-600 border-slate-200"
                      }`}
                    >
                      {step.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>{step.duration}</span>
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-emerald-600 text-white" : "bg-slate-200/80 text-slate-600"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug text-balance">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 text-pretty">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-pretty">{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Chamber Simulator Box (Shows exact UI action for active step) */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  {language === "en" ? "Live Chamber Simulation" : "চেম্বার সিমুলেশন ভিউ"}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {steps[activeStep].title} — {steps[activeStep].duration}
                </h4>
              </div>
            </div>
            <div className="text-xs text-slate-400">
              {language === "en" ? "Click any step above to preview clinical action" : "উপরে যেকোনো ধাপে ক্লিক করে প্রিভিউ দেখুন"}
            </div>
          </div>

          {/* Simulator Content for Step 1: Instant Patient Search */}
          {activeStep === 0 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
                <Search className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="flex-1 font-mono text-xs text-emerald-300">
                  {step1Data.query}
                </div>
                <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-mono">
                  {language === "en" ? "FOUND (0.04s)" : "ম্যাচ পাওয়া গেছে"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">
                    {language === "en" ? "Patient Profile" : "রোগীর প্রোফাইল"}
                  </span>
                  <div className="font-bold text-white text-sm">
                    {step1Data.patient.name}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">
                    ID: {step1Data.patient.id}
                  </span>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">
                    {language === "en" ? "Medical History" : "মেডিকেল হিস্ট্রি"}
                  </span>
                  <div className="font-medium text-slate-200">
                    {step1Data.patient.history}
                  </div>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                  <span className="text-[10px] text-rose-400 uppercase font-semibold block mb-1">
                    {language === "en" ? "Known Allergies" : "অ্যালার্জি সতর্কতা"}
                  </span>
                  <div className="font-bold text-rose-300">
                    {step1Data.patient.allergy}
                  </div>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">
                    {language === "en" ? "Last Consultation" : "সর্বশেষ ভিজিট"}
                  </span>
                  <div className="font-medium text-slate-200">
                    {step1Data.patient.lastVisit}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Simulator Content for Step 2: Smart e-Prescribing */}
          {activeStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 mb-1 font-mono">
                  {language === "en" ? "Drug Search Auto-Complete Dropdown:" : "ড্রাগ সার্চ ড্রপডাউন সাজেশন:"}
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-emerald-400 font-bold mb-2">
                  <Pill className="w-4 h-4 text-emerald-400" />
                  <span>{step2Data.suggested}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-slate-800">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">
                      {language === "en" ? "Dosage Regimen:" : "সেবনবিধি:"}
                    </span>
                    <span className="font-bold text-white">{step2Data.dose}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">
                      {language === "en" ? "Doctor Instructions:" : "বিশেষ পরামর্শ:"}
                    </span>
                    <span className="text-slate-300">{step2Data.advice}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Simulator Content for Step 3: Print & SMS Dispatch */}
          {activeStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 flex items-start gap-3">
                  <Printer className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      {language === "en" ? "Physical Chamber Print" : "চেম্বার প্রিন্ট"}
                    </span>
                    <p className="text-[11px] text-emerald-300 mt-1">
                      {step3Data.printStatus}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 flex items-start gap-3">
                  <Send className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      {language === "en" ? "Automated SMS Link" : "এসএমএস ডেলিভারি"}
                    </span>
                    <p className="text-[11px] text-teal-300 mt-1">
                      {step3Data.smsStatus} ({step3Data.targetPhone})
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      {language === "en" ? "Patient App Sync" : "পেশেন্ট অ্যাপ সিঙ্ক"}
                    </span>
                    <p className="text-[11px] text-cyan-300 mt-1">
                      {step3Data.portal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
