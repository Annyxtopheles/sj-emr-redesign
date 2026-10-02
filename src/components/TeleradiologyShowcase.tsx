"use client";

import { useState } from "react";
import {
  Scan,
  FileText,
  Building2,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  Zap,
  Sun,
  Contrast,
  ZoomIn,
  RotateCw,
  Eye,
  Download,
  Check,
  Share2,
  Sparkles,
  ShieldCheck,
  Sliders,
  Layers,
  FileCheck,
} from "lucide-react";
import SpecularButton from "@/components/ui/SpecularButton";

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
      bmdcReg: "BMDC Reg #49281",
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
          {/* AI Measurement overlay line (CTR) */}
          <line x1="68" y1="175" x2="135" y2="175" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="100" y="170" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">CTR: 0.44 Normal</text>
        </svg>
      ),
    },
    {
      id: "knee-joint",
      name: language === "en" ? "Knee Joint AP / Lateral" : "হাঁটুর ডিজিটাল এক্স-রে (AP View)",
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
      bmdcReg: "BMDC Reg #51204",
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
          {/* Joint Gap measurement indicator */}
          <line x1="68" y1="126" x2="68" y2="135" stroke="#f59e0b" strokeWidth="2" />
          <line x1="130" y1="126" x2="130" y2="135" stroke="#10b981" strokeWidth="2" />
          <text x="50" y="133" fill="#f59e0b" fontSize="7" fontWeight="bold">3.2mm</text>
          <text x="140" y="133" fill="#10b981" fontSize="7" fontWeight="bold">5.8mm</text>
        </svg>
      ),
    },
    {
      id: "brain-ct",
      name: language === "en" ? "Brain Non-Contrast CT" : "ব্রেন সিটি স্ক্যান (NCCT Brain)",
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
      bmdcReg: "BMDC Reg #38910",
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
          <text x="100" y="222" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Midline Shift: 0.0mm (Normal)</text>
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
  const [showAiOverlay, setShowAiOverlay] = useState(true);
  const [isSigned, setIsSigned] = useState(false);

  const currentCase = cases[activeCaseIndex];

  // 4 Interactive Workflow Stages
  const workflowStages = [
    {
      step: 1,
      title: language === "en" ? "Lab Case Intake & DICOM Upload" : "ল্যাব টেকনিশিয়ান এন্ট্রি ও স্ক্যান আপলোড",
      desc:
        language === "en"
          ? "Diagnostic center in Sylhet/Dhaka uploads X-ray or CT scans in seconds with patient demographics."
          : "দেশের যে কোনো প্রান্তের ডায়াগনস্টিক ল্যাব থেকে এক্স-রে বা স্ক্যান তাৎক্ষণিক আপলোড ও কেস এন্ট্রি।",
      icon: Building2,
    },
    {
      step: 2,
      title: language === "en" ? "Certified Radiologist Worklist" : "বিশেষজ্ঞ রেডিওলজিস্ট ওয়ার্কলিস্ট",
      desc:
        language === "en"
          ? "BMDC-registered radiologists pick up cases remotely on high-resolution web DICOM workstations."
          : "প্রত্যয়িত রেডিওলজিস্টরা অনলাইনে হাই-রেজ্যুলুশন ডাইকম ভিউয়ারে রিপোর্ট প্রস্তুত করেন।",
      icon: Stethoscope,
    },
    {
      step: 3,
      title: language === "en" ? "AI Pre-Analysis & Measurements" : "এআই প্রি-অ্যানালাইসিস ও মেজারমেন্ট",
      desc:
        language === "en"
          ? "Automated CTR calculation, bone density measurement, and preliminary lesion flagging for faster review."
          : "স্বয়ংক্রিয় কার্ডিওথোরাসিক রেশিও ও ফ্র্যাকচার মার্কার যা চিকিৎসকের পর্যালোচনায় সাহায্য করে।",
      icon: Sliders,
    },
    {
      step: 4,
      title: language === "en" ? "Signed Report & Automated Delivery" : "ডিজিটাল স্বাক্ষর ও অটো ডেলিভারি",
      desc:
        language === "en"
          ? "Hospital-branded, BMDC digitally signed PDF reports dispatched via SMS and WhatsApp directly to clinics."
          : "হাসপাতালের ব্র্যান্ডিং ও ডিজিটাল সিল সম্বলিত অফিসিয়াল পিডিএফ রিপোর্ট রোগীর কাছে পৌঁছে যায়।",
      icon: FileCheck,
    },
  ];

  return (
    <section id="teleradiology" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Scan className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === "en" ? "Diagnostic Imaging Network" : "টেলিরেডিওলজি ও ডায়াগনস্টিক নেটওয়ার্ক"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Connect Diagnostic Centers with Certified Radiologists"
              : "ডায়াগনস্টিক সেন্টার ও বিশেষজ্ঞ রেডিওলজিস্টদের সমন্বয়ে সমন্বিত নেটওয়ার্ক"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            {language === "en"
              ? "Beyond individual doctor chambers, SJ EMR powers a complete teleradiology workstation. Diagnostic centers across Bangladesh upload X-rays and scans, while certified radiologists report cases remotely with custom templates and digital signatures."
              : "ব্যক্তিগত চেম্বার ছাড়াও এস জে ইএমআরে রয়েছে টেলিরেডিওলজি সুবিধা। বাংলাদেশের যে কোনো প্রান্তের ল্যাব থেকে এক্স-রে বা স্ক্যান আপলোড এবং প্রত্যয়িত রেডিওলজিস্টদের মাধ্যমে রিমোট রিপোর্ট তৈরির ব্যবস্থা।"}
          </p>
        </div>

        {/* Case Modality Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-semibold text-slate-500 mr-2 hidden sm:inline">
            {language === "en" ? "Test Interactive Case:" : "ইন্টারেক্টিভ কেস নির্বাচন করুন:"}
          </span>
          {cases.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setActiveCaseIndex(idx);
                setIsSigned(false);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeCaseIndex === idx
                  ? "bg-slate-900 text-white shadow-md ring-2 ring-emerald-500"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              }`}
            >
              <Scan className="w-3.5 h-3.5 text-emerald-400" />
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Split Layout: Left Workflow Controls + Right Live PACS Workstation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 4-Stage Pipeline Walkthrough */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 mb-4">
              <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>{language === "en" ? "National Teleradiology Pipeline" : "টেলিরেডিওলজি ওয়ার্কফ্লো"}</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                {language === "en"
                  ? "Click through the 4 stages to see how local diagnostics connect with verified radiologists in Dhaka & Sylhet."
                  : "৪টি ধাপের মাধ্যমে দেখুন কীভাবে সারা দেশের ল্যাব সরাসরি বিশেষজ্ঞ রেডিওলজিস্টদের সাথে যুক্ত থাকে।"}
              </p>
            </div>

            {workflowStages.map((stage) => {
              const StageIcon = stage.icon;
              const isCurrent = activeWorkflowStep === stage.step;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveWorkflowStep(stage.step)}
                  className={`text-left w-full p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 relative overflow-hidden group ${
                    isCurrent
                      ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/30"
                      : "bg-slate-50/70 hover:bg-white border-slate-200 text-slate-700"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                      isCurrent
                        ? "bg-emerald-600 border-emerald-600 text-white shadow-xs"
                        : "bg-white border-slate-200 text-emerald-700 group-hover:bg-emerald-50"
                    }`}
                  >
                    <StageIcon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-bold ${isCurrent ? "text-emerald-950" : "text-slate-800"}`}>
                        0{stage.step}. {stage.title}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                          Live Stage
                        </span>
                      )}
                    </div>
                    <p className={`text-xs leading-relaxed ${isCurrent ? "text-slate-700" : "text-slate-500"}`}>
                      {stage.desc}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="pt-3">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <span>{language === "en" ? "Onboard Your Diagnostic Center" : "আপনার ডায়াগনস্টিক ল্যাব যুক্ত করুন"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Live PACS Web DICOM Workstation & Report Playground */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-3 sm:p-5 shadow-2xl shadow-slate-950/20 text-white">
            {/* Workstation Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
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
                    {currentCase.facility} • Case #{currentCase.caseNo}
                  </div>
                </div>
              </div>

              {/* Patient Badge */}
              <div className="text-right text-[11px] bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                <div className="font-bold text-slate-200">{currentCase.patient}</div>
                <div className="text-[10px] text-emerald-400">{currentCase.exposure}</div>
              </div>
            </div>

            {/* Split Screen: Left DICOM Scan Viewer + Right Radiologist Clinical Report */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
              {/* Left Scan View (7 cols) with Live PACS Tools */}
              <div className="sm:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-3 flex flex-col justify-between relative overflow-hidden">
                {/* Interactive PACS Toolbar */}
                <div className="flex items-center justify-between gap-1 mb-2 bg-slate-900/90 border border-slate-800 p-1.5 rounded-xl text-[11px]">
                  {/* Invert */}
                  <button
                    type="button"
                    onClick={() => setIsInverted(!isInverted)}
                    className={`px-2 py-1 rounded-lg font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      isInverted ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-300 hover:text-white"
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
                    className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
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
                    className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    title="Toggle zoom magnification"
                  >
                    <ZoomIn className="w-3 h-3" />
                    <span>{zoomLevel}x</span>
                  </button>

                  {/* Rotate */}
                  <button
                    type="button"
                    onClick={() => setRotation((prev) => (prev + 90) % 360)}
                    className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                    title="Rotate 90 degrees"
                  >
                    <RotateCw className="w-3 h-3" />
                  </button>
                </div>

                {/* Simulated DICOM Image View with live CSS filters */}
                <div
                  className="my-auto py-2 flex items-center justify-center transition-all duration-300"
                  style={{
                    filter: `invert(${isInverted ? 1 : 0}) contrast(${
                      contrastLevel === "high" ? 1.4 : contrastLevel === "soft" ? 0.8 : 1
                    })`,
                    transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                  }}
                >
                  {currentCase.svgGraphic(isInverted)}
                </div>

                {/* Bottom Overlay Info */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>DICOM 3.0 Calibrated</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowAiOverlay(!showAiOverlay)}
                    className="text-emerald-400 hover:underline font-semibold cursor-pointer"
                  >
                    {showAiOverlay ? "Hide AI Markers" : "Show AI Markers"}
                  </button>
                </div>
              </div>

              {/* Right Report Editor (5 cols) */}
              <div className="sm:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-3.5 flex flex-col justify-between text-xs space-y-3">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Radiological Report
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      Doctor Review
                    </span>
                  </div>

                  {/* Clinical Indication */}
                  <div className="text-[11px] text-slate-400">
                    <strong className="text-slate-300 block mb-0.5">Clinical History:</strong>
                    <span>{currentCase.clinicalHistory}</span>
                  </div>

                  {/* Findings */}
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-[11px] text-slate-300 leading-relaxed space-y-1">
                    <strong className="text-emerald-400 block text-[10px] uppercase tracking-wider">
                      Observations &amp; Findings:
                    </strong>
                    <p>{currentCase.findings}</p>
                  </div>

                  {/* Impression */}
                  <div className="bg-emerald-950/70 border border-emerald-800/80 rounded-xl p-2.5 text-[11px] text-emerald-300 space-y-1">
                    <strong className="text-white block text-[10px] uppercase tracking-wider">
                      Final Impression:
                    </strong>
                    <p className="font-medium">{currentCase.impression}</p>
                  </div>
                </div>

                {/* E-Signature & Report Actions */}
                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <div>
                      <div className="font-semibold text-slate-200">{currentCase.radiologist}</div>
                      <div className="text-emerald-400">{currentCase.bmdcReg}</div>
                    </div>
                    {isSigned && (
                      <span className="bg-emerald-900/80 text-emerald-300 border border-emerald-700 px-2 py-0.5 rounded font-bold text-[10px] flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Signed ✓</span>
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSigned(true)}
                    className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>
                      {isSigned
                        ? language === "en"
                          ? "Download Signed Official PDF Report"
                          : "স্বাক্ষরিত অফিশিয়াল রিপোর্ট ডাউনলোড করুন"
                        : language === "en"
                        ? "Verify & Sign Official Report"
                        : "যাচাই করে ডিজিটাল স্বাক্ষর করুন"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer Ribbon */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-3 mt-3 border-t border-slate-800">
              <span className="text-[11px]">
                {language === "en"
                  ? "Over 40+ Diagnostic Centers Connected Across Bangladesh."
                  : "ঢাকা, সিলেট ও চট্টগ্রামের শীর্ষ ডায়াগনস্টিক সেন্টারে কার্যকর।"}
              </span>
              <span className="text-emerald-400 font-bold text-[11px]">
                DICOM 3.0 / HL7 Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
