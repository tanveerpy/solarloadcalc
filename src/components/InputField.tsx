import React from 'react';

interface InputFieldProps {
    label: string;
    value: number;
    onChange: (val: number) => void;
    min?: number;
    max?: number;
    step?: number;
    suffix?: string;
    prefix?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    min,
    max,
    step = 1,
    suffix,
    prefix,
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#0C2340] uppercase tracking-widest">{label}</label>
            <div className="relative flex items-center">
                {prefix && (
                    <span className="absolute left-4 text-slate-400 text-sm font-bold">{prefix}</span>
                )}
                <input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                    min={min}
                    max={max}
                    step={step}
                    className={`w-full bg-white border border-[#E3E6E9] rounded-lg py-3 outline-none focus:border-[#32B5A4] focus:ring-2 focus:ring-[#32B5A4]/10 transition-all text-[#0C2340] font-bold text-sm ${prefix ? 'pl-8' : 'pl-4'
                        } ${suffix ? 'pr-12' : 'pr-4'}`}
                />
                {suffix && (
                    <span className="absolute right-4 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                        {suffix}
                    </span>
                )}
            </div>
        </div>
    );
};
