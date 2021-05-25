import {createSlice} from "@reduxjs/toolkit";

const listAlert = createSlice({
  name: "listAlert",
  initialState: {
    isOpen: false,
    listID: null,
    listName: "",
  },
  reducers: {
    setOpenAlert: (state, action) => {
      return {...state, isOpen: action.payload};
    },
    setDestroyListId: (state, action) => {
      return {...state, listID: action.payload};
    },
    setDestroyListName: (state, action) => {
      return {...state, listName: action.payload};
    },
  },
});

export const {setOpenAlert, setDestroyListId, setDestroyListName} =
  listAlert.actions;

export default listAlert.reducer;
