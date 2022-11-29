import { createSlice } from "@reduxjs/toolkit";

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    side: true,
  },
  reducers: {
    showSidebar: (state) => {
      state.side = state.side === true ?  false :  true
    },
  },
});

export const { showSidebar } = SidebarSlice.actions;
export default SidebarSlice.reducer;
