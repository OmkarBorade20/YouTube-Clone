import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"videoSlice",
    initialState:{
        videoDetails:null,
        videoList:null,
    },
    reducers:{
        addVideo:(state,action)=>{
            state.videoDetails=action.payload;
        },
        addVideoList:(state,action)=>{
            state.videoList=action.payload;
        }
    }
});

export const {addVideo,addVideoList}=videoSlice.actions;

export default videoSlice.reducer;