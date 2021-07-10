import React, { useRef, useState, Fragment, lazy, Suspense } from "react";

import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";

import {
  REMOVE_ARTICLE,
  UPDATE_ARTICLE,
  ADD_COMMENT_TO_POST,
} from "../../../redux/posts/actions";

import "./Post.css";

const Comment = lazy(() => import("../Comment/Comment"));

const Post = ({ postInfo }) => {
  const dispatch = useDispatch();

  const titleRef = useRef("");
  const descRef = useRef("");
  const commentRef = useRef("");

  const [editStatus, setEditStatus] = useState(false);
  const [likeStatus, setLikeStatus] = useState(false);

  const confirmEditHandler = () => {
    if (titleRef.current.value && descRef.current.value) {
      dispatch(
        UPDATE_ARTICLE(
          titleRef.current.value,
          descRef.current.value,
          postInfo._id
        )
      );
    }
    return setEditStatus(false);
  };

  const addCommentHandler = () => {
    if (commentRef.current.value) {
      dispatch(
        ADD_COMMENT_TO_POST(
          {
            text: commentRef.current.value,
            commentID: uuidv4(),
            postID: postInfo._id,
          },
          postInfo._id
        )
      );

      commentRef.current.value = "";
    }
  };

  return (
    <div className="post_main_container">
      <div>
        <button
          onClick={() => setLikeStatus(!likeStatus)}
          className="action_buttons"
        >
          {likeStatus ? "Unlike" : "Like"}
        </button>
        <button
          className="action_buttons"
          onClick={() => dispatch(REMOVE_ARTICLE(postInfo._id))}
        >
          Remove
        </button>
        {editStatus ? (
          <button className="action_buttons" onClick={confirmEditHandler}>
            Submit Edit
          </button>
        ) : (
          <button
            className="action_buttons"
            onClick={() => setEditStatus(true)}
          >
            Edit
          </button>
        )}
      </div>
      {!editStatus ? (
        <Fragment>
          <h2>Title: {postInfo.title}</h2>
          <p>Description: {postInfo.briefDesc}</p>
        </Fragment>
      ) : (
        <Fragment>
          <h2>
            Title: <input ref={titleRef} defaultValue={postInfo.title} />
          </h2>
          <p>
            Description:
            <input ref={descRef} defaultValue={postInfo.briefDesc} />
          </p>
        </Fragment>
      )}
      <Suspense fallback={<p>Loading...</p>}>
        <h2>Comments</h2>
        {postInfo.comments.map((el) => (
          <Comment commentInfo={el} postID={postInfo._id} key={el.commentID} />
        ))}
      </Suspense>

      <div>
        <input ref={commentRef} placeholder="Comment" />
        <button onClick={addCommentHandler} className="action_buttons">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Post;
