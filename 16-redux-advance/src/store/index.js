import { configureStore, createSlice } from '@reduxjs/toolkit';

const toggleCartSlice = createSlice({
    name: 'toggleCart',
    initialState: {open: true},
    reducers: {
        toggleCartState (state) {
            state.open = !state.open;   
        }
    }
});

const itemsQuantitySlice = createSlice({
    name: 'itemsQuantity',
    initialState: {quantity: 3},
    reducers: {
        incrementQuantity (state) {
            state.quantity = state.quantity + 1
        },
        decrementQuantity (state) {
            state.quantity = state.quantity - 1
        }

    }
})

const store = configureStore({
    reducer: {
        toggle: toggleCartSlice.reducer,
        quantity: itemsQuantitySlice.reducer
    }
});

export const { toggleCartState } = toggleCartSlice.actions;
export const { incrementQuantity } = itemsQuantitySlice.actions;
export const { decrementQuantity } = itemsQuantitySlice.actions;

export default store;