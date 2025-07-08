import type { IAnnualResult } from "../../interfaces/AnnualResult.interface";
import type { IInvestmentData } from "../../interfaces/InvestmentData.interface";
import { calculateInvestmentResults } from "../../utilities/CalculateAnnualInvestmentResults.utility";
import { formatter } from "../../utilities/FormatNumberToCurrency.utility";
import classes from './Log.module.scss';

function Log(props: {
  investmentData: IInvestmentData,
}) {
  const annualResult: IAnnualResult[] = calculateInvestmentResults(props.investmentData);
  const initialInvestment: number =
    annualResult[0].valueEndOfYear -
    annualResult[0].interest -
    annualResult[0].annualInvestment;

  return (
    <table className={classes['log']}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualResult.map((result: IAnnualResult) => {
          const totalInterest: number =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment; 

          const totalAmountInvested: number = result.valueEndOfYear - totalInterest;

          return (<tr key={`log-result-${result.year}`}>
            <td>
              {result.year}
            </td>
            <td>
              {formatter.format(result.valueEndOfYear)}
            </td>
            <td>
              {formatter.format(result.interest)}
            </td>
            <td>
              {formatter.format(totalInterest)}
            </td>
            <td>
              {formatter.format(totalAmountInvested)}
            </td>
          </tr>)
        })}
      </tbody>
    </table>
  )
}

export default Log;
