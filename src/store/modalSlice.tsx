import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  openModal: 'none'
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    changeOpenModal: (state, action) => {
      state.openModal = action.payload
    },
  }
})

export const { changeOpenModal } = modalSlice.actions
export default modalSlice.reducer