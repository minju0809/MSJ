import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름"
  }

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  }

  state = {
    number: 0
  }


  render() {
    return (
      <div>
        <p>Hello, my name is {this.props.name}.</p>
        <p>My age is {this.props.age} years old.</p>
        <p>Number: {this.state.number}</p>
        <button onClick={() => {
          this.setState({
            number: this.state.number + 1
          })
        }}>더하기</button>
      </div>
    );
  }
}

export default MyComponent;
