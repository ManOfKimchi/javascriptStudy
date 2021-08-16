import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import { Helmet } from 'react-helmet-async';

const WritePage = () => {
    return (
        <Responsive>
            <Helmet>
                <title>WRITE</title>
            </Helmet>
            <EditorContainer></EditorContainer>
            <TagBoxContainer></TagBoxContainer>
            <WriteActionButtonsContainer></WriteActionButtonsContainer>
        </Responsive>
    );
};

export default WritePage;
