"use client";

import { XCircle, CheckCircle2, ArrowRight, Clock, FileWarning, Zap, Database, Smartphone, X, Check } from "lucide-react";

interface ProblemSolutionProps {
  language: "en" | "bn";
}

export default function ProblemSolution({ language }: ProblemSolutionProps) {
  const painPoints = [
    {
      title: language === "en" ? "Lost or Forgotten Paper Records" : "কাগজের প্রেসক্রিপশন হারিয়ে যাওয়া",
      desc:
        language === "en"
          ? "Patients regularly forget to bring past prescriptions, diagnostic lab reports, or X-rays to follow-up visits."
          : "ফলো-আপ ভিজিটে রোগীরা প্রায়ই পুরনো প্রেসক্রিপশন, এক্স-রে বা ল্যাব রিপোর্ট সঙ্গে আনতে ভুলে যান।",
    },
    {
      title: language === "en" ? "Illegible Handwriting & Drug Confusion" : "হাতের লেখার অস্পষ্টতা ও ওষুধের বিভ্রান্তি",
      desc:
        language === "en"
          ? "Misread medication names or dosages at pharmacies can lead to severe adverse drug reactions and treatment errors."
          : "ফার্মেসিতে অস্পষ্ট হাতের লেখা পড়তে না পেরে ভুল ওষুধ বা ভুল ডোজ দেওয়ার মারাত্মক ঝুঁকি থাকে।",
    },
    {
      title: language === "en" ? "Exhausting Manual Repetition" : "একই ড্রাগ বারবার হাতে লেখার ক্লান্তি",
      desc:
        language === "en"
          ? "Writing repetitive brand names, frequencies, and instructions for 40–80 patients a day wastes 2+ hours per chamber."
          : "প্রতিদিন ৪০-৮০ জন রোগীর জন্য একই ওষুধের নাম, সেবনবিধি বারবার হাতে লিখে ঘণ্টার পর ঘণ্টা অপচয় হয়।",
    },
    {
      title: language === "en" ? "Disconnected Telemedicine & Video Calls" : "টেলিমেডিসিনে আলাদা লিংকের ঝামেলা",
      desc:
        language === "en"
          ? "Manually creating Zoom/WhatsApp links, copying passwords, and tracking payments outside the medical record."
          : "রোগীকে আলাদাভাবে জুম বা হোয়াটসঅ্যাপ লিংক পাঠানো, পাসওয়ার্ড দেওয়া ও কনসাল্টেশন ট্র্যাকিংয়ের জটিলতা।",
    },
  ];

  const solutions = [
    {
      title: language === "en" ? "Instant Lifetime Digital Patient PHI" : "এক ক্লিকেই রোগীর আজীবন ইতিহাস ও রিপোর্ট",
      desc:
        language === "en"
          ? "Search any patient by mobile number. Instantly see past visits, diagnosis, medications, and attached X-ray scans."
          : "রোগীর মোবাইল নম্বর দিয়ে সার্চ করলেই আগের সব প্রেসক্রিপশন, ডোজ, রোগ নির্ণয় এবং এক্স-রে ইমেজ একসাথে স্ক্রিনে।",
    },
    {
      title: language === "en" ? "Auto-Suggest Drug Directory & Templates" : "অটো-সাজেশন ড্রাগ ডেটাবেস ও রেডিমেড টেমপ্লেট",
      desc:
        language === "en"
          ? "Type 2 letters of a drug name to select verified brands and dosages from the Bangladeshi medicine database in seconds."
          : "ওষুধের নামের প্রথম ২ অক্ষর লিখলেই ড্রাগ ডেটাবেস থেকে সঠিক ডোজ ও ফর্মসহ সাজেশন চলে আসে।",
    },
    {
      title: language === "en" ? "60-Second BMDC Compliant e-Prescription" : "৬০ সেকেন্ডে প্রিন্ট ও এসএমএস প্রেসক্রিপশন",
      desc:
        language === "en"
          ? "Generate professional, printed or digital prescriptions with your chamber header, BMDC number, and custom Rx design."
          : "আপনার চেম্বার হেডার, বিএমডিসি নম্বর ও কিউআর কোডসহ পেশাদার ডিজিটাল প্রেসক্রিপশন তৈরি ও প্রিন্ট করুন।",
    },
    {
      title: language === "en" ? "Automated Zoom Telemedicine via SMS" : "১ ক্লিকে স্বয়ংক্রিয় জুম মিটিং ও এসএমএস লিংক",
      desc:
        language === "en"
          ? "When an online appointment is booked, SJ EMR instantly creates a secure Zoom meeting and sends the link to the patient."
          : "অনলাইন অ্যাপয়েন্টমেন্ট শিডিউল হলেই রোগীকে এসএমএসের মাধ্যমে অটোমেটিক জুম মিটিং আইডি ও পাসওয়ার্ড পাঠানো হয়।",
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === "en" ? "Clinical Practice Transformation" : "চেম্বারের ডিজিটাল রূপান্তর"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {language === "en"
              ? "Why Bangladeshi Doctors Are Switching from Paper to SJ EMR"
              : "কেন বাংলাদেশের চিকিৎসকরা খাতা-কলম ছেড়ে এস জে ইএমআর বেছে নিচ্ছেন"}
          </h2>
          <p className="text-base text-slate-600">
            {language === "en"
              ? "Traditional paper workflows cause data errors, duplicate diagnostics, and administrative overload. SJ EMR is engineered to save doctor time while raising care quality."
              : "কাগজের প্রেসক্রিপশন ও এলোমেলো নথিপত্র চেম্বারের সময় নষ্ট করে ও রোগীর চিকিৎসায় ভুল তথ্য দেয়। এস জে ইএমআর নিশ্চিত করে দ্রুততম রোগ নির্ণয় ও নির্ভুল চিকিৎসা।"}
          </p>
        </div>

        {/* Side by side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Pain Points / The Old Way */}
          <div className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-xs relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-rose-500" />
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                  <X className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {language === "en" ? "The Traditional Manual Way" : "সনাতন কাগজ ও খাতার চেম্বার"}
                  </h3>
                  <p className="text-xs text-rose-600 font-medium">
                    {language === "en" ? "High errors, lost documents, slow" : "সময় অপচয়, নথি হারানোর ভয় ও ত্রুটির ঝুঁকি"}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {painPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 text-xs text-rose-700 bg-rose-50/70 p-3 rounded-lg flex items-center gap-2">
              <FileWarning className="w-4 h-4 shrink-0" />
              <span>
                {language === "en"
                  ? "Result: Doctors spend ~40% of consultation time on clerical paperwork instead of patient examination."
                  : "ফলাফল: ডাক্তারদের ৪০% মূল্যবান সময় রোগীর শারীরিক পরীক্ষার পরিবর্তে শুধু খাতা লিখতেই নষ্ট হয়।"}
              </span>
            </div>
          </div>

          {/* Solutions / The SJ EMR Way */}
          <div className="rounded-2xl bg-gradient-to-b from-emerald-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between border border-emerald-800/60">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500" />
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {language === "en" ? "The SJ EMR AI Lite Standard" : "এস জে ইএমআর আধুনিক ডিজিটাল মান"}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium">
                    {language === "en" ? "Instant retrieval, 60s prescriptions, Zoom synced" : "তাৎক্ষণিক তথ্য, ৬০ সেকেন্ডে প্রেসক্রিপশন, অটোমেটেড জুম"}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-100">{item.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-800/80 text-xs text-emerald-200 bg-emerald-900/40 p-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === "en"
                    ? "Saves 2+ hours daily & eliminates prescription handwriting errors."
                    : "প্রতিদিন ২+ ঘণ্টার বেশি সময় বাঁচায় এবং প্রেসক্রিপশনের ভুল রোধ করে।"}
                </span>
              </div>
              <a
                href="#contact"
                className="text-emerald-400 hover:text-white font-semibold inline-flex items-center gap-1 shrink-0 ml-2"
              >
                <span>{language === "en" ? "Try Free" : "ফ্রি ট্রায়াল"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
