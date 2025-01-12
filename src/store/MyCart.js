import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalAmount: 0,
    isCartShow: false,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        cartToggle(state) {
            state.isCartShow = !state.isCartShow;
        },
        addItem(state, action) {
            const existingItem = state.items.find((item) => item.title === action.payload.title);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + action.payload.price;
                state.totalAmount = state.totalAmount + action.payload.price;
            } else {
                state.items.push({
                    title: action.payload.title,
                    price: action.payload.price,
                    description: action.payload.description,
                    quantity: 1,
                    totalPrice: action.payload.price,
                });
                state.totalQuantity++;
                state.totalAmount += action.payload.price;
            }
        },
        removeItem(state, action) {
            const existingItem = state.items.find((item) => item.title === action.payload.title);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((item) => item.title !== action.payload.title);
                    state.totalQuantity--;
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= action.payload.price;
                }
                state.totalAmount -= action.payload.price;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;