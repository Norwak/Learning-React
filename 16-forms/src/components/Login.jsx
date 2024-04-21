import { useRef } from "react";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  
  
  
  function submitForm(e) {
    e.preventDefault();
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  }



  return (
    <form onSubmit={submitForm}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} required />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef} required />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}