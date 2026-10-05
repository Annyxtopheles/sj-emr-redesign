"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, Menu, X } from "lucide-react";

interface NavbarProps {
  language?: "en" | "bn";
  setLanguage?: (lang: "en" | "bn") => void;
}

export default function Navbar({ language: propLanguage = "bn", setLanguage: propSetLanguage }: NavbarProps) {
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
  const [showDemoCTA, setShowDemoCTA] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        // Hide while at hero section (user sees hero CTA); reveal once scrolled past hero
        setShowDemoCTA(window.scrollY > 380);
      } else {
        setShowDemoCTA(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Primary doctor navigation links
  const primaryNavLinks = [
    { name: language === "en" ? "Features" : "ফিচার", href: "/#features" },
    { name: language === "en" ? "Reviews" : "মতামত", href: "/#testimonials" },
    { name: language === "en" ? "Pricing" : "মূল্য তালিকা", href: "/#pricing" },
    { name: language === "en" ? "Blog" : "ব্লগ", href: "/blogs" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 flex items-center ${
        scrolled ? "h-16 shadow-xs" : "h-20"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 group py-1">
          <Image
            src="/assets/sj-emr-logo.svg"
            alt="SJ EMR Logo"
            width={180}
            height={75}
            priority
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-9 sm:h-10" : "h-11 sm:h-12"
            } group-hover:scale-[1.02]`}
          />
        </Link>

        {/* Primary Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs & Hotline */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Phone Hotline link */}
          <a
            href="tel:+8801707074577"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors py-1.5 px-2 rounded-lg hover:bg-slate-100"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>+880 1707-074577</span>
          </a>

          {/* Language Toggle directly to the left of Doctor Login */}
          <div className="inline-flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              className={`px-2 py-1 text-xs rounded-md transition-all ${
                language === "en"
                  ? "bg-white text-emerald-700 font-semibold shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => handleLanguageChange("bn")}
              className={`px-2 py-1 text-xs rounded-md transition-all ${
                language === "bn"
                  ? "bg-white text-emerald-700 font-semibold shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              বাং
            </button>
          </div>

          {/* Doctor Login */}
          <a
            href="https://emr.com.bd/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            {language === "en" ? "Doctor Login" : "ডাক্তার লগইন"}
          </a>

          {/* Single Primary Action: Book Demo (hidden at hero section, revealed after scrolling) */}
          <div
            className={`transition-all duration-300 ease-out origin-right overflow-hidden ${
              showDemoCTA
                ? "opacity-100 scale-100 max-w-[200px] pointer-events-auto ml-1"
                : "opacity-0 scale-95 max-w-0 pointer-events-none"
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-4 py-2.5 rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === "en" ? "Book Demo" : "ডেমো বুক করুন"}</span>
            </a>
          </div>
        </div>

        {/* Mobile Actions & Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
          {/* Tap-to-call icon */}
          <a
            href="tel:+8801707074577"
            aria-label="Call Hotline"
            className="p-2 text-slate-700 hover:text-emerald-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
          </a>

          {/* Mobile Language Toggle */}
          <div className="inline-flex items-center bg-slate-100 rounded-md p-0.5 border border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              className={`px-1.5 py-0.5 text-xs rounded transition-all ${
                language === "en" ? "bg-white text-emerald-700 font-semibold" : "text-slate-600"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => handleLanguageChange("bn")}
              className={`px-1.5 py-0.5 text-xs rounded transition-all ${
                language === "bn" ? "bg-white text-emerald-700 font-semibold" : "text-slate-600"
              }`}
            >
              বাং
            </button>
          </div>

          {/* Book Demo Button (hidden at hero section, revealed after scrolling) */}
          <div
            className={`transition-all duration-300 ease-out origin-right overflow-hidden ${
              showDemoCTA
                ? "opacity-100 scale-100 max-w-[140px] pointer-events-auto"
                : "opacity-0 scale-95 max-w-0 pointer-events-none"
            }`}
          >
            <a
              href="#contact"
              className="text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg shadow-2xs whitespace-nowrap block"
            >
              {language === "en" ? "Book Demo" : "ডেমো বুক করুন"}
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top">
          <div className="flex flex-col gap-2">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://emr.com.bd/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {language === "en" ? "Doctor Login" : "ডাক্তার লগইন"}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
              >
                {language === "en" ? "Book Demo" : "ডেমো বুক করুন"}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
