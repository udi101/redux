import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
    isAuthenticated:false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
            localStorage.setItem('name','Udi Mazor');
            state.isAuthenticated = true;
        },
        logout(state){
            localStorage.clear('name');
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;
