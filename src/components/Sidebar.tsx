"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Calculator,
    BookOpen,
    DollarSign,
    HelpCircle,
    ChevronRight,
    Sun,
    ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: 'ROI Calculator', href: '/', icon: Calculator },
    { name: 'Knowledge Hub', href: '/articles', icon: BookOpen },
    { name: 'Solar Incentives', href: '/articles/federal-solar-tax-credit-2026', icon: DollarSign },
];

export const Sidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <aside className="fixed left-6 top-6 bottom-6 w-72 glass border border-slate-200 dark:border-slate-800 z-50 flex flex-col shadow-xl shadow-slate-200/50 dark:shadow-none hidden lg:flex">
            {/* Logo Section */}
            <div className="p-8 pb-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        <Sun size={20} fill="currentColor" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                            SOLAR
                        </span>
                        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">
                            PAYBACK
                        </span>
                    </div>
                </Link>
            </div>

            {/* Navigation Section */}
            <nav className="flex-grow px-4 py-8 space-y-1">
                <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Analytics & Education
                </p>
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block relative group"
                        >
                            <div className={cn(
                                "flex items-center justify-between px-4 py-3 transition-all duration-200 relative z-10",
                                isActive
                                    ? "text-blue-600 bg-blue-50/50 dark:bg-blue-500/10"
                                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
                            )}>
                                <div className="flex items-center gap-3">
                                    <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                                    <span className="text-sm font-semibold tracking-tight">
                                        {item.name}
                                    </span>
                                </div>
                                {isActive && (
                                    <motion.div layoutId="activeNav" className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full" />
                                )}
                                <ChevronRight size={14} className={cn("transition-transform opacity-0 group-hover:opacity-100", isActive ? "opacity-100 translate-x-0" : "-translate-x-2 group-hover:translate-x-0")} />
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Support / Promo Card */}
            <div className="p-4">
                <div className="p-5 bg-slate-900 dark:bg-slate-800 rounded-2xl relative overflow-hidden group">
                    <div className="relative z-10">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-3">
                            <HelpCircle size={18} />
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">Need Expertise?</h4>
                        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                            Connect with a solar consultant for a detailed custom audit.
                        </p>
                        <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                            Connect Now <ExternalLink size={12} />
                        </button>
                    </div>
                    {/* Subtle aesthetic glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
                </div>
            </div>

            {/* Footer section */}
            <div className="p-8 pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                        Platform
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        v2.0.0-SAAS
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Active</span>
                </div>
            </div>
        </aside>
    );
};
