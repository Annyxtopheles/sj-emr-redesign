"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mic,
  FileText,
  FileCheck2,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  ScanLine,
} from "lucide-react";

interface AIPlaygroundProps {
  language: "en" | "bn";
}

export default function AIPlaygroundInteractive({ language }: AIPlaygroundProps) {
  const [activeTab, setActiveTab] = useState<"voice" | "ocr" | "lab">("voice");
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasProcessed, setHasProcessed] = useState(true);

  const handleSimulate = () => {
    setIsProcessing(true);
    setHasProcessed(false);
    setTimeout(() => {
      setIsProcessing(false);
      setHasProcessed(true);
    }, 800);
  };

  return (
    <section id="ai-demo" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800 scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "en" ? "Interactive Clinical AI Simulator" : "ক্লিনিক্যাল এআই ইন্টারঅ্যাক্টিভ ডেমো"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === "en" ? (
              <>
                Test Drive SJ EMR’s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Multimodal AI Tools
                </span>
              </>
            ) : (
              <>
                অভিজ্ঞতা নিন এস জে ইএমআরের{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  মাল্টিমোডাল এআই প্রযুক্তির
                </span>
              </>
            )}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {language === "en"
              ? "See how our built-in Gemini clinical agents understand Bangla medical dictation, decode handwritten prescriptions, and interpret lab reports."
              : "বাংলা ও ইংরেজি ভয়েস ডিক্টেশন, হাতের লেখা প্রেসক্রিপশন ও ল্যাব রিপোর্টকে কীভাবে নিমিষেই ডিজিটাল ফাইলে রূপান্তর করে তা সরাসরি পরখ করুন।"}
          </p>
        </div>

        {/* 3 Interactive Mode Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => {
              setActiveTab("voice");
              setHasProcessed(true);
            }}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
              activeTab === "voice"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400/50"
                : "bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/60"
            }`}
          >
            <Mic className="w-4 h-4 shrink-0" />
            <span>{language === "en" ? "Bangla Voice-to-Note" : "বাংলা ভয়েস-টু-নোট"}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("ocr");
              setHasProcessed(true);
            }}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
              activeTab === "ocr"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400/50"
                : "bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/60"
            }`}
          >
            <ScanLine className="w-4 h-4 shrink-0" />
            <span>{language === "en" ? "Handwriting Pad OCR" : "হাতের লেখার প্রেসক্রিপশন OCR"}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("lab");
              setHasProcessed(true);
            }}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
              activeTab === "lab"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400/50"
                : "bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/60"
            }`}
          >
            <FileCheck2 className="w-4 h-4 shrink-0" />
            <span>{language === "en" ? "Lab Report Scanner" : "ল্যাব রিপোর্ট ইন্টারপ্রেটার"}</span>
          </button>
        </div>

        {/* Playground Display Stage */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* TAB 1: VOICE TO NOTE */}
          {activeTab === "voice" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Doctor Voice Input Simulation */}
              <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5" />
                    {language === "en" ? "Doctor Voice Input (Bangla + EN)" : "ডাক্তারের সরাসরি ভয়েস ইনপুট"}
                  </span>
                  <span className="text-[11px] bg-red-950/80 text-red-400 border border-red-800/60 px-2 py-0.5 rounded-full flex items-center gap-1.5 font-mono">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Transcribing
                  </span>
                </div>

                <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 font-sans text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;রোগীর ৩ দিন ধরে তীব্র জ্বর, সাথে শুকনো কাশি ও গায়ে ব্যথা। তাপমাত্রা ১০২ ডিগ্রি ফারেনহাইট। ফুসফুসে কোনো হুইজ নেই। কোনো ড্রাগ এলার্জি নেই।&rdquo;
                </div>

                {/* Simulated Audio Waveform */}
                <div className="flex items-center justify-center gap-1 py-3 px-4 bg-slate-950/60 rounded-xl border border-slate-800/50">
                  {[40, 65, 80, 45, 90, 60, 35, 75, 95, 50, 70, 85, 40, 60, 90, 55, 30].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-1.5 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-full transition-all duration-300"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-400">Gemini Clinical STT Engine</span>
                  <button
                    onClick={handleSimulate}
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{language === "en" ? "Re-run AI Structuring" : "পুনরায় পরীক্ষা করুন"}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Structured Clinical SOAP Note */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {language === "en" ? "AI Generated SOAP Clinical Note" : "স্বয়ংক্রিয় SOAP ক্লিনিক্যাল নোট"}
                    </h3>
                  </div>
                  <span className="text-[11px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 font-semibold">
                    100% Doctor Editable
                  </span>
                </div>

                {isProcessing ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-8 h-8 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
                    <p className="text-xs text-slate-400">Structuring clinical observations via Gemini...</p>
                  </div>
                ) : (
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="font-bold text-emerald-400 uppercase tracking-wide">Subjective (S): </span>
                      <span className="text-slate-200">
                        Patient reports 3-day history of acute high-grade fever, dry non-productive cough, and generalized myalgia. Denies drug allergies.
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="font-bold text-teal-400 uppercase tracking-wide">Objective (O): </span>
                      <span className="text-slate-200">
                        Temp: 102°F (38.9°C). Chest examination: Bilateral vesicular breath sounds, no wheeze or crepitations.
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="font-bold text-sky-400 uppercase tracking-wide">Assessment (A): </span>
                      <span className="text-slate-200">
                        Acute Viral Syndrome / Upper Respiratory Tract Infection (ICD-11: CA40).
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="font-bold text-indigo-400 uppercase tracking-wide">Plan (P): </span>
                      <span className="text-slate-200">
                        Tab. Paracetamol 500mg (1+1+1 SOS), steam inhalation, oral rehydration. CBC + Dengue NS1 if fever persists &gt; 4 days.
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    {language === "en" ? "Doctor confirms before saving to EMR" : "ডাক্তারের অনুমোদনের পরেই সেভ হবে"}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <span>{language === "en" ? "Try in Your Chamber" : "আপনার চেম্বারে ব্যবহার করুন"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HANDWRITTEN PAD OCR */}
          {activeTab === "ocr" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Prescription Photo Simulation */}
              <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ScanLine className="w-3.5 h-3.5" />
                    {language === "en" ? "Handwritten Prescription Photo" : "হাতের লেখার প্রেসক্রিপশন ছবি"}
                  </span>
                  <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                    JPG / PNG / PDF
                  </span>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col justify-between p-4">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono text-slate-500">Dr. Shahed Jaman, MBBS, DDV</div>
                    <div className="text-[10px] text-slate-600">Care Skin Clinic, Dhaka</div>
                    <div className="w-full h-px bg-slate-800 my-2" />
                  </div>

                  {/* Handwriting stylized representation */}
                  <div className="font-serif italic text-sm text-slate-300 space-y-2 pl-4 border-l-2 border-emerald-500/40">
                    <p className="line-through decoration-slate-600">Rx</p>
                    <p>1. Tab Napa Extra 500/65 — 1+1+1 (3 days)</p>
                    <p>2. Cap Seclo 20mg — 1+0+1 (before meals)</p>
                    <p>3. Syp Adryll — 2 tsp TDS x 5 days</p>
                  </div>

                  <div className="text-[10px] text-emerald-400/90 font-mono bg-emerald-950/60 p-2 rounded border border-emerald-900/60">
                    OCR Scan: Detected 3 Bangladesh Brand Medicines
                  </div>
                </div>

                <button
                  onClick={handleSimulate}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs text-white font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === "en" ? "Re-Scan Handwriting Image" : "পুনরায় স্ক্যান করুন"}</span>
                </button>
              </div>

              {/* Right Column: Parsed Digital Rx with Dosage Autocomplete */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {language === "en" ? "Digitized Prescription Items" : "ডিজিটালাইজড প্রেসক্রিপশন আইটেম"}
                    </h3>
                  </div>
                  <span className="text-[11px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 font-semibold">
                    BD Drug Catalog Matched
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm">Tab. Napa Extra 500mg/65mg</div>
                      <div className="text-slate-400 text-[11px]">Paracetamol + Caffeine | Beximco Pharma</div>
                      <div className="text-emerald-400 font-medium text-[11px] mt-0.5">1 + 0 + 1 — After meals — 3 Days</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-bold">
                      Matched
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm">Cap. Seclo 20mg</div>
                      <div className="text-slate-400 text-[11px]">Omeprazole | Square Pharmaceuticals</div>
                      <div className="text-emerald-400 font-medium text-[11px] mt-0.5">1 + 0 + 1 — 20 mins before meals — 7 Days</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-bold">
                      Matched
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm">Syp. Adryll 100ml</div>
                      <div className="text-slate-400 text-[11px]">Diphenhydramine HCl | Square Pharmaceuticals</div>
                      <div className="text-emerald-400 font-medium text-[11px] mt-0.5">2 Teaspoonfuls — 3 Times Daily — 5 Days</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-bold">
                      Matched
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs border-t border-slate-800">
                  <span className="text-slate-400">Zero re-typing required. Doctor approves with one click.</span>
                  <a href="#pricing" className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1">
                    <span>{language === "en" ? "View Chamber Plans" : "প্যাকেজ দেখুন"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LAB REPORT SCANNER */}
          {activeTab === "lab" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Lab Report Photo Preview */}
              <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    {language === "en" ? "Diagnostic Lab Sheet" : "ল্যাব টেস্ট রিপোর্ট শীট"}
                  </span>
                  <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                    CBC & Dengue Panel
                  </span>
                </div>

                <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5 text-slate-400">
                    <span>TEST PARAMETER</span>
                    <span>RESULT</span>
                    <span>REF. RANGE</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Hemoglobin (Hb)</span>
                    <span className="text-amber-400 font-bold">9.8 g/dL</span>
                    <span className="text-slate-500">12.0 - 16.0</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Total WBC Count</span>
                    <span>4,200 /cu.mm</span>
                    <span className="text-slate-500">4,000 - 11,000</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Platelet Count</span>
                    <span className="text-red-400 font-bold">92,000 /cu.mm</span>
                    <span className="text-slate-500">150k - 450k</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Dengue NS1 Ag</span>
                    <span className="text-red-400 font-bold">POSITIVE</span>
                    <span className="text-slate-500">Negative</span>
                  </div>
                </div>

                <button
                  onClick={handleSimulate}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs text-white font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === "en" ? "Re-Analyze Lab Values" : "পুনরায় অ্যানালাইসিস করুন"}</span>
                </button>
              </div>

              {/* Right Column: AI Interpretation & Alerts */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {language === "en" ? "Clinical Summary & Risk Flags" : "ক্লিনিক্যাল রিস্ক সতর্কতা"}
                    </h3>
                  </div>
                  <span className="text-[11px] text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/60 font-semibold">
                    Thrombocytopenia Alert
                  </span>
                </div>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="p-3 rounded-xl bg-red-950/30 border border-red-900/60 text-slate-200">
                    <div className="font-bold text-red-400 flex items-center gap-1.5 mb-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Critical Flag: Platelet Count Below 100,000 /cu.mm
                    </div>
                    <span>
                      Platelet level is 92,000 /cu.mm accompanied by Positive Dengue NS1 Antigen. Patient is at risk of plasma leakage and hemorrhagic complications.
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-200">
                    <span className="font-bold text-teal-400">Mild Anemia: </span>
                    <span>Hb 9.8 g/dL indicates mild normocytic anemia. Monitor hematocrit levels alongside platelet trajectory.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-200">
                    <span className="font-bold text-emerald-400">Automated Patient Instructions (Bangla): </span>
                    <span className="text-slate-300 italic block mt-1">
                      &ldquo;পর্যাপ্ত পরিমাণে ওআরএস স্যালাইন ও তরল খাবার গ্রহণ করুন। দাঁত দিয়ে রক্তপাত বা কালো পায়খানা হলে তাৎক্ষণিক হাসপাতালে যোগাযোগ করুন।&rdquo;
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs border-t border-slate-800">
                  <span className="text-slate-400">Auto-saved to patient timeline for comparison on follow-up visit.</span>
                  <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1">
                    <span>{language === "en" ? "Schedule Live Walkthrough" : "ডেমো শিডিউল করুন"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
