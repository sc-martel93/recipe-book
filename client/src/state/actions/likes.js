import * as api from "../api";

export const addLike = (uid, pid) => async (dispatch) => {
  try {
    const res = await api.addLike(uid, pid);
    return res;
  } catch (error) {
    return error;
  }
}

export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await api.removeLike(id);
    return res;
  } catch (error) {
    return error;
  }
}

export const checkIfLiked = (uid, pid) => async (dispatch) => {
  try {
    const res = await api.checkIfLiked(uid, pid);
    return res.data;
  } catch (error) {
    
  }
}