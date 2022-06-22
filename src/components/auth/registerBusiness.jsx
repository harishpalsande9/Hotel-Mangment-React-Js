import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
function RegisterBusiness() {
  return (
    <>
      <Container>
        <Form className="mx-auto">
          <Row className="mt-1 mb-1">
            <Form.Group className="mb-1 mt-1" controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="form-control-sm"
                placeholder="Enter Your Hotel/Resto Name"
              />
            </Form.Group>
          </Row>

          <Row className="mt-1 mb-1">
            <Form.Group className="mb-1 mt-1" controlId="formBasicEmail">
              <Form.Control
                className="form-control-sm"
                type="email"
                placeholder="Street Address"
              />
            </Form.Group>
          </Row>

          <Row className="mt-1 mb-1">
            <Col>
              <Form.Control className="form-control-sm" placeholder="City" />
            </Col>
            <Col>
              <Form.Control className="form-control-sm" placeholder="State" />
            </Col>
          </Row>

          <hr className="hr-1" />
          <div body>
            <h5 className="text-center text-primary">
              Choose Part Of App You Need.
            </h5>
            <div>
              <ListGroup as="ol">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Front Desk</div>
                    Short Description
                  </div>
                  <Button variant="light" size="sm">
                    1200 per anum
                  </Button>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">CRM</div>
                    Customer Relationship Management
                  </div>
                  <Button variant="light" size="sm">
                    120 per anum
                  </Button>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Back Door</div>
                    Laundry , Housekeeping
                  </div>
                  <Button variant="light" size="sm">
                    1200 per anum
                  </Button>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Masters</div>
                    Manage Rooms, Staff, Laundry Everything
                  </div>
                  <Button variant="light" size="sm">
                    120 per anum
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>

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

          <Link to="/masters" className="text-decoration-none">
            <div className="d-grid gap-2">
              <Button type="submit" variant="dark" size="sm">
                Complete My Account Setup
              </Button>
            </div>
          </Link>
        </Form>
      </Container>
    </>
  );
}

export default RegisterBusiness;
