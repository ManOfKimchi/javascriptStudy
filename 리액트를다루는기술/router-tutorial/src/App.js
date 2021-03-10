import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import WithRouterSample from './WithRouterSample';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Introduce</Link>
                </li>
                <li>
                    <Link to="/profiles">Profiles</Link>
                </li>
                <li>
                    <Link to="/history">History Example</Link>
                </li>
            </ul>
            <hr></hr>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path={['/about', '/info']} component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route
                    render={({ location }) => (
                        <div>
                            <h2>page does not exist.</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                ></Route>
            </Switch>
        </div>
    );
};

export default App;
