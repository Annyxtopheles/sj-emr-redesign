"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, Menu, X } from "lucide-react";

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

  // Primary doctor navigation links
  const primaryNavLinks = [
    { name: language === "en" ? "Features" : "ফিচার", href: "/#features" },
    { name: language === "en" ? "Videos" : "ভিডিও", href: "/#videos" },
    { name: language === "en" ? "Workflow" : "ওয়ার্কফ্লো", href: "/#workflow" },
    { name: language === "en" ? "Reviews" : "মতামত", href: "/#testimonials" },
    { name: language === "en" ? "Pricing" : "মূল্য তালিকা", href: "/#pricing" },
    { name: language === "en" ? "Blog" : "ব্লগ", href: "/blogs" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 flex items-center ${
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
          {/* Quieter secondary position for Teleradiology (diagnostic centers) */}
          <Link
            href="/#teleradiology"
            className="text-xs font-medium text-slate-400 hover:text-emerald-700 transition-colors whitespace-nowrap border-l border-slate-200 pl-3 xl:pl-4"
          >
            {language === "en" ? "Teleradiology" : "টেলিরেডিওলজি"}
          </Link>
        </nav>

        {/* Desktop CTAs & Hotline */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Phone Hotline link */}
          <a
            href="tel:+8801707074577"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors py-1.5 px-2 rounded-lg hover:bg-slate-100"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="tabular-nums font-mono">+880 1707-074577</span>
          </a>

          {/* WhatsApp icon button */}
          {/* TODO: Confirm +880 1707-074577 is WhatsApp-enabled */}
          <a
            href="https://wa.me/8801707074577"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            title="Chat on WhatsApp (+880 1707-074577)"
            className="inline-flex items-center justify-center p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
          >
            <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.222-.553-1.637-.677-2.73-2.348-2.812-2.457-.082-.11-1.002-1.332-1.002-2.54 0-1.209.633-1.802.857-2.046.224-.244.49-.305.654-.305.163 0 .327.002.469.009.151.007.354-.057.553.421.205.49.698 1.701.759 1.824.061.122.102.266.02.428-.082.163-.122.265-.245.408-.122.143-.257.32-.367.43-.122.122-.25.255-.108.499.143.244.636 1.05 1.365 1.7 0.941.839 1.734 1.099 1.979 1.222.245.122.388.102.53-.061.143-.163.612-.714.775-.959.163-.245.327-.204.551-.122.224.082 1.428.673 1.673.796.245.122.408.184.469.286.061.102.061.592-.083.997z" />
              <path d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.767.458 3.488 1.328 5.01L2 22l5.127-1.344A9.957 9.957 0 0012.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.2c-1.579 0-3.118-.42-4.468-1.215l-.32-.19-3.037.797.81-2.96-.208-.332A8.163 8.163 0 013.804 12c0-4.526 3.678-8.2 8.2-8.2 4.522 0 8.2 3.674 8.2 8.2 0 4.526-3.678 8.2-8.2 8.2z" />
            </svg>
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
            {language === "en" ? "Doctor Login" : "লগইন"}
          </a>

          {/* Single Primary Action: Book Demo */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-4 py-2.5 rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>{language === "en" ? "Book Demo" : "ডেমো বুক করুন"}</span>
          </a>
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

          {/* WhatsApp icon */}
          {/* TODO: Confirm +880 1707-074577 is WhatsApp-enabled */}
          <a
            href="https://wa.me/8801707074577"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.222-.553-1.637-.677-2.73-2.348-2.812-2.457-.082-.11-1.002-1.332-1.002-2.54 0-1.209.633-1.802.857-2.046.224-.244.49-.305.654-.305.163 0 .327.002.469.009.151.007.354-.057.553.421.205.49.698 1.701.759 1.824.061.122.102.266.02.428-.082.163-.122.265-.245.408-.122.143-.257.32-.367.43-.122.122-.25.255-.108.499.143.244.636 1.05 1.365 1.7 0.941.839 1.734 1.099 1.979 1.222.245.122.388.102.53-.061.143-.163.612-.714.775-.959.163-.245.327-.204.551-.122.224.082 1.428.673 1.673.796.245.122.408.184.469.286.061.102.061.592-.083.997z" />
              <path d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.767.458 3.488 1.328 5.01L2 22l5.127-1.344A9.957 9.957 0 0012.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.2c-1.579 0-3.118-.42-4.468-1.215l-.32-.19-3.037.797.81-2.96-.208-.332A8.163 8.163 0 013.804 12c0-4.526 3.678-8.2 8.2-8.2 4.522 0 8.2 3.674 8.2 8.2 0 4.526-3.678 8.2-8.2 8.2z" />
            </svg>
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

          {/* Book Demo Button */}
          <a
            href="#contact"
            className="text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg shadow-2xs whitespace-nowrap"
          >
            {language === "en" ? "Book Demo" : "ডেমো"}
          </a>

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
            {/* Teleradiology in Mobile Menu */}
            <Link
              href="/#teleradiology"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>{language === "en" ? "Teleradiology" : "টেলিরেডিওলজি"}</span>
              <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">Diagnostic</span>
            </Link>

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
