import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// 전역관리를 위해 객체를 만든다
const BoardContext = createContext();
export function BoardProvider(props) {
  //내부에서 data 상태 관리: useState()_함수형태의 component로 만들어 놓은 hook
  const emptyBoard = {
    bno: 0,
    title: "",
    writer: "",
    content: "",
    active: false,
  };
  const [count, setCount] = useState(0);
  const [board, setBoard] = useState(emptyBoard);
  const [boardList, setBoardList] = useState([]);
  var nextBno = useRef(1); //rendering 시 다시 값 유지(초기화 되지 않음)
  const changeHandler = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };
  const addHandler = useCallback(() => {
    if (board.title === "" || board.content === "" || board.writer === "")
      return; // 입력값이 빈값일 경우 들어가지 못하도록 막기!
    setCount(count + 1);
    const newBoard = { ...board, bno: nextBno.current };
    setBoardList([...boardList, newBoard]); //비동기 처리 된다!! -> 연결된 변수를 사용하는 경우 값을할당하는것을 장담못함
    nextBno.current++;
    setBoard(emptyBoard);
  }, [boardList, board]);
  const delHandler = (bno) => {
    setBoardList(boardList.filter((board) => board.bno !== bno)); // 같지 않은 애만 filtering
  };
  const updateHandler = (bno) => {
    setBoardList(
      boardList.map(
        (board) =>
          board.bno === bno ? { ...board, active: !board.active } : board // ...board -> 원래꺼
      )
    );
  };
  //useEffect: lifecycle 관리, 최초 rendering 시 수행, board가 set으로 변경 시 수행
  useEffect(() => {
    // console.log(board);
  }, [board]);
  useEffect(() => {
    console.log(boardList);
  }, [boardList]);
  useEffect(() => {
    console.log("addHandler 변경됨!");
  }, [addHandler]);
  return (
    <BoardContext.Provider
      value={{
        changeHandler,
        addHandler,
        board,
        boardList,
        delHandler,
        updateHandler,
      }}
    >
      {props.children}
    </BoardContext.Provider>
    // <div>
    //   <InputBoard
    //     changeHandler2={changeHandler}
    //     addHandler={addHandler}
    //     board={board}
    //   ></InputBoard>
    //   <br />
    //   <DisplayBoard
    //     boardList={boardList}
    //     delHandler={delHandler}
    //     updateHandler={updateHandler}
    //   ></DisplayBoard>
    // </div>
  );
}
export function BoardContextManagement(props) {
  return (
    <BoardProvider>
      <InputBoard></InputBoard>
      <br />
      <DisplayBoard></DisplayBoard>
    </BoardProvider>
  );
}
export function InputBoard() {
  const { changeHandler, board } = useContext(BoardContext);
  return (
    <div>
      <h1>ContextManagement </h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="a">Title</InputGroup.Text>
        <Form.Control
          aria-label="title입니다"
          name="title"
          onChange={changeHandler}
          value={board.title}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="b">Content</InputGroup.Text>
        <Form.Control
          aria-label="content입니다"
          name="content"
          onChange={changeHandler}
          value={board.content}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="c">Writer</InputGroup.Text>
        <Form.Control
          aria-label="writer입니다"
          name="writer"
          onChange={changeHandler}
          value={board.writer}
        />
      </InputGroup>
      <MyButton>Add (+) </MyButton>
    </div>
  );
}
function MyButton({ children }) {
  //children은 속성으로 온다.
  const { addHandler } = useContext(BoardContext);
  return (
    <Button variant="secondary" onClick={addHandler}>
      {children}
    </Button>
  );
}
export function DisplayBoard() {
  const { boardList, delHandler, updateHandler } = useContext(BoardContext);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>bno</th>
          <th>title</th>
          <th>content</th>
          <th>writer</th>
          <th>active</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {boardList &&
          boardList.map((board, seq) => (
            <tr key={seq}>
              <td>{board.bno}</td>
              <td style={{ color: board.active ? "red" : "green" }}>
                {board.title}
              </td>
              <td>{board.content}</td>
              <td>{board.writer}</td>
              <td>{board.active.toString()}</td>
              <td>
                <Button variant="success" onClick={() => delHandler(board.bno)}>
                  DEL
                </Button>{" "}
                <Button
                  variant="warning"
                  onClick={() => updateHandler(board.bno)}
                >
                  UPDATE
                </Button>{" "}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
