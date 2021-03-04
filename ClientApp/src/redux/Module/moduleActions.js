import * as ActionTypes from "../actionTypes";

export const Loading = () => ({
  type: ActionTypes.MODULE_LOADING,
});

export const moduleFailed = (errMess) => ({
  type: ActionTypes.MODULE_FAILED,
  payload: errMess,
});

export const fetchModules = () => (dispatch) => {
  dispatch(Loading());

  return fetch("/api/module")
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
        type: ActionTypes.GET_ALL_MODULES,
        payload: data,
        success,
        message,
      });
    })
    .catch((err) => dispatch(moduleFailed(err)));
};

export const addmodule = (module) => (dispatch) => {
  dispatch(Loading());
  console.log(module);

  return fetch("api/module", {
    method: "POST",
    body: JSON.stringify(module),
    headers: {
      "Content-Type": "application/json",
    },
  })
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
        type: ActionTypes.ADD_MODULE,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteModule = (id) => (dispatch) => {
  dispatch(Loading());

  return fetch(`api/module/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
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
        type: ActionTypes.DELETE_MODULE,
        payload: data,
        success,
        message,
      });
    })
    .catch((resp) => console.log(resp));
};

export const editModule = (id, module) => (dispatch) => {
  dispatch(Loading());

  return fetch(`api/module/${id}`, {
    method: "PUT",
    body: module,
    headers: {
      "Content-Type": "applciation/json",
    },
  })
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
        type: ActionTypes.EDIT_MODULE,
        payload: data,
        success,
        message,
      });
    })
    .catch((err) => console.log(err));
};
