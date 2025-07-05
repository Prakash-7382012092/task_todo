import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./taskSlice";



const store = configureStore({
    reducer:{
        tasks:TaskReducer
    }
})
export default store;