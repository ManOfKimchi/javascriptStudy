import React, { Component } from 'react';
import './App.css';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
// import IterateSample from './IterateSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    // LifeCycleSample
    state = {
        color: '#000000',
    };
    handleClick = () => {
        this.setState({
            color: getRandomColor(),
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Random Color</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}></LifeCycleSample>
                </ErrorBoundary>
            </div>
        );
    }
    // ScrollBox
    // render() {
    //     return (
    //         <div>
    //             <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
    //             <button onClick={() => this.scrollBox.scrollToBottom()}>
    //                 ↓
    //             </button>
    //         </div>
    //     );
    // }
}

export default App;
