import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice,
        carts: cartSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch