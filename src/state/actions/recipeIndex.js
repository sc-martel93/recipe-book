export const next = () => (dispatch) => {
  dispatch({ type: "NEXT" });
};

export const previous = () => (dispatch) => {
  dispatch({ type: "PREVIOUS" });
};

export const setIndex = (targetIndex) => (dispatch) => {
  dispatch({ type: "SET_INDEX", payload: targetIndex });
};
