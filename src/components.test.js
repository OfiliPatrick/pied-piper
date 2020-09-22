import PipeParams from "./components/PipeParams";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { shallow, mount, render } from "enzyme";

const wrapper = () => {
  return (
    <Provider store={store}>
      <PipeParams />
    </Provider>
  );
};

it("handles PipeParams rendering", () => {
  expect(shallow(<wrapper/>).length).toEqual(1);
});

console.log(shallow(<wrapper />));
