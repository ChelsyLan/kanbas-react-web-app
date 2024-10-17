import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { RiForbidLine } from "react-icons/ri";
export default function ModulesControls() {
  return (
    <div
      id="wd-modules-controls"
      className="d-flex justify-content-end align-items-center text-nowrap"
    >
      {/* Add Module Button */}
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-3">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>

      {/* Publish All Dropdown */}
      <div className="dropdown d-inline me-3">
        <button
          id="wd-publish-all-btn"
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item"
              href="#"
            >
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a
              id="wd-publish-modules-only-button"
              className="dropdown-item"
              href="#"
            >
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a
              id="wd-unpublish-all-modules-and-items"
              className="dropdown-item"
              href="#"
            >
              <RiForbidLine /> Unpublish all modules and items
            </a>
          </li>
          <li>
            <a
              id="wd-unpublish-modules-only"
              className="dropdown-item"
              href="#"
            >
              <RiForbidLine /> Unpublish modules only
            </a>
          </li>
        </ul>
      </div>

      {/* View Progress and Collapse All Buttons */}
      <button
        type="button"
        id="wd-view-progress"
        className="btn btn-lg btn-secondary me-3"
      >
        View Progress
      </button>
      <button
        type="button"
        id="wd-collapse-all"
        className="btn btn-lg btn-secondary"
      >
        Collapse All
      </button>
    </div>
  );
}
