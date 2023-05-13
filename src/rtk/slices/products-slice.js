import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://fakestoreapiserver.reactbd.com/products";
// const apiUrl = "https://fakestoreapiserver.reactbd.com/walmart";

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async () => {
    const res = await axios.get(apiUrl);
    const data = await res.data;
    return data;

})

export const productsSlice = createSlice({
    initialState: [],
    name: "productsSlice",
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const {} = productsSlice.actions;
export default productsSlice.reducer;