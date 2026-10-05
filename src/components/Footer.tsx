"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Globe,
  Download,
} from "lucide-react";

interface FooterProps {
  language: "en" | "bn";
}

export default function Footer({ language }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Box */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 mb-16 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-widest">
              {language === "en" ? "Medical Technology Dispatch" : "আপডেট থাকুন"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">
              {language === "en"
                ? "Stay Updated with SJ EMR Product Innovations"
                : "এস জে ইএমআরের নতুন ফিচার ও টিউটোরিয়াল পান"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {language === "en"
                ? "Get the latest clinical feature releases, doctor success stories, and video tutorials directly in your inbox."
                : "নতুন ড্রাগ ডেটাবেস আপডেট, ভিডিও টিউটোরিয়াল এবং সফল ডাক্তারদের কেস স্টাডি সরাসরি আপনার ইমেইলে পান।"}
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-5 py-3 rounded-xl text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>
                  {language === "en"
                    ? "Thank you for subscribing! Updates will be sent shortly."
                    : "ধন্যবাদ! নিয়মিত আপডেট আপনার ইমেইলে পাঠানো হবে।"}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-96">
                <input
                  type="email"
                  required
                  placeholder={language === "en" ? "Enter your email address" : "আপনার ইমেইল অ্যাড্রেস"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-600 focus:bg-white flex-1 transition-all"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === "en" ? "Subscribe" : "সাবস্ক্রাইব"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-10 w-36">
              <Image
                src="/assets/sj-emr-logo.svg"
                alt="SJ EMR Logo"
                fill
                sizes="180px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === "en"
                ? "SJ EMR is Bangladesh's premier web and mobile EMR platform engineered by SJ Innovation LLC. Designed to empower doctors, clinics, and hospitals with rapid digital prescriptions, seamless telemedicine, and secure patient data management."
                : "এস জে ইএমআর বাংলাদেশের শীর্ষস্থানীয় ইএমআর ও টেলিমেডিসিন সফটওয়্যার, যা এস জে ইনোভেশন এলএলসি দ্বারা নির্মিত। চিকিৎসক ও ক্লিনিকের জন্য দ্রুততম প্রেসক্রিপশন ও শতভাগ নিরাপদ ডেটা নিশ্চিত করে।"}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-flex items-center gap-1.5 shadow-2xs">
                <Image
                  src="/assets/bmdc-logo.svg"
                  alt="BMDC Logo"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 object-contain"
                />
                {language === "en" ? "BMDC Standard Compliant" : "বিএমডিসি স্ট্যান্ডার্ড মানসম্মত"}
              </span>
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-flex items-center gap-1 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {language === "en" ? "BASIS Member #1732" : "বেসিস সদস্য #১৭৩২"}
              </span>
              <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200 shadow-2xs">
                {language === "en" ? "SCCI Member" : "এসসিসিআই সদস্য"}
              </span>
            </div>

            {/* Official Social Media Links */}
            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                {language === "en" ? "Connect With Us" : "আমাদের সাথে যুক্ত থাকুন"}
              </div>
              <div className="flex items-center gap-4 sm:gap-5">
                <a
                  href="https://www.facebook.com/sjemrbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SJ EMR Facebook"
                  title="Follow SJ EMR on Facebook"
                  className="text-slate-500 hover:text-[#1877F2] hover:scale-110 transition-all duration-200"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/sjemrbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SJ EMR Instagram"
                  title="Follow SJ EMR on Instagram"
                  className="text-slate-500 hover:text-[#E4405F] hover:scale-110 transition-all duration-200"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/sj-emr-bd/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SJ EMR LinkedIn"
                  title="Follow SJ EMR on LinkedIn"
                  className="text-slate-500 hover:text-[#0A66C2] hover:scale-110 transition-all duration-200"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC6TJ6W1BinAd2oVa358Vc4w"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SJ EMR YouTube"
                  title="Subscribe to SJ EMR on YouTube"
                  className="text-slate-500 hover:text-[#FF0000] hover:scale-110 transition-all duration-200"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {language === "en" ? "Quick Navigation" : "নেভিগেশন"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#workflow" className="hover:text-emerald-700 transition-colors">
                  {language === "en" ? "60s Consultation Workflow" : "৬০ সেকেন্ডের ওয়ার্কফ্লো"}
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-emerald-700 transition-colors">
                  {language === "en" ? "Core Features" : "প্রধান ফিচার"}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-emerald-700 transition-colors">
                  {language === "en" ? "Pricing List (BDT)" : "মূল্য তালিকা (টাকা)"}
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-emerald-700 transition-colors">
                  {language === "en" ? "Doctor Endorsements" : "ডাক্তারদের মতামত"}
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-emerald-700 transition-colors">
                  {language === "en" ? "Health Tech Blog" : "হেলথ টেক ব্লগ"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-emerald-700 transition-colors inline-flex items-center gap-1"
                >
                  <Download className="w-3 h-3 text-emerald-600" />
                  <span>{language === "en" ? "Download Brochure" : "ব্রোশিওর ডাউনলোড"}</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://emr.com.bd/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors"
                >
                  {language === "en" ? "Doctor Login Portal" : "ডাক্তার লগইন পোর্টাল"}
                </a>
              </li>
            </ul>
          </div>

          {/* Dhaka Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === "en" ? "Dhaka Office (Corporate)" : "ঢাকা অফিস (কর্পোরেট)"}</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              House No – 281/A (Level – 1), Road – 19/C, New DOHS, Mohakhali, Dhaka-1206, Bangladesh
            </p>
            <div className="space-y-1.5 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <a href="tel:+8809611677336" className="hover:text-emerald-700">
                  +880 9611-677336
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <a href="mailto:info@sjinnovation.com" className="hover:text-emerald-700">
                  info@sjinnovation.com
                </a>
              </div>
              <div className="text-[11px] text-slate-400">Skype: sjinnovationbd</div>
            </div>
          </div>

          {/* Sylhet Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === "en" ? "Sylhet Regional Office" : "সিলেট আঞ্চলিক অফিস"}</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              AHIL-802, 7th Floor, Al-Hamra Shopping City, Zindabazar, Sylhet-3100, Bangladesh
            </p>
            <div className="space-y-1.5 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <a href="tel:+8801707074577" className="hover:text-emerald-800 font-semibold text-emerald-700">
                  +880 1707-074577 {language === "en" ? "(Hotline)" : "(হটলাইন)"}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <a href="tel:+8809611677335" className="hover:text-emerald-700">
                  +880 9611-677335 {language === "en" ? "(Landline)" : "(ল্যান্ডলাইন)"}
                </a>
              </div>
              <div className="text-[11px] text-slate-400">Skype: SJI Sylhet</div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <span className="text-slate-800 font-semibold">SJ INNOVATION LLC</span>. {language === "en" ? "ALL RIGHTS RESERVED." : "সর্বস্বত্ব সংরক্ষিত।"}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://sjinnovation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700 transition-colors inline-flex items-center gap-1"
            >
              <span>sjinnovation.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-700 transition-colors">
              {language === "en" ? "Privacy Policy" : "প্রাইভেসি পলিসি"}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-700 transition-colors">
              {language === "en" ? "Terms of Service" : "শর্তাবলি"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
