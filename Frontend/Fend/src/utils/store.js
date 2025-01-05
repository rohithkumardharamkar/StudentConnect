import {configureStore} from "@reduxjs/toolkit"
import postReducer from './postSlice'
let store=configureStore({
    reducer:{
        post:postReducer
    }
})
export default store