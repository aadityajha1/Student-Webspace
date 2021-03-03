import * as ActionTypes from "../actionTypes";

export const loading = () => ({
  type: ActionTypes.COURSES_LOADING,
});

export const fetchCourses = () => (dispatch) => {
  dispatch(loading());
  return fetch("api/course")
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error(
          "Error" + response.status + ":" + response.statusText
        );
        error.response = response;
        throw error;
      }
    })
    .then((resp) => resp.json())
    .then(({ data, success, message }) => {
      dispatch({
        type: ActionTypes.FETCH_COURSES,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};
