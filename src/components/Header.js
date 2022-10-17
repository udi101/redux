import classes from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';

const Header = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const logOutHandler = () => {
    // history.replace('/');        // This is for version 5
    navigate('/', { replace:true })
    dispatch(authActions.logout());
  }

  return (
    <React.Fragment>
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
      <nav className='text'>
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''}  to='/menu'>Menu</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.isActive : '' } to='/counter'>Counter</NavLink>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
    </header>
    {props.children}
        </React.Fragment>
  );
};

export default Header;
