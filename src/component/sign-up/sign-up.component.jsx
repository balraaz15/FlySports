import React, { useState } from "react";

import FormInput from "../forms/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserDocument } from "../../firebase/firebase-utils";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocument(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="signup">
      <h2 className="title">I am a new member. Create an account.</h2>
      <span>Register with valid email and strong password</span>
      <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          required
          label="Full Name"
          handleChange={(e) => handleChange(e)}
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="Email"
          handleChange={(e) => handleChange(e)}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label="Password"
          handleChange={(e) => handleChange(e)}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          label="Confirm Password"
          handleChange={(e) => handleChange(e)}
        />

        <CustomButton type="submit">REGISTER</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
