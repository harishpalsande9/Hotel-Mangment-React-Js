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
  Eraser,
  FunnelFill,
  Plus,
  PlusCircle,
  PlusLg,
  ReceiptCutoff,
  Search,
} from "react-bootstrap-icons";
const AddBreakage = ({
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
        <>
          <Form onSubmit={addReservation}>
            <Row className="border-light border-bottom mb-2 pb-3">
              <Col>
                <Row>
                  <Col>
                    <span className="bg-light">
                      Add Breakages To Room{" "}
                      <strong className="text-primary">
                        {roomInfo.roomNumber}
                      </strong>
                    </span>
                  </Col>

                  <Col className="d-flex flex-row-reverse">
                    {" "}
                    <ReceiptCutoff className="text-success mx-2" />
                    <Search className="text-primary mx-2" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-3 mb-3 mx-2 g-1">
              <Col className="col-2">
                <Form.Text>Room Number</Form.Text>
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Room"
                  value={roomInfo.roomNumber}
                  disabled
                />
              </Col>
              <Col className="col-3">
                <Form.Text>Customer Name</Form.Text>
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Customer Name"
                  value={roomInfo.customerName}
                  disabled
                />
              </Col>
              <Col>
                <Form.Text>Expected Checkout</Form.Text>
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Customer Name"
                  value={roomInfo.expectedCheckout}
                  disabled
                />
              </Col>
              <Col className="">
                <Form.Text>Breakages</Form.Text>
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Customer Name"
                  value={roomInfo.brekages}
                  disabled
                />
              </Col>
            </Row>

            <Row className="mt-3 mb-3 mx-2 g-1">
              <Col className="col-5">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Item"
                />
              </Col>
              <Col className="col-1 text-end">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="qty"
                />
              </Col>
              <Col className="col-2 text-end">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Charges"
                />
              </Col>
              <Col className="col-2 text-end">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="sub Total"
                />
              </Col>
              <Col className="col text-end">
                <Button variant="outline-dark" size="sm">
                  Add Item
                </Button>
              </Col>
            </Row>

            <div class="col-md-12 text-center"></div>
            <hr className="hr-1" />
          </Form>
          <Row className="p-2 text-center ">
            <Table hover size="sm" className="table table-bordered">
              <thead className="small mb-5">
                <tr className="bg-light text-dark">
                  <td className="col-5">Item</td>
                  <td className="col-2">Qty</td>
                  <td className="col-2">Sub Total</td>
                  <td className="col-3">Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pillow</td>
                  <td>1</td>
                  <td>50</td>
                  <td>
                    <PlusCircle className="text-primary mx-1" />
                    <Eraser className="text-danger mx-1" />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Card body className="mx-2 ">
              Grand Total <strong>1200</strong>
              <Button className="float-end" variant="outline-primary" size="sm">
                Add To Bill
              </Button>
            </Card>
          </Row>
        </>
      ) : (
        <>
          <>
            <Form onSubmit={addReservation}>
              <div className="border-light border-bottom row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="">Add Breakages</h5>
                    </div>

                    <div className="col-md-6">
                      {" "}
                      <ReceiptCutoff className="text-success mx-2" />
                      <Search className="text-primary mx-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Room"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Customer Name"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Customer Name"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Customer Name"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Item"
                  />
                </div>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="qty"
                  />
                </div>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Charges"
                  />
                </div>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="sub Total"
                  />
                </div>
                <div className="col-md-3">
                  <Button variant="outline-dark" size="sm">
                    Add Item
                  </Button>
                </div>
              </div>

              <div class="col-md-12 text-center"></div>
              <hr className="hr-1" />
            </Form>
            <Row className="p-2 text-center ">
              <Table hover size="sm" className="table table-bordered">
                <thead className="small mb-5">
                  <tr className="bg-light text-dark">
                    <td className="col-5">Item</td>
                    <td className="col-2">Qty</td>
                    <td className="col-2">Sub Total</td>
                    <td className="col-3">Actions</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pillow</td>
                    <td>1</td>
                    <td>50</td>
                    <td>
                      <PlusCircle className="text-primary mx-1" />
                      <Eraser className="text-danger mx-1" />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Card body className="mx-2 ">
                Grand Total <strong>1200</strong>
                <Button
                  className="float-end"
                  variant="outline-primary"
                  size="sm"
                >
                  Add To Bill
                </Button>
              </Card>
            </Row>
          </>
        </>
      )}
    </>
  );
};

export default AddBreakage;
