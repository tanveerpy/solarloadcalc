"use client";

import React from 'react';
import { ArticleData } from '@/logic/cms-logic';
import { AdSense } from '@/components/AdSense';
import { Tag, ArrowLeft, Share2, Bookmark, ChevronRight, User, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

interface ArticleClientProps {
    article: ArticleData;
}

export default function ArticleClient({ article }: ArticleClientProps) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <article className="max-w-7xl mx-auto pb-32 px-6 lg:px-12 bg-white min-h-screen">
            {/* Reading Progress */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#32B5A4] origin-left z-50 shadow-sm"
                style={{ scaleX }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-12">
                {/* Left Margin / Meta */}
                <aside className="lg:col-span-3 space-y-12">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <Link
                            href="/knowledge-hub"
                            className="group flex items-center gap-4 text-slate-600 hover:text-[#32B5A4] transition-all text-xs font-bold uppercase tracking-widest"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                            Knowledge Hub
                        </Link>
                    </motion.div>

                    <div className="space-y-10 pt-12 sticky top-24">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Authored By</span>
                            <span className="text-[13px] font-bold text-[#0C2340] flex items-center gap-2">
                                <User size={14} className="text-[#32B5A4]" />
                                {article.author}
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Published On</span>
                            <span className="text-[13px] font-bold text-slate-700 flex items-center gap-2">
                                <Calendar size={14} className="text-[#32B5A4]" />
                                {article.date}
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Share Impact</span>
                            <div className="flex gap-2">
                                {[Share2, Bookmark].map((Icon, idx) => (
                                    <button key={idx} className="w-10 h-10 border border-slate-100 bg-slate-50/50 rounded-xl flex items-center justify-center hover:bg-[#32B5A4] hover:text-white transition-all shadow-sm">
                                        <Icon size={16} />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <AdSense slot="article-left-rail" format="rectangle" />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-9">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={{
                            animate: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-[#32B5A4]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#32B5A4]">{article.category}</span>
                        </motion.div>

                        {article.banner && (
                            <motion.div variants={fadeInUp} className="mb-8">
                                <img
                                    src={article.banner}
                                    alt={article.bannerAlt || article.title}
                                    width="1024"
                                    height="576"
                                    loading="eager"
                                    className="rounded-3xl shadow-2xl w-full h-auto object-cover aspect-video"
                                />
                            </motion.div>
                        )}

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl lg:text-7xl font-bold tracking-tight text-[#0C2340] mb-8 leading-[1.1]"
                        >
                            {article.title}
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl text-slate-700 font-medium leading-relaxed mb-16 border-l-4 border-[#32B5A4] pl-8 py-2">
                            {article.excerpt}
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="prose prose-slate max-w-none 
                                prose-headings:text-[#0C2340] prose-headings:font-bold prose-headings:tracking-tight
                                prose-p:text-slate-700 prose-p:text-[17px] prose-p:leading-relaxed prose-p:font-medium
                                prose-strong:text-[#0C2340] prose-strong:font-bold
                                prose-blockquote:border-[#32B5A4] prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:rounded-r-xl
                                prose-li:text-slate-700
                                prose-img:rounded-3xl prose-img:shadow-2xl"
                            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
                        />

                        {/* Article Footer Sections */}
                        <section className="mt-32 pt-20 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-10 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col justify-between group cursor-pointer hover:border-[#32B5A4]/50 transition-all shadow-sm">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight mb-4 text-[#0C2340]">Research Library</h3>
                                    <p className="text-slate-700 text-sm font-medium leading-relaxed">Continue exploring technical guides to maximize your solar investment clarity.</p>
                                </div>
                                <Link href="/knowledge-hub" className="inline-flex items-center gap-4 mt-8 font-bold text-xs tracking-widest text-[#32B5A4] group-hover:gap-6 transition-all">
                                    Browse Hub <ChevronRight size={16} />
                                </Link>
                            </div>

                            <div className="p-10 bg-[#32B5A4] text-white rounded-[2rem] flex flex-col justify-between group cursor-pointer hover:bg-[#289486] transition-all shadow-xl shadow-teal-500/20">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Solar ROI Engine</h3>
                                    <p className="text-teal-50 text-sm font-medium leading-relaxed">Run a personalized simulation based on your utility rates and system capacity.</p>
                                </div>
                                <Link href="/" className="inline-flex items-center gap-4 mt-8 font-bold text-xs tracking-widest text-white group-hover:gap-6 transition-all">
                                    Calculate ROI <ArrowRight size={16} />
                                </Link>
                            </div>
                        </section>

                        <div className="mt-12">
                            <AdSense slot="article-bottom-full" />
                        </div>
                    </motion.div>
                </main>
            </div>
        </article>
    );
}
