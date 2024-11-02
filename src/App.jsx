import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

const initialState = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialState);

  const inpudIsValid = userInput.duration >= 1;

  const handleChange = (inputIndentifier, newValue) => {
    setUserInput((prevState) => ({
      ...prevState,
      [inputIndentifier]: newValue,
    }));
  };

  return (
    <>
      <Header title={"React Investment Calculator"} />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inpudIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter valid input date</p>
      )}
    </>
  );
}

export default App;
