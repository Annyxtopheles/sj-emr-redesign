"use client";

import Image from "next/image";
import {
  FileSignature,
  Pill,
  Users,
  CalendarCheck,
  Video,
  Smartphone,
  Laptop2,
  Building,
  Sparkles,
  Check,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface FeatureDeepDiveProps {
  language: "en" | "bn";
}

export default function FeatureDeepDive({ language }: FeatureDeepDiveProps) {
  // Top 3 Flagship Pillars with Custom Spot Graphics
  const spotlightFeatures = [
    {
      image: "/assets/spot-rx.png",
      alt: "Smart e-Prescription & Medicine Database",
      badge: language === "en" ? "60s Prescribing" : "৬০ সেকেন্ডে প্রেসক্রিপশন",
      title: language === "en" ? "Smart e-Prescription & Drug Directory" : "স্মার্ট ই-প্রেসক্রিপশন ও ড্রাগ ডেটাবেস",
      tagline:
        language === "en"
          ? "BMDC Compliant Format with Instant Drug Auto-Suggest"
          : "বিএমডিসি নির্দেশিকা সম্মত ও স্বয়ংক্রিয় ড্রাগ ড্রপডাউন",
      desc:
        language === "en"
          ? "Type just 2-3 letters of any brand or generic to select dosages, formulations, and instructions from the comprehensive Bangladeshi pharmaceutical registry."
          : "ওষুধের ২-৩টি অক্ষর লিখলেই দেশের অনুমোদিত ড্রাগ ডেটাবেস থেকে সঠিক ডোজ ও ফর্মুলেশন চলে আসে। চেম্বার প্যাডে প্রিন্ট বা এসএমএসে পাঠানো যায় নিমিষেই।",
      points: [
        language === "en" ? "Auto-suggested drug directory" : "হাজারো দেশীয় ওষুধের ড্রপডাউন সাজেশন",
        language === "en" ? "Custom chamber template shortcuts" : "স্পেশালিটি ভিত্তিক রেডিমেড টেমপ্লেট",
        language === "en" ? "Millimeter-exact pad margin customization" : "পূর্বের ছাপানো চেম্বার প্যাডে নিখুঁত প্রিন্ট",
      ],
    },
    {
      image: "/assets/spot-telemedicine.png",
      alt: "Automated Zoom Telemedicine Integration",
      badge: language === "en" ? "1-Click Telemedicine" : "স্বয়ংক্রিয় জুম কল",
      title: language === "en" ? "Automated Zoom Video Consultations" : "স্বয়ংক্রিয় জুম ভিডিও কনসাল্টেশন",
      tagline:
        language === "en"
          ? "Instant Zoom Rooms Dispatched Straight via SMS"
          : "অ্যাপয়েন্টমেন্ট হলেই রোগীর মোবাইলে এসএমএস লিংক",
      desc:
        language === "en"
          ? "When a patient books a remote consultation, SJ EMR instantly provisions a secure Zoom meeting room and texts the link, meeting ID, and password to the patient."
          : "ভিডিও কনসাল্টেশনের অ্যাপয়েন্টমেন্ট শিডিউল হলেই রোগীর মোবাইলে এসএমএসে জুম মিটিং লিংক ও পাসওয়ার্ড পৌঁছে যায়। আলাদা করে লিংক পাঠানোর কোনো ঝামেলা নেই।",
      points: [
        language === "en" ? "Automatic SMS link delivery to patient" : "রোগীর ফোনে সরাসরি এসএমএস নোটিফিকেশন",
        language === "en" ? "Integrated video chamber with notes" : "ভিডিও কলের পাশাপাশি প্রেসক্রিপশন লেখার সুবিধা",
        language === "en" ? "High-definition video on mobile & web" : "মোবাইল ও ল্যাপটপে নিরবচ্ছিন্ন সংযোগ",
      ],
    },
    {
      image: "/assets/spot-records.png",
      alt: "Patient Demographics & Centralized Cloud PHI",
      badge: language === "en" ? "Zero Paperwork" : "আজীবন স্বাস্থ্য নথি",
      title: language === "en" ? "Patient Demographics & Centralized PHI" : "রোগীর ডেমোগ্রাফি ও সুরক্ষিত রেকর্ড",
      tagline:
        language === "en"
          ? "Lifetime Health Records with Diagnostic Attachments"
          : "মোবাইল নম্বর সার্চে এক্স-রে, রিপোর্ট ও অতীত ভিজিট",
      desc:
        language === "en"
          ? "Retrieve complete patient records instantly by mobile number. Never ask patients to carry bulky physical files — review past diagnoses, attached X-rays, and lab scans."
          : "রোগীর মোবাইল নম্বর দিয়ে সার্চ করলেই আগের সব প্রেসক্রিপশন, চিফ কমপ্লেইন্টস এবং এক্স-রে বা ল্যাব টেস্টের ছবি ডিজিটালভাবে সুরক্ষিত পাওয়া যায়।",
      points: [
        language === "en" ? "Instant lookup by mobile number" : "মোবাইল নম্বর দিয়ে এক ক্লিকে রেকর্ড বের করা",
        language === "en" ? "X-ray, radiology & lab report uploads" : "এক্স-রে ও ডায়াগনস্টিক রিপোর্ট সংরক্ষণ",
        language === "en" ? "Bank-grade encrypted cloud storage" : "এনক্রিপ্টেড ও সম্পূর্ণ নিরাপদ ক্লাউড ব্যাকআপ",
      ],
    },
  ];

  // Secondary Practice Features
  const secondaryFeatures = [
    {
      icon: CalendarCheck,
      title: language === "en" ? "Chamber Queue & Slot Scheduling" : "চেম্বার সিরিয়াল ও স্লট শিডিউলিং",
      desc:
        language === "en"
          ? "Empower staff to manage patient queues, walk-in tokens, and sync appointments with doctor availability."
          : "রিসেপশনিস্ট সহজেই রোগীর সিরিয়াল ও টোকেন ম্যানেজ করতে পারে এবং ডাক্তারের সুবিধাজনক সময়ে স্লট বুক করে।",
    },
    {
      icon: Smartphone,
      title: language === "en" ? "Android & Web Patient Portal" : "অ্যান্ড্রয়েড ও ওয়েব পেশেন্ট অ্যাপ",
      desc:
        language === "en"
          ? "Patients can view digital prescriptions on their phone, review follow-up dates, and schedule visits."
          : "রোগীর মোবাইলেই সংরক্ষিত থাকে প্রেসক্রিপশন ও ফলো-আপ তারিখ। কখনো প্রেসক্রিপশন হারানোর ভয় নেই।",
    },
    {
      icon: Laptop2,
      title: language === "en" ? "Cross-Device Cloud Sync" : "ক্লাউড অটো-সিঙ্ক (ডেস্কটপ ও ল্যাপটপ)",
      desc:
        language === "en"
          ? "Work seamlessly across clinic desktop, personal laptop, or tablet with real-time cloud data harmony."
          : "চেম্বার, হাসপাতাল কিংবা ব্যক্তিগত ল্যাপটপ—সব ডিভাইসেই ডেটা রিয়েল-টাইমে স্বয়ংক্রিয়ভাবে সিঙ্ক হয়।",
    },
    {
      icon: Building,
      title: language === "en" ? "Hospital & Multi-Doctor Polyclinic" : "হাসপাতাল ও মাল্টি-ডাক্তার মোড",
      desc:
        language === "en"
          ? "Role-based accounts for multiple doctors, receptionist front-desk, and centralized billing."
          : "একাধিক ডাক্তার, আলাদা আলাদা ডিপার্টমেন্ট ও রিসেপশন স্টাফদের জন্য সেন্ট্রালাইজড ম্যানেজমেন্ট সুবিধা।",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "en" ? "Core Platform Capabilities" : "প্ল্যাটফর্মের মূল সুবিধাসমূহ"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {language === "en"
              ? "Designed for Bangladeshi Doctors, Built for Speed & Precision"
              : "বাংলাদেশের চিকিৎসকদের বাস্তব অভিজ্ঞতার আলোকে নির্মিত ফিচারসমূহ"}
          </h2>
          <p className="text-base text-slate-600">
            {language === "en"
              ? "Every tool is tailored to cut clerical burden, eliminate prescription errors, and ensure seamless patient follow-up."
              : "প্রতিটি ফিচার তৈরি করা হয়েছে চেম্বারের সময় বাঁচাতে, প্রেসক্রিপশনের নির্ভুলতা নিশ্চিত করতে এবং রোগীদের উন্নত সেবা দিতে।"}
          </p>
        </div>

        {/* Top 3 Flagship Spotlight Bento Cards with Custom Spot Graphics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {spotlightFeatures.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-lg hover:border-emerald-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Spot Illustration Container */}
                <div className="relative h-44 sm:h-52 w-full bg-slate-50/90 rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden mb-6 group-hover:bg-emerald-50/40 group-hover:border-emerald-200/60 transition-colors">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mb-3">{item.tagline}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.desc}</p>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">SJ EMR Core</span>
                <a
                  href="#contact"
                  className="text-emerald-700 hover:text-emerald-900 font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>{language === "en" ? "Explore Demo" : "ডেমো দেখুন"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Practice Tools: 4-Column Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 hover:bg-white hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center mb-3 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{feat.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === "en" ? "Included in all plans" : "সকল প্ল্যানে অন্তর্ভুক্ত"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-1">
              {language === "en"
                ? "Need a Custom Feature or Specialty Module for Your Chamber?"
                : "আপনার স্পেশালিটি বা চেম্বারের জন্য বিশেষ কোনো ফিচারের প্রয়োজন?"}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              {language === "en"
                ? "Skin/Dermatology, Orthopedic, Gynecology, Pediatrics, and General Medicine templates available."
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
