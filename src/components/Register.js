import React, { useState } from "react";

import "./register.scss";

function Register() {
  const [hidePassword, setHidePassword] = useState(true);
  const [error, setError] = useState(false);

  const passwordMatchHandler = (ev) => {
    const password = document.getElementById("password");
    if (password.value !== ev.target.value) setError(true);
    if (password.value === ev.target.value) setError(false);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);

    const enteredData = {
      fname: data.get("first-name"),
      otherNames: data.get("other-names"),
      gender: data.get("gender"),
      phoneNumber: data.get("phone-number"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log(enteredData);
  };

  return (
    <div className="Register">
      <form onSubmit={submitHandler}>
        <h1>Register</h1>
        {/* names */}
        <div className="names">
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="name"
              name="first-name"
              placeholder="John"
              autoComplete="first-name"
              required
            />
          </div>
          <div>
            <label htmlFor="other-names">Other Name(s)</label>
            <input
              type="name"
              name="other-names"
              placeholder="Doe"
              autoComplete="name"
              required
            />
          </div>
        </div>
        {/* gender and age */}
        <div className="age-gender">
          <div className="gender">
            <label htmlFor="gender">Gender</label>
            <select name="gender" required>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div className="age">
            <label htmlFor="age">Select Age</label>
            <input
              type="number"
              name="age"
              defaultValue="18"
              min="0"
              max="100"
              required
            />
          </div>
        </div>

        {/* email */}
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@example.com"
            autoComplete="email"
            required
          />
        </div>
        {/* phone */}
        <div className="phone">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="phone-number"
            name="phone-number"
            placeholder="**********"
            autoComplete="phone"
            required
          />
        </div>
        {/* password */}
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type={hidePassword ? "password" : "text"}
            name="password"
            id="password"
            placeholder="**********"
            autoComplete="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          />
          {/* show password */}
          <div className="show-password">
            <input
              type="checkbox"
              onClick={() => setHidePassword(!hidePassword)}
            />
            <p>Show password</p>
          </div>
        </div>
        {/* Confirm password  */}
        <div className="password">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type={hidePassword ? "password" : "text"}
            name="confirm-password"
            placeholder="**********"
            autoComplete="password"
            onChange={passwordMatchHandler}
            required
          />
        </div>
        {error && (
          <p style={{ color: "red", fontSize: "15px" }}>
            Passwords do not match
          </p>
        )}
        <div className="terms-conditions">
          <input type="checkbox" required />
          <a
            href="https://www.instagram.com/thrift_.trendy/"
            target="_blank"
            rel="noreferrer"
          >
            Terms and Conditions
          </a>
        </div>
        <div className="button">
          <button> Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
