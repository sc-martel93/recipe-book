export const userReducer = (user = {id:"", username: "", isLoggedIn: false, iat: ""}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {id: action.payload.id, 
              username: action.payload.username,
              isLoggedIn: true,
              iat: action.payload.iat
            };

    default:
      return user;
  }
};
