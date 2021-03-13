import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const apiKey = 'c8101c0596de4f388afa1f20455dd403';
const url = 'https://newsapi.org/v2/top-headlines';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`${url}?country=kr&apiKey=${apiKey}${query}`);
    }, [category]);

    if (loading) {
        return <NewsListBlock>wait..</NewsListBlock>;
    }
    if (!response) {
        return null;
    }
    if (error) {
        return <NewsListBlock>An error occured!</NewsListBlock>;
    }

    const { articles } = response.data;

    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article}></NewsItem>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
