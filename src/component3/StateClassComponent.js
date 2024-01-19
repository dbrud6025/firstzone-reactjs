import React, { Component } from "react";

class StateClassComponent extends Component {
  //state = { su: 0 };
  constructor(props) {
    super(props);
    this.state = { su: 0 };
    this.plus = this.plus.bind(this);
  }
  //클래스 안에서 function이라는 예약어는 사용이 불가능하다.
  //선언적 함수 (자동 BIND되지 않아서 constructor 안에 this.plus 변경 필수!)
  plus() {
    this.setState({ su: this.state.su + 1 });
  }
  //화살표 함수는 this가 자동으로 bind된다.
  plus2 = () => {
    this.setState({ su: this.state.su + 1 }, () => {
      //setState() 이후에 수행한다. (callback)
      console.log("더하기가 잘 되고 있나???" + this.state.su);
    });
  };
  buttonClick = (event) => {
    let btnText = event.target.innerHTML;
    if (btnText === "+") {
      this.setState({ su: this.state.su + 1 });
    } else if (btnText === "-") {
      this.setState({ su: this.state.su - 1 });
      //불가 (상태값을 직접 하지 못함) this.state.su = this.state.su - 1;
    }
  };
  render() {
    const { su } = this.state;
    return (
      <div>
        <h1>StateClassComponent 연습!!!</h1>
        <p>
          현재값 :{this.state.su}....또는 {su} 이렇게 가능!
        </p>
        <button onClick={() => this.setState({ su: su + 1 })}>+</button>
        <button onClick={this.plus}>+ (방법1)</button>
        <button onClick={this.plus2}>+ (방법2)</button>
        <button onClick={this.buttonClick}>3 (방법3)</button>
        <button onClick={this.buttonClick}>-</button>
      </div>
    );
  }
}

export default StateClassComponent;
