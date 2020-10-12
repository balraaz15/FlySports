import React, { useState } from "react";
import { FaSignInAlt, FaGoogle } from "react-icons/fa";

import "./sign-in.styles.scss";

import FormInput from "../forms/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase-utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="signin">
      <h2>I am already a member.</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={(e) => handleChange(e)}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={(e) => handleChange(e)}
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">
            <FaSignInAlt className="btn-icon" /> Sign In
          </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            <FaGoogle className="btn-icon" />
            Google signin
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
