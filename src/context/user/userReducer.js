export const userReducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return {
        ...action.payload,
        isAuthenticated: true,
      };
    case "resetUser":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
