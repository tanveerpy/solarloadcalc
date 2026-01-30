"use client";

import { SolarCalculator } from "@/components/SolarCalculator";
import { AdSense } from "@/components/AdSense";
import { motion } from "framer-motion";
import {
    Zap,
    ShieldCheck,
    Cpu,
    ChevronRight,
    LineChart,
    Sun,
    Clock,
    ArrowRight,
    BookOpen
} from "lucide-react";
import Link from "next/link";
import React from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function HomeClient() {
    return (
        <div className="bg-[#F7F9FA]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* HERO SECTION - RESEARCH DRIVEN ECO-SAAS */}
                <section className="pt-8 pb-32 lg:pt-16">
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                        className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                    >
                        <div className="lg:col-span-7">
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-full mb-8">
                                <Sun size={14} className="text-blue-600" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">Trusted Solar Economics v2.1</span>
                            </motion.div>

                            <motion.h1
                                variants={fadeInUp}
                                className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8"
                            >
                                Master Your <span className="text-[#32B5A4]">Solar ROI</span> with Precision.
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="text-lg text-slate-700 mb-10 max-w-xl leading-relaxed font-medium"
                            >
                                Stop guessing your energy future. Our industrial-grade analysis engine calculates your exact payback period, tax credits, and 25-year savings in seconds.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                <a href="#engine" className="px-8 py-4 bg-[#32B5A4] hover:bg-[#289486] text-white font-bold rounded-xl shadow-lg shadow-teal-500/20 transition-all flex items-center gap-2">
                                    Calculate My ROI <ArrowRight size={18} />
                                </a>
                                <Link href="/knowledge-hub" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all">
                                    Explore Guides
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">30%</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Federal Credit</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">6-8yr</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg Payback</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">25yr</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Savings Lock</span>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div variants={fadeInUp} className="lg:col-span-5 relative group">
                            <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl blur-2xl group-hover:bg-blue-600/10 transition-all" />
                            <div className="relative border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/clean_solar_rooftop_modern.png"
                                    alt="Modern Solar Architecture"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl border border-white/20 shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#32B5A4] rounded-lg flex items-center justify-center text-white">
                                            <LineChart size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900 dark:text-white">ROI Verified</p>
                                            <p className="text-[10px] text-slate-500">Based on 2026 local utility data</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* FEATURE SECTION - TRUST & EDUCATION */}
                <section className="py-32 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Designed for Financial Clarity.</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">We combine local solar potential with complex utility mathematics to give you a roadmap you can bank on.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-blue-500/50 transition-colors group">
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Tier-1 Accuracy</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">Calculations include system degradation, maintenance, and compounding utility inflation rates over 25 years.</p>
                        </div>
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-blue-500/50 transition-colors group">
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Payback Windows</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">Instantly see your break-even year based on Net Metering policies and the 30% Federal ITC benefit.</p>
                        </div>
                        <div className="p-8 bg-white lg:bg-blue-600 dark:bg-slate-900 border border-slate-200 lg:border-blue-600 dark:border-slate-800 rounded-3xl hover:border-blue-500/50 transition-colors group">
                            <div className="w-12 h-12 bg-blue-50 lg:bg-white/10 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 lg:text-white mb-6 group-hover:scale-110 transition-transform">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 lg:text-white">Smart Integration</h3>
                            <p className="text-slate-600 lg:text-blue-100 text-sm leading-relaxed font-medium">Model battery storage scenarios and smart home efficiency hooks to further accelerate your return.</p>
                        </div>
                    </div>
                </section>

                {/* CALCULATOR SECTION */}
                <section id="engine" className="py-32 scroll-mt-20">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-blue-600" />
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">ROI Engine v2.1</span>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight">Run Your Simulation.</h2>
                        </div>
                        <p className="text-slate-500 max-w-xs text-sm italic">Simulate your system performance based on US National average sun hours and utility rates.</p>
                    </div>

                    <div className="p-8 lg:p-12 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-[2.5rem]">
                        <SolarCalculator />
                    </div>
                </section>

                {/* FAQ SECTION - SEO HARDENING */}
                <section className="py-32 border-t border-slate-100 dark:border-slate-800">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-[#0C2340] mb-16 text-center">ROI Intelligence FAQ</h2>
                        <div className="space-y-8">
                            <div className="p-8 bg-white border border-[#E3E6E9] rounded-3xl">
                                <h3 className="text-xl font-bold text-[#0C2340] mb-4">How is the solar payback period calculated?</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    The solar payback period is calculated by dividing the net cost of your solar system (after incentives like the 30% Federal Tax Credit) by your annual electricity savings. Our engine also factors in utility inflation and system degradation for industrial-grade precision.
                                </p>
                            </div>
                            <div className="p-8 bg-white border border-[#E3E6E9] rounded-3xl">
                                <h3 className="text-xl font-bold text-[#0C2340] mb-4">What is the 2026 Federal Solar Tax Credit (ITC)?</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    The Investment Tax Credit (ITC) allows you to deduct 30% of the cost of installing a solar energy system from your federal taxes. This incentive is currently locked in at 30% through 2032, making it the single largest driver of solar ROI.
                                </p>
                            </div>
                            <div className="p-8 bg-white border border-[#E3E6E9] rounded-3xl">
                                <h3 className="text-xl font-bold text-[#0C2340] mb-4">Is solar still worth it with current utility rates?</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    Yes. As utility rates continue to rise (averaging 3-5% annually), the "avoided cost" of purchasing electricity from the grid increases, which actually accelerates your solar payback period and increases total lifetime savings.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
