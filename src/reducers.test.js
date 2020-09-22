import paramsRed from "./reducers/pipeParamsRed";
import { ON_PIPE_PARAMS_CHANGE } from "./actions/types";

const initial = {
  material: "",
  roughness: "",
  schedule: "",
  straightLength: "",
};

describe("PipeParams", () => {
  it("check initial state", () => {
    expect(paramsRed(undefined, {})).toEqual(initial);
  });

  it("on pipeParams state change", () => {
    expect(
      paramsRed(initial, {
        type: ON_PIPE_PARAMS_CHANGE,
        payload: { fieldId: "schedule", fieldValue: 40 },
      })
    ).toEqual({
      material: "",
      roughness: "",
      schedule: 40,
      straightLength: "",
    });
  });
});
