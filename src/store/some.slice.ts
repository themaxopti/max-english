import { createSlice } from "@reduxjs/toolkit";
import React from "react";


const slice2 = createSlice({
    name: 'ops',
    initialState: { some: 0 },
    reducers: {
    },
})

export const someSlice2 = slice2



// const slice3 = createSlice({
//     name: 'bops',
//     initialState: { some: 0, ops: '10' },
//     reducers: {
//     },
// })

// export const someSlice3 = slice3