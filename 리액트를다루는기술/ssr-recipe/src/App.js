import './App.css';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';

const App = () => {
    return (
        <div>
            <Menu></Menu>
            <hr></hr>
            <Route path="/red" component={RedPage}></Route>
            <Route path="/blue" component={BluePage}></Route>
        </div>
    );
};

export default App;
