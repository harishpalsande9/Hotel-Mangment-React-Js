import React from "react";
import {
  Container,
  Row,
  ListGroup,
  Col,
  Tabs,
  Tab,
  Card,
  Accordion,
  Form,
  Table,
  Dropdown,
  InputGroup,
  FormControl,
  DropdownButton,
  Breadcrumb,
  Navbar,
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
} from "react-bootstrap-icons";
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

function ReservationsPage() {
  let [expandedRowStatus, setExpandedRowStatus] = useState(false);
  const [expandedRow, setExpandedRow] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeRow, setActiveRow] = useState("");
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });
  // const showExpandedRow = (product) => {
  //   expandedRowStatus && setExpandedRowStatus(false);
  //   !expandedRowStatus && setExpandedRowStatus(true);
  //   console.log(product);
  // };
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
            <a className="mx-1 text-primary">
              <CheckCircle />
            </a>

            <a className="mx-1 text-primary" onClick={() => showFull(product)}>
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
  };

  const [showFilter, setShowFilter] = useState(false);
  const showFilterBox = () => {
    showFilter ? setShowFilter(false) : setShowFilter(true);
  };

  const showFull = (product) => {
    const obj = data.find((m) => m.id === product);
    setExpandedRowStatus(true);

    setExpandedRow(obj);
  };

  return (
    <>
      <Container fluid>
        <TopHeader />
        <Row className="no-gutters g-0">
          <Col lg={8} className=" p-1">
            <FrontOfficeNavbar />
            <div className=" px-2">
              {reservationFormStatus && (
                <Card body className="slideIn mb-2 px-2">
                  <AddReservationForm
                    roomInfo={location.state}
                    displayCompanyForm={displayCompanyForm}
                    addReservation={addReservation}
                    companyFormStatus={companyFormStatus}
                    formData={reservationFields}
                    handleChange={handleChange}
                    addFormFields={addFormFields}
                    removeFormFields={removeFormFields}
                    displayReservationForm={displayReservationForm}
                    formValues={formValues}
                    expandedRowStatus={expandedRowStatus}
                  />
                </Card>
              )}

              {!reservationFormStatus && (
                <div className=" row px-2 no-gutters">
                  <div className="col-md-3 ">
                    <h4 className="text-dark"> Reservations</h4>
                  </div>

                  <div className="col-md-3">
                    <PlusSquare
                      className="ball  text-primary"
                      onClick={displayReservationForm}
                      size="30"
                    />
                  </div>

                  <div className=" col-md-6    ">
                    <div className="row ">
                      <div className=" col-md-4 my-2">
                        <Form.Control
                          className="form-control-sm "
                          placeholder="Search"
                        />
                      </div>
                      <div className=" col-md-4 my-2">
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
                      </div>
                      <di className="col-md-4 my-2">
                        <p onClick={showFilterBox} className=" icon-mobile">
                          {" "}
                          &#10247;
                        </p>

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
                      </di>
                    </div>
                  </div>
                </div>
              )}
              <div className="row mt-1">
                <div>
                  {filters && (
                    <Button className="mx-1" variant="light" size="sm">
                      {filters}
                    </Button>
                  )}
                </div>
              </div>
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
                    expandedRow={expandedRow}
                    // showExpandedRow={showExpandedRow}
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
            ) : (
              <Card body border="light" className="border-2">
                It Seems You Have No Reservations!! Start Creating Now.
                <Button
                  variant="info"
                  size="sm"
                  className="mx-2"
                  onClick={displayReservationForm}
                >
                  Create New Reservation
                </Button>
              </Card>
            )}
          </Col>
          <Col lg={4} className="">
            <MasterSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ReservationsPage;
