"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Calendar, ArrowRight, Menu, X, ShieldCheck, Stethoscope } from "lucide-react";

interface NavbarProps {
  language: "en" | "bn";
  setLanguage: (lang: "en" | "bn") => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: language === "en" ? "Features" : "বৈশিষ্ট্যসমূহ", href: "#features" },
    { name: language === "en" ? "Software Preview" : "সফটওয়্যার ড্যাশবোর্ড", href: "#preview" },
    { name: language === "en" ? "Why SJ EMR" : "কেন ব্যবহার করবেন", href: "#why-us" },
    { name: language === "en" ? "Pricing" : "মূল্য তালিকা", href: "#pricing" },
    { name: language === "en" ? "Doctor Review" : "ডাক্তারদের মতামত", href: "#testimonials" },
    { name: language === "en" ? "Contact" : "যোগাযোগ", href: "#contact" },
  ];

  return (
    <>
      {/* Top Banner for Local Support & Compliance */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-800/80 text-emerald-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {language === "en" ? "BMDC Compliant" : "BMDC নির্দেশিকা সম্মত"}
            </span>
            <span className="hidden sm:inline text-emerald-300/80">
              {language === "en"
                ? "🇧🇩 Bangladesh's #1 Doctor-First EMR & Telemedicine Platform"
                : "🇧🇩 বাংলাদেশের ডাক্তারদের জন্য বিশ্বমানের ইএমআর ও টেলিমেডিসিন প্ল্যাটফর্ম"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-emerald-200 text-xs">
            <a
              href="tel:+8801707074577"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+880 1707-074577</span>
            </a>
            <span className="text-emerald-700">|</span>
            {/* Language Switcher */}
            <div className="inline-flex items-center bg-emerald-900/80 rounded-md p-0.5 border border-emerald-800">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 text-xs rounded transition-all ${
                  language === "en"
                    ? "bg-emerald-500 text-white font-semibold shadow-xs"
                    : "text-emerald-300 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("bn")}
                className={`px-2 py-0.5 text-xs rounded transition-all ${
                  language === "bn"
                    ? "bg-emerald-500 text-white font-semibold shadow-xs"
                    : "text-emerald-300 hover:text-white"
                }`}
              >
                বাং
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-[33px] z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
            : "bg-white/80 backdrop-blur-xs py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-10 w-28 sm:w-32 transition-transform group-hover:scale-105">
              <Image
                src="/assets/logo-blue.png"
                alt="SJ EMR Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <span className="hidden xl:inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              AI Lite
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://emr.com.bd/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 px-3.5 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {language === "en" ? "Doctor Login" : "লগইন"}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === "en" ? "Book Free Zoom Demo" : "ফ্রি জুম ডেমো বুক করুন"}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="text-xs font-medium text-white bg-emerald-600 px-3 py-1.5 rounded-md"
            >
              {language === "en" ? "Demo" : "ডেমো"}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="https://emr.com.bd/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-sm font-medium text-slate-700 border border-slate-300 rounded-lg"
                >
                  {language === "en" ? "Doctor Login" : "ডাক্তার লগইন"}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-lg shadow-sm"
                >
                  {language === "en" ? "Book Free Zoom Demo" : "ফ্রি জুম ডেমো বুক করুন"}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
