import React, { useRef, useState } from "react";

import { useDispatch } from "react-redux";

import { SET_REGISTER_STATUS } from "../../../redux/auth/actions";

import axios from "axios";

import "./Register.css";

const Register = () => {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");

  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const registerHandler = () => {
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      validEmail.test(usernameRef.current.value) &&
      passwordRef.current.value &&
      passwordRef.current.value === confirmPasswordRef.current.value
    ) {
      axios
        .post("https://reqres.in/api/register", {
          email: usernameRef.current.value,
          password: passwordRef.current.value,
        })
        .then(() => {
          dispatch(SET_REGISTER_STATUS(false));
        })
        .catch(() => {
          setErrorMessage(
            "Could not register error try using following email: eve.holt@reqres.in"
          );
        });
    }
    return setErrorMessage("Wrong email format || Password dont match");
  };

  return (
    <div className="register_container">
      <input ref={usernameRef} placeholder={"E-mail"} />
      <input type={"password"} ref={passwordRef} placeholder={"Password"} />
      <input
        type={"password"}
        ref={confirmPasswordRef}
        placeholder={"Confirm Password"}
      />
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <button onClick={() => dispatch(SET_REGISTER_STATUS(false))}>
          Log In
        </button>
        <button onClick={registerHandler}>Confirm Register</button>
      </div>
    </div>
  );
};

export default Register;
