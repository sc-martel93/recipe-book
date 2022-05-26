export const userReducer = (user = {id:"", name: ""}, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {...user, name: action.payload};

    case "SET_ID":
      return {...user, id: action.payload};

    default:
      return user;
  }
};
