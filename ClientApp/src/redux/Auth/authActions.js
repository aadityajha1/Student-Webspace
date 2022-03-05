import * as ActionTypes from "../actionTypes";
// import axios f

export const Loading = () => ({
  type: ActionTypes.LOGIN_LOADING,
});

export const loginFailed = (errMess) => ({
  type: ActionTypes.LOGIN_FAILED,
  payload: errMess.message,
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
      localStorage.setItem("user", user.userName);
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
        })
        .catch((err) => dispatch(loginFailed(err.message)));
    })
    .catch((errMess) => dispatch(loginFailed(errMess)));
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
        .then(({ data, message, success }) => {
          dispatch({
            type: ActionTypes.REGISTER_STUDENT,
            payload: data,
            message,
            success,
          });
        })
        .catch((err) => dispatch(registerFailed(err)));
    })
    .catch(({ message, status, token }) => dispatch(registerFailed(message)));
};

export const getUser = () => (dispatch) => {
  const username = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  return fetch(`api/user/user?username=${username}`)
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
    })
    .catch((err) => dispatch(loginFailed(err.message)));
};

export const logout = () => (dispatch) => {
  dispatch(Loading());

  return dispatch({
    type: ActionTypes.LOGOUT,
  });
};

export const successfalse = () => (dispatch) => {
  dispatch({
    type: ActionTypes.SUCCESS_FALSE,
  });
};

export const getAllusers = () => (dispatch) => {
  dispatch({
    type: ActionTypes.LOGIN_LOADING,
  });

  return fetch("api/user")
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
        type: ActionTypes.GET_ALL_USERS,
        payload: data,
        success,
        message,
      });
    });
};
