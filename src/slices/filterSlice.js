import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "New",
  reducers: {
    byNew: () => "New",
    byAscending: () => "Ascending",
    byDescending: () => "Descending",
    byFilter: (state, action) => action.payload,
  },
});

export const { byNew, byAscending, byDescending, byFilter } = filterSlice.actions;
export default filterSlice.reducer;


  