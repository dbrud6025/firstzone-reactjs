import React from "react";
import { Button } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import EmpList from "./EmpList";
import EmpInsert from "./EmpInsert";
import EmpDetail from "./EmpDetail";
import EmpDelete from "./EmpDelete";

function EmpHome(props) {
  return (
    <div>
      <h1>Emp 작업들</h1>
      <ul>
        <li>
          <Link to="list">
            <Button variant="success">조회</Button>
          </Link>{" "}
          <Link to="insert">
            <Button variant="success">입력</Button>
          </Link>{" "}
          <Link to="detail">
            <Button variant="success">상세보기</Button>
          </Link>{" "}
        </li>
      </ul>

      <Routes>
        <Route path="/list" element={<EmpList />}></Route>
        <Route path="/insert" element={<EmpInsert />}></Route>
        <Route path="/detail/:employeeId" element={<EmpDetail />}></Route>
        <Route path="/delete" element={<EmpDelete />}></Route>
      </Routes>
    </div>
  );
}

export default EmpHome;
