
import classes from './Menu.module.css';
import { useEffect,  } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../store/menu-actions';

export const Menu = () => {
    const dispatch = useDispatch();
    const menuItems = useSelector(state => state.menu.menuItems);

    // Two ways to deal with sideEffects

    useEffect(() => {
        dispatch(getMenu());
    },[dispatch])

    // In the component way..
    // useEffect(() => {
    //     const getMenu = async() => {
    //         try {
    //          const response  = await axios.get('http://localhost:3020/mnu');
    //          await delay(2000);
    //          dispatch(menuActions.setMenuItems(response.data));
    //         } catch(error) {
    //             throw new Error(error.message);
    //         }}
    //     getMenu();
    // }, []);

    return (
        <div className={classes.menu}>
            <ul>
                { !Array.isArray(menuItems) && <div className={classes.loading}>Loading...</div>}
                { Array.isArray(menuItems) && menuItems.map(item => (
                <li className={classes.menuListItem} key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                    </li>
                    ))}
            </ul>
        </div>
    )
}