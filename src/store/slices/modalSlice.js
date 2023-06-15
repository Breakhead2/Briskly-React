import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    message: [],
    show: false,
  },
  reducers: {
    showModal(state, action) {
      state.show = true;
      state.message = action.payload;
    },
    closeModal(state) {
      state.show = false;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
