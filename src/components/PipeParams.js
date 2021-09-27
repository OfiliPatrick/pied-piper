import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import { onPipeParamsChange } from "../actions/pipeParamsActions";

const PipeParams = () => {
  const schedule = useSelector((store) => store.pipeParams.schedule);
  const straightLength = useSelector((store) => store.pipeParams.straightLength);
  const roughness = useSelector((store) => store.pipeParams.roughness);
  const material = useSelector((store) => store.pipeParams.material);

  const actionDispatch = useDispatch();
  const onPipeParamsChangeDispatch = useCallback(
    (fieldId, fieldValue) =>
      actionDispatch(onPipeParamsChange(fieldId, fieldValue)),
    [actionDispatch]
  );

  return (
    <div className="tab-pane" id="pipe_params">
      <div className="row">
        <div className="col-sm-12">
          <h4 className="info-text">
            Enter your Pipe's Physical Specifications
          </h4>
        </div>
        <div className="col-sm-5 col-sm-offset-1">
          <div className="form-group label-floating">
            <label className="control-label">Schedule</label>
            <div className="input-group">
              <input
                value={schedule}
                type="text"
                className="form-control"
                name="schedule"
                onChange={(e) =>
                  onPipeParamsChangeDispatch("schedule", e.target.value)
                }
              />
              <span className="input-group-addon">S</span>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-group label-floating">
            <label className="control-label">Straight Length</label>
            <div className="input-group">
              <input
                value={straightLength}
                type="text"
                className="form-control"
                name="straightLength"
                onChange={(e) =>
                  onPipeParamsChangeDispatch("straightLength", e.target.value)
                }
              />
              <span className="input-group-addon">m</span>
            </div>
          </div>
        </div>
        <div className="col-sm-5 col-sm-offset-1">
          <div className="form-group label-floating">
            <label className="control-label">Roughness</label>
            <div className="input-group">
              <input
                value={roughness}
                type="text"
                className="form-control"
                name="roughness"
                // onChange={onRough}
                onChange={(e) => {
                  console.log(schedule);
                  onPipeParamsChangeDispatch("roughness", e.target.value);
                }}
              />
              <span className="input-group-addon">mm</span>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-group label-floating">
            <label className="control-label">Material</label>
            <select
              name="material"
              value={material}
              className="form-control"
              onChange={(e) =>
                onPipeParamsChangeDispatch("material", e.target.value)
              }
            >
              <option disabled="" value=""></option>
              <option value="ironSteel"> Iron Steel </option>
              <option value="copper"> Copper </option>
              <option value="stainlessSteel"> Stainless Steel</option>
              <option value="...">...</option>
            </select>
          </div>
        </div>
        {/* <div className="col-sm-5 col-sm-offset-1">
            <div className="form-group label-floating">
              <label className="control-label">Elevation</label>
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

// PipeParams.propTypes = {
//   schedule: PropTypes.object.isRequired,
//   length: PropTypes.object.isRequired,
//   rough: PropTypes.object.isRequired,
//   onPipeParamsChange: PropTypes.func.isRequired,
// };

export default PipeParams;
