"use client";

import Image from "next/image";
import {
  Mic,
  ScanLine,
  Sparkles,
  AlertCircle,
  FileCheck2,
  Languages,
  CalendarClock,
  History,
  Tag,
  BarChart3,
  Check,
  Stethoscope,
} from "lucide-react";

interface FeatureDeepDiveProps {
  language: "en" | "bn";
}

export default function FeatureDeepDive({ language }: FeatureDeepDiveProps) {
  // Top 3 Flagship Pillars with Custom Spot Graphics
  const spotlightFeatures = [
    {
      image: "/assets/spot-rx.jpg",
      alt: "SJ EMR Smart Digital Prescription Interface",
      badge: language === "en" ? "60-Second Prescribing" : "৬০ সেকেন্ডে প্রেসক্রিপশন",
      title: language === "en" ? "Smart e-Prescription & Drug Directory" : "স্মার্ট ই-প্রেসক্রিপশন ও ড্রাগ ডেটাবেস",
      tagline:
        language === "en"
          ? "BMDC-Compliant Format with Instant Drug Auto-Suggest"
          : "বিএমডিসি নির্দেশিকা সম্মত ও স্বয়ংক্রিয় ড্রাগ ড্রপডাউন",
      desc:
        language === "en"
          ? "Type 2-3 letters of any brand or generic to select exact dosages, formulations, and instructions from the comprehensive Bangladeshi drug registry."
          : "ওষুধের ২-৩টি অক্ষর লিখলেই দেশের অনুমোদিত ড্রাগ ডেটাবেস থেকে সঠিক ডোজ ও ফর্মুলেশন চলে আসে। চেম্বার প্যাডে প্রিন্ট বা এসএমএসে পাঠানো যায় নিমিষেই।",
      points: [
        language === "en" ? "Auto-suggested Bangladeshi drug directory" : "হাজারো দেশীয় ওষুধের ড্রপডাউন সাজেশন",
        language === "en" ? "Custom specialty templates for 60-second prescribing" : "স্পেশালিটি ভিত্তিক রেডিমেড টেমপ্লেট শর্টকাট",
        language === "en" ? "Millimeter-exact margin settings for existing pads" : "পূর্বে ছাপানো নিজস্ব চেম্বার প্যাডে নিখুঁত প্রিন্ট",
      ],
    },
    {
      image: "/assets/spot-telemedicine.jpg",
      alt: "SJ EMR Automated Video Telemedicine Consultation",
      badge: language === "en" ? "1-Click Telemedicine" : "স্বয়ংক্রিয় জুম কল",
      title: language === "en" ? "Automated Zoom Video Consultations" : "স্বয়ংক্রিয় জুম ভিডিও কনসাল্টেশন",
      tagline:
        language === "en"
          ? "Instant Zoom Meeting Rooms Dispatched via SMS"
          : "অ্যাপয়েন্টমেন্ট হলেই রোগীর মোবাইলে এসএমএস লিংক",
      desc:
        language === "en"
          ? "When an appointment is scheduled, SJ EMR instantly provisions a secure Zoom room and texts the meeting ID and password directly to the patient's phone."
          : "ভিডিও কনসাল্টেশনের অ্যাপয়েন্টমেন্ট শিডিউল হলেই রোগীর মোবাইলে এসএমএসে জুম মিটিং লিংক ও পাসওয়ার্ড পৌঁছে যায়। আলাদা করে লিংক পাঠানোর কোনো ঝামেলা নেই।",
      points: [
        language === "en" ? "Automatic SMS link delivery to patient phones" : "রোগীর ফোনে সরাসরি এসএমএস নোটিফিকেশন",
        language === "en" ? "Integrated tele-consultation notes & Rx writer" : "ভিডিও কলের পাশাপাশি প্রেসক্রিপশন লেখার সুবিধা",
        language === "en" ? "High-definition video on both mobile and desktop" : "মোবাইল ও ল্যাপটপে নিরবচ্ছিন্ন অডিও-ভিডিও",
      ],
    },
    {
      image: "/assets/spot-records.jpg",
      alt: "SJ EMR Encrypted Cloud Patient Records & Diagnostics",
      badge: language === "en" ? "Zero Paperwork" : "আজীবন স্বাস্থ্য নথি",
      title: language === "en" ? "Patient Demographics & Centralized Cloud PHI" : "রোগীর ডেমোগ্রাফি ও আজীবন ডিজিটাল রেকর্ড",
      tagline:
        language === "en"
          ? "Complete Lifetime Records with Diagnostic Uploads"
          : "মোবাইল নম্বর সার্চে এক্স-রে, রিপোর্ট ও অতীত ভিজিট",
      desc:
        language === "en"
          ? "Retrieve complete patient files in seconds using their mobile number. Eliminate paper loss and review past clinical visits, attached X-rays, and lab scans."
          : "রোগীর মোবাইল নম্বর দিয়ে সার্চ করলেই আগের সব প্রেসক্রিপশন, চিফ কমপ্লেইন্টস এবং এক্স-রে বা ল্যাব টেস্টের ছবি ডিজিটালভাবে সুরক্ষিত পাওয়া যায়।",
      points: [
        language === "en" ? "Instant lookup by patient mobile number" : "মোবাইল নম্বর দিয়ে এক ক্লিকে রেকর্ড অনুসন্ধান",
        language === "en" ? "Centralized X-ray, radiology, and lab report storage" : "এক্স-রে, সিটি স্ক্যান ও ডায়াগনস্টিক রিপোর্ট সংরক্ষণ",
        language === "en" ? "Encrypted cloud storage with automated daily backups" : "এনক্রিপ্টেড ও সম্পূর্ণ নিরাপদ ক্লাউড ব্যাকআপ",
      ],
    },
  ];

  // The 10 Specialized Clinical AI Tools directly from the dev software (src/features/ai/screens/)
  const clinicalAiTools = [
    {
      icon: Mic,
      title: language === "en" ? "Voice-to-Note (STT)" : "ভয়েস-টু-নোট (বাংলা ও ইংরেজি)",
      desc:
        language === "en"
          ? "Dictate findings in Bangla or English via microphone; AI automatically structures observations into clinical SOAP notes."
          : "বাংলা ও ইংরেজি ভয়েস ডিক্টেশন সরাসরি মাইক্রোফোনে রেকর্ড করে স্বয়ংক্রিয়ভাবে নির্ভুল SOAP ফরম্যাটে রূপান্তর করুন।",
    },
    {
      icon: ScanLine,
      title: language === "en" ? "Handwritten Pad OCR" : "হাতের লেখার প্রেসক্রিপশন OCR",
      desc:
        language === "en"
          ? "Photograph existing handwritten prescription sheets; AI extracts medication names, potencies, and instructions."
          : "হাতে লেখা প্রেসক্রিপশনের ছবি বা পিডিএফ ফাইল আপলোড করলে এআই স্বয়ংক্রিয়ভাবে ওষুধের নাম ও মাত্রা ডিজিটাল করে।",
    },
    {
      icon: Sparkles,
      title: language === "en" ? "Diagnosis Assist" : "ডায়াগনসিস অ্যাসিস্ট ও ১-ক্লিক প্রেসক্রিপশন",
      desc:
        language === "en"
          ? "Analyzes complaints and clinical photos to suggest differential diagnoses and draft treatment regimens for doctor review."
          : "লক্ষণ ও ক্লিনিক্যাল ছবি বিশ্লেষণ করে সম্ভাব্য রোগ নির্ণয় এবং ডাক্তারের চূড়ান্ত অনুমোদনের জন্য প্রেসক্রিপশন ড্রাফট প্রস্তুত করে।",
    },
    {
      icon: AlertCircle,
      title: language === "en" ? "Medication Safety Check" : "ওষুধের নিরাপত্তা ও ইন্টারঅ্যাকশন চেক",
      desc:
        language === "en"
          ? "Cross-checks contraindications, duplicate drug classes, and age/weight dosage safety against national directories."
          : "ড্রাগ ইন্টারঅ্যাকশন, ক্ষতিকর ড্রাগ কম্বিনেশন এবং রোগীর বয়স অনুযায়ী সঠিক ডোজ স্বয়ংক্রিয়ভাবে যাচাই করে।",
    },
    {
      icon: FileCheck2,
      title: language === "en" ? "Lab Results Interpreter" : "ল্যাব রিপোর্ট অ্যানালাইজার",
      desc:
        language === "en"
          ? "Upload photo or PDF of pathology reports; AI extracts test parameters, flags out-of-range values, and tracks trajectories."
          : "প্যাথলজি টেস্টের ছবি দিলে স্বয়ংক্রিয়ভাবে অস্বাভাবিক রিডিং শনাক্ত করে এবং অতীত টেস্টের সাথে তুলনামূলক চার্ট তৈরি করে।",
    },
    {
      icon: Languages,
      title: language === "en" ? "Bangla Patient Education" : "রোগীর জন্য সহজ বাংলায় নির্দেশনা",
      desc:
        language === "en"
          ? "Translates complex clinical advice and diet restrictions into plain colloquial Bangla for patients and families."
          : "খাওয়ার নিয়মাবলী ও সতর্কতা রোগীদের বোঝার সুবিধার্থে স্বয়ংক্রিয়ভাবে সহজ ও স্পষ্ট বাংলা ভাষায় প্রিন্ট করে।",
    },
    {
      icon: CalendarClock,
      title: language === "en" ? "Follow-up Planner" : "ফলো-আপ প্ল্যানার ও শিডিউল রিকল",
      desc:
        language === "en"
          ? "Calculates clinical revisit intervals based on chronic diagnosis and drafts personalized SMS reminders."
          : "রোগীর অবস্থা অনুযায়ী পরবর্তী সাক্ষাতের সময় নির্ধারণ এবং স্বয়ংক্রিয় এসএমএস রিমাইন্ডার প্রেরণের ব্যবস্থা।",
    },
    {
      icon: History,
      title: language === "en" ? "Patient History Summarizer" : "রোগীর আজীবন ইতিহাসের সামারি",
      desc:
        language === "en"
          ? "Synthesizes multi-year visits, previous adverse reactions, and chronic history into an instant 1-screen briefing."
          : "বহু বছরের জটিল হিস্ট্রি, অতীত ভিজিট ও দীর্ঘমেয়াদী রোগের ইতিহাস এক নজরে সামারি আকারে উপস্থাপন করে।",
    },
    {
      icon: Tag,
      title: language === "en" ? "Smart Diagnostic Coding" : "স্মার্ট রোগ নির্ণয় ট্যাগিং ও কোডিং",
      desc:
        language === "en"
          ? "Automatically assigns standardized ICD diagnostic tags to clinical notes for clean medical reporting."
          : "ক্লিনিক্যাল নোট থেকে স্বয়ংক্রিয়ভাবে রোগ নির্ণয়ের ট্যাগ ও আন্তর্জাতিক কোডিং যুক্ত করে সুশৃঙ্খল ফাইল নিশ্চিত করে।",
    },
    {
      icon: BarChart3,
      title: language === "en" ? "Clinic AI Insights Dashboard" : "চেম্বার ইনসাইটস ও প্র্যাকটিস অ্যানালিটিক্স",
      desc:
        language === "en"
          ? "Aggregates daily visit volumes, most frequent symptoms, seasonal trends, and chamber revenue analytics."
          : "দৈনিক রোগী সংখ্যা, সবচেয়ে প্রচলিত রোগের প্রবণতা এবং চেম্বারের আয়-ব্যয়ের সার্বিক অ্যানালিটিক্স রিপোর্ট।",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "en" ? "Core Platform Capabilities" : "প্ল্যাটফর্মের মূল সুবিধাসমূহ"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Designed for Bangladeshi Doctors, Built for Speed & Precision"
              : "বাংলাদেশের চিকিৎসকদের বাস্তব অভিজ্ঞতার আলোকে নির্মিত ফিচারসমূহ"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            {language === "en"
              ? "Every tool is tailored to cut clerical burden, eliminate prescription errors, and ensure seamless patient follow-up."
              : "প্রতিটি ফিচার তৈরি করা হয়েছে চেম্বারের সময় বাঁচাতে, প্রেসক্রিপশনের নির্ভুলতা নিশ্চিত করতে এবং রোগীদের উন্নত সেবা দিতে।"}
          </p>
        </div>

        {/* Top 3 Flagship Spotlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {spotlightFeatures.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-lg hover:border-emerald-400 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 sm:h-52 w-full bg-slate-50/90 rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden mb-6 group-hover:bg-emerald-50/40 group-hover:border-emerald-200/60 transition-colors">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mb-3">
                  <span className="inline-block text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md uppercase tracking-wider border border-emerald-200/70">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-800 transition-colors text-balance leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mb-3 text-pretty">
                  {item.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 text-pretty">
                  {item.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug text-pretty">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 10 Clinical AI Tools Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "en" ? "Built-in Clinical AI Tools" : "১০টি বিশেষায়িত ক্লিনিক্যাল এআই টুলস"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Comprehensive Clinical Suite Built Inside SJ EMR AI Lite"
              : "এস জে ইএমআর সফটওয়্যারে সরাসরি সংযুক্ত এআই টুলস"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            {language === "en"
              ? "Every clinical AI tool operates under a strict Doctor-First mandate: AI prepares suggestions, and the doctor retains complete authority to Accept, Edit, or Discard."
              : "প্রতিটি এআই টুল সম্পূর্ণ ডাক্তারের নিয়ন্ত্রণাধীন—ডাক্তারের চূড়ান্ত অনুমোদন ছাড়া কোনো তথ্য মেডিকেল ফাইলে যুক্ত হয় না।"}
          </p>
        </div>

        {/* 10 Clinical AI Tools Grid (Responsive 2 to 5 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {clinicalAiTools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 hover:bg-white hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center mb-3 shadow-2xs group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1 leading-snug group-hover:text-emerald-800 transition-colors">
                    {tool.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-balance">
              {language === "en"
                ? "Need a Custom Feature or Specialty Module for Your Chamber?"
                : "আপনার স্পেশালিটি বা চেম্বারের জন্য বিশেষ কোনো ফিচারের প্রয়োজন?"}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 text-pretty">
              {language === "en"
                ? "Dermatology, Orthopedic, Gynecology, Pediatrics, Cardiology, and General Medicine templates available."
                : "চর্মরোগ, অর্থোপেডিক, স্ত্রীরোগ ও প্রসূতি, শিশুরোগ ও মেডিসিনের রেডিমেড স্পেশালাইজড ফরম্যাট।"
              }
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white text-emerald-950 font-bold text-sm hover:bg-emerald-50 active:bg-emerald-100 transition-all shrink-0 shadow-md"
          >
            {language === "en" ? "Request Specialized Demo" : "স্পেশালাইজড ডেমো চান"}
          </a>
        </div>
      </div>
    </section>
  );
}
