import { createSlice } from "@reduxjs/toolkit";


const userInfoSlice = createSlice({
    initialState: null,
    name:"userInfoSlice",
    reducers: {
        addUser: (state, action) => {
            return state = action.payload;
        },
        removeUser: (state, action) => {
            return null;
        },
    }
})

export const { addUser, removeUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;