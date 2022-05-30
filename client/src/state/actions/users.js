import * as api from "../api";
import jwt from 'jwt-decode'

export const createUser = (newUser) => async (dispatch) => {
    try {
        const res = await api.createUser(newUser);
        return res;
      } catch (error) {
        return error;
      }
}

export const loginUser = (userInfo) => async (dispatch) => {
  try {
    const res = await api.loginUser(userInfo);
    if(res.status === "ok")
      dispatch({ type: "LOGIN", payload: jwt(res.token) });
    return res;
  
  } catch (error) {
    return error;
  }
}
