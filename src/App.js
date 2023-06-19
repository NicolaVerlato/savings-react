import { useState } from 'react';
import Header from './Header/Header';
import Form from './Form/Form';
import ResultsTable from './ResultsTable/ResultsTable';

function App() {
  const [userInput, setUserInput] = useState(null)

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

  const yearlyData = []; // per-year results

  if(userInput){
  let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
  const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput['expected-return'] / 100;
  const duration = +userInput['duration'];

  

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <Form onCalculate={calculateHandler}/>

      {!userInput && <p style={{textAlign: 'center', fontSize: '22px'}}>Dati non diponibili</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
