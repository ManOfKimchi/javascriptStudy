import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false,
    };
    componentDidCatch(error, info) {
        this.setState({
            error: true,
        });
        console.log({ error, info });
    }
    render() {
        const err = <div>An error has occured</div>;
        return this.state.error ? err : this.props.children;
    }
}

export default ErrorBoundary;
