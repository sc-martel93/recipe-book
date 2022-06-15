export const userReducer = (user = {uid:"", username: "", isLoggedIn: false, iat: ""}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {uid: action.payload.id, 
              username: action.payload.username,
              isLoggedIn: true,
              iat: action.payload.iat
            };
            
    default:
      return user;
  }
};
