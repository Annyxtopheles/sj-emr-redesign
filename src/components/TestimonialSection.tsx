"use client";

import { Quote, Star, Award, Stethoscope, CheckCircle2 } from "lucide-react";

interface TestimonialSectionProps {
  language: "en" | "bn";
}

export default function TestimonialSection({ language }: TestimonialSectionProps) {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "en" ? "Doctor Testimonials" : "চিকিৎসকদের বাস্তব অভিজ্ঞতা"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {language === "en"
              ? "Trusted by Renowned Clinicians & Healthcare Specialists"
              : "দেশের বিশেষজ্ঞ চিকিৎসকদের আস্থায় এস জে ইএমআর"}
          </h2>
          <p className="text-base text-slate-600">
            {language === "en"
              ? "See how practitioners across Bangladesh use SJ EMR to streamline tele-consultations and routine chamber operations."
              : "দেখুন কীভাবে বিশেষজ্ঞ চিকিৎসকরা চেম্বার ও দূরবর্তী রোগীদের সেবায় এস জে ইএমআর ব্যবহার করে স্বাচ্ছন্দ্য পাচ্ছেন।"}
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white p-8 sm:p-12 shadow-2xl border border-emerald-800/60 overflow-hidden">
            {/* Background Quotes Watermark */}
            <Quote className="absolute right-6 -bottom-6 w-44 h-44 text-emerald-600/10 pointer-events-none" />

            <div className="relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-semibold text-emerald-300">
                  {language === "en" ? "Verified Doctor Review" : "যাচাইকৃত চিকিৎসকের মতামত"}
                </span>
              </div>

              {/* Quote Body */}
              <blockquote className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed text-slate-100 mb-8 italic">
                {language === "en"
                  ? "“It's very easy to use and helps to communicate easily with patients remotely. This is helping a lot to provide services to my patients without having to worry about physical constraints. I am truly delighted with how quickly it integrates with my clinical routine.”"
                  : "“এটি ব্যবহার করা অত্যন্ত সহজ এবং দূরবর্তী রোগীদের সাথে সহজে যোগাযোগ করতে দারুণ সহায়তা করে। চেম্বার ও টেলিমেডিসিন উভয় ক্ষেত্রেই রোগীদের তাৎক্ষণিক সেবা নিশ্চিত করা এখন অনেক স্বস্তিদায়ক হয়েছে। আমি চিকিৎসাসেবা দিতে পেরে অত্যন্ত আনন্দিত।”"}
              </blockquote>

              {/* Doctor Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-emerald-800/80">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-700/80 border-2 border-emerald-400 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                    <Stethoscope className="w-7 h-7 text-emerald-200" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-white">Dr. Ehasan UZ Zaman Khan</h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-xs text-emerald-300 font-medium">
                      MBBS, BCS (Health), DDV (SKIN), BSMMU
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {language === "en"
                        ? "Dermatology & Venereology Specialist"
                        : "চর্ম ও যৌনরোগ বিশেষজ্ঞ"}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/90 text-emerald-200 text-xs font-semibold border border-emerald-700/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {language === "en" ? "Active SJ EMR Practitioner" : "সক্রিয় ব্যবহারকারী চিকিৎসক"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Trust Stat Pillars */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-center">
            <h4 className="text-2xl font-extrabold text-emerald-700">99.4%</h4>
            <p className="text-xs text-slate-600 mt-1">
              {language === "en" ? "Doctor Satisfaction Rating" : "চিকিৎসক সন্তুষ্টি রেটিং"}
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-center">
            <h4 className="text-2xl font-extrabold text-teal-700">&lt; 15 Mins</h4>
            <p className="text-xs text-slate-600 mt-1">
              {language === "en" ? "Learning Curve / Onboarding" : "সহজেই সফটওয়্যার আয়ত্ত করার সময়"}
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-center">
            <h4 className="text-2xl font-extrabold text-cyan-700">100%</h4>
            <p className="text-xs text-slate-600 mt-1">
              {language === "en" ? "Paperless Records Capability" : "সম্পূর্ণ পেপারলেস চেম্বার সুবিধা"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
