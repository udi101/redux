import React from 'react';
import { Link, useLocation, Outlet } from "react-router-dom";

const Welcome = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams.get('admin'));
    return (
        <div className="container text">
            <span>Welome user
            <Link to='?admin=true' className='text'> Admin</Link></span>
            <Outlet />
            {/* <Routes>
            <Route path='new-user' element={<div className="textColor">Welcome new User</div>}>
                
            </Route>
            </Routes> */}
        </div>
    )
}


export default React.memo(Welcome);