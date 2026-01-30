"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, ShieldCheck, Users, Globe } from 'lucide-react';

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

export default function AboutPage() {
    return (
        <div className="bg-[#F7F9FA] min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="max-w-3xl mx-auto text-center mb-24"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-[#32B5A4]/10 border border-[#32B5A4]/20 rounded-full mb-8">
                        <Sun size={14} className="text-[#32B5A4]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#32B5A4]">Our Mission</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl lg:text-7xl font-bold tracking-tight text-[#0C2340] leading-[1.1] mb-8"
                    >
                        Transparency in <span className="text-[#32B5A4]">Energy Economics</span>.
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-slate-700 font-medium leading-relaxed"
                    >
                        We believe that the transition to renewable energy should be driven by data, not sales pitches. Solar Payback was built to provide homeowners with industrial-grade financial clarity.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="p-12 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-200/50"
                    >
                        <div className="w-12 h-12 bg-[#32B5A4]/10 rounded-2xl flex items-center justify-center text-[#32B5A4] mb-8">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0C2340] mb-6">Objective Analysis</h3>
                        <p className="text-slate-700 leading-relaxed font-medium">
                            Our algorithms are independent of any solar installer. We use local utility rates, historical sun data, and verified hardware degradation models to ensure your ROI projection is grounded in reality.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="p-12 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-200/50"
                    >
                        <div className="w-12 h-12 bg-[#32B5A4]/10 rounded-2xl flex items-center justify-center text-[#32B5A4] mb-8">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0C2340] mb-6">Sustainable Future</h3>
                        <p className="text-slate-700 leading-relaxed font-medium">
                            By making the economics of solar easy to understand, we accelerate the global transition to clean energy. We aim to be the trusted verification layer for residential solar investments.
                        </p>
                    </motion.div>
                </div>

                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="py-24 border-t border-slate-200"
                >
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-[#0C2340] mb-8">Built by Analysts, for Homeowners.</h2>
                            <p className="text-slate-700 text-lg leading-relaxed font-medium mb-8">
                                Solar Payback started as a small internal tool used by energy consultants to verify installer claims. Today, it serves thousands of homeowners monthly, providing the technical clarity needed to sign contracts with confidence.
                            </p>
                            <div className="flex gap-12">
                                <div>
                                    <p className="text-4xl font-bold text-[#32B5A4] mb-2">15k+</p>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Simulations Run</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-[#32B5A4] mb-2">99%</p>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Rate Accuracy</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 bg-[#0C2340] rounded-[3rem] p-12 text-white">
                            <Users size={48} className="text-[#32B5A4] mb-8" />
                            <blockquote className="text-2xl font-medium leading-relaxed mb-8 italic">
                                "The goal isn't just to save money—it's to understand exactly how your home contributes to a decentralized, resilient power grid."
                            </blockquote>
                            <p className="font-bold uppercase tracking-widest text-xs text-slate-400">Engineering Team @ Solar Payback</p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
