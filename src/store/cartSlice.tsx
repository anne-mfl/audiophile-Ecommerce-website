import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "types";

const initialCartState: {
  items: CartItemType[]
  totalQuantity: number
  totalPrice: number
} = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0
}

let localStorageCart = JSON.parse(localStorage.getItem('cart') || '{}')
console.log(localStorageCart)

const cartSlice = createSlice({
  name: 'cart',
  initialState: !localStorageCart ? initialCartState : localStorageCart,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find((item: CartItemType) => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + action.payload.quantity
        state.totalPrice = state.totalPrice + (action.payload.quantity * action.payload.price)
        state.totalQuantity = state.totalQuantity + action.payload.quantity
      } else {
        state.items.push(action.payload)
        state.totalPrice = state.totalPrice + (action.payload.quantity * action.payload.price)
        state.totalQuantity = state.totalQuantity + action.payload.quantity
      }
    },
    resetCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },
    addItemByOne: (state, action) => {
      const existingItem = state.items.find((item: CartItemType) => item.id === action.payload)
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1
        state.totalPrice = state.totalPrice + existingItem.price
        state.totalQuantity = state.totalQuantity + 1
      }
    },
    removeItemByOne: (state, action) => {
      const existingItem = state.items.find((item: CartItemType) => item.id === action.payload)
      if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item: CartItemType) => item.id !== existingItem.id)
        state.totalPrice = state.totalPrice - existingItem.price
        state.totalQuantity = state.totalQuantity - 1
      } else if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity = existingItem.quantity - 1
        state.totalPrice = state.totalPrice - existingItem.price
        state.totalQuantity = state.totalQuantity - 1
      }
    }
  }
})

export const { addItemToCart, resetCart, addItemByOne, removeItemByOne } = cartSlice.actions
export default cartSlice.reducer
