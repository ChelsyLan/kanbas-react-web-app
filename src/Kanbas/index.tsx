import "./styles.css";
import { Routes, Route, Navigate, useNavigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { useState } from "react";
import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const [assignments, setAssignments] = useState<any[]>(db.assignments); // State for assignments
  const [assignment, setAssignment] = useState<any>({
    _id: "0",
    title: "New Assignment",
    description: "New Description",
    course: "",
    points:100,
    due_date : new Date().getTime().toString(),
    available_date:new Date().getTime().toString(),
  });
  const addAssignment = () => {
    const newAssignment = {
      ...assignment,
      _id: new Date().getTime().toString(),
    };
    setAssignments([...assignments, newAssignment]);
    setAssignment({
      ...assignment,
      title: "New Assignment",
      description: "New Description",
    });
    navigate(`/Courses/${course._id}/Assignments/Editor`);
  };

  const navigateToEditor = (courseId: string) => {
    setAssignment({
      _id: new Date().getTime().toString(),
      title: "New Assignment",
      description: "New Description",
      points: 100,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      course: courseId,
    });
    navigate(`/Courses/${courseId}/Assignments/Editor`);
  };

  const deleteAssignment = (assignmentId: string) => {
    setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
  };

  const updateAssignment = () => {
    setAssignments(
      assignments.map((a) => {
        if (a._id === assignment._id) {
          return assignment;
        } else {
          return a;
        }
      })
    );
  };

  const saveAssignment = (newAssignment: any) => {
    setAssignments([...assignments, newAssignment]);
  };



  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute><Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
            /></ProtectedRoute>
              
            }
          />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
