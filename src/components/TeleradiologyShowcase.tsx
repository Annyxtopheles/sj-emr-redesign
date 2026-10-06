"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Scan,
  Building2,
  Stethoscope,
  ArrowRight,
  Sun,
  Contrast,
  ZoomIn,
  RotateCw,
  Download,
  Sliders,
  FileCheck,
} from "lucide-react";

interface TeleradiologyShowcaseProps {
  language: "en" | "bn";
}

export default function TeleradiologyShowcase({ language }: TeleradiologyShowcaseProps) {
  // Interactive Cases
  const cases = [
    {
      id: "chest-pa",
      name: language === "en" ? "Chest X-Ray PA View" : "বুকের ডিজিটাল এক্স-রে (PA View)",
      caseNo: "RAD-2026-0842",
      facility: "Popular Diagnostic Center, Sylhet",
      modality: "CR / DR X-Ray",
      exposure: "120 kVp • 4.2 mAs",
      patient: "Rahim Uddin (48y, Male)",
      clinicalHistory: "Dry cough for 2 weeks, non-smoker, rule out consolidation.",
      findings:
        "Lungs are clear with normal bronchovascular markings. Both costophrenic angles are sharp and free. Trachea is central. Cardiac size and contour are within normal limits (CTR 0.44). Bony thorax appears intact.",
      impression: "Normal study of chest. No active cardiopulmonary lesion detected.",
      radiologist: "Dr. S. K. Roy, MBBS, FCPS (Radiology & Imaging)",
      bmdcReg: "BMDC Reg #A-00001",
      svgGraphic: (isInverted: boolean) => (
        <svg viewBox="0 0 200 240" className="w-full h-full max-h-56 mx-auto">
          {/* Ribcage / Thorax silhouette */}
          <path
            d="M100 20 C70 20 40 40 30 80 C20 120 20 180 40 220 C60 230 140 230 160 220 C180 180 180 120 170 80 C160 40 130 20 100 20 Z"
            fill={isInverted ? "#0f172a" : "#020617"}
            stroke={isInverted ? "#38bdf8" : "#94a3b8"}
            strokeWidth="1.5"
            opacity="0.8"
          />
          {/* Spine & Sternum */}
          <line x1="100" y1="20" x2="100" y2="220" stroke={isInverted ? "#0284c7" : "#cbd5e1"} strokeWidth="4" opacity="0.6" strokeDasharray="6 3" />
          {/* Clavicles */}
          <path d="M40 45 Q70 55 100 50 Q130 55 160 45" fill="none" stroke={isInverted ? "#38bdf8" : "#f1f5f9"} strokeWidth="2.5" opacity="0.85" />
          {/* Rib arcs */}
          {[70, 95, 120, 145, 170, 195].map((y, i) => (
            <g key={i}>
              <path d={`M40 ${y} Q70 ${y - 12} 100 ${y - 8}`} fill="none" stroke={isInverted ? "#0284c7" : "#64748b"} strokeWidth="2" opacity="0.7" />
              <path d={`M160 ${y} Q130 ${y - 12} 100 ${y - 8}`} fill="none" stroke={isInverted ? "#0284c7" : "#64748b"} strokeWidth="2" opacity="0.7" />
            </g>
          ))}
          {/* Cardiac Silhouette */}
          <path
            d="M95 110 C80 115 65 140 70 170 C75 190 105 195 125 180 C140 170 135 130 110 115 Z"
            fill={isInverted ? "rgba(56, 189, 248, 0.2)" : "rgba(255, 255, 255, 0.25)"}
            stroke={isInverted ? "#38bdf8" : "#e2e8f0"}
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      id: "knee-joint",
      name: language === "en" ? "Knee Joint AP" : "হাঁটুর এক্স-রে (AP)",
      caseNo: "RAD-2026-0914",
      facility: "MediPath Diagnostic, Chittagong",
      modality: "Digital Radiography",
      exposure: "75 kVp • 6.0 mAs",
      patient: "Nasima Akhtar (56y, Female)",
      clinicalHistory: "Right knee pain aggravated on walking, suspected osteoarthritis.",
      findings:
        "Mild medial joint space narrowing observed in right femorotibial compartment. Small marginal osteophytes noted at medial tibial plateau. Patellofemoral articulation is preserved. No joint effusion or fracture.",
      impression: "Early Grade II Osteoarthritis of the right knee joint with preserved patellar joint space.",
      radiologist: "Dr. Farhana Yasmin, MBBS, DMRD, FCPS (Radiology)",
      bmdcReg: "BMDC Reg #A-00002",
      svgGraphic: (isInverted: boolean) => (
        <svg viewBox="0 0 200 240" className="w-full h-full max-h-56 mx-auto">
          {/* Distal Femur */}
          <path
            d="M80 15 L80 80 Q60 100 65 120 Q80 130 100 120 Q120 130 135 120 Q140 100 120 80 L120 15 Z"
            fill={isInverted ? "#0f172a" : "#020617"}
            stroke={isInverted ? "#38bdf8" : "#94a3b8"}
            strokeWidth="2"
            opacity="0.85"
          />
          {/* Proximal Tibia & Fibula */}
          <path
            d="M60 140 Q80 135 100 140 Q120 135 140 140 Q130 170 120 230 L80 230 Q70 170 60 140 Z"
            fill={isInverted ? "#0f172a" : "#020617"}
            stroke={isInverted ? "#38bdf8" : "#94a3b8"}
            strokeWidth="2"
            opacity="0.85"
          />
          <path
            d="M145 150 L140 230 L152 230 L158 165 Z"
            fill={isInverted ? "#0f172a" : "#020617"}
            stroke={isInverted ? "#0284c7" : "#64748b"}
            strokeWidth="1.5"
            opacity="0.75"
          />
        </svg>
      ),
    },
    {
      id: "brain-ct",
      name: language === "en" ? "Brain CT Scan" : "ব্রেন সিটি স্ক্যান",
      caseNo: "RAD-2026-1029",
      facility: "Ibn Sina Diagnostic, Dhaka",
      modality: "64-Slice Helical CT",
      exposure: "120 kVp • 250 mAs",
      patient: "Tariqul Islam (39y, Male)",
      clinicalHistory: "Post-fall transient dizziness, rule out acute intracranial hemorrhage.",
      findings:
        "No evidence of acute intracranial hemorrhage, mass effect, or midline shift. Ventricular system, basal cisterns, and cortical sulci are within normal limits for age. Calvarium is intact without fracture line.",
      impression: "Normal NCCT study of brain. No acute intracranial pathology.",
      radiologist: "Prof. Dr. A. K. M. Shamsuddin, MBBS, FCPS, FRCR",
      bmdcReg: "BMDC Reg #A-00003",
      svgGraphic: (isInverted: boolean) => (
        <svg viewBox="0 0 200 240" className="w-full h-full max-h-56 mx-auto">
          {/* Calvarium / Skull Oval */}
          <ellipse
            cx="100"
            cy="120"
            rx="75"
            ry="95"
            fill={isInverted ? "#0f172a" : "#020617"}
            stroke={isInverted ? "#38bdf8" : "#f1f5f9"}
            strokeWidth="3.5"
            opacity="0.9"
          />
          {/* Brain Parenchyma gray matter representation */}
          <ellipse
            cx="100"
            cy="120"
            rx="66"
            ry="85"
            fill={isInverted ? "rgba(56, 189, 248, 0.1)" : "rgba(255, 255, 255, 0.12)"}
          />
          {/* Midline Falx Cerebri */}
          <line x1="100" y1="35" x2="100" y2="205" stroke={isInverted ? "#0284c7" : "#cbd5e1"} strokeWidth="1.5" strokeDasharray="5 3" />
          {/* Lateral Ventricles */}
          <path
            d="M90 95 Q80 120 90 140 Q94 135 94 110 Z"
            fill={isInverted ? "#020617" : "#000000"}
            stroke={isInverted ? "#38bdf8" : "#94a3b8"}
            strokeWidth="1"
          />
          <path
            d="M110 95 Q120 120 110 140 Q106 135 106 110 Z"
            fill={isInverted ? "#020617" : "#000000"}
            stroke={isInverted ? "#38bdf8" : "#94a3b8"}
            strokeWidth="1"
          />
        </svg>
      ),
    },
  ];

  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);
  const [isInverted, setIsInverted] = useState(false);
  const [contrastLevel, setContrastLevel] = useState<"normal" | "high" | "soft">("normal");
  const [zoomLevel, setZoomLevel] = useState<1 | 1.3 | 1.6>(1);
  const [rotation, setRotation] = useState(0);

  const currentCase = cases[activeCaseIndex];

  // 4 Interactive Workflow Stages
  const workflowStages = [
    {
      step: 1,
      title: language === "en" ? "Lab Intake & Upload" : "ল্যাব এন্ট্রি ও আপলোড",
      desc:
        language === "en"
          ? "Diagnostic center uploads scans and clinical info in seconds with automated DICOM routing."
          : "ডায়াগনস্টিক ল্যাব থেকে স্ক্যান ও রোগীর তথ্য তাৎক্ষণিক আপলোড ও স্বয়ংক্রিয় ক্লাউড রাউটিং।",
      icon: Building2,
    },
    {
      step: 2,
      title: language === "en" ? "Radiologist Worklist" : "রেডিওলজিস্ট ওয়ার্কলিস্ট",
      desc:
        language === "en"
          ? "Certified radiologists review high-resolution DICOM slices remotely with zero local setup."
          : "প্রত্যয়িত রেডিওলজিস্টরা অনলাইনে হাই-রেজোলিউশন ডাইকম ভিউয়ারে রিপোর্ট প্রস্তুত করেন।",
      icon: Stethoscope,
    },
    {
      step: 3,
      title: language === "en" ? "AI Landmark Assist" : "এআই অ্যানালাইসিস সহায়তা",
      desc:
        language === "en"
          ? "Automated cardiothoracic ratio, fracture indicators, and preliminary finding checks."
          : "স্বয়ংক্রিয় কার্ডিওথোরাসিক রেশিও ও ফ্র্যাকচার মার্কার শনাক্তকরণে ক্লিনিক্যাল সহায়তা।",
      icon: Sliders,
    },
    {
      step: 4,
      title: language === "en" ? "BMDC Signed Delivery" : "স্বাক্ষরিত রিপোর্ট ডেলিভারি",
      desc:
        language === "en"
          ? "Verified PDF report with digital signature dispatched directly via SMS and WhatsApp."
          : "ডিজিটাল সিল সম্বলিত অফিসিয়াল পিডিএফ সরাসরি রোগীর কাছে এসএমএস ও হোয়াটসঅ্যাপে পৌঁছে যায়।",
      icon: FileCheck,
    },
  ];

  return (
    <section id="teleradiology" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 text-balance">
            {language === "en"
              ? "Connect Diagnostic Centers with Certified Radiologists"
              : "ডায়াগনস্টিক সেন্টার ও বিশেষজ্ঞ রেডিওলজিস্টদের সমন্বিত নেটওয়ার্ক"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            {language === "en"
              ? "Diagnostic centers across Bangladesh upload X-rays and CT scans, while certified radiologists report cases remotely with rapid turnaround."
              : "বাংলাদেশের যে কোনো প্রান্তের ল্যাব থেকে এক্স-রে বা স্ক্যান আপলোড এবং প্রত্যয়িত রেডিওলজিস্টদের মাধ্যমে দ্রুত রিমোট রিপোর্ট তৈরির ব্যবস্থা।"}
          </p>
        </div>

        {/* Case Modality Selector Tabs - Matching Demo Booking Form Tab Design */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setActiveCaseIndex(idx);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeCaseIndex === idx
                  ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-500/20 font-bold shadow-2xs"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Scan className={`w-3.5 h-3.5 ${activeCaseIndex === idx ? "text-emerald-700" : "text-emerald-700/70"}`} />
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Split Layout: Left Workflow Controls + Right Live PACS Workstation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: 4-Stage Pipeline Walkthrough */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            {workflowStages.map((stage) => {
              const StageIcon = stage.icon;
              const isCurrent = activeWorkflowStep === stage.step;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveWorkflowStep(stage.step)}
                  className={`text-left w-full p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 sm:gap-4 relative overflow-hidden group ${
                    isCurrent
                      ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20 -translate-y-0.5 border-l-4 border-l-emerald-600"
                      : "bg-white hover:bg-slate-50/80 border-slate-200/90 hover:border-slate-300 text-slate-700 hover:-translate-y-0.5"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 mt-0.5 ${
                      isCurrent
                        ? "bg-emerald-100 border-emerald-300 text-emerald-800 shadow-2xs"
                        : "bg-slate-100/80 border-slate-200 text-slate-600 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-700"
                    }`}
                  >
                    <StageIcon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-sm sm:text-base font-bold mb-1 transition-colors ${
                        isCurrent ? "text-slate-900" : "text-slate-900 group-hover:text-emerald-900"
                      }`}
                    >
                      0{stage.step}. {stage.title}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-emerald-950/20"
              >
                <span>{language === "en" ? "Onboard Your Diagnostic Center" : "আপনার ল্যাব যুক্ত করুন"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Live PACS Web DICOM Workstation */}
          <div className="lg:col-span-7 bg-[#06241b] border border-[#0d3f32] rounded-3xl p-3 sm:p-5 shadow-2xl shadow-emerald-950/20 text-white">
            {/* Workstation Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0d3f32] pb-3 mb-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <Scan className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-100 flex items-center gap-2">
                    <span>SJ PACS Workstation</span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-1.5 py-0.5 rounded">
                      {currentCase.modality}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {currentCase.facility}
                  </div>
                </div>
              </div>

              {/* Patient and Case info */}
              <div className="text-right text-[11px] bg-[#0b3327]/80 px-2.5 py-1 rounded-lg border border-[#0e4435]">
                <div className="font-bold text-slate-200">{currentCase.patient}</div>
                <div className="text-[10px] text-slate-400">Case #{currentCase.caseNo}</div>
              </div>
            </div>

            {/* Split Screen: Left DICOM Scan Viewer + Right Radiologist Clinical Report */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
              {/* Left Scan View (6 cols) */}
              <div className="sm:col-span-6 bg-[#021812] rounded-2xl border border-[#0d3f32] p-3 flex flex-col justify-between relative">
                {/* Interactive PACS Toolbar (Always on top) */}
                <div className="relative z-20 flex items-center justify-between gap-1 mb-2 bg-[#06241b]/95 border border-[#0d3f32] p-1.5 rounded-xl text-[11px]">
                  {/* Invert */}
                  <button
                    type="button"
                    onClick={() => setIsInverted(!isInverted)}
                    className={`px-2 py-1 rounded-lg font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      isInverted ? "bg-emerald-500/30 text-emerald-300 border border-emerald-500/40" : "bg-[#0b3327] text-slate-300 hover:text-white"
                    }`}
                    title="Invert negative/positive"
                  >
                    <Contrast className="w-3 h-3" />
                    <span>Invert</span>
                  </button>

                  {/* Contrast */}
                  <button
                    type="button"
                    onClick={() => {
                      if (contrastLevel === "normal") setContrastLevel("high");
                      else if (contrastLevel === "high") setContrastLevel("soft");
                      else setContrastLevel("normal");
                    }}
                    className="px-2 py-1 rounded-lg bg-[#0b3327] hover:bg-[#104434] text-slate-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    title="Toggle contrast levels"
                  >
                    <Sun className="w-3 h-3" />
                    <span className="capitalize">{contrastLevel}</span>
                  </button>

                  {/* Zoom */}
                  <button
                    type="button"
                    onClick={() => {
                      if (zoomLevel === 1) setZoomLevel(1.3);
                      else if (zoomLevel === 1.3) setZoomLevel(1.6);
                      else setZoomLevel(1);
                    }}
                    className={`px-2 py-1 rounded-lg font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      zoomLevel > 1 ? "bg-emerald-500/30 text-emerald-300 border border-emerald-500/40" : "bg-[#0b3327] hover:bg-[#104434] text-slate-300"
                    }`}
                    title="Toggle zoom magnification"
                  >
                    <ZoomIn className="w-3 h-3" />
                    <span>{zoomLevel}x</span>
                  </button>

                  {/* Rotate */}
                  <button
                    type="button"
                    onClick={() => setRotation((prev) => (prev + 90) % 360)}
                    className="p-1 rounded-lg bg-[#0b3327] hover:bg-[#104434] text-slate-300 transition-colors cursor-pointer"
                    title="Rotate 90 degrees"
                  >
                    <RotateCw className="w-3 h-3" />
                  </button>
                </div>

                {/* DICOM Scan Viewport - strictly constrained overflow-hidden */}
                <div className="relative flex-1 min-h-[260px] sm:min-h-[290px] flex items-center justify-center overflow-hidden rounded-xl bg-black border border-[#0d3f32]/80">
                  <div
                    className="transition-transform duration-300 select-none pointer-events-none flex items-center justify-center w-full h-full"
                    style={{
                      filter: `invert(${isInverted ? 1 : 0}) contrast(${
                        contrastLevel === "high" ? 1.4 : contrastLevel === "soft" ? 0.8 : 1
                      })`,
                      transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                    }}
                  >
                    {currentCase.svgGraphic(isInverted)}
                  </div>
                </div>

                {/* Bottom Status bar */}
                <div className="pt-2 mt-1 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Lossless DICOM</span>
                  </span>
                  {(zoomLevel > 1 || rotation !== 0) && (
                    <button
                      type="button"
                      onClick={() => {
                        setZoomLevel(1);
                        setRotation(0);
                      }}
                      className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer"
                    >
                      Reset View
                    </button>
                  )}
                </div>
              </div>

              {/* Right Report Column (6 cols) */}
              <div className="sm:col-span-6 bg-[#021812] rounded-2xl border border-[#0d3f32] p-3.5 flex flex-col justify-between text-xs space-y-3">
                {/* STEP 1: Requisition Intake */}
                {activeWorkflowStep === 1 && (
                  <>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between border-b border-[#0d3f32] pb-2">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{language === "en" ? "Stage 01: Lab Requisition" : "ধাপ ০১: ল্যাব রিকুইজিশন"}</span>
                        </span>
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/80">
                          {language === "en" ? "Ready" : "প্রস্তুত"}
                        </span>
                      </div>

                      <div className="space-y-2 text-[11px] text-slate-300">
                        <div className="bg-[#06241b] border border-[#0d3f32] rounded-xl p-2.5">
                          <div className="text-slate-400 text-[10px] uppercase font-bold mb-0.5">{language === "en" ? "Facility" : "ডায়াগনস্টিক ল্যাব"}</div>
                          <div className="font-semibold text-white">{currentCase.facility}</div>
                        </div>

                        <div className="bg-[#06241b] border border-[#0d3f32] rounded-xl p-2.5">
                          <div className="text-slate-400 text-[10px] uppercase font-bold mb-0.5">{language === "en" ? "Clinical Indication" : "পরীক্ষার কারণ"}</div>
                          <div className="text-slate-300 leading-relaxed">{currentCase.clinicalHistory}</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#0d3f32]">
                      <button
                        type="button"
                        onClick={() => setActiveWorkflowStep(2)}
                        className="w-full py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 active:bg-emerald-500/40 text-emerald-300 hover:text-emerald-200 border border-emerald-500/40 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                      >
                        <Stethoscope className="w-3.5 h-3.5" />
                        <span>{language === "en" ? "Open Case for Review →" : "কেসটি রিভিউ করুন →"}</span>
                      </button>
                    </div>
                  </>
                )}

                {/* STEP 2: Findings */}
                {activeWorkflowStep === 2 && (
                  <>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between border-b border-[#0d3f32] pb-2">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Stethoscope className="w-3.5 h-3.5" />
                          <span>{language === "en" ? "Stage 02: Radiologist Findings" : "ধাপ ০২: ফাইন্ডিংস"}</span>
                        </span>
                        <span className="text-[10px] font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/80">
                          {language === "en" ? "In Review" : "রিভিউ চলছে"}
                        </span>
                      </div>

                      <div className="bg-[#06241b] border border-[#0d3f32] rounded-xl p-2.5 text-[11px]">
                        <strong className="text-emerald-400 block text-[10px] uppercase tracking-wider mb-1">
                          {language === "en" ? "Observations:" : "পর্যবেক্ষণ:"}
                        </strong>
                        <p className="leading-relaxed text-slate-300">{currentCase.findings}</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#0d3f32]">
                      <button
                        type="button"
                        onClick={() => setActiveWorkflowStep(3)}
                        className="w-full py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 active:bg-emerald-500/40 text-emerald-300 hover:text-emerald-200 border border-emerald-500/40 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                      >
                        <Sliders className="w-3.5 h-3.5" />
                        <span>{language === "en" ? "Run AI Landmark Assist →" : "এআই অ্যানালাইসিস দেখুন →"}</span>
                      </button>
                    </div>
                  </>
                )}

                {/* STEP 3: AI Landmark Assist */}
                {activeWorkflowStep === 3 && (
                  <>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between border-b border-[#0d3f32] pb-2">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Sliders className="w-3.5 h-3.5" />
                          <span>{language === "en" ? "Stage 03: AI Landmark Assist" : "ধাপ ০৩: এআই সহায়তা"}</span>
                        </span>
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                          Verified
                        </span>
                      </div>

                      <div className="bg-emerald-950/70 border border-emerald-800/80 rounded-xl p-2.5 text-[11px] text-emerald-300">
                        <strong className="text-white block text-[10px] uppercase tracking-wider mb-0.5">
                          {language === "en" ? "Suggested Impression:" : "প্রস্তাবিত ইম্প্রেশন:"}
                        </strong>
                        <p className="font-medium text-slate-200">{currentCase.impression}</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#0d3f32]">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveWorkflowStep(4);
                        }}
                        className="w-full py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 active:bg-emerald-500/40 text-emerald-300 hover:text-emerald-200 border border-emerald-500/40 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                      >
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>{language === "en" ? "Approve & Sign Report →" : "অনুমোদন ও ডিজিটাল স্বাক্ষর →"}</span>
                      </button>
                    </div>
                  </>
                )}

                {/* STEP 4: Signed Report */}
                {activeWorkflowStep === 4 && (
                  <>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between border-b border-[#0d3f32] pb-2">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <FileCheck className="w-3.5 h-3.5" />
                          <span>{language === "en" ? "Stage 04: Certified Report" : "ধাপ ০৪: প্রত্যয়িত রিপোর্ট"}</span>
                        </span>
                        <span className="text-[10px] font-bold text-emerald-300 bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-700 flex items-center gap-1.5">
                          <Image
                            src="/assets/BMDC Logo 2.svg"
                            alt="BMDC"
                            width={13}
                            height={13}
                            className="w-3.5 h-3.5 object-contain"
                          />
                          <span>BMDC Signed</span>
                        </span>
                      </div>

                      <div className="space-y-2 text-[11px]">
                        <div className="bg-[#06241b] border border-[#0d3f32] rounded-xl p-2.5">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                            {language === "en" ? "Certified Diagnosis:" : "চূড়ান্ত ডায়াগনোসিস:"}
                          </div>
                          <p className="text-white font-medium">{currentCase.impression}</p>
                        </div>

                        <div className="bg-[#06241b] border border-[#0d3f32] rounded-xl p-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-700/60 p-1 flex items-center justify-center shrink-0">
                              <Image
                                src="/assets/BMDC Logo 2.svg"
                                alt="BMDC"
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-200 text-xs">{currentCase.radiologist}</div>
                              <div className="text-[10px] text-emerald-400 font-medium">{currentCase.bmdcReg}</div>
                            </div>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">✓</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#0d3f32]">
                      <button
                        type="button"
                        onClick={() => alert(language === "en" ? `Downloading official signed PDF report for ${currentCase.caseNo}...` : `${currentCase.caseNo} এর স্বাক্ষরিত অফিসিয়াল পিডিএফ ডাউনলোড হচ্ছে...`)}
                        className="w-full py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 active:bg-emerald-500/40 text-emerald-300 hover:text-emerald-200 border border-emerald-500/40 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{language === "en" ? "Download Official BMDC PDF" : "অফিশিয়াল পিডিএফ ডাউনলোড"}</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
