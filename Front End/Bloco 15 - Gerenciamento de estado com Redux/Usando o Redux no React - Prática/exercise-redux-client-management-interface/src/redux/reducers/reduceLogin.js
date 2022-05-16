const reduceLogin = (state = { authenticated: false, user: null }, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        authenticated: true,
        user: action.payload.email,
      };
    case "LOGOUT":
      return {
        authenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
export default reduceLogin;
