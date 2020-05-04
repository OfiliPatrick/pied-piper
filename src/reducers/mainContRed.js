import { CALCULATE_PIPE_SIZE } from "../actions/types";
import { GO_BACK_TO_HOME } from "../actions/types";

const initialState = {
  sizingResult: {},
  isResultReady: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CALCULATE_PIPE_SIZE:
      return {
        ...state,
        isResultReady: true,
        sizingResult: action.payload,
      };

    case GO_BACK_TO_HOME:
      return {
        ...state,
        isResultReady: false,
        sizingResult: {},
      };
    

    default:
      return state;
  }
}
