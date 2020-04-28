import React, { Component } from "react";

const PropNav = () => {
  return (
    <div className="wizard-navigation">
      <ul>
        <li>
          <a href="#pipe_params" data-toggle="tab">
            Pipe Parameter
          </a>
        </li>
        <li>
          <a href="#fluid_conditions" data-toggle="tab">
            Fluid Condition
          </a>
        </li>
        <li>
          <a href="#pump_specs" data-toggle="tab">
            Pump Specs
          </a>
        </li>
        <li>
          <a href="#comments" data-toggle="tab">
            Comments
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PropNav;

