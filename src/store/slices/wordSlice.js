import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getCookie from "../../services/getCookie";
import axios from "axios";

export const fetchEditWord = createAsyncThunk(
  "word/fetchEditWord",
  async function (wordId) {
    const response = await axios.get(
      `http://localhost:8010/proxy/api/get/word?id=${wordId}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getCookie("api")}`,
        },
      }
    );
    if (response.data.success) return response.data;
  }
);

export const fetchClearForm = createAsyncThunk(
  "clear/fetchClearForm",
  async function () {
    const response = await axios.get(
      "http://localhost:8010/proxy/api/clear/form",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getCookie("api")}`,
        },
      }
    );
    if (response.data.success) return response.data;
  }
);

const wordSlice = createSlice({
  name: "word",
  initialState: {
    loading: false,
    word: { value: "", translate: "", image: "" },
    error: null,
  },
  extraReducers: {
    [fetchEditWord.pending]: (state) => {
      state.loading = true;
    },
    [fetchEditWord.fulfilled]: (state, action) => {
      state.word = action.payload.word;
      state.loading = false;
    },
    [fetchEditWord.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchClearForm.pending]: (state) => {
      state.loading = true;
    },
    [fetchClearForm.fulfilled]: (state, action) => {
      state.word = action.payload.word;
      state.loading = false;
    },
    [fetchClearForm.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default wordSlice.reducer;
