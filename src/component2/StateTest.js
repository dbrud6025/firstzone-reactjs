import React, { Component } from "react";

class StateTest extends Component {
  constructor() {
    super();
    this.state = { count: 0, message: "class를 이용한 state관리" };
  }
  handleClick = (event) => {
    var target = event.target.innerHTML;
    console.log(target);
    if (target === "증가") {
      this.setState({ count: this.state.count + 1, message: "ADD 수행함" });
    } else {
      this.setState({ count: this.state.count - 1, message: "MINUS 수행함" });
    }
  };
  render() {
    const { count, message } = this.state;
    //불가 this.state.count = 100;
    //가능 this.setState({count: count + 100});
    return (
      <div>
        <p>
          현재값 : {count}.........{message}
        </p>
        <button
          onClick={() =>
            this.setState({ count: count + 1, message: "ADD 수행함" })
          }
        >
          증가
        </button>
        <button onClick={this.handleClick}>증가</button>
        <button onClick={this.handleClick}>감소</button>
        {/* <button>감소</button> */}
      </div>
    );
  }
}

export default StateTest;
