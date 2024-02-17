import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null
    },
    reducers:{
        login:(state, action) =>{
            console.log("kittty");
            state.user =action.payload;
        },
        logout: (state) => {
            console.log("ethiya");
            state.user =null
        },
    },
});

export const {login, logout} =userSlice.actions

export const selectUser =(state) => state.user.user;

export default userSlice.reducer

