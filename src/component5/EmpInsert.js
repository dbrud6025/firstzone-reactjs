import axios from "axios";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EmpInsert(props) {
  const [emp, setEmp] = useState({});
  const navi = useNavigate();

  const changeHandler = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const insertHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "/rest/deptemp/insert.do",
      data: emp,
    })
      .then((res) => {
        console.log(res);
        navi("/deptemp/list");
      })
      .catch((err) => {});
  };
  return (
    <div>
      <h1>Emp 입력</h1>
      <Form onSubmit={insertHandler}>
        <Form.Group as={Row} className="mb-3" controlId="employeeId">
          <Form.Label column sm="2">
            employeeId
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="employeeId"
              plaintext
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="firstName">
          <Form.Label column sm="2">
            firstName
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="firstName"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="lastName">
          <Form.Label column sm="2">
            lastName
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="lastName"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="email">
          <Form.Label column sm="2">
            email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="email"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="phoneNumber">
          <Form.Label column sm="2">
            phoneNumber
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="phoneNumber"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="hireDate">
          <Form.Label column sm="2">
            hireDate
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="hireDate"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="jobId">
          <Form.Label column sm="2">
            jobId
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="jobId"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="salary">
          <Form.Label column sm="2">
            salary
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="salary"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="commissionPct">
          <Form.Label column sm="2">
            commissionPct
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="commissionPct"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="managerId">
          <Form.Label column sm="2">
            managerId
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="managerId"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="departmentId">
          <Form.Label column sm="2">
            departmentId
          </Form.Label>
          <Col sm="10">
            <Form.Control
              defaultValue=""
              name="departmentId"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <input type="submit" className="btn btn-primary" value="저장"></input>{" "}
      </Form>
    </div>
  );
}

export default EmpInsert;
