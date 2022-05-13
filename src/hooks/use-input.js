import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const blurInputHandler = () => {
    setIsTouched(true);
  };
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const reset = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    blurInputHandler,
    reset,
  };
};

export default useInput;
