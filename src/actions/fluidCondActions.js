import { ON_FLUID_COND_CHANGE } from "../actions/types";

export const onFluidCondChange = (fieldId, fieldValue) => {
  return {
    type: ON_FLUID_COND_CHANGE,
    payload: { fieldId, fieldValue },
  };
};
