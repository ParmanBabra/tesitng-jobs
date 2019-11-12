import { FATCH_RESTAURANTS } from "action-types/map";

const initialState = { restaurants: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FATCH_RESTAURANTS:
      return { ...state, ...{ restaurants: action.payload } };
    default:
      return state;
  }
};
