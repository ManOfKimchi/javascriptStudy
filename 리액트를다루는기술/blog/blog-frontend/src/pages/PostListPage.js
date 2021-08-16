import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContianer from '../containers/posts/PaginationContianer';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <PostListContainer></PostListContainer>
            <PaginationContianer></PaginationContianer>
        </>
    );
};

export default PostListPage;
