import React, { Component } from 'react';

class IterationSample extends Component {

  state = {
    names: ['눈사람', '얼음', '눈', '바람'],
    name: ''
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleInsert = () => {
    //names 배열에 값을 추가하고, name 값을 초기화
    this.setState({
      names: this.state.names.concat(this.state.name),
      name: ''
    });
    // this.input.focus();
  }

  handleRemove = (index) => {
    // 편의상 name의 래퍼런스를 미리 만든다.
    const { names } = this.state;

    // 배열을 자르는 내장 함수 slice와 전개 연산자(...)를 사용하여
    // index번째 값을 제외한 값들을 배열에 넣어 준다.
    this.setState({
      // filter로 index번째를 제외한 원소만 있는 새 배열 생성
      names: names.filter((item, i) => i !== index)
      
      // names: [
      //   ...names.slice(0, index), 
      //   // 0부터 주어진 index 전까지 원소들을 가진 새 배열 만듦
      //   ...names.slice(index + 1, names.length) 
      //   // index + 1부터 마지막까지 원소들을 가진 새 배열을 만든 후, 전개연산자를 사용하여 배열 하나로 합침
      // ]
    });
  }

  render() {
    const nameList = this.state.names.map(
      (name, index) => (<li
        key={index}
        onDoubleClick={() => this.handleRemove(index)}>
        {name}
      </li>)
    );

    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.name} />
        <button onClick={this.handleInsert}>추가</button>
        <ul>
          {nameList}
        </ul>
        <hr></hr>
      </div>
    );
  }
}

export default IterationSample;