import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface ICartSlice {
    carts: ICartItem[];
    itemCount: number;
    totalAmount: number;
}

const fetchFromLocalStroge = (): ICartItem[] => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    } else {
        return [];
    }
}

const storeInLocalStroge = (data: ICartItem[]): void => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState: ICartSlice = {
    carts: fetchFromLocalStroge(),
    itemCount: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id)
            if (isItemCart) {
                const tempCart = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty * item.price;
                        return {
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item
                    }
                })

                state.carts = tempCart;
                storeInLocalStroge(state.carts)
            } else {
                state.carts.push(action.payload)
                storeInLocalStroge(state.carts)
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload)
            state.carts = tempCart;
            storeInLocalStroge(state.carts)
        },
        clearCart: (state) => {
            state.carts = [];
            storeInLocalStroge(state.carts)
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                cartTotal += cartItem.price * cartItem.quantity
                cartTotal = parseFloat(cartTotal.toFixed(2));
                return cartTotal 
            }, 0)
            state.itemCount = state.carts.length
        }
    }
})

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions
export default cartSlice.reducer;
