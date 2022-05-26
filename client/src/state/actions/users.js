import * as api from "../api";
import jwt from 'jwt-decode'

export const createUser = (newUser) => async (dispatch) => {
    try {
        const results = await api.createUser(newUser);
        return results;

      } catch (error) {
        return error;
      }
}

export const loginUser = (userInfo) => async (dispatch) => {
  try {
    const results = await api.loginUser(userInfo);
    dispatch({ type: "LOGIN", payload: jwt(results.token) });
    return results;
    
  } catch (error) {
    return error;
  }
}
