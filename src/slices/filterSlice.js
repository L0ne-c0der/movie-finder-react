import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    sortBy: "new", // new, ascending, descending, rating
  },
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    }
  },
});

export const { setSortBy } = filterSlice.actions;
export default filterSlice.reducer;


