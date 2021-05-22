import './App.css';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';
// import RedPage from './pages/RedPage';
// import BluePage from './pages/BluePage';
// import UsersPage from './pages/UsersPage';
const RedPage = loadable(() => import('./pages/RedPage'));
const BluePage = loadable(() => import('./pages/BluePage'));
const UsersPage = loadable(() => import('./pages/UsersPage'));

const App = () => {
    return (
        <div>
            <Menu></Menu>
            <hr></hr>
            <Route path="/red" component={RedPage}></Route>
            <Route path="/blue" component={BluePage}></Route>
            <Route path="/users" component={UsersPage}></Route>
        </div>
    );
};

export default App;
