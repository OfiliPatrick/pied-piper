import { ON_DOCUMENTATION_CHANGE } from "./types";

export const onDocumentationChange = (fieldId, fieldValue) => {
  return {
    type: ON_DOCUMENTATION_CHANGE,
    payload: { fieldId, fieldValue },
  };
};
