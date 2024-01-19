import React from "react";
import "component2/My.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";

//React에서 CSS 사용
//외부 css ==> 1) import 2) className 속성을 이용한다.
//내부 css(inline) ==> 반드시 객체일 것! {}

function MyComponentC(props) {
  const inlineStyle = {
    border: "3px dotted blue",
    color: "orange",
    fontSize: "30px",
  };

  return (
    <div>
      <header style={{ border: "1px solid gray" }}>
        {/* JSX이기 때문에! style은 객체로 받기 */}
        <h1 className="myStyle">반갑습니다....</h1>{" "}
        <h2 className="myStyle2">React배우기전 선수지식은?</h2>{" "}
        <p style={inlineStyle}>Style연습..inline</p>{" "}
        <p style={inlineStyle} className="myStyle2">
          Style연습...class이름{" "}
        </p>
        <button className="btn btn-danger">내가 만든 버튼</button>
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </header>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

export default MyComponentC;
