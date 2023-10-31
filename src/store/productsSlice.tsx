import { createSlice } from "@reduxjs/toolkit"
import products from 'data.json'

const initialProductsState = products

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {}
})

export const productsActions = productsSlice.actions

export default productsSlice.reducer