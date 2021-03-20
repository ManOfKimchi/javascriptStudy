import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
    return (
        <div>
            <CounterContainer></CounterContainer>
            <hr></hr>
            <TodosContainer></TodosContainer>
        </div>
    );
};

export default App;
