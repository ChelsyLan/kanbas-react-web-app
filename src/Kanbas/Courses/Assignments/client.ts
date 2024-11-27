import axios from "axios";
import { assignments } from "../../Database";

// configure axios to include cookies in requests
const axiosWithCredentials = axios.create({ 
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || 'http://localhost:4000';
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const deleteAssignment = async (assignmentId:string)=>{
    const {data} = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return data;
};

export const updateAssignment = async (assignment:any) =>{
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`,assignment);
    return data;
};

