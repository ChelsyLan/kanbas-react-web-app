import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";

const AssignmentLeftControls = () => {
  return (
    <div>
      <BsGripVertical className="me-2 fs-4 text-secondary" />
      <MdOutlineAssignment className="me-2 fs-4 text-light-green" />
    </div>
  );
};

export default AssignmentLeftControls;
