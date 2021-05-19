import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/task/taskSlice'
import taskListReducer from '../features/task_list/taskListSlice'

const store = configureStore({
  reducer: {
    task: taskReducer,
    taskList: taskListReducer
  },
})

export default store
