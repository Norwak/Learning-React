import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {
  let [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  let [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
  const passwordIsInvalid = didEdit.password && hasMinLength(enteredValues.password, 6);



  function submitForm(e) {
    e.preventDefault();

    console.log(enteredValues.email, enteredValues.password);

    // reset
    setEnteredValues({
      email: '',
      password: '',
    });

    setDidEdit({
      email: false,
      password: false,
    });
  }

  function changeInput(identifier, e) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: e.target.value,
    }));

    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function inputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }



  return (
    <form onSubmit={submitForm}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" id="email" type="email" name="email" value={enteredValues.email}
          onBlur={() => inputBlur('email')}
          onChange={(e) => changeInput('email', e)}
          error={emailIsInvalid && "Please enter a valid email address!"}
        />

        <Input 
          label="Password" id="password" type="password" name="password" value={enteredValues.password}
          onBlur={() => inputBlur('password')}
          onChange={(e) => changeInput('password', e)}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
