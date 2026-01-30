"use client";

import React, { useState, useMemo } from 'react';
import {
    Sun,
    DollarSign,
    Calendar,
    TrendingUp,
    Zap,
    ArrowRight,
    ChevronDown,
    Info,
    Calculator,
    Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { calculateSolarROI, SolarInputs } from '../logic/solar-math';
import { InputField } from './InputField';
import { ResultCard } from './ResultCard';
import { ROIGraph } from './ROIGraph';
import { AdSense } from './AdSense';

export const SolarCalculator: React.FC = () => {
    const [inputs, setInputs] = useState<SolarInputs>({
        systemSizeKw: 8,
        systemCostTotal: 25000,
        avgSunHours: 4.5,
        elecRateKwh: 0.18,
        annualUsageKwh: 10000,
        isItcEnabled: true,
        annualInflation: 0.035,
        degradationRate: 0.005,
    });

    const results = useMemo(() => calculateSolarROI(inputs), [inputs]);

    const updateInput = (key: keyof SolarInputs, value: any) => {
        setInputs((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
            {/* Sidebar Inputs - Professional Card */}
            <div className="xl:col-span-4 space-y-8">
                <div className="bg-white border border-[#E3E6E9] p-8 shadow-sm rounded-2xl">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2.5 bg-[#32B5A4]/10 text-[#32B5A4] rounded-lg">
                            <Calculator size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-[#0C2340] tracking-tight">System Specs</h2>
                            <p className="text-slate-400 text-xs font-medium">Input local solar variables</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <InputField
                            label="System Size"
                            value={inputs.systemSizeKw}
                            onChange={(val) => updateInput('systemSizeKw', val)}
                            suffix="kW"
                        />
                        <InputField
                            label="Total Installation Cost"
                            value={inputs.systemCostTotal}
                            onChange={(val) => updateInput('systemCostTotal', val)}
                            prefix="$"
                        />
                        <InputField
                            label="Avg. Peak Sun Hours"
                            value={inputs.avgSunHours}
                            onChange={(val) => updateInput('avgSunHours', val)}
                            suffix="hrs"
                            step={0.1}
                        />
                        <InputField
                            label="Electricity Rate"
                            value={inputs.elecRateKwh}
                            onChange={(val) => updateInput('elecRateKwh', val)}
                            prefix="$"
                            suffix="/kWh"
                            step={0.01}
                        />
                        <InputField
                            label="Annual Usage"
                            value={inputs.annualUsageKwh}
                            onChange={(val) => updateInput('annualUsageKwh', val)}
                            suffix="kWh"
                        />

                        <div className="pt-6 border-t border-slate-100">
                            <label className="flex items-center justify-between cursor-pointer group">
                                <span className="text-sm font-bold text-[#0C2340]">
                                    Include 30% Federal ITC
                                </span>
                                <input
                                    type="checkbox"
                                    checked={inputs.isItcEnabled}
                                    onChange={(e) => updateInput('isItcEnabled', e.target.checked)}
                                    className="w-5 h-5 rounded border-slate-300 text-[#32B5A4] focus:ring-[#32B5A4]/20"
                                />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Trust/Support Indicator */}
                <div className="p-6 bg-[#6DBE45]/5 border border-[#6DBE45]/20 rounded-2xl flex gap-4">
                    <Shield className="text-[#6DBE45] shrink-0" size={24} />
                    <p className="text-[#0C2340] text-xs font-medium leading-relaxed">
                        <span className="font-bold text-[#6DBE45] uppercase tracking-wider block mb-1">Financial Analysis</span>
                        Estimated ITC Savings: <span className="font-bold">${(inputs.systemCostTotal * 0.3).toLocaleString()}</span>. This credit is deducted from your federal tax liability.
                    </p>
                </div>

                <AdSense slot="calculator-sidebar" />
            </div>

            {/* Main Content Results */}
            <div className="xl:col-span-8 space-y-10">
                {/* Visualizing Impact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ResultCard
                        label="Break-even Period"
                        value={`${results.paybackYears.toFixed(1)}`}
                        unit="Years"
                        subValue="ROI Date Projection"
                        icon={Calendar}
                    />
                    <ResultCard
                        label="25-Year Savings"
                        value={`$${Math.round(results.total25YearSavings).toLocaleString()}`}
                        subValue="Net Life Cycle Value"
                        icon={TrendingUp}
                    />
                    <ResultCard
                        label="Total ROI"
                        value={`${Math.round(results.roiPercentage)}%`}
                        subValue="Yield over Investment"
                        icon={DollarSign}
                    />
                </div>

                {/* Graph Card */}
                <div className="bg-white border border-[#E3E6E9] p-8 rounded-3xl shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-bold text-[#0C2340]">Cumulative Savings Forecast</h3>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <div className="w-3 h-3 bg-[#32B5A4] rounded-full" />
                            <span>Savings Impact</span>
                        </div>
                    </div>
                    <ROIGraph data={results.yearlyBreakdown} netCost={results.netCost} />
                </div>

                {/* Secondary Data Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8 bg-white border border-[#E3E6E9] rounded-2xl">
                        <h4 className="text-[#0C2340] font-bold mb-6 flex items-center gap-2">
                            <Zap size={18} className="text-[#FFA236]" />
                            First Year Performance
                        </h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500 font-medium tracking-tight">Year 1 Net Savings</span>
                                <span className="text-lg font-bold text-[#6DBE45]">${Math.round(results.yearlyBreakdown[0].savings).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                                <span className="text-sm text-slate-500 font-medium">Estimated Incentives</span>
                                <span className="text-[#0C2340] font-bold">${results.itcValue.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-white border border-[#E3E6E9] rounded-2xl">
                        <h4 className="text-[#0C2340] font-bold mb-6 flex items-center gap-2">
                            <Sun size={18} className="text-[#32B5A4]" />
                            System Capability
                        </h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500 font-medium tracking-tight">Annual Production</span>
                                <span className="text-[#0C2340] font-bold">~{Math.round(results.yearlyBreakdown[0].productionKwh).toLocaleString()} <span className="text-[10px] font-bold text-slate-400">kWh</span></span>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                                <span className="text-sm text-slate-500 font-medium">Net System Cost</span>
                                <span className="text-[#0C2340] font-bold">${results.netCost.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <AdSense slot="calculator-bottom" />
            </div>
        </div>
    );
};
