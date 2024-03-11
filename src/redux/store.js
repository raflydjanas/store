import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/slice";

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

console.table('on create store', store.getState());

store.subscribe(() => {
    console.table('store change', store.getState());
});

export default store;