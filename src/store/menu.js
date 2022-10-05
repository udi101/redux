import { createSlice } from '@reduxjs/toolkit';

const menuInitialState = { menuItems: [1,2,3] };

const menuSlice = createSlice({
    name: 'menu',
    initialState: menuInitialState,
    reducers: {
        getMenu(state){
            
        }
    }
})

export const menuActions = menuSlice.actions;
export default menuSlice;

