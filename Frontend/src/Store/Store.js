import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slice/UserSlice'
import flowReducer from './Slice/FlowSlice'
const store = configureStore({
    reducer:{
        user: userReducer,
        flow: flowReducer
    }
});
export default store;