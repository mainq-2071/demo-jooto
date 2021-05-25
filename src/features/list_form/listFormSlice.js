import {createSlice} from "@reduxjs/toolkit";

const listFormSlice = createSlice({
  name: "listForm",
  initialState: {
    listId: null,
    content: "",
    color: "#4dabff",
    isValidForm: false,
    isOpen: false,
    isEditing: false,
  },
  reducers: {
    setOpenForm: (state, action) => {
      return {
        ...state,
        listId: null,
        content: "",
        color: "#4dabff",
        isValidForm: false,
        isOpen: action.payload,
        isEditing: false,
      };
    },
    setOpenEditForm: (state, action) => {
      return {
        ...state,
        listId: action.payload.id,
        content: action.payload.name,
        color: action.payload.color,
        isOpen: true,
        isValidForm: true,
        isEditing: true,
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
  setOpenEditForm,
} = listFormSlice.actions;

export default listFormSlice.reducer;
