"use client";

import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
} from 'recharts';
import { YearData } from '../logic/solar-math';

interface ROIGraphProps {
    data: YearData[];
    netCost: number;
}

export const ROIGraph: React.FC<ROIGraphProps> = ({ data, netCost }) => {
    const chartData = data.map((d) => ({
        year: `Y${d.year}`,
        savings: d.cumulativeSavings,
        cost: netCost,
    }));

    return (
        <div className="w-full h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#32B5A4" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#32B5A4" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                    <XAxis
                        dataKey="year"
                        stroke="#94A3B8"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        interval={4}
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis
                        stroke="#94A3B8"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E3E6E9',
                            borderRadius: '12px',
                            fontSize: '11px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
                        }}
                        itemStyle={{ color: '#32B5A4', fontWeight: 'bold' }}
                        labelStyle={{ color: '#0C2340', marginBottom: '4px' }}
                        formatter={(value: number | undefined) => [
                            value !== undefined ? `$${value.toLocaleString()}` : '$0',
                            'Total Savings'
                        ]}
                    />
                    <Area
                        type="monotone"
                        dataKey="savings"
                        stroke="#32B5A4"
                        strokeWidth={4}
                        fillOpacity={1}
                        fill="url(#colorSavings)"
                        animationDuration={1500}
                    />
                    <ReferenceLine
                        y={netCost}
                        stroke="#FFA236"
                        strokeDasharray="6 6"
                        strokeWidth={2}
                        label={{
                            value: 'Break-even Point',
                            position: 'insideBottomRight',
                            fill: '#FFA236',
                            fontSize: 10,
                            fontWeight: 700,
                            offset: 10
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
