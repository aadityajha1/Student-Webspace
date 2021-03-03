import * as ActionTypes from "../actionTypes";

export const Course = (
  state = {
    courses: [],
    isLoading: true,
    success: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_COURSES:
      return { ...state, courses: action.payload, isLoading: false };

    default:
      return state;
  }
};
