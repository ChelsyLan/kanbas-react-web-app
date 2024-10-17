import { useLocation,useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
export default function AssignmentEditor() {
  const assignments = db.assignments;
  
  const {cid,aid} = useParams();
  const assignment = assignments.find((assignment) => (assignment._id == aid))
  

  return (
    <div id="wd-assignments-editor" className="container">
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-name">
            <strong>Assignment Name</strong>
          </label>
          <input
            id="wd-name"
            className="form-control"
            value= {`${assignment?.title}`}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-description">
            <strong>Description</strong>
          </label>
          <textarea id="wd-description" className="form-control" rows={5}>
            {`${assignment?.description}`}
          </textarea>
        </div>
      </div>
      {/* Points Field */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-points" className="col-form-label">
            <strong>Points</strong>
          </label>
        </div>
        <div className="col-md-4">
          <input id="wd-points" className="form-control" placeholder={`${assignment?.points}`} />
        </div>
      </div>

      {/* Assignment Group Field */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-group" className="col-form-label">
            <strong>Assignment Group</strong>
          </label>
        </div>
        <div className="col-md-4">
          <select id="wd-group" className="form-control">
            <option value="VAL1">Assignments</option>
          </select>
        </div>
      </div>

      {/* Display Grade As Field */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-display-grade-as" className="col-form-label">
            <strong>Display Grade As</strong>
          </label>
        </div>
        <div className="col-md-4">
          <select id="wd-display-grade-as" className="form-control">
            <option value="VAL1">Percentage</option>
          </select>
        </div>
      </div>

      {/* Submission Type Field */}
      <div className="row mb-3 align-items-start">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-submission-type" className="col-form-label">
            <strong>Submission Type</strong>
          </label>
        </div>

        <div className="col-md-4">
          <select id="wd-submission-type" className="form-control">
            <option value="VAL1">Online</option>
          </select>
          <div className="col-md-6">
            <strong>Online Entry Options</strong>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-text-entry"
              />
              <label className="form-check-label" htmlFor="wd-text-entry">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-website-url"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-media-recordings"
              />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3 align-items-start">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-assign-to" className="col-form-label">
            <strong>Assign to</strong>
          </label>
        </div>
        <div className="col-md-4">
          <select id="wd-assign-to" className="form-control">
            <option value="VAL1">Everyone</option>
          </select>
          <div className="col-md-6">
            <label htmlFor="wd-due-date">
              <strong>Due Date</strong>
            </label>
            <input
              id="wd-due-date"
              type="date"
              className="form-control"
              value={`${assignment?.due_date}`}
            />
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label htmlFor="wd-available-until">
                <strong>Available from</strong>
              </label>
              <input
                id="wd-available-from"
                type="date"
                className="form-control"
                value={`${assignment?.available_date}`}
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="wd-available-until">
                <strong>Until</strong>
              </label>

              <input
                id="wd-available-until"
                type="date"
                className="form-control"
                value="2024-05-20"
              />
            </div>
          </div>
        </div>
      </div>

      <hr/>
      <div className="row mb-3">
        <div className="col-md-4 offset-md-8 text-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
