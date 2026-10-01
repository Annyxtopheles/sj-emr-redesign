"use client";

import Image from "next/image";
import {
  CalendarCheck,
  Smartphone,
  Laptop2,
  Building,
  Sparkles,
  Check,
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

  // Secondary Practice Tools: Balanced 4-Column Grid
  const secondaryFeatures = [
    {
      icon: CalendarCheck,
      title: language === "en" ? "Queue & Slot Scheduling" : "চেম্বার সিরিয়াল ও শিডিউলিং",
      desc:
        language === "en"
          ? "Empower front-desk staff to manage patient queues, walk-in tokens, and sync visits with doctor availability."
          : "রিসেপশনিস্ট সহজেই রোগীর সিরিয়াল ও টোকেন ম্যানেজ করে এবং ডাক্তারের সুবিধাজনক সময়ে স্লট বুক করে।",
    },
    {
      icon: Smartphone,
      title: language === "en" ? "Android Patient Portal" : "অ্যান্ড্রয়েড পেশেন্ট অ্যাপ",
      desc:
        language === "en"
          ? "Patients can view digital prescriptions on their phone, review follow-up dates, and book appointments."
          : "রোগীর ফোনেই সংরক্ষিত থাকে সব প্রেসক্রিপশন ও ফলো-আপ তারিখ, যাতে কোনো ফাইল হারিয়ে না যায়।",
    },
    {
      icon: Laptop2,
      title: language === "en" ? "Multi-Device Cloud Sync" : "ক্লাউড অটো-সিঙ্ক ও সিকিউরিটি",
      desc:
        language === "en"
          ? "Work seamlessly across clinic desktop, personal laptop, or tablet with real-time cloud data harmony."
          : "চেম্বার, হাসপাতাল কিংবা ব্যক্তিগত ল্যাপটপ—সব ডিভাইসেই রিয়েল-টাইমে ডেটা স্বয়ংক্রিয়ভাবে সিঙ্ক হয়।",
    },
    {
      icon: Building,
      title: language === "en" ? "Hospital & Polyclinic Mode" : "হাসপাতাল ও মাল্টি-ডাক্তার মোড",
      desc:
        language === "en"
          ? "Multi-doctor accounts, department routing, receptionist access, and centralized billing administration."
          : "একাধিক ডাক্তার, আলাদা আলাদা ডিপার্টমেন্ট ও রিসেপশন স্টাফদের জন্য সেন্ট্রালাইজড ম্যানেজমেন্ট সুবিধা।",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with balanced text wrap */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
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

        {/* Top 3 Flagship Spotlight Cards with Repositioned Badges & Zero Footer Clutter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {spotlightFeatures.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-lg hover:border-emerald-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Spot Illustration Container (Clean, no badges inside) */}
                <div className="relative h-44 sm:h-52 w-full bg-slate-50/90 rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden mb-6 group-hover:bg-emerald-50/40 group-hover:border-emerald-200/60 transition-colors">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Badge Repositioned Directly Above the Title */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md uppercase tracking-wider border border-emerald-200/70">
                    {item.badge}
                  </span>
                </div>

                {/* Main Title & Tagline with text-balance to avoid orphaned words */}
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-800 transition-colors text-balance leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mb-3 text-pretty">
                  {item.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 text-pretty">
                  {item.desc}
                </p>

                {/* Feature Bullet Points */}
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
                  <h4 className="text-sm font-bold text-slate-900 mb-1 text-balance leading-snug">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed text-pretty">
                    {feat.desc}
                  </p>
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
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-balance">
              {language === "en"
                ? "Need a Custom Feature or Specialty Module for Your Chamber?"
                : "আপনার স্পেশালিটি বা চেম্বারের জন্য বিশেষ কোনো ফিচারের প্রয়োজন?"}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 text-pretty">
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
