import React, { useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { MyTimer } from "./MyTimer";

function LifeCycleFunctionComponent(props) {
  const [member, setmember] = useState({});
  const [memberList, setMemberList] = useState([member]);
  const nameInput = useRef(); // 1)특정 DOM을 접근하기 위해 사용
  const phoneInput = useRef();
  var memberNo = useRef(1); //렌더링시 다시 초기화하지 않는다. (최초 초기화만 한다.)

  const changeHandler = (e) => {
    setmember({ ...member, [e.target.name]: e.target.value });
  };

  const memberAdd = () => {
    const newMember = { ...member, id: memberNo.current };
    setMemberList([...memberList, newMember]);
    memberNo.current++;
  };

  const printList = (memberData, sequence) => {
    return (
      <tr>
        <td>{memberData.id}</td>
        <td>{memberData.name}</td>
        <td>{memberData.phone}</td>
      </tr>
    );
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
  }, []);
  return (
    <div>
      <h1>LifeCycleFunctionComponent 연습!!! </h1>
      <MyTimer></MyTimer>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
        <Form.Control
          placeholder="ID"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={changeHandler}
          name="id"
        />
        <InputGroup.Text id="basic-addon1">NAME</InputGroup.Text>
        <Form.Control
          placeholder="NAME"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={changeHandler}
          name="name"
          ref={nameInput}
        />
        <InputGroup.Text id="basic-addon1">PHONE</InputGroup.Text>
        <Form.Control
          placeholder="PHONE"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={changeHandler}
          name="phone"
          ref={phoneInput}
        />
      </InputGroup>
      <Button variant="warning" onClick={memberAdd}>
        추가하기~~
      </Button>{" "}
      <Button variant="success" onClick={() => nameInput.current.focus()}>
        NAME으로 이동~~
      </Button>{" "}
      <Button variant="success" onClick={() => phoneInput.current.focus()}>
        PHONE으로 이동~~
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {/* tbody에 쓸 때 이런 방식도 있고!
          {memberList.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </tr>
          ))} */}

          {/* 이런 방식도 있고! (printList는 위에 선언되어 있다.)
          {memberList.map(printList)} */}

          {/* 이런 방식도 있다~~ 
          memberData={memberData}은 자식에게 정보 데이터를 알려주기 위함
          */}
          {memberList.map((memberData, seq) => (
            <TrComponent key={seq} memberData={memberData}></TrComponent>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function TrComponent(props) {
  const { memberData } = props;
  // return을 꼭 쓰세요~
  return (
    <tr>
      {/* 이 방법도 가능 */}
      <TdComponent data={memberData.id}></TdComponent>
      <TdComponent data={memberData.name}></TdComponent>
      <TdComponent data={memberData.phone}></TdComponent>

      {/* 이 방법 또한 가능 */}
      {/* <td>{memberData.id}</td>
      <td>{memberData.name}</td>
      <td>{memberData.phone}</td> */}
    </tr>
  );
}

function TdComponent(props) {
  // return을 꼭 쓰세요~
  return <td>{props.data}</td>;
}

export default LifeCycleFunctionComponent;
