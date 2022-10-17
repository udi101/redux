import React, { useEffect, useState } from 'react';
// import { Prompt } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from './../store/auth';
import classes from './Auth.module.css';


const Auth = () => {
  const dispatch = useDispatch()
  const [isDirty, setIsDirty] = useState(false);

  const authSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  }

  const formFocusHandler = () => {
    setIsDirty(true);
    !isDirty && console.log('Form is focused');
  };

useEffect(() => {
  if(!!localStorage.getItem('name')) {
    dispatch(authActions.login());
  }},[dispatch])

  return (
    <React.Fragment>
    {/* <Prompt when={isDirty} message={(location) => 'Are you sure you wan\'t to leave this page? all your data will be lost!' } /> */}
    <main className={classes.auth}>
      <section>
        <form onSubmit={authSubmitHandler} onFocus={formFocusHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
    </React.Fragment>
  );
};

export default Auth;
