import { useState } from 'react'
import UserInput from './components/UserInput/UserInput';
import Log from './components/Log/Log';
import { DEFAULT_INVESTMENT_DATA } from './mocks/DefaultInvestmentData.mock';
import type { InputTypeEnum } from './enums/InputType.enum';
import type { IInvestmentData } from './interfaces/InvestmentData.interface';
import classes from './App.module.scss';

function verifyAllInvestmentDataAdded(investmentData: IInvestmentData): boolean {
  const allInputsHaveValues: boolean = investmentData.initialInvestment.length > 0
   && investmentData.annualInvestment.length > 0
   && investmentData.expectedReturn.length > 0
   && investmentData.duration.length > 0;
  
  if (!allInputsHaveValues) {
    return false;
  }

  return +investmentData.initialInvestment >= 0
    && +investmentData.annualInvestment > 0
    && +investmentData.expectedReturn > 0
    && +investmentData.duration > 0
    && +investmentData.duration <= 100;
}

function App() {
  const [investmentData, setInvestmentData] = useState({...DEFAULT_INVESTMENT_DATA});
  const allDataAdded: boolean = verifyAllInvestmentDataAdded(investmentData);

  function onInputChange(type: InputTypeEnum, value: string): void {
    setInvestmentData((prevInvestmentData: IInvestmentData): IInvestmentData => ({
      ...prevInvestmentData,
      [type]: value
    }));
  }

  return (
    <main className={classes['main']}>
      <UserInput
        onInputChange={onInputChange}
      />
      {allDataAdded
        ? <Log investmentData={investmentData}/>
        : <p className="txt-center">Please enter valid input data</p>
      }
    </main>
  )
}

export default App;
