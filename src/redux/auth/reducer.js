import actionTypes from "./actionTypes";

const INITIAL_STATE = {
  registerStatus: false,
  userInfo: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_REGISTER_STATUS:
      return {
        ...state,
        registerStatus: action.status,
      };
    case actionTypes.SET_USER_INFORMATION:
      return {
        ...state,
        userInfo: action.information,
      };
    default:
      return state;
  }
};
