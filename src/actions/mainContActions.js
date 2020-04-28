import { CALCULATE_PIPE_SIZE } from "./types";
import axios from "axios";

export const calculatePipeSize = (
  schedule,
  straightLength,
  roughness,
  flowRate,
  density,
  viscosity,
  pumpDischarge,
  commentText
  
) => (dispatch) => {
  axios
    .post(
      "/api/results",
      schedule,
      straightLength,
      roughness,
      flowRate,
      density,
      viscosity,
      pumpDischarge,
      commentText
    )
    .then((res) => {
      dispatch({
        type: CALCULATE_PIPE_SIZE,
        payload: { },
      });
    });
};
