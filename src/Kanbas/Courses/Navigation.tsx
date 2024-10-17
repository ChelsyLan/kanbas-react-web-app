import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import {courses} from "../Database";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const {pathname} = useLocation();

  // get cid from url params
  const {cid} = useParams();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
        key={link}
        to={`/Kanbas/Courses/${cid}/${link}`}
        className={`list-group-item text-center border-0 
          ${pathname.includes(link) ? "text-danger bg-white" : "text-white bg-black"}`}
      >
        {link}
      </Link>
      ))}
    </div>
    

);}

