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
const AddStaff = ({
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
                  <span className="bg-light">
                    New CheckIn For Room
                    <strong className="text-primary">
                      &nbsp;{roomInfo.roomNumber}
                    </strong>
                  </span>
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
              <Row className="mt-3 mb-3 ">
                <Col>
                  <Form.Control
                    className="form-control-sm"
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
                </Col>

                <Col>
                  <Form.Control
                    className="form-control-sm"
                    placeholder="GST Number"
                    name="companyDetails.gst"
                    onChange={handleChange}
                    id="gstId"
                    value={formData.gst}
                  />
                </Col>

                <Col>
                  <Form.Control
                    className="form-control-sm"
                    placeholder="Visit Purpose"
                    name="companyDetails.gst"
                    onChange={handleChange}
                    id="gstId"
                    value={formData.gst}
                  />
                </Col>
              </Row>

              <Row className="mt-3 mb-3">
                <Col>
                  <Form.Control
                    className="form-control-sm"
                    placeholder="Mobile"
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="form-control-sm"
                    placeholder="Email"
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="form-control-sm"
                    placeholder="Point Of Contact"
                  />
                </Col>
              </Row>
            </div>
          )}
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
                placeholder="Middle Name"
              />
            </Col>

            <Col>
              <Form.Control
                className="form-control-sm"
                placeholder="Last Name"
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col className="col-3">
              <Form.Control className="form-control-sm" placeholder="Mobile" />
            </Col>

            <Col className="col-3">
              <Form.Control className="form-control-sm" placeholder="Email" />
            </Col>

            <Col className="col-4">
              <Form.Control className="form-control-sm" placeholder="Address" />
            </Col>

            <Col className="text-end">
              <Button variant="light" size="sm">
                Upload ID
              </Button>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col className="col-2">
              <Form.Control className="form-control-sm" placeholder="Source" />
            </Col>
            <Col className="col-3">
              <Form.Control
                className="form-control-sm"
                placeholder="Reservation By"
              />
            </Col>
            <Col>
              <Row>
                <Col className="col-4">
                  <Form.Control
                    className="form-control-sm"
                    placeholder="Vehicle Type"
                    list="datalistOptions1"
                  />
                  <datalist id="datalistOptions1">
                    <option value="2 Wheeler" />
                    <option value="4 Wheeler" />
                    <option value="Other" />
                  </datalist>
                </Col>

                <Col className="col-5">
                  {" "}
                  <Form.Control
                    className="form-control-sm"
                    placeholder="Vehicle Number"
                  />
                </Col>

                <Col className="text-end">
                  <small>
                    <Button variant="light" size="sm">
                      Add More
                    </Button>
                  </small>
                </Col>
              </Row>
            </Col>
          </Row>

          <hr className="hr-1" />

          <Row className="mt-3 mb-3">
            <p>Room Details</p>
            <Col className="col-2">
              <Button
                variant="outline-dark"
                onClick={() => showRooms()}
                size="sm"
              >
                Choose Room
              </Button>
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                placeholder="No Of People"
              />
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                list="datalistOptions2"
                placeholder="Adults"
              />
              <datalist id="datalistOptions2">
                <option value="1" />
                <option value="2" />
                <option value="3" />
              </datalist>
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                list="datalistOptions2"
                placeholder="Childrens"
              />
              <datalist id="datalistOptions2">
                <option value="1" />
                <option value="2" />
                <option value="3" />
              </datalist>
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                placeholder="No Of Rooms"
              />
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                placeholder="Meal Plan"
              />
            </Col>

            {showRoomStatus && (
              <Card className="" body>
                Room List
              </Card>
            )}
          </Row>

          <hr className="hr-1" />

          <Row className="mt-3 mb-3">
            <p>Charges</p>
            <Col className="text-start col-2">
              <Button size="sm" variant="light">
                remark
              </Button>
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                placeholder="Base Amount"
              />
            </Col>

            <Col className="col-1">
              <Form.Control className="form-control-sm" placeholder="Tax" />
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                placeholder="Discount"
              />
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                placeholder="Net Amount"
              />
            </Col>

            <Col className="text-end">
              <Button variant="light" size="sm">
                Bill To Company
              </Button>
            </Col>
          </Row>

          <hr className="hr-1" />

          <Row className="mt-3 mb-3">
            <p>Payments</p>
            <Col>
              <Form.Control
                className="form-control-sm"
                placeholder="Total Payable"
              />
            </Col>

            <Col>
              <Form.Control className="form-control-sm" placeholder="Advance" />
            </Col>

            <Col>
              <Form.Control className="form-control-sm" placeholder="Pending" />
            </Col>

            <Col>
              <Form.Control
                className="form-control-sm"
                placeholder="Payment Mode"
              />
            </Col>

            <Col>
              <Button variant="dark" size="sm" type="submit">
                Confirm Booking
              </Button>
            </Col>
          </Row>

          <hr className="hr-1" />
        </Form>
      ) : (
        <Form onSubmit={addReservation}>
          <Row className="border-light border-bottom mb-2 pb-3">
            <h5 className="">Add Staff</h5>
          </Row>
          <Row className="mt-3 mb-3">
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
                placeholder="Middle Name"
              />
            </Col>
            <Col>
              <Form.Control
                className="form-control-sm"
                placeholder="Last Name"
              />
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col className="col-3">
              <Form.Control className="form-control-sm" placeholder="Mobile" />
            </Col>
            <Col className="col-3">
              <Form.Control className="form-control-sm" placeholder="Email" />
            </Col>
            <Col className="col">
              <Form.Control className="form-control-sm" placeholder="Address" />
            </Col>
          </Row>
          <hr className="hr-1" />
          <Row className="mt-3 mb-3 g-1">
            <p>Professional Details</p>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                placeholder="Experience"
              />
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                list="datalistOptions2"
                placeholder="Role"
              />
              <datalist id="datalistOptions2">
                <option value="Manager" />
                <option value="Waiter" />
                <option value="House Keeping" />
              </datalist>
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                list="datalistOptions2"
                placeholder="Interview On"
              />
            </Col>

            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                placeholder="Joining From"
              />
            </Col>
            <Col className="col-2">
              <Form.Control className="form-control-sm" placeholder="Salary" />
            </Col>
            <Col className="col-2">
              <Form.Control
                className="form-control-sm"
                placeholder="Salary Date"
              />
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col className="col-4">
              <Form.Control
                className="form-control-sm"
                placeholder="Bank Name"
              />
            </Col>
            <Col className="col-5">
              <Form.Control
                className="form-control-sm"
                placeholder="Bank Acc No"
              />
            </Col>
            <Col className="col-3">
              <Form.Control className="form-control-sm" placeholder="IFSC" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Experience Certificate?</Form.Label>
                <Form.Control
                  className="form-control form-control-sm"
                  type="file"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>ID Proof</Form.Label>
                <Form.Control
                  className="form-control form-control-sm"
                  type="file"
                />
              </Form.Group>
            </Col>
          </Row>
          <hr className="hr-1" />
          <div className="text-center">
            <Button variant="outline-dark" size="sm">
              Add Staff Member
            </Button>
          </div>
        </Form>
      )}
    </>
  );
};

export default AddStaff;
