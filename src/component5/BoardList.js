import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function BoardList(props) {
  const [boardList, setBoardList] = useState([]);
  //lifecycle 관리: 최초 rendering 시 1회만 하고자 한다
  useEffect(() => {
    axios({
      method: "get",
      url: "/rest/webboard/list.do",
    })
      .then((response) => {
        console.log(response.data);
        setBoardList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>Board 목록</h2>
      <BoardDisplay boardList2={boardList}></BoardDisplay>
    </div>
  );
}
function BoardDisplay({ boardList2 }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>To Detail</th>
          <th>bno</th>
          <th>title</th>
          <th>content</th>
          <th>writer</th>
          <th>reg date</th>
          <th>update date</th>
        </tr>
      </thead>
      <tbody>
        {boardList2 &&
          boardList2.map((board, seq) => (
            <tr key={`id ${seq}`}>
              <td>
                <Link to={`/board/detail/${board.bno}`}>detail</Link>
              </td>
              <td>{board.bno}</td>
              <td>{board.title}</td>
              <td>{board.content}</td>
              <td>{board.writer}</td>
              <td>{board.regdate}</td>
              <td>{board.updatedate}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
export default BoardList;
