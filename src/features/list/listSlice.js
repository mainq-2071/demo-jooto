import {createSlice} from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "lists",
  initialState: {
    value: [],
  },
  reducers: {
    setLists: (state, action) => {
      return {...state, value: [...action.payload]};
    },
    addList: (state, action) => {
      return {...state, value: [action.payload, ...state.value]};
    },
    updateList: (state, action) => {
      const lists = state.value.map((list) => {
        if (list.id === action.payload.id) {
          list = action.payload;
        }
        return lists;
      });
      return {...state, value: [...lists]};
    },
    destroyList: (state, action) => {
      const lists = state.value.filter((list) => list.id !== action.payload.id);
      return {...state, value: [...lists]};
    },
  },
});

export const {setLists, addList, updateList, destroyList} = listSlice.actions;

export default listSlice.reducer;
