import * as api from "../api";

export const createUser = (newUser) => async (dispatch) => {
    try {
        await api.createUser(newUser);
      } catch (error) {
        console.error(error.message);
        window.alert("Username is already in use. Enter a new name.");
      }
}

export const fetchUserId = (username) => async (dispatch) =>{

}
