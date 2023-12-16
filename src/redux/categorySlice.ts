import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICategoryState {
    categories: string[];
}

const initialState: ICategoryState = {
    categories: [],
};

export const getCategories = createAsyncThunk(
    'category',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        return data;
    }
);

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        });
    },
});

export default categorySlice.reducer;
