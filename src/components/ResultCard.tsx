import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ResultCardProps {
    label: string;
    value: string;
    unit?: string;
    subValue?: string;
    icon: LucideIcon;
    variant?: 'default' | 'primary';
}

export const ResultCard: React.FC<ResultCardProps> = ({
    label,
    value,
    unit,
    subValue,
    icon: Icon,
    variant = 'default',
}) => {
    return (
        <div className={`p-6 rounded-xl border transition-all duration-300 ${variant === 'primary'
            ? 'bg-[#32B5A4] border-[#32B5A4] shadow-lg shadow-teal-500/20'
            : 'bg-white border-[#E3E6E9] hover:border-[#32B5A4]/50'
            }`}>
            <div className="flex justify-between items-start mb-4">
                <span className={`text-[11px] font-bold uppercase tracking-widest ${variant === 'primary' ? 'text-white/80' : 'text-slate-400'
                    }`}>{label}</span>
                <div className={`p-2 rounded-lg ${variant === 'primary' ? 'bg-white/20 text-white' : 'bg-slate-50 text-slate-400'
                    }`}>
                    <Icon size={18} />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-bold tracking-tight ${variant === 'primary' ? 'text-white' : 'text-[#0C2340]'
                        }`}>
                        {value}
                    </span>
                    {unit && (
                        <span className={`text-sm font-bold ${variant === 'primary' ? 'text-white/70' : 'text-slate-400'
                            }`}>
                            {unit}
                        </span>
                    )}
                </div>
                {subValue && (
                    <span className={`text-[10px] mt-1 font-bold ${variant === 'primary' ? 'text-white/60' : 'text-slate-400'
                        }`}>
                        {subValue}
                    </span>
                )}
            </div>
        </div>
    );
};
