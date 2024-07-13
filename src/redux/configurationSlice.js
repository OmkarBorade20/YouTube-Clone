import { createSlice } from "@reduxjs/toolkit"

const configurationSlice=createSlice({
    name:'configurations',
    initialState:{
        toggleMenu:false,
    },
    reducers:{
        toggleMenuBtn:(state)=>{
            state.toggleMenu=!state.toggleMenu;
        },
        closeMenu:(state,action)=>{
            state.toggleMenu=action.payload;
        }
    }

})

export const {toggleMenuBtn,closeMenu}=configurationSlice.actions;

export default configurationSlice.reducer;