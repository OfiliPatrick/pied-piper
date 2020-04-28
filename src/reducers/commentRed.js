import { ON_COMMENT_CHANGE } from "../actions/types";

const initialState = {
 commentText: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_COMMENT_CHANGE:
      return {
        ...state,
        [action.payload.fieldId]: action.payload.fieldValue,
      };

    default:
      return state;
  }
}
