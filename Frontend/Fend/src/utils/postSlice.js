import { createSlice } from "@reduxjs/toolkit";


let postSlice=createSlice({
    name:'post',
    initialState:{
        items:[]
    },
    reducers:{
        addpost:(state,action)=>
        {
            state.items.push(action.payload);
        }
        ,
        clearpost:(state)=>
        {
            state.items.length=0
        }
    }
})
export let {addpost,clearpost} =postSlice.actions;
export default postSlice.reducer;