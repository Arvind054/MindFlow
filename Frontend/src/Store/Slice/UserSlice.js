import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login:(state, action)=>{
            state.user = action.payload,
            state.isAuthenticated = true
        },
        logout:(state)=>{
          state.user = null,
          state.isAuthenticated = false
        },
        updateUser:(state, action)=>{
            state.user = { ...state.user, ...action.payload };
        }

    }
})
export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;