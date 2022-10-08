import { menuActions } from "./menu-slice"; 
import axios from "axios";

export const getMenu = () => {
    return async (dispatch) => {
        const getMenuItems = async () => {
             const response  = await axios.get('http://localhost:3020/menu');
             await delay(2000);
             return response.data;
        };

        try {
            const menuItems = await getMenuItems();
            dispatch(menuActions.setMenuItems(menuItems));
        }
        catch(error) {
           dispatch(menuActions.showError(error.message));
        }
    }
}

const delay = (delayTime) => {
    return new Promise((res,rej) => {
        setTimeout(() => { res(); },delayTime);
    });
}