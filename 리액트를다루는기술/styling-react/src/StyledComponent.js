import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768,
};

/**
 * 해당 키의 함수로 파라미터 전달하면 @media 속성 생성하는 형태
 * media: {
 *  desktop: () => {}
 *  tablet: () => {}
 * }
 *
 * media.desktop`width: 768px;`
 */
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});

const Box = styled.div`
    background: ${(props) => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;
    /* @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%auto;
    } */
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`}
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }
    ${(props) =>
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;
            &:hover {
                background: white;
                color: black;
            }
        `}
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <Box color="black">
        <Button>Hi</Button>
        <Button inverted={true}>border</Button>
    </Box>
);

export default StyledComponent;
