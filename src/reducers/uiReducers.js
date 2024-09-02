import { HIDE_DRAWER, HIDE_TOAST, SHOW_DRAWER, SHOW_TOAST } from "../constants";

const initialState = {
  showToast: false,
  toastLabel: "",
  showDrawer: false,
};
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        showToast: true,
        toastLabel: action.payload,
      };
    case HIDE_TOAST:
      return {
        ...state,
        showToast: false,
        toastLabel: "",
      };

    case SHOW_DRAWER:
      return {
        ...state,
        showDrawer: true,
      };
    case HIDE_DRAWER:
      return {
        ...state,
        showDrawer: false,
      };
    default:
      return initialState;
  }
};

export default uiReducer;
