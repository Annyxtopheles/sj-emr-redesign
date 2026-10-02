"use client";

import { useState } from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  language: "en" | "bn";
  onSelectPlan?: (planName: string) => void;
}

export default function PricingSection({ language, onSelectPlan }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      id: "trial",
      tag: language === "en" ? "14-Day Free Evaluation" : "১৪ দিনের ফ্রি ট্রায়াল",
      name: language === "en" ? "Free Trial" : "ফ্রি ট্রায়াল",
      desc:
        language === "en"
          ? "Test the complete software in your daily chamber with zero commitment."
          : "কোনো অগ্রিম পেমেন্ট ছাড়াই সম্পূর্ণ সফটওয়্যার চেম্বারে যাচাই করে দেখুন।",
      priceMonthly: "0",
      periodMonthly: language === "en" ? "Free for 14 days" : "১৪ দিনের জন্য সম্পূর্ণ ফ্রি",
      priceYearly: "0",
      periodYearly: language === "en" ? "Free for 14 days" : "১৪ দিনের জন্য সম্পূর্ণ ফ্রি",
      oldPrice: null,
      popular: false,
      ctaText: language === "en" ? "Start Free Trial" : "ফ্রি ট্রায়াল শুরু করুন",
      features: [
        language === "en" ? "Full e-prescription & BD drug database" : "সম্পূর্ণ ই-প্রেসক্রিপশন ও ড্রাগ ডেটাবেস",
        language === "en" ? "Lifetime patient history & diagnostics" : "আজীবন রোগীর মেডিকেল হিস্ট্রি ও রিপোর্ট",
        language === "en" ? "Chamber schedule & appointment booking" : "চেম্বার শিডিউলিং ও সিরিয়াল বুকিং",
        language === "en" ? "Pad print formatting & trial SMS" : "চেম্বার প্যাড প্রিন্টিং ও ট্রায়াল এসএমএস",
      ],
    },
    {
      id: "essential",
      tag: language === "en" ? "Solo Doctor Practice" : "একক ডাক্তারের চেম্বার",
      name: language === "en" ? "Essential Plan" : "এসেনশিয়াল প্ল্যান",
      desc:
        language === "en"
          ? "Standard month-to-month subscription for individual clinical practices."
          : "স্বতন্ত্র চিকিৎসকদের জন্য সুবিধাজনক মাসিক সাবস্ক্রিপশন প্ল্যান।",
      priceMonthly: "2,000",
      periodMonthly: language === "en" ? "BDT / month" : "টাকা / মাস",
      priceYearly: "24,000",
      periodYearly: language === "en" ? "BDT / year (2,000 BDT/mo)" : "টাকা / বছর (২,০০০ টাকা/মাস)",
      oldPrice: null,
      popular: false,
      ctaText: language === "en" ? "Buy Now" : "এখনই কিনুন",
      features: [
        language === "en" ? "Unlimited patients & prescriptions" : "আনলিমিটেড রোগী ও প্রেসক্রিপশন তৈরি",
        language === "en" ? "Automated Zoom telemedicine via SMS" : "স্বয়ংক্রিয় জুম টেলিমেডিসিন ও এসএমএস",
        language === "en" ? "Daily & weekly OPD summary analytics" : "দৈনিক ও সাপ্তাহিক প্র্যাকটিস সামারি",
        language === "en" ? "WhatsApp & direct phone support" : "হোয়াটসঅ্যাপ ও ফোন সাপোর্ট সহায়তা",
      ],
    },
    {
      id: "essential-plus",
      tag: language === "en" ? "Save 58% • Annual Special" : "৫৮% সাশ্রয় • বাৎসরিক অফার",
      name: language === "en" ? "Essential Plus" : "এসেনশিয়াল প্লাস",
      desc:
        language === "en"
          ? "Pay annually and save 14,000 BDT with priority support and patient sync."
          : "বাৎসরিক এককালীন পেমেন্টে ১৪,০০০ টাকা সরাসরি সাশ্রয় ও বাড়তি সুবিধা।",
      priceMonthly: "833",
      periodMonthly:
        language === "en"
          ? "BDT / month (Billed 10,000 BDT/yr)"
          : "টাকা / মাস (বাৎসরিক ১০,০০০ টাকায়)",
      priceYearly: "10,000",
      periodYearly:
        language === "en"
          ? "BDT / year (Equivalent to ~833 BDT/mo)"
          : "টাকা / বছর (মাত্র ~৮৩৩ টাকা/মাস)",
      oldPrice: "24,000",
      popular: true,
      ctaText: language === "en" ? "Buy Now" : "এখনই কিনুন",
      features: [
        language === "en" ? "All Essential features included" : "এসেনশিয়াল প্ল্যানের সকল সুবিধা অন্তর্ভুক্ত",
        language === "en" ? "Annual saving of 14,000 BDT" : "এককালীন ১৪,০০০ টাকা সরাসরি সাশ্রয়",
        language === "en" ? "Android patient mobile app sync" : "পেশেন্ট অ্যান্ড্রয়েড মোবাইল অ্যাপ সিঙ্ক",
        language === "en" ? "Free assisted onboarding & setup" : "ফ্রি অনবোর্ডিং ও ডেটা সেটআপ সহায়তা",
      ],
    },
    {
      id: "hospital",
      tag: language === "en" ? "Clinic & Polyclinic" : "হাসপাতাল ও ক্লিনিক",
      name: language === "en" ? "Hospital Suite" : "হাসপাতাল স্যুট",
      desc:
        language === "en"
          ? "Multi-doctor setup with department queues and central reporting."
          : "একাধিক ডাক্তার, রিসেপশন ও সেন্ট্রাল ল্যাব ম্যানেজমেন্ট সমাধান।",
      priceMonthly: "Custom",
      periodMonthly: language === "en" ? "Tailored to facility scale" : "প্রতিষ্ঠানের চাহিদা অনুযায়ী নির্ধারিত",
      priceYearly: "Custom",
      periodYearly: language === "en" ? "Tailored to facility scale" : "প্রতিষ্ঠানের চাহিদা অনুযায়ী নির্ধারিত",
      oldPrice: null,
      popular: false,
      ctaText: language === "en" ? "Contact Sales" : "যোগাযোগ করুন",
      features: [
        language === "en" ? "Multi-doctor accounts & chamber routing" : "মাল্টি-ডাক্তার একাউন্ট ও ডিপার্টমেন্ট",
        language === "en" ? "Centralized lab & diagnostic hub" : "সেন্ট্রাল ডায়াগনস্টিক ও ল্যাব রিপোর্ট হাব",
        language === "en" ? "Receptionist queue & token display" : "রিসেপশন টোকেন ও সিরিয়াল ডিসপ্লে",
        language === "en" ? "Dedicated account manager & on-site setup" : "অন-সাইট সেটআপ ও ডেডিকেটেড ম্যানেজার",
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            {language === "en"
              ? "Simple, Predictable Plans with Zero Hidden Fees"
              : "চেম্বার ও ক্লিনিকের প্রয়োজন অনুযায়ী সহজ ও স্পষ্ট প্ল্যান"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 text-pretty">
            {language === "en"
              ? "Start with a risk-free 14-day trial. Upgrade or cancel anytime with complete data ownership."
              : "১৪ দিনের ফ্রি ট্রায়াল দিয়ে শুরু করুন। কোনো অগ্রিম পেমেন্ট বা হিডেন চার্জ নেই।"}
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-200/80 rounded-xl border border-slate-300">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {language === "en" ? "Monthly" : "মাসিক বিলিং"}
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>{language === "en" ? "Annual" : "বাৎসরিক বিলিং"}</span>
              <span className="text-[10px] bg-emerald-900 text-emerald-100 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                {language === "en" ? "Save 58%" : "৫৮% সাশ্রয়"}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.popular;
            const currentPrice =
              billingCycle === "yearly" ? plan.priceYearly : plan.priceMonthly;
            const currentPeriod =
              billingCycle === "yearly" ? plan.periodYearly : plan.periodMonthly;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all bg-white ${
                  isFeatured
                    ? "border-2 border-emerald-500 shadow-sm"
                    : "border border-slate-200/90 shadow-2xs hover:border-slate-300"
                }`}
              >
                <div>
                  {/* Plan Name */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{plan.name}</h3>

                  {/* Plan Description with text-balance */}
                  <p className="text-xs text-slate-500 mb-5 min-h-[34px] leading-relaxed text-balance">
                    {plan.desc}
                  </p>

                  {/* Price Block */}
                  <div className="mb-5 pb-5 border-b border-slate-100">
                    {billingCycle === "yearly" && plan.oldPrice && (
                      <div className="text-xs text-slate-400 line-through font-semibold mb-0.5">
                        {plan.oldPrice} {language === "en" ? "BDT" : "টাকা"}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-slate-900">
                        {currentPrice === "Custom"
                          ? language === "en"
                            ? "Custom"
                            : "কাস্টম"
                          : currentPrice}
                      </span>
                      {currentPrice !== "Custom" && (
                        <span className="text-xs font-bold text-slate-500">
                          {language === "en" ? "BDT" : "টাকা"}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-emerald-700 font-semibold mt-1">
                      {currentPeriod}
                    </div>
                  </div>

                  {/* Streamlined 4-Item Feature Checklist */}
                  <div className="space-y-2.5 mb-7">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug text-pretty">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                    isFeatured
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
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

        {/* Minimalist Trust & Guarantee Strip */}
        <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {language === "en"
                  ? "100% Data Confidentiality & BMDC Record Compliance"
                  : "১০০% রোগীর তথ্যের গোপনীয়তা ও বিএমডিসি নির্দেশিকা নিশ্চয়তা"}
              </h4>
              <p className="text-xs text-slate-500">
                {language === "en"
                  ? "Your clinical data is encrypted and strictly private. Instant export anytime."
                  : "আপনার রোগীর সব তথ্য সম্পূর্ণ এনক্রিপ্টেড এবং যেকোনো সময় এক্সপোর্টযোগ্য।"}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-lg border border-emerald-200 shrink-0"
          >
            {language === "en" ? "Questions? Talk to Sales" : "যেকোনো প্রশ্নে কথা বলুন"}
          </a>
        </div>
      </div>
    </section>
  );
}
