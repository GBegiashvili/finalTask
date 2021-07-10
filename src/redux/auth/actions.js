import actionTypes from "./actionTypes";

export const SET_REGISTER_STATUS = (status) => ({
  type: actionTypes.SET_REGISTER_STATUS,
  status,
});

export const SET_USER_INFORMATION = (information) => ({
  type: actionTypes.SET_USER_INFORMATION,
  information,
});
