import { CALCULATE } from "action-types/numbers";
import axios from "axios";

export const calculate = () => async (dispatch, getState, api) => {
  let result = await axios.get(`${process.env.REACT_APP_API_HOST}/scg/numbers`);
  dispatch({
    type: CALCULATE,
    payload: result.data
  });
};
