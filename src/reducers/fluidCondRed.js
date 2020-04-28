import { ON_FLUID_COND_CHANGE } from "../actions/types";

const initialState = {
  flowRate: "",
  density: "",
  viscosity: "",
  pumpDischarge: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_FLUID_COND_CHANGE:
      return {
        ...state,
        [action.payload.fieldId]: action.payload.fieldValue,
      };

    default:
      return state;
  }
}
