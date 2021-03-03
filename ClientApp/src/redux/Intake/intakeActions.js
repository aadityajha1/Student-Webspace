import * as ActionTypes from "../actionTypes";

export const loading = () => ({
  type: ActionTypes.INTAKE_LOADING,
});

export const getIntakes = (intakes) => ({
  type: ActionTypes.GET_INTAKES,
  payload: intakes,
});

export const fetchIntake = () => (dispatch) => {
  dispatch(loading);

  return fetch("api/intake")
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
    .then(({ data }) => dispatch(getIntakes(data)))
    .catch((err) => console.log(err));
};
