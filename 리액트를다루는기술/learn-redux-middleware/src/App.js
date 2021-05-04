import React from 'react';
import SampleContainer from './containers/SampleContainer';
import CounterContainer from './containers/CounterContainer';

const App = () => {
    return (
        <div>
            <CounterContainer></CounterContainer>
            <hr></hr>
            <SampleContainer />
        </div>
    );
};

export default App;
