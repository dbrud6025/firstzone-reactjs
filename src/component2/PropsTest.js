import React, { Component } from "react";

function MyComponentD(props) {
  const arr = ["HTML", "CSS", "JavaScript", "React"];
  const bookPrice = 30000;
  return (
    <div>
      <h1>부모 Component</h1>
      <MyComponentD2 title="React" price={bookPrice} subject={arr}>
        첫번째 Child
      </MyComponentD2>
      <MyComponentD3 title="SpringBoot" price={50000}>
        <strong>두번째 Child</strong>
      </MyComponentD3>
      <MyComponentD3></MyComponentD3>
    </div>
  );
}

class MyComponentD3 extends Component {
  constructor(props) {
    super(props); //생성자는 생략가능, 정의한다면 반드시 코드 전에 부모 생성자를 호출해야 함
    console.log("MyComponentD3 생성자..." + this.props.title);
    console.log(this.props.price + 12345);
    this.myname = "yangyang";
    this.age = 20;
  }
  render() {
    //비구조화 할당을 이용하기
    const { title, price, children, subject } = this.props;
    return (
      <div>
        <h2>자식 Component 2 (class로 component 만들기)</h2>
        <p>title : {this.props.title}</p>
        <p>price : {this.props.price}</p>
        <p>children : {this.props.children}</p>
        <p>비구조화 할당 title : {title}</p>
        <p>비구조화 할당 price : {price}</p>
        <p>비구조화 할당 children : {children}</p>
        <hr />
        <h3>나의 이름은 {this.myname}</h3>
        <h3>나의 나이는 {this.age}</h3>
        <ul>
          {subject && subject.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

function MyComponentD2(parameters) {
  //함수의 매개변수 이름은 사용자가 정한다. props =>parameters, 주의 : arguments는 제공된다. 따라서 사용 x
  //비구조화 할당을 이용하기
  const { title, price, children, subject } = parameters;
  const myname = "yangyang";
  const age = 20;
  return (
    <div>
      <h2>자식 Component 1 (function으로 component 만들기)</h2>
      <p>타이틀은 {parameters.title}</p>
      <p>가격은 {parameters.price}</p>
      <p>children은 {parameters.children}</p>
      <p>***타이틀은 {title}</p>
      <p>***가격은 {price}</p>
      <p>***children은 {children}</p>
      <h3>나의 이름은 {myname}</h3>
      <h3>나의 나이는 {age}</h3>
      <ul>
        {subject && subject.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default MyComponentD;
