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
      let currentState = [...state.value];

      let lastId =
        currentState.length > 0
          ? Math.max.apply(
              Math,
              currentState.map(function (item) {
                return parseInt(item.id.split("-")[1]);
              })
            )
          : 0;

      let tmpLists = JSON.parse(localStorage.getItem("lists"));
      let currentList = tmpLists.find(
        (item) => item.id === action.payload.list_id
      );

      action.payload.id = "task-" + (lastId + 1);
      action.payload.offset = currentList.tasksCount;

      let tmpTasks = localStorage.getItem("tasks");
      tmpTasks = tmpTasks ? JSON.parse(localStorage.getItem("tasks")) : [];
      tmpTasks.unshift(action.payload);
      localStorage.setItem("tasks", JSON.stringify(tmpTasks));

      return {...state, value: [action.payload, ...state.value]};
    },
    updateTask: (state, action) => {
      const tasks = state.value.map((task) => {
        if (task.id === action.payload.id) {
          task = action.payload;
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
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
