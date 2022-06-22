import { Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const LoginComponent = () => {
  return (
    <Form className="mx-auto">
      <Form.Group className="my-3 " controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email or Mobile" />
      </Form.Group>
      <Form.Group className="my-3 " controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <hr />
      <Row className="mb-1">
        <Col>
          <Form.Group className="mb-1 mt-1" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Col>
        <Col>
          <Button className="mb-1 mt-1" variant="light" size="sm">
            Forgot Password ?
          </Button>
        </Col>
      </Row>
      <hr className="hr-1" />
      <Link to="/front-desk" className="text-decoration-none">
        <div className="d-grid gap-2 border-0">
          <Button variant="dark" size="sm">
            Login
          </Button>
        </div>
      </Link>
    </Form>
  );
};

export default LoginComponent;
