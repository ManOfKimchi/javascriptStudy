import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const apiKey = 'c8101c0596de4f388afa1f20455dd403';
const url = 'https://newsapi.org/v2/top-headlines';

const App = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback((category) => setCategory(category), []);

    return (
        <>
            <Categories category={category} onSelect={onSelect}></Categories>
            <NewsList apiKey={apiKey} url={url} category={category}></NewsList>
        </>
    );
};

export default App;
