import classes from './MenuItemDetails.module.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Route } from 'react-router-dom';

const MenuItemDetails = () => {
    const {itemId} = useParams();
    return (
        <div className='container'>
                  <Route path='new-user'>
        Welcome new user
      </Route>
            <h1 className={classes.title}>Menu {itemId} Details</h1>
        </div>
    )
}

export default MenuItemDetails;