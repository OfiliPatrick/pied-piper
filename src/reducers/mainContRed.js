import { CALCULATE_PIPE_SIZE } from "../actions/types";

const initialState = {
  sizingResult: {},
    isResultReady: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CALCULATE_PIPE_SIZE:
      return {
        ...state,
        isResultReady: true,
        sizingResult : action.payload,
  
      };

    default:
      return state;
  }
}
