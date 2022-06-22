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
import CRMNavbar from "../../components/navs/crmNavbar";

function CRMIndex() {
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
      floor: "First Floor",
      charges: 1200,
      status: "occupied",
    },
    {
      roomNumber: 102,
      charges: 1100,
      floor: "First Floor",
      status: "ready",
    },
    {
      roomNumber: 103,
      charges: 1000,
      floor: "Second Floor",
      status: "dirty",
    },
    {
      roomNumber: 104,
      floor: "First Floor",
      charges: 1200,
      status: "occupied",
    },
    {
      roomNumber: 105,
      charges: 1100,
      floor: "Second Floor",
      status: "occupied",
    },
    {
      roomNumber: 106,
      charges: 1000,
      floor: "First Floor",
      status: "dirty",
    },
    {
      roomNumber: 107,
      floor: "First Floor",
      charges: 1200,
      status: "ready",
    },
    {
      roomNumber: 108,
      charges: 1100,
      floor: "First Floor",
      status: "dirty",
    },
    {
      roomNumber: 109,
      charges: 1000,
      floor: "Second Floor",
      status: "occupied",
    },
    {
      roomNumber: 110,
      floor: "First Floor",
      charges: 1200,
      status: "dirty",
    },
    {
      roomNumber: 111,
      charges: 1100,
      floor: "Second Floor",
      status: "ready",
    },
    {
      roomNumber: 112,
      charges: 1000,
      floor: "First Floor",
      status: "occupied",
    },
    {
      roomNumber: 113,
      floor: "First Floor",
      charges: 1200,
      status: "occupied",
    },
    {
      roomNumber: 114,
      charges: 1100,
      floor: "First Floor",
      status: "dirty",
    },
    {
      roomNumber: 115,
      charges: 1000,
      floor: "Second Floor",
      status: "dirty",
    },
    {
      roomNumber: 116,
      floor: "First Floor",
      charges: 1200,
      status: "ready",
    },
    {
      roomNumber: 117,
      charges: 1100,
      floor: "Second Floor",
      status: "dirty",
    },
    {
      roomNumber: 118,
      charges: 1000,
      floor: "First Floor",
      status: "occupied",
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

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const showFirst = () => {
    setFirst(true);
    setSecond(false);
    setThree(false);
    setFour(false);
    setFive(false);
    setSix(false);
  };
  const showSecond = () => {
    setFirst(false);
    setSecond(true);
    setThree(false);
    setFour(false);
    setFive(false);
    setSix(false);
  };
  const showThree = () => {
    setFirst(false);
    setSecond(false);
    setThree(true);
    setFour(false);
    setFive(false);
    setSix(false);
  };
  const showFour = () => {
    setFirst(false);
    setSecond(false);
    setThree(false);
    setFour(true);
    setFive(false);
    setSix(false);
  };
  const showFive = () => {
    setFirst(false);
    setSecond(false);
    setThree(false);
    setFour(false);
    setFive(true);
    setSix(false);
  };

  const showSix = () => {
    setFirst(false);
    setSecond(false);
    setThree(false);
    setFour(false);
    setFive(false);
    setSix(true);
  };

  return (
    <>
      <TopHeader />
      <Container fluid>
        <Row className="no-gutters g-0">
          <Col lg={8} className=" p-1">
            <CRMNavbar />
            <div className=" px-2">
              <ButtonGroup size="sm">
                <Button onClick={showFirst}>1</Button>
                <Button onClick={showSecond}>2</Button>
                <Button onClick={showThree}>3</Button>
                <Button onClick={showFour}>4</Button>
                <Button onClick={showFive}>5</Button>
                <Button onClick={showSix}>6</Button>
              </ButtonGroup>
              {first && (
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
                      <Col className="py-0 g-0">
                        <Card className="py-0 text-center m-1">
                          <Card.Body className="py-0">
                            <Card.Title
                              className={
                                a.status === "ready"
                                  ? "text-info"
                                  : a.status === "occupied"
                                  ? "text-success"
                                  : "text-danger"
                              }
                            >
                              {a.roomNumber}
                            </Card.Title>
                          </Card.Body>
                          <Card.Footer className="py-0 bg-white">
                            <ButtonGroup className="" size="sm">
                              <small className="mx-1 ">Reserve</small>
                              <small className="mx-1">Book</small>
                            </ButtonGroup>
                          </Card.Footer>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
              {six && (
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
                </div>
              )}

              {second && (
                <div className="">
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
              )}

              {three && (
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
              )}

              {four && (
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
              )}
              {five && (
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
                </div>
              )}
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

export default CRMIndex;
