import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };
    myRef = null;
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    /**
     * 16.3v 이후 매서드
     * props로 받은 값을 state에 동기화
     * 컴포넌트 마운트/업데이트 시 호출
     * @param {*} nextProps
     * @param {*} prevState
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        return nextProps.color !== prevState.color
            ? { color: nextProps.color }
            : null;
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return prevProps.color !== this.props.color
            ? this.myRef.style.color
            : null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        if (snapshot) {
            console.log('before color: ', snapshot);
        }
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };
    render() {
        console.log('render');
        const style = {
            color: this.props.color,
        };
        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={(ref) => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default LifeCycleSample;
