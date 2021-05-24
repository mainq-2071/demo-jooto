import {configureStore} from "@reduxjs/toolkit";
import listReducer from "../features/list/listSlice";
import taskReducer from "../features/task/taskSlice";
import taskFormReducer from "../features/task_form/taskFormSlice";
import listFormReducer from "../features/list_form/listFormSlice";

const store = configureStore({
  reducer: {
    lists: listReducer,
    tasks: taskReducer,
    taskForm: taskFormReducer,
    listForm: listFormReducer,
  },
});

export default store;
