import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsDashboard/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {products: ProductsState}
export type AppDispatch = typeof store.dispatch;

export default store;
