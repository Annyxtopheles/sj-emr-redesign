import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogsData } from "@/data/blogs";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, CheckCircle2, User, ChevronRight } from "lucide-react";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogsData.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col bg-[#fafbfc]">
      {/* Sticky Header with defaults */}
      <Navbar language="en" />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-3.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blogs" className="hover:text-emerald-700 transition-colors">
              Blogs
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-medium truncate max-w-xs sm:max-w-md">
              {blog.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="flex-1 py-10 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category & Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {blog.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {blog.readTime}
            </span>
          </div>

          {/* Article Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 text-balance">
            {blog.title}
          </h1>

          {/* Author Strip */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                {blog.author.name[0]}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{blog.author.name}</div>
                <div className="text-xs text-slate-500">{blog.author.role}</div>
              </div>
            </div>

            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Blogs</span>
            </Link>
          </div>

          {/* Featured Hero Banner Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-md mb-10 border border-slate-200">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-slate max-w-none">
            {/* Lead paragraph */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 font-normal bg-emerald-50/40 p-6 rounded-2xl border-l-4 border-emerald-600">
              {blog.content.lead}
            </p>

            {/* Sections */}
            {blog.content.sections.map((section, sIdx) => (
              <div key={sIdx} className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}

                {section.list && (
                  <div className="space-y-2.5 my-5 pl-1">
                    {section.list.map((item, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {section.subsections && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    {section.subsections.map((sub, subIdx) => (
                      <div
                        key={subIdx}
                        className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs"
                      >
                        <h3 className="text-sm font-bold text-slate-900 mb-2.5 text-emerald-900">
                          {sub.title}
                        </h3>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {sub.items.map((it, itIdx) => (
                            <li key={itIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {section.image && (
                  <figure className="my-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2 sm:p-3 shadow-xs">
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-white">
                      <Image
                        src={section.image}
                        alt={section.imageCaption || section.heading}
                        fill
                        className="object-contain"
                      />
                    </div>
                    {section.imageCaption && (
                      <figcaption className="text-center text-xs text-slate-500 mt-2.5 font-medium">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
            ))}

            {/* Conclusion Callout */}
            <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-950 text-white shadow-lg">
              <h3 className="text-lg font-bold mb-2">Conclusion & Key Takeaway</h3>
              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed mb-6">
                {blog.content.conclusion}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors"
                >
                  <span>Book a Live Zoom Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
                >
                  <span>Explore Pricing Plans</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Author Bio Box */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg shrink-0">
              {blog.author.name[0]}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{blog.author.name}</div>
              <p className="text-xs text-emerald-700 font-semibold mb-1">{blog.author.role}</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Specializes in electronic medical records, clinical SaaS architecture, and healthcare automation. Dedicated to helping medical practices across Bangladesh modernize their day-to-day operations.
              </p>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Recommended Reading</h3>
              <Link
                href="/blogs"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
              >
                <span>View all articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blogs/${rel.slug}`}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-slate-100 mb-3">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="300px"
                        className="object-cover group-hover:scale-103 transition-transform"
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-2">
                      {rel.readTime}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Global Footer */}
      <Footer language="en" />
    </main>
  );
}
