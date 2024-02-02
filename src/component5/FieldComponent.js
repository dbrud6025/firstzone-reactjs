const { Form, Col, Row } = require("react-bootstrap");

function FieldComponent({ colname, data, children, changeHandler }) {
  return (
    <Form.Group as={Row} className="mb-3" controlId={colname}>
      <Form.Label column sm="2">
        {children}
      </Form.Label>
      <Col sm="10">
        <Form.Control value={data} name={colname} onChange={changeHandler} />
      </Col>
    </Form.Group>
  );
}

export default FieldComponent;
