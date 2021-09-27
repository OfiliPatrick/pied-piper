import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import { onFluidCondChange } from "../actions/fluidCondActions";

const FluidCond = () => {
  const flowRate = useSelector((store) => store.fluidCond.flowRate);
  const density = useSelector((store) => store.fluidCond.density);
  const viscosity = useSelector((store) => store.fluidCond.viscosity);
  const velocity = useSelector((store) => store.fluidCond.velocity);

  const actionDispatch = useDispatch();
  const onFluidCondChangeDispatch = useCallback(
    (fieldId, fieldValue) =>
      actionDispatch(onFluidCondChange(fieldId, fieldValue)),
    [actionDispatch]
  );
  return (
    <div className="tab-pane" id="fluid_conditions">
      <div className="row">
        <div className="col-sm-12">
          <h4 className="info-text">Enter your Fluid Conditions</h4>
        </div>
        <div className="col-sm-5 col-sm-offset-1">
          <div className="form-group label-floating">
            <label className="control-label">Flow Rate</label>
            <div className="input-group">
              <input
                value={flowRate}
                type="text"
                className="form-control"
                onChange={(e) =>
                  onFluidCondChangeDispatch("flowRate", e.target.value)
                }
              />
              <span className="input-group-addon">m3/hr</span>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-group label-floating">
            <label className="control-label">Density</label>
            <div className="input-group">
              <input
                value={density}
                type="text"
                className="form-control"
                onChange={(e) =>
                  onFluidCondChangeDispatch("density", e.target.value)
                }
              />
              <span className="input-group-addon">kg/m3</span>
            </div>
          </div>
        </div>
        <div className="col-sm-5 col-sm-offset-1">
          <div className="form-group label-floating">
            <label className="control-label">Viscosity</label>
            <div className="input-group">
              <input
                value={viscosity}
                type="text"
                className="form-control"
                onChange={(e) =>
                  onFluidCondChangeDispatch("viscosity", e.target.value)
                }
              />
              <span className="input-group-addon">kg/m.sec</span>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-group label-floating">
            <label className="control-label">Fluid Velocity</label>
            <div className="input-group">
              <input
                value={velocity}
                type="text"
                className="form-control"
                onChange={(e) =>
                  onFluidCondChangeDispatch("velocity", e.target.value)
                }
              />
              <span className="input-group-addon">m/s</span>
            </div>
          </div>
        </div>
        {/* <div className="col-sm-5 col-sm-offset-1">
          <div className="form-group label-floating">
            <label className="control-label">Friction Factor</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
        </div> */}
        {/* <div className="col-sm-5">
          <div className="form-group label-floating">
            <label className="control-label">Friction Factor</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

// FluidCond.propTypes = {
//   flowRate: PropTypes.object.isRequired,
//   density: PropTypes.object.isRequired,
//   viscosity: PropTypes.object.isRequired,
//   pumpDischarge: PropTypes.object.isRequired,
//   onFluidCondChange: PropTypes.func.isRequired,
// };

export default FluidCond;
