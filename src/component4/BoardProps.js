import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function BoardProps(props) {
  //내부에서 data 상태 관리 : useState()
  const emptyBoard = {
    bno: 0,
    title: "",
    content: "",
    writer: "",
    active: false,
  };
  const [board, setBoard] = useState(emptyBoard);
  const [boardList, setBoardList] = useState([]);
  var nextBno = useRef(1); //Rendering시에 값 유지
  const changeHandler = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };
  const addHandler = useCallback(() => {
    if (board.title === "" || board.content === "" || board.writer === "")
      return;
    const newBoard = { ...board, bno: nextBno.current };
    setBoardList([...boardList, newBoard]); //비동기
    nextBno.current++;
    setBoard(emptyBoard);
  }, [boardList, board]);

  const delHandler = (bno) => {
    setBoardList(boardList.filter((board) => board.bno !== bno));
  };

  const updateHandler = (bno) => {
    setBoardList(
      boardList.map((board) =>
        board.bno === bno ? { ...board, active: !board.active } : board
      )
    );
  };

  //lifecycle 관리..최초 rendering시 수행, board가 set으로 변경되면 발생
  useEffect(() => {
    //console.log(board);
  }, [board]);
  useEffect(() => {
    console.log(boardList);
  }, [boardList]);

  return (
    <div>
      <InputBoard
        changeHandler2={changeHandler}
        addHandler={addHandler}
        board={board}
      ></InputBoard>
      <DisplayBoard
        boardList={boardList}
        delHandler={delHandler}
        updateHandler={updateHandler}
      ></DisplayBoard>
    </div>
  );
}

export function InputBoard({ changeHandler2, addHandler, board }) {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
        <Form.Control
          aria-label="Title입니다."
          name="title"
          onChange={changeHandler2}
          value={board.title}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Content
        </InputGroup.Text>
        <Form.Control
          aria-label="Content입니다."
          name="content"
          onChange={changeHandler2}
          value={board.content}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Writer</InputGroup.Text>
        <Form.Control
          aria-label="Writer입니다."
          name="writer"
          onChange={changeHandler2}
          value={board.writer}
        />
      </InputGroup>
      <MyButton addHandler={addHandler}>ADD (+)</MyButton>
    </div>
  );
}

export function DisplayBoard({ boardList, delHandler, updateHandler }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Bno</th>
          <th>Title</th>
          <th>Content</th>
          <th>Writer</th>
          <th>Active</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {boardList &&
          boardList.map((item, seq) => (
            <tr key={seq}>
              <td>{item.bno}</td>
              <td style={{ color: item.active ? "red" : "black" }}>
                {item.title}
              </td>
              <td>{item.content}</td>
              <td>{item.writer}</td>
              <td>{item.active.toString()}</td>
              <td>
                <Button variant="danger" onClick={() => delHandler(item.bno)}>
                  Delete
                </Button>{" "}
                <Button variant="info" onClick={() => updateHandler(item.bno)}>
                  Update
                </Button>{" "}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

function MyButton({ addHandler, children }) {
  return (
    <Button variant="success" onClick={addHandler}>
      {children}
    </Button>
  );
}

export default BoardProps;
