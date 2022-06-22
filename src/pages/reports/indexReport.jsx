import React from "react";
import {
  Container,
  Row,
  ListGroup,
  Col,
  Tabs,
  Tab,
  ButtonGroup,
  Card,
  Accordion,
  Carousel,
  Form,
  Table,
  Dropdown,
  Image,
  InputGroup,
  FormControl,
  DropdownButton,
  Breadcrumb,
  Navbar,
  ListGroupItem,
  Nav,
  Button,
} from "react-bootstrap";

import TopHeader from "../../components/navs/topHeader";
import {
  Trash,
  ArchiveFill,
  PencilSquare,
  CheckCircle,
  PlusSquare,
  Search,
  ThreeDots,
  Pencil,
  PersonCircle,
} from "react-bootstrap-icons";
import profile from "../../assets/img/profile1.jpg";
import ho1 from "../../assets/img/ho1.png";
import ho2 from "../../assets/img/ho2.png";
import ho3 from "../../assets/img/ho3.png";
import { Link } from "react-router-dom";
import { state, useState, useEffect } from "react";
import CustomPagination from "../../components/common/customPagination";
import TableHeader from "../../components/common/tableHeader";
import TableBody from "../../components/common/tableBody";
import { paginate } from "../../utils/paginate";
import _ from "lodash";
import { getAllReservations } from "../../services/fakeReservationService";
import FrontOfficeNavbar from "../../components/navs/frontOfficeNavbar";
import AddReservationForm from "../../components/reservations/addReservations";
import MasterSidebar from "../../components/common/masterSidebar";
import { useLocation } from "react-router-dom";
import Profile from "../../components/navs/profile";
import ReportsNavbar from "../../components/navs/reportsNavbar";
import chart1 from "../../assets/img/chart.png";
function IndexReport() {
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
  const location = useLocation();

  let [filters, setFilters] = useState("");

  const [reservationFormStatus, setReservationFormStatus] = useState(
    location.state ? true : false
  );
  const [companyFormStatus, setCompanyFormStatus] = useState(false);

  const [loader, setLoader] = useState(true);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOnSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const [data, setData] = useState(getAllReservations());

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

  const displayReservationForm = () => {
    !reservationFormStatus && setReservationFormStatus(true);
    reservationFormStatus && setReservationFormStatus(false);
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
      roomNumber: "",
    },
  ]);
  const handleChange = (e, i) => {
    const newFileds = { ...reservationFields };
    newFileds[i][e.currentTarget.name] = e.currentTarget.value;
    setReservationFields(newFileds);
  };

  const addReservation = (event) => {
    event.preventDefault();

    const newData = [...data, reservationFields];
    setData(newData);
    console.log(data);
  };
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);
  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const showRowWiseData = (item) => {
    setExpandedRowStatus(true);
    console.log(item);
  };

  const [showFilter, setShowFilter] = useState(false);
  const showFilterBox = () => {
    showFilter ? setShowFilter(false) : setShowFilter(true);
  };

  return (
    <>
      <TopHeader />

      <Container fluid>
        <Row className="no-gutters g-0">
          <Col lg={9} className="px-2">
            <ReportsNavbar />
            <div className=" px-2">
              <Row className="px-2 no-gutters">
                <Col className="col-4 py-0">
                  <h4 className="text-dark"> Reservations Reports</h4>
                </Col>

                <Col className=""></Col>

                <Col className="py-0 col-2  g-start-10 ">
                  <Row className="no-gutters">
                    <Col className="py-0 g-0 ">
                      <Search />
                    </Col>
                    <Col className="py-0 g-0 mx-2">
                      <DropdownButton
                        variant="light"
                        size="sm"
                        title="filters"
                        className="py-0"
                        id="input-group-dropdown-1"
                      >
                        <Dropdown.Item href="#">confirm</Dropdown.Item>
                        <Dropdown.Item href="#">cancel</Dropdown.Item>
                      </DropdownButton>
                    </Col>
                    <Col className="py-0 g-0 mx-2">
                      <ThreeDots onClick={showFilterBox} />
                      {showFilter && (
                        <Accordion
                          className="filterBox g-0 px-0"
                          defaultActiveKey="0"
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              Filter Base On Category One
                            </Accordion.Header>
                            <Accordion.Body>
                              <Button
                                className="mx-1"
                                variant="light"
                                size="sm"
                              >
                                Outstanding
                              </Button>
                              <Button
                                className="mx-1"
                                variant="light"
                                size="sm"
                              >
                                Pending
                              </Button>
                              <Button
                                className="mx-1"
                                variant="light"
                                size="sm"
                              >
                                Deluxe Room
                              </Button>
                              <Button
                                className="mx-1"
                                variant="light"
                                size="sm"
                              >
                                Double Bed
                              </Button>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              Filter On Category One
                            </Accordion.Header>
                            <Accordion.Body>
                              <Button
                                className="mx-1"
                                variant="light"
                                size="sm"
                              >
                                Outstanding
                              </Button>
                              <Button
                                className="mx-1"
                                variant="light"
                                size="sm"
                              >
                                Pending
                              </Button>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
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
                  showRowWiseData={showRowWiseData}
                />
              </Table>

              <CustomPagination
                itemsCount={data.length / pageSize + 1}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </Col>

          <Col lg={3} className="">
            <Card body>
              <p className="lead">Reservation Reports</p>
              <ButtonGroup
                className="mb-2 d-flex justify-content-center"
                size="sm"
              >
                <Button className="text-dark" variant="outline-primary">
                  Daily
                </Button>
                <Button variant="primary">Weekly</Button>
                <Button className="text-dark" variant="outline-primary">
                  Monthly
                </Button>
              </ButtonGroup>

              <Image src={chart1} />

              <Button className="m-1" variant="outline-primary" size="sm">
                Reservations
              </Button>
              <Button className="m-1" variant="outline-primary" size="sm">
                Check Ins
              </Button>
              <Button className="m-1" variant="outline-primary" size="sm">
                Check Out
              </Button>
              <Button className="m-1" variant="outline-primary" size="sm">
                Night Audits
              </Button>
              <Button className="m-1" variant="outline-primary" size="sm">
                Reservations Coming Week
              </Button>
              <Button className="m-1" variant="outline-primary" size="sm">
                Reservations Next Week
              </Button>
              <Button className="m-1" variant="outline-primary" size="sm">
                Upcoming Checkins
              </Button>
              <Button className="m-1" variant="outline-primary" size="sm">
                Upcoming Checkouts
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default IndexReport;
