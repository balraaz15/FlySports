import React from "react";

import "./user-entry.styles.scss";

import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";

const UserEntry = () => (
  <div className="user-entry">
    <SignIn />
    <SignUp />
  </div>
);

export default UserEntry;
