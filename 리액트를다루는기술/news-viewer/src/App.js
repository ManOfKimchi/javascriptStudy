import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
    // :category? 에서 ?는 선택적이라는 뜻
    return <Route path="/:category?" component={NewsPage}></Route>;
};

export default App;
