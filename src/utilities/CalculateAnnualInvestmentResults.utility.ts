import type { IAnnualResult } from "../interfaces/AnnualResult.interface";
import type { IInvestmentData } from "../interfaces/InvestmentData.interface";

export function calculateInvestmentResults(
  investmentData: IInvestmentData,
): IAnnualResult[] {
  const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentData;

  const annualData: IAnnualResult[] = [];
  let investmentValue: number = +initialInvestment;

  for (let i:number = 0; i < +duration; i++) {
    const interestEarnedInYear = investmentValue * (+expectedReturn / 100);

    investmentValue += +interestEarnedInYear + +annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: +annualInvestment, // investment added in this year
    });
  }

  return annualData;
}


