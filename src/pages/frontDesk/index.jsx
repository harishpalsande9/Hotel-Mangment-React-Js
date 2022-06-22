import React, { Component, useContext } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Col,
  Card,
  Form,
  Badge,
  Table,
  Button,
  ButtonGroup,
  Modal,
  InputGroup,
  FormControl,
  Tooltip,
  ListGroup,
  OverlayTrigger,
  ButtonToolbar,
  CardGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import TopHeader from "../../components/navs/topHeader";
import {
  Trash,
  ArchiveFill,
  PencilSquare,
  Arrow90degRight,
  ArrowsFullscreen,
  Activity,
  Lock,
  PlusSquare,
  ThreeDots,
  KeyFill,
  Star,
  BellSlash,
  BellSlashFill,
  CupStraw,
  BookmarkCheckFill,
  CartDash,
  Search,
  Alarm,
  Key,
  ClockHistory,
  Unlock,
  BookmarkCheck,
  Radioactive,
  ClipboardX,
  DoorOpen,
  Stars,
  X,
  XSquare,
  Eye,
} from "react-bootstrap-icons";
import logo from "../../assets/img/logo.png";
import { state, useState } from "react";
import CustomPagination from "../../components/common/customPagination";
import TableHeader from "../../components/common/tableHeader";
import TableBody from "../../components/common/tableBody";
import { paginate } from "../../utils/paginate";
import _ from "lodash";
import FrontOfficeNavbar from "../../components/navs/frontOfficeNavbar";
import MasterSidebar from "../../components/common/masterSidebar";

import { getAllCheckins } from "../../services/fakeCheckinService";
import RoomContext from "../../contexts/roomContext";
import RegisterBusiness from "../../components/auth/registerBusiness";

function FrontDesk() {
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOnSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const [data, setData] = useState([
    {
      id: "1",
      name: "Anthony",
      address: "Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
    {
      id: "2",
      name: "Michael",
      address: "Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
    {
      id: "3",
      name: "Catty",
      address: "Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "not local",
      order: "87574505851064",
    },
    {
      id: "4",
      name: "Elephent",
      address: "Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "not local",
      order: "87574505851064",
    },
    {
      id: "5",
      name: "Joker",
      address: "796 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
    {
      id: "6",
      name: "Md",
      address: " Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "sv local",
      order: "87574505851064",
    },
    {
      id: "7",
      name: "Naved",
      address: "796 Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
    {
      id: "8",
      name: "Popat",
      address: "796 Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
    {
      id: "9",
      name: "QWERTY",
      address: "796 Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "not local",
      order: "87574505851064",
    },
    {
      id: "10",
      name: "Yakk",
      address: "796 Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "not local",
      order: "87574505851064",
    },
    {
      id: "11",
      name: "Betta",
      address: "796 Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
  ]);

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
    { path: "name", label: "Name", isText: true },
    { path: "address", label: "Address", isText: true },
    { path: "date", label: "Date", isText: false },
    { path: "category", label: "Category", isText: true },
    { path: "order", label: "Order", isText: false },
    {
      key: "delete",
      label: "Action",
      content: (product) => (
        <div class="field has-addons">
          <p class="control">
            <a
              className="mx-2 text-primary"
              onClick={() => showExpandedRow(product)}
            >
              <PencilSquare />
            </a>

            <a
              className="mx-2 text-danger"
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
    ? data.filter((d) => d.category === selectedFilter)
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

  const [showTour, setShowTour] = useState(false);

  const showAppTour = () => {
    setShowTour(true);
  };

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [roomNumber, setRoomNumber] = useState("");
  const expandButton = (roomNumber) => {
    setRoomNumber(roomNumber);
    setHiddenMenu(true);
  };

  // CHECKIN FORM DATA
  const [checkinData, setCheckinData] = useState(getAllCheckins());
  const [checkInForm, setCheckInForm] = useState({});
  const [checkinFields, setCheckinFields] = useState([
    {
      id: "",
      companyDetails: {
        companyName: "",
      },
    },
  ]);
  const handleChange = (e) => {
    const newFields = { ...checkinFields };
    newFields[e.currentTarget.name] = e.currentTarget.value;
    setCheckinFields(newFields);
  };

  const addCheckin = (event) => {
    event.preventDefault();

    const newData = [...data, checkinFields];
    setCheckinData(newData);
    console.log(setCheckinData);
  };

  const [roomInfo, setRoomInfo] = useState([
    {
      roomNumber: 101,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "occupied",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
    {
      roomNumber: 102,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "dirty",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
    {
      roomNumber: 103,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "ready",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
    {
      roomNumber: 101,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "occupied",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
    {
      roomNumber: 102,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "dirty",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
    {
      roomNumber: 103,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "ready",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
    {
      roomNumber: 101,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "occupied",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
    {
      roomNumber: 102,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "dirty",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
    {
      roomNumber: 103,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "ready",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
    {
      roomNumber: 101,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "occupied",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
    {
      roomNumber: 101,
      roomType: "Deluxe",
      customerName: "Naved Riyaz Naik",
      companyDetails: {
        name: "Hoodie Techno",
        totalCredit: "15000",
        remainingCredit: "12000",
      },
      floor: "First Floor",
      charges: 1200,
      status: "occupied",
      paid: "500",
      oustanding: "750",
      laundry: "120",
      miniBar: "200",
      miniBarItems: [{ coke: "2", waterBottle: "1" }],
      brekages: "0",
      checkedIn: "16 January 22",
      expectedCheckout: "18 January 22",
    },
  ]);
  const [roomInfo1, setRoomInfo1] = useState([
    {
      roomNumber: 201,
      floor: "First Floor",
      charges: 1200,
      status: "dirty",
    },
    {
      roomNumber: 202,
      charges: 1100,
      floor: "First Floor",
      status: "occupied",
    },
    {
      roomNumber: 203,
      charges: 1000,
      floor: "Second Floor",
      status: "ready",
    },
    {
      roomNumber: 204,
      floor: "First Floor",
      charges: 1200,
      status: "dirty",
    },
    {
      roomNumber: 205,
      charges: 1100,
      floor: "Second Floor",
      status: "ready",
    },
    {
      roomNumber: 206,
      charges: 1000,
      floor: "First Floor",
      status: "occupied",
    },
  ]);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Room Number Is <strong>{props.roomNumber}</strong>
      <br />
      Total Charges <strong>{props.charges}</strong>
      <br />
      Total Paid <strong>{props.paid}</strong>
      <br />
      Check In On <strong>{props.checkedIn}</strong>
      <br />
      Checkout <strong>{props.expectedCheckout}</strong>
    </Tooltip>
  );

  const [showRightBar, setShowRightBar] = useState(true);
  const [roomDetailsSidebar, setRoomDetailsSidebar] = useState(false);
  const replaceRightBar = (roomInfo) => {
    setRoomNumber(roomInfo.roomNumber);
    setShowRightBar(false);
    setRoomDetailsSidebar(true);

    console.log(roomInfo.roomNumber);
  };
  return (
    <>
      <Container fluid>
        <TopHeader />
        <Row className="no-gutters g-0">
          <Col lg={8} className=" p-1">
            <FrontOfficeNavbar />
            <div className=" px-2">
              <div>
                {/* <div class="separator mb-1">
                  <div class="line"></div>
                  <p className="mx-4 m-1 p-1 text-primary  border border-light bg-light">
                    Ground Floor
                  </p>
                  <div class="line"></div>
                </div> */}
                <Row>
                  {roomInfo.map((a) => (
                    <Col className="py-0 g-0">
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 100 }}
                        overlay={renderTooltip(a)}
                      >
                        <Card
                          className={
                            a.status === "ready"
                              ? "zoom py-0 text-center  bg-success bg-gradient  m-1"
                              : a.status === "occupied"
                              ? "zoom py-0 text-center  bg-danger bg-gradient  m-1"
                              : "zoom py-0 text-center  wrap bg-warning bg-gradient  m-1"
                          }
                        >
                          <Card.Body className="py-0 g-0">
                            <Card.Title
                              className={
                                a.status === "ready"
                                  ? "text-white"
                                  : a.status === "occupied"
                                  ? "text-white"
                                  : "text-white"
                              }
                            >
                              <Link
                                className={
                                  a.status === "ready"
                                    ? "py-0 text-decoration-none text-info"
                                    : a.status === "occupied"
                                    ? "py-0 text-decoration-none text-success"
                                    : "py-0 text-decoration-none text-danger"
                                }
                                to="/"
                                state={a}
                              >
                                <strong
                                  className={
                                    a.status === "ready"
                                      ? "text-white"
                                      : a.status === "occupied"
                                      ? "text-white"
                                      : "text-white"
                                  }
                                >
                                  {a.roomNumber}
                                </strong>
                              </Link>
                            </Card.Title>
                          </Card.Body>
                          <Card.Footer
                            className={
                              a.status === "ready"
                                ? " py-0 text-center  bg-success bg-gradient  m-1"
                                : a.status === "occupied"
                                ? " py-0 text-center  bg-danger bg-gradient  m-1"
                                : " py-0 text-center  wrap bg-warning bg-gradient  m-1"
                            }
                          >
                            {a.status === "ready" && (
                              <ButtonGroup className="" size="sm">
                                <Link className="" to="/reservations" state={a}>
                                  <Lock className="text-white mx-2 " />
                                </Link>
                                <div className="vr"></div>
                                <Link className="" to="/checkin" state={a}>
                                  <Unlock className="text-white mx-2" />
                                </Link>
                              </ButtonGroup>
                            )}
                            {a.status === "occupied" && (
                              <ButtonGroup className="" size="sm">
                                <Link className="" to="">
                                  <Eye
                                    className="text-white mx-2"
                                    onClick={() => replaceRightBar(a)}
                                  />
                                </Link>
                                <div className="vr"></div>
                                {/* <Link
                                  className=""
                                  to="/laundry"
                                  state={a}
                                >
                                  <Radioactive className="text-primary mx-2" />
                                </Link>

                                <div className="vr"></div>
                                <Link
                                  className="py-0 m-0 p-0"
                                  to="/minibar"
                                  state={a}
                                >
                                  <DoorOpen className="text-dark mx-1" />
                                </Link>
                                <div className="vr"></div>
                                <Link
                                  className="py-0 m-0 p-0"
                                  to="/breakages"
                                  state={a}
                                >
                                  <ClipboardX className="text-danger mx-1" />
                                </Link>
                                <div className="vr"></div> */}
                                <Link
                                  className="py-0 m-0 p-0"
                                  to="/checkout"
                                  state={a}
                                >
                                  <BookmarkCheck className="text-white mx-2" />
                                </Link>
                              </ButtonGroup>
                            )}
                            {a.status === "dirty" && (
                              <ButtonGroup className="" size="sm">
                                <Stars className="text-white mx-2" />
                                <div className="vr"></div>
                                <XSquare className="text-white mx-2" />
                              </ButtonGroup>
                            )}
                          </Card.Footer>
                        </Card>
                      </OverlayTrigger>
                    </Col>
                  ))}
                </Row>
              </div>
              {/*            
                <div>
                  <div class="separator mb-1">
                    <div class="line"></div>
                    <p className="mx-4 m-1 p-1 text-primary  border border-light bg-light">
                      Ground Floor
                    </p>
                    <div class="line"></div>
                  </div>
                  <Row>
                    {roomInfo.map((a) => (
                      <Col className="g-0">
                        <div class="card m-1 flex-md-row g-0 " role="button">
                          <div
                            className="card-body g-0 cursor-pointer"
                            onClick={() => expandButton(a.roomNumber)}
                          >
                            <strong
                              className={
                                a.status === "ready"
                                  ? "text-info"
                                  : a.status === "occupied"
                                  ? "text-success"
                                  : "text-danger"
                              }
                            >
                              {a.roomNumber}
                            </strong>
                          </div>
                          {roomNumber === a.roomNumber && a.status === "ready" && (
                            <ButtonGroup
                              className="shortCut"
                              size="sm"
                              vertical
                            >
                              <Button
                                className="py-0"
                                variant="light"
                                size="sm"
                              >
                                <Lock className="text-info" size="20" />
                              </Button>
                              <Button
                                className="py-0"
                                variant="light"
                                size="sm"
                              >
                                <KeyFill className="text-primary" size="20" />
                              </Button>
                            </ButtonGroup>
                          )}

                          {roomNumber === a.roomNumber &&
                            a.status === "occupied" && (
                              <ButtonGroup
                                className="shortCut"
                                size="sm"
                                vertical
                              >
                                <Button
                                  className="py-0"
                                  variant="light"
                                  size="sm"
                                >
                                  <CupStraw
                                    className="text-success"
                                    size="20"
                                  />
                                </Button>
                                <Button
                                  className="py-0"
                                  variant="light"
                                  size="sm"
                                >
                                  <CartDash className="text-danger" size="20" />
                                </Button>
                              </ButtonGroup>
                            )}

                          {roomNumber === a.roomNumber && a.status === "dirty" && (
                            <ButtonGroup
                              className="shortCut"
                              size="sm"
                              vertical
                            >
                              <Button
                                className="py-0"
                                variant="light"
                                size="sm"
                              >
                                <Star className="py-0 text-success" size="20" />
                              </Button>
                              <Button
                                className="py-0"
                                variant="light"
                                size="sm"
                              >
                                <BellSlashFill
                                  className="text-dark py-0"
                                  size="20"
                                />
                              </Button>
                            </ButtonGroup>
                          )}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div> */}

              {/* <div className="">
                  <div class="separator mb-1">
                    <div class="line"></div>
                    <p className="mx-4 m-1 p-1 text-primary  border border-light bg-light">
                      Ground Floor
                    </p>
                    <div class="line"></div>
                  </div>
                  <div className="">
                    {roomInfo.map((a) => (
                      <Button
                        name={a.roomNumber}
                        id={a.roomNumber}
                        variant={
                          a.status === "ready"
                            ? "info"
                            : a.status === "occupied"
                            ? "success"
                            : "danger"
                        }
                        className="text-dark font-weight-bold roomButton mx-1"
                        onClick={() => expandButton(a.roomNumber)}
                      >
                        {a.roomNumber}
                        {roomNumber === a.roomNumber && a.status === "ready" && (
                          <>
                            <Link to="/checkin" state={a}>
                              <Button
                                variant="white"
                                size="sm"
                                className="cleanButton text-dark mx-1 text-dark p-0 m-0"
                              >
                                Book Room
                              </Button>
                            </Link>

                            <Link to="/reservations" state={a}>
                              <Button
                                variant="white"
                                size="sm"
                                className="text-dark cleanButton mx-1 text-dark p-0 m-0"
                              >
                                Reserve
                              </Button>
                            </Link>

                            <Button
                              variant="white"
                              size="sm"
                              className="cleanButton mx-1 text-dark p-0 m-0"
                            >
                              Status
                            </Button>
                          </>
                        )}

                        {roomNumber === a.roomNumber &&
                          a.status === "occupied" && (
                            <>
                              <Link to="/checkin" state={a}>
                                <Button
                                  variant="white"
                                  size="sm"
                                  className="cleanButton text-dark mx-1 text-dark p-0 m-0"
                                >
                                  Add Service
                                </Button>
                              </Link>

                              <Link to="/reservations" state={a}>
                                <Button
                                  variant="white"
                                  size="sm"
                                  className="text-dark cleanButton mx-1 text-dark p-0 m-0"
                                >
                                  CheckOut
                                </Button>
                              </Link>
                            </>
                          )}

                        {roomNumber === a.roomNumber && a.status === "dirty" && (
                          <>
                            <Link to="/checkin" state={a}>
                              <Button
                                variant="white"
                                size="sm"
                                className="cleanButton text-dark mx-1 text-dark p-0 m-0"
                              >
                                Now Cleaned
                              </Button>
                            </Link>
                          </>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
           

          
                <div className="">
                  <div class="separator mb-1">
                    <div class="line"></div>
                    <p className="mx-4 m-1 p-1 text-primary  border border-light bg-light">
                      First Floor
                    </p>
                    <div class="line"></div>
                  </div>
                  <div className="">
                    {roomInfo1.map((a) => (
                      <Button
                        name={a.roomNumber}
                        id={a.roomNumber}
                        variant={
                          a.status === "ready"
                            ? "outline-info"
                            : a.status === "occupied"
                            ? "outline-success"
                            : "outline-danger"
                        }
                        className="text-dark font-weight-bold roomButton mx-1"
                        onClick={() => expandButton(a.roomNumber)}
                      >
                        {a.roomNumber}
                        {roomNumber === a.roomNumber && (
                          <>
                            <Link to="/checkin" state={a}>
                              <Button
                                variant="white"
                                className="cleanButton text-dark mx-1 text-dark p-0 m-0"
                              >
                                Book Room
                              </Button>
                            </Link>

                            <Link to="/reservations" state={a}>
                              <Button
                                variant="white"
                                className="text-dark cleanButton mx-1 text-dark p-0 m-0"
                              >
                                Reserve
                              </Button>
                            </Link>

                            <Button
                              variant="white"
                              className="cleanButton mx-1 text-dark p-0 m-0"
                            >
                              Status
                            </Button>
                          </>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
        

        
                <div className="">
                  <div class="separator mb-1">
                    <div class="line"></div>
                    <p className="mx-4 m-1 p-1 text-primary  border border-light bg-light">
                      Second Floor
                    </p>
                    <div class="line"></div>
                  </div>
                  <div className="">
                    {roomInfo1.map((a) => (
                      <Button
                        name={a.roomNumber}
                        id={a.roomNumber}
                        variant="light"
                        className={
                          a.status === "ready"
                            ? "text-info mx-1 roomButton outline-info"
                            : a.status === "occupied"
                            ? "text-success mx-1 roomButton outline-success"
                            : "text-danger mx-1 roomButton outline-danger"
                        }
                        onClick={() => expandButton(a.roomNumber)}
                      >
                        {a.roomNumber}
                        {roomNumber === a.roomNumber && (
                          <>
                            <Link to="/checkin" state={a}>
                              <Button
                                variant="link"
                                className=" cleanButton text-dark mx-1 text-dark p-0 m-0"
                              >
                                Book Room
                              </Button>
                            </Link>

                            <Link to="/reservations" state={a}>
                              <Button
                                variant="white"
                                className="text-dark cleanButton mx-1 text-dark p-0 m-0"
                              >
                                Reserve
                              </Button>
                            </Link>

                            <Button
                              variant="white"
                              className="cleanButton mx-1 text-dark p-0 m-0"
                            >
                              Status
                            </Button>
                          </>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
        
          
                <div className="">
                  <div class="separator mb-1">
                    <div class="line"></div>
                    <p className="mx-4 m-1 p-1 text-primary  border border-light bg-light">
                      Third Floor
                    </p>
                    <div class="line"></div>
                  </div>
                  <div className="">
                    {roomInfo1.map((a) => (
                      <ButtonGroup size="sm">
                        <Button
                          name={a.roomNumber}
                          id={a.roomNumber}
                          size="lg"
                          variant={
                            a.status === "ready"
                              ? "outline-info"
                              : a.status === "occupied"
                              ? "outline-success"
                              : "outline-danger"
                          }
                          className="mx-1 roomButton"
                          onClick={() => expandButton(a.roomNumber)}
                        >
                          {a.roomNumber}
                          {roomNumber === a.roomNumber}
                        </Button>
                        {roomNumber === a.roomNumber && (
                          <>
                            <Button size="sm" variant="light">
                              Book Room
                            </Button>
                            <Button size="sm" variant="light">
                              Reserve
                            </Button>
                            <Button size="sm" variant="light">
                              Right
                            </Button>
                          </>
                        )}
                      </ButtonGroup>
                    ))}
                  </div>
                </div> */}
            </div>
          </Col>
          <Col lg={4}>
            {showRightBar ? (
              <MasterSidebar className="mobileSideBar" />
            ) : (
              <div className="border-1 d-flex align-items-stretch">
                {roomInfo.map(
                  (a) =>
                    roomNumber === a.roomNumber && (
                      <Card className="w-100 px-4">
                        <Card.Body>
                          <Card.Title className="mb-2 mt-2">
                            <h6 className="display-6 text-primary ">
                              {a.roomNumber}

                              <ButtonGroup className="float-end" size="sm">
                                <Radioactive className="text-primary mx-1" />
                                <div className="vr"></div>
                                <DoorOpen className="text-dark mx-1" />
                                <div className="vr"></div>
                                <ClipboardX className="text-danger mx-1" />
                                <div className="vr"></div>
                                <BookmarkCheck className="text-primary mx-1" />
                              </ButtonGroup>
                            </h6>
                          </Card.Title>

                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              Total Charges
                              <strong className="float-end">{a.charges}</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              Paid
                              <strong className="float-end">{a.paid}</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              Outstanding
                              <strong className="float-end">
                                {a.oustanding}
                              </strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              Laundry
                              <strong className="float-end">{a.laundry}</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              MiniBar
                              <strong className="float-end">{a.miniBar}</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              Breakages
                              <strong className="float-end">
                                {a.breakages}
                              </strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              CheckedIn on
                              <strong className="float-end">
                                {a.checkedIn}
                              </strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              Expected Checkout
                              <strong className="float-end">
                                {a.expectedCheckout}
                              </strong>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    )
                )}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FrontDesk;
