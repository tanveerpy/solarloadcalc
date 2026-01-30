"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, Zap } from 'lucide-react';

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

export default function ContactPage() {
    return (
        <div className="bg-[#F7F9FA] min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left Side - Info */}
                    <div className="lg:col-span-5">
                        <motion.div
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-[#32B5A4]/10 border border-[#32B5A4]/20 rounded-full mb-8">
                                <MessageSquare size={14} className="text-[#32B5A4]" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#32B5A4]">Get in Touch</span>
                            </motion.div>

                            <motion.h1
                                variants={fadeInUp}
                                className="text-5xl font-bold tracking-tight text-[#0C2340] leading-[1.1] mb-8"
                            >
                                Let's Discuss Your <span className="text-[#32B5A4]">Solar Potential</span>.
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="text-lg text-slate-700 font-medium leading-relaxed mb-12"
                            >
                                Have questions about our ROI engine or want to discuss a partnership? Our technical team is ready to help.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#32B5A4] shadow-sm">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-lg font-bold text-[#0C2340]">hello@solarpayback.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#32B5A4] shadow-sm">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Headquarters</p>
                                        <p className="text-lg font-bold text-[#0C2340]">Silicon Valley, CA</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-[#0C2340] rounded-2xl flex items-center justify-center text-[#32B5A4] shadow-sm">
                                        <Zap size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Topical Authority</p>
                                        <p className="text-lg font-bold text-[#0C2340]">Trusted by 10k+ users</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white p-8 md:p-12 border border-slate-200 rounded-[3rem] shadow-2xl shadow-slate-200/60">
                            <form className="space-y-8" onClick={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#32B5A4]/10 focus:border-[#32B5A4] transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#32B5A4]/10 focus:border-[#32B5A4] transition-all font-medium" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                                    <select className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#32B5A4]/10 focus:border-[#32B5A4] transition-all font-medium appearance-none">
                                        <option>ROI Engine Question</option>
                                        <option>Partnership Inquiry</option>
                                        <option>SEO/Content Service</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                                    <textarea rows={6} placeholder="How can we help?" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#32B5A4]/10 focus:border-[#32B5A4] transition-all font-medium resize-none"></textarea>
                                </div>
                                <button className="w-full py-5 bg-[#32B5A4] text-white rounded-2xl font-bold uppercase tracking-widest text-[12px] shadow-xl shadow-teal-500/20 hover:bg-[#289486] transition-all flex items-center justify-center gap-4 group">
                                    Transmit Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
