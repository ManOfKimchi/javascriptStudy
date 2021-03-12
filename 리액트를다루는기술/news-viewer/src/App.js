import React, { useState } from 'react';
import NewsList from './components/NewsList';

const apiKey = 'c8101c0596de4f388afa1f20455dd403';
const newsParam = 'https://newsapi.org/v2/top-headlines';

const App = () => {
    return <NewsList></NewsList>;
};

export default App;
