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
  ListGroupItem,
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
import { getAllRooms } from "../../services/fakeRoomService";
import FrontOfficeNavbar from "../../components/navs/frontOfficeNavbar";
import AddReservationForm from "../../components/reservations/addReservations";
import MasterSidebar from "../../components/common/masterSidebar";
import AddCheckinForm from "../../components/checkin/addCheckin";
import TransactionsNavbar from "../../components/navs/transactionsNavbar";
import PostingForm from "../../components/transactions/postingForm";

function AdvancePage() {
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

  const [checkinFormStatus, setcheckinFormStatus] = useState(false);
  const [companyFormStatus, setCompanyFormStatus] = useState(false);

  const [loader, setLoader] = useState(true);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOnSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const [data, setData] = useState(getAllRooms());
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

    { path: "roomNo", label: "Room No", isText: false },
    { path: "occupiedFrom", label: "From", isText: true },
    { path: "occupiedTill", label: "To", isText: true },
    { path: "totalBill", label: "Total Bill", isText: true },
    { path: "advance", label: "Advance", isText: true },
    { path: "pending", label: "Pending", isText: true },

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
    !checkinFormStatus && setcheckinFormStatus(true);
    checkinFormStatus && setcheckinFormStatus(false);
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
        <Row className="mt-4 no-gutters">
          <Col lg={8}>
            {" "}
            <TransactionsNavbar />
            <div className="mb-1 px-2">
              <div className="row mt-1">
                {" "}
                <div className="col-md-4">
                  <Card body>
                    <h5 className="text-primary">Advance Payment</h5>
                    <Form.Control
                      className="form-control-md mt-3 mb-3"
                      placeholder="Select Room"
                      name="companyDetails.companyName"
                      list="datalistOptions"
                    />
                    <datalist id="datalistOptions">
                      <option value="Room 301" />
                      <option value="Room 302" />
                      <option value="Room 303" />
                      <option value="Room 304" />
                    </datalist>

                    <Form.Control
                      className="form-control-md mt-3 mb-3"
                      placeholder="Payers Name"
                      name="Payer Name"
                    />

                    <Form.Control
                      className="form-control-md mt-3 mb-3"
                      placeholder="Advance Amount"
                      name="Payer Name"
                    />

                    <Form.Control
                      className="form-control-md mt-3 mb-3"
                      placeholder="Mode Of Payment"
                      list="datalistOptions1"
                    />
                    <datalist id="datalistOptions1">
                      <option value="Cash" />
                      <option value="Card" />
                      <option value="UPI" />
                    </datalist>
                    <div className="d-grid gap-2">
                      <Button className="mx-auto" variant="dark" size="sm">
                        Add Payment
                      </Button>
                    </div>
                  </Card>
                </div>
                <div className="col-md-8">
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
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <MasterSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdvancePage;
