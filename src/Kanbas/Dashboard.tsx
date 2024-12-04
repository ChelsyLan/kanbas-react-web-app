import { Link } from "react-router-dom";
import { LuBookMarked } from "react-icons/lu";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as enrollmentClient from "./enrollmentsClient";
import { enrollmentStatus } from "./enrollmentSlice";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,setEnrolling,
  updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling:boolean;
  setEnrolling:(enrolling:boolean) =>void;
  updateEnrollment:(courseId:string,enrolled:boolean)=>void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer||[]);
  const [toggleEnrollments, setToggleEnrollments] = useState<boolean>(false);
  const toggleCourses = () => {
    setToggleEnrollments(!toggleEnrollments);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = currentUser.role;

  const handleCourseAccess = (courseId: string) => {
    if (role==="STUDENT" && enrollments.includes(courseId)) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else if (role === "FACULTY") {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      alert("You are not enrolled in this course.");
    }
  };

  return (
    <div id="wd-dashboard" className="container-fluid">

      {
      <div className="d-flex align-items-center justify-content-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </div>
    }
    <hr />
    
    {role === "FACULTY" && (
      <>
        <h5 className="fw-bold">
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            id="wd-update-course-click"
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
          >
            Update
          </button>
        </h5><br />
        <input
          type="text"
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value }) }
        />
        <textarea
          value={course.description}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, description: e.target.value }) }
        />
        <hr />
      </>
    )}

    <h2 id={enrolling ? "wd-dashboard-enrollments" : "wd-dashboard-published"}>
      {enrolling ? "Available" : "Published"} Courses ({courses.length})
    </h2>
    <hr />
    <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-4 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">

        {courses

          .map((course) => {
            const isEnrolled = enrollments.some(
              (enrollment: { user: any; course: any }) =>
                enrollment.user === currentUser._id && enrollment.course === course._id
            );

            return (
              <div className="wd-dashboard-course" key={course._id}>
                <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <div className="wd-dashboard-image-wrapper">
                      <img
                        src={course.image}
                        alt={`${course.name} Cover`}
                        className="img-fluid wd-dashboard-image"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title fw-bold">

                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-description card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>
                      {enrolling && (
              <button onClick={(event) => {
                        event.preventDefault();
                        updateEnrollment(course._id, !course.enrolled);
                      }}
                      className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                {course.enrolled ? "Unenroll" : "Enroll"}
              </button>
            )}

                        {currentUser.role === "FACULTY" && (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>

                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}
                    </div>
                  </Link>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  </div>
  );
}

