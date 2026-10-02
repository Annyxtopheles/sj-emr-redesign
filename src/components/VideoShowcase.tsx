"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, CheckCircle2, Video, Sparkles, UserCheck, Shield } from "lucide-react";

interface VideoItem {
  id: string;
  badgeEn: string;
  badgeBn: string;
  badgeColor: string;
  titleEn: string;
  titleBn: string;
  speakerEn: string;
  speakerBn: string;
  summaryEn: string;
  summaryBn: string;
  keyHighlightEn: string;
  keyHighlightBn: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: "vg7AoWvj5ug",
    badgeEn: "Live Demonstration",
    badgeBn: "সরাসরি ডেমো",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    titleEn: "Doctors' Electronic Medical Records Now in Bangladesh | SJ EMR Walkthrough",
    titleBn: "ডাক্তারদের ইলেক্ট্রনিক মেডিকেল রেকর্ড এখন বাংলাদেশে! | SJ EMR ডেমো",
    speakerEn: "SJ EMR Clinical Systems Team",
    speakerBn: "এস জে ইএমআর ক্লিনিক্যাল সিস্টেমস টিম",
    summaryEn: "Watch how Bangladeshi physicians generate complete, compliant digital prescriptions in under 60 seconds with intelligent dosage templates, ICD-11 diagnostic lookups, and one-click patient history access.",
    summaryBn: "কীভাবে মাত্র ৬০ সেকেন্ডে বাংলা ও ইংরেজিতে নির্ভুল ডিজিটাল প্রেসক্রিপশন তৈরি, ডোজেজ টেমপ্লেট ও রোগীর পূর্ববর্তী ইতিহাস ট্র্যাক করা যায় তা বিস্তারিত দেখুন।",
    keyHighlightEn: "60-Second Rx Creation & Auto-Dose Calculation",
    keyHighlightBn: "৬০ সেকেন্ডে প্রেসক্রিপশন ও অটোমেটিক ডোজ গণনা",
  },
  {
    id: "m7fBJIk9rO0",
    badgeEn: "Clinical Specialist Talk",
    badgeBn: "বিশেষজ্ঞ চিকিৎসকের মতামত",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    titleEn: "Maternal Health & Clinical Decision Support in Practice | Dr. Nusrat Ara Yusuf",
    titleBn: "সিজারের পর নরমাল ডেলিভারির সম্ভাবনা কতটুকু? | ডা: নুসরাত আরা ইউসুফ",
    speakerEn: "Dr. Nusrat Ara Yusuf & Shahabuddin Shuvo",
    speakerBn: "ডা: নুসরাত আরা ইউসুফ ও শাহাবুদ্দিন শুভ",
    summaryEn: "Gynecologist and Obstetrics specialist discusses maternal risk factors, longitudinal diagnostic continuity, and how structured medical records prevent complications across prenatal care.",
    summaryBn: "প্রসূতি ও স্ত্রীরোগ বিশেষজ্ঞ ডা: নুসরাত আরা ইউসুফ রোগীর পূর্ববর্তী চিকিৎসাপত্র সংরক্ষণ এবং মাতৃত্বকালীন স্বাস্থ্য সুরক্ষায় নির্ভুল ডিজিটাল রেকর্ডের ভূমিকা ব্যাখ্যা করছেন।",
    keyHighlightEn: "Maternal History Continuity & Patient Safety",
    keyHighlightBn: "ধারাবাহিক স্বাস্থ্য ইতিহাস ও রোগীর নিরাপত্তা",
  },
  {
    id: "oslmaV7ZTpA",
    badgeEn: "National Health Advocacy",
    badgeBn: "জাতীয় স্বাস্থ্য সচেতনতা",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    titleEn: "Barrister Suman Highlights the Urgent Importance of EMR for Bangladesh",
    titleBn: "ব্যারিস্টার সুমন তুলে ধরলেন EMR এর গুরুত্ব | SJ EMR",
    speakerEn: "Barrister Syed Sayedul Haque Suman",
    speakerBn: "ব্যারিস্টার সৈয়দ সায়েদুল হক সুমন",
    summaryEn: "Prominent lawyer highlights why electronic records are indispensable for transparent healthcare: defending honest physicians against false negligence claims, stopping counterfeit prescriptions, and guaranteeing patient rights.",
    summaryBn: "চিকিৎসক ও রোগী উভয়ের নিরাপত্তা, প্রেসক্রিপশনের জালিয়াতি রোধ এবং চিকিৎসা সেবায় সর্বোচ্চ স্বচ্ছতা নিশ্চিত করতে ইএমআরের প্রয়োজনীয়তা তুলে ধরেছেন ব্যারিস্টার সুমন।",
    keyHighlightEn: "Legal Protection for Doctors & Patient Rights",
    keyHighlightBn: "চিকিৎসকদের আইনি সুরক্ষা ও নির্ভুল চিকিৎসা নিশ্চিতকরণ",
  },
];

interface VideoShowcaseProps {
  language: "en" | "bn";
}

export default function VideoShowcase({ language }: VideoShowcaseProps) {
  const [activeVideoId, setActiveVideoId] = useState<string>(VIDEOS[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const activeVideo = VIDEOS.find((v) => v.id === activeVideoId) || VIDEOS[0];

  const handleSelectVideo = (id: string) => {
    setActiveVideoId(id);
    setIsPlaying(true);
  };

  return (
    <section id="videos" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-b border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>{language === "en" ? "Official Video Library" : "ভিডিও লাইব্রেরি ও উপস্থাপনা"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === "en" ? (
                <>
                  See SJ EMR in Action & Hear From{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    Healthcare Leaders
                  </span>
                </>
              ) : (
                <>
                  ভিডিওতে দেখুন এস জে ইএমআর এবং শুনুন{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    বিশেষজ্ঞদের মতামত
                  </span>
                </>
              )}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {language === "en"
                ? "Live software demonstrations, clinical specialist discussions, and national advocacy on why electronic medical records are vital for modern Bangladesh."
                : "সরাসরি সফটওয়্যার ব্যবহার পদ্ধতি, বিশেষজ্ঞ চিকিৎসকের ক্লিনিক্যাল অভিজ্ঞতা এবং বাংলাদেশে ডিজিটাল স্বাস্থ্যসেবার রূপান্তর নিয়ে শীর্ষ বক্তাদের বার্তা।"}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://www.youtube.com/channel/UC6TJ6W1BinAd2oVa358Vc4w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white text-xs font-semibold transition-all shadow-lg shadow-red-950/40 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>{language === "en" ? "Visit Official YouTube Channel" : "অফিসিয়াল ইউটিউব চ্যানেল"}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Video Theatre & Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Theatre Player (8 cols on lg) */}
          <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Video Screen Container 16:9 */}
            <div className="relative aspect-video w-full bg-black overflow-hidden">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
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
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                    priority
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Pulsing Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-emerald-500/20 animate-ping" />
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/40 group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Overlay Title Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm border border-white/10 font-medium">
                      {language === "en" ? "Click to Play Full HD" : "প্লে করতে ক্লিক করুন"}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/80 text-slate-950 font-bold">
                      YouTube HD
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Video Details Card */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${activeVideo.badgeColor}`}>
                  {language === "en" ? activeVideo.badgeEn : activeVideo.badgeBn}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === "en" ? activeVideo.speakerEn : activeVideo.speakerBn}</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {language === "en" ? activeVideo.titleEn : activeVideo.titleBn}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {language === "en" ? activeVideo.summaryEn : activeVideo.summaryBn}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{language === "en" ? activeVideo.keyHighlightEn : activeVideo.keyHighlightBn}</span>
                </div>
                <a
                  href={`https://youtu.be/${activeVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{language === "en" ? "Open on YouTube" : "ইউটিউবে খুলুন"}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Side Playlist (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="px-1 text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>{language === "en" ? "Featured Playlist (3)" : "বাছাইকৃত ভিডিও সমূহ (৩)"}</span>
              <span className="text-emerald-400 font-mono">1080p HD</span>
            </div>

            <div className="space-y-3">
              {VIDEOS.map((video, idx) => {
                const isSelected = video.id === activeVideoId;
                return (
                  <button
                    key={video.id}
                    onClick={() => handleSelectVideo(video.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex gap-3.5 items-start group ${
                      isSelected
                        ? "bg-slate-900 border-emerald-500/60 shadow-lg shadow-emerald-950/30 ring-1 ring-emerald-500/30"
                        : "bg-slate-900/50 border-slate-800 hover:bg-slate-900 hover:border-slate-700"
                    }`}
                  >
                    {/* Thumbnail Preview */}
                    <div className="relative w-28 h-18 sm:w-32 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-black border border-slate-800">
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
                      <div className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/80 text-[10px] text-slate-200 font-mono">
                        {idx === 0 ? "Walkthrough" : idx === 1 ? "Interview" : "Advocacy"}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold border ${video.badgeColor}`}>
                          {language === "en" ? video.badgeEn : video.badgeBn}
                        </span>
                      </div>
                      <h4 className={`text-xs font-bold line-clamp-2 leading-snug transition-colors ${
                        isSelected ? "text-emerald-300" : "text-white group-hover:text-slate-200"
                      }`}>
                        {language === "en" ? video.titleEn : video.titleBn}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate">
                        {language === "en" ? video.speakerEn : video.speakerBn}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Chamber Conversion Mini Card */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-900/60 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>{language === "en" ? "Live Chamber Demonstration" : "লাইভ চেম্বার ডেমো"}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === "en"
                  ? "Want to see how SJ EMR handles your specific medical specialty and prescription pad? Book a free 1-on-1 walkthrough."
                  : "আপনার স্পেশালিটি ও নিজস্ব প্রেসক্রিপশন প্যাড অনুযায়ী কীভাবে সিস্টেম কাজ করবে তা সরাসরি দেখতে ফ্রি ডেমো বুক করুন।"}
              </p>
              <a
                href="#demo"
                className="inline-flex items-center justify-center w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-emerald-950/30"
              >
                {language === "en" ? "Schedule 1-on-1 Demo" : "ফ্রি ডেমো শিডিউল করুন"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
