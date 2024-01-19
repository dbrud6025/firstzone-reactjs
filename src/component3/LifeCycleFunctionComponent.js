import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { MyTimer } from "./MyTimer";

function LifeCycleFunctionComponent(props) {
  const [memberName, setMemberName] = useState("");
  const [member, setmember] = useState({});

  const changeHandler = (e) => {
    setMemberName(e.target.value);
  };

  useEffect(() => {
    console.log("component가 rendering될 때마다 수행됨");
  });
  useEffect(() => {
    console.log("component가 최초 rendering될 때 1회 수행됨");
  }, []); //[]는 의존배열이라고 한다.
  useEffect(() => {
    console.log(
      "component가 최초 rendering될 때 그리고 memberName이 변경될 때마다 수행됨"
    );
  }, [memberName]);
  return (
    <div>
      <h1>LifeCycleFunctionComponent 연습!!! : {memberName}</h1>
      <MyTimer></MyTimer>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={changeHandler}
        />
      </InputGroup>
    </div>
  );
}

export default LifeCycleFunctionComponent;
