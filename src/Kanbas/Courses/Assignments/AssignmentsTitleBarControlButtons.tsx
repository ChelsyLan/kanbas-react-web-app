import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { useSelector } from "react-redux";

const AssignmentsTitleBarControlButtons = () => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
      <div className="border rounded-pill px-4 py-1 fs-5">
        40% of total
      </div>
      {currentUser.role === "FACULTY" && (
        <FaPlus className="fs-4 text-muted" />
      )}
      <IoEllipsisVertical className="fs-4 text-muted" />
    </div>
  );
};

export default AssignmentsTitleBarControlButtons;
