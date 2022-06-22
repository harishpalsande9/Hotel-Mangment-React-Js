import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Tabs,
  Form,
  Tab,
  InputGroup,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";
import MasterSidebar from "../components/common/masterSidebar";
import CRMNavbar from "../components/navs/crmNavbar";
import MastersNav from "../components/navs/mastersNav";
import TopHeader from "../components/navs/topHeader";

class ConfigPage extends React.Component {
  render() {
    return (
      <div>
        <TopHeader />
        <Container fluid>
          <Row className="mt-3">
            <Col lg={8}>
              <MastersNav />
              <Tabs
                defaultActiveKey="home"
                transition={true}
                id="noanim-tab-example"
                className="mb-3 nav justify-content-center nav-fill"
              >
                <Tab eventKey="home" title="Rooms">
                  <Row className="mt-3 mb-3 m-4">
                    <Col className="text-center mx-2 p-2">
                      <Card body className="border-0">
                        <h5>
                          <u>Add New Room</u>
                        </h5>
                        <Form>
                          <Row className="no-gutters">
                            <Col>
                              <Form.Group
                                className="mb-2 form-control-sm"
                                controlId="formGroupEmail"
                              >
                                <Form.Control
                                  type="text"
                                  className="form-control-sm"
                                  placeholder="Enter Room Number"
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group
                                className="mb-2  form-control-sm"
                                controlId="formGroupPassword"
                              >
                                <Form.Control
                                  type="text"
                                  className="form-control-sm"
                                  placeholder="Room Is On The Floor"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group
                            className="mb-2 form-control-sm"
                            controlId="formGroupEmail"
                          >
                            <Form.Control
                              type="text"
                              className="form-control-sm"
                              placeholder="Type Of Room"
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-2 form-control-sm"
                            controlId="formGroupEmail"
                          >
                            <Form.Control
                              type="text"
                              className="form-control-sm"
                              placeholder="Room Charges"
                            />
                          </Form.Group>

                          <hr className="hr-1" />
                          <small>Choose Aminities</small>
                          <InputGroup className="mb-2 form-control-sm">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <FormControl
                              placeholder="Wifi "
                              className="form-control-sm"
                              aria-label="Text input with checkbox"
                              disabled
                            />
                          </InputGroup>
                          <InputGroup className="mb-2 form-control-sm">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <FormControl
                              placeholder="Air Conditioner "
                              aria-label="Text input with checkbox"
                              className="form-control-sm"
                              disabled
                            />
                          </InputGroup>
                          <InputGroup className="mb-2 form-control-sm">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <FormControl
                              placeholder="TV Unit "
                              aria-label="Text input with checkbox"
                              className="form-control-sm"
                              disabled
                            />
                          </InputGroup>
                          <InputGroup className="mb-2 form-control-sm">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <FormControl
                              placeholder="Double Bed "
                              aria-label="Text input with checkbox"
                              className="form-control-sm"
                              disabled
                            />
                          </InputGroup>
                          <hr className="hr-1" />
                          <div className="d-grid gap-2">
                            <Button
                              variant="warning"
                              size="sm"
                              className="text-center"
                            >
                              Add New Room
                            </Button>
                          </div>
                        </Form>
                      </Card>
                    </Col>

                    <Col className="text-center mx-2 p-2">
                      <Card body className="border-0">
                        <h5>
                          <u>Update Room</u>
                        </h5>
                        <Form>
                          <Form.Group
                            className="mb-2 form-control-sm"
                            controlId="formGroupEmail"
                          >
                            <Form.Control
                              type="text"
                              className="form-control-sm"
                              placeholder="Search Room"
                            />
                          </Form.Group>
                          <Row className="no-gutters">
                            <Col>
                              <Form.Group
                                className="mb-2 form-control-sm"
                                controlId="formGroupEmail"
                              >
                                <Form.Control
                                  type="text"
                                  className="form-control-sm"
                                  placeholder="Enter Room Number"
                                  value="302"
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group
                                className="mb-2  form-control-sm"
                                controlId="formGroupPassword"
                              >
                                <Form.Control
                                  type="text"
                                  className="form-control-sm"
                                  placeholder="Room Type"
                                  value="Deluxe"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row className="no-gutters">
                            <Col>
                              <Form.Group
                                className="mb-2 form-control-sm"
                                controlId="formGroupEmail"
                              >
                                <Form.Control
                                  type="text"
                                  className="form-control-sm"
                                  placeholder="Enter Room Number"
                                  value="First Floor"
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group
                                className="mb-2  form-control-sm"
                                controlId="formGroupPassword"
                              >
                                <Form.Control
                                  type="text"
                                  className="form-control-sm"
                                  placeholder="Room Charges"
                                  value="1200 per/night"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <hr className="hr-1" />
                          <small>Choose Aminities</small>
                          <InputGroup className="mb-2 form-control-sm">
                            <InputGroup.Checkbox
                              checked
                              aria-label="Checkbox for following text input"
                            />
                            <FormControl
                              placeholder="Wifi "
                              className="form-control-sm"
                              aria-label="Text input with checkbox"
                              disabled
                            />
                          </InputGroup>
                          <InputGroup className="mb-2 form-control-sm">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <FormControl
                              placeholder="Air Conditioner "
                              aria-label="Text input with checkbox"
                              className="form-control-sm"
                              disabled
                            />
                          </InputGroup>
                          <InputGroup className="mb-2 form-control-sm">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <FormControl
                              placeholder="TV Unit "
                              aria-label="Text input with checkbox"
                              className="form-control-sm"
                              disabled
                            />
                          </InputGroup>
                          <InputGroup className="mb-2 form-control-sm">
                            <InputGroup.Checkbox
                              checked
                              aria-label="Checkbox for following text input"
                            />
                            <FormControl
                              placeholder="Double Bed "
                              aria-label="Text input with checkbox"
                              className="form-control-sm"
                              disabled
                            />
                          </InputGroup>
                          <hr className="hr-1" />
                          <div className="d-grid gap-2">
                            <Button
                              variant="warning"
                              size="sm"
                              className="text-center"
                            >
                              Update Room
                            </Button>
                          </div>
                        </Form>
                      </Card>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="id" title="ID's">
                  <Row className="mt-3 mb-3 m-4">
                    <Col className="text-center mx-2 p-2">
                      <Card body className="text-center border-0">
                        <h5>
                          <u>Reservation ID</u>
                        </h5>
                        <Form>
                          <Form.Group className="mb-3 mt-3">
                            <Form.Control
                              type="text"
                              placeholder="Length Of Reservation ID"
                            />
                            <Form.Text className="text-danger">
                              Length You Need For This Id. ex. 12
                            </Form.Text>
                          </Form.Group>

                          <Form.Group
                            className="mb-3 mt-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Starting String"
                            />
                            <Form.Text className="text-danger">
                              Starting String ex. ABCDE-
                            </Form.Text>
                          </Form.Group>
                          <div className="d-grid gap-2">
                            <Button variant="warning" size="sm" type="submit">
                              Add
                            </Button>
                          </div>
                        </Form>
                      </Card>
                    </Col>
                    <Col className="text-center mx-2 p-2">
                      <Card body className="text-center border-0">
                        <h5>
                          <u>Booking ID</u>
                        </h5>
                        <Form>
                          <Form.Group className="mb-3 mt-3">
                            <Form.Control
                              type="text"
                              placeholder="Length Of Booking ID"
                            />
                            <Form.Text className="text-danger">
                              Length You Need For This Id. ex. 10
                            </Form.Text>
                          </Form.Group>

                          <Form.Group
                            className="mb-3 mt-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Starting String"
                            />
                            <Form.Text className="text-danger">
                              Starting String ex. ABCDE-
                            </Form.Text>
                          </Form.Group>
                          <div className="d-grid gap-2">
                            <Button variant="warning" size="sm" type="submit">
                              Add
                            </Button>
                          </div>
                        </Form>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Card body></Card>
                    </Col>
                    <Col>
                      <Card body></Card>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="company" title="Company">
                  <Container>
                    <Row className="mt-3 mb-3 m-4">
                      <Col className="text-center mx-2 p-2">
                        <Card body className="border-0">
                          <h5>
                            <u>Add Company</u>
                          </h5>
                          <Form>
                            <Form.Group
                              className="mb-2 form-control-sm"
                              controlId="formGroupEmail"
                            >
                              <Form.Control
                                type="text"
                                className="form-control-sm"
                                placeholder="Company Name"
                              />
                            </Form.Group>
                            <Row className="no-gutters">
                              <Col>
                                <Form.Group
                                  className="mb-2 form-control-sm"
                                  controlId="formGroupEmail"
                                >
                                  <Form.Control
                                    type="text"
                                    className="form-control-sm"
                                    placeholder="GST No"
                                  />
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group
                                  className="mb-2  form-control-sm"
                                  controlId="formGroupPassword"
                                >
                                  <Form.Control
                                    type="text"
                                    className="form-control-sm"
                                    placeholder="Point Of Contact"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>

                            <Form.Group
                              className="mb-2 form-control-sm"
                              controlId="formGroupEmail"
                            >
                              <Form.Control
                                type="text"
                                className="form-control-sm"
                                placeholder="Credit Limit"
                              />
                            </Form.Group>

                            <hr className="hr-1" />
                            <div className="d-grid gap-2">
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-center"
                              >
                                Add Company
                              </Button>
                            </div>
                          </Form>
                        </Card>
                      </Col>

                      <Col className="text-center mx-2 p-2">
                        <Card body className="border-0">
                          <h5>
                            <u>Update Company</u>
                          </h5>
                          <Form>
                            <Form.Group
                              className="mb-2 form-control-sm"
                              controlId="formGroupEmail"
                            >
                              <Form.Control
                                type="text"
                                className="form-control-sm"
                                placeholder="Company Name"
                              />
                            </Form.Group>
                            <Row className="no-gutters">
                              <Col>
                                <Form.Group
                                  className="mb-2 form-control-sm"
                                  controlId="formGroupEmail"
                                >
                                  <Form.Control
                                    type="text"
                                    className="form-control-sm"
                                    placeholder="GST No"
                                  />
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group
                                  className="mb-2  form-control-sm"
                                  controlId="formGroupPassword"
                                >
                                  <Form.Control
                                    type="text"
                                    className="form-control-sm"
                                    placeholder="Point Of Contact"
                                  />
                                </Form.Group>
                              </Col>
                            </Row>

                            <Form.Group
                              className="mb-2 form-control-sm"
                              controlId="formGroupEmail"
                            >
                              <Form.Control
                                type="text"
                                className="form-control-sm"
                                placeholder="Credit Limit"
                              />
                            </Form.Group>

                            <hr className="hr-1" />
                            <Form.Check
                              type="radio"
                              label="Active"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                            <Form.Check
                              type="radio"
                              label="Defaulter"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                            />

                            <hr className="hr-1" />
                            <div className="d-grid gap-2">
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-center"
                              >
                                Update Room
                              </Button>
                            </div>
                          </Form>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab eventKey="customer" title="Customers"></Tab>
                <Tab eventKey="staff" title="Staff"></Tab>
              </Tabs>
            </Col>
            <Col lg={4}>
              <MasterSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ConfigPage;
