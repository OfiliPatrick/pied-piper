import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { onPipeParamsChange } from "../actions/pipeParamsActions";

const PipeParams = () => {
  const schedule = useSelector((store) => store.schedule);
  const straightLength = useSelector((store) => store.straightLength);
  const roughness = useSelector((store) => store.roughness);

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
            Enter your Pipes Physical Specifications
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
                onChange={(e) =>
                  onPipeParamsChangeDispatch("roughness", e.target.value)
                }
              />
              <span className="input-group-addon">E</span>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-group label-floating">
            <label className="control-label">Material</label>
            <select name="country" className="form-control">
              <option disabled="" value=""></option>
              <option value="Afghanistan"> Iron Steel </option>
              <option value="Albania"> Copper </option>
              <option value="Algeria"> Cast Iron </option>
              <option value="Antarctica"> Stainless Steel</option>
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

PipeParams.propTypes = {
  schedule: PropTypes.object.isRequired,
  length: PropTypes.object.isRequired,
  rough: PropTypes.object.isRequired,
  onPipeParamsChange: PropTypes.func.isRequired,
};

export default PipeParams;
