"use client";

import Image from "next/image";
import { CheckCircle, ExternalLink } from "lucide-react";

interface TrustBarProps {
  language: "en" | "bn";
}

export default function TrustBar({ language }: TrustBarProps) {
  const credentials = [
    {
      title: language === "en" ? "BMDC Compliance" : "বিএমডিসি নির্দেশিকা",
      subtitle:
        language === "en"
          ? "Bangladesh Medical & Dental Council prescription format rules"
          : "বাংলাদেশ মেডিকেল অ্যান্ড ডেন্টাল কাউন্সিল প্রেসক্রিপশন মান সম্মত",
      tag: language === "en" ? "Statutory Council" : "জাতীয় কাউন্সিল",
      logo: "/assets/bmdc-logo.svg",
      href: "https://bmdc.org.bd/",
      width: 914,
      height: 914,
    },
    {
      title: language === "en" ? "Member of BASIS" : "বেসিস (BASIS) সদস্য",
      subtitle:
        language === "en"
          ? "Bangladesh Association of Software & Info Services"
          : "বাংলাদেশ অ্যাসোসিয়েশন অব সফটওয়্যার অ্যান্ড ইনফরমেশন সার্ভিসেস",
      tag: language === "en" ? "Verified Member" : "ভেরিফায়েড সদস্য",
      logo: "/assets/partners/basis-member.png",
      href: "https://basis.org.bd/company-profile/19-02-708",
      width: 1024,
      height: 280,
    },
    {
      title: language === "en" ? "Sylhet Chamber of Commerce" : "সিলেট চেম্বার অব কমার্স",
      subtitle:
        language === "en"
          ? "Member of Sylhet Chamber of Commerce & Industry"
          : "সিলেট চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রি নিবন্ধিত সদস্য",
      tag: language === "en" ? "Trade Member" : "ট্রেড সদস্য",
      logo: "/assets/partners/scci-logo.png",
      href: "https://sylhetchamber.org.bd/",
      width: 223,
      height: 223,
    },
    {
      title: language === "en" ? "BD Physicians" : "বিডি ফিজিশিয়ানস",
      subtitle:
        language === "en"
          ? "Strategic clinical partner for doctor workflows"
          : "৫০,০০০+ ডাক্তারদের পেশাদার মেডিকেল নেটওয়ার্ক",
      tag: language === "en" ? "Clinical Partner" : "ক্লিনিক্যাল পার্টনার",
      logo: "/assets/partners/bd-physicians.png",
      href: "https://www.facebook.com/bdphysicians/",
      width: 1024,
      height: 1024,
    },
    {
      title: language === "en" ? "Health Support Sylhet" : "হেলথ সাপোর্ট সিলেট",
      subtitle:
        language === "en"
          ? "Healthcare outreach & telemedicine implementation"
          : "টেলিমেডিসিন সেবা ও স্বাস্থ্যসুরক্ষা পার্টনার",
      tag: language === "en" ? "Healthcare Partner" : "স্বাস্থ্যসেবা পার্টনার",
      logo: "/assets/partners/sylhet-health-support.png",
      href: "https://sylhealthsupport.xyz/",
      width: 240,
      height: 240,
    },
    {
      title: language === "en" ? "The Optimists" : "দ্য অপটিমিস্টস",
      subtitle:
        language === "en"
          ? "Child health & humanitarian medical collaboration"
          : "শিশু স্বাস্থ্য ও মানবিক স্বাস্থ্যসেবা পার্টনার",
      tag: language === "en" ? "Non-profit Partner" : "মানবিক পার্টনার",
      logo: "/assets/partners/the-optimists.png",
      href: "https://theoptimists.org/",
      width: 156,
      height: 63,
    },
  ];

  return (
    <section className="pt-2 sm:pt-4 pb-14 sm:pb-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "en" ? "Institutional Credibility & Trust" : "প্রাতিষ্ঠানিক গ্রহণযোগ্যতা ও নির্ভরতা"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Trusted by National Healthcare Bodies & Leading Practitioners"
              : "বাংলাদেশের শীর্ষস্থানীয় স্বাস্থ্যসেবা ও পেশাজীবী সংগঠন দ্বারা স্বীকৃত"}
          </h2>
        </div>

        {/* Real Logos & Verified Credentials Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {credentials.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between hover:border-emerald-500/80 hover:bg-white transition-all duration-200 group hover:-translate-y-1 shadow-xs hover:shadow-lg hover:shadow-emerald-950/5 text-left"
            >
              <div>
                {/* Authentic Logo Badge Container */}
                <div className="bg-white rounded-xl p-3 h-20 w-full flex items-center justify-center mb-3.5 shadow-xs border border-slate-200/80 group-hover:scale-[1.02] group-hover:border-emerald-200 transition-all">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="max-h-12 w-auto max-w-full object-contain"
                  />
                </div>

                <div className="flex items-start justify-between gap-1.5 mb-1.5">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-slate-600 leading-snug group-hover:text-slate-800 transition-colors">
                  {item.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
