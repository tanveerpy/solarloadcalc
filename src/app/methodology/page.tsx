"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, LineChart, Zap, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

export default function MethodologyPage() {
    return (
        <div className="bg-[#F7F9FA] min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="max-w-4xl mb-24"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-[#32B5A4]/10 border border-[#32B5A4]/20 rounded-full mb-8">
                        <Cpu size={14} className="text-[#32B5A4]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#32B5A4]">Technical Specification</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl lg:text-7xl font-bold tracking-tight text-[#0C2340] leading-[1.1] mb-8"
                    >
                        The Math Behind <br />
                        <span className="text-[#32B5A4]">Solar Clarity</span>.
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-slate-700 font-medium leading-relaxed max-w-2xl"
                    >
                        Our ROI engine doesn't just subtract costs. It simulates your home as a 25-year financial asset, accounting for hardware physics and macro-economic factors.
                    </motion.p>
                </motion.div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            icon: LineChart,
                            title: "Hardware Degradation",
                            desc: "We apply a standard 0.5% annual efficiency loss to PV modules, ensuring your year-20 projections are conservative and realistic."
                        },
                        {
                            icon: Zap,
                            title: "Utility Escalation",
                            desc: "Our model assumes a 4.2% average annual increase in grid electricity costs, based on EIA historical data."
                        },
                        {
                            icon: Database,
                            title: "Incentive Logic",
                            desc: "We verify the 30% Federal ITC calculations against the latest IRS guidelines to ensure precision in net cost reporting."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="p-10 bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-12 h-12 bg-[#32B5A4]/10 rounded-xl flex items-center justify-center text-[#32B5A4] mb-6">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0C2340] mb-4">{item.title}</h3>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Formula Breakdown */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 bg-[#0C2340] rounded-[3rem] text-white overflow-hidden relative"
                >
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl font-bold mb-8">Engine Architecture v5.0</h2>
                        <div className="space-y-12 mb-12 text-slate-300">
                            <div>
                                <p className="text-[#32B5A4] font-bold uppercase tracking-widest text-[10px] mb-3">01 / Solar Production Flow</p>
                                <p className="leading-relaxed">Sunlight is converted to kWh based on the PVWatts® v8 model, adjusting for DC/AC derate factors and inverter clipping thresholds.</p>
                            </div>
                            <div>
                                <p className="text-[#32B5A4] font-bold uppercase tracking-widest text-[10px] mb-3">02 / Net Metering (NEM) Calculus</p>
                                <p className="leading-relaxed">We simulate the financial offset of grid dependency by mapping production peaks against typical residential load profiles.</p>
                            </div>
                            <div>
                                <p className="text-[#32B5A4] font-bold uppercase tracking-widest text-[10px] mb-3">03 / Cumulative Savings</p>
                                <p className="leading-relaxed">The engine performs an iterative sum of avoided costs over 300 months, discounted for maintenance reserve funds.</p>
                            </div>
                        </div>
                        <Link href="/" className="inline-flex items-center gap-4 py-4 px-8 bg-[#32B5A4] text-white rounded-xl font-bold hover:bg-[#289486] transition-all group">
                            Test The Engine <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                    {/* Decorative Background Element */}
                    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#32B5A4] opacity-10 rounded-full blur-3xl" />
                </motion.section>
            </div>
        </div>
    );
}
