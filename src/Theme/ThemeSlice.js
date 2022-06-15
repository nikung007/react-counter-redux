import { createSlice } from "@reduxjs/toolkit";

const initialColor = {

    color1 : "",

}

export const colorSlice = createSlice ({
    name : 'color',
    initialState : initialColor,
    reducers : {
        changeColor : (state,action) => {
            state.color1 = action.payload
        },
    },
})

export const { changeColor } = colorSlice.actions

export default colorSlice.reducer