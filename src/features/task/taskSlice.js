import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
  }
});

export const { } = taskSlice.actions;

export default taskSlice.reducer;
