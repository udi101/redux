import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from './components/Menu';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <React.Fragment>
    <Header />
    {!isAuth && <Auth />}
    {isAuth && <UserProfile />}
    <Menu />
    <Counter />
    </React.Fragment>
  );
}

export default App;
