import {createSlice} from "@reduxjs/toolkit";

const listAnchor = createSlice({
  name: "listAnchorEl",
  initialState: {
    anchorEl: null,
    listId: null,
  },
  reducers: {
    setAnchorEl: (state, action) => {
      return {...state, anchorEl: action.payload};
    },
    setCurrentListId: (state, action) => {
      return {...state, listId: action.payload};
    },
  },
});

export const {setAnchorEl, setCurrentListId} = listAnchor.actions;

export default listAnchor.reducer;
