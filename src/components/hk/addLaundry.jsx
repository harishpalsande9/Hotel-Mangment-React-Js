import React, { useState } from "react";
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
  ReceiptCutoff,
  Search,
} from "react-bootstrap-icons";
const AddLaundry = ({
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
  const [laundryItems, setLaundryItems] = useState({
    jeans: "100",
    pant: "80",
    shirt: "120",
    saree: "250",
  });

  const [laundryList, setLaundryList] = [
    {
      pant: {
        name: "Pant",
        charges: "120",
        qty: "1",
        subtotal: "120",
      },
    },
  ];
  return (
    <>
      {roomInfo ? (
        <Form onSubmit={addReservation}>
          <Row className="border-light border-bottom mb-2 pb-3">
            <Col>
              <Row>
                <Col>
                  <span className="bg-light">Add Laundry</span>
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
              <Form.Text>Laundry Bill</Form.Text>
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Customer Name"
                value={roomInfo.laundry}
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
      ) : (
        <Form onSubmit={addReservation}>
          <div className="border-light border-bottom row">
            <div className="col-md-6">
              <h5 className="">Add Laundry</h5>
            </div>
            <div className="col-md-6">
              {" "}
              <Search className="text-primary" />
            </div>
          </div>

          <hr className="hr-1" />

          <div className="row">
            <Form.Text className="" column="sm" lg={3}>
              Choose Laundry Category
            </Form.Text>
            <div className="col-md-12">
              <Form.Select
                className="form-select form-select-sm my-2"
                aria-Text="Default select example"
              >
                <option>Choose</option>
                <option value="1">Customer</option>
                <option value="2">Staff</option>
                <option value="3">Linen</option>
              </Form.Select>
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
                placeholder="Customer Name"
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
                placeholder="Charges"
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

          <div class="col-md-12 text-center"></div>
          <hr className="hr-1" />
        </Form>
      )}

      <div className="row text-center ">
        <Table hover size="sm" className="table table-bordered">
          <thead className="small mb-5">
            <tr className="bg-light text-dark">
              <td className="col-6">Item</td>
              <td colSpan={2}>Qty</td>
              <td colSpan={4}>Sub Total</td>
            </tr>

            {Object.keys(laundryList).map((a) => console.log(a.name))}
          </thead>
        </Table>
        <Card body className="mx-2 ">
          Grand Total <strong>1200</strong>
          <Button className="float-end" variant="outline-primary" size="sm">
            Add To Bill
          </Button>
        </Card>
      </div>
    </>
  );
};

export default AddLaundry;
