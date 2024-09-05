import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null,

}



const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
       SignUp : (state , action)=> {
            state.status = true,
            state.userData = action.payload
       } ,
       LogIn : (state , action) => {
        state.status = true,
        state.userData = action.payload
       }
    }
})

export const {SignUp , LogIn} = authSlice.actions;


export default authSlice.reducer