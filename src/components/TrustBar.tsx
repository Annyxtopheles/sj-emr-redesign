"use client";

import Image from "next/image";

interface TrustBarProps {
  language: "en" | "bn";
}

export default function TrustBar({ language }: TrustBarProps) {
  const credentials = [
    {
      title: language === "en" ? "BMDC Compliance" : "বিএমডিসি কমপ্লায়েন্স ও নির্দেশিকা",
      subtitle:
        language === "en"
          ? "Bangladesh Medical & Dental Council prescription format rules"
          : "বাংলাদেশ মেডিকেল অ্যান্ড ডেন্টাল কাউন্সিল প্রেসক্রিপশন মান সম্মত",
      tag: language === "en" ? "Statutory Council" : "জাতীয় কাউন্সিল",
      logo: "/assets/BMDC Logo for Marquee.svg",
      href: "https://bmdc.org.bd/",
      width: 512,
      height: 189,
    },
    {
      title: language === "en" ? "Member of BASIS" : "বেসিস (BASIS) সদস্য",
      subtitle:
        language === "en"
          ? "Bangladesh Association of Software & Info Services"
          : "বাংলাদেশ অ্যাসোসিয়েশন অব সফটওয়্যার অ্যান্ড ইনফরমেশন সার্ভিসেস",
      tag: language === "en" ? "Verified Member" : "ভেরিফায়েড সদস্য",
      logo: "/assets/BASIS Logo.svg",
      href: "https://basis.org.bd/company-profile/19-02-708",
      width: 424,
      height: 144,
    },
    {
      title: language === "en" ? "Sylhet Chamber of Commerce" : "সিলেট চেম্বার অব কমার্স",
      subtitle:
        language === "en"
          ? "Member of Sylhet Chamber of Commerce & Industry"
          : "সিলেট চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রি নিবন্ধিত সদস্য",
      tag: language === "en" ? "Trade Member" : "ট্রেড সদস্য",
      logo: "/assets/Sylhet Chamber of Commerce Logo for Marquee.svg",
      href: "https://sylhetchamber.org.bd/",
      width: 651,
      height: 178,
    },
    {
      title: language === "en" ? "BD Physicians" : "বিডি ফিজিশিয়ানস",
      subtitle:
        language === "en"
          ? "Strategic clinical partner for doctor workflows"
          : "৫০,০০০+ ডাক্তারদের পেশাদার ক্লিনিক্যাল পার্টনার নেটওয়ার্ক",
      tag: language === "en" ? "Clinical Partner" : "ক্লিনিক্যাল পার্টনার",
      logo: "/assets/BD Physicians Logo for Marquee.svg",
      href: "https://www.facebook.com/bdphysicians/",
      width: 570,
      height: 168,
    },
    {
      title: language === "en" ? "Health Support Sylhet" : "হেলথ সাপোর্ট সিলেট",
      subtitle:
        language === "en"
          ? "Healthcare outreach & telemedicine implementation"
          : "টেলিমেডিসিন সেবা ও স্বাস্থ্যসুরক্ষা পার্টনার",
      tag: language === "en" ? "Healthcare Partner" : "স্বাস্থ্যসেবা পার্টনার",
      logo: "/assets/Sylhet Health Support Logo for Marquee.svg",
      href: "https://sylhealthsupport.xyz/",
      width: 762,
      height: 240,
    },
    {
      title: language === "en" ? "The Optimists" : "দ্য অপটিমিস্টস",
      subtitle:
        language === "en"
          ? "Child health & humanitarian medical collaboration"
          : "শিশু স্বাস্থ্য ও মানবিক স্বাস্থ্যসেবা পার্টনার",
      tag: language === "en" ? "Non-profit Partner" : "মানবিক পার্টনার",
      logo: "/assets/The Optimists Logo.svg",
      href: "https://theoptimists.org/",
      width: 244,
      height: 103,
    },
  ];

  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-14 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Trusted by National Healthcare Bodies & Leading Practitioners"
              : "বাংলাদেশের শীর্ষস্থানীয় স্বাস্থ্যসেবা ও পেশাজীবী সংগঠন দ্বারা স্বীকৃত"}
          </h2>
        </div>

        {/* Infinite Continuous Looping Logo Marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle Left & Right Edge Gradient Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafbfc] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafbfc] to-transparent z-10" />

          {/* Marquee Track Container */}
          <div className="flex w-max items-center group">
            {/* Track Segment 1 */}
            <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-20 pr-12 sm:pr-20 py-2 animate-marquee group-hover:[animation-play-state:paused]">
              {credentials.map((item, idx) => (
                <a
                  key={`track-1-${idx}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center shrink-0 px-3"
                >
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="h-8 sm:h-9 md:h-11 w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[210px] object-contain transition-all duration-300 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 max-md:grayscale-0 max-md:opacity-100"
                  />
                </a>
              ))}
            </div>

            {/* Track Segment 2 (Seamless loop) */}
            <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-20 pr-12 sm:pr-20 py-2 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
              {credentials.map((item, idx) => (
                <a
                  key={`track-2-${idx}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  className="flex items-center justify-center shrink-0 px-3"
                >
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="h-8 sm:h-9 md:h-11 w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[210px] object-contain transition-all duration-300 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 max-md:grayscale-0 max-md:opacity-100"
                  />
                </a>
              ))}
            </div>

            {/* Track Segment 3 (Ultrawide coverage) */}
            <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-20 pr-12 sm:pr-20 py-2 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
              {credentials.map((item, idx) => (
                <a
                  key={`track-3-${idx}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  className="flex items-center justify-center shrink-0 px-3"
                >
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="h-8 sm:h-9 md:h-11 w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[210px] object-contain transition-all duration-300 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 max-md:grayscale-0 max-md:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
