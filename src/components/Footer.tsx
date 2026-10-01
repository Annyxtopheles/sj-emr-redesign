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
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Box */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/60 p-6 sm:p-10 mb-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              {language === "en" ? "Medical Technology Dispatch" : "আপডেট থাকুন"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
              {language === "en"
                ? "Stay Updated with SJ EMR Product Innovations"
                : "এস জে ইএমআরের নতুন ফিচার ও টিউটোরিয়াল পান"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {language === "en"
                ? "Get the latest clinical feature releases, doctor success stories, and video tutorials directly in your inbox."
                : "নতুন ড্রাগ ডেটাবেস আপডেট, ভিডিও টিউটোরিয়াল এবং সফল ডাক্তারদের কেস স্টাডি সরাসরি আপনার ইমেইলে পান।"}
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-900/60 border border-emerald-700 text-emerald-200 px-5 py-3 rounded-xl text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
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
                  className="bg-slate-900 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shrink-0"
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
                src="/assets/logo-white.png"
                alt="SJ EMR White Logo"
                fill
                sizes="180px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === "en"
                ? "SJ EMR is Bangladesh's premier web and mobile EMR platform engineered by SJ Innovation LLC. Designed to empower doctors, clinics, and hospitals with rapid digital prescriptions, seamless telemedicine, and secure patient data management."
                : "এস জে ইএমআর বাংলাদেশের শীর্ষস্থানীয় ইএমআর ও টেলিমেডিসিন সফটওয়্যার, যা এস জে ইনোভেশন এলএলসি দ্বারা নির্মিত। চিকিৎসক ও ক্লিনিকের জন্য দ্রুততম প্রেসক্রিপশন ও শতভাগ নিরাপদ ডেটা নিশ্চিত করে।"}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/60 inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                BASIS Member #1732
              </span>
              <span className="text-[11px] font-semibold text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded border border-teal-800/60">
                SCCI Member
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === "en" ? "Quick Navigation" : "নেভিগেশন"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#why-us" className="hover:text-emerald-400 transition-colors">
                  {language === "en" ? "Why SJ EMR" : "সুবিধাসমূহ"}
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-emerald-400 transition-colors">
                  {language === "en" ? "Core Features" : "প্রধান ফিচার"}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-emerald-400 transition-colors">
                  {language === "en" ? "Pricing List (BDT)" : "মূল্য তালিকা (টাকা)"}
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-emerald-400 transition-colors">
                  {language === "en" ? "Doctor Endorsements" : "ডাক্তারদের মতামত"}
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-emerald-400 transition-colors">
                  {language === "en" ? "Health Tech Blog" : "হেলথ টেক ব্লগ"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <Download className="w-3 h-3 text-emerald-400" />
                  <span>{language === "en" ? "Download Brochure" : "ব্রোশিওর ডাউনলোড"}</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://emr.com.bd/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {language === "en" ? "Doctor Login Portal" : "ডাক্তার লগইন পোর্টাল"}
                </a>
              </li>
            </ul>
          </div>

          {/* Dhaka Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Dhaka Office (Corporate)</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              House No – 281/A (Level – 1), Road – 19/C, New DOHS, Mohakhali, Dhaka-1206, Bangladesh
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:+8809611677336" className="hover:text-white">
                  +880 9611-677336
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href="mailto:info@sjinnovation.com" className="hover:text-white">
                  info@sjinnovation.com
                </a>
              </div>
              <div className="text-[11px] text-slate-500 font-mono">Skype: sjinnovationbd</div>
            </div>
          </div>

          {/* Sylhet Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sylhet Regional Office</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              AHIL-802, 7th Floor, Al-Hamra Shopping City, Zindabazar, Sylhet-3100, Bangladesh
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:+8801707074577" className="hover:text-white font-semibold text-emerald-400">
                  +880 1707-074577 (Hotline)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <a href="tel:+8809611677335" className="hover:text-white">
                  +880 9611-677335 (Landline)
                </a>
              </div>
              <div className="text-[11px] text-slate-500 font-mono">Skype: SJI Sylhet</div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <span className="text-slate-300 font-semibold">SJ INNOVATION LLC</span>. ALL RIGHTS
            RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://sjinnovation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              <span>sjinnovation.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
