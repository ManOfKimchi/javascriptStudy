import logo from './logo.svg';
import './App.css';
// import notify from './notify';
import React, { Component, useState, Suspense } from 'react';
// SSR 할때 사용하기를 권장하는 라이브러리
import loadable from '@loadable/component';

const SplitMe = loadable(() => import('./SplitMe'), {
    fallback: <div>Loading...</div>,
});

function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(!visible);
    };
    const onMouseOver = () => {
        SplitMe.preload();
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"></img>
                <p onClick={onClick} onMouseOver={onMouseOver}>
                    Hello!
                </p>
                {visible && <SplitMe></SplitMe>}
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
