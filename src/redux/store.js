import { configureStore } from "@reduxjs/toolkit";
import outlineReducer from "./slices/OutlineSlice";
import sidebarReducer from "./slices/SidebarSlice";
import basketReducer from "./slices/BasketSlice";

export default configureStore({
  reducer: {
    outline: outlineReducer,
    sidebar: sidebarReducer,
    basket: basketReducer,
  },
});
