import React, { useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import axios from "axios";

import {
  SET_REGISTER_STATUS,
  SET_USER_INFORMATION,
} from "../../../redux/auth/actions";

import "./SignIn.css";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");

  const usernameRef = useRef();
  const passwordRed = useRef();

  const signInHandler = () => {
    if (usernameRef.current.value && passwordRed.current.value) {
      axios
        .post("https://reqres.in/api/login", {
          email: usernameRef.current.value,
          password: passwordRed.current.value,
        })
        .then((res) => {
          dispatch(
            SET_USER_INFORMATION({
              name: usernameRef.current.value,
              id: uuidv4(),
            })
          );
          localStorage.setItem("token", res.data.token);
          history.push("/mainScreen");
        })
        .catch(() =>
          setErrorMessage(
            "Could not log in error try using following email: eve.holt@reqres.in"
          )
        );
    }
    return setErrorMessage("Invalid Sign In");
  };

  return (
    <div className="main_container">
      <input ref={usernameRef} placeholder={"Username"} />
      <input type={"password"} ref={passwordRed} placeholder={"Password"} />
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <button onClick={signInHandler}>Sign In</button>
        <button onClick={() => dispatch(SET_REGISTER_STATUS(true))}>
          Register
        </button>
      </div>
    </div>
  );
};

export default SignIn;
