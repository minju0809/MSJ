import React, { Component } from 'react';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
import LifeCycleSample from './LifeCycleSample';

// 랜덤 색상 생성
function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox=ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨 밑으로
      //   </button>
      // </div>
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/>
      </div>

    );
  }
}

export default App;
