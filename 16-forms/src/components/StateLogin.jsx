import { useState } from "react";

export default function Login() {
  let [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  let [didEdit, setDidEdit] = useState({
    email: false,
    pasword: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');



  function submitForm(e) {
    e.preventDefault();

    console.log(enteredValues.email, enteredValues.password);

    // reset
    setEnteredValues({
      email: '',
      password: '',
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
            onBlur={() => inputBlur('email')}
            onChange={(e) => changeInput('email', e)} value={enteredValues.email} />
          <div className="control-error">{emailIsInvalid && (<p>Please enter a valid email address!</p>)}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(e) => changeInput('password', e)} value={enteredValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
