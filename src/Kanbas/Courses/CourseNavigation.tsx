import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";

const CourseNavigation = () => {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 me-5">
      {links.map((link, idx) => (
        <Link
          key={idx}
          id="wd-course-home-link"
          to={`/Kanbas/Courses/${course?._id}/${link}`}
          className={`list-group-item border border-0 ${
            pathname.includes(link)
              ? "active"
              : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default CourseNavigation;
