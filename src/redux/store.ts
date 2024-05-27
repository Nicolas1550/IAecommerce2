import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/features/user/userSlice";
import uiReducer from "../redux/features/ui/uiSlice";
import productReducer from "../redux/features/product/productSlice";
import cartReducer from "../redux/features/cart/cartSlice";
import sidebarReducer from "../redux/features/sidebar/sidebarSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      product: productReducer,
      ui: uiReducer,
      cart: cartReducer,
      sidebar: sidebarReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

