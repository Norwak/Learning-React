import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue, error: emailError,
    changeInput: changeEmail, inputBlurred: emailBlurred, resetInput: resetEmail,
  } = useInput('', value => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue, error: passwordError,
    changeInput: changePassword, inputBlurred: passwordBlurred, resetInput: resetPassword,
  } = useInput('', value => hasMinLength(value, 6));



  function submitForm(e) {
    e.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    console.log(emailValue, passwordValue);

    resetForm();
  }

  function resetForm() {
    resetEmail();
    resetPassword();
  }



  return (
    <form onSubmit={submitForm}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" id="email" type="email" name="email" value={emailValue}
          onBlur={emailBlurred}
          onChange={changeEmail}
          error={emailError && "Please enter a valid email address!"}
        />

        <Input 
          label="Password" id="password" type="password" name="password" value={passwordValue}
          onBlur={passwordBlurred}
          onChange={changePassword}
          error={passwordError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat" onClick={resetForm}>Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
