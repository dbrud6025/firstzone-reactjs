import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function EmpList(props) {
  const [empList, setEmpList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "/rest/deptemp/list.do",
    })
      .then((res) => {
        console.log(res.data);
        setEmpList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>Emp 목록</h2>
      <EmpDisplay empList2={empList}></EmpDisplay>
    </div>
  );
}

function EmpDisplay({ empList2 }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>To Detail</th>
          <th>employeeId</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>phoneNumber</th>
          <th>hireDate</th>
          <th>jobId</th>
          <th>salary</th>
          <th>commissionPct</th>
          <th>managerId</th>
          <th>departmentId</th>
        </tr>
      </thead>
      <tbody>
        {empList2 &&
          empList2.map((emp, seq) => (
            <tr key={`id ${seq}`}>
              <td>
                <Link to={`/deptemp/detail/${emp.employeeId}`}>Detail</Link>
              </td>
              <td>{emp.employeeId}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>{emp.phoneNumber}</td>
              <td>{emp.hireDate}</td>
              <td>{emp.jobId}</td>
              <td>{emp.salary}</td>
              <td>{emp.commissionPct}</td>
              <td>{emp.managerId}</td>
              <td>{emp.departmentId}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default EmpList;
