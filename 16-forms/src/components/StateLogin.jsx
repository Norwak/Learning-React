import { useState } from "react";

export default function Login() {
  let [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  function submitForm(e) {
    e.preventDefault();

    console.log(enteredValues.email, enteredValues.password);
  }

  function changeInput(identifier, e) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: e.target.value,
    }));
  }

  return (
    <form onSubmit={submitForm}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(e) => changeInput('email', e)} value={enteredValues.email} />
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
