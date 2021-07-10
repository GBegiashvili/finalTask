import React from "react";

import Register from "../../components/AuthorizationComponents/Register/Register";
import SignIn from "../../components/AuthorizationComponents/SignIn/SignIn";

import { useSelector } from "react-redux";

const Authorization = () => {
  const registerStatus = useSelector((state) => state.auth.registerStatus);
  console.log(registerStatus);
  return (
    <div>
      <h1>Welcome to GB Social</h1>
      {!registerStatus && <SignIn />}
      {registerStatus && <Register />}
    </div>
  );
};

export default Authorization;
