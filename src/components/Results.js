import React from "react";
import { useSelector } from "react-redux";

const Results = () => {
  const internal_diameter = useSelector(
    (store) => store.resultState.sizingResult.internal_diameter
  );
  
  const flow_type = useSelector((store) => store.resultState.sizingResult.flow_type);
  const area = useSelector((store) => store.resultState.area);
  const docText = useSelector((store) => store.resultState.docText);
  const reynolds_number = useSelector(
    (store) => store.resultState.reynolds_number
  );

  console.log(internal_diameter)
  return (
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <div class="description">
              <h2>PIPE SIZING RESULTS</h2>
            </div>

            <div class="fresh-table full-color">
              <div class="toolbar">
                <button id="alertBtn" class="btn btn-default">
                  Go Back
                </button>
              </div>

              <table id="fresh-table" class="table">
                <thead>
                  <tr>
                    <th data-field="id">ID</th>
                    <th data-field="name" data-sortable="true">
                      Name
                    </th>

                    <th data-field="salary" data-sortable="true">
                      Salary
                    </th>

                    <th data-field="country" data-sortable="true">
                      Country
                    </th>

                    <th data-field="city">City</th>
                    <th
                      data-field="actions"
                      data-formatter="operateFormatter"
                      data-events="operateEvents"
                    ></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>

                    <td>{internal_diameter}</td>

                    <td>$36,738</td>

                    <td>Niger</td>

                    <td>Oud-Turnhout</td>

                    <td></td>
                  </tr>

                  <tr>
                    <td>2</td>

                    <td>{flow_type}</td>

                    <td>$23,789</td>

                    <td>Cura&ccedil;ao</td>

                    <td>Sinaai-Waas</td>

                    <td></td>
                  </tr>

                  <tr>
                    <td>3</td>

                    <td>Sage Rodriguez</td>

                    <td>$56,142</td>

                    <td>Netherlands</td>

                    <td>Baileux</td>

                    <td></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Philip Chaney</td>
                    <td>$38,735</td>
                    <td>Korea, South</td>
                    <td>Overland Park</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Doris Greene</td>
                    <td>$63,542</td>
                    <td>Malawi</td>
                    <td>Feldkirchen in Kärnten</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Mason Porter</td>
                    <td>$78,615</td>
                    <td>Chile</td>
                    <td>Gloucester</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Alden Chen</td>
                    <td>$63,929</td>
                    <td>Finland</td>
                    <td>Gary</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Alden Chen</td>
                    <td>$63,929</td>
                    <td>Finland</td>
                    <td>Gary</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Alden Chen</td>
                    <td>$63,929</td>
                    <td>Finland</td>
                    <td>Gary</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Alden Chen</td>
                    <td>$63,929</td>
                    <td>Finland</td>
                    <td>Gary</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Alden Chen</td>
                    <td>$63,929</td>
                    <td>Finland</td>
                    <td>Gary</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Alden Chen</td>
                    <td>$63,929</td>
                    <td>Finland</td>
                    <td>Gary</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Alden Chen</td>
                    <td>$63,929</td>
                    <td>Finland</td>
                    <td>Gary</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
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
