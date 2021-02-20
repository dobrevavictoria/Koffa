const initialState = {
  userInfo: {
    email: null,
    ecolevs: 0
  }
};

function rootReducer(state = initialState, action) {
  if (action.payload && action.payload.value === null) {
    return state;
  }

  if (action.type === "GET_USERINFO") {
    return Object.assign({}, state, {
      userInfo: action.payload
    });
  }

  return state;
}

export default rootReducer;
