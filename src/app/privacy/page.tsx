"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function PrivacyPage() {
    return (
        <div className="bg-[#F7F9FA] min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-[#32B5A4]/10 border border-[#32B5A4]/20 rounded-full mb-8">
                        <Lock size={14} className="text-[#32B5A4]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#32B5A4]">Data Privacy</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl font-bold tracking-tight text-[#0C2340] mb-8"
                    >
                        Privacy Policy
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-16">
                        Last Updated: January 30, 2026
                    </motion.p>

                    <div className="prose prose-slate max-w-none prose-headings:text-[#0C2340] prose-p:text-slate-700 prose-p:font-medium prose-p:leading-relaxed">
                        <motion.section variants={fadeInUp} className="mb-16">
                            <h2 className="text-2xl font-bold mb-6">Introduction</h2>
                            <p>
                                At Solar Payback, we are committed to protecting your privacy while providing the best possible analysis of your solar investment. This policy outlines how we handle data and ensure transparency in our operations.
                            </p>
                        </motion.section>

                        <motion.section variants={fadeInUp} className="mb-16">
                            <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="p-8 bg-white border border-slate-200 rounded-3xl">
                                    <div className="w-10 h-10 bg-[#32B5A4]/10 rounded-xl flex items-center justify-center text-[#32B5A4] mb-4">
                                        <Eye size={20} />
                                    </div>
                                    <h4 className="font-bold mb-2">Usage Data</h4>
                                    <p className="text-xs">We analyze anonymous simulator inputs (e.g., zip code, bill amount) to improve our ROI models.</p>
                                </div>
                                <div className="p-8 bg-white border border-slate-200 rounded-3xl">
                                    <div className="w-10 h-10 bg-[#32B5A4]/10 rounded-xl flex items-center justify-center text-[#32B5A4] mb-4">
                                        <Shield size={20} />
                                    </div>
                                    <h4 className="font-bold mb-2">Contact Info</h4>
                                    <p className="text-xs">Information submitted via our contact form is used strictly for technical support and partnership discussions.</p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section variants={fadeInUp} className="mb-16">
                            <h2 className="text-2xl font-bold mb-6">AdSense & Cookies</h2>
                            <p>
                                Solar Payback uses Google AdSense to serve advertisements. Google may use cookies to serve ads based on your visit to this site and other sites on the Internet.
                            </p>
                            <ul className="mt-4 list-disc pl-6 space-y-4">
                                <li><strong>Third-party vendors</strong>, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
                                <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
                                <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#32B5A4] hover:underline">Ads Settings</a>.</li>
                            </ul>
                        </motion.section>

                        <motion.section variants={fadeInUp} className="mb-16">
                            <h2 className="text-2xl font-bold mb-6">Data Security</h2>
                            <p>
                                We implement industry-standard encryption to protect all data transmitted through ourROI engine and contact forms. We do not sell user data to solar installers or third-party marketers.
                            </p>
                        </motion.section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
