import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0,
    //     };
    // }
    state = {
        number: 0,
        fixedNumber: 0,
    };
    render() {
        const { number, fixedNumber } = this.state;
        const onClick = () => {
            this.setState(
                (prevState, props) => ({
                    number: prevState.number + 1,
                }),
                () => {
                    console.log('callback test', this.state);
                }
            );
            this.setState((prevState, props) => ({
                number: prevState.number + 1,
            }));
        };
        return (
            <div>
                <h1>{number}</h1>
                <h2>fixed: {fixedNumber}</h2>
                <button onClick={onClick}>+1</button>
            </div>
        );
    }
}

export default Counter;
