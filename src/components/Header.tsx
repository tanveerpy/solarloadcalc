"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Calculator,
    BookOpen,
    DollarSign,
    Sun,
    ExternalLink,
    ChevronDown,
    Menu,
    X,
    TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: 'ROI Calculator', href: '/', icon: Calculator },
    { name: 'Knowledge Hub', href: '/knowledge-hub', icon: BookOpen },
    { name: 'Tax Credits', href: '/knowledge-hub/federal-solar-tax-credit-2026', icon: DollarSign },
];

export const Header: React.FC = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
            isScrolled
                ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm"
                : "bg-transparent py-5"
        )}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-[#32B5A4] rounded-lg flex items-center justify-center text-white shadow-lg shadow-teal-500/20 group-hover:rotate-12 transition-transform">
                        <Sun size={20} fill="#FFA236" className="text-[#FFA236]" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-[#0C2340] leading-none">
                            Solar<span className="text-[#32B5A4]">Payback</span>
                        </h1>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Analytic Engine</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
                                    isActive
                                        ? "text-[#32B5A4] bg-[#32B5A4]/5"
                                        : "text-slate-600 hover:text-[#0C2340] hover:bg-slate-50"
                                )}
                            >
                                <item.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Actions Section */}
                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex flex-col items-end leading-none">
                        <div className="flex items-center gap-1.5 mb-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#6DBE45] animate-[pulse_2s_infinite]" />
                            <span className="text-[10px] font-bold text-[#0C2340] uppercase tracking-[0.05em]">System Active</span>
                        </div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">v5.0-ECO</span>
                    </div>

                    <a
                        href="#engine"
                        className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#FFA236] hover:bg-[#FF8C00] text-white text-[11px] font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 uppercase tracking-widest"
                    >
                        Connect Now <ExternalLink size={14} />
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2.5 text-slate-600 hover:text-[#32B5A4] bg-slate-50 hover:bg-[#32B5A4]/5 rounded-lg transition-colors border border-slate-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "flex items-center gap-4 px-4 py-4 rounded-xl text-md font-bold transition-all",
                                            isActive
                                                ? "text-[#32B5A4] bg-[#32B5A4]/5"
                                                : "text-slate-600 hover:text-[#0C2340] hover:bg-slate-50"
                                        )}
                                    >
                                        <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-400 font-bold uppercase">Network Status</span>
                                    <span className="text-sm font-bold text-[#0C2340]">Optimized</span>
                                </div>
                                <a
                                    href="#engine"
                                    className="px-6 py-3 bg-[#FFA236] text-white text-sm font-bold rounded-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Start ROI Check
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
