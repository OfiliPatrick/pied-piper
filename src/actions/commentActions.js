import { ON_COMMENT_CHANGE } from "./types";

export const onCommentChange = (fieldId, fieldValue) => {
  return {
    type: ON_COMMENT_CHANGE,
    payload: { fieldId, fieldValue },
  };
};
