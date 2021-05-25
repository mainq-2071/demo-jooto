import {configureStore} from "@reduxjs/toolkit";
import listReducer from "../features/list/listSlice";
import taskReducer from "../features/task/taskSlice";
import taskFormReducer from "../features/task_form/taskFormSlice";
import listFormReducer from "../features/list_form/listFormSlice";
import listAnchorReducer from "../features/list_anchor/listAnchorSlice";
import listAlertReducer from "../features/list_alert/listAlerSlice";

const store = configureStore({
  reducer: {
    lists: listReducer,
    tasks: taskReducer,
    taskForm: taskFormReducer,
    listForm: listFormReducer,
    listAnchorEl: listAnchorReducer,
    listAlert: listAlertReducer,
  },
});

export default store;
