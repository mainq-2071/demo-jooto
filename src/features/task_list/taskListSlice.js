import { createSlice } from '@reduxjs/toolkit'

const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    value: [],
  },
  reducers: {
    getAll: (state) => {
      return state.value
    },
  },
})

export const { getAll } = taskListSlice.actions

export default taskListSlice.reducer
