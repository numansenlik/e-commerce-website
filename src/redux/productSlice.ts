import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS, Status } from "../utils/status";

export interface IProduct {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

interface IProducts {
    products: IProduct[],
    productsStatus: Status,
    productDetail: IProduct[],
    productDetailStatus: Status
}

const initialState: IProducts = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk('getproducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
})

export const getCategoryProducts = createAsyncThunk('getcategoryproducts', async (category: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()
    return data
})

export const getDetailProducts = createAsyncThunk('getdetailproducts', async (id: number) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.productsStatus = STATUS.LOADING
            })
            .addCase(getProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state) => {
                state.productsStatus = STATUS.FAIL
            })
            .addCase(getDetailProducts.pending, (state) => {
                state.productDetailStatus = STATUS.LOADING
            })
            .addCase(getDetailProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.productDetail = action.payload
            })
            .addCase(getDetailProducts.rejected, (state) => {
                state.productDetailStatus = STATUS.FAIL
            })
            .addCase(getCategoryProducts.pending, (state) => {
                state.productsStatus = STATUS.LOADING
            })
            .addCase(getCategoryProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload
            })
            .addCase(getCategoryProducts.rejected, (state) => {
                state.productsStatus = STATUS.FAIL
            })
    }
})

export default productSlice.reducer;