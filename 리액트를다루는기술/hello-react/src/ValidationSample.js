import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    };
    handleChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };
    validCheck = (val) => {
        return val * 1 >= 0;
    };
    handleButtonClick = () => {
        this.setState(
            {
                clicked: true,
                validated: this.validCheck(this.state.password),
            },
            () => {
                this.input.focus();
            }
        );
    };
    render() {
        return (
            <div>
                <input
                    ref={(ref) => (this.input = ref)}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.validated ? 'success' : 'failure'}
                ></input>
                <button onClick={this.handleButtonClick}>Validate</button>
            </div>
        );
    }
}

export default ValidationSample;
