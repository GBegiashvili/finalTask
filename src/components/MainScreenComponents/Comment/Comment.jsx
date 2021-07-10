import React, { useState, useRef, Fragment } from "react";

import "./Comment.css";

import { useDispatch } from "react-redux";
import { REMOVE_COMMENT, UPDATE_COMMENT } from "../../../redux/posts/actions";

const Comment = ({ commentInfo, postID }) => {
  const dispatch = useDispatch();

  const textRef = useRef("");

  const [editStatus, setEditStatus] = useState(false);

  const removeCommentHandler = () => {
    dispatch(REMOVE_COMMENT(commentInfo.commentID, postID));
  };

  const updateCommentHandler = () => {
    if (textRef.current.value) {
      dispatch(
        UPDATE_COMMENT(textRef.current.value, commentInfo.commentID, postID)
      );
    }
    return setEditStatus(false);
  };

  return (
    <div className="comments_container">
      {editStatus ? (
        <Fragment>
          <input ref={textRef} defaultValue={commentInfo.text} />
          <div className="comment_button_container">
            <button onClick={updateCommentHandler}>Submit</button>
            <button onClick={() => setEditStatus(false)}>Cancel</button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>{commentInfo.text}</p>
          <div className="comment_button_container">
            <button onClick={() => setEditStatus(true)}>Edit</button>
            <button onClick={removeCommentHandler}>Delete</button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Comment;
