import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  enrollments: [],
  showAllCourses:false,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enroll: (state, { payload: enrollment}) => {
        const newEnrollment :any = {
            _id:"",
            user:enrollment.user,
            course:enrollment.course
        }
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenroll: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter((id) => id !== enrollmentId);
    },
  },
});

export const { enroll, unenroll, toggleShowAllCourses } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
// export {};