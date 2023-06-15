import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const store =configureStore({
    reducer:{
        cart:UserSlice,
    },
});

export default store;