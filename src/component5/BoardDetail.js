import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import FieldComponent from "./FieldComponent";

function BoardDetail(props) {
  const { bno } = useParams();
  const [board, setBoard] = useState({});
  const location = useLocation();
  const navi = useNavigate();

  //title, content, writer
  const changeHandler = useCallback(
    (e) => {
      setBoard({ ...board, [e.target.name]: e.target.value });
    },
    [board]
  );

  const handelSubmit = (e) => {
    e.preventDefault(); //Form의 input들을 가지고 action을 수행, 이것을 막기
    axios({
      method: "put",
      url: "/rest/webboard/update.do",
      data: board,
    })
      .then((res) => {
        console.log(res.data === 0 ? "수정성공" : "수정실패");
        navi("/board/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(board);
  }, [board]);

  useEffect(() => {
    axios({
      method: "get",
      url: `/rest/webboard/detail.do/${bno}`,
    })
      .then((res) => {
        console.log(res);
        setBoard(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bno]);
  return (
    <div>
      <BoardDetailDisplay
        board={board}
        changeHandler={changeHandler}
        handelSubmit={handelSubmit}
      >
        <h1>Board 상세보기 : {bno}</h1>
      </BoardDetailDisplay>
    </div>
  );
}

function BoardDetailDisplay({ children, board, changeHandler, handelSubmit }) {
  return (
    <div>
      {children}

      {board && (
        <Form onSubmit={handelSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="bno">
            <Form.Label column sm="2">
              글번호
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={board.bno}
                name="bno"
                plaintext
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="title">
            <Form.Label column sm="2">
              제목
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={board.title}
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
                value={board.content}
                name="content"
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="regdate">
            <Form.Label column sm="2">
              작성일
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={board.regdate}
                name="regdate"
                plaintext
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="updatedate">
            <Form.Label column sm="2">
              수정일
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={board.updatedate}
                name="updatedate"
                plaintext
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <input type="submit" onClick={changeHandler} value={"Update"}></input>{" "}
          <Link to="/board/delete" state={{ bno: board.bno }}>
            <Button variant="danger">Delete</Button>
          </Link>
        </Form>
      )}
    </div>
  );
}

export default BoardDetail;
