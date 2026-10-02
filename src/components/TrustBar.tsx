"use client";

import { Award, Building2, Users2, HeartPulse, CheckCircle } from "lucide-react";
import CountUp from "@/components/ui/CountUp";

interface TrustBarProps {
  language: "en" | "bn";
}

export default function TrustBar({ language }: TrustBarProps) {
  const credentials = [
    {
      title: language === "en" ? "Member of BASIS" : "বেসিস (BASIS) সদস্য",
      subtitle:
        language === "en"
          ? "Bangladesh Association of Software & Info Services"
          : "বাংলাদেশ অ্যাসোসিয়েশন অব সফটওয়্যার অ্যান্ড ইনফরমেশন সার্ভিসেস",
      tag: "Verified Member",
    },
    {
      title: language === "en" ? "Sylhet Chamber of Commerce" : "সিলেট চেম্বার অব কমার্স",
      subtitle:
        language === "en"
          ? "Member of Sylhet Chamber of Commerce & Industry"
          : "সিলেট চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রি নিবন্ধিত",
      tag: "Trade Member",
    },
    {
      title: language === "en" ? "BD Physicians Network" : "বিডি ফিজিশিয়ানস পার্টনার",
      subtitle:
        language === "en"
          ? "Strategic clinical partner for doctor workflows"
          : "ডাক্তারদের ক্লিনিক্যাল ওয়ার্কফ্লোর স্ট্র্যাটেজিক পার্টনার",
      tag: "Clinical Partner",
    },
    {
      title: language === "en" ? "Health Support Sylhet" : "হেলথ সাপোর্ট সিলেট",
      subtitle:
        language === "en"
          ? "Healthcare outreach & telemedicine implementation"
          : "টেলিমেডিসিন সেবা ও স্বাস্থ্যসুরক্ষা পার্টনার",
      tag: "Healthcare Partner",
    },
    {
      title: language === "en" ? "The Optimists" : "দ্য অপটিমিস্টস",
      subtitle:
        language === "en"
          ? "Child health & humanitarian medical collaboration"
          : "শিশু স্বাস্থ্য ও মানবিক স্বাস্থ্যসেবা পার্টনার",
      tag: "Non-profit Partner",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-semibold mb-3">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === "en" ? "Institutional Credibility & Trust" : "প্রাতিষ্ঠানিক গ্রহণযোগ্যতা ও নির্ভরতা"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Trusted by National Healthcare Bodies & Leading Practitioners"
              : "বাংলাদেশের শীর্ষস্থানীয় স্বাস্থ্যসেবা ও পেশাজীবী সংগঠন দ্বারা স্বীকৃত"}
          </h2>
        </div>

        {/* Logos & Credentials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                    {item.tag}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-slate-100 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-snug">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Numbers */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
              <CountUp to={62000} separator="," duration={2.2} />+
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {language === "en" ? "Consultations Completed" : "সম্পন্ন ডিজিটাল প্রেসক্রিপশন"}
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">
              &lt; <CountUp to={60} duration={1.8} /> Sec
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {language === "en" ? "Average Rx Writing Time" : "গড় প্রেসক্রিপশন তৈরির সময়"}
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
              <CountUp to={100} duration={1.6} />%
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {language === "en" ? "BMDC Format Compliant" : "BMDC প্রেসক্রিপশন রুলস সম্মত"}
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300">24/7</div>
            <div className="text-xs text-slate-400 mt-1">
              {language === "en" ? "Local Live Support" : "ঢাকা ও সিলেট অন-কল সহায়তা"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
