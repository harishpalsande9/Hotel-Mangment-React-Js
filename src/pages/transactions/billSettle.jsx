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

import TopHeader from "../../components/navs/topHeader";
import {
  Trash,
  ArchiveFill,
  PencilSquare,
  FunnelFill,
  Binoculars,
} from "react-bootstrap-icons";

import { state, useState, useEffect } from "react";
import CustomPagination from "../../components/common/customPagination";
import TableHeader from "../../components/common/tableHeader";
import TableBody from "../../components/common/tableBody";
import { paginate } from "../../utils/paginate";
import _ from "lodash";
import { getAllTransactions } from "../../services/fakeTransactionsService";
import FrontOfficeNavbar from "../../components/navs/frontOfficeNavbar";
import AddReservationForm from "../../components/reservations/addReservations";
import MasterSidebar from "../../components/common/masterSidebar";
import AddCheckinForm from "../../components/checkin/addCheckin";
import TransactionsNavbar from "../../components/navs/transactionsNavbar";
import PostingForm from "../../components/transactions/postingForm";
import SettleBillForm from "../../components/transactions/settleBillForm";

function BillSettle() {
  let [expandedRowStatus, setExpandedRowStatus] = useState(false);
  const [expandedRow, setExpandedRow] = useState("Naved");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeRow, setActiveRow] = useState("");
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });
  const showExpandedRow = (product) => {
    expandedRowStatus && setExpandedRowStatus(false);
    !expandedRowStatus && setExpandedRowStatus(true);
  };

  let [filters, setFilters] = useState("");

  const [settleBillFormStatus, setsettleBillFormStatus] = useState(false);
  const [companyFormStatus, setCompanyFormStatus] = useState(false);

  const [loader, setLoader] = useState(true);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOnSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const [data, setData] = useState(getAllTransactions());
  const [showRoomStatus, setShowRoomStatus] = useState(false);

  const addPosting = (product) => {
    console.log(product);
  };

  const showFull = (product) => {
    const obj = data.filter((m) => m.id === product);
    setExpandedRowStatus(true);
  };

  const columns = [
    { path: "id", label: "Id", isText: true },

    { path: "guestDetails.roomNo", label: "Room No", isText: false },
    { path: "guestDetails.name", label: "Name", isText: true },
    { path: "guestDetails.from", label: "Check In", isText: true },
    { path: "guestDetails.to", label: "Check Out", isText: true },
    {
      path: "guestDetails.outstandingCharges",
      label: "Outstandings",
      isText: false,
    },

    {
      key: "delete",
      label: "Action",
      isText: true,
      content: (product) => (
        <div class="field has-addons">
          <p class="control">
            <a
              className="mx-1 text-primary"
              onClick={() => showExpandedRow(product)}
            >
              <Binoculars />
            </a>

            <a
              className="mx-1 text-success"
              onClick={() => displayPostingForm(product)}
            >
              <PencilSquare />
            </a>
          </p>
        </div>
      ),
    },
    ,
  ];

  const restoBillList = [
    { path: "id", label: "Id", isText: true },

    { path: "foodItem", label: "Food Item", isText: true },
    { path: "qty", label: "QTY", isText: false },
    { path: "price", label: "Price", isText: false },
    { path: "tax", label: "Tax", isText: false },
    { path: "netAmount", label: "Net Amount", isText: false },

    {
      key: "delete",
      label: "Action",
      isText: true,
      content: (product) => (
        <div class="field has-addons">
          <p class="control">
            <a
              className="mx-1 text-primary"
              onClick={() => showExpandedRow(product)}
            >
              <Binoculars />
            </a>

            <a
              className="mx-1 text-success"
              onClick={() => displayPostingForm(product)}
            >
              <PencilSquare />
            </a>
          </p>
        </div>
      ),
    },

    ,
  ];

  //Filter

  const selectedFilter = filters;

  const filtered = selectedFilter
    ? data.filter((d) => d.guestDetails.status === selectedFilter)
    : data;
  //Sorting
  const sorted = _.orderBy(filtered, [sortColumn.path], sortColumn.order);
  //Paginated
  const paginateList = paginate(sorted, currentPage, pageSize);

  const selectFilter = (event) => {
    const newFilters = event.target.value;
    setFilters(newFilters);
    console.log(filters);
  };

  const displayPostingForm = () => {
    !settleBillFormStatus && setsettleBillFormStatus(true);
    settleBillFormStatus && setsettleBillFormStatus(false);
  };

  const displayCompanyForm = () => {
    companyFormStatus && setCompanyFormStatus(false);
    !companyFormStatus && setCompanyFormStatus(true);
  };

  const [serviceType, setServiceType] = useState("");
  const handleChange = (e) => {
    const newFileds = { ...serviceType };
    newFileds[e.currentTarget.name] = e.currentTarget.value;
    setServiceType(newFileds);
  };

  const [restoBill, setRestoBill] = useState({
    foodItem: "",
    qty: "",
    price: "",
    tax: "",
    netAmount: "",
  });

  const handleChangeOnRestoBill = (e) => {
    const newFileds = { ...restoBill };
    newFileds[e.currentTarget.name] = e.currentTarget.value;
    setRestoBill(newFileds);
    console.log(restoBill);
  };

  const addReservation = (event) => {
    event.preventDefault();

    const newData = [...data, serviceType];
    setData(newData);
    console.log(data);
  };

  const showRooms = () => {
    showRoomStatus && setShowRoomStatus(false);
    !showRoomStatus && setShowRoomStatus(true);
  };

  const [whichService, setWhichService] = useState("");
  const showService = (e) => {
    setWhichService(e.target.value);
  };

  const addServiceCharge = () => {
    console.log("Added");
  };
  return (
    <>
      <TopHeader />

      <Container fluid>
        <div className="row mt-4 no-gutters">
          <div className="col-lg-8">
            <TransactionsNavbar />
            <div className="mb-1 px-2">
              {settleBillFormStatus && (
                <Card body className="slideIn mb-2 px-2">
                  <SettleBillForm
                    displayCompanyForm={displayCompanyForm}
                    addReservation={addReservation}
                    companyFormStatus={companyFormStatus}
                    formData={serviceType}
                    restoData={restoBill}
                    handleChange={handleChange}
                    showRooms={showRooms}
                    whichService={whichService}
                    showService={showService}
                    handleChangeOnRestoBill={handleChangeOnRestoBill}
                    showRoomStatus={showRoomStatus}
                    displayPostingForm={displayPostingForm}
                    addServiceCharge={addServiceCharge}
                    restoBillList={restoBillList}
                  />
                </Card>
              )}

              {!settleBillFormStatus && (
                <Row>
                  <div className="col-md-6">
                    <h5>Settle Bills</h5>
                  </div>
                  <div className="col-md-6">
                    <Row>
                      <div className="col-sm-4">
                        <Form>
                          <Form.Group
                            className="mb-2"
                            controlId="formBasicEmail"
                          >
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder="from Date"
                            />
                          </Form.Group>
                        </Form>
                      </div>
                      <div className="col-sm-4">
                        <Form.Control
                          size="sm"
                          onChange={selectFilter}
                          name="toDate"
                          placeholder="to date"
                        ></Form.Control>
                      </div>
                      <div className="col-sm-4">
                        <Button variant="info" size="sm">
                          Search Transaction
                        </Button>
                      </div>
                    </Row>
                  </div>
                </Row>
              )}
              <Row className="mt-1">
                <div>
                  {filters && (
                    <Button className="mx-1" variant="light" size="sm">
                      {filters}
                    </Button>
                  )}
                </div>
              </Row>
            </div>

            {data.length > 0 ? (
              <div className="table-responsive col-12">
                <Table
                  responsive="lg"
                  borderless
                  variant="light"
                  hover
                  size="sm"
                  className="table   w-100 small mx-auto px-2"
                >
                  <TableHeader
                    columns={columns}
                    onSort={handleOnSort}
                    sortColumn={sortColumn}
                  />
                  <TableBody
                    columns={columns}
                    data={paginateList}
                    expandedRowStatus={expandedRowStatus}
                    showExpandedRow={showExpandedRow}
                    rowStatus={expandedRowStatus}
                  />
                </Table>

                <CustomPagination
                  itemsCount={data.length / pageSize + 1}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            ) : (
              <Card body border="light" className="border-2">
                It Seems You Have No Reservations!! Start Creating Now.
                <Button
                  variant="info"
                  size="sm"
                  className="mx-2"
                  onClick={displayPostingForm}
                >
                  Create New Reservation
                </Button>
              </Card>
            )}
          </div>
          <div className="col-lg-4">
            <MasterSidebar />
          </div>
        </div>
      </Container>
    </>
  );
}

export default BillSettle;
