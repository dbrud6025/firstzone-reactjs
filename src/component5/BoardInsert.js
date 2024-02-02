import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function BoardInsert(props) {
  const [board, setBoard] = useState({});
  const navi = useNavigate();

  const changeHandler = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };
  const insertHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "/rest/webboard/insert.do",
      data: board,
    })
      .then((res) => {
        console.log(res);
        navi("/board/list");
      })
      .catch((err) => {});
  };
  return (
    <div>
      <h1>Board 입력</h1>
      <Form onSubmit={insertHandler}>
        <Form.Group as={Row} className="mb-3" controlId="title">
          <Form.Label column sm="2">
            제목
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="title"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="content">
          <Form.Label column sm="2">
            내용
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="content"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="regdate">
          <Form.Label column sm="2">
            작성자
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="writer"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <input type="submit" className="btn btn-primary" value="저장"></input>{" "}
      </Form>
    </div>
  );
}

export default BoardInsert;
