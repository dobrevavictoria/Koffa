export function getUserInfo() {
  return function (dispatch) {
    return fetch('/api/auth/getUserInfo')
      .then(data => data.json())
      .then(result => {
        dispatch({ type: "GET_USERINFO", payload: result });
        return result;
      });
  };
}