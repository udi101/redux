import classes from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const logOutHandler = () => {
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
            <NavLink activeClassName={classes.active} to='/menu'>Menu</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/counter'>Counter</NavLink>
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
