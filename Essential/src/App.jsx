import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  // function handleChange(e) {
  //   setUserInput({
  //     ...userInput,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  function handleChange(inputIdentifier, value) {
    setUserInput((prevUserInput) => {
      return {
      ...prevUserInput,
      [inputIdentifier]: value,
      };
    }
    );
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results userInput={userInput} />
    </>
  )
}

export default App
