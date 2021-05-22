import {createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    value: [],
  },
  reducers: {
    setTasks: (state, action) => {
      return {...state, value: [...action.payload]};
    },
    addTask: (state, action) => {
      return {...state, value: [action.payload, ...state.value]};
    },
    updateTask: (state, action) => {
      const tasks = state.value.map((task) => {
        if (task.id === action.payload.id) {
          task = action.payload;
        }
        return tasks;
      });
      return {...state, value: [...tasks]};
    },
    destroyTask: (state, action) => {
      const tasks = state.value.filter((task) => task.id !== action.payload.id);
      return {...state, value: [...tasks]};
    },
  },
});

export const {setTasks, addTask, updateTask, destroyTask} = taskSlice.actions;

export default taskSlice.reducer;
