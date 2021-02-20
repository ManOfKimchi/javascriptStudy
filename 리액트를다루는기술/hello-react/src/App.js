import React, { Component } from 'react';
import './App.css';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    ↓
                </button>
            </div>
        );
    }
}

export default App;
