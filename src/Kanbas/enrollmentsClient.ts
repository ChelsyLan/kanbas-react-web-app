import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/users`;

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(
    `${ENROLLMENTS_API}/${userId}/courses/${courseId}`
  );
  return response.data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(
    `${ENROLLMENTS_API}/${userId}/courses/${courseId}`
  );
  return response.data;
};