import React from "react";

import "./Header.css";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { SET_USER_INFORMATION } from "../../../redux/auth/actions";
import { SET_ADD_POST_STATUS } from "../../../redux/posts/actions";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOutHandler = () => {
    localStorage.clear();
    history.push("/");
    dispatch(SET_USER_INFORMATION({}));
  };

  return (
    <div className="header_main_container">
      <button
        className="add_post_button"
        onClick={() => dispatch(SET_ADD_POST_STATUS(true))}
      >
        Add Post
      </button>
      <button className="log_out_button" onClick={logOutHandler}>
        Log Out
      </button>
    </div>
  );
};

export default Header;
