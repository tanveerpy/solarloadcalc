import React from 'react';
import Link from 'next/link';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { ArticleMetadata } from '../logic/cms-logic';

export const ArticleCard: React.FC<{ article: ArticleMetadata }> = ({ article }) => {
    return (
        <div className="group relative bg-white border border-[#E3E6E9] hover:border-[#32B5A4]/30 transition-all duration-500 rounded-[2rem] overflow-hidden flex flex-col h-full shadow-lg shadow-slate-200/40 hover:shadow-xl hover:shadow-[#32B5A4]/10 hover:-translate-y-1">
            {article.banner && (
                <div className="w-full h-48 overflow-hidden relative border-b border-slate-100">
                    <img
                        src={article.banner}
                        alt={article.bannerAlt || article.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            )}
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#32B5A4] mb-4 uppercase tracking-[0.1em]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#32B5A4]" />
                    {article.category}
                </div>

                <h3 className="text-xl font-bold text-[#0C2340] mb-4 group-hover:text-[#32B5A4] transition-colors line-clamp-2 leading-tight">
                    {article.title}
                </h3>

                <p className="text-slate-700 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                    {article.excerpt}
                </p>

                <div className="mt-auto">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-6 pb-6 border-b border-slate-100">
                        <span className="flex items-center gap-2">
                            <User size={12} className="text-[#32B5A4]" />
                            {article.author}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar size={12} className="text-[#32B5A4]" />
                            {article.date}
                        </span>
                    </div>

                    <Link
                        href={`/knowledge-hub/${article.slug}`}
                        className="flex items-center justify-between gap-2 w-full py-4 px-6 text-[11px] font-bold uppercase transition-all duration-500 tracking-widest group/link bg-[#32B5A4]/5 hover:bg-[#32B5A4] text-[#32B5A4] hover:text-white rounded-[1.25rem] border border-[#32B5A4]/10 hover:border-[#32B5A4] shadow-sm hover:shadow-lg hover:shadow-teal-500/20"
                    >
                        Read Research Guide
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
