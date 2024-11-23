import AssignmentButton from "./AssignmentButton";
import { MdAssignment } from "react-icons/md";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import * as db from "../../Database";
import { useParams, useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteAssignment, updateAssignment } from "./reducer";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import * as assignmentClient from "./client";
import * as courseClient from "../client";
import { setAssignments } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFaculty = currentUser?.role === "FACULTY";
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

  const saveAssignmnet = async (assignment: any) => {
    await assignmentClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const fetchAssignments = async () => {
    const assignments = await courseClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async(assignmentId:string) => {
   await assignmentClient.deleteAssignment(assignmentId);
   fetchAssignments();
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setAssignmentToDelete(null);
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);


  return (
    <div id="wd-assignments">
      <h1>Assignments</h1>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      {isFaculty && (
        <div className="d-flex justify-content-end mb-3">
          <button
            className="btn btn-primary"
            id="wd-add-new-assignment-click"
            onClick={handleAddAssignment}
          >
            <FaPlus /> Assignment
          </button>
        </div>
      )}

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="list-group-item p-0 mb-0 fs-5 border-gray">
          <h3 id="wd-assignments-title">
            <BsGripVertical />
            ASSIGNMENTS
            <button className="btn btn-outline-secondary">
              40% of Total +
            </button>
          </h3>
        </li>

        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li
              key={assignment._id}
              className="wd-assignment-list-item list-group-item p-0 mb-0 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical />
                  <MdAssignment />
                  <Link
                    className="wd-assignment-link fs-5"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                </div>
                {isFaculty && (
                  <FaTrash
                    className="text-danger ms-3"
                    onClick={() => handleDeleteClick(assignment)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
              <p className="mb-1">
                <span className="text-danger">Due: </span> {assignment.due_date}{" "}
                | <strong>Points:</strong> {assignment.points}
              </p>
              <small>
                <strong>Available From:</strong> {assignment.available_from} |{" "}
                <strong>Until:</strong> {assignment.available_until}
              </small>
            </li>
          ))}
      </ul>

      {/* Delete Confirmation Modal*/}
      {showDeleteModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCancelDelete}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
                <p>
                  <strong>{assignmentToDelete?.title}</strong>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() =>handleConfirmDelete(assignmentToDelete._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
