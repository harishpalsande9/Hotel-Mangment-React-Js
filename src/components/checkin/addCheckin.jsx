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
  InputGroup,
  FormControl,
  Table,
  Button,
} from "react-bootstrap";
import {
  FunnelFill,
  Plus,
  PlusCircle,
  PlusCircleDotted,
  PlusLg,
} from "react-bootstrap-icons";
const AddCheckinForm = ({
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
          <div className=" row border-light border-bottom ">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h5 className="">
                    New CheckIn For Room
                    <strong className="text-primary">
                      &nbsp;{roomInfo.roomNumber}
                    </strong>
                  </h5>
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
          <div className="my-2">
            <span className="mx-2 text-primary">Company</span>
            <label class="switch">
              <input type="checkbox" onChange={() => displayCompanyForm()} />
              <span class="slider"></span>
            </label>
          </div>

          {companyFormStatus && (
            <div className="slideIn">
              <div className="row ">
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Company Name"
                    name="companyDetails.companyName"
                    onChange={handleChange}
                    id="companyId"
                    value={formData.companyName}
                  />
                </div>
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="GST Number"
                    name="companyDetails.gst"
                    onChange={handleChange}
                    id="gstId"
                    value={formData.gst}
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
                    placeholder="Point Of Contact"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Guest Type"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Total Credit Given"
                      aria-label="Username"
                      className="form-control form-control-sm my-2"
                      aria-describedby="basic-addon1"
                      disabled
                    />
                    <InputGroup.Text className="bg-light" id="basic-addon1">
                      <PlusCircleDotted className="text-primary" />
                    </InputGroup.Text>
                  </InputGroup>
                </div>

                <div className="col-md-4">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Remaining Credit"
                      aria-label="Username"
                      className="form-control form-control-sm my-2"
                      aria-describedby="basic-addon1"
                      disabled
                      size="sm"
                    />
                    <Button variant="light" size="sm">
                      BTC
                    </Button>
                  </InputGroup>
                </div>

                <div className="col-md-4 my-2">
                  <Form.Check
                    type="switch"
                    id="custom-switch-gst"
                    label="Another Company Claiming GST?"
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

            <div className="col-md-3 my-2">
              <small>
                <Button variant="light" size="sm">
                  Add More
                </Button>
              </small>
            </div>
          </div>

          <hr className="hr-1" />

          <div className="row">
            <h5>Room Details</h5>
            <div className="col-md-2 my-2">
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
            <div className="col-md-2 my-2">
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

            <div className="col-md-2 my-2">
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

            <div className="col-md-3 my-2">
              <Button variant="dark" size="sm" type="submit">
                Confirm Booking
              </Button>
            </div>
          </div>

          <hr className="hr-1" />
        </Form>
      ) : (
        <Form onSubmit={addReservation}>
          <div className="border-light border-bottom  row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 my-2 ">
                  <h5 className="">New Check In </h5>
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
                <siv className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    value="20 Dec 21"
                    placeholder="To Date"
                  />
                </siv>
              </div>
            </div>
          </div>
          {/* <hr className="hr-1" /> */}
          <div className="py-2">
            <span className="mx-2 text-primary">Company</span>
            <label class="switch">
              <input type="checkbox" onChange={() => displayCompanyForm()} />
              <span class="slider"></span>
            </label>
          </div>

          {companyFormStatus && (
            <div className="slideIn">
              <div className=" row">
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Company Name"
                    name="companyDetails.companyName"
                    onChange={handleChange}
                    id="companyId"
                    value={formData.companyName}
                  />
                </div>
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="GST Number"
                    name="companyDetails.gst"
                    onChange={handleChange}
                    id="gstId"
                    value={formData.gst}
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
                    className="form-control-sm  my-2"
                    placeholder="Email"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Point Of Contact"
                  />
                </div>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Guest Type"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <InputGroup className=" my-2">
                    <FormControl
                      placeholder="Total Credit Given "
                      aria-label="Username"
                      className="form-control form-control-sm"
                      aria-describedby="basic-addon1"
                      disabled
                    />
                    <InputGroup.Text className="bg-light" id="basic-addon1">
                      <PlusCircleDotted className="text-primary" />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
                <div className="col-md-4">
                  <InputGroup className="my-2">
                    <FormControl
                      placeholder="Remaining Credit "
                      aria-label="Username"
                      className="form-control form-control-sm"
                      aria-describedby="basic-addon1"
                      disabled
                      size="sm"
                    />
                    <Button variant="light" size="sm">
                      BTC
                    </Button>
                  </InputGroup>
                </div>
                <div className="col-md-4 my-2">
                  <Form.Check
                    type="switch"
                    id="custom-switch-gst"
                    label="Another Company Claiming GST?"
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
            <div className="col-md-4 my-2">
              <small>
                <Button variant="light" size="sm">
                  Add More
                </Button>
              </small>
            </div>
          </div>

          <hr className="hr-1" />

          <div className="row">
            <h5>Room Details</h5>
            <div className="col-md-2 my-2">
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
            <div className="col-md-2 ">
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

          <div className="row ">
            <h5>Charges</h5>
            <div className="col-md-2 my-2">
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
            <p>Payments</p>
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
      )}
    </>
  );
};

export default AddCheckinForm;
