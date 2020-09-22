import { onPipeParamsChange } from "./actions/pipeParamsActions";
import { ON_PIPE_PARAMS_CHANGE } from "./actions/types";

it("handles correct action config", () => {
  const expectedAction = {
    type: ON_PIPE_PARAMS_CHANGE,
    payload: { fieldId: "schedule", fieldValue: 40 },
  };

  expect(onPipeParamsChange("schedule", 40)).toEqual(expectedAction);
});


// it("handles correct API consumption", () => {
//   const expectedAction = {
//     type: ON_PIPE_PARAMS_CHANGE,
//     payload: { fieldId: "schedule", fieldValue: 40 },
//   };

//   expect(onPipeParamsChange("schedule", 40)).toEqual(expectedAction);
// });
