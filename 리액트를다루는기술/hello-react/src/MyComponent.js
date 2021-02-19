import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'default name'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.isRequired,
    };
    render() {
        const { name, children, favoriteNumber } = this.props;
        return (
            <div>
            my name is {name} <br />
            children is {children} <br />
            my favorite number is {favoriteNumber}
            </div>
        );
    }
}

// 함수형 컴포넌트
// import React from 'react';
// import PropTypes from 'prop-types';

// const MyComponent = ({ name, children, favoriteNumber }) => {
//     // const { name, children } = props;
//     return (
//         <div>
//             my name is {name} <br />
//             children is {children} <br />
//             my favorite number is {favoriteNumber}
//         </div>
//     )
// }

MyComponent.defaultProps = {
    name: 'asdasd'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
}

export default MyComponent;