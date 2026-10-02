"use client";

import Image from "next/image";
import { Quote, CheckCircle2 } from "lucide-react";

interface TestimonialSectionProps {
  language: "en" | "bn";
}

export default function TestimonialSection({ language }: TestimonialSectionProps) {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-950 text-white scroll-mt-20 relative overflow-hidden border-b border-slate-900">
      {/* Subtle emerald atmospheric background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Left-Aligned */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Trusted by Renowned Clinicians & Healthcare Specialists"
              : "দেশের বিশেষজ্ঞ চিকিৎসকদের আস্থায় এস জে ইএমআর"}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 text-pretty leading-relaxed">
            {language === "en"
              ? "See how practitioners across Bangladesh use SJ EMR to streamline tele-consultations and routine chamber operations."
              : "দেখুন কীভাবে বিশেষজ্ঞ চিকিৎসকরা চেম্বার ও দূরবর্তী রোগীদের সেবায় এস জে ইএমআর ব্যবহার করে স্বাচ্ছন্দ্য পাচ্ছেন।"}
          </p>
        </div>

        {/* Large Left-Aligned Quote */}
        <div className="mb-14 lg:mb-16">
          <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-500/40 mb-6" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-slate-100 max-w-4xl text-left text-pretty font-sans">
            {language === "en"
              ? "“It's very easy to use and helps to communicate easily with patients via remotely. This is helping a lot to provide services to my patients without having to worry about physically examining patients in an epidemic situation. I am happy to be able to help patients at the moment.”"
              : "“এটি ব্যবহার করা খুবই সহজ এবং দূরবর্তী রোগীদের সাথে সহজে যোগাযোগ করতে দারুণভাবে সহায়তা করে। মহামারী বা যেকোনো বিশেষ পরিস্থিতিতে সরাসরি রোগী পরীক্ষার উদ্বেগ ছাড়াই রোগীদের নির্বিঘ্নে চিকিৎসাসেবা প্রদান করতে এটি অনেক সাহায্য করছে। এই সময়ে রোগীদের পাশে দাঁড়িয়ে চিকিৎসা নিশ্চিত করতে পেরে আমি আনন্দিত।”"}
          </blockquote>

          {/* Doctor Details */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-800">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500 shadow-md shrink-0 bg-slate-800">
              <Image
                src="/assets/dr-ehasan.png"
                alt="Dr. Ehasan UZ Zaman Khan"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-white">Dr. Ehasan UZ Zaman Khan</h4>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs text-emerald-400 font-medium">
                MBBS, BCS (Health), DDV (SKIN), BSMMU
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {language === "en"
                  ? "Dermatology & Venereology Specialist"
                  : "চর্ম ও যৌনরোগ বিশেষজ্ঞ"}
              </p>
            </div>
          </div>
        </div>

        {/* Doctor Trust Stat Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-10 border-t border-slate-800">
          <div className="border-l-2 border-emerald-500/50 pl-5">
            <h4 className="text-3xl font-extrabold text-white">99.4%</h4>
            <p className="text-xs text-slate-400 mt-1">
              {language === "en" ? "Doctor Satisfaction Rating" : "চিকিৎসক সন্তুষ্টি রেটিং"}
            </p>
          </div>
          <div className="border-l-2 border-emerald-500/50 pl-5">
            <h4 className="text-3xl font-extrabold text-white">&lt; 15 Mins</h4>
            <p className="text-xs text-slate-400 mt-1">
              {language === "en" ? "Learning Curve / Onboarding" : "সহজেই সফটওয়্যার আয়ত্ত করার সময়"}
            </p>
          </div>
          <div className="border-l-2 border-emerald-500/50 pl-5">
            <h4 className="text-3xl font-extrabold text-white">100%</h4>
            <p className="text-xs text-slate-400 mt-1">
              {language === "en" ? "Paperless Records Capability" : "সম্পূর্ণ পেপারলেস চেম্বার সুবিধা"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
