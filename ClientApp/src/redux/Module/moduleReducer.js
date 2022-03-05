import * as ActionTypes from "../actionTypes";

export const Module = (
  state = {
    modules: [],
    isLoadin: false,
    success: null,
    errMess: null,
    msg: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_MODULES:
      return {
        ...state,
        modules: action.payload,
        success: action.success,
        isLoading: false,
        errMess: null,
      };

    case ActionTypes.ADD_MODULE:
      return {
        ...state,
        modules: state.modules.concat(action.payload),
        success: true,
        errMess: null,
        isLoading: false,
      };

    case ActionTypes.MODULE_LOADING:
      return { ...state, isLoading: true, success: false, message: null };

    case ActionTypes.MODULE_FAILED:
      return { ...state, errMess: action.payload, success: false };

    case ActionTypes.EDIT_MODULE:
      // const index =

      return { ...state, isLoading: false };

    case ActionTypes.GET_ALL_MODULES:
      return {
        ...state,
        isLoading: false,
        modules: action.payload,
        success: true,
      };

    case ActionTypes.DELETE_MODULE:
      const newmodules = state.modules.filter(
        (module) => module.id !== action.payload.id
      );
      return {
        ...state,
        modules: newmodules,
        isLoading: false,
        success: true,
        message: action.message,
      };
    default:
      return state;
  }
};
