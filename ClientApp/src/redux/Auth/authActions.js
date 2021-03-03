import * as ActionTypes from "../actionTypes";
// import axios f

export const Loading = () => ({
  type: ActionTypes.LOGIN_LOADING,
});

export const loginFailed = (errMess) => ({
  type: ActionTypes.LOGIN_FAILED,
  payload: errMess,
});

export const registerFailed = (errMess) => ({
  type: ActionTypes.REGISTER_FAILED,
  payload: errMess,
});
// export const

export const login = (username, password) => (dispatch) => {
  dispatch(Loading());
  const user = JSON.stringify({
    username,
    password,
  });

  return fetch("api/authenticate/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: user,
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
    .then(({ token, user, expiration }) => {
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
      fetch(`api/user/user?username=${user.userName}`)
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
            type: ActionTypes.LOGIN,
            payload: data,
            token,
          });
        });
    })
    .catch((err) => dispatch(loginFailed(err)));
};

export const registerStudent = (
  username,
  password,
  email,
  user_role,
  intakeid,
  fullname,
  gender
) => (dispatch) => {
  dispatch(Loading());
  const registerModel = JSON.stringify({
    username,
    email,
    password,
  });

  const user = JSON.stringify({
    username,
    password,
    email,
    user_role,
    intakeid,
    fullname,
    gender,
  });

  return fetch("api/authenticate/register", {
    method: "POST",
    body: registerModel,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
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
    .then((resp) => {
      fetch("api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: user,
        credentials: "include",
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
        .then((resp) => console.log(resp))
        .catch((err) => dispatch(registerFailed(err)));
    })
    .catch((err) => dispatch(registerFailed(err)));
};

export const getUser = () => (dispatch) => {
  const username = localStorage.getItem("user").userName;

  return fetch(`api/user/byusername`, {
    body: username,
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
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
    .then(({ data }) =>
      dispatch({
        type: ActionTypes.GET_USER,
        payload: data,
      })
    )
    .catch((err) => dispatch(loginFailed(err)));
};
