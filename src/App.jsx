import { useState } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculatror";
import Result from "./components/Result";
import "./index.css";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10,
  });

  const durationIsValid = userInput.duration > 0;

  function handleUserInput(inputKey, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputKey]: parseInt(newValue),
      };
    });
  }
  return (
    <>
      <Header />
      <Calculator userInput={userInput} onChangeProps={handleUserInput} />
      {durationIsValid && <Result resultInput={userInput} />}
      {!durationIsValid && <p>Input duration greater than 0</p>}
    </>
  );
}

export default App;
