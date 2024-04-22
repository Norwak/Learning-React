import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [canValidate, setCanValidate] = useState(false);



  const valueIsValid = validationFn(enteredValue);



  function changeInput(e) {
    setEnteredValue(e.target.value);
    setCanValidate(false);
  }

  function inputBlurred() {
    setCanValidate(true);
  }

  function resetInput() {
    setEnteredValue('');
    setCanValidate(false);
  }



  return {
    value: enteredValue,
    error: canValidate && !valueIsValid,
    changeInput,
    inputBlurred,
    resetInput,
  };
}