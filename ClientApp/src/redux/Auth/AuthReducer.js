import * as ActionTypes from "../actionTypes";

export const Auth = (
  state = {
    user: null,
    isLoading: false,
    success: null,
    token: localStorage.getItem("token"),
    errMess: null,
    users: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
        token: action.token,
        isLoading: false,
        success: true,
        message: null,
        errMess: null,
      };

    case ActionTypes.LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        success: false,
        erMess: null,
        message: null,
      };

    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false,
        errMess: action.payload,
      };

    case ActionTypes.LOGOUT:
      localStorage.clear("token");
      return {
        ...state,
        isLoading: false,
        user: null,
        token: null,
        success: false,
      };

    case ActionTypes.REGISTER_STUDENT:
      return {
        ...state,
        success: true,
        message: action.message,
        isLoading: false,
      };

    case ActionTypes.SUCCESS_FALSE:
      return {
        ...state,
        success: false,
        isLoading: false,
        message: null,
        errMess: null,
      };

    case ActionTypes.REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false,
        errMess: action.payload,
      };
    case ActionTypes.GET_ALL_USERS:
      return { ...state, users: action.payload, isLoading: false };
    default:
      return state;
  }
};
