import {createSlice} from "@reduxjs/toolkit";

const listFormSlice = createSlice({
  name: "listForm",
  initialState: {
    content: "",
    color: "#4dabff",
    isValidForm: false,
    isOpen: false,
  },
  reducers: {
    setOpenForm: (state, action) => {
      return {
        ...state,
        content: "",
        color: "#4dabff",
        isValidForm: false,
        isOpen: action.payload,
      };
    },
    handleChangeContent: (state, action) => {
      return {...state, content: action.payload};
    },
    handleChangeColor: (state, action) => {
      return {...state, color: action.payload};
    },
    handleValidForm: (state, action) => {
      return {...state, isValidForm: action.payload};
    },
  },
});

export const {
  setOpenForm,
  handleChangeContent,
  handleChangeColor,
  handleValidForm,
} = listFormSlice.actions;

export default listFormSlice.reducer;
