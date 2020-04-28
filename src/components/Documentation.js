import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { onDocumentationChange } from "../actions/DocActions";

const Documentation = () => {
  const docText = useSelector((store) => store.commentText);

  const actionDispatch = useDispatch();
  const onDocumentationChangeDispatch = useCallback(
    (fieldId, fieldValue) =>
      actionDispatch(onDocumentationChange(fieldId, fieldValue)),
    [actionDispatch]
  );
  return (
    <div className="tab-pane" id="documentation">
      <div className="row">
        <h4 className="info-text"> Document your sizing process.</h4>
        <div className="col-sm-6 col-sm-offset-1">
          <div className="form-group">
            <label>Sizing Description</label>
            <textarea
              value={docText}
              className="form-control"
              placeholder=""
              rows="6"
              onChange={(e) =>
                onDocumentationChangeDispatch("docText", e.target.value)
              }
            ></textarea>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group"></div>
        </div>
      </div>
    </div>
  );
};

Documentation.propTypes = {
  docText: PropTypes.object.isRequired,
  onCommentChange: PropTypes.func.isRequired,
};

export default Documentation;
