"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogsData } from "@/data/blogs";
import { Calendar, Clock, ArrowRight, User, Sparkles } from "lucide-react";

export default function BlogsPage() {
  const [language, setLanguage] = useState<"en" | "bn">("bn");
  const featuredBlog = blogsData[0];
  const regularBlogs = blogsData.slice(1);

  return (
    <main className="min-h-screen flex flex-col bg-[#fafbfc]" lang={language}>
      {/* Sticky Header */}
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Main Blog Content Container - Straight into blogs */}
      <section className="pt-8 pb-16 lg:pt-10 lg:pb-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article Card */}
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{language === "en" ? "Featured Article" : "নির্বাচিত আর্টিকেল"}</span>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
              <div className="relative aspect-[16/9] lg:aspect-auto lg:col-span-7 bg-slate-100 overflow-hidden">
                <Image
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              <div className="p-7 sm:p-10 lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                    <span className="font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                      {featuredBlog.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {featuredBlog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {featuredBlog.readTime}
                    </span>
                  </div>

                  <Link href={`/blogs/${featuredBlog.slug}`}>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-3 text-balance">
                      {featuredBlog.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 text-pretty">
                    {featuredBlog.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                      {featuredBlog.author.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{featuredBlog.author.name}</div>
                      <div className="text-[11px] text-slate-500">{featuredBlog.author.role}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${featuredBlog.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 group/link"
                  >
                    <span>{language === "en" ? "Read Article" : "সম্পূর্ণ পড়ুন"}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Articles Grid */}
          <div className="mb-16">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              {language === "en" ? "Recent Publications & Guides" : "সাম্প্রতিক আর্টিকেল ও গাইড"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-103 transition-transform duration-400"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-2.5 text-[11px] text-slate-500 mb-3">
                        <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                          {blog.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {blog.date}
                        </span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>

                      <Link href={`/blogs/${blog.slug}`}>
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2.5 text-balance">
                          {blog.title}
                        </h4>
                      </Link>

                      <p className="text-xs text-slate-600 leading-relaxed text-pretty">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>{blog.author.name}</span>
                    </div>

                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                    >
                      <span>{language === "en" ? "Read More" : "পড়ুন"}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Practice CTA */}
          <div className="rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white p-8 sm:p-12 shadow-xl border border-emerald-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {language === "en"
                  ? "Transform Your Medical Chamber with SJ EMR"
                  : "আপনার চেম্বারকে আজই ডিজিটাল ও গতিশীল করুন"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === "en"
                  ? "Experience 60-second e-prescribing, the Bangladeshi drug directory, and automated Zoom telemedicine. Free 14-day trial with full support."
                  : "মাত্র ৬০ সেকেন্ডে প্রেসক্রিপশন প্রিন্ট, ড্রাগ ডেটাবেস ও জুম টেলিমেডিসিনের অভিজ্ঞতা নিন। ১৪ দিনের ফ্রি ট্রায়াল শুরু করুন।"}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/#contact"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs sm:text-sm font-bold transition-all shadow-md"
              >
                {language === "en" ? "Book 1-on-1 Zoom Demo" : "লাইভ জুম ডেমো বুক করুন"}
              </Link>
              <Link
                href="/#pricing"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-all"
              >
                {language === "en" ? "View Pricing Plans" : "মূল্য তালিকা"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer language={language} />
    </main>
  );
}
