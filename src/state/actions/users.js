import * as api from "../api";

export const createUser = (newUser) => async () => {
    try {
        await api.createUser(newUser);
      } catch (error) {
        window.alert("Username is already in use.")
        console.error(error.message);
      }
} 


