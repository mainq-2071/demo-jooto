import {createSlice} from "@reduxjs/toolkit";

const taskFormSlice = createSlice({
  name: "taskForm",
  initialState: {
    listId: null,
    content: "",
    isValidForm: false,
  },
  reducers: {
    openForm: (state, action) => {
      return {
        ...state,
        listId: action.payload,
        content: "",
        isValidForm: false,
      };
    },
    closeForm: (state) => {
      return {...state, listId: null, content: "", isValidForm: false};
    },
    handleChangeContent: (state, action) => {
      return {...state, content: action.payload};
    },
    handleValidForm: (state, action) => {
      return {...state, isValidForm: action.payload};
    },
  },
});

export const {openForm, closeForm, handleChangeContent, handleValidForm} = taskFormSlice.actions;

export default taskFormSlice.reducer;
