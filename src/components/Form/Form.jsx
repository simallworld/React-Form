import { useState } from "react";
import "./Form.css";
import validatePassword from "../../helper/passwordValidator";
import validateEmail from "../../helper/emailValidator";

const Form = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleValidatePassword = () => {
    const password = formValues.password;
    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long and should contain required parameters"
      );
      console.log(
        "Password must be at least 8 characters long and should contain required parameters"
      );
      return false;
    }
  };

  const handleValidateEmail = () => {
    const email = formValues.email;
    if (!validateEmail(email)) {
      alert("Email should contain required parameters");
      console.log("Email should contain required parameters");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    handleValidateEmail();
    handleValidatePassword();
    console.log(formValues);
  };
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={formHandler}>
        <div className="wrapper email-input-wrapper">
          <input
            id="email-input"
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange} //setFormValues({ ...formValues, email: e.target.value })
          />
        </div>
        <div className="wrapper password-input-wrapper">
          <input
            id="password-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleChange} //setFormValues({ ...formValues, password: e.target.value })
          />
        </div>
        <div className="submit-button-wrapper">
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export default Form;
