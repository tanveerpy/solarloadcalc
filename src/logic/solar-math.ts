export interface SolarInputs {
  systemSizeKw: number;
  systemCostTotal: number;
  avgSunHours: number;
  elecRateKwh: number;
  annualUsageKwh: number;
  isItcEnabled: boolean;
  annualInflation: number; // e.g., 0.035 for 3.5%
  degradationRate: number; // e.g., 0.005 for 0.5%
}

export interface YearData {
  year: number;
  productionKwh: number;
  savings: number;
  cumulativeSavings: number;
  remainingCost: number;
  isBreakEven: boolean;
}

export interface ROIResult {
  netCost: number;
  itcValue: number;
  paybackYears: number;
  total25YearSavings: number;
  roiPercentage: number;
  yearlyBreakdown: YearData[];
}

export const calculateSolarROI = (inputs: SolarInputs): ROIResult => {
  const {
    systemSizeKw,
    systemCostTotal,
    avgSunHours,
    elecRateKwh,
    annualUsageKwh,
    isItcEnabled,
    annualInflation,
    degradationRate,
  } = inputs;

  const itcRate = 0.30;
  const itcValue = isItcEnabled ? systemCostTotal * itcRate : 0;
  const netCost = systemCostTotal - itcValue;

  const yearlyBreakdown: YearData[] = [];
  let cumulativeSavings = 0;
  let paybackYears = -1;

  for (let year = 1; year <= 25; year++) {
    // Account for solar panel degradation
    const degradationMultiplier = Math.pow(1 - degradationRate, year - 1);
    const productionKwh = systemSizeKw * avgSunHours * 365 * 0.85 * degradationMultiplier;

    // Account for utility inflation
    const inflationMultiplier = Math.pow(1 + annualInflation, year - 1);
    const currentElecRate = elecRateKwh * inflationMultiplier;

    // Calculate savings (cannot save more than what is consumed, unless net metering is 1:1)
    // For simplicity, we assume 1:1 net metering for the ROI calculation
    const yearSavings = productionKwh * currentElecRate;
    cumulativeSavings += yearSavings;

    const remainingCost = Math.max(0, netCost - cumulativeSavings);
    const isBreakEven = cumulativeSavings >= netCost;

    if (isBreakEven && paybackYears === -1) {
      // Linear interpolation for more accurate payback year
      const previousSavings = cumulativeSavings - yearSavings;
      const deficitAtStartOfYear = netCost - previousSavings;
      const fractionOfYear = deficitAtStartOfYear / yearSavings;
      paybackYears = year - 1 + fractionOfYear;
    }

    yearlyBreakdown.push({
      year,
      productionKwh,
      savings: yearSavings,
      cumulativeSavings,
      remainingCost,
      isBreakEven,
    });
  }

  const total25YearSavings = yearlyBreakdown[24].cumulativeSavings;
  const totalProfit = total25YearSavings - netCost;
  const roiPercentage = (totalProfit / netCost) * 100;

  return {
    netCost,
    itcValue,
    paybackYears: paybackYears === -1 ? 25 : paybackYears,
    total25YearSavings,
    roiPercentage,
    yearlyBreakdown,
  };
};
