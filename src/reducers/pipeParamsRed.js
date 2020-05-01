import { ON_PIPE_PARAMS_CHANGE } from "../actions/types";

const initialState = {
  schedule: "",
  straightLength: "",
  roughness: "",
  material: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_PIPE_PARAMS_CHANGE:
      return {
        ...state,
         [action.payload.fieldId] : action.payload.fieldValue,
        
      };

    default:
      return state;
  }
}
