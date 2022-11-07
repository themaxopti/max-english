import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'testttt',
    initialState: 4,
    reducers: {
        increment: (state, action: PayloadAction<number>) => state + action.payload,
    },
})

export const someSlice = slice
