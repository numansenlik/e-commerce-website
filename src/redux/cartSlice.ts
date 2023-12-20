import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStroge = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    }else {
    return []
    }
}

const initialState = {
    cart: fetchFromLocalStroge(),
    itemCount : 0,
    totalAmount: 0
}

const cartSlice = createSlice({
name: "cart",

})