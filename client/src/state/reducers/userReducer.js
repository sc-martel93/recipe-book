export const userReducer = (user = {uid: undefined, username: undefined, isLoggedIn: false, iat: undefined}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.payload.uid, 
        username: action.payload.username,
        isLoggedIn: true,
        iat: action.payload.iat
      };
      
    case "LOGOUT":
      return {
        uid: undefined, 
        username: undefined,
        isLoggedIn: false,
        iat: undefined
      }

    default:
      return user;
  }
};
