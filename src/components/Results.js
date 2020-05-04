import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { goBackToHome } from "../actions/ResultsActions";
const Results = () => {
  const internal_diameter = useSelector(
    (store) => store.resultState.sizingResult.internal_diameter
  );
  const relative_roughness = useSelector(
    (store) => store.resultState.sizingResult.relative_roughness
  );
  const flow_type = useSelector(
    (store) => store.resultState.sizingResult.flow_type
  );
  const area = useSelector((store) => store.resultState.sizingResult.area);
  const docText = useSelector(
    (store) => store.resultState.sizingResult.docText
  );
  const reynolds_number = useSelector(
    (store) => store.resultState.sizingResult.reynolds_number
  );
  const schedule = useSelector((store) => store.pipeParams.schedule);
  const straightLength = useSelector(
    (store) => store.pipeParams.straightLength
  );
  const roughness = useSelector((store) => store.pipeParams.roughness);
  const material = useSelector((store) => store.pipeParams.material);
  const flowRate = useSelector((store) => store.fluidCond.flowRate);
  const density = useSelector((store) => store.fluidCond.density);
  const viscosity = useSelector((store) => store.fluidCond.viscosity);
  const pumpDischarge = useSelector((store) => store.fluidCond.pumpDischarge);
  let history = useHistory();
  const actionDispatch = useDispatch();

  // const goBackToHomeDispatch = useDispatch(goBackToHome)

  // const goBackToHomeDispatch = useCallback(
  //   () => actionDispatch(goBackToHome()),
  //   [actionDispatch]
  // );

  const goBackAction = () => {
     window.location = "/";
    // goBackToHomeDispatch();
    // history.push("/");
    // history.goBack();
    // console.log("yeah");
  };

  // const isResultReady = useSelector((store) => store.resultState.isResultReady);
  // if (!isResultReady) {

  //   console.log("result no ready");
  //   window.location = '/'
  //   history.push("/");
  //   window.location.reload(true)
  //   history.goBack()
  // }

  return (
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <div class="fresh-table full-color card">
              <div class="toolbar">
                <button
                  onClick={goBackAction}
                  id="alertBtn"
                  class="btn btn-default"
                >
                  Go Back
                </button>
                <div class="col-md-8 col-md-offset-2">
                  <h3 id="result_header">PIPE SIZING RESULTS (ASME)</h3>
                </div>
              </div>

              <table id="fresh-table" class="table">
                <thead>
                  <tr>
                    <th data-field="id">ID</th>
                    <th data-field="name" data-sortable="true">
                      PROPERTY
                    </th>

                    <th data-field="salary" data-sortable="true">
                      TYPE
                    </th>

                    <th data-field="country" data-sortable="true">
                      DATE
                    </th>

                    <th data-field="city">VALUE</th>
                    <th
                      data-field="actions"
                      data-formatter="operateFormatter"
                      data-events="operateEvents"
                    ></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>0</td>
                    <td>Int. Diameter (m)</td>
                    <td>Output</td>
                    <td>Oak</td>
                    <td>{internal_diameter}</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Rel. Roughness</td>
                    <td>Output</td>
                    <td>Oak</td>
                    <td>{relative_roughness}</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>2</td>

                    <td>Area (m2)</td>

                    <td>Output</td>

                    <td>Netherlands</td>

                    <td>{area}</td>

                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Reynolds No</td>
                    <td>Output</td>
                    <td>Korea, South</td>
                    <td>{reynolds_number}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Flow Type</td>
                    <td>Output</td>
                    <td>Malawi</td>
                    <td>{flow_type}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Documentation</td>
                    <td>Output</td>
                    <td>Chile</td>
                    <td>{docText}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Schedule</td>
                    <td>Input</td>
                    <td>Finland</td>
                    <td>{schedule}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Straight Length</td>
                    <td>Input</td>
                    <td>Finland</td>
                    <td>{straightLength}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>flowRate</td>
                    <td>Input</td>
                    <td>Finland</td>
                    <td>{flowRate}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Roughness</td>
                    <td>Input</td>
                    <td>Finland</td>
                    <td>{roughness}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Density</td>
                    <td>Input</td>
                    <td>Finland</td>
                    <td>{density}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Viscosity</td>
                    <td>Input</td>
                    <td>Finland</td>
                    <td>{viscosity}</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>13</td>
                    <td>Alden Chen</td>
                    <td>$63,929</td>
                    <td>Finland</td>
                    <td>Gary</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <div class="description description-footer">
              <h2 id="sharrreTitle">Thank you for shares!</h2>
              <br />
              <button
                id="twitter"
                class="btn btn-info btn-social btn-twitter btn-round btn-fill btn-wd"
              ></button>
              <button
                id="facebook"
                class="btn btn-info btn-social btn-facebook btn-round btn-fill btn-wd"
              ></button>

              <p>
                Copyright &copy; 2019{" "}
                <a href="http://creative-tim.com">Creative Tim</a>, made with
                for a better web.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
