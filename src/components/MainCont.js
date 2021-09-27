import React, { useCallback } from "react";
import PropNav from "./PropNav";
import PipeParams from "./PipeParams";
import FluidCond from "./FluidCond";
import PumpSpecs from "./PumpSpecs";
import Documentation from "./Documentation";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import { calculatePipeSize } from "../actions/mainContActions";
import { useHistory } from "react-router-dom";

const MainCont = () => {
  let history = useHistory();
  const schedule = useSelector((store) => store.pipeParams.schedule);
  const straightLength = useSelector(
    (store) => store.pipeParams.straightLength
  );
  const roughness = useSelector((store) => store.pipeParams.roughness);
  const flowRate = useSelector((store) => store.fluidCond.flowRate);
  const density = useSelector((store) => store.fluidCond.density);
  const viscosity = useSelector((store) => store.fluidCond.viscosity);
  const velocity = useSelector((store) => store.fluidCond.velocity);
  const docText = useSelector((store) => store.documentation.docText);

  const sizingInfo = {
    schedule,
    straightLength,
    roughness,
    flowRate,
    density,
    viscosity,
    velocity,
    docText,
  };

  const actionDispatch = useDispatch();
  const calculatePipeSizeDispatch = useCallback(
    (sizingInfo) => actionDispatch(calculatePipeSize(sizingInfo)),
    [actionDispatch]
  );

  const isResultReady = useSelector((store) => store.resultState.isResultReady);
  if (isResultReady) {
    console.log("was this called");
    history.push("/results");
  }

  return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="wizard-container">
              <div className="card wizard-card" data-color="purple" id="wizard">
                <form action="" method="">
                  <div className="wizard-header">
                    <h3 className="wizard-title">Pied Piper</h3>
                    <h5>Easy to use Pipe Sizing Software.</h5>
                  </div>
                  <PropNav />
                  <div className="tab-content">
                    <PipeParams />
                    <FluidCond />
                    <PumpSpecs />
                    <Documentation />
                  </div>
                  <div className="wizard-footer">
                    <div className="pull-right">
                      <input
                        type="button"
                        className="btn btn-next btn-fill btn-primary btn-wd"
                        name="next"
                        value="Next"
                      />
                      <input
                        type="button"
                        className="btn btn-finish btn-fill btn-primary btn-wd"
                        name="finish"
                        value="Calculate"
                        // onClick={(e) => {
                        //   console.log("i have been clicked ooo");
                        // }}
                        onClick={(e) => {
                          console.log(sizingInfo);
                          calculatePipeSizeDispatch(sizingInfo);
                        }}
                      />
                    </div>
                    <div className="pull-left">
                      <input
                        type="button"
                        className="btn btn-previous btn-fill btn-default btn-wd"
                        name="previous"
                        value="Previous"
                      />
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MainCont;
