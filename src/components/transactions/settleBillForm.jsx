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
import { state, useState, useEffect } from "react";
import {
  BagCheck,
  BagPlusFill,
  CheckSquare,
  FunnelFill,
  Plus,
  PlusCircle,
  PlusLg,
  XLg,
} from "react-bootstrap-icons";

import TableHeader from "../../components/common/tableHeader";
import TableBody from "../../components/common/tableBody";

const SettleBillForm = ({
  displayCompanyForm,
  companyFormStatus,
  displayReservationForm,
  handleChange,
  addReservation,
  showService,
  formData,
  whichService,
  handleChangeOnRestoBill,
  showRooms,
  addServiceCharge,
  restoData,
  showRoomStatus,
  restoBillList,
  onSort,
  sortColumn,
}) => {
  const [showBillingBox, setShowBillingBox] = useState(false);
  const showBilling = () => {
    setShowBillingBox(true);
  };
  return (
    <Form onSubmit={addServiceCharge}>
      <div className=" row border-light border-bottom ">
        <div className="col-md-6">
          <div className="row">
            <div className="row">
              <h5 size="sm">Settle Bill</h5>
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
                placeholder="When Checked Out"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="hr-1" /> */}

      <div class="row">
        <div className="col-md-3 my-2">
          <div class="c-dashboardInfo">
            <div class="wrap">
              <p className="lead text-primary">Room</p>
              <span>302</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div class="c-dashboardInfo">
            <div class="wrap">
              <p className="lead text-primary">Customer Name</p>
              <span>Naved Riyaz Naik</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-2">
          <div class="c-dashboardInfo p-0 m-0">
            <div class="wrap">
              <p className="lead text-primary">Outstanding</p>
              <span> &#8377; 1,050</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <Card body>
          <div className="row text-center justify-content-center">
            <div className="col-md-4">
              <small className="text-primary"> Booking Id</small> <br />
              <Button variant="light" size="sm">
                ABNAJA7171771
              </Button>
            </div>
            <div className="col-md-4">
              <small className="text-primary">Bill No.</small>
              <br />
              <Button variant="light" size="sm">
                871818
              </Button>
            </div>
            <div className="col-md-4">
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
        <div className=" row slideIn">
          <p className="text-primary">Enter UPI Details</p>
          <div className="text-start col-md-3">
            <Form.Control
              className="form-control-sm my-2"
              name="foodItem"
              onChange={handleChangeOnRestoBill}
              value={restoData.foodItem}
              placeholder="Transaction ID"
            />
          </div>

          <div className="col-md-3">
            <Form.Control
              className="form-control-sm my-2"
              name="qty"
              onChange={handleChangeOnRestoBill}
              value={restoData.qty}
              placeholder="Time & Date"
            />
          </div>

          <div className="col-md-3">
            <Form.Control
              className="form-control-sm my-2"
              name="qty"
              onChange={handleChangeOnRestoBill}
              value={restoData.qty}
              placeholder="Settled By"
            />
          </div>

          <div className="col-md-3">
            <Button
              className="mx-1"
              variant="warning"
              size="sm"
              onClick={showBilling}
            >
              {/* <CheckSquare /> */}Settle
            </Button>
            <Button className="mx-1" variant="dark" size="sm">
              <XLg />
            </Button>
          </div>
        </div>
      )}
    </Form>
  );
};

export default SettleBillForm;
