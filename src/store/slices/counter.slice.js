import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const counterSlice = createSlice({
  // En name pondremos el nombre de la variable sin Slice: counter
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      // const inputValue = action.payload;
      return state + 1;
      // return action.payload;
      // return inputValue;
      // return !state;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
