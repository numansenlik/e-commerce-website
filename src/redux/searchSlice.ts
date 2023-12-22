import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS, Status } from "../utils/status";
import { IProduct } from "./productSlice";


interface IProducts {
    products: IProduct[];
    productsStatus: Status;
    productDetail: IProduct; 
    productDetailStatus: Status;
}

const initialState: IProducts = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: {} as IProduct, 
    productDetailStatus: STATUS.IDLE
}


export const getSearchProducts = createAsyncThunk('searchproducts', async (keyword) => {
    const response = await fetch(`https://fakestoreapi.com/products/${keyword}`)
    const data = await response.json()
    return data
})


const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSearchProducts.pending, (state) => {
                state.productsStatus = STATUS.LOADING
            })
    }
})

export default searchSlice.reducer;