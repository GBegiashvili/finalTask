import actionTypes from "./actionTypes";

export const SET_ADD_POST_STATUS = (status) => ({
  type: actionTypes.SET_ADD_POST_STATUS,
  status,
});

export const ADD_POST_TO_ARRAY = (item) => ({
  type: actionTypes.ADD_POST_TO_ARRAY,
  item,
});

export const ADD_COMMENT_TO_POST = (comment, id) => ({
  type: actionTypes.ADD_COMMENT_TO_POST,
  comment,
  id,
});

export const REMOVE_ARTICLE = (id) => ({
  type: actionTypes.REMOVE_ARTICLE,
  id,
});

export const UPDATE_ARTICLE = (title, desc, id) => ({
  type: actionTypes.UPDATE_ARTICLE,
  title,
  desc,
  id,
});

export const REMOVE_COMMENT = (id, postID) => ({
  type: actionTypes.REMOVE_COMMENT,
  id,
  postID,
});

export const UPDATE_COMMENT = (text, id, postID) => ({
  type: actionTypes.UPDATE_COMMENT,
  text,
  id,
  postID,
});
