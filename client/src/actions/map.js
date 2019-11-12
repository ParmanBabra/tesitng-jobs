import { FATCH_RESTAURANTS } from "action-types/map";
import axios from "axios";

export const fatchRestaurants = () => async (dispatch, getState, api) => {
  let result = await axios.get(`${process.env.REACT_APP_API_HOST}/scg/restaurants`);
  console.log(result);
  dispatch({
    type: FATCH_RESTAURANTS,
    payload: result.data
  });
};
