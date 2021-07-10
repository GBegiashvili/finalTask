import React, { useRef, useState } from "react";

import { useDispatch } from "react-redux";
import {
  ADD_POST_TO_ARRAY,
  SET_ADD_POST_STATUS,
} from "../../../redux/posts/actions";

import { v4 as uuidv4 } from "uuid";

import "./AddPost.css";

const AddPost = () => {
  const titleRef = useRef();
  const descRef = useRef();

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");

  const createPostHandler = () => {
    if (titleRef.current.value && descRef.current.value) {
      dispatch(
        ADD_POST_TO_ARRAY({
          title: titleRef.current.value,
          briefDesc: descRef.current.value,
          _id: uuidv4(),
          comments: [],
        })
      );
      dispatch(SET_ADD_POST_STATUS(false));
    }
    return setErrorMessage("Could not create post");
  };

  return (
    <div className="create_post_container">
      <input type="text" ref={titleRef} placeholder="Title" />
      <input type="text" ref={descRef} placeholder="Brief Description" />
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <button className="submit_create_button" onClick={createPostHandler}>
          Create Post
        </button>
        <button
          className="cancel_button"
          onClick={() => dispatch(SET_ADD_POST_STATUS(false))}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddPost;
