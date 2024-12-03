import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || 'http://localhost:4000';
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/users`;
const axiosWithCredentials = axios.create({ 
  withCredentials: true
});

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${ENROLLMENTS_API}/${userId}/courses/${courseId}`
  );
  return response.data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/${userId}/courses/${courseId}`
  );
  return response.data;
};