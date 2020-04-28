import React, { useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { onCommentChange } from "../actions/commentActions";

const Comments = () => {

   const commentText = useSelector((store) => store.commentText);
   
   const actionDispatch = useDispatch();
   const onCommentChangeDispatch = useCallback(
     (fieldId, fieldValue) =>
       actionDispatch(onCommentChange(fieldId, fieldValue)),
     [actionDispatch]
   );
  return (
    <div className="tab-pane" id="comments">
      <div className="row">
        <h4 className="info-text"> Document your sizing process.</h4>
        <div className="col-sm-6 col-sm-offset-1">
          <div className="form-group">
            <label>Sizing Description</label>
            <textarea
              className="form-control"
              placeholder=""
              rows="6"
              onChange={(e) =>
                onCommentChangeDispatch("commentText", e.target.value)
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


Comments.propTypes = {
  commentText: PropTypes.object.isRequired,
  onCommentChange: PropTypes.func.isRequired,
};

export default Comments;
