import { configureStore } from "@reduxjs/toolkit";
import outlineReducer from "./slices/OutlineSlice"
import sidebarReducer from "./slices/SidebarSlice"

export default configureStore({
  reducer: {
    outline: outlineReducer,
    sidebar: sidebarReducer,
  },
});
