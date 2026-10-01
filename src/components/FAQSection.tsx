"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQSectionProps {
  language: "en" | "bn";
}

export default function FAQSection({ language }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q:
        language === "en"
          ? "Is SJ EMR compliant with Bangladesh Medical & Dental Council (BMDC) regulations?"
          : "এস জে ইএমআর কি বাংলাদেশ মেডিকেল অ্যান্ড ডেন্টাল কাউন্সিল (BMDC) নীতিমালার সাথে সামঞ্জস্যপূর্ণ?",
      a:
        language === "en"
          ? "Yes. SJ EMR prescriptions strictly adhere to BMDC prescription guidelines. They feature your full clinical qualifications, BMDC registration number, chamber contact, patient identification, chief complaints, investigations, and verified generic/brand drug formulations with proper dosage regimens."
          : "হ্যাঁ, সম্পূর্ণভাবে। এস জে ইএমআরের প্রেসক্রিপশন ফরম্যাটটি বিএমডিসি নির্দেশিকা অনুযায়ী ডিজাইন করা। এতে ডাক্তারের পূর্ণাঙ্গ ডিগ্রি, বিএমডিসি রেজিস্ট্রেশন নম্বর, রোগীর তথ্য, চিফ কমপ্লেইন্টস, ইনভেস্টিগেশন এবং সঠিক ডোজসহ ওষুধের নাম সুবিন্যস্তভাবে প্রিন্ট হয়।",
    },
    {
      q:
        language === "en"
          ? "Can I print prescriptions on my existing chamber pad/letterhead?"
          : "আমি কি আমার আগের ছাপানো চেম্বার প্যাডেই প্রিন্ট করতে পারব?",
      a:
        language === "en"
          ? "Yes. The Rx Designer module allows you to customize top and bottom margins with millimeter precision. You can either print on your pre-printed physical doctor pads or print directly on plain A4 paper with your digital letterhead, logo, and signature."
          : "অবশ্যই পারবেন। আরএক্স ডিজাইনার মডিউলে মার্জিন অ্যাডজাস্ট করার পূর্ণ নিয়ন্ত্রণ রয়েছে। আপনি চাইলে আগে থেকে ছাপানো প্যাডে প্রিন্ট করতে পারেন, অথবা সাধারণ এ-ফোর কাগজে সফটওয়্যারের নিজস্ব ডিজিটাল হেডার ও সিগনেচারসহ প্রিন্ট নিতে পারেন।",
    },
    {
      q:
        language === "en"
          ? "How does the automated Zoom Telemedicine integration work?"
          : "স্বয়ংক্রিয় জুম টেলিমেডিসিন ফিচারটি কীভাবে কাজ করে?",
      a:
        language === "en"
          ? "Once a video consultation is scheduled, SJ EMR instantly generates a secure Zoom meeting room and automatically sends the meeting link, meeting ID, and password via SMS directly to the patient’s mobile phone. Neither you nor the patient needs to create manual links."
          : "ভিডিও কনসালটেশনের জন্য অ্যাপয়েন্টমেন্ট বুক হওয়ার সাথে সাথে এস জে ইএমআর একটি সুরক্ষিত জুম মিটিং তৈরি করে এবং রোগীর মোবাইলে এসএমএসের মাধ্যমে লিংক, মিটিং আইডি ও পাসওয়ার্ড পাঠিয়ে দেয়। ফলে আলাদাভাবে লিংক পাঠানো বা টেক্সট করার কোনো ঝামেলা থাকে না।",
    },
    {
      q:
        language === "en"
          ? "Can my receptionist or compounder book appointments without seeing clinical notes?"
          : "আমার রিসেপশনিস্ট বা অ্যাসিস্ট্যান্ট কি ডাক্তারের গোপন নোট না দেখে শুধু সিরিয়াল দিতে পারবে?",
      a:
        language === "en"
          ? "Yes. SJ EMR has granular role-based permissions. Front-desk staff and compounders can manage patient queues, tokens, phone numbers, and fees without having access to confidential patient diagnoses, case studies, or medical notes."
          : "হ্যাঁ। সফটওয়্যারটিতে রোল-বেসড পারমিশন রয়েছে। সহকারী বা রিসেপশনিস্ট শুধু নতুন রোগীর সিরিয়াল, নাম, ফোন নম্বর ও ফি কালেকশন করতে পারবে, কিন্তু ডাক্তারের কনফিডেনশিয়াল ভিজিট নোট বা ডায়াগনস্টিক তথ্য দেখতে পারবে না।",
    },
    {
      q:
        language === "en"
          ? "What happens if there is an internet outage in our chamber?"
          : "চেম্বারে হঠাৎ ইন্টারনেট ধীরগতি হলে বা চলে গেলে কী হবে?",
      a:
        language === "en"
          ? "SJ EMR is engineered with lightweight payloads and optimized for Bangladeshi networks. It runs smoothly on standard 4G mobile hotspots. Ongoing patient notes are cached locally so you never lose your draft."
          : "এস জে ইএমআর খুবই হালকা এবং দ্রুতগতির। এটি সাধারণ ৪জি মোবাইল হটস্পট বা মডেম দিয়েও স্বাচ্ছন্দ্যে চলে। চলমান প্রেসক্রিপশনের খসড়া সাথে সাথে সেভ থাকে, যাতে কোনো তথ্য হারিয়ে না যায়।",
    },
    {
      q:
        language === "en"
          ? "Where are the data servers hosted and is local support available in Bangladesh?"
          : "আমাদের ডেটা কতটা নিরাপদ এবং বাংলাদেশে সরাসরি সাপোর্ট টিম আছে কি?",
      a:
        language === "en"
          ? "Patient records are encrypted with bank-level security and backed up daily. Our local engineering and support teams operate physical offices in Dhaka (Mohakhali DOHS) and Sylhet (Al-Hamra Shopping City, Zindabazar) providing 24/7 on-call technical assistance."
          : "সকল ডেটা ক্লাউডে সুরক্ষিত এনক্রিপশনের মাধ্যমে সংরক্ষিত থাকে। আমাদের নিজস্ব সাপোর্ট টিম ঢাকা (মহাখালী ডিওএইচএস) এবং সিলেট (আল-হামরা শপিং সিটি, জিন্দাবাজার)-এ উপস্থিত রয়েছে এবং সার্বক্ষণিক অন-কল সহায়তা প্রদান করে।",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === "en" ? "Frequently Asked Questions" : "সাধারণ প্রশ্নোত্তর"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            {language === "en"
              ? "Answers to Common Questions from Doctors & Clinics"
              : "চিকিৎসক ও ক্লিনিক কর্তৃপক্ষের প্রয়োজনীয় তথ্যাবলী"}
          </h2>
          <p className="text-sm text-slate-600">
            {language === "en"
              ? "Have more questions? Our clinical implementation consultants are ready to assist."
              : "অন্য যেকোনো তথ্যের জন্য আমাদের সাপোর্ট সেন্টারে সরাসরি যোগাযোগ করুন।"}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900 leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/60 border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
