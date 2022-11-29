import { createSlice } from "@reduxjs/toolkit";

export const OutlineSlice = createSlice({
  name: "outline",
  initialState: {
    value: "border-transparan",
  },
  reducers: {
    outlineShow: (state) => {
      state.value = state.value === "border-transparan" ? "border-orange " : "border-transparan";
    },
  },
});

export const { outlineShow } = OutlineSlice.actions;
export default OutlineSlice.reducer;
