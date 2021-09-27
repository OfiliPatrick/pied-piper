import { ON_FLUID_COND_CHANGE } from "../actions/types";

const initialState = {
  flowRate: -1,
  density: -1,
  viscosity: -1,
  velocity: -1,
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
