import { CALCULATE } from "action-types/numbers";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE:
      return action.payload;
    default:
      return state;
  }
};
