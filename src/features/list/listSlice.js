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

      let lastId =
        currentState.length > 0
          ? Math.max.apply(
              Math,
              currentState.map(function (item) {
                return item.id;
              })
            )
          : 0;

      action.payload.id = lastId + 1;

      let tmpLists = localStorage.getItem("lists");
      tmpLists = tmpLists ? JSON.parse(localStorage.getItem("lists")) : [];
      tmpLists.push(action.payload);
      localStorage.setItem("lists", JSON.stringify(tmpLists));

      return {...state, value: [...state.value, action.payload]};
    },
    updateList: (state, action) => {
      let lists = state.value.map((list) => {
        if (list.id === action.payload.id) {
          list = action.payload;
        }
        return list;
      });

      localStorage.setItem("lists", JSON.stringify(lists));

      return {...state, value: [...lists]};
    },
    destroyList: (state, action) => {
      let lists = state.value.filter((list) => list.id !== action.payload);

      let tmpTasks = localStorage.getItem("tasks");
      tmpTasks = tmpTasks ? JSON.parse(localStorage.getItem("tasks")) : [];

      let tasks = tmpTasks.filter((item) => item.list_id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      localStorage.setItem("lists", JSON.stringify(lists));
      return {...state, value: [...lists]};
    },
  },
});

export const {setLists, addList, updateList, destroyList} = listSlice.actions;

export default listSlice.reducer;
