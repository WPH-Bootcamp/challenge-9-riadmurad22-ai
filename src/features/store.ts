import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlices"; 
import filterReducer from "./filters/filterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
  },
});

// PASTIKAN ADA KATA 'export' DI BAWAH INI
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;