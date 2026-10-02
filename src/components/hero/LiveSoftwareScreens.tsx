"use client";

import React from "react";
import {
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Plus,
  Printer,
  Send,
  Calendar as CalendarIcon,
  ShieldCheck,
  Activity,
  FileText,
  Stethoscope,
  ChevronRight,
  TrendingUp,
  Video,
  Check,
  Pill,
} from "lucide-react";

interface ScreenProps {
  language: "en" | "bn";
}

/* 1. Authentic Live Dashboard Screen */
export function LiveDashboardScreen({ language }: ScreenProps) {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex flex-col justify-start p-3 sm:p-5 text-xs font-sans select-none overflow-hidden">
      {/* Top Application Bar */}
      <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-200/80 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            SJ
          </div>
          <div>
            <div className="font-bold text-slate-900 text-[13px] leading-tight flex items-center gap-1.5">
              <span>{language === "en" ? "Prof. Dr. M. A. Rahman" : "প্রফেসর ডা: এম. এ. রহমান"}</span>
              <span className="text-[10px] font-normal text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                {language === "en" ? "BMDC Reg #A-00000" : "বিএমডিসি রেজিঃ #এ-০০০০০"}
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              {language === "en"
                ? "Labaid Specialized Hospital, Sylhet • OPD Chamber 302"
                : "ল্যাবএইড স্পেশালাইজড হসপিটাল, সিলেট • ওপিডি চেম্বার ৩০২"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-[11px] text-slate-400">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span>{language === "en" ? "Search Patient by Mobile / Serial..." : "রোগীর মোবাইল / সিরিয়াল সার্চ করুন..."}</span>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>{language === "en" ? "Live OPD Session" : "লাইভ ওপিডি সেশন"}</span>
          </span>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-3">
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            {language === "en" ? "Today's OPD Queue" : "আজকের ওপিডি সিরিয়াল"}
          </div>
          <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 flex items-baseline gap-1.5">
            <span>{language === "en" ? "28 Patients" : "২৮ জন রোগী"}</span>
            <span className="text-[10px] text-emerald-600 font-medium">
              {language === "en" ? "18 Completed" : "১৮ সম্পন্ন"}
            </span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            {language === "en" ? "Waiting in Chamber" : "চেম্বারে অপেক্ষমাণ"}
          </div>
          <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 flex items-baseline gap-1.5">
            <span>{language === "en" ? "10 Patients" : "১০ জন রোগী"}</span>
            <span className="text-[10px] text-amber-600 font-medium">
              {language === "en" ? "Avg ~8m" : "গড় ~৮ মি."}
            </span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            {language === "en" ? "Prescriptions Issued" : "প্রদত্ত প্রেসক্রিপশন"}
          </div>
          <div className="text-base sm:text-lg font-bold text-emerald-700 mt-0.5 flex items-baseline gap-1.5">
            <span>{language === "en" ? "18 Prescriptions" : "১৮টি প্রেসক্রিপশন"}</span>
            <span className="text-[10px] text-emerald-600 font-normal">
              {language === "en" ? "SMS Sent" : "এসএমএস প্রেরিত"}
            </span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            {language === "en" ? "Chamber Collection" : "আজকের ফি কালেকশন"}
          </div>
          <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 flex items-baseline gap-1.5">
            <span>৳২৮,৫০০</span>
            <span className="text-[10px] text-emerald-600 font-medium">
              {language === "en" ? "Today" : "আজ"}
            </span>
          </div>
        </div>
      </div>

      {/* Main 2-Column Clinical Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left: Patient Queue Table */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex flex-col overflow-hidden">
          <div className="px-3 py-2 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-700">
            <span>{language === "en" ? "Patient Serial & Consultation Queue" : "রোগীর সিরিয়াল ও কনসালটেশন কিউ"}</span>
            <span className="text-[10px] text-emerald-700 font-medium">
              {language === "en" ? "Auto-synced from Reception" : "রিসেপশন থেকে রিয়েলটাইম সিঙ্ক"}
            </span>
          </div>

          <div className="divide-y divide-slate-100 overflow-hidden text-[11px]">
            <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center bg-emerald-50/50">
              <span className="col-span-1 font-bold text-emerald-800">#18</span>
              <div className="col-span-4 font-semibold text-slate-900 truncate">
                {language === "en" ? "Md. Rafiqul Islam" : "মো: রফিকুল ইসলাম"}{" "}
                <span className="text-slate-400 font-normal text-[10px]">{language === "en" ? "(48Y / M)" : "(৪৮ব / পু)"}</span>
              </div>
              <span className="col-span-4 text-slate-600 truncate">
                {language === "en" ? "High Fever & Dry Cough (3d)" : "তীব্র জ্বর ও শুকনো কাশি (৩ দিন)"}
              </span>
              <span className="col-span-3 text-right">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {language === "en" ? "In Room" : "পরামর্শ চলছে"}
                </span>
              </span>
            </div>

            <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
              <span className="col-span-1 font-bold text-slate-600">#19</span>
              <div className="col-span-4 font-medium text-slate-800 truncate">
                {language === "en" ? "Begum Shahnaz" : "বেগম শাহনাজ"}{" "}
                <span className="text-slate-400 font-normal text-[10px]">{language === "en" ? "(52Y / F)" : "(৫২ব / ম)"}</span>
              </div>
              <span className="col-span-4 text-slate-600 truncate">
                {language === "en" ? "T2DM + HTN Routine Follow-up" : "ডায়াবেটিস ও উচ্চ রক্তচাপ ফলো-আপ"}
              </span>
              <span className="col-span-3 text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  {language === "en" ? "Lab Ready" : "রিপোর্ট রেডি"}
                </span>
              </span>
            </div>

            <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
              <span className="col-span-1 font-bold text-slate-600">#20</span>
              <div className="col-span-4 font-medium text-slate-800 truncate">
                {language === "en" ? "Kamrul Hasan" : "কামরুল হাসান"}{" "}
                <span className="text-slate-400 font-normal text-[10px]">{language === "en" ? "(35Y / M)" : "(৩৫ব / পু)"}</span>
              </div>
              <span className="col-span-4 text-slate-600 truncate">
                {language === "en" ? "Chest Tightness & Dyspnea" : "বুকে চাপ ও শ্বাসকষ্ট"}
              </span>
              <span className="col-span-3 text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                  {language === "en" ? "Waiting (8m)" : "অপেক্ষমাণ (৮মি)"}
                </span>
              </span>
            </div>

            <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
              <span className="col-span-1 font-bold text-slate-600">#21</span>
              <div className="col-span-4 font-medium text-slate-800 truncate">
                {language === "en" ? "Tanvir Ahmed" : "তানভীর আহমেদ"}{" "}
                <span className="text-slate-400 font-normal text-[10px]">{language === "en" ? "(12Y / M)" : "(১২ব / পু)"}</span>
              </div>
              <span className="col-span-4 text-slate-600 truncate">
                {language === "en" ? "Acute Bronchitis & Wheezing" : "তীব্র ব্রঙ্কাইটিস ও কাশি"}
              </span>
              <span className="col-span-3 text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                  {language === "en" ? "Waiting (15m)" : "অপেক্ষমাণ (১৫মি)"}
                </span>
              </span>
            </div>

            <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
              <span className="col-span-1 font-bold text-slate-600">#22</span>
              <div className="col-span-4 font-medium text-slate-800 truncate">
                {language === "en" ? "Farhana Karim" : "ফারহানা করিম"}{" "}
                <span className="text-slate-400 font-normal text-[10px]">{language === "en" ? "(28Y / F)" : "(২৮ব / ম)"}</span>
              </div>
              <span className="col-span-4 text-slate-600 truncate">
                {language === "en" ? "Antenatal 32 Wks Routine" : "গর্ভকালীন নিয়মিত পরীক্ষা (৩২ সপ্তাহ)"}
              </span>
              <span className="col-span-3 text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                  {language === "en" ? "Waiting (22m)" : "অপেক্ষমাণ (২২মি)"}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Quick Clinical Presets & Pending Reports */}
        <div className="lg:col-span-4 space-y-2 flex flex-col justify-between">
          <div className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-2xs">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              {language === "en" ? "Frequent Rx Templates" : "জনপ্রিয় প্রেসক্রিপশন টেমপ্লেট"}
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/60 font-medium text-emerald-950 flex items-center justify-between">
                <span>{language === "en" ? "Viral Fever & Cough (Adult)" : "ভাইরাল ফিভার ও কাশি (প্রাপ্তবয়স্ক)"}</span>
                <span className="text-[10px] text-emerald-700 font-bold bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                  {language === "en" ? "Apply" : "প্রয়োগ"}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/70 font-medium text-slate-700 flex items-center justify-between">
                <span>{language === "en" ? "Type 2 Diabetes (Routine)" : "টাইপ ২ ডায়াবেটিস (নিয়মিত)"}</span>
                <span className="text-[10px] text-slate-600 font-semibold bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  {language === "en" ? "Apply" : "প্রয়োগ"}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/70 font-medium text-slate-700 flex items-center justify-between">
                <span>{language === "en" ? "Hypertension (Amlodipine)" : "উচ্চ রক্তচাপ (অ্যামলোডিপিন)"}</span>
                <span className="text-[10px] text-slate-600 font-semibold bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  {language === "en" ? "Apply" : "প্রয়োগ"}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-2xs">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>{language === "en" ? "Patient Lab Reports" : "রোগীর ল্যাব রিপোর্ট"}</span>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                {language === "en" ? "2 New" : "২টি নতুন"}
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                <span className="truncate text-slate-700 font-medium">
                  {language === "en" ? "CBC & CRP • Begum Shahnaz" : "সিবিসি ও সিআরপি • বেগম শাহনাজ"}
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold shrink-0">
                  {language === "en" ? "Attached ✓" : "সংযুক্ত ✓"}
                </span>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                <span className="truncate text-slate-700 font-medium">
                  {language === "en" ? "Chest X-Ray • Kamrul Hasan" : "চেস্ট এক্স-রে • কামরুল হাসান"}
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold shrink-0">
                  {language === "en" ? "Attached ✓" : "সংযুক্ত ✓"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 2. Authentic Live Calendar Screen */
export function LiveCalendarScreen({ language }: ScreenProps) {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex flex-col justify-start p-3 sm:p-5 text-xs font-sans select-none overflow-hidden">
      {/* Calendar Header Bar */}
      <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-200/80 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            <CalendarIcon className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-[13px] leading-tight">
              {language === "en"
                ? "Chamber Schedule & Patient Appointments"
                : "চেম্বার শিডিউল ও রোগীর সিরিয়াল বুকিং"}
            </div>
            <div className="text-[11px] text-slate-500">
              {language === "en"
                ? "Wednesday, 14 October 2026 • Evening Shift (04:00 PM – 09:00 PM)"
                : "বুধবার, ১৪ অক্টোবর ২০২৬ • সান্ধ্যকালীন শিফট (বিকাল ৪টা - রাত ৯টা)"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            {language === "en" ? "Day View" : "দৈনিক"}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white text-slate-600 border border-slate-200">
            {language === "en" ? "Week View" : "সাপ্তাহিক"}
          </span>
        </div>
      </div>

      {/* Appointment Metrics */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-3">
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-semibold text-slate-500 uppercase">
            {language === "en" ? "Total Bookings" : "মোট বুকিং"}
          </span>
          <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
            {language === "en" ? "30 Patients" : "৩০ জন রোগী"}
          </div>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-semibold text-slate-500 uppercase">
            {language === "en" ? "SMS Reminders" : "এসএমএস রিমাইন্ডার"}
          </span>
          <div className="text-base sm:text-lg font-bold text-emerald-700 mt-0.5">
            {language === "en" ? "30 / 30 Sent" : "৩০ / ৩০ প্রেরিত"}
          </div>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-semibold text-slate-500 uppercase">
            {language === "en" ? "Shift Timing" : "শিফটের সময়"}
          </span>
          <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
            {language === "en" ? "04:00 – 09:00 PM" : "০৪:০০ – ০৯:০০ PM"}
          </div>
        </div>
      </div>

      {/* Schedule Time Slots Grid */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs flex-1 min-h-0 overflow-hidden flex flex-col">
        <div className="px-3 py-2 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-700">
          <span>{language === "en" ? "Serial Time Slots (15-Minute Intervals)" : "সিরিয়াল সময়সূচি (১৫ মিনিট বিরতি)"}</span>
          <span className="text-[10px] text-emerald-700 font-medium">
            {language === "en" ? "Today's Chamber" : "আজকের চেম্বার"}
          </span>
        </div>

        <div className="divide-y divide-slate-100 overflow-hidden text-[11px]">
          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center bg-slate-50/50">
            <span className="col-span-2 font-bold text-slate-500">04:00 PM</span>
            <div className="col-span-5 font-semibold text-slate-900 truncate">
              {language === "en" ? "Md. Rafiqul Islam" : "মো: রফিকুল ইসলাম"}{" "}
              <span className="text-slate-400 font-normal text-[10px]">{language === "en" ? "(Token #01)" : "(টোকেন #০১)"}</span>
            </div>
            <span className="col-span-3 text-slate-600 truncate">
              {language === "en" ? "General Medicine" : "জেনারেল মেডিসিন"}
            </span>
            <span className="col-span-2 text-right text-[10px] font-bold text-emerald-700">
              {language === "en" ? "Completed ✓" : "সম্পন্ন ✓"}
            </span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center bg-slate-50/50">
            <span className="col-span-2 font-bold text-slate-500">04:15 PM</span>
            <div className="col-span-5 font-semibold text-slate-900 truncate">
              {language === "en" ? "Begum Shahnaz" : "বেগম শাহনাজ"}{" "}
              <span className="text-slate-400 font-normal text-[10px]">{language === "en" ? "(Token #02)" : "(টোকেন #০২)"}</span>
            </div>
            <span className="col-span-3 text-slate-600 truncate">
              {language === "en" ? "T2DM Routine Review" : "ডায়াবেটিস ফলো-আপ"}
            </span>
            <span className="col-span-2 text-right text-[10px] font-bold text-emerald-700">
              {language === "en" ? "Completed ✓" : "সম্পন্ন ✓"}
            </span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center bg-emerald-50/60">
            <span className="col-span-2 font-bold text-emerald-800">04:30 PM</span>
            <div className="col-span-5 font-bold text-slate-900 truncate">
              {language === "en" ? "Kamrul Hasan" : "কামরুল হাসান"}{" "}
              <span className="text-slate-500 font-normal text-[10px]">{language === "en" ? "(Token #03)" : "(টোকেন #০৩)"}</span>
            </div>
            <span className="col-span-3 text-emerald-900 truncate">
              {language === "en" ? "Cardiology Follow-up" : "কার্ডিওলজি ফলো-আপ"}
            </span>
            <span className="col-span-2 text-right">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white">
                {language === "en" ? "In Session" : "পরামর্শ চলছে"}
              </span>
            </span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
            <span className="col-span-2 font-bold text-slate-700">04:45 PM</span>
            <div className="col-span-5 font-medium text-slate-900 truncate">
              {language === "en" ? "Nasrin Sultana" : "নাসরিন সুলতানা"}{" "}
              <span className="text-slate-400 font-normal text-[10px]">{language === "en" ? "(Token #04)" : "(টোকেন #০৪)"}</span>
            </div>
            <span className="col-span-3 text-slate-600 truncate">
              {language === "en" ? "Telemedicine Video Consult" : "টেলিমেডিসিন ভিডিও কল"}
            </span>
            <span className="col-span-2 text-right">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {language === "en" ? "Next Up" : "পরবর্তী রোগী"}
              </span>
            </span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
            <span className="col-span-2 font-bold text-slate-700">05:00 PM</span>
            <div className="col-span-5 font-medium text-slate-900 truncate">
              {language === "en" ? "Tanvir Ahmed" : "তানভীর আহমেদ"}{" "}
              <span className="text-slate-400 font-normal text-[10px]">{language === "en" ? "(Token #05)" : "(টোকেন #০৫)"}</span>
            </div>
            <span className="col-span-3 text-slate-600 truncate">
              {language === "en" ? "Pediatric Wheeze Check" : "শিশুর শ্বাসকষ্ট চেকআপ"}
            </span>
            <span className="col-span-2 text-right">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                {language === "en" ? "Waiting" : "অপেক্ষমাণ"}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. Authentic Live Quick Actions / Prescription Pad Screen */
export function LiveActionsScreen({ language }: ScreenProps) {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex flex-col justify-start p-3 sm:p-5 text-xs font-sans select-none overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-200/80 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            Rx
          </div>
          <div>
            <div className="font-bold text-slate-900 text-[13px] leading-tight flex items-center gap-1.5">
              <span>{language === "en" ? "Prescription (Rx) Pad" : "ডিজিটাল প্রেসক্রিপশন (Rx) প্যাড"}</span>
              <span className="text-[10px] font-medium text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                #RX-2026-9812
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              {language === "en"
                ? "Patient: Md. Rafiqul Islam (48Y / M) • Serial #18 • Mobile: 01711-348291"
                : "রোগী: মো: রফিকুল ইসলাম (৪৮ বছর / পুরুষ) • সিরিয়াল #১৮ • মোবাইল: ০১৭১১-৩৪৮২৯১"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white text-slate-700 border border-slate-200 shadow-2xs">
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>{language === "en" ? "Print Rx" : "প্রিন্ট নিন"}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-700 text-white shadow-2xs">
            <Send className="w-3.5 h-3.5" />
            <span>{language === "en" ? "Send to Patient" : "রোগীকে পাঠান"}</span>
          </span>
        </div>
      </div>

      {/* Vitals Strip */}
      <div className="bg-white rounded-xl p-2.5 border border-slate-200/90 shadow-2xs mb-3 flex flex-wrap items-center justify-between gap-2 text-[11px]">
        <div><span className="text-slate-400">BP:</span> <span className="font-bold text-slate-800">125/80 mmHg</span></div>
        <div><span className="text-slate-400">Pulse:</span> <span className="font-bold text-slate-800">76 bpm</span></div>
        <div><span className="text-slate-400">Temp:</span> <span className="font-bold text-rose-600">102.2°F</span></div>
        <div><span className="text-slate-400">SpO2:</span> <span className="font-bold text-emerald-700">98%</span></div>
        <div><span className="text-slate-400">Weight:</span> <span className="font-bold text-slate-800">68 kg</span></div>
      </div>

      {/* Prescribed Items Table */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs flex-1 min-h-0 overflow-hidden flex flex-col">
        <div className="px-3 py-2 bg-slate-100/70 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider grid grid-cols-12 gap-2">
          <span className="col-span-5">{language === "en" ? "Brand Name & Strength" : "ওষুধের নাম ও স্ট্রেন্থ"}</span>
          <span className="col-span-4">{language === "en" ? "Dosage / Instructions" : "ডোজ ও সেবনের নিয়ম"}</span>
          <span className="col-span-3 text-right">{language === "en" ? "Duration" : "মেয়াদ"}</span>
        </div>

        <div className="divide-y divide-slate-100 overflow-hidden text-[11px]">
          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
            <div className="col-span-5">
              <span className="font-bold text-slate-900 block">1. Tab. Napa Extend 665mg</span>
              <span className="text-[10px] text-slate-400">Paracetamol • Beximco Pharma</span>
            </div>
            <div className="col-span-4 font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] w-fit">
              1 + 1 + 1 (জ্বর থাকলে)
            </div>
            <span className="col-span-3 text-right text-slate-700 font-medium">
              {language === "en" ? "3 Days" : "৩ দিন"}
            </span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
            <div className="col-span-5">
              <span className="font-bold text-slate-900 block">2. Cap. Cefixime 200mg</span>
              <span className="text-[10px] text-slate-400">Cef-3 • Square Pharmaceuticals</span>
            </div>
            <div className="col-span-4 font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] w-fit">
              1 + 0 + 1 (খাবার পর)
            </div>
            <span className="col-span-3 text-right text-slate-700 font-medium">
              {language === "en" ? "7 Days" : "৭ দিন"}
            </span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
            <div className="col-span-5">
              <span className="font-bold text-slate-900 block">3. Syp. Tofen 100ml</span>
              <span className="text-[10px] text-slate-400">Ketotifen • Incepta Pharma</span>
            </div>
            <div className="col-span-4 font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] w-fit">
              2 চামচ দিনে ৩ বার
            </div>
            <span className="col-span-3 text-right text-slate-700 font-medium">
              {language === "en" ? "7 Days" : "৭ দিন"}
            </span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
            <div className="col-span-5">
              <span className="font-bold text-slate-900 block">4. Cap. Seclo 20mg</span>
              <span className="text-[10px] text-slate-400">Omeprazole • Square Pharma</span>
            </div>
            <div className="col-span-4 font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] w-fit">
              1 + 0 + 1 (খাবার ৩০ মি. আগে)
            </div>
            <span className="col-span-3 text-right text-slate-700 font-medium">
              {language === "en" ? "14 Days" : "১৪ দিন"}
            </span>
          </div>
        </div>

        {/* Clinical Advice & Follow-up strip */}
        <div className="px-3 py-2 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
          <span className="text-slate-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>
              {language === "en"
                ? "Advice: Complete antibiotic course, drink warm fluids • Auto-saved"
                : "পরামর্শ: অ্যান্টিবায়োটিক কোর্স সম্পূর্ণ করুন, কুসুম গরম তরল খান • অটো-সেভড"}
            </span>
          </span>
          <span className="font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded text-[10px]">
            {language === "en" ? "Follow-up: 7 Days" : "ফলো-আপ: ৭ দিন পর"}
          </span>
        </div>
      </div>
    </div>
  );
}
