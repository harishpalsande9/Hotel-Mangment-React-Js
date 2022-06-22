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
  PlusCircleFill,
  PlusLg,
  ReceiptCutoff,
  Search,
} from "react-bootstrap-icons";
const AddMiniBar = ({
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
  console.log(roomInfo);
  return (
    <>
      {roomInfo ? (
        <>
          <Form onSubmit={addReservation}>
            <div className="border-light border-bottom row">
              <Col>
                <span className="bg-light">Add Remove MiniBar Items</span>
              </Col>

              <Col className="d-flex flex-row-reverse">
                {" "}
                <ReceiptCutoff className="text-success mx-2" />
                <Search className="text-primary mx-2" />
              </Col>
            </div>
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
                <Form.Text>Minibar Bill</Form.Text>
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Customer Name"
                  value={roomInfo.miniBar}
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
                  <td>Thumbs Up</td>
                  <td>1</td>
                  <td>15</td>
                  <td>
                    <PlusCircleFill className="text-primary mx-1" />
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
          <Form onSubmit={addReservation}>
            <div className="border-light border-bottom row">
              <div className="col-md-6">
                <h5 className="">Add Remove Minibar Items</h5>
              </div>
              <div className="col-md-6">
                {" "}
                <Search className="text-primary" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Room"
                />
              </div>

              <div className="col-md-2">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Item"
                />
              </div>
              <div className="col-md-2">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="qty"
                />
              </div>
              <div className="col-md-2">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Price"
                />
              </div>
              <div className="col-md-2">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="sub Total"
                />
              </div>
              <div className="col-md-2 my-2 text-center">
                <Button variant="outline-dark" size="sm">
                  Add
                </Button>
              </div>
            </div>

            <hr className="hr-1" />
          </Form>

          <div className="row text-center ">
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
                  <td>Thumbs Up</td>
                  <td>1</td>
                  <td>15</td>
                  <td>
                    <PlusCircleFill className="text-primary mx-1" />
                    <Eraser className="text-danger mx-1" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
};

export default AddMiniBar;
