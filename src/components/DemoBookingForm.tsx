"use client";

import { useState } from "react";
import {
  Calendar,
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
    "General Medicine",
    "Cardiology",
    "Orthopedic Surgery",
    "Gynecology & Obstetrics",
    "Dermatology & Venereology",
    "Pediatrics / Child Health",
    "ENT (Otolaryngology)",
    "Ophthalmology",
    "Gastroenterology",
    "Dental Surgery",
    "Other Specialty",
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
      <span id="demo" className="scroll-mt-24 absolute top-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Value Prop & Contact Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-300 text-xs font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === "en" ? "Fast Doctor Onboarding" : "সহজেই শুরু করুন"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 text-balance">
              {language === "en"
                ? "See SJ EMR in Action with a Tailored Walkthrough"
                : "আপনার চেম্বারের উপযোগী লাইভ ডেমো দেখে নিন"}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {language === "en"
                ? "Schedule a personalized 15-minute live Zoom session. We will demonstrate the rapid e-prescription generator, the Bangladeshi drug directory, and doctor chamber workflows tailored to your specific medical specialty."
                : "মাত্র ১৫ মিনিটের লাইভ জুম সেশনে দেখে নিন কীভাবে ড্রাগ ডেটাবেস, ৬০ সেকেন্ডের প্রেসক্রিপশন ও টেলিমেডিসিন আপনার চেম্বারের কাজকে সহজ করে তুলবে।"}
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">
                    {language === "en" ? "Live Interactive Zoom Demo" : "লাইভ জুম স্ক্রিন-শেয়ারিং"}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {language === "en"
                      ? "Interactive Q&A with our clinical technology team in Dhaka & Sylhet."
                      : "আমাদের বিশেষজ্ঞ টিমের সাথে সরাসরি প্রশ্নোত্তরের সুযোগ।"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">
                    {language === "en" ? "BMDC Doctor Verification" : "বিএমডিসি রেজিস্টার্ড ডাক্তারদের অগ্রাধিকার"}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {language === "en"
                      ? "Instant trial activation & dedicated template configuration."
                      : "তাৎক্ষণিক অ্যাকাউন্ট অ্যাক্টিভেশন ও চেম্বার প্যাড কনফিগারেশন।"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">
                    {language === "en" ? "2-Hour Response Time" : "২ ঘণ্টার মধ্যে নিশ্চিত যোগাযোগ"}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {language === "en"
                      ? "Our technical specialists reach out promptly during chamber hours."
                      : "আমাদের টিম দ্রুত ফোন বা হোয়াটসঅ্যাপে আপনার সাথে শিডিউল সমন্বয় করবে।"}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Helpline Badge */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
              <span className="text-slate-400">
                {language === "en" ? "Prefer direct phone consultation?" : "সরাসরি ফোনে কথা বলতে চান?"}
              </span>
              <div className="mt-1 flex items-center gap-3">
                <a
                  href="tel:+8801707074577"
                  className="font-bold text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +880 1707-074577
                </a>
                <span className="text-slate-500">|</span>
                <a
                  href="mailto:info@sjinnovation.com"
                  className="text-slate-300 hover:text-white"
                >
                  info@sjinnovation.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-9 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {language === "en" ? "Demo Request Received!" : "ডেমো রিকোয়েস্ট সফল হয়েছে!"}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
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
                  <div className="border-b border-slate-700 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-white">
                      {language === "en" ? "Schedule Your Personalized Demo" : "আপনার ফ্রি লাইভ ডেমো ফর্ম"}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {language === "en"
                        ? "Fill in your chamber details below to get started immediately."
                        : "নিচের তথ্যগুলো পূরণ করে সরাসরি ডেমো বুক করুন।"}
                    </p>
                  </div>

                  {/* Doctor Verification Radio Switch */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {language === "en" ? "User Profile / Verification *" : "আপনার পরিচিতি *"}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: "doctor" })}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                          formData.userType === "doctor"
                            ? "bg-emerald-600 border-emerald-500 text-white shadow-xs"
                            : "bg-slate-700/60 border-slate-600 text-slate-300 hover:bg-slate-700"
                        }`}
                      >
                        <Stethoscope className="w-3.5 h-3.5" />
                        <span>{language === "en" ? "BMDC Doctor" : "বিএমডিসি ডাক্তার"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: "clinic_admin" })}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                          formData.userType === "clinic_admin"
                            ? "bg-emerald-600 border-emerald-500 text-white shadow-xs"
                            : "bg-slate-700/60 border-slate-600 text-slate-300 hover:bg-slate-700"
                        }`}
                      >
                        <Building className="w-3.5 h-3.5" />
                        <span>{language === "en" ? "Clinic / Hospital" : "ক্লিনিক / হাসপাতাল"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: "patient" })}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all col-span-2 sm:col-span-1 ${
                          formData.userType === "patient"
                            ? "bg-emerald-600 border-emerald-500 text-white shadow-xs"
                            : "bg-slate-700/60 border-slate-600 text-slate-300 hover:bg-slate-700"
                        }`}
                      >
                        <User className="w-3.5 h-3.5" />
                        <span>{language === "en" ? "Patient / Other" : "রোগী / অন্যান্য"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
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
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {language === "en" ? "Mobile Phone *" : "মোবাইল নম্বর *"}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="017XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Email & Chamber/Clinic Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {language === "en" ? "Email Address *" : "ইমেইল অ্যাড্রেস *"}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="doctor@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
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
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Specialization & BMDC Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {language === "en" ? "Medical Specialization *" : "স্পেশালাইজেশন *"}
                      </label>
                      <select
                        value={formData.specialization}
                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      >
                        <option value="">{language === "en" ? "Select Specialization" : "বাছাই করুন"}</option>
                        {specializations.map((spec) => (
                          <option key={spec} value={spec}>
                            {spec}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
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
                          formData.userType === "doctor" ? "e.g. A-12345" : "Managing Director / Admin"
                        }
                        value={formData.bmdcNumber}
                        onChange={(e) => setFormData({ ...formData, bmdcNumber: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Demo Format & Plan of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {language === "en" ? "Preferred Demo Format *" : "ডেমো দেখার মাধ্যম *"}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, demoType: "zoom" })}
                          className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.demoType === "zoom"
                              ? "bg-emerald-600 border-emerald-500 text-white shadow-xs font-semibold"
                              : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
                          }`}
                        >
                          {language === "en" ? "Live Zoom (1-on-1)" : "লাইভ জুম"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, demoType: "recorded" })}
                          className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.demoType === "recorded"
                              ? "bg-emerald-600 border-emerald-500 text-white shadow-xs font-semibold"
                              : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
                          }`}
                        >
                          {language === "en" ? "Recorded Video Tour" : "রেকর্ডেড ভিডিও"}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {language === "en" ? "Plan You Are Interested In *" : "আগ্রহী প্ল্যান *"}
                      </label>
                      <select
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      >
                        <option value="Free (14 Days Trial)">
                          Free 14 Days Trial (0 BDT)
                        </option>
                        <option value="Essential (2000 BDT/Month)">
                          Essential (2,000 BDT/Month)
                        </option>
                        <option value="Essential Plus (10000 BDT/Year)">
                          Essential Plus (10,000 BDT/Year - Save 58%)
                        </option>
                        <option value="Hospital/Diagnostic Center">
                          Hospital / Diagnostic Center (Custom)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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

                  <p className="text-[11px] text-center text-slate-400 pt-1 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
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
