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
} from "react-bootstrap";
import { FunnelFill, Plus, PlusCircle, PlusLg } from "react-bootstrap-icons";
const AddCustomer = ({
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
              <div className="row">
                <div className="col-md-12">
                  <div className="">
                    New CheckIn For Room
                    <strong className="text-primary">
                      &nbsp;{roomInfo.roomNumber}
                    </strong>
                  </div>
                </div>
              </div>
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
          {/* <hr className="hr-1" /> */}
          <div>
            <span className="mx-2 text-primary">Company</span>
            <label class="switch">
              <input type="checkbox" onChange={() => displayCompanyForm()} />
              <span class="slider"></span>
            </label>
          </div>

          {companyFormStatus && (
            <div className="slideIn">
              <div className="row">
                <div className="col-md-4">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Type To Search Company"
                    name="companyDetails.companyName"
                    onChange={handleChange}
                    list="datalistOptions"
                    id="exampleDataList"
                    value={formData.companyName}
                  />
                  <datalist id="datalistOptions">
                    <option value="Hoodie Techno" />
                    <option value="Caliph Code" />
                    <option value="ProfitHooks" />
                    <option value="EELMA Foundations" />
                    <option className="text-primary" value="Add Company" />
                  </datalist>
                </div>

                <div className="col-md-4">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="GST Number"
                    name="companyDetails.gst"
                    onChange={handleChange}
                    id="gstId"
                    value={formData.gst}
                  />
                </div>

                <div className="col-md-4">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Visit Purpose"
                    name="companyDetails.gst"
                    onChange={handleChange}
                    id="gstId"
                    value={formData.gst}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Mobile"
                  />
                </div>

                <div className="col-md-4">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Email"
                  />
                </div>

                <div className="col-md-4">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Point Of Contact"
                  />
                </div>
              </div>
            </div>
          )}
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
                placeholder="Middle Name"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Mobile"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Email"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Address"
              />
            </div>
            <div className="col-md-3 my-2">
              <Button variant="light" size="sm">
                Upload ID
              </Button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Source"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Reservation By"
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Vehicle Type"
                    list="datalistOptions1"
                  />
                  <datalist id="datalistOptions1">
                    <option value="2 Wheeler" />
                    <option value="4 Wheeler" />
                    <option value="Other" />
                  </datalist>
                </div>
                <div className="col-md-3">
                  {" "}
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Vehicle Number"
                  />
                </div>
                <div className="col-md-3">
                  <small>
                    <Button variant="light" size="sm">
                      Add More
                    </Button>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <hr className="hr-1" />

          <div className="row">
            <h5>Room Details</h5>
            <div className="col-md-2">
              <Button
                variant="outline-dark"
                onClick={() => showRooms()}
                size="sm"
              >
                Choose Room
              </Button>
            </div>
            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="No Of People"
              />
            </div>

            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                list="datalistOptions2"
                placeholder="Adults"
              />
              <datalist id="datalistOptions2">
                <option value="1" />
                <option value="2" />
                <option value="3" />
              </datalist>
            </div>

            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                list="datalistOptions2"
                placeholder="Childrens"
              />
              <datalist id="datalistOptions2">
                <option value="1" />
                <option value="2" />
                <option value="3" />
              </datalist>
            </div>

            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="No Of Rooms"
              />
            </div>
            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Meal Plan"
              />
            </div>

            {showRoomStatus && (
              <Card className="" body>
                Room List
              </Card>
            )}
          </div>

          <hr className="hr-1" />

          <div className="row">
            <h5>Charges</h5>
            <div className="col-md-2">
              <Button size="sm" variant="light">
                remark
              </Button>
            </div>
            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Base Amount"
              />
            </div>
            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Tax"
              />
            </div>
            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Discount"
              />
            </div>
            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Net Amount"
              />
            </div>
            <div className="col-md-2">
              <Button variant="light" size="sm">
                Bill To Company
              </Button>
            </div>
          </div>

          <hr className="hr-1" />

          <div className="row">
            <h5>Payments</h5>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Total Payable"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Advance"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Pending"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Payment Mode"
              />
            </div>
            <div className="col-md-3">
              <Button variant="dark" size="sm" type="submit">
                Confirm Booking
              </Button>
            </div>
          </div>

          <hr className="hr-1" />
        </Form>
      ) : (
        <Form onSubmit={addReservation}>
          <div className="border-light border-bottom row">
            <div className="col-md-12">
              <h5 className="">Add New Customer </h5>
            </div>
          </div>

          <div className="row">
            <h5>Guest Details</h5>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2 my-2"
                placeholder="Title"
              />
            </div>

            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2 my-2"
                placeholder="First Name"
              />
            </div>

            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2 my-2"
                placeholder="Middle Name"
              />
            </div>

            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2 my-2"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2 my-2"
                placeholder="Mobile"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2 my-2"
                placeholder="Email"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2 my-2"
                placeholder="Address"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2 my-2"
                placeholder="Agent"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Date Of Birth"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Anniversary"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Preferred Room"
              />
            </div>
            <div className="col-md-3 my-2">
              <Button variant="outline-dark" size="sm">
                Add Customer
              </Button>
            </div>
          </div>

          <hr className="hr-1" />
        </Form>
      )}
    </>
  );
};

export default AddCustomer;
