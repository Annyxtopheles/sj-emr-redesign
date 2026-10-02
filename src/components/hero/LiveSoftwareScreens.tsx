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
              <span>Prof. Dr. M. A. Rahman</span>
              <span className="text-[10px] font-normal text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                BMDC #18429
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              Labaid Specialized Hospital, Sylhet • OPD Chamber 302
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-[11px] text-slate-400">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span>Search Patient by Mobile / Serial...</span>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Live OPD Session</span>
          </span>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-3">
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Today&apos;s OPD Queue</div>
          <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 flex items-baseline gap-1.5">
            <span>28 Total</span>
            <span className="text-[10px] text-emerald-600 font-medium">18 Completed</span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Avg Rx Time</div>
          <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 flex items-baseline gap-1.5">
            <span>58 Sec</span>
            <span className="text-[10px] text-emerald-600 font-medium">-75% vs Paper</span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">BMDC &amp; DGDA Sync</div>
          <div className="text-base sm:text-lg font-bold text-emerald-700 mt-0.5 flex items-baseline gap-1.5">
            <span>100% Safe</span>
            <span className="text-[10px] text-slate-400 font-normal">0 Collisions</span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Chamber Revenue</div>
          <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 flex items-baseline gap-1.5">
            <span>৳28,500</span>
            <span className="text-[10px] text-emerald-600 font-medium">Cash + bKash</span>
          </div>
        </div>
      </div>

      {/* Main 2-Column Clinical Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left: Patient Queue Table */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex flex-col overflow-hidden">
          <div className="px-3 py-2 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-700">
            <span>Patient Serial &amp; Consultation Queue</span>
            <span className="text-[10px] text-emerald-700 font-medium">Auto-synced from Reception</span>
          </div>

          <div className="divide-y divide-slate-100 overflow-hidden text-[11px]">
            <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center bg-emerald-50/50">
              <span className="col-span-1 font-mono font-bold text-emerald-800">#18</span>
              <div className="col-span-4 font-semibold text-slate-900 truncate">
                Md. Rafiqul Islam <span className="text-slate-400 font-normal text-[10px]">(48Y / M)</span>
              </div>
              <span className="col-span-4 text-slate-600 truncate">High Fever &amp; Dry Cough (3d)</span>
              <span className="col-span-3 text-right">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  In Room
                </span>
              </span>
            </div>

            <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
              <span className="col-span-1 font-mono font-bold text-slate-600">#19</span>
              <div className="col-span-4 font-medium text-slate-800 truncate">
                Begum Shahnaz <span className="text-slate-400 font-normal text-[10px]">(52Y / F)</span>
              </div>
              <span className="col-span-4 text-slate-600 truncate">T2DM + HTN Routine Follow-up</span>
              <span className="col-span-3 text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  Lab Ready
                </span>
              </span>
            </div>

            <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
              <span className="col-span-1 font-mono font-bold text-slate-600">#20</span>
              <div className="col-span-4 font-medium text-slate-800 truncate">
                Kamrul Hasan <span className="text-slate-400 font-normal text-[10px]">(35Y / M)</span>
              </div>
              <span className="col-span-4 text-slate-600 truncate">Chest Tightness &amp; Dyspnea</span>
              <span className="col-span-3 text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                  Waiting (8m)
                </span>
              </span>
            </div>

            <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
              <span className="col-span-1 font-mono font-bold text-slate-600">#21</span>
              <div className="col-span-4 font-medium text-slate-800 truncate">
                Tanvir Ahmed <span className="text-slate-400 font-normal text-[10px]">(12Y / M)</span>
              </div>
              <span className="col-span-4 text-slate-600 truncate">Acute Bronchitis &amp; Wheezing</span>
              <span className="col-span-3 text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                  Waiting (15m)
                </span>
              </span>
            </div>

            <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
              <span className="col-span-1 font-mono font-bold text-slate-600">#22</span>
              <div className="col-span-4 font-medium text-slate-800 truncate">
                Farhana Karim <span className="text-slate-400 font-normal text-[10px]">(28Y / F)</span>
              </div>
              <span className="col-span-4 text-slate-600 truncate">Antenatal 32 Wks Routine</span>
              <span className="col-span-3 text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                  Waiting (22m)
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Quick Clinical Actions & Drug Presets */}
        <div className="lg:col-span-4 space-y-2 flex flex-col justify-between">
          <div className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-2xs">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              Favorite Clinical Protocols
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/60 font-medium text-emerald-950 flex items-center justify-between">
                <span>Viral URI Protocol (Adult)</span>
                <span className="text-[10px] text-emerald-700 font-bold">1-Click</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/70 font-medium text-slate-700 flex items-center justify-between">
                <span>T2DM + Metformin Start</span>
                <span className="text-[10px] text-slate-500 font-bold">1-Click</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/70 font-medium text-slate-700 flex items-center justify-between">
                <span>HTN Dual Regimen (Amlodipine)</span>
                <span className="text-[10px] text-slate-500 font-bold">1-Click</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-3 border border-slate-800 shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-400 mb-1">
              <span>Cloud Database Sync</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <p className="text-[10px] text-slate-300 leading-snug">
              Lifetime prescriptions, SMS receipts, and patient visits instantly synced to secure cloud servers.
            </p>
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
              Chamber Schedule &amp; Patient Appointments
            </div>
            <div className="text-[11px] text-slate-500">
              Wednesday, 14 October 2026 • Evening Shift (04:00 PM – 09:00 PM)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            Day View
          </span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white text-slate-600 border border-slate-200">
            Week View
          </span>
        </div>
      </div>

      {/* Appointment Metrics */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-3">
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-semibold text-slate-500 uppercase">Chamber Capacity</span>
          <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">30 / 30 Booked (100%)</div>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-semibold text-slate-500 uppercase">SMS Reminders</span>
          <div className="text-base sm:text-lg font-bold text-emerald-700 mt-0.5">30/30 Sent (100%)</div>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-semibold text-slate-500 uppercase">Average Wait Time</span>
          <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">6.4 Minutes</div>
        </div>
      </div>

      {/* Schedule Time Slots Grid */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs flex-1 min-h-0 overflow-hidden flex flex-col">
        <div className="px-3 py-2 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-700">
          <span>Serial Time Slots (15-Minute Optimized Buffer)</span>
          <span className="text-[10px] text-emerald-700 font-medium">0% No-Show Rate</span>
        </div>

        <div className="divide-y divide-slate-100 overflow-hidden text-[11px]">
          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center bg-slate-50/50">
            <span className="col-span-2 font-mono font-bold text-slate-500">04:00 PM</span>
            <div className="col-span-5 font-semibold text-slate-900 truncate">
              Md. Rafiqul Islam <span className="text-slate-400 font-normal text-[10px]">(Token #01)</span>
            </div>
            <span className="col-span-3 text-slate-600 truncate">General Medicine</span>
            <span className="col-span-2 text-right text-[10px] font-bold text-emerald-700">Completed ✓</span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center bg-slate-50/50">
            <span className="col-span-2 font-mono font-bold text-slate-500">04:15 PM</span>
            <div className="col-span-5 font-semibold text-slate-900 truncate">
              Begum Shahnaz <span className="text-slate-400 font-normal text-[10px]">(Token #02)</span>
            </div>
            <span className="col-span-3 text-slate-600 truncate">T2DM Routine Review</span>
            <span className="col-span-2 text-right text-[10px] font-bold text-emerald-700">Completed ✓</span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center bg-emerald-50/60">
            <span className="col-span-2 font-mono font-bold text-emerald-800">04:30 PM</span>
            <div className="col-span-5 font-bold text-slate-900 truncate">
              Kamrul Hasan <span className="text-slate-500 font-normal text-[10px]">(Token #03)</span>
            </div>
            <span className="col-span-3 text-emerald-900 truncate">Cardiology Follow-up</span>
            <span className="col-span-2 text-right">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white">
                In Session
              </span>
            </span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
            <span className="col-span-2 font-mono font-bold text-slate-700">04:45 PM</span>
            <div className="col-span-5 font-medium text-slate-900 truncate">
              Dr. Telemedicine Video Consult <span className="text-slate-400 font-normal text-[10px]">(Dhaka)</span>
            </div>
            <span className="col-span-3 text-slate-600 truncate">Remote Video Call</span>
            <span className="col-span-2 text-right">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                Next Up
              </span>
            </span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center hover:bg-slate-50">
            <span className="col-span-2 font-mono font-bold text-slate-700">05:00 PM</span>
            <div className="col-span-5 font-medium text-slate-900 truncate">
              Tanvir Ahmed <span className="text-slate-400 font-normal text-[10px]">(Token #04)</span>
            </div>
            <span className="col-span-3 text-slate-600 truncate">Pediatric Wheeze Check</span>
            <span className="col-span-2 text-right">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                Lobby Waiting
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
              <span>Digital Prescription Builder</span>
              <span className="text-[10px] font-mono font-medium text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                #RX-2026-9812
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              Patient: Md. Rafiqul Islam (48Y / M) • Contact: +880 1711-xxxxxx
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>BMDC Compliant</span>
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
          <span className="col-span-5">Brand Name &amp; Strength</span>
          <span className="col-span-4">Dosage / Instructions</span>
          <span className="col-span-3 text-right">Duration</span>
        </div>

        <div className="divide-y divide-slate-100 overflow-hidden text-[11px]">
          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
            <div className="col-span-5">
              <span className="font-bold text-slate-900 block">1. Cap. Cefixime 200mg</span>
              <span className="text-[10px] text-slate-400">Cef-3 • Square Pharmaceuticals</span>
            </div>
            <div className="col-span-4 font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] w-fit">
              1 + 0 + 1 (খাবার পর)
            </div>
            <span className="col-span-3 text-right text-slate-700 font-medium">7 Days</span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
            <div className="col-span-5">
              <span className="font-bold text-slate-900 block">2. Tab. Napa Extend 665mg</span>
              <span className="text-[10px] text-slate-400">Paracetamol • Beximco Pharma</span>
            </div>
            <div className="col-span-4 font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] w-fit">
              1 + 1 + 1 (জ্বর থাকলে)
            </div>
            <span className="col-span-3 text-right text-slate-700 font-medium">3 Days</span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
            <div className="col-span-5">
              <span className="font-bold text-slate-900 block">3. Syp. Tofen 100ml</span>
              <span className="text-[10px] text-slate-400">Ketotifen • Incepta Pharma</span>
            </div>
            <div className="col-span-4 font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] w-fit">
              2 চামচ দিনে ৩ বার
            </div>
            <span className="col-span-3 text-right text-slate-700 font-medium">7 Days</span>
          </div>

          <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
            <div className="col-span-5">
              <span className="font-bold text-slate-900 block">4. Cap. Seclo 20mg</span>
              <span className="text-[10px] text-slate-400">Omeprazole • Square Pharma</span>
            </div>
            <div className="col-span-4 font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] w-fit">
              1 + 0 + 1 (খাবার ৩০ মি. আগে)
            </div>
            <span className="col-span-3 text-right text-slate-700 font-medium">14 Days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
