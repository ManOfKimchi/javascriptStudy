import logo from './logo.svg';
import './App.css';
// import notify from './notify';
import React, { Component, useState, Suspense } from 'react';

const SplitMe = React.lazy(() => import('./SplitMe'));

function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(!visible);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"></img>
                <p onClick={onClick}>Hello!</p>
                <Suspense fallback={<div>Loading...</div>}>
                    {visible && <SplitMe></SplitMe>}
                </Suspense>
            </header>
        </div>
    );
}

// state를 이용한 코드 스플리팅 예제
// class App extends Component {
//     state = {
//         SplitMe: null,
//     };

//     handleClick = async () => {
//         const loadedModule = await import('./SplitMe');
//         this.setState({
//             SplitMe: loadedModule.default,
//         });
//     };

//     render() {
//         const { SplitMe } = this.state;
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo"></img>
//                     <p onClick={this.handleClick}>Hello</p>
//                     {SplitMe && <SplitMe></SplitMe>}
//                 </header>
//             </div>
//         );
//     }
// }

export default App;
