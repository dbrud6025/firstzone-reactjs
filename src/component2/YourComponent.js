import React, { Component } from "react";

function YourComponent1(props) {
  const { myname, myage, hobby } = props;
  return (
    <div>
      <h1>{props.children}</h1>
      <p>{myname}</p>
      <p>{myage}</p>
      <ul>
        {hobby.map((item, index) => (
          <li key={"A" + index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export class YourComponent2 extends Component {
  render() {
    const { myname, myage, hobby } = this.props;
    return (
      <div>
        <h1>{this.props.children}</h1>
        <p>{myname}</p>
        <p>{myage}</p>
        <ul>
          {hobby.map((item, index) => (
            <li key={"B" + index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default YourComponent1;
//export {YourComponent1 as default, YourComponent2};
