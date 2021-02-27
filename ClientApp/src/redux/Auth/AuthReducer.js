import * as ActionTypes from "../actionTypes";

export const Auth = (
  state = {
    user: null,
    isLoading: true,
    success: true,
    token: "",
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
      };

    case ActionTypes.LOGIN_LOADING:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
