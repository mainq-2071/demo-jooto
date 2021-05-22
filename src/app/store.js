import { configureStore } from '@reduxjs/toolkit'
import listReducer from '../features/list/listSlice'
import taskReducer from '../features/task/taskSlice'

const store = configureStore({
  reducer: {
    lists: listReducer,
    tasks: taskReducer
  },
})

export default store
