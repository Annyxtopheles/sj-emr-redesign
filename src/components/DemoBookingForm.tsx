"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Video,
  CheckCircle2,
  ShieldCheck,
  Send,
  Building,
  User,
  Phone,
  Mail,
  Stethoscope,
  Clock,
  Sparkles,
} from "lucide-react";

interface DemoBookingFormProps {
  language: "en" | "bn";
  selectedPlan?: string;
}

export default function DemoBookingForm({ language, selectedPlan }: DemoBookingFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    chamberName: "",
    specialization: "",
    userType: "doctor", // 'doctor' | 'clinic_admin' | 'patient'
    bmdcNumber: "",
    demoType: "zoom", // 'zoom' | 'recorded'
    plan: selectedPlan || "Essential Plus (10000 BDT/Year)",
  });

  useEffect(() => {
    if (selectedPlan) {
      if (
        selectedPlan.toLowerCase().includes("trial") ||
        selectedPlan.toLowerCase().includes("free") ||
        selectedPlan.toLowerCase().includes("ট্রায়াল")
      ) {
        setFormData((prev) => ({ ...prev, plan: "Free (60 Days Trial)" }));
      } else {
        setFormData((prev) => ({ ...prev, plan: selectedPlan }));
      }
    }
  }, [selectedPlan]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instant CRM processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const specializations = [
    { en: "General Medicine", bn: "জেনারেল মেডিসিন" },
    { en: "Cardiology", bn: "কার্ডিওলজি (হৃদরোগ)" },
    { en: "Orthopedic Surgery", bn: "অর্থোপেডিক সার্জারি" },
    { en: "Gynecology & Obstetrics", bn: "গাইনি অ্যান্ড অবস্টেট্রিক্স" },
    { en: "Dermatology & Venereology", bn: "ডার্মাটোলজি (চর্ম ও যৌন)" },
    { en: "Pediatrics / Child Health", bn: "শিশু স্বাস্থ্য ও পেডিয়াট্রিক্স" },
    { en: "ENT (Otolaryngology)", bn: "ইএনটি (নাক, কান, গলা)" },
    { en: "Ophthalmology", bn: "চক্ষু রোগ (অপথ্যালমোলজি)" },
    { en: "Gastroenterology", bn: "গ্যাস্ট্রোএন্টারোলজি" },
    { en: "Dental Surgery", bn: "ডেন্টাল সার্জারি" },
    { en: "Other Specialty", bn: "অন্যান্য স্পেশালিটি" },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-20 relative overflow-hidden">
      <span id="demo" className="scroll-mt-24 absolute top-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Prop & Contact Info */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 text-balance">
              {language === "en"
                ? "See SJ EMR in Action with a Tailored Walkthrough"
                : "আপনার চেম্বারের উপযোগী লাইভ ডেমো দেখে নিন"}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              {language === "en"
                ? "Schedule a personalized 15-minute live Zoom session. We will demonstrate the rapid e-prescription generator, the Bangladeshi drug directory, and doctor chamber workflows tailored to your specific medical specialty."
                : "মাত্র ১৫ মিনিটের লাইভ জুম সেশনে দেখে নিন কীভাবে ড্রাগ ডেটাবেস, ৬০ সেকেন্ডের প্রেসক্রিপশন ও টেলিমেডিসিন আপনার চেম্বারের কাজকে সহজ করে তুলবে।"}
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-2 -mx-2 rounded-xl transition-all duration-200 hover:bg-white/80 hover:shadow-2xs group cursor-default">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white group-hover:scale-105 flex items-center justify-center text-emerald-600 shrink-0 transition-all duration-200 shadow-2xs">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {language === "en" ? "Live Interactive Zoom Demo" : "লাইভ জুম স্ক্রিন-শেয়ারিং"}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {language === "en"
                      ? "Interactive Q&A with our clinical technology team in Dhaka & Sylhet."
                      : "আমাদের বিশেষজ্ঞ টিমের সাথে সরাসরি প্রশ্নোত্তরের সুযোগ।"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 -mx-2 rounded-xl transition-all duration-200 hover:bg-white/80 hover:shadow-2xs group cursor-default">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:scale-105 flex items-center justify-center shrink-0 p-1 transition-all duration-200 shadow-2xs relative">
                  <Image
                    src="/assets/BMDC Logo 1.svg"
                    alt="BMDC"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain group-hover:opacity-0 transition-opacity duration-200"
                  />
                  <Image
                    src="/assets/BMDC Logo 2.svg"
                    alt="BMDC"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute inset-0 m-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {language === "en" ? "BMDC Doctor Verification" : "বিএমডিসি রেজিস্টার্ড ডাক্তারদের অগ্রাধিকার"}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {language === "en"
                      ? "Instant trial activation & dedicated template configuration."
                      : "তাৎক্ষণিক অ্যাকাউন্ট অ্যাক্টিভেশন ও চেম্বার প্যাড কনফিগারেশন।"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 -mx-2 rounded-xl transition-all duration-200 hover:bg-white/80 hover:shadow-2xs group cursor-default">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white group-hover:scale-105 flex items-center justify-center text-emerald-600 shrink-0 transition-all duration-200 shadow-2xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {language === "en" ? "2-Hour Response Time" : "২ ঘণ্টার মধ্যে নিশ্চিত যোগাযোগ"}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {language === "en"
                      ? "Our technical specialists reach out promptly during chamber hours."
                      : "আমাদের টিম দ্রুত ফোন বা হোয়াটসঅ্যাপে আপনার সাথে শিডিউল সমন্বয় করবে।"}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Helpline Badge */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md hover:ring-1 hover:ring-emerald-500/20 hover:border-l-4 hover:border-l-emerald-500 hover:-translate-y-0.5 transition-all duration-200 text-xs group cursor-default">
              <span className="text-slate-500 group-hover:text-slate-700 transition-colors">
                {language === "en" ? "Prefer direct phone consultation?" : "সরাসরি ফোনে কথা বলতে চান?"}
              </span>
              <div className="mt-1 flex items-center gap-3">
                <a
                  href="tel:+8801707074577"
                  className="font-bold text-emerald-700 hover:text-emerald-800 text-sm flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +880 1707-074577
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href="mailto:info@sjinnovation.com"
                  className="text-slate-600 hover:text-slate-900 font-medium"
                >
                  info@sjinnovation.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-xl">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {language === "en" ? "Demo Request Received!" : "ডেমো রিকোয়েস্ট সফল হয়েছে!"}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    {language === "en"
                      ? `Thank you, ${formData.fullName || "Doctor"}! Our medical tech onboarding consultant will contact you via ${formData.phone || "phone"} within 2 hours to confirm your Zoom demo.`
                      : `ধন্যবাদ ${formData.fullName || "ডাঃ"}! আমাদের বিশেষজ্ঞ টিম আগামী ২ ঘণ্টার মধ্যে ${formData.phone || "আপনার নম্বরে"} যোগাযোগ করে জুম ডেমো কনফার্ম করবে।`}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    {language === "en" ? "Submit Another Request" : "অন্য কোনো রিকোয়েস্ট পাঠান"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-slate-900">
                      {language === "en" ? "Schedule Your Personalized Demo" : "আপনার ফ্রি লাইভ ডেমো ফর্ম"}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {language === "en"
                        ? "Fill in your chamber details below to get started immediately."
                        : "নিচের তথ্যগুলো পূরণ করে সরাসরি ডেমো বুক করুন।"}
                    </p>
                  </div>

                  {/* Doctor Verification Radio Switch */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      {language === "en" ? "User Profile / Verification *" : "আপনার পরিচিতি *"}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: "doctor" })}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          formData.userType === "doctor"
                            ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-500/20 font-bold shadow-2xs"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <Image
                          src="/assets/BMDC Logo 2.svg"
                          alt="BMDC"
                          width={15}
                          height={15}
                          className="w-3.5 h-3.5 object-contain"
                        />
                        <span>{language === "en" ? "BMDC Doctor" : "বিএমডিসি ডাক্তার"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: "clinic_admin" })}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          formData.userType === "clinic_admin"
                            ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-500/20 font-bold shadow-2xs"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <Building className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{language === "en" ? "Clinic / Hospital" : "ক্লিনিক / হাসপাতাল"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: "patient" })}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all col-span-2 sm:col-span-1 cursor-pointer ${
                          formData.userType === "patient"
                            ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-500/20 font-bold shadow-2xs"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <User className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{language === "en" ? "Patient / Other" : "রোগী / অন্যান্য"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {language === "en" ? "Full Name *" : "আপনার পূর্ণ নাম *"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={
                          formData.userType === "doctor"
                            ? language === "en"
                              ? "e.g. Dr. Ahmed Khan"
                              : "যেমন: ডাঃ আহমেদ খান"
                            : language === "en"
                            ? "Your Name"
                            : "আপনার নাম"
                        }
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {language === "en" ? "Mobile Phone *" : "মোবাইল নম্বর *"}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="017XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Chamber/Clinic Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {language === "en" ? "Email Address *" : "ইমেইল অ্যাড্রেস *"}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="doctor@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {language === "en" ? "Chamber or Clinic Name *" : "চেম্বার বা ক্লিনিকের নাম *"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={
                          language === "en" ? "e.g. Care Skin Clinic / LabAid" : "যেমন: কেয়ার ক্লিনিক"
                        }
                        value={formData.chamberName}
                        onChange={(e) => setFormData({ ...formData, chamberName: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Specialization & BMDC Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {language === "en" ? "Medical Specialization *" : "মেডিকেল স্পেশালাইজেশন *"}
                      </label>
                      <select
                        value={formData.specialization}
                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                      >
                        <option value="">{language === "en" ? "Select Specialization" : "স্পেশালাইজেশন বাছাই করুন"}</option>
                        {specializations.map((spec) => (
                          <option key={spec.en} value={spec.en}>
                            {language === "en" ? spec.en : spec.bn}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {formData.userType === "doctor"
                          ? language === "en"
                            ? "BMDC Registration Number *"
                            : "বিএমডিসি রেজিস্ট্রেশন নম্বর *"
                          : language === "en"
                          ? "Designation / Role"
                          : "পদবি"}
                      </label>
                      <input
                        type="text"
                        required={formData.userType === "doctor"}
                        placeholder={
                          formData.userType === "doctor"
                            ? "e.g. A-12345"
                            : language === "en"
                            ? "Managing Director / Admin"
                            : "ম্যানেজিং ডিরেক্টর / অ্যাডমিন"
                        }
                        value={formData.bmdcNumber}
                        onChange={(e) => setFormData({ ...formData, bmdcNumber: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Demo Format & Plan of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {language === "en" ? "Preferred Demo Format *" : "ডেমো দেখার মাধ্যম *"}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, demoType: "zoom" })}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                            formData.demoType === "zoom"
                              ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-500/20 font-bold shadow-2xs"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {language === "en" ? "Live Zoom (1-on-1)" : "লাইভ জুম (১-অন-১)"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, demoType: "recorded" })}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                            formData.demoType === "recorded"
                              ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-500/20 font-bold shadow-2xs"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {language === "en" ? "Recorded Video Tour" : "রেকর্ডেড ভিডিও ট্যুর"}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {language === "en" ? "Plan You Are Interested In *" : "আগ্রহী প্ল্যান *"}
                      </label>
                      <select
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                      >
                        <option value="Free (60 Days Trial)">
                          {language === "en" ? "Free 60 Days Trial (0 BDT - Relaunch Offer)" : "ফ্রি ৬০ দিনের ট্রায়াল (০ টাকা - রিলঞ্চ অফার)"}
                        </option>
                        <option value="Essential (2000 BDT/Month)">
                          {language === "en" ? "Essential (2,000 BDT/Month)" : "এসেনশিয়াল (২,০০০ টাকা/মাস)"}
                        </option>
                        <option value="Essential Plus (10000 BDT/Year)">
                          {language === "en" ? "Essential Plus (10,000 BDT/Year - Save 58%)" : "এসেনশিয়াল প্লাস (১০,০০০ টাকা/বছর - ৫৮% সাশ্রয়)"}
                        </option>
                        <option value="Hospital/Diagnostic Center">
                          {language === "en" ? "Hospital / Diagnostic Center (Custom)" : "হাসপাতাল / ডায়াগনস্টিক সেন্টার (কাস্টম)"}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>{language === "en" ? "Processing..." : "প্রক্রিয়াকরণ হচ্ছে..."}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{language === "en" ? "Confirm Free Demo Booking" : "ফ্রি ডেমো বুকিং নিশ্চিত করুন"}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 pt-1 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>
                      {language === "en"
                        ? "100% Privacy Protected. We respect patient-doctor confidentiality under BMDC guidelines."
                        : "১০০% তথ্যের গোপনীয়তা নিশ্চিত। বিএমডিসি নীতিমালার আওতায় আপনার ডেটা সম্পূর্ণ সুরক্ষিত।"}
                    </span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
