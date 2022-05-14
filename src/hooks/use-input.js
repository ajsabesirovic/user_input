import { useState, useReducer } from "react";
const initialState = {
  value: "",
  isTouched: false,
};
const reducerFn = (state, action) => {
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return initialState;
  }
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  }
  return initialState;
};

const useInput = (validateValue) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const blurInputHandler = () => {
    // setIsTouched(true);
    dispatch({ type: "BLUR" });
  };
  const valueChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
    // setEnteredValue(event.target.value);
  };
  const reset = () => {
    dispatch({ type: "RESET", value: "" });
    // setEnteredValue("");
    // setIsTouched(false);
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    blurInputHandler,
    reset,
  };
};

export default useInput;
