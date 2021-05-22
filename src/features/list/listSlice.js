import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
  name: 'lists',
  initialState: {
    value: [
      {
        id: 1,
        name: 'Welcome to Jooto!',
        color: '#FC78B9',
        taskCount: 0
      },
      {
        id: 2,
        name: 'This is List',
        color: '#36C398',
        taskCount: 0
      },
      {
        id: 3,
        name: 'Edit List name',
        color: '#4DABFF',
        taskCount: 0
      },
    ],
  },
  reducers: {
  },
})

export const { } = listSlice.actions

export default listSlice.reducer
