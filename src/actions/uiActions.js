import { HIDE_TOAST, SHOW_TOAST } from "../constants";

export const showToast = (label) => async (dispatch) => {
  try {
    dispatch({ type: SHOW_TOAST, payload: label });
  } catch (error) {
    dispatch({ type: HIDE_TOAST });
    console.log(error);
  }
};

export const hideToast = () => async (dispatch) => {
  try {
    dispatch({ type: HIDE_TOAST });
  } catch (error) {
    console.log(error);
  }
};
