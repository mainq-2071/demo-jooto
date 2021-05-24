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
      let currentState = [...state.value];
      action.payload.id = currentState.length + 1;

      let tmpLists = localStorage.getItem("lists");
      tmpLists = tmpLists ? JSON.parse(localStorage.getItem("lists")) : [];
      tmpLists.push(action.payload);
      localStorage.setItem("lists", JSON.stringify(tmpLists));

      return {...state, value: [...state.value, action.payload]};
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
