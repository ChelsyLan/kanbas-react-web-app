import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments:(state,action)=>{
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: payload.title,
        course: payload.course,
        description: payload.description || "",
        due_date: payload.due_date,
        points: parseInt(payload.points),
        available_date: payload.available_date,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
  },
});
export const { setAssignments,addAssignment, deleteAssignment, updateAssignment} =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
