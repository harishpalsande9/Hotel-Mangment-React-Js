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
const AddIds = ({
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
          <div className=" row">
            <div className=" col-md-6">
              <h5 className="">Add Room</h5>
            </div>

            <div className=" col-md-6">
              <div className=" row">
                <div className=" col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="From Date"
                    value="19 Dec 21"
                    disabled
                  />
                </div>
                <div className=" col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    value="20 Dec 21"
                    placeholder="To Date"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="hr-1" />

          <div className=" row">
            <h5>Guest Details</h5>
            <div className=" col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Title"
              />
            </div>

            <div className=" col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="First Name"
              />
            </div>

            <div className=" col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Last Name"
              />
            </div>

            <div className=" col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Room Number"
              />
            </div>
          </div>

          <div className="row">
            <div className=" col-md-4">
              <FormControl
                type="text"
                className="form-control form-control-sm my-2"
                placeholder="Found By"
              />
            </div>

            <div className=" col-md-4">
              <FormControl
                type="text"
                className="form-control form-control-sm my-2"
                placeholder="Remarks"
              />
            </div>

            <div className=" col-md-4">
              <Button variant="light" size="sm">
                Upload Photo
              </Button>
            </div>
          </div>

          <div class="col-md-12 text-center">
            <Button variant="outline-dark" size="sm">
              Add Lost Items
            </Button>
          </div>
          <hr className="hr-1" />
        </Form>
      ) : (
        <Form onSubmit={addReservation}>
          <div className="border-light  row">
            <h5 className="">Setup ID's</h5>
            <div className="row">
              <div className="col-md-6 my-2">
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
                    <Form.Control type="text" placeholder="Starting String" />
                    <Form.Text className="text-danger">
                      Starting String ex. ABCDE-
                    </Form.Text>
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button variant="outline-dark" size="sm" type="submit">
                      Setup Reservation Id
                    </Button>
                  </div>
                </Form>
              </div>
              <div className="col-md-6 my-2">
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
                    <Form.Control type="text" placeholder="Starting String" />
                    <Form.Text className="text-danger">
                      Starting String ex. ABCDE-
                    </Form.Text>
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button variant="outline-dark" size="sm" type="submit">
                      Setup Booking Id
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Form>
      )}
    </>
  );
};

export default AddIds;
