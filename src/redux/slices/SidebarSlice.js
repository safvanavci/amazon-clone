import { createSlice } from "@reduxjs/toolkit";

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    outside: "hidden",
    side: "-left-[397px]",
  },
  reducers: {
    showSidebar: (state) => {
      state.outside === "hidden"
        ? (state.outside = "")
        : (state.outside = "hidden");
      state.side === "-left-[397px]"
        ? (state.side = "left-0")
        : (state.side = "-left-[397px]");
    },
  },
});

export const { showSidebar } = SidebarSlice.actions;
export default SidebarSlice.reducer;
