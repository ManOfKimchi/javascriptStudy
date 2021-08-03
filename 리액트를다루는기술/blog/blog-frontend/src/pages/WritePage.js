import React from 'react';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import Responsive from '../components/common/Responsive';

const WritePage = () => {
    return (
        <Responsive>
            <Editor></Editor>
            <TagBox></TagBox>
        </Responsive>
    );
};

export default WritePage;
