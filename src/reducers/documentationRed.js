import { ON_DOCUMENTATION_CHANGE } from "../actions/types";

const initialState = {
  docText: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_DOCUMENTATION_CHANGE:
      return {
        ...state,
        [action.payload.fieldId]: action.payload.fieldValue,
      };

    default:
      return state;
  }
}
