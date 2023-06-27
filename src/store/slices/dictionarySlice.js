import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getCookie from "../../services/getCookie";
import axios from "axios";

export const fetchDictinary = createAsyncThunk(
  "dictionaty/fetchArticles",
  async function () {
    const response = await axios.get(
      "http://localhost:8010/proxy/api/get/dictionary",
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

export const fetchRemoveWord = createAsyncThunk(
  "dictionaty/fetchRemoveWord",
  async function (wordId) {
    const response = await axios.get(
      `http://localhost:8010/proxy/api/remove/word?id=${wordId}`,
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

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: {
    loading: false,
    dictionary: [],
    error: null,
  },
  extraReducers: {
    [fetchDictinary.pending]: (state) => {
      state.loading = true;
    },
    [fetchDictinary.fulfilled]: (state, action) => {
      state.dictionary = action.payload.words;
      state.loading = false;
    },
    [fetchDictinary.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default dictionarySlice.reducer;
