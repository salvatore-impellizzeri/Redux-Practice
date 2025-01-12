import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './MyCart';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default store;