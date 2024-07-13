import configurationSlice from "./configurationSlice";
import  { configureStore } from "@reduxjs/toolkit"
import videoSlice from "./videoSlice";

const appStore=configureStore({
    reducer:{
        configurations:configurationSlice,
        videos:videoSlice
    }
})

export default appStore;