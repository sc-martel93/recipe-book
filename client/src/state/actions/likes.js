import * as api from "../api";

export const addLike = (uid, pid) => async (dispatch) => {
  try {
    const res = await api.addLike(uid, pid);
    return res;
  } catch (error) {
    return error;
  }
}