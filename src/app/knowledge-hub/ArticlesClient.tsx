"use client";

import React from 'react';
import { ArticleMetadata } from '@/logic/cms-logic';
import { ArticleCard } from '@/components/ArticleCard';
import { AdSense } from '@/components/AdSense';
import { Search, Filter, BookOpen, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

interface ArticlesClientProps {
    articles: ArticleMetadata[];
}

export default function ArticlesClient({ articles }: ArticlesClientProps) {
    return (
        <div className="bg-[#F7F9FA] min-h-screen">
            <div className="max-w-7xl mx-auto pb-32 px-6 lg:px-12 pt-4">
                {/* ECO-SAAS HUB HERO */}
                <motion.header
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                    className="py-12 lg:py-16 border-b border-slate-200/60 mb-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-[#32B5A4]/10 border border-[#32B5A4]/20 rounded-full mb-6">
                                <BookOpen size={14} className="text-[#32B5A4]" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#32B5A4]">Solar Intelligence Hub</span>
                            </motion.div>

                            <motion.h1
                                variants={fadeInUp}
                                className="text-5xl lg:text-7xl font-bold tracking-tight text-[#0C2340] leading-[1.1] mb-8"
                            >
                                Empowering Your <br />
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-[#32B5A4]">Solar Journey</span>
                                    <div className="absolute bottom-2 left-0 w-full h-3 bg-[#32B5A4]/10 -z-10" />
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="text-lg text-slate-700 font-medium max-w-xl leading-relaxed"
                            >
                                Explore 32+ deep-dive technical guides designed to protect your investment.
                                From local regulatory updates to advanced ROI modeling.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={fadeInUp}
                            className="lg:col-span-5 bg-white border border-[#E3E6E9] p-8 rounded-[2rem] shadow-xl shadow-slate-200/50"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#F7F9FA] rounded-2xl flex items-center justify-center text-[#32B5A4]">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#0C2340]">Daily Updates</p>
                                        <p className="text-xs text-slate-400">Market & Regulatory Intel</p>
                                    </div>
                                </div>
                                <div className="h-[1px] bg-slate-100" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[#F7F9FA] p-4 rounded-xl">
                                        <p className="text-sm font-bold text-[#0C2340]">30+</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase">Expert Guides</p>
                                    </div>
                                    <div className="bg-[#F7F9FA] p-4 rounded-xl">
                                        <p className="text-sm font-bold text-[#32B5A4]">2026</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase">Tax Ready</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.header>

                {/* Hub Controls */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
                    <div className="lg:col-span-9 relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                        <input
                            type="text"
                            placeholder="Search Research library..."
                            className="w-full bg-white border border-[#E3E6E9] p-5 pl-16 rounded-xl focus:outline-none focus:border-[#32B5A4] focus:ring-4 focus:ring-[#32B5A4]/5 transition-all text-[#0C2340] font-bold text-sm shadow-sm"
                        />
                    </div>
                    <button className="lg:col-span-3 bg-white border border-[#E3E6E9] p-5 rounded-xl flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0C2340] hover:border-[#32B5A4] transition-all group shadow-sm">
                        <Filter size={16} className="text-[#32B5A4]" /> Advanced Filters
                    </button>
                </div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {articles.map((article, idx) => (
                        <motion.div variants={fadeInUp} key={article.slug} className="flex flex-col h-full">
                            <ArticleCard article={article} />
                            {/* Inject ads every few articles */}
                            {(idx + 1) % 6 === 0 && (
                                <div className="col-span-full my-12 border-y border-slate-200/60 py-12">
                                    <AdSense slot={`articles-grid-${idx}`} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
