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
const AddAminities = ({
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
          <Row className="border-light border-bottom mb-2 pb-3">
            <Col>
              <Row>
                <Col>
                  <span className="bg-light">Add Aminities</span>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <Form.Control
                    className="form-control-sm"
                    placeholder="From Date"
                    value="19 Dec 21"
                    disabled
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="form-control-sm"
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
              <Form.Control className="form-control-sm" placeholder="Title" />
            </Col>
            <Col>
              <Form.Control
                className="form-control-sm"
                placeholder="First Name"
              />
            </Col>
            <Col>
              <Form.Control
                className="form-control-sm"
                placeholder="Last Name"
              />
            </Col>
            <Col>
              <Form.Control
                className="form-control-sm"
                placeholder="Room Number"
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col className="col-2 text-end">
              <FormControl
                type="text"
                className="form-control form-control-sm"
                placeholder="Found By"
              />
            </Col>
            <Col className="col-8 text-end">
              <FormControl
                type="text"
                className="form-control form-control-sm"
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
          <div className="border-light border-bottom row">
            <div className="col-md-6">
              <h5 className="">Add Aminities </h5>
            </div>
            <div className="col-md-6">
              {" "}
              <Search className="text-primary" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Room No"
              />
            </div>
            <div className="col-md-4">
              <Form.Control
                className="form-control-sm  my-2"
                placeholder="Room Type"
              />
            </div>
            <div className="col-md-4">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Single or Double"
              />
            </div>
          </div>

          <div className="row   border-bottom my-2 py-1">
            <div className="col-md-4">
              <strong className="text-primary">Towels</strong>
            </div>
            <div className="col-md-8">
              <div className="row">
                <Col className="col">
                  <Form.Check inline label="1" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="2" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="3" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="4" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="5" name="group1" type="checkbox" />
                </Col>
              </div>
            </div>
          </div>
          <div className="row   border-bottom my-2 py-1">
            <div className="col-md-4">
              <strong className="text-primary">Pillows</strong>
            </div>
            <div className="col-md-8">
              <div className="row">
                <Col className="col">
                  <Form.Check inline label="1" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="2" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="3" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="4" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="5" name="group1" type="checkbox" />
                </Col>
              </div>
            </div>
          </div>
          <div className="row   border-bottom my-2 ">
            <div className="col-md-4">
              <strong className="text-primary">Blankets</strong>
            </div>
            <div className="col-md-8">
              <div className="row">
                <Col className="col">
                  <Form.Check inline label="1" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="2" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="3" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="4" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="5" name="group1" type="checkbox" />
                </Col>
              </div>
            </div>
          </div>
          <div className="row   border-bottom my-2">
            <div className="col-md-4">
              <strong className="text-primary">Hangers</strong>
            </div>
            <div className="col-md-8">
              <div className="row">
                <Col className="col">
                  <Form.Check inline label="1" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="2" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="3" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="4" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="5" name="group1" type="checkbox" />
                </Col>
              </div>
            </div>
          </div>
          <div className="row   border-bottom my-2">
            <div className="col-md-4">
              <strong className="text-primary">Tv Remote</strong>
            </div>
            <div className="col-md-8">
              <div className="row">
                <Col className="col">
                  <Form.Check inline label="1" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="2" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="3" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="4" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="5" name="group1" type="checkbox" />
                </Col>
              </div>
            </div>
          </div>
          <div className="row   border-bottom my-2">
            <div className="col-md-4">
              <strong className="text-primary">Ac Remote</strong>
            </div>
            <div className="col-md-8">
              <div className="row">
                <Col className="col">
                  <Form.Check inline label="1" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="2" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="3" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="4" name="group1" type="checkbox" />
                </Col>
                <Col className="col">
                  <Form.Check inline label="5" name="group1" type="checkbox" />
                </Col>
              </div>
            </div>
          </div>

          <div className="row">
            <div class="col-md-12 text-center my-2">
              <Button variant="outline-dark" size="sm">
                Add Room Aminities
              </Button>
            </div>
          </div>

          <hr className="hr-1" />
        </Form>
      )}
    </>
  );
};

export default AddAminities;
