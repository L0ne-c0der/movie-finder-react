import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: "Top Rated",
  reducers: {
    toHome: () => "Home",
    toTopRated: () => "Top Rated",
    toUpcoming: () => "Upcoming",
    toSearch: () => "Search",
  },
});

export const { toHome, toTopRated, toUpcoming, toSearch } = navigationSlice.actions;
export default navigationSlice.reducer; // ✅ Export the reducer