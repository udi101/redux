import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import MenuItemDetails from './pages/MenuItemDetails';
import Welcome from './pages/Welcome';
import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from './components/Menu';
import { Redirect, Route, Switch, exact } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <React.Fragment>

      <Header>
      { isAuth ? <UserProfile /> : <Auth /> }
      <Switch>
      {isAuth &&
      <Route path='/counter'>
        <Counter />
      </Route>
      }

      <Route path='/' exact>
        <Redirect to='/welcome' />
      </Route>
      <Route path='/welcome'>
        <Welcome />
        </Route>

      {isAuth && 
      <Route path='/menu' exact>
        <Menu />
      </Route>
      }
      <Route path='/menu/:itemId'>
        <MenuItemDetails />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
      </Switch>
      </Header>
    </React.Fragment>
  );
}

export default App;
