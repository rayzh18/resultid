import { SET_MODAL_VISIBLE } from "./actionTypes";

export const set_modal = content => ({
  type: SET_MODAL_VISIBLE,
  payload: {
    modal_visible: content
  }
});

