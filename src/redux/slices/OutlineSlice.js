import { createSlice } from "@reduxjs/toolkit";

export const OutlineSlice = createSlice({
  name: "outline",
  initialState: {
    value: "border-transparan",
  },
  reducers: {
    outlineShow: (state) => {
      state.value === "border-transparan"
        ? (state.value = "border-orange ")
        : (state.value = "border-transparan");
    },
  },
});

export const { outlineShow } = OutlineSlice.actions;
export default OutlineSlice.reducer;
