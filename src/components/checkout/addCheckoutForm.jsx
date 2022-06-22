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
import {
  FunnelFill,
  Plus,
  PlusCircle,
  PlusLg,
  Search,
  XLg,
} from "react-bootstrap-icons";
const AddCheckoutForm = ({
  displayCompanyForm,
  companyFormStatus,
  displayReservationForm,
  handleChange,
  addReservation,
  formData,
  whichService,
  showService,
  roomInfo,
  showRooms,
  showRoomStatus,
}) => {
  return (
    <>
      {roomInfo && (
        <Form onSubmit={addReservation}>
          <div className=" row border-light border-bottom mb-2 pb-3">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h5>Check Out for Room {roomInfo.roomNumber}</h5>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="From Date"
                    value={roomInfo.checkedIn}
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    value={roomInfo.expectedCheckout}
                    placeholder="To Date"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="hr-1" /> */}

          <div class="row">
            <div className="col-md-3">
              <div class="c-dashboardInfo">
                <div class="wrap">
                  <p className="lead text-primary">Room</p>
                  <span>{roomInfo.roomNumber}</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="c-dashboardInfo">
                <div class="wrap">
                  <p className="lead text-primary">Customer Name</p>
                  <span>{roomInfo.customerName}</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-dashboardInfo p-0 m-0">
                <div class="wrap">
                  <p className="lead text-primary">Outstanding</p>
                  <span>&#8377; {roomInfo.oustanding}</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="hr-1" />
          <div className=" row mt-3 mb-3">
            <Card body>
              <div className="row text-center justify-content-center">
                <div className="col-md-3 my-1">
                  <small className="text-primary"> Booking Id</small>
                  <Button variant="light" size="sm">
                    ABNAJA7171771
                  </Button>
                </div>
                <div className="col-md-3 my-1">
                  <small className="text-primary">Bill No.</small>
                  <br />
                  <Button variant="light" size="sm">
                    871818
                  </Button>
                </div>
                <div className="col-md-3 my-1">
                  <small className="text-dark">Choose Payment Method</small>
                  <br />
                  <Form.Control
                    className="form-control-sm"
                    placeholder="Payment Mode"
                    list="datalistOptions3"
                    value={whichService}
                    onChange={showService}
                  />
                  <datalist id="datalistOptions3">
                    <option value="UPI" />
                    <option value="Cash" />
                    <option value="Card" />
                    <option value="Cheque" />
                  </datalist>
                </div>
              </div>
            </Card>
          </div>

          <hr className="hr-1" />

          {/* FORM FOR RESTO */}
          {whichService === "UPI" && (
            <div className=" row  slideIn">
              <p className="text-primary">Enter UPI Details</p>
              <div className="text-start col-md-3">
                <Form.Control
                  className="form-control-sm my-2"
                  name="foodItem"
                  placeholder="Transaction ID"
                />
              </div>
              <div className="col-md-3">
                <Form.Control
                  className="form-control-sm my-2"
                  name="qty"
                  placeholder="Time & Date"
                />
              </div>

              <div className="col-md-3">
                <Form.Control
                  className="form-control-sm my-2"
                  name="qty"
                  placeholder="Settled By"
                />
              </div>

              <div className="col-md-3  my-2">
                <Button className="mx-1" variant="warning" size="sm">
                  {/* <CheckSquare /> */}Confirm CheckOut
                </Button>
                <Button className="mx-1" variant="dark" size="sm">
                  <XLg />
                </Button>
              </div>
            </div>
          )}
        </Form>
      )}

      {!roomInfo && (
        <Form onSubmit={addReservation}>
          <div className="row border-light border-bottom ">
            <div className="col-md-6 my-2">
              <div className="row">
                <div className="col-md-12">
                  <Button variant="dark" size="sm">
                    Check Out
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="CheckIn"
                  />
                </div>
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="CheckOut"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="hr-1" /> */}

          <div class="row">
            <div className="col-md-3">
              <div class="c-dashboardInfo">
                <div class="wrap">
                  <p className="lead text-primary">Room</p>
                  <span>102</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="c-dashboardInfo">
                <div class="wrap">
                  <p className="lead text-primary">Customer Name</p>
                  <span>Naved Riyaz Naik</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-dashboardInfo p-0 m-0">
                <div class="wrap">
                  <p className="lead text-primary">Outstanding</p>
                  <span>&#8377; 1200</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="hr-1" />
          <div className="row">
            <Card body>
              <div className="row text-center justify-content-center">
                <div className="col-md-3 my-2">
                  <small className="text-primary"> Booking Id</small>
                  <Button variant="light" size="sm">
                    ABNAJA7171771
                  </Button>
                </div>
                <div className="col-md-3 my-2">
                  <small className="text-primary">Bill No.</small>
                  <br />
                  <Button variant="light" size="sm">
                    871818
                  </Button>
                </div>
                <div className="col-md-3 my-2">
                  <small className="text-dark">Choose Payment Method</small>
                  <br />
                  <Form.Control
                    className="form-control-sm"
                    placeholder="Payment Mode"
                    list="datalistOptions3"
                    value={whichService}
                    onChange={showService}
                  />
                  <datalist id="datalistOptions3">
                    <option value="UPI" />
                    <option value="Cash" />
                    <option value="Card" />
                    <option value="Cheque" />
                  </datalist>
                </div>
              </div>
            </Card>
          </div>

          <hr className="hr-1" />

          {/* FORM FOR RESTO */}
          {whichService === "UPI" && (
            <div className="row slideIn">
              <h5 className="text-primary">Enter UPI Details</h5>
              <div className="col-md-3">
                <Form.Control
                  className="form-control-sm my-2"
                  name="foodItem"
                  placeholder="Transaction ID"
                />
              </div>
              <div className="col-md-3">
                <Form.Control
                  className="form-control-sm my-2"
                  name="qty"
                  placeholder="Time & Date"
                />
              </div>

              <div className="col-md-3">
                <Form.Control
                  className="form-control-sm my-2"
                  name="qty"
                  placeholder="Settled By"
                />
              </div>

              <div className="col-md-3 my-2">
                <Button className="mx-1" variant="warning" size="sm">
                  {/* <CheckSquare /> */}Confirm CheckOut
                </Button>
                <Button className="mx-1" variant="dark" size="sm">
                  <XLg />
                </Button>
              </div>
            </div>
          )}
        </Form>
      )}
    </>
  );
};

export default AddCheckoutForm;
