import { CALCULATE_PIPE_SIZE } from "./types";
import axios from "axios";

export const calculatePipeSize = (sizingInfo) => (dispatch) => {
  console.log(sizingInfo);
  axios
    .post("https://pied-backend.herokuapp.com/api/results", sizingInfo)
    .then((res) => {
      dispatch({
        type: CALCULATE_PIPE_SIZE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
