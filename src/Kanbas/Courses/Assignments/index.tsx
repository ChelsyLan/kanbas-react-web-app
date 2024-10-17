import AssignmentButton from "./AssignmentButton";
import { MdAssignment } from "react-icons/md";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import * as db from "../../Database";
import { useParams,useLocation } from "react-router";

export default function Assignments() {
  
  const {cid} = useParams();

  // filter the assignments for current course
  const assignments = db.assignments.filter((assignment) => (assignment.course === cid))
  

  return (
    <div id="wd-assignments">
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

      <div className="d-flex justify-content-end">
        <button className="btn btn-light" id="wd-add-assignment-group">
          <FaPlus />
          Group
        </button>
        <button className=" btn btn-danger" id="wd-add-assignment">
          <FaPlus /> Assignment
        </button>
      </div>

      <br></br>

      <ul id="wd-assignment-list list-group rounded-0">
        <li className=" list-group-item p-0 mb-0 fs-5 border-gray">
          <h3 id="wd-assignments-title">
            <BsGripVertical />
            ASSIGNMENTS
            <button className="btn btn-outline-secondary">
              40% of Total +
            </button>
          </h3>
        </li>
        
        {assignments.map((assignment) => (
          <li key = {assignment._id} className="wd-assignment-list-item list-group-item p-0 mb-0 fs-5 border-gray"> 
          <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical />
              <MdAssignment />
              <a
                className="wd-assignment-link text-body-emphasis"
                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                {assignment.title}
                <AssignmentButton />
              </a>
            </div>
            <p className="mb-1">
              {" "}
              <span className="text-danger">Multiple modules |</span>{" "}
              <strong>Not Available until</strong> May 6 at 12:00 am |
            </p>
            <small>
              <strong>Due</strong> May 13 at 11:59 pm, | 100 pts
            </small>
          </li>

        ))}

      </ul>

    </div>
  );
}
