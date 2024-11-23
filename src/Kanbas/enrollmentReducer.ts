import { courses } from "./Database";
import { enrollments } from "./Database/";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: courses,
  enrollments: enrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollmentStatus(state, action) {
      const { userId, courseId } = action.payload;

      const checkEnrollment = state.enrollments.some(
        (enrollment) => enrollment.user === userId && enrollment.course === courseId
      );
      
      if (checkEnrollment) {
        state.enrollments = state.enrollments.filter(
          (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
        );
      } else {
        state.enrollments.push({_id: new Date().getTime.toString(), user: userId, course: courseId });
      }

      localStorage.setItem('enrollments', JSON.stringify(state.enrollments))
    }
  }
});

export const {enrollmentStatus} = enrollmentSlice.actions;
export default enrollmentSlice.reducer;