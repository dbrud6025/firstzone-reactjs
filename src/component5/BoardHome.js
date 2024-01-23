import React from "react";
import BoardList from "./BoardList";
import { Link, Route, Routes } from "react-router-dom";
import { Button } from "react-bootstrap";
import BoardInsert from "./BoardInsert";

function BoardHome(props) {
  return (
    <div>
      <h1>Board 작업들</h1>
      <ul>
        <li>
          <Link to="list">
            <Button variant="success">조회</Button>
          </Link>
          <Link to="insert">
            <Button variant="success">입력</Button>
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/list" element={<BoardList />}></Route>
        <Route path="/insert" element={<BoardInsert />}></Route>
      </Routes>
    </div>
  );
}

export default BoardHome;
