// functional component
import React, { useState } from 'react';

const EventPractice = (props) => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const { username, message } = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: '',
        });
    };
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>event practice</h1>
            <input
                type="text"
                name="username"
                placeholder="user name"
                value={username}
                onChange={onChange}
                onKeyPress={onKeyPress}
            ></input>
            <input
                type="text"
                name="message"
                placeholder="type anything.."
                onChange={onChange}
                value={message}
                onKeyPress={onKeyPress}
            ></input>
            <button onClick={onClick}>OK</button>
        </div>
    );
};

export default EventPractice;

// class component
// import React, { Component } from 'react';

// class EventPractice extends Component {
//     state = {
//         message: '',
//         username: '',
//     };
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     };
//     handleClick = () => {
//         alert(this.state.username + ': ' + this.state.message);
//         this.setState({
//             message: '',
//             username: '',
//         });
//     };
//     handleKeyPress = (e) => {
//         console.log(e.key);
//         if (e.key === 'Enter') {
//             this.handleClick();
//         }
//     };
//     render() {
//         const { message } = this.state;
//         const { handleChange, handleClick } = this;
//         return (
//             <div>
//                 <h1>event practice</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="user name"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 ></input>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="type anything.."
//                     onChange={handleChange}
//                     value={message}
//                     onKeyPress={this.handleKeyPress}
//                 ></input>
//                 <button onClick={handleClick}>OK</button>
//             </div>
//         );
//     }
// }

// export default EventPractice;
