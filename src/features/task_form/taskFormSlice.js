import {createSlice} from "@reduxjs/toolkit";

const taskFormSlice = createSlice({
  name: "taskForm",
  initialState: {
    listId: null,
  },
  reducers: {
    openForm: (state, action) => {
      return {...state, listId: action.payload};
    },
    closeForm: (state) => {
      return {...state, listId: null};
    },
  },
});

export const {openForm, closeForm} = taskFormSlice.actions;

export default taskFormSlice.reducer;
