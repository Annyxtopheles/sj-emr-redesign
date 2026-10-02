"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  language?: "en" | "bn";
  setLanguage?: (lang: "en" | "bn") => void;
}

export default function Navbar({ language: propLanguage = "en", setLanguage: propSetLanguage }: NavbarProps) {
  const [internalLanguage, setInternalLanguage] = useState<"en" | "bn">(propLanguage);
  const language = propSetLanguage ? propLanguage : internalLanguage;

  const handleLanguageChange = (lang: "en" | "bn") => {
    if (propSetLanguage) {
      propSetLanguage(lang);
    } else {
      setInternalLanguage(lang);
    }
  };

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
    { name: language === "en" ? "Features" : "ফিচার", href: "/#features" },
    { name: language === "en" ? "Videos" : "ভিডিও", href: "/#videos" },
    { name: language === "en" ? "Workflow" : "ওয়ার্কফ্লো", href: "/#workflow" },
    { name: language === "en" ? "Teleradiology" : "টেলিরেডিওলজি", href: "/#teleradiology" },
    { name: language === "en" ? "Reviews" : "মতামত", href: "/#testimonials" },
    { name: language === "en" ? "Pricing" : "মূল্য তালিকা", href: "/#pricing" },
    { name: language === "en" ? "Blog" : "ব্লগ", href: "/blogs" },
  ];

  return (
    <div className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner for Local Support & Compliance */}
      <div className={`bg-emerald-950 text-emerald-100 text-xs px-4 border-b border-emerald-900/60 transition-all duration-300 ${
        scrolled ? "py-1.5 text-[11px]" : "py-2"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-800/80 text-emerald-200 font-medium text-[11px] shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {language === "en" ? "BMDC Compliant" : "BMDC নির্দেশিকা সম্মত"}
            </span>
            <span className="hidden md:inline text-emerald-300/90 text-xs truncate">
              {language === "en"
                ? "National Doctor-First EMR & Telemedicine Platform of Bangladesh"
                : "বাংলাদেশের চিকিৎসকদের জন্য জাতীয় মানের ইএমআর ও টেলিমেডিসিন প্ল্যাটফর্ম"}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-emerald-200 text-xs shrink-0">
            <a
              href="tel:+8801707074577"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-semibold text-xs tracking-normal font-sans tabular-nums">
                +880 1707-074577
              </span>
            </a>
            <span className="text-emerald-700">|</span>
            {/* Language Switcher */}
            <div className="inline-flex items-center bg-emerald-900/90 rounded-md p-0.5 border border-emerald-800">
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-2 py-0.5 text-xs rounded transition-all font-sans ${
                  language === "en"
                    ? "bg-emerald-500 text-white font-semibold shadow-xs"
                    : "text-emerald-300 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("bn")}
                className={`px-2 py-0.5 text-xs rounded transition-all font-sans ${
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
        className={`w-full bg-white/98 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 flex flex-col justify-center relative ${
          scrolled
            ? "h-16 shadow-sm"
            : "h-20"
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group py-1">
            <Image
              src="/assets/logo-blue.png"
              alt="SJ EMR Logo"
              width={180}
              height={80}
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-9 sm:h-10" : "h-11 sm:h-12"
              } group-hover:scale-[1.02]`}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://emr.com.bd/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              {language === "en" ? "Doctor Login" : "লগইন"}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === "en" ? "Book Demo" : "ডেমো বুক করুন"}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="text-xs font-semibold text-white bg-emerald-600 px-3 py-1.5 rounded-lg"
            >
              {language === "en" ? "Book Demo" : "ডেমো বুক করুন"}
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
          <div className="lg:hidden absolute top-full left-0 w-full border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="https://emr.com.bd/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg"
                >
                  {language === "en" ? "Doctor Login" : "ডাক্তার লগইন"}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-lg shadow-sm"
                >
                  {language === "en" ? "Book Demo" : "ডেমো বুক করুন"}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
