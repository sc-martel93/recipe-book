import * as api from "../api";

export const createUser = (newUser) => async (dispatch) => {
    try {
        let res = await api.createUser(newUser);

        if (res.data.status === "ok"){
          return res.data.status;
        }

      } catch (error) {
        console.error(error.message);
        window.alert("Username is already in use. Enter a new name.");
      }
}

export const fetchUserId = (username) => async (dispatch) =>{
  try {
    const user  = await api.fetchUserId(username)
      .then((user) => {
        dispatch({type: "SET_ID", payload: user.data.userId[0].id});
      })

    
  } catch (error) {
    console.error(error.message);
  }
}
