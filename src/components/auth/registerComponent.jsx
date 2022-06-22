import { Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const RegisterComponent = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Redirect to register business page");
  }

  return (
    <Form className="mx-auto" onSubmit={handleSubmit}>
      <Row className="mt-3 mb-3">
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>

      <Row className="mt-3 mb-3">
        <Col>
          <Form.Control placeholder="Email" />
        </Col>
        <Col>
          <Form.Control placeholder="Mobile" />
        </Col>
      </Row>

      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Your Hotel Name" />
      </Form.Group>

      <Row className="mt-3 mb-3">
        <Col>
          <Form.Control placeholder="Password" />
        </Col>
        <Col>
          <Form.Control placeholder="Confirm Password" />
        </Col>
      </Row>

      <hr />
      <Row className="mb3 mt-3">
        <Col>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              size="sm"
              type="checkbox"
              label="I Agree To The Terms & Conditions"
            />
          </Form.Group>
        </Col>
      </Row>
      <hr className="hr-1" />

      <Link to="/register-business" className="text-decoration-none">
        <div className="d-grid gap-2">
          <Button type="submit" variant="dark" size="sm">
            Register
          </Button>
        </div>
      </Link>
    </Form>
  );
};

export default RegisterComponent;
