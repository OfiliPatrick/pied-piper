import React from "react";

const PropNav = () => {
  return (
    <div className="wizard-navigation">
      <ul>
        <li>
          <a href="#pipe_params" data-toggle="tab">
            Pipe Parameters
          </a>
        </li>
        <li>
          <a href="#fluid_conditions" data-toggle="tab">
            Fluid Conditions
          </a>
        </li>
        {/* <li>
          <a href="#pump_specs" data-toggle="tab">
            Pump Specs
          </a>
        </li> */}
        <li>
          <a href="#documentation" data-toggle="tab">
            Documentation
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PropNav;

