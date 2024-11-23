import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRouteEnrolled({ children }: {children: any}) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);

  if (currentUser.role === "FACULTY"){
    return children;
  }

  const checkEnrollment = enrollments.some(
    (enrollment: { user: any; course: any}) =>
      enrollment.user === currentUser?._id && enrollment.course === cid
  );

  if (!checkEnrollment) {
    return <Navigate to="/Kanbas/Dashboard" />;
  }

  return children;
}
