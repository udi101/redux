import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="container text">
            Welome user
            <Route path='/welcome/new-user'>
                <div className="textColor">Welcome new User</div>
            </Route>
        </div>
    )
}


export default Welcome;