import React, { useState } from "react";
import { Form, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function FunctionComponent(props) {
  const [color, setColor] = useState("red");
  const [message, setMessage] = useState("state관리 연습");
  const [mystyle, setMystyle] = useState({
    color: "blue",
    border: "1px solid red",
  });
  const handleColorChange = (arg) => {
    let selectColor = arg.target.innerHTML;
    setColor(selectColor);
    setMystyle({ color: selectColor, border: `1px solid ${selectColor}` });
  };
  return (
    <div>
      <button onClick={handleColorChange}>RED</button>
      <button onClick={handleColorChange}>GREEN</button>
      <button onClick={handleColorChange}>BLUE</button>
      <h1
        style={{
          color,
        }}
      >
        {message}
      </h1>
      <h1 style={mystyle}>{message}</h1>
    </div>
  );
}

function FunctionComponent2(props) {
  const [member, setMember] = useState({ name: "양유경", age: 25 });
  const inputChanged = (event) => {
    //쨈쨈쨈 스프레드 연산자
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  //   const ageChanged = (event) => {
  //     //쨈쨈쨈 스프레드 연산자
  //     setMember({ ...member, [event.target.age]: event.target.value });
  //   };
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">이름은 무엇인가요?</InputGroup.Text>
        <Form.Control
          placeholder="이름을 입력하세요!"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={inputChanged}
          name="name"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">몇 살이신가요?</InputGroup.Text>
        <Form.Control
          placeholder="나이를 입력하세요!"
          aria-label="age"
          aria-describedby="basic-addon1"
          onChange={inputChanged}
          name="age"
        />
      </InputGroup>
      <h1>
        입력정보 ===&gt; 이름: {member.name}, 나이: {member.age}
      </h1>
    </div>
  );
}

function FunctionComponent3(props) {
  const [userName, setUserName] = useState("서보현");
  const [sendMessage, setSendMessage] = useState("빨리와~~~");

  const initMemo = { userName: userName, message: sendMessage };
  const [memo, setMemo] = useState(initMemo);
  const [memoList, setMemoList] = useState([memo]); //memoList=[{ userName: userName, message: sendMessage }]

  //   const nameChangeHandler = (e) => {
  //     setUserName(e.target.value);
  //   };

  //   const messageChangeHandler = (e) => {
  //     setSendMessage(e.target.value);
  //   };

  const inputChangeHandler = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else if (e.target.name === "message") {
      setSendMessage(e.target.value);
    }
    setMemo({ ...memo, [e.target.name]: e.target.value });
  };

  const memoAdd = () => {
    setMemoList([...memoList, memo]);
    console.log(memoList); //set 이전 값이 출력된다. (set보다 출력이 먼저 수행한다.)
  };

  const arr = [1, 2, 3, 4];
  const arr2 = [10, 20, 30, 40];
  const arr3 = [...arr, ...arr2]; //1차원 요소들 합치기 [1,2,3,4,10,20,30,40]
  const arr4 = [arr, arr2]; //2차원 배열  [[1,2,3,4], [10,20,30,40]]

  const clearListener = () => {
    setSendMessage("");
    setUserName("");
  };
  return (
    <div>
      <h2>이름은 {userName}</h2>
      <h2>메시지는 {sendMessage}</h2>
      <input
        type="text"
        placeholder="이름입력"
        value={userName}
        onChange={inputChangeHandler}
        name="userName"
      ></input>
      <input
        type="text"
        placeholder="message입력"
        value={sendMessage}
        onChange={inputChangeHandler}
        name="message"
      ></input>
      <br></br>
      <br></br>
      <br></br>
      <h1>
        Memo : {memo.userName}의 메모! {memo.message}
      </h1>
      <Button variant="success" onClick={memoAdd}>
        Cart
      </Button>{" "}
      <Button variant="success" onClick={clearListener}>
        Clear
      </Button>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To (누구에게)</th>
            <th>Message (메시지를)</th>
          </tr>
        </thead>
        <tbody>
          {memoList.map((item, index) => (
            <tr>
              <td>{item.userName}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export { FunctionComponent as default, FunctionComponent2, FunctionComponent3 };
