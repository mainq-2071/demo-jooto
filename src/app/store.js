import {configureStore} from "@reduxjs/toolkit";
import listReducer from "../features/list/listSlice";
import taskReducer from "../features/task/taskSlice";
import taskFormReducer from "../features/task_form/taskFormSlice";

const store = configureStore({
  reducer: {
    lists: listReducer,
    tasks: taskReducer,
    isTaskFormOpen: taskFormReducer,
  },
});

export default store;
