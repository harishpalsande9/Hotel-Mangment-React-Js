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
const AddLostFound = ({
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
          <div className="border-light border-bottom row">
            <div className="col-md-6">
              <h5 className="">Found Something ?</h5>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="From Date"
                    value="19 Dec 21"
                    disabled
                  />
                </div>
                <div className="col-md-6">
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

          <div className="row">
            <h5>Guest Details</h5>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Title"
              />
            </div>

            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="First Name"
              />
            </div>

            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Last Name"
              />
            </div>

            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Room Number"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <FormControl
                type="text"
                className="form-control form-control-sm my-2"
                placeholder="Found By"
              />
            </div>
            <div className="col-md-4">
              <FormControl
                type="text"
                className="form-control form-control-sm my-2"
                placeholder="Remarks"
              />
            </div>

            <div className="col-md-4">
              <Button variant="light" size="sm">
                Upload Photo
              </Button>
            </div>
          </div>

          <div className="col-md-6  ">
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
              <h5 className="">Found Something ?</h5>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="From Date"
                    value="19 Dec 21"
                    disabled
                  />
                </div>
                <div className="col-md-4">
                  <Form.Control
                    className="form-control-sm my-2"
                    value="20 Dec 21"
                    placeholder="To Date"
                  />
                </div>
                <div className="col-md-4">
                  <Search className="text-primary" />
                </div>
              </div>
            </div>
          </div>

          <hr className="hr-1" />

          <div className="row">
            <h5>Guest Details</h5>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Title"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="First Name"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Last Name"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Room Number"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <FormControl
                type="text"
                className="form-control form-control-sm my-2"
                placeholder="Found By"
              />
            </div>
            <div className="col-md-3">
              <FormControl
                type="text"
                className="form-control form-control-sm my-2"
                placeholder="Remarks"
              />
            </div>

            <div className="col-md-3 my-2">
              <Button variant="light" size="sm">
                Upload Photo
              </Button>
            </div>
            <div class="col-md-3 my-2">
              <Button variant="outline-dark" size="sm">
                Add Lost Items
              </Button>
            </div>
          </div>

          <hr className="hr-1" />
        </Form>
      )}
    </>
  );
};

export default AddLostFound;
