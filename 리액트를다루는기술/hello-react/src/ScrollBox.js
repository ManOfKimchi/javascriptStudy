import React, { Component } from 'react';
import './ScrollBox.css';

class ScrollBox extends Component {
    /**
     * scrollTop: vertical scroll pos (0~350)
     * scrollHeight: inner box height (650)
     * clientHeight: box height (300)
     */
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    };
    render() {
        return (
            <div className="scroll-box" ref={(ref) => (this.box = ref)}>
                <div className="scroll-box-inner"></div>
            </div>
        );
    }
}

export default ScrollBox;
