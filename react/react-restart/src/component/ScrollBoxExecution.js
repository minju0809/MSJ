import React, { Component } from 'react';
import ScrollBox from "./ScrollBox";

class ScrollBoxExecution extends Component {

  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default ScrollBoxExecution;
