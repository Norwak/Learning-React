import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  
  
  function submitForm(e) {
    e.preventDefault();
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email.includes('@')) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    console.log(email, password);

    e.target.reset();
  }



  return (
    <form onSubmit={submitForm}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          <div className="control-error">{emailIsInvalid && (<p>Please enter a valid email address!</p>)}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef} />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
