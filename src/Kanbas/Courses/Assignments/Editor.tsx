import { useLocation,useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addAssignment,updateAssignment,deleteAssignment,setAssignments } from "./reducer";
import * as assignmentClient from "./client";
import * as courseClient from "../client";


export default function AssignmentEditor({assignment,setAssignment,saveAssignment}:any) {
  
  
  const {cid} = useParams();
  const [localAssignment, setLocalAssignment] = useState({
    _id: cid ? cid : '',
    title: "",
    description: "",
    points: 100,
    due_date: "",
    available_date: "",
    course: cid
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAssignment = async () => {
      if (cid && !window.location.href.endsWith('new')) {
        const assignments = await courseClient.findAssignmentsForCourse(cid);
        if (assignments.length > 0) {
          const id = window.location.href.split('/').pop();
          const currentAssignment = assignments.find((a: any) => a._id === id);
          if (currentAssignment) {
            setLocalAssignment(currentAssignment);
          }
        }
      }
    };
    fetchAssignment();
  }, [cid])

  const handleChange = (e: any) => {
    const { name, value } = e.target;
   
    setLocalAssignment((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSave = async(e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (localAssignment._id &&  !window.location.href.endsWith('new')) {
        // Update existing assignment
        const updated = await assignmentClient.updateAssignment(localAssignment);
        dispatch(updateAssignment(updated));
      } else {
        // Create new assignment using the existing courseClient method
        const created = await courseClient.createAssignmentForCourse(
          cid as string,
          localAssignment
        );
        dispatch(addAssignment(created));
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  

  return (
    <div id="wd-assignments-editor" className="container">
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-name">
            <strong>Assignment Name</strong>
          </label>
          <input
            id="wd-name"
            name="title"
            className="form-control"
            value={localAssignment.title}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-description">
            <strong>Description</strong>
          </label>
          <textarea 
            id="wd-description" 
            name="description"
            className="form-control" 
            rows={5} 
            value={localAssignment.description}
            onChange={handleChange}>
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
          <input 
            id="wd-points" 
            name="points"
            className="form-control"  
            value={localAssignment.points}
            onChange={handleChange}/>
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
              name="due_date"
              type="date"
              className="form-control"
              value={localAssignment.due_date}
              onChange={handleChange}
            />
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label htmlFor="wd-available-until">
                <strong>Available from</strong>
              </label>
              <input
                id="wd-available-from"
                name="available_date"
                type="date"
                className="form-control"
                value={localAssignment.available_date}
                onChange={handleChange}
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
          <button className="btn btn-secondary me-2" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
