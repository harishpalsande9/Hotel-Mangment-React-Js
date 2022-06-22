import React from "react";
import {
  Container,
  Row,
  ListGroup,
  Col,
  Tabs,
  Tab,
  Card,
  Form,
  Table,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import {
  FunnelFill,
  Plus,
  PlusCircle,
  PlusLg,
  Search,
} from "react-bootstrap-icons";
const AddRoom = ({
  displayCompanyForm,
  companyFormStatus,
  displayReservationForm,
  handleChange,
  addReservation,
  formData,
  roomInfo,
  showRooms,
  showRoomStatus,
}) => {
  return (
    <>
      {roomInfo ? (
        <Form onSubmit={addReservation}>
          <Row className="border-light border-bottom  pb-3">
            <Col>
              <Row>
                <Col>
                  <span className="bg-light">Add Room</span>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="From Date"
                    value="19 Dec 21"
                    disabled
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="form-control-sm my-2"
                    value="20 Dec 21"
                    placeholder="To Date"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <hr className="hr-1" />

          <Row className="mt-3 mb-3">
            <p>Guest Details</p>
            <Col className="col-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Title"
              />
            </Col>
            <Col>
              <Form.Control
                className="form-control-sm my-2"
                placeholder="First Name"
              />
            </Col>
            <Col>
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Last Name"
              />
            </Col>
            <Col>
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Room Number"
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col className="col-2 text-end">
              <FormControl
                type="text"
                className="form-control form-control-sm my-2"
                placeholder="Found By"
              />
            </Col>
            <Col className="col-8 text-end">
              <FormControl
                type="text"
                className="form-control form-control-sm my-2"
                placeholder="Remarks"
              />
            </Col>

            <Col className="text-end">
              <Button variant="light" size="sm">
                Upload Photo
              </Button>
            </Col>
          </Row>

          <div class="col-md-12 text-center">
            <Button variant="outline-dark" size="sm">
              Add Lost Items
            </Button>
          </div>
          <hr className="hr-1" />
        </Form>
      ) : (
        <Form onSubmit={addReservation}>
          <Row className="border-light border-bottom ">
            <Card body className="border-0">
              <h5 className="">Add New Room</h5>
              <Form>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group
                      className=" form-control-sm my-2"
                      controlId="formGroupEmail"
                    >
                      <Form.Control
                        type="text"
                        className="form-control-sm my-2"
                        placeholder="Enter Room Number"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group
                      className="  form-control-sm my-2"
                      controlId="formGroupPassword"
                    >
                      <Form.Control
                        type="text"
                        className="form-control-sm my-2"
                        placeholder="Room Is On The Floor"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group
                      className=" form-control-sm my-2"
                      controlId="formGroupEmail"
                    >
                      <Form.Control
                        type="text"
                        className="form-control-sm my-2"
                        placeholder="Type Of Room"
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    {" "}
                    <Form.Group
                      className=" form-control-sm my-2"
                      controlId="formGroupEmail"
                    >
                      <Form.Control
                        type="text"
                        className="form-control-sm my-2"
                        placeholder="Room Charges"
                      />
                    </Form.Group>
                  </div>
                </div>

                <small>Choose Aminities</small>
                <InputGroup className=" form-control-sm my-2">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <FormControl
                    placeholder="Wifi "
                    className="form-control-sm my-2"
                    aria-label="Text input with checkbox"
                    disabled
                  />
                </InputGroup>
                <InputGroup className=" form-control-sm my-2">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <FormControl
                    placeholder="Air Conditioner "
                    aria-label="Text input with checkbox"
                    className="form-control-sm my-2"
                    disabled
                  />
                </InputGroup>
                <InputGroup className=" form-control-sm my-2">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <FormControl
                    placeholder="TV Unit "
                    aria-label="Text input with checkbox"
                    className="form-control-sm my-2"
                    disabled
                  />
                </InputGroup>
                <InputGroup className=" form-control-sm my-2">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <FormControl
                    placeholder="Double Bed "
                    aria-label="Text input with checkbox"
                    className="form-control-sm my-2"
                    disabled
                  />
                </InputGroup>
                <hr className="hr-1" />
                <div className="d-grid gap-2">
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="text-center"
                  >
                    Add New Room
                  </Button>
                </div>
              </Form>
            </Card>
          </Row>

          <div class="col-md-12 text-center"></div>
          <hr className="hr-1" />
        </Form>
      )}
    </>
  );
};

export default AddRoom;
