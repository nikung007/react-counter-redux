import { configureStore } from "@reduxjs/toolkit";
import  CounterSlice from "../features/counter/CounterSlice";
import ThemeSlice from "../Theme/ThemeSlice";

export  const store = configureStore ({
    reducer :{
        counter : CounterSlice,
        color : ThemeSlice,
    },
})