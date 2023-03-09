import { createSlice } from "@reduxjs/toolkit";

const workReducer = createSlice({
    name: 'work',
    initialState: null,
    reducers: {
        setWork: (state, action) => action.payload
    }
})

export const { setWork } = workReducer.actions
export default workReducer.reducer