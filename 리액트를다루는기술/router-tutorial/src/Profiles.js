import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white',
    };
    return (
        <div>
            <h3>Users:</h3>
            <ul>
                <li>
                    <NavLink
                        activityStyle={activeStyle}
                        to="/profiles/manofkimchi"
                    >
                        ManOfKimchi
                    </NavLink>
                </li>
                <li>
                    <NavLink activityStyle={activeStyle} to="/profiles/gd">
                        GD
                    </NavLink>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>Select Charactor</div>}
            ></Route>
            <Route path="/profiles/:username" component={Profile}></Route>
        </div>
    );
};

export default Profiles;
