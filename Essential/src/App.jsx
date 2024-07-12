import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 100,
    expectedReturn: 1000,
    duration: 5,
  });

  // function handleChange(e) {
  //   setUserInput({
  //     ...userInput,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  const inputIsValid = userInput.duration > 0 && userInput.expectedReturn > 0;

  function handleChange(inputIdentifier, value) {
    setUserInput((prevUserInput) => {
      return {
      ...prevUserInput,
      [inputIdentifier]: +value,
      };
    }
    );
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p>Invalid input</p>} 
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
