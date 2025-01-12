import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    isCartShow: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        cartToggle(state) {
            state.isCartShow = !state.isCartShow;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;