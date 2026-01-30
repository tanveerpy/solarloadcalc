import Link from "next/link";
import { Sun, Zap, BookOpen } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-20 border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-16">
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-6 group">
                            <div className="w-8 h-8 bg-[#32B5A4] rounded-lg flex items-center justify-center text-white">
                                <Sun size={18} fill="#FFA236" className="text-[#FFA236]" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-[#0C2340]">SOLAR <span className="text-[#32B5A4]">PAYBACK</span></span>
                        </div>
                        <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-sm font-medium">
                            Empowering homeowners to make data-driven energy decisions. We provide technical clarity in a complex market.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl hover:text-[#32B5A4] cursor-pointer transition-colors shadow-sm">
                                <Zap size={20} strokeWidth={2.5} />
                            </div>
                            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl hover:text-[#32B5A4] cursor-pointer transition-colors shadow-sm">
                                <BookOpen size={20} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-sm mb-6 text-[#0C2340]">Explore</h4>
                        <ul className="space-y-4 text-sm text-slate-500 font-medium">
                            <li><Link href="/" className="hover:text-[#32B5A4] transition-colors">Calculator</Link></li>
                            <li><Link href="/knowledge-hub" className="hover:text-[#32B5A4] transition-colors">Knowledge Hub</Link></li>
                            <li><Link href="/knowledge-hub/federal-solar-tax-credit-2026" className="hover:text-[#32B5A4] transition-colors">Tax Credits</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-sm mb-6 text-[#0C2340]">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-500 font-medium">
                            <li><Link href="/about" className="hover:text-[#32B5A4] transition-colors">About Us</Link></li>
                            <li><Link href="/methodology" className="hover:text-[#32B5A4] transition-colors">Methodology</Link></li>
                            <li><Link href="/contact" className="hover:text-[#32B5A4] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-sm mb-6 text-[#0C2340]">Stay Updated</h4>
                        <div className="flex gap-2 p-2 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                            <input type="email" placeholder="Email address" className="bg-transparent border-none text-xs flex-grow px-3 focus:ring-0 font-medium text-slate-700 outline-none" />
                            <button className="px-5 py-2.5 bg-[#32B5A4] text-white text-[10px] font-bold rounded-xl shadow-lg shadow-teal-500/10 uppercase tracking-widest hover:bg-[#289486] transition-colors">Join</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-slate-500 font-bold">© 2026 Solar Payback. Analytic clarity for the energy transition.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-xs text-slate-500 font-bold hover:text-[#32B5A4] transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-xs text-slate-500 font-bold hover:text-[#32B5A4] transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
