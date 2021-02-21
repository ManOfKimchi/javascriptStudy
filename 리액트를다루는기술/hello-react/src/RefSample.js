import React, { Component } from 'react';

/**
 * "함수 컴포넌트는 인스턴스가 없기 때문에 함수 컴포넌트에 ref 어트리뷰트를 사용할 수 없습니다."
 * https://ko.reactjs.org/docs/refs-and-the-dom.html
 *
 * 그럼 억떡하냐!
 * -> useRef 사용 (Hook)
 */

class RefSample extends Component {
    input = React.createRef();
    handleFocus = () => {
        // ref 선언 후 current에 해당 DOM이나 커스텀 컴포넌트 등록됨
        this.input.current.focus();
    };
    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        );
    }
}

export default RefSample;
