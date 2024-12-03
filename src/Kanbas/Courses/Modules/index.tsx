import * as db from "../../Database";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import ModulesControls from "./ModulesControls";
import { useState, useEffect } from "react";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as courseClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState<string>("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const saveModule = async (module:any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  }

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModuleForCourse = async ()=>{
    if(!cid) return;
    const newModule = {name:moduleName,course:cid};
    const module = await courseClient.createModuleForCourse(cid,newModule);
    dispatch(addModule(module));
  };
  const fetchModules = async () => {
    const modules = await courseClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModuleForCourse}
      />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .map((module: any) => (
            <li key={module._id} className="list-group-item">
              {!module.editing ? (
                <span>{module.name}</span>
              ) : (
                <input
                  className="form-control w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule({...module,editing:false});
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                  defaultValue={module.name}
                />
              )}

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => removeModule(moduleId)}
                editModule={(moduleId) => {
                  dispatch(editModule(moduleId));
                }}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
