import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function EmpDetail(props) {
  const { employeeId } = useParams();
  const [emp, setEmp] = useState({});
  const location = useLocation();
  const navi = useNavigate();

  const changeHandler = useCallback(
    (e) => {
      setEmp({ ...emp, [e.target.name]: e.target.value });
    },
    [emp]
  );

  const handelSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: "/rest/deptemp/update.do",
      data: emp,
    })
      .then((res) => {
        console.log(res.data === 1 ? "수정성공" : "수정실패");
        navi("/deptemp/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(emp);
  }, [emp]);

  useEffect(() => {
    axios({
      method: "get",
      url: `/rest/deptemp/detail.do/${employeeId}`,
    })
      .then((res) => {
        console.log(res);
        setEmp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [employeeId]);

  return (
    <div>
      <EmpDetailDisplay
        emp={emp}
        changeHandler={changeHandler}
        handelSubmit={handelSubmit}
      >
        <h1>Emp 상세보기 : {employeeId}</h1>
      </EmpDetailDisplay>
    </div>
  );
}

function EmpDetailDisplay({ children, emp, changeHandler, handelSubmit }) {
  return (
    <div>
      {children}

      {emp && (
        <Form onSubmit={handelSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="employeeId">
            <Form.Label column sm="2">
              employeeId
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={emp.employeeId}
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
                value={emp.firstName}
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
                value={emp.lastName}
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
                value={emp.email}
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
                value={emp.phoneNumber}
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
                value={emp.hireDate}
                name="hireDate"
                plaintext
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
                value={emp.jobId}
                name="jobId"
                plaintext
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
                value={emp.salary}
                name="salary"
                plaintext
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
                value={emp.commissionPct}
                name="commissionPct"
                plaintext
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
                value={emp.managerId}
                name="managerId"
                plaintext
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
                value={emp.departmentId}
                name="departmentId"
                plaintext
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <input type="submit" onClick={changeHandler} value={"Update"}></input>{" "}
          <Link to="/deptemp/delete" state={{ employeeId: emp.employeeId }}>
            <Button variant="danger">Delete</Button>
          </Link>
        </Form>
      )}
    </div>
  );
}

export default EmpDetail;
