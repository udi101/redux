import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const menuInitialState = { menuItems: undefined };

const menuSlice = createSlice({
    name: 'menu',
    initialState: menuInitialState,
    reducers: {
        setMenuItems(state,action){
            state.menuItems = action.payload;
        },
        showError(state,action){
            console.log('%c This is a test error','color:darkBlue;font-size:15px;font-weight:700;background: #E0E0E0; padding:4px 12px;border-radius:8px')
        }
    }
})

export const menuActions = menuSlice.actions;
export default menuSlice;

