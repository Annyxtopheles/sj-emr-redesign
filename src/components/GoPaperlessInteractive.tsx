"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Sparkles,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  Printer,
} from "lucide-react";
import PaperCrumple from "@/components/ui/PaperCrumple";
import { getAssetPath } from "@/lib/asset-path";

interface GoPaperlessInteractiveProps {
  language: "en" | "bn";
}

export default function GoPaperlessInteractive({ language }: GoPaperlessInteractiveProps) {
  const [isCrumpled, setIsCrumpled] = useState(false);
  const [isTossing, setIsTossing] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const triggerTossAndFade = () => {
    if (isTossing || isCrumpled) return;
    setIsTossing(true);
    // Smooth physical fade & toss duration
    setTimeout(() => {
      setIsCrumpled(true);
      setIsTossing(false);
    }, 700);
  };

  const handleStateChange = (state: string) => {
    if (state === "crumpled") {
      // User dropped, crumpled, or tossed the paper!
      triggerTossAndFade();
    }
  };

  const handleReset = () => {
    setIsTossing(false);
    setIsCrumpled(false);
    setResetKey((prev) => prev + 1);
  };

  return (
    <section id="paperless" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === "en" ? "Practice Transformation" : "চেম্বারের আধুনিক রূপান্তর"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Ditch the Paper Pad. Step Into Modern Digital Practice."
              : "খাতা-কলমের ঝামেলা শেষ। আপনার চেম্বারকে করুন আধুনিক ও পেপারলেস।"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            {language === "en"
              ? "Physical pads get lost, handwritten drugs get misread at retail pharmacies, and doctors waste 2+ hours daily rewriting identical scripts. Grab the old paper pad and crumple it away to reveal the digital future."
              : "কাগজের প্রেসক্রিপশন হারিয়ে যায়, ফার্মেসিতে হাতের লেখা অস্পষ্ট থাকে এবং প্রতিদিন একই ওষুধ হাতে লিখে সময় নষ্ট হয়। ডানের কাগজের প্যাডটি টেনে দুমড়ে ফেলে দিয়ে ডিজিটাল চেম্বার উন্মোচন করুন।"}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Why Switch Benefits */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {language === "en" ? "0% Lost Patient Records" : "নথি হারানোর কোনো ভয় নেই"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "en"
                      ? "Search any patient by mobile number. Longitudinal visits, past medications, and lab reports appear instantly on screen with zero paper digging."
                      : "মোবাইল নম্বর সার্চ করলেই আগের সব প্রেসক্রিপশন, রোগ নির্ণয় এবং এক্স-রে একসাথে স্ক্রিনে চলে আসে।"}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {language === "en" ? "Zero Pharmacy Dispensing Errors" : "শতভাগ নির্ভুল ওষুধ বিতরণ"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "en"
                      ? "Crystal-clear printed typography and auto-dosage schedules from the comprehensive Bangladeshi drug registry eliminate handwriting misinterpretation."
                      : "ড্রাগ ডেটাবেস থেকে সঠিক ডোজ ও ফর্মুলেশন নির্বাচনের মাধ্যমে ফার্মেসিতে ভুল ওষুধ পাওয়ার মারাত্মক ঝুঁকি সম্পূর্ণ দূর হয়।"}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {language === "en" ? "1-Click Print & Auto-SMS" : "১-ক্লিকে চেম্বার প্যাড প্রিন্ট ও এসএমএস"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "en"
                      ? "Print crisp, BMDC-compliant prescriptions directly onto your existing chamber letterhead while texting an automated digital copy to the patient's phone."
                      : "আপনার নিজস্ব চেম্বার প্যাডে নিখুঁত প্রিন্ট নিন এবং স্বয়ংক্রিয়ভাবে রোগীর মোবাইলে এসএমএস ও পেশেন্ট পোর্টালে প্রেসক্রিপশন পৌঁছে দিন।"}
                  </p>
                </div>
              </div>
            </div>

            {/* Replay Option - Fixed height slot so cards never shift */}
            <div className="h-12 flex items-center pt-2">
              <button
                type="button"
                onClick={handleReset}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-xs shadow-xs transition-all duration-300 cursor-pointer ${
                  isCrumpled
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-1"
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === "en" ? "Restore Paper Pad" : "কাগজের প্যাড পুনরায় আনুন"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Paper Crumple Stage revealing SJ EMR */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-2 sm:p-4 shadow-2xl min-h-[560px] flex items-center justify-center">
              {/* UNDERNEATH: The Pristine SJ EMR Digital Prescription UI */}
              <div className="relative w-full h-full bg-white rounded-2xl p-5 sm:p-7 text-slate-800 flex flex-col justify-between border border-slate-200 overflow-hidden shadow-sm">
                {/* Clean Frosted Glass Blur Overlay behind paper - transitions to clear when tossed */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-700 ease-out pointer-events-none z-10 ${
                    isCrumpled || isTossing
                      ? "backdrop-blur-none bg-transparent opacity-0"
                      : "backdrop-blur-md bg-white/20"
                  }`}
                />

                <div>
                  {/* Digital Prescription Header */}
                  <div className="flex items-start justify-between pb-4 border-b border-slate-200 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded uppercase tracking-wider">
                          SJ EMR Digital Pad
                        </span>
                        <span className="text-xs text-slate-500 font-mono">#RX-2026-9812</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                        Prof. Dr. M. A. Rahman
                      </h4>
                      <p className="text-xs text-slate-600">
                        MBBS, FCPS (Medicine) • BMDC Reg #18429
                      </p>
                    </div>

                    <div className="text-right hidden sm:block">
                      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>BMDC Verified Format</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">Date: 14 Oct 2026</p>
                    </div>
                  </div>

                  {/* Patient Info Bar */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 mb-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="text-slate-500">Patient: </span>
                      <span className="font-bold text-slate-900">Md. Rafiqul Islam</span>
                      <span className="text-slate-500 ml-2">(48Y / Male)</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Contact: </span>
                      <span className="font-mono font-medium text-slate-800">+880 1711-xxxxxx</span>
                    </div>
                    <div className="text-emerald-700 font-semibold">
                      Past Visits: 3 (Lifetime Cloud Synced)
                    </div>
                  </div>

                  {/* Prescribed Medicines Clean Digital List */}
                  <div className="space-y-2.5 mb-5">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Prescribed Medications (DGDA Database Synced)
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-slate-900">1. Tab. Napa Extra (500mg+65mg)</span>
                        <span className="text-slate-500 text-[11px] block">Paracetamol + Caffeine • Square Pharmaceuticals</span>
                      </div>
                      <span className="font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        1 + 1 + 1 (4 Days)
                      </span>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-slate-900">2. Cap. Seclo 20mg</span>
                        <span className="text-slate-500 text-[11px] block">Omeprazole • Square Pharmaceuticals</span>
                      </div>
                      <span className="font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        1 + 0 + 1 (14 Days, Before Meals)
                      </span>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-slate-900">3. Syp. Tofen 100ml</span>
                        <span className="text-slate-500 text-[11px] block">Ketotifen • Beximco Pharma</span>
                      </div>
                      <span className="font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        2 Tsp TDS (7 Days)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Digital Action & Confirmation Bar */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    <span>Automated SMS with prescription link dispatched</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-mono text-[11px]">Time saved: 7 mins</span>
                    <span className="px-2.5 py-1 rounded bg-slate-900 text-white font-bold text-[11px]">
                      Printed on Chamber Pad
                    </span>
                  </div>
                </div>
              </div>

              {/* OVERLAY: 3D Physical Paper Pad Simulation with Massive Unclipped Viewport */}
              {!isCrumpled && (
                <div
                  className={`absolute -inset-y-96 -inset-x-[48rem] z-20 flex items-center justify-center transition-all duration-700 ease-out pointer-events-none ${
                    isTossing
                      ? "opacity-0 scale-50 translate-x-48 -translate-y-48 blur-sm"
                      : "opacity-100 scale-100 translate-y-0"
                  }`}
                >
                  <div className="w-full h-full pointer-events-auto">
                    <PaperCrumple
                      src={getAssetPath("/assets/old-prescription-pad.png")}
                      alt="Old handwritten prescription pad"
                      width={330}
                      height={420}
                      sceneHeight="100%"
                      releaseBehavior="stay"
                      crumpleAmount={0.92}
                      creaseStrength={0.25}
                      paperColor="#f8f4ea"
                      dragRadius={3500}
                      returnToOrigin={false}
                      resetKey={resetKey}
                      onStateChange={handleStateChange}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
