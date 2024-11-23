import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

import GreenCheckmark from "./GreenCheckmark";
import { useSelector } from "react-redux";

const ModuleControlButtons = ({ moduleId, deleteModule, editModule }: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" && (
        <>
          <FaPencil className="text-primary me-2" onClick={() => editModule(moduleId)} />
          <FaTrash className="text-danger me-2" onClick={() => deleteModule(moduleId)} />
        </>
      )}
      <GreenCheckmark />
      {currentUser.role === "FACULTY" && (
        <FaPlus className="fs-4" />
      )}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
};

export default ModuleControlButtons;
