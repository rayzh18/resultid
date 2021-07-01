import { SET_MODAL_VISIBLE } from "../actionTypes";

const initialState = {
  modal_visible: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_VISIBLE: {
      const { modal_visible } = action.payload;
      return {
        ...state,
        modal_visible: modal_visible,
      };
    }
    default:
      return state;
  }
}