
import classes from './Menu.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        const getMenu = async() => {
            try{
             const response  = await axios.get('http://localhost:3020/menu');
             setMenuItems(response.data);
            } catch(error) {
                throw new Error(error.message);
            }
            }
        getMenu();
    },[]);
    return (
        <div className={classes.menu}>
            <ul>
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