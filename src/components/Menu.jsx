
import classes from './Menu.module.css';
import { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../store/menu-actions';
import { Link, useRouteMatch } from 'react-router-dom';

export const Menu = () => {
    const dispatch = useDispatch();
    const menuItems = useSelector(state => state.menu.menuItems);

    // const match = useRouteMatch();
    // console.log(match);


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
                    // <Link to={`${match.url}/${item.id}`} key={item.id} >
                <li className={classes.menuListItem} >
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                    </li>
                    // </Link>
                    ))}
            </ul>
        </div>
    )
}