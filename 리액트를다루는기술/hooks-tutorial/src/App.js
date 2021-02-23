// import Counter from './Counter';
import Info from './Info';
import React, { useState } from 'react';
// import Counter from './Counter';
// import Average from './Average';

const App = () => {
    // return <Average></Average>;
    // return <Counter></Counter>;
    // INFO;
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? 'hide' : 'show'}
            </button>
            <hr></hr>
            {visible && <Info></Info>}
        </div>
    );
};

export default App;
