"use client";

import { useState } from "react";
import {
  Mic,
  FileText,
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  ScanLine,
} from "lucide-react";

interface AIPlaygroundProps {
  language: "en" | "bn";
}

export default function AIPlaygroundInteractive({ language }: AIPlaygroundProps) {
  const [activeTab, setActiveTab] = useState<"voice" | "ocr" | "lab">("voice");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSimulate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 500);
  };

  return (
    <section id="ai-demo" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Perfectly consistent with site standards */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Explore SJ EMR’s Multimodal Clinical AI Tools"
              : "এস জে ইএমআরের মাল্টিমোডাল ক্লিনিক্যাল এআই টুলস"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty max-w-2xl mx-auto">
            {language === "en"
              ? "See how built-in clinical models understand Bangla medical dictation, digitize handwritten prescriptions, and interpret laboratory findings."
              : "বাংলা ও ইংরেজি ভয়েস ডিক্টেশন, প্রেসক্রিপশনের ছবি ও ল্যাব টেস্টের রিপোর্ট কীভাবে সহজে সাজানো যায় তা সরাসরি পরখ করুন।"}
          </p>
        </div>

        {/* 3 Interactive Mode Tabs - Distinct Category/Tab Theme (Not a CTA) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <button
            onClick={() => setActiveTab("voice")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === "voice"
                ? "bg-slate-900 text-white shadow-xs border border-slate-900"
                : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90 shadow-2xs"
            }`}
          >
            <Mic className={`w-4 h-4 shrink-0 ${activeTab === "voice" ? "text-emerald-400" : "text-slate-400"}`} />
            <span>{language === "en" ? "Bangla Voice-to-Note" : "বাংলা ভয়েস-টু-নোট"}</span>
          </button>

          <button
            onClick={() => setActiveTab("ocr")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === "ocr"
                ? "bg-slate-900 text-white shadow-xs border border-slate-900"
                : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90 shadow-2xs"
            }`}
          >
            <ScanLine className={`w-4 h-4 shrink-0 ${activeTab === "ocr" ? "text-emerald-400" : "text-slate-400"}`} />
            <span>{language === "en" ? "Handwriting Pad OCR" : "হাতের লেখার প্রেসক্রিপশন OCR"}</span>
          </button>

          <button
            onClick={() => setActiveTab("lab")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === "lab"
                ? "bg-slate-900 text-white shadow-xs border border-slate-900"
                : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90 shadow-2xs"
            }`}
          >
            <FileCheck2 className={`w-4 h-4 shrink-0 ${activeTab === "lab" ? "text-emerald-400" : "text-slate-400"}`} />
            <span>{language === "en" ? "Lab Report Scanner" : "ল্যাব রিপোর্ট ইন্টারপ্রেটার"}</span>
          </button>
        </div>

        {/* Playground Display Stage - Clean Bright Theme */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs max-w-5xl mx-auto">
          {/* TAB 1: VOICE TO NOTE */}
          {activeTab === "voice" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Doctor Voice Input Simulation */}
              <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-emerald-600" />
                    {language === "en" ? "Doctor Dictation" : "ডাক্তারের ভয়েস ইনপুট"}
                  </span>
                  <span className="text-xs bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-full font-medium">
                    Audio Recorded
                  </span>
                </div>

                <div className="bg-white rounded-xl p-4 border border-slate-200 font-sans text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;রোগীর ৩ দিন ধরে তীব্র জ্বর, সাথে শুকনো কাশি ও গায়ে ব্যথা। তাপমাত্রা ১০২ ডিগ্রি ফারেনহাইট। ফুসফুসে কোনো সমস্যা নেই। কোনো ড্রাগ এলার্জি নেই।&rdquo;
                </div>

                {/* Simulated Audio Waveform */}
                <div className="flex items-center justify-center gap-1 py-3 px-4 bg-white rounded-xl border border-slate-200">
                  {[35, 60, 80, 45, 90, 60, 35, 75, 95, 50, 70, 85, 40, 60, 90, 55, 30].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-1.5 bg-emerald-500 rounded-full"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-500">Bangla + English STT</span>
                  <button
                    onClick={handleSimulate}
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{language === "en" ? "Re-run" : "পুনরায় চালান"}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Structured Clinical SOAP Note */}
              <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      {language === "en" ? "Structured SOAP Clinical Note" : "স্বয়ংক্রিয় SOAP ক্লিনিক্যাল নোট"}
                    </h3>
                  </div>
                  <span className="text-xs text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-medium">
                    Doctor Editable
                  </span>
                </div>

                {isProcessing ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-2">
                    <div className="w-6 h-6 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin" />
                    <p className="text-xs text-slate-500">Formatting clinical note...</p>
                  </div>
                ) : (
                  <div className="space-y-2.5 text-xs leading-relaxed">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <span className="font-bold text-slate-900 uppercase tracking-wide">Subjective (S): </span>
                      <span>
                        Patient reports 3-day history of acute fever, non-productive dry cough, and generalized myalgia. No drug allergies.
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <span className="font-bold text-slate-900 uppercase tracking-wide">Objective (O): </span>
                      <span>
                        Temp: 102.2°F. Chest clear, bilateral vesicular breath sounds, no rhonchi or wheeze.
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <span className="font-bold text-slate-900 uppercase tracking-wide">Assessment (A): </span>
                      <span>
                        Acute Viral Syndrome / Upper Respiratory Tract Infection (ICD-11: CA40).
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <span className="font-bold text-slate-900 uppercase tracking-wide">Plan (P): </span>
                      <span>
                        Tab. Paracetamol 500mg (1+1+1 SOS), steam inhalation, oral rehydration. CBC if fever persists &gt; 4 days.
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    {language === "en" ? "Doctor confirms before saving to EMR" : "ডাক্তারের অনুমোদনের পরেই সেভ হবে"}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold"
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
              <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <ScanLine className="w-3.5 h-3.5 text-emerald-600" />
                    {language === "en" ? "Handwritten Prescription Photo" : "হাতের লেখার প্রেসক্রিপশন ছবি"}
                  </span>
                  <span className="text-xs bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                    JPG / PNG / PDF
                  </span>
                </div>

                <div className="rounded-xl overflow-hidden bg-white border border-slate-200 p-4 space-y-3">
                  <div className="border-b border-slate-200 pb-2">
                    <div className="text-xs font-bold text-slate-900">Dr. Shahed Jaman, MBBS, DDV</div>
                    <div className="text-[11px] text-slate-500">Care Skin Clinic, Dhaka</div>
                  </div>

                  <div className="italic text-xs sm:text-sm text-slate-700 space-y-2 pl-3 border-l-2 border-emerald-500">
                    <p className="font-bold not-italic text-slate-900">Rx</p>
                    <p>1. Tab. Napa Extend 665mg — 1+1+1 (3 days)</p>
                    <p>2. Cap Seclo 20mg — 1+0+1 (before meals)</p>
                    <p>3. Syp Adryll — 2 tsp TDS x 5 days</p>
                  </div>

                  <div className="text-xs text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200">
                    OCR Scan: Detected 3 Bangladesh Brand Medicines
                  </div>
                </div>

                <button
                  onClick={handleSimulate}
                  className="w-full py-2 rounded-xl bg-white hover:bg-slate-100 text-xs text-slate-700 font-semibold flex items-center justify-center gap-2 border border-slate-200 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === "en" ? "Re-Scan Handwriting Image" : "পুনরায় স্ক্যান করুন"}</span>
                </button>
              </div>

              {/* Right Column: Parsed Digital Rx with Dosage Autocomplete */}
              <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      {language === "en" ? "Digitized Prescription Items" : "ডিজিটালাইজড প্রেসক্রিপশন আইটেম"}
                    </h3>
                  </div>
                  <span className="text-xs text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-medium">
                    BD Drug Catalog Matched
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">Tab. Napa Extend 665mg</div>
                      <div className="text-slate-500 text-[11px]">Paracetamol | Beximco Pharma</div>
                      <div className="text-emerald-700 font-medium text-[11px] mt-0.5">1 + 1 + 1 — After meals — 3 Days</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs">
                      Matched
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">Cap. Seclo 20mg</div>
                      <div className="text-slate-500 text-[11px]">Omeprazole | Square Pharmaceuticals</div>
                      <div className="text-emerald-700 font-medium text-[11px] mt-0.5">1 + 0 + 1 — 20 mins before meals — 7 Days</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs">
                      Matched
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">Syp. Adryll 100ml</div>
                      <div className="text-slate-500 text-[11px]">Diphenhydramine HCl | Square Pharmaceuticals</div>
                      <div className="text-emerald-700 font-medium text-[11px] mt-0.5">2 Teaspoonfuls — 3 Times Daily — 5 Days</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs">
                      Matched
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs border-t border-slate-200">
                  <span className="text-slate-500">Zero re-typing required. Doctor approves with one click.</span>
                  <a href="#pricing" className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1">
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
              <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                    {language === "en" ? "Diagnostic Lab Sheet" : "ল্যাব টেস্ট রিপোর্ট শীট"}
                  </span>
                  <span className="text-xs bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                    CBC & Dengue Panel
                  </span>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-1.5 text-slate-500 font-semibold">
                    <span>TEST PARAMETER</span>
                    <span>RESULT</span>
                    <span>REF. RANGE</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Hemoglobin (Hb)</span>
                    <span className="text-amber-700 font-bold">9.8 g/dL</span>
                    <span className="text-slate-400">12.0 - 16.0</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Total WBC Count</span>
                    <span>4,200 /cu.mm</span>
                    <span className="text-slate-400">4,000 - 11,000</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Platelet Count</span>
                    <span className="text-rose-700 font-bold">92,000 /cu.mm</span>
                    <span className="text-slate-400">150k - 450k</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Dengue NS1 Ag</span>
                    <span className="text-rose-700 font-bold">POSITIVE</span>
                    <span className="text-slate-400">Negative</span>
                  </div>
                </div>

                <button
                  onClick={handleSimulate}
                  className="w-full py-2 rounded-xl bg-white hover:bg-slate-100 text-xs text-slate-700 font-semibold flex items-center justify-center gap-2 border border-slate-200 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === "en" ? "Re-Analyze Lab Values" : "পুনরায় অ্যানালাইসিস করুন"}</span>
                </button>
              </div>

              {/* Right Column: AI Interpretation & Alerts */}
              <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      {language === "en" ? "Clinical Summary & Alerts" : "ক্লিনিক্যাল রিস্ক সতর্কতা"}
                    </h3>
                  </div>
                  <span className="text-xs text-rose-800 bg-rose-100 px-2 py-0.5 rounded font-medium">
                    Thrombocytopenia Alert
                  </span>
                </div>

                <div className="space-y-2.5 text-xs leading-relaxed">
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-slate-800">
                    <div className="font-bold text-rose-700 flex items-center gap-1.5 mb-1">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      Critical Flag: Platelet Count Below 100,000 /cu.mm
                    </div>
                    <span>
                      Platelet level is 92,000 /cu.mm with Positive Dengue NS1 Antigen. Patient requires continuous hydration monitoring.
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700">
                    <span className="font-bold text-slate-900">Mild Anemia: </span>
                    <span>Hb 9.8 g/dL indicates mild normocytic anemia. Monitor hematocrit levels alongside platelet trajectory.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700">
                    <span className="font-bold text-emerald-800">Automated Patient Instructions (Bangla): </span>
                    <span className="text-slate-600 italic block mt-1">
                      &ldquo;পর্যাপ্ত পরিমাণে ওআরএস স্যালাইন ও তরল খাবার গ্রহণ করুন। দাঁত দিয়ে রক্তপাত বা কালো পায়খানা হলে তাৎক্ষণিক হাসপাতালে যোগাযোগ করুন।&rdquo;
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs border-t border-slate-200">
                  <span className="text-slate-500">Auto-saved to patient timeline for comparison on follow-up visit.</span>
                  <a href="#contact" className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1">
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
