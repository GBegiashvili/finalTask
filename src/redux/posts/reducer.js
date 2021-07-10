import actionTypes from "./actionTypes";

const INITIAL_STATE = {
  addPostStatus: false,
  posts: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log("action", action.comment);
  switch (action.type) {
    case actionTypes.SET_ADD_POST_STATUS:
      return {
        ...state,
        addPostStatus: action.status,
      };
    case actionTypes.ADD_POST_TO_ARRAY:
      return {
        ...state,
        posts: [...state.posts, action.item],
      };
    case actionTypes.ADD_COMMENT_TO_POST:
      return {
        ...state,
        posts: state.posts.map((el) => {
          return el._id === action.id
            ? { ...el, comments: [...el.comments, action.comment] }
            : el;
        }),
      };
    case actionTypes.REMOVE_ARTICLE:
      return {
        ...state,
        posts: state.posts.filter((el) => el._id !== action.id),
      };
    case actionTypes.UPDATE_ARTICLE:
      return {
        ...state,
        posts: state.posts.map((el) => {
          return el._id === action.id
            ? { ...el, title: action.title, briefDesc: action.desc }
            : el;
        }),
      };
    case actionTypes.REMOVE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((el) => {
          return el._id === action.postID
            ? {
                ...el,
                comments: el.comments.filter(
                  (el) => el.commentID !== action.id
                ),
              }
            : el;
        }),
      };
    case actionTypes.UPDATE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((el) => {
          return el._id === action.postID
            ? {
                ...el,
                comments: el.comments.map((com) => {
                  return com.commentID === action.id
                    ? { ...com, text: action.text }
                    : com;
                }),
              }
            : el;
        }),
      };
    case actionTypes.UPDATE_COMMENT:
      return {};
    default:
      return state;
  }
};
