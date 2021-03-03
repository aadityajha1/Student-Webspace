import * as ActionTypes from "../actionTypes";

export const Intake = (
  state = {
    intake: [],
    isLoading: true,
    success: null,
    message: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_INTAKES:
      return {
        ...state,
        intake: action.payload,
        isLoading: false,
        success: true,
      };

    case ActionTypes.POST_INTAKES:
      return {
        ...state,
        intake: state.intakes.concat(action.payload),
        isLoadin: false,
        success: true,
      };

    case ActionTypes.INTAKE_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
