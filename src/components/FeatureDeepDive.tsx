"use client";

import {
  FileSignature,
  Pill,
  Users,
  CalendarCheck,
  Video,
  Smartphone,
  Laptop2,
  ShieldAlert,
  Building,
  Sparkles,
  Check,
} from "lucide-react";

interface FeatureDeepDiveProps {
  language: "en" | "bn";
}

export default function FeatureDeepDive({ language }: FeatureDeepDiveProps) {
  const features = [
    {
      icon: FileSignature,
      title: language === "en" ? "Smart e-Prescription Module" : "স্মার্ট ই-প্রেসক্রিপশন মডিউল",
      tagline:
        language === "en"
          ? "Govt. Compliant & Custom Chamber Templates"
          : "সরকারি নির্দেশিকা সম্মত ও কাস্টম চেম্বার টেমপ্লেট",
      desc:
        language === "en"
          ? "Generate error-free digital prescriptions in under 60 seconds. Features intelligent auto-suggested drug dropdowns, dosage calculators, pre-configured templates for common conditions, and 1-click BMDC-formatted print or SMS delivery."
          : "কয়েক ক্লিকেই তৈরি করুন সরকারি নিয়ম মেনে সুনির্দিষ্ট প্রেসক্রিপশন। রয়েছে ড্রাগ অটো-ড্রপডাউন, সেবনবিধির শর্টকাট এবং বিভিন্ন রোগের জন্য কাস্টম টেমপ্লেট সেভ করার অনন্য সুবিধা।",
      badge: language === "en" ? "Core Engine" : "প্রধান ফিচার",
      color: "emerald",
    },
    {
      icon: Pill,
      title: language === "en" ? "Bangladeshi Medicine Database" : "সমৃদ্ধ দেশীয় ড্রাগ ডেটাবেস",
      tagline:
        language === "en"
          ? "Comprehensive Brand & Generic Directory"
          : "ব্র্যান্ড ও জেনেরিক নামের পূর্ণাঙ্গ তথ্যভাণ্ডার",
      desc:
        language === "en"
          ? "Instant search across thousands of pharmaceuticals registered in Bangladesh. Access generic names, dosage strengths, formulations (Tablet, Syrup, Injection, Drop), and manufacturer details instantly."
          : "বাংলাদেশে প্রচলিত সব ধরনের ওষুধের ব্র্যান্ড নেম, জেনেরিক নেম, শক্তি ও ফর্মুলেশন (ট্যাবলেট, সিরাপ, ইনজেকশন ইত্যাদি) সহজেই সার্চ করে প্রেসক্রিপশনে যুক্ত করুন।",
      badge: language === "en" ? "Built-in Directory" : "বিল্ট-ইন ডেটাবেস",
      color: "teal",
    },
    {
      icon: Video,
      title: language === "en" ? "Automated Zoom Telemedicine" : "স্বয়ংক্রিয় জুম টেলিমেডিসিন",
      tagline:
        language === "en"
          ? "Instant Video Calls via Automated SMS"
          : "এসএমএস লিংকের মাধ্যমে সরাসরি ভিডিও কনসাল্টেশন",
      desc:
        language === "en"
          ? "Seamlessly conduct remote consultations. When an online appointment is set, SJ EMR automatically generates a unique Zoom meeting ID & password and texts it directly to the patient’s phone."
          : "ভিডিও কনসাল্টেশনের অ্যাপয়েন্টমেন্ট কনফার্ম হওয়ার সাথে সাথে রোগীর মোবাইলে স্বয়ংক্রিয়ভাবে জুম মিটিং আইডি ও পাসওয়ার্ড চলে যায়, যাতে সহজেই নির্বিঘ্ন ভিডিও কল করা যায়।",
      badge: language === "en" ? "Instant Connect" : "সরাসরি কানেক্ট",
      color: "blue",
    },
    {
      icon: Users,
      title: language === "en" ? "Patient Demographics & Full PHI" : "রোগীর ডেমোগ্রাফি ও আজীবন রেকর্ড",
      tagline:
        language === "en"
          ? "Lifetime Electronic Health Record"
          : "এক স্ক্রিনে এক্স-রে, রিপোর্ট ও অতীত ইতিহাস",
      desc:
        language === "en"
          ? "Consolidate each patient's complete case study, chief complaints, past prescriptions, and visual diagnostic documents (e.g., X-ray scans, facial clinical photography, and pathology test reports) in one place."
          : "রোগীর ব্যক্তিগত তথ্য, অতীতের ভিজিট হিস্ট্রি, চিফ কমপ্লেইন্ট এবং এক্স-রে বা ল্যাব টেস্টের ছবি ডিজিটালভাবে সুরক্ষিত রাখুন। যেকোনো সময় যেকোনো ডিভাইস থেকে খুঁজে পান।",
      badge: language === "en" ? "Zero Paper Lost" : "১০০% ডিজিটাল ফাইল",
      color: "indigo",
    },
    {
      icon: CalendarCheck,
      title: language === "en" ? "Smart Chamber & Slot Scheduling" : "চেম্বার ও অ্যাপয়েন্টমেন্ট শিডিউলিং",
      tagline:
        language === "en"
          ? "Admin & Assistant Multi-User Booking"
          : "সহকারী ও রিসেপশন স্টাফদের জন্য সহজ বুকিং",
      desc:
        language === "en"
          ? "Empower your receptionist or backend assistants to manage real-time patient queues, avoid chamber overcrowding, balance walk-in tokens with scheduled appointments, and sync with your availability."
          : "রিসেপশনিস্ট বা অ্যাসিস্ট্যান্ট সহজেই ডাক্তারের সুবিধাজনক স্লটে রোগীদের অ্যাপয়েন্টমেন্ট শিডিউল করতে পারে। ভিড় কমানো ও দৈনিক সিরিয়াল নিয়ন্ত্রণ এখন অতি সহজ।",
      badge: language === "en" ? "Queue Control" : "সিরিয়াল ম্যানেজমেন্ট",
      color: "amber",
    },
    {
      icon: Smartphone,
      title: language === "en" ? "Android & Web Patient Portal" : "অ্যান্ড্রয়েড ও ওয়েব পেশেন্ট অ্যাপ",
      tagline:
        language === "en"
          ? "Native React Technology for Patients"
          : "রোগীদের জন্য সহজে প্রেসক্রিপশন ও অ্যাপয়েন্টমেন্ট দেখা",
      desc:
        language === "en"
          ? "Patients can download the dedicated Android app to schedule chamber visits, view their digital prescriptions, track doctor instructions, and never stress about leaving old paper prescriptions behind."
          : "রোগীর মোবাইলেই থাকবে তার সব প্রেসক্রিপশন ও ডাক্তারের পরামর্শ। পুরনো প্রেসক্রিপশন হারিয়ে ফেলার কোনো ভয় নেই; যেকোনো নতুন ভিজিটেও ডাক্তার সরাসরি আগের সব রেকর্ড দেখতে পাবেন।",
      badge: language === "en" ? "Google Play Ready" : "প্লে-স্টোর অ্যাপ",
      color: "sky",
    },
    {
      icon: Laptop2,
      title: language === "en" ? "Cross-Device Cloud Sync" : "ক্লাউড অটো-সিঙ্ক ও সিকিউরিটি",
      tagline:
        language === "en"
          ? "Desktop, Laptop & Tablet Harmony"
          : "ল্যাপটপ, ডেস্কটপ বা ট্যাবলেটে নিরবচ্ছিন্ন অ্যাক্সেস",
      desc:
        language === "en"
          ? "Work uninterrupted whether at your main clinic, hospital OPD, or home chamber. Changes sync instantaneously across devices with bank-grade encryption and automated cloud backups."
          : "চেম্বার, হাসপাতাল কিংবা বাসা—যেখান থেকেই লগইন করুন না কেন, সব ডেটা থাকবে নিরাপদ ও আপ-টু-ডেট। সম্পূর্ণ এনক্রিপ্টেড ক্লাউড ব্যাকআপ ব্যবস্থা।",
      badge: language === "en" ? "High Availability" : "সার্বক্ষণিক সচল",
      color: "violet",
    },
    {
      icon: Building,
      title: language === "en" ? "Hospital & Multi-Doctor Clinic Mode" : "হাসপাতাল ও মাল্টি-ডাক্তার ক্লিনিক মোড",
      tagline:
        language === "en"
          ? "Multi-Specialty Chamber Administration"
          : "একাধিক ডাক্তার, ডিপার্টমেন্ট ও ডায়াগনস্টিক সাপোর্ট",
      desc:
        language === "en"
          ? "Designed to scale effortlessly from solo doctor chambers to multi-specialty polyclinics and diagnostic centers. Support unlimited doctors, department routing, and central administrative controls."
          : "একক ডাক্তার চেম্বার থেকে শুরু করে বড় পলিক্লিনিক ও ডায়াগনস্টিক সেন্টারের জন্য প্রযোজ্য। আনলিমিটেড ডাক্তার যুক্ত করা, আলাদা আলাদা পারমিশন ও একাউন্টিং সমন্বয় সম্ভব।",
      badge: language === "en" ? "Enterprise Scale" : "ক্লিনিক ও হাসপাতাল",
      color: "rose",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "en" ? "Everything Your Practice Needs" : "ডাক্তারি চেম্বারের পূর্ণাঙ্গ সমাধান"}</span>
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

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-emerald-500/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-emerald-800 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-700 mb-3">{feat.tagline}</p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">SJ EMR Core</span>
                  <span className="text-emerald-600 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    ✓ {language === "en" ? "Active" : "সক্রিয়"}
                  </span>
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
