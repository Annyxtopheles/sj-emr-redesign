"use client";

import { useState } from "react";
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  language: "en" | "bn";
  onSelectPlan?: (planName: string) => void;
}

export default function PricingSection({ language, onSelectPlan }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      id: "trial",
      name: language === "en" ? "14-Day Free Trial" : "১৪ দিনের ফ্রি ট্রায়াল",
      badge: language === "en" ? "Zero Risk" : "বিনা খরচে শুরু",
      desc:
        language === "en"
          ? "Experience the full suite of SJ EMR AI Lite with your real chamber workflow."
          : "কোনো অগ্রিম পেমেন্ট ছাড়াই সম্পূর্ণ সফটওয়্যার ব্যবহার করে দেখুন।",
      priceMonthly: "0",
      priceYearly: "0",
      period: language === "en" ? "for 14 days" : "১৪ দিনের জন্য",
      popular: false,
      ctaText: language === "en" ? "Start Free 14-Day Trial" : "ফ্রি ট্রায়াল শুরু করুন",
      features: [
        language === "en" ? "Full e-Prescription Module" : "সম্পূর্ণ ই-প্রেসক্রিপশন মডিউল",
        language === "en" ? "Bangladeshi Drug Database" : "বাংলাদেশ ড্রাগ ডেটাবেস",
        language === "en" ? "Patient Demographics & PHI" : "রোগীর হিস্ট্রি ও রেকর্ড সংরক্ষণ",
        language === "en" ? "Doctor Schedule & Appointments" : "চেম্বার অ্যাপয়েন্টমেন্ট শিডিউলিং",
        language === "en" ? "Payment & Billing Records" : "বিলিং ও ফি ট্র্যাকিং",
        language === "en" ? "Trial SMS Gateway" : "ট্রায়াল এসএমএস সুবিধা",
        language === "en" ? "Single Doctor Chamber" : "১ জন ডাক্তারের চেম্বার",
      ],
    },
    {
      id: "essential",
      name: language === "en" ? "Essential Plan" : "এসেনশিয়াল প্ল্যান",
      badge: language === "en" ? "Standard" : "মাসিক প্ল্যান",
      desc:
        language === "en"
          ? "Perfect for solo practitioners who prefer month-to-month flexibility."
          : "একক ডাক্তারদের জন্য সুবিধাজনক মাসিক সাবস্ক্রিপশন প্ল্যান।",
      priceMonthly: "2,000",
      priceYearly: "2,000",
      period: language === "en" ? "BDT / month" : "টাকা / মাস",
      popular: false,
      ctaText: language === "en" ? "Get Essential Plan" : "এসেনশিয়াল প্ল্যান নিন",
      features: [
        language === "en" ? "All Free Trial Features" : "ফ্রি ট্রায়ালের সকল ফিচার",
        language === "en" ? "Unlimited Patients & Prescriptions" : "আনলিমিটেড রোগী ও প্রেসক্রিপশন",
        language === "en" ? "Custom Prescription Layout / Header" : "কাস্টম চেম্বার হেডার ও প্যাড",
        language === "en" ? "Zoom Video Integration" : "জুম ভিডিও ইন্টিগ্রেশন",
        language === "en" ? "Daily & Weekly OPD Summaries" : "দৈনিক ও সাপ্তাহিক সামারি রিপোর্ট",
        language === "en" ? "Dedicated WhatsApp & Call Support" : "হোয়াটসঅ্যাপ ও ফোন সাপোর্ট",
        language === "en" ? "Cloud Automated Backups" : "স্বয়ংক্রিয় ক্লাউড ব্যাকআপ",
      ],
    },
    {
      id: "essential-plus",
      name: language === "en" ? "Essential Plus" : "এসেনশিয়াল প্লাস (বাৎসরিক)",
      badge: language === "en" ? "🔥 Save 58% - Best Value" : "🔥 ৫৮% সাশ্রয় - সেরা প্ল্যান",
      desc:
        language === "en"
          ? "Pay yearly in advance and save over 14,000 BDT every single year."
          : "বাৎসরিক এককালীন পেমেন্টে পান বিশাল ১৪,০০০ টাকা সরাসরি ডিসকাউন্ট!",
      priceMonthly: "10,000",
      priceYearly: "10,000",
      oldPrice: "24,000",
      period: language === "en" ? "BDT / year (Only ~833 BDT/mo)" : "টাকা / বছর (মাত্র ~৮৩৩ টাকা/মাস)",
      popular: true,
      ctaText: language === "en" ? "Claim 58% Discount" : "৫৮% ডিসকাউন্টে সাবস্ক্রাইব করুন",
      features: [
        language === "en" ? "All Essential Plan Features Included" : "এসেনশিয়াল প্ল্যানের সব ফিচার",
        language === "en" ? "Massive 58% Annual Discount" : "এককালীন ১৪,০০০ টাকা সরাসরি সেভিং",
        language === "en" ? "Priority 24/7 VIP Phone Support" : "২৪/৭ ভিআইপি প্রায়োরিটি সাপোর্ট",
        language === "en" ? "Patient Android App Sync" : "পেশেন্ট অ্যান্ড্রয়েড অ্যাপ কানেকশন",
        language === "en" ? "Bulk SMS Credits Bundle" : "বাল্ক এসএমএস ক্রেডিট বান্ডেল",
        language === "en" ? "Staff/Assistant Multi-login" : "সহকারী ও রিসেপশন স্টাফ লগইন",
        language === "en" ? "Free Onboarding & Data Migration" : "ফ্রি অনবোর্ডিং ও ডেটা সেটআপ সহায়তা",
      ],
    },
    {
      id: "hospital",
      name: language === "en" ? "Hospital / Diagnostic" : "হাসপাতাল ও ডায়াগনস্টিক",
      badge: language === "en" ? "Multi-Doctor Enterprise" : "মাল্টি-স্পেশালিটি",
      desc:
        language === "en"
          ? "Built for clinics, polyclinics, and diagnostic centers with multi-doctor setups."
          : "পলিক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টারের সেন্ট্রাল ম্যানেজমেন্ট।",
      priceMonthly: "Custom",
      priceYearly: "Custom",
      period: language === "en" ? "Tailored to your facility" : "আপনার প্রতিষ্ঠানের চাহিদা অনুযায়ী",
      popular: false,
      ctaText: language === "en" ? "Contact Hospital Sales" : "সেলস টিমের সাথে কথা বলুন",
      features: [
        language === "en" ? "Unlimited Doctors & Chambers" : "যত খুশি তত ডাক্তার যুক্ত করার সুবিধা",
        language === "en" ? "Role-Based Access (Admin/Doctor/Staff)" : "ভূমিকা ভিত্তিক পারমিশন ও স্টাফ একাউন্ট",
        language === "en" ? "Centralized Diagnostic Document Hub" : "সেন্ট্রাল ডায়াগনস্টিক ও ল্যাব রিপোর্ট হাব",
        language === "en" ? "Multi-Chamber Queue & Token Display" : "টোকেন ও ডিজিটাল ডিসপ্লে সিস্টেম",
        language === "en" ? "Custom Billing & Revenue Analytics" : "কাস্টম বিলিং ও আয়-ব্যয় অ্যানালিটিক্স",
        language === "en" ? "Dedicated Account Manager & On-Site Setup" : "অন-সাইট সেটআপ ও ডেডিকেটেড ম্যানেজার",
      ],
    },
  ];

  const handlePlanClick = (planTitle: string) => {
    if (onSelectPlan) {
      onSelectPlan(planTitle);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === "en" ? "Transparent BDT Pricing" : "স্বচ্ছ দেশীয় মূল্য তালিকা"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {language === "en"
              ? "Simple, Affordable Plans with Zero Hidden Fees"
              : "আপনার চেম্বার ও ক্লিনিকের সাইজ অনুযায়ী সেরা প্ল্যানটি বেছে নিন"}
          </h2>
          <p className="text-base text-slate-600">
            {language === "en"
              ? "Start with a risk-free 14-day trial. Upgrade or switch anytime with full data ownership."
              : "১৪ দিনের ফ্রি ট্রায়াল দিয়ে শুরু করুন। কোনো কার্ড বা অগ্রিম চার্জ নেই।"}
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-200/80 rounded-xl border border-slate-300/80">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {language === "en" ? "Monthly Billing" : "মাসিক বিলিং"}
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                billingCycle === "yearly"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>{language === "en" ? "Yearly Advanced (Best Value)" : "বাৎসরিক অগ্রিম"}</span>
              <span className="text-[10px] bg-emerald-800 text-emerald-100 px-1.5 py-0.5 rounded-full font-bold">
                {language === "en" ? "Save 58%" : "৫৮% সাশ্রয়"}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.popular;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? "bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-950/10 ring-4 ring-emerald-500/10"
                    : "bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300"
                }`}
              >
                {/* Popular Pill */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                    {!isFeatured && (
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mb-6 min-h-[36px]">{plan.desc}</p>

                  {/* Price Display */}
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    {plan.oldPrice && (
                      <div className="text-xs text-slate-400 line-through font-semibold mb-0.5">
                        {plan.oldPrice} BDT
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                        {plan.priceYearly === "Custom"
                          ? language === "en"
                            ? "Custom"
                            : "কাস্টম"
                          : `${plan.priceYearly}`}
                      </span>
                      {plan.priceYearly !== "Custom" && (
                        <span className="text-sm font-bold text-slate-600">BDT</span>
                      )}
                    </div>
                    <div className="text-xs text-emerald-700 font-medium mt-1">{plan.period}</div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {language === "en" ? "What's Included:" : "প্ল্যানের সুবিধাসমূহ:"}
                    </p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  type="button"
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                    isFeatured
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {language === "en"
                  ? "100% Data Confidentiality & BMDC Record Compliance"
                  : "১০০% রোগীর তথ্যের গোপনীয়তা ও বিএমডিসি নিয়মাবলি নিশ্চয়তা"}
              </h4>
              <p className="text-xs text-slate-500">
                {language === "en"
                  ? "Your patient records belong exclusively to you. Daily automated encrypted backups and easy export anytime."
                  : "আপনার রোগীর সব তথ্য সম্পূর্ণ আপনার নিয়ন্ত্রণে। এনক্রিপ্টেড ব্যাকআপ এবং যেকোনো সময় ফাইল এক্সপোর্টের সুবিধা।"}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200 shrink-0"
          >
            {language === "en" ? "Questions? Talk to Sales" : "যেকোনো প্রশ্নে কথা বলুন"}
          </a>
        </div>
      </div>
    </section>
  );
}
