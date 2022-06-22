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
  FunnelFill,
  Plus,
  PlusCircle,
  PlusLg,
  XLg,
} from "react-bootstrap-icons";

import TableHeader from "../../components/common/tableHeader";
import TableBody from "../../components/common/tableBody";

const PostingForm = ({
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
      <div className="border-light border-bottom row">
        <div className="col-md-6">
          <h5 variant="dark" size="sm">
            Add Service
          </h5>
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

      <div className="row">
        <div className="col-md-3">
          <div class="c-dashboardInfo">
            <div class="wrap">
              <p className="lead text-primary">Room</p>
              <span>302</span>
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
              <span>€10,50</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <Card body>
          <div className="row justify-content-center">
            <div className="col-md-6 my-2">
              <Button variant="light" size="md">
                Choose Service Type
              </Button>
            </div>
            <div className="col-md-4 my-2">
              <Form.Control
                className="form-control-md"
                placeholder="Service Type"
                list="datalistOptions3"
                value={whichService}
                onChange={showService}
              />
              <datalist id="datalistOptions3">
                <option value="Restaurant" />
                <option value="House Keeping" />
                <option value="Bar" />
                <option value="Laundry" />
                <option value="Other" />
              </datalist>
            </div>
          </div>
        </Card>
      </div>

      <hr className="hr-1" />

      {/* FORM FOR RESTO */}
      {whichService === "Restaurant" && (
        <div className="row slideIn">
          <h5>Restaurant Billing</h5>
          <div className="col-md-2">
            <Form.Control
              className="form-control-sm my-2"
              name="foodItem"
              onChange={handleChangeOnRestoBill}
              value={restoData.foodItem}
              placeholder="Choose Food"
            />
          </div>
          <div className="col-md-2">
            <Form.Control
              className="form-control-sm my-2"
              name="qty"
              onChange={handleChangeOnRestoBill}
              value={restoData.qty}
              placeholder="qty"
            />
          </div>
          <div className="col-md-2">
            <Form.Control
              className="form-control-sm my-2"
              name="price"
              onChange={handleChangeOnRestoBill}
              value={restoData.price}
              placeholder="price"
            />
          </div>
          <div className="col-md-2">
            <Form.Control
              className="form-control-sm my-2"
              name="tax"
              onChange={handleChangeOnRestoBill}
              value={restoData.tax}
              placeholder="tax"
            />
          </div>
          <div className="col-md-2">
            <Form.Control
              className="form-control-sm my-2"
              name="netAmount"
              onChange={handleChangeOnRestoBill}
              value={restoData.newAmount}
              placeholder="Net Amount"
              disabled
            />
          </div>
          <div className="col-md-2">
            <Button
              className="mx-1"
              variant="light"
              size="sm"
              onClick={showBilling}
            >
              <BagCheck />
            </Button>
            <Button className="mx-1" variant="dark" size="sm">
              <XLg />
            </Button>
          </div>
        </div>
      )}
      {showBillingBox && (
        <Card body>
          <div className="row text-primary my-2">
            <div className="col-md-3">Food Item</div>
            <div className="col-md-3">QTY</div>
            <div className="col-md-3">Price</div>
            <div className="col-md-3">Total Amount</div>
          </div>

          <div className=" row mt-3">
            <div className="col-md-2">{restoData.foodItem}</div>
            <div className="col-md-2">{restoData.qty}</div>
            <div className="col-md-2">{restoData.price}</div>
            <div className="col-md-2">{restoData.netAmount}</div>
            <div className="col-md-2">
              <Button variant="dark" size="sm">
                Add Bill
              </Button>
            </div>
          </div>
        </Card>
      )}
    </Form>
  );
};

export default PostingForm;
