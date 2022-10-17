import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import MenuItemDetails from './pages/MenuItemDetails';
import Welcome from './pages/Welcome';
import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from './components/Menu';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <React.Fragment>

      <Header>
      { isAuth ? <UserProfile /> : <Auth /> }
      <Routes>
      {isAuth &&
 
      <Route path='/counter' element={<Counter />}>
      </Route>
      }
      

      <Route path='/' element={<Navigate replace to='/welcome' />} />

      <Route path='/welcome/*' element={<Welcome />}>
        <Route path='new-user' element={<div className="textColor">Welcome new User</div>} />
      </Route>


      {isAuth && 

      <Route path='/menu' element={<Menu />} />

      }


      <Route path='/menu/:itemId' element={ <MenuItemDetails />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
      </Header>
    </React.Fragment>
  );
}

export default App;
