import { createSlice } from "@reduxjs/toolkit";

export let incdecSlice = createSlice({
  name: "incdec",
  initialState: 10,
  reducers: {
    Inc: (state, action) => {
      return (state += 1);
    },

    Dec: (state, action) => {
      return (state -= 1);
    },
  },
});

export let { Inc, Dec } = incdecSlice.actions;
export default incdecSlice.reducer;
