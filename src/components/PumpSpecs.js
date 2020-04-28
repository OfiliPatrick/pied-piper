import React, { Component } from "react";


const PumpSpecs = () => {
  return (
    <div className="tab-pane" id="pump_specs">
        <div className="row">
          <div className="col-sm-12">
            <h4 className="info-text">Enter your Pump Specifications</h4>
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <div className="form-group label-floating">
              <label className="control-label">Friction Factor</label>
              <input type="text" className="form-control" id="exampleInputEmail1" />
            </div>
          </div>
          <div className="col-sm-5">
            <div className="form-group label-floating">
              <label className="control-label">Material</label>
              <select name="country" className="form-control">
                <option disabled="" selected=""></option>
                <option value="Afghanistan"> Afghanistan </option>
                <option value="Albania"> Albania </option>
                <option value="Algeria"> Algeria </option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra"> Andorra </option>
                <option value="Angola"> Angola </option>
                <option value="Anguilla"> Anguilla </option>
                <option value="Antarctica"> Antarctica </option>
                <option value="...">...</option>
              </select>
            </div>
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <div className="form-group label-floating">
              <label className="control-label">Bends</label>
              <select className="form-control">
                <option disabled="" selected=""></option>
                <option>1 Person</option>
                <option>2 Persons </option>
                <option>3 Persons</option>
                <option>4 Persons</option>
                <option>5 Persons</option>
                <option>6+ Persons</option>
              </select>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="form-group label-floating">
              <label className="control-label">Schedule</label>
              <div className="input-group">
                <input type="text" className="form-control" />
                <span className="input-group-addon">$</span>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-5 col-sm-offset-1">
            <div className="form-group label-floating">
              <label className="control-label">Friction Factor</label>
              <input type="text" className="form-control" id="exampleInputEmail1" />
            </div>
          </div>
          <div className="col-sm-5">
            <div className="form-group label-floating">
              <label className="control-label">Friction Factor</label>
              <input type="text" className="form-control" id="exampleInputEmail1" />
            </div>
          </div> */}
        </div>
      </div>
  );
}


export default PumpSpecs;
