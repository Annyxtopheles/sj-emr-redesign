"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, Video, UserCheck, Shield, Copy, Check } from "lucide-react";

interface VideoItem {
  id: string;
  titleEn: string;
  titleBn: string;
  speakerEn: string;
  speakerBn: string;
  summaryEn: string;
  summaryBn: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: "vg7AoWvj5ug",
    titleEn: "Doctors' Electronic Medical Records Now in Bangladesh | SJ EMR",
    titleBn: "ডাক্তারদের ইলেক্ট্রনিক মেডিকেল রেকর্ড এখন বাংলাদেশে! | SJ EMR",
    speakerEn: "SJ EMR",
    speakerBn: "এস জে ইএমআর",
    summaryEn: "A step-by-step walkthrough showing prescription creation, patient history lookup, and chamber workflow in SJ EMR.",
    summaryBn: "এস জে ইএমআর সফটওয়্যারে দ্রুত ডিজিটাল প্রেসক্রিপশন তৈরি ও রোগীর ইতিহাস ব্যবস্থাপনার বাস্তব ডেমো।",
  },
  {
    id: "m7fBJIk9rO0",
    titleEn: "Normal Delivery After C-Section | Dr. Nusrat Ara Yusuf",
    titleBn: "সিজারের পর নরমাল ডেলিভারির সম্ভাবনা কতটুকু? | ডা: নুসরাত আরা ইউসুফ",
    speakerEn: "Dr. Nusrat Ara Yusuf & Shahabuddin Shuvo",
    speakerBn: "ডা: নুসরাত আরা ইউসুফ ও শাহাবুদ্দিন শুভ",
    summaryEn: "Discussion on maternal healthcare and the critical role of maintaining patient treatment history for safe clinical decisions.",
    summaryBn: "মাতৃত্বকালীন স্বাস্থ্য সুরক্ষা এবং রোগীর পূর্ববর্তী চিকিৎসার ইতিহাস সংরক্ষণের ওপর বিশেষজ্ঞ আলোচনা।",
  },
  {
    id: "oslmaV7ZTpA",
    titleEn: "Barrister Suman on the Importance of EMR | SJ EMR",
    titleBn: "ব্যারিস্টার সুমন তুলে ধরলেন EMR এর গুরুত্ব | SJ EMR",
    speakerEn: "Barrister Syed Sayedul Haque Suman",
    speakerBn: "ব্যারিস্টার সৈয়দ সায়েদুল হক সুমন",
    summaryEn: "Advocating for digital healthcare transformation and how systematic patient record-keeping prevents medical negligence.",
    summaryBn: "ডিজিটাল স্বাস্থ্যসেবার প্রয়োজনীয়তা এবং চিকিৎসায় রোগীর রেকর্ড সংরক্ষণের সুদূরপ্রসারী প্রভাব নিয়ে বিশেষ আলোচনা।",
  },
  {
    id: "nN1yq4bQYtM",
    titleEn: "SJ EMR - Complete Doctor Software Walkthrough",
    titleBn: "এস জে ইএমআর - সম্পূর্ণ সফটওয়্যার পরিচিতি",
    speakerEn: "SJ EMR Official",
    speakerBn: "এস জে ইএমআর অফিশিয়াল",
    summaryEn: "Comprehensive demonstration of online appointment booking, customized pad printing, and SMS notifications.",
    summaryBn: "অনলাইন অ্যাপয়েন্টমেন্ট বুকিং, প্যাড প্রিন্টিং এবং স্বয়ংক্রিয় এসএমএস সেবার বিস্তারিত ওভারভিউ।",
  },
];

interface VideoShowcaseProps {
  language: "en" | "bn";
}

export default function VideoShowcase({ language }: VideoShowcaseProps) {
  const [activeVideoId, setActiveVideoId] = useState<string>(VIDEOS[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const activeVideo = VIDEOS.find((v) => v.id === activeVideoId) || VIDEOS[0];

  const handleSelectVideo = (id: string) => {
    setActiveVideoId(id);
    setIsPlaying(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://youtu.be/${activeVideo.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="videos" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80 text-slate-900 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Video className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === "en" ? "Videos" : "ভিডিও"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
              {language === "en"
                ? "Video Demos & Talks"
                : "ভিডিও ডেমো ও চিকিৎসকদের আলোচনা"}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 text-pretty">
              {language === "en"
                ? "Watch SJ EMR in action and hear doctors discuss patient safety and electronic medical records in\u00A0Bangladesh."
                : "সরাসরি সফটওয়্যার ব্যবহার পদ্ধতি এবং চিকিৎসা সেবায় ডিজিটাল রেকর্ডের ভূমিকা নিয়ে বিশেষজ্ঞদের আলোচনা দেখুন।"}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://www.youtube.com/channel/UC6TJ6W1BinAd2oVa358Vc4w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-all border border-slate-200 hover:border-red-500/40 shadow-xs group"
            >
              <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.2" />
              </span>
              <span>{language === "en" ? "Official YouTube Channel" : "অফিসিয়াল ইউটিউব চ্যানেল"}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </a>
          </div>
        </div>

        {/* Video Theatre & Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Theatre Player */}
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Screen Container 16:9 */}
            <div className="relative aspect-video w-full bg-black overflow-hidden">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                  title={language === "en" ? activeVideo.titleEn : activeVideo.titleBn}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsPlaying(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsPlaying(true);
                    }
                  }}
                  aria-label={language === "en" ? `Play video: ${activeVideo.titleEn}` : `ভিডিও চালান: ${activeVideo.titleBn}`}
                  className="relative w-full h-full cursor-pointer group focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`}
                    alt={language === "en" ? activeVideo.titleEn : activeVideo.titleBn}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                    priority
                  />
                  {/* Subtle Dark Vignette */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                  {/* Clean YouTube-style Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-12 rounded-xl bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-200">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Video Details Card */}
            <div className="p-6 space-y-3 bg-slate-900 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium text-slate-300">
                    {language === "en" ? activeVideo.speakerEn : activeVideo.speakerBn}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors cursor-pointer"
                    title="Copy video link"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">{language === "en" ? "Copied" : "কপি হয়েছে"}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>{language === "en" ? "Share" : "শেয়ার"}</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`https://youtu.be/${activeVideo.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {language === "en" ? activeVideo.titleEn : activeVideo.titleBn}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {language === "en" ? activeVideo.summaryEn : activeVideo.summaryBn}
              </p>
            </div>
          </div>

          {/* Side Playlist */}
          <div className="lg:col-span-4 space-y-3">
            {VIDEOS.map((video) => {
              const isSelected = video.id === activeVideoId;
              return (
                <button
                  key={video.id}
                  onClick={() => handleSelectVideo(video.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex gap-3.5 items-center group cursor-pointer ${
                    isSelected
                      ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20 border-l-4 border-l-emerald-500"
                      : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-700 shadow-2xs"
                  }`}
                >
                  {/* Thumbnail Preview */}
                  <div className="relative w-28 h-18 sm:w-32 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-black border border-slate-200">
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={language === "en" ? video.titleEn : video.titleBn}
                      fill
                      sizes="130px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        isSelected ? "bg-emerald-500 text-slate-950" : "bg-black/70 text-white"
                      }`}>
                        <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Clean Content: Title & Channel only */}
                  <div className="min-w-0 flex-1 space-y-1">
                    <h4 className={`text-xs font-semibold line-clamp-2 leading-snug transition-colors ${
                      isSelected ? "text-emerald-700 font-bold" : "text-slate-900 group-hover:text-emerald-700"
                    }`}>
                      {language === "en" ? video.titleEn : video.titleBn}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      {language === "en" ? video.speakerEn : video.speakerBn}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Chamber Demo Card */}
            <div className="mt-3 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/90 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === "en" ? "Want a live demo?" : "লাইভ ডেমো দেখতে চান?"}</span>
              </div>
              <p className="text-xs text-emerald-950/80 leading-relaxed">
                {language === "en"
                  ? "Book a free 15-minute 1-on-1 walkthrough tailored to your specialty."
                  : "আপনার স্পেশালিটি অনুযায়ী সফটওয়্যার ব্যবহারের ফ্রি লাইভ ডেমো শিডিউল করুন।"}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                {language === "en" ? "Book Demo" : "ডেমো বুক করুন"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
