import { Link } from "react-router-dom";
import { LuBookMarked } from "react-icons/lu";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleShowAllCourses, enroll, unenroll } from "./enrollmentSlice";
import * as enrollmentClient from "./enrollmentsClient";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleToggleEnrollments = () => {
    setShowAllCourses(!showAllCourses);
  };

  const handleEnroll = async (courseId: string) => {
    await enrollmentClient.enrollUserInCourse(currentUser._id,courseId);
    dispatch(enroll(courseId));
  };

  const handleUnenroll = async (courseId: string) => {
    await enrollmentClient.unenrollUserFromCourse(currentUser._id,courseId);
    dispatch(unenroll(courseId));
  };

  const handleCourseAccess = (courseId: string) => {
    if (isStudent && enrollments.includes(courseId)) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else if (isFaculty) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      alert("You are not enrolled in this course.");
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      {/* Enrollments Toggle Button for Students */}
      {isStudent && (
        <button
          className="btn btn-primary float-end mb-3"
          onClick={() => dispatch(toggleShowAllCourses())}
        >
          {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
              key={course._id}
            >
              <div className="card rounded-3 overflow-hidden">
                <div
                  onClick={() => handleCourseAccess(course._id)}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`/${course._id}.jpg`}
                    width="100%"
                    height={160}
                    alt="Course"
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleCourseAccess(course._id)}
                    >
                      Go
                    </button>

                    {/* Only Faculty can Edit and Delete */}
                    {isFaculty && (
                      <>
                        <button
                          id="wd-edit-course-click"
                          onClick={(e) => {
                            e.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                      </>
                    )}

                    {/* Student Enrollment Controls */}
                    {isStudent && (
                      <>
                        {enrollments.includes(course._id) ? (
                          <button
                            className="btn btn-danger mt-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUnenroll(course._id);
                            }}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success mt-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEnroll(course._id);
                            }}
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

