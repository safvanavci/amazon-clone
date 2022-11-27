import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
    quantity: 1,
    total: 0,
  },
  reducers: {
    addBasket: (state, action) => {
      if (state.items.find((item) => item.id === action.payload.id)) {
        state.items.find(
          (item) => (item.quantity = item.quantity + state.quantity)
        );
      } else {
        state.items.unshift({ ...action.payload, quantity: state.quantity });
      }
      state.total = state.total + action.payload.price * state.quantity;
    },
    setQuantity: (state, action) => {
      state.quantity = Number(action.payload);
    },
    remove: (state, action) => {
      const removeItem = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.total =
        state.total - action.payload.price * action.payload.quantity;
      state.items = removeItem;
    },
  },
});

export const { addBasket, setQuantity, remove } = BasketSlice.actions;
export default BasketSlice.reducer;
