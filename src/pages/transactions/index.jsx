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
} from "react-bootstrap-icons";

import { state, useState, useEffect } from "react";
import CustomPagination from "../../components/common/customPagination";
import TableHeader from "../../components/common/tableHeader";
import TableBody from "../../components/common/tableBody";
import { paginate } from "../../utils/paginate";
import _ from "lodash";
import { getAllCheckins } from "../../services/fakeCheckinService";
import FrontOfficeNavbar from "../../components/navs/frontOfficeNavbar";
import AddReservationForm from "../../components/reservations/addReservations";
import MasterSidebar from "../../components/common/masterSidebar";
import AddCheckinForm from "../../components/checkin/addCheckin";
import TransactionsNavbar from "../../components/navs/transactionsNavbar";

function Transactions() {
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

  const [data, setData] = useState(getAllCheckins());
  const [showRoomStatus, setShowRoomStatus] = useState(false);

  const handleDelete = (product) => {
    const newData = data.filter((m) => m.id !== product);
    setData(newData);
  };

  const showFull = (product) => {
    const obj = data.filter((m) => m.id === product);
    setExpandedRowStatus(true);
  };

  const columns = [
    { path: "id", label: "Id", isText: true },
    {
      path: "guestDetails.status",
      label: "Status",
      isText: true,
      status: "confirm",
    },
    { path: "companyDetails.companyName", label: "Company", isText: true },
    { path: "guestDetails.name", label: "Name", isText: true },
    { path: "guestDetails.mobile", label: "Contact", isText: false },
    { path: "guestDetails.roomType", label: "Room Type", isText: true },
    { path: "guestDetails.noOfPeople", label: "No", isText: true },
    { path: "guestDetails.charges", label: "Charges", isText: false },
    { path: "guestDetails.advance", label: "Advance", isText: false },
    { path: "guestDetails.pending", label: "Outstanding", isText: false },
    {
      key: "delete",
      label: "Action",
      content: (product) => (
        <div class="field has-addons">
          <p class="control">
            <a
              className="mx-1 text-primary"
              onClick={() => showExpandedRow(product)}
            >
              <PencilSquare />
            </a>

            <a
              className="mx-1 text-danger"
              onClick={() => handleDelete(product)}
            >
              <Trash />
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

  const displayCheckinForm = () => {
    !checkinFormStatus && setcheckinFormStatus(true);
    checkinFormStatus && setcheckinFormStatus(false);
  };

  const displayCompanyForm = () => {
    companyFormStatus && setCompanyFormStatus(false);
    !companyFormStatus && setCompanyFormStatus(true);
  };

  const [reservationFields, setReservationFields] = useState([
    {
      id: "",
      companyDetails: {
        companyName: "",
      },
    },
  ]);
  const handleChange = (e) => {
    const newFileds = { ...reservationFields };
    newFileds[e.currentTarget.name] = e.currentTarget.value;
    setReservationFields(newFileds);
  };

  const addReservation = (event) => {
    event.preventDefault();

    const newData = [...data, reservationFields];
    setData(newData);
    console.log(data);
  };

  const showRooms = () => {
    showRoomStatus && setShowRoomStatus(false);
    !showRoomStatus && setShowRoomStatus(true);
  };
  return (
    <>
      <TopHeader />
      <TransactionsNavbar />
      <Container fluid>
        <Row className="mt-4 no-gutters">
          <Col lg={8}>
            <Form>
              <Row>
                <Col>
                  <h3>Transactions</h3>
                </Col>
                <Col>
                  <Row>
                    <Col className="col-5">
                      <Form.Control
                        className="form-control-sm"
                        placeholder="From Date"
                      />
                    </Col>
                    <Col className="col-5">
                      <Form.Control
                        className="form-control-sm"
                        placeholder="To Date"
                      />
                    </Col>
                    <Col className="col-2">
                      <Button variant="info" size="sm">
                        Check
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
            <hr className="hr-1" />
            <div>
              <Row>
                <Col className="col-9">
                  <p className="lead">Room Structure</p>
                </Col>
                <Col>
                  <Form.Control
                    className="form-control-sm"
                    placeholder="Apply Filter"
                  />
                </Col>
              </Row>
            </div>
            <hr className="hr-1" />
            <ul class="tree vertical mt-5 mb-5">
              <li>
                <h2 className="bg-white text-success">Red Stone</h2>
                <ul>
                  <li>
                    <div className="">Ground FLoor</div>
                    <ul>
                      <li>
                        <div className="bg-white text-success border border-success">
                          001
                        </div>
                      </li>
                      <li>
                        <div className="bg-white text-success border border-success">
                          002
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="">First Floor</div>
                    <ul>
                      <li>
                        <div className="bg-dark text-white border border-wark">
                          101
                        </div>
                      </li>
                      <li>
                        <div className="bg-white text-warning border border-warning">
                          102
                        </div>
                      </li>
                      <li>
                        <div className="bg-white text-success border border-success">
                          103
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="">Second Floor</div>
                    <ul>
                      <li>
                        <div className="bg-white text-success border border-success">
                          201
                        </div>
                      </li>
                      <li>
                        <div className="bg-white text-warning border border-warning">
                          202
                        </div>
                      </li>
                      <li>
                        <div className="bg-white text-success border border-success">
                          203
                        </div>
                      </li>
                      <li>
                        <div className="bg-dark text-white border">204</div>
                      </li>

                      <li>
                        <div className="bg-white text-danger border border-danger">
                          205
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <div className="">Third Floor</div>
                    <ul>
                      <li>
                        <div className="bg-white text-danger border border-danger">
                          301
                        </div>
                      </li>
                      <li>
                        <div className="bg-dark text-white border border-dark">
                          302
                        </div>
                      </li>
                      <li>
                        <div className="bg-white text-success border border-success">
                          303
                        </div>
                      </li>
                      <li>
                        <div className="bg-white text-warning border border-warning">
                          304
                        </div>
                      </li>
                      <li>
                        <div className="bg-white text-danger border border-danger">
                          305
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <hr className="hr-1" />
            <div>
              <Row className="float-end">
                <Col className="col text-end">
                  <ul class="list-inline">
                    <div class="text-small px-2 bg-white text-success border border-success list-inline-item">
                      Occupied
                    </div>
                    <div class="px-2 bg-white text-warning border border-warning list-inline-item">
                      Vaccant
                    </div>
                    <div class="px-2 bg-white text-danger border border-danger list-inline-item">
                      Uncleaned
                    </div>
                    <div class="px-2 bg-dark text-white border border-dark list-inline-item">
                      Maintainance
                    </div>
                  </ul>
                </Col>
              </Row>
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

export default Transactions;
