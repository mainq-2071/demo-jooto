import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: [
      {
        id: 1,
        name: 'This is task',
        list_id: 1
      },
      {
        id: 2,
        name: 'You can add a task asap!',
        list_id: 1
      },
      {
        id: 3,
        name: 'You can write down detail of task',
        list_id: 1
      },
      {
        id: 4,
        name: 'Move this task to next List!',
        list_id: 2
      },
      {
        id: 5,
        name: 'List too!',
        list_id: 2
      },
    ],
  },
  reducers: {
  },
})

export const { } = taskSlice.actions

export default taskSlice.reducer
