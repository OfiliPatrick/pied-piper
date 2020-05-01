import { CALCULATE_PIPE_SIZE } from "./types";
import axios from "axios";

export const calculatePipeSize = (sizingInfo) => (dispatch) => {
  console.log(sizingInfo);
  axios
    .post("http://localhost:5000/api/results", sizingInfo)
    .then((res) => {
      console.log(res)
      dispatch({
        type: CALCULATE_PIPE_SIZE,
        payload: res.data,
      })
    })
    .catch(err => {
  console.log(err)
})  
  
};






// export const calculatePipeSize = (sizingInfo) => {
//   console.log(sizingInfo);
//   axios
//     .post("http://localhost:5000/api/results", {
//       firstName: "Finn",
//       lastName: "Williams",
//     })
//   return {
//     type: CALCULATE_PIPE_SIZE,
//     payload: '',
//   };
// };
