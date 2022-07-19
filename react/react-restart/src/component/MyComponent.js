import React, { Component } from "react";
import PropTypes from "prop-types";
import LifeCycleSample from "./LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
  };

  state = {
    number: 0,
    color: "#000000",

    username: "",
    message: "",

    arrays: ['눈사람', '얼음', '눈', '바람'],
    array: ''
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckClick = () => {
    alert(`${this.state.username} : ${this.state.message}`);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCheckClick();
    }
  };

  handleArrayChange = (e) => {
    this.setState({
      array: e.target.value
    });
  }

  handleArrayInsert = () => {
    //arrays 배열에 값을 추가하고, array 값을 초기화
    this.setState({
      arrays: this.state.arrays.concat(this.state.array),
      array: ''
    });
    // this.input.focus();
  }

  handleArrayRemove = (index) => {
    // 편의상 array의 래퍼런스를 미리 만든다.
    const { arrays } = this.state;

    // 배열을 자르는 내장 함수 slice와 전개 연산자(...)를 사용하여
    // index번째 값을 제외한 값들을 배열에 넣어 준다.
    this.setState({
      // filter로 index번째를 제외한 원소만 있는 새 배열 생성
      arrays: arrays.filter((item, i) => i !== index)
      
      // arrays: [
      //   ...arrays.slice(0, index), 
      //   // 0부터 주어진 index 전까지 원소들을 가진 새 배열 만듦
      //   ...arrays.slice(index + 1, arrays.length) 
      //   // index + 1부터 마지막까지 원소들을 가진 새 배열을 만든 후, 전개연산자를 사용하여 배열 하나로 합침
      // ]
    });
  }

  render() {
    const arrayList = this.state.arrays.map(
      (array, index) => (<li
        key={index}
        onDoubleClick={() => this.handleArrayRemove(index)}>
        {array}
      </li>)
    );

    return (
      <div>
        <h1>클래스형 컴포넌트</h1>
        <p>Hello, my name is {this.props.name}.</p>
        <p>My age is {this.props.age} years old.</p>
        <p>Number: {this.state.number}</p>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          더하기
        </button>
        <hr></hr>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
        <hr></hr>
        <h3>팝업창에 나타납니다.</h3>
        <input type="text" name="username" placeholder="유저명" value={this.state.username} onChange={this.handleChange} />
        <input type="text" name="message" placeholder="아무거나 입력해보세요" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        <button onClick={this.handleCheckClick}>확인</button>
        <hr></hr>
        <input
          onChange={this.handleArrayChange}
          value={this.state.array} />
        <button onClick={this.handleArrayInsert}>추가</button>
        <ul>
          {arrayList}
        </ul>
        <hr></hr>
      </div>
    );
  }
}

// const MyComponent = () => {
//   const name = '이름';
//   // static defaultProps = {
//   //   name: "기본 이름"
//   // }

//   // static propTypes = {
//   //   name: PropTypes.string,
//   //   age: PropTypes.number.isRequired
//   // }

//   // state = {
//   //   number: 0
//   // }

//   return (
//     <div className='react'>
//       <p>Hello, my name is {this.props.name}.</p>
//       <p>My age is {this.props.age} years old.</p>
//       <p>Number: {this.state.number}</p>
//       <button onClick={() => {
//         this.setState({
//           number: this.state.number + 1
//         })
//       }}>더하기</button>
//       <hr></hr>
//     </div>
//   );
// }

export default MyComponent;
