import * as api from "../api";

export const createUser = (newUser) => async (dispatch) => {
    try {
        let res = await api.createUser(newUser);

        if (res.data.status === "ok"){
          return res.data.status;
        }

      } catch (error) {
        return error;
      }
}

