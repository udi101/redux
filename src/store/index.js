import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter';
import authSlice from './auth';
import menuSlice from './menu-slice';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
        menu: menuSlice.reducer
    }
});

export default store;