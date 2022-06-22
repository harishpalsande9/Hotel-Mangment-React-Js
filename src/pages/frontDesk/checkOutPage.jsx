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
  Dropdown,
  DropdownButton,
  Table,
  Button,
} from "react-bootstrap";

import TopHeader from "../../components/navs/topHeader";
import {
  Trash,
  Search,
  PlusSquare,
  ThreeDots,
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
import AddCheckoutForm from "../../components/checkout/addCheckoutForm";
import { useLocation } from "react-router-dom";

function CheckOutPage() {
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

  const [checkinFormStatus, setcheckinFormStatus] = useState(
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
      path: "checkIn",
      label: "Checkin On",
      isText: true,
    },
    {
      path: "checkOut",
      label: "Checkout On",
      isText: true,
    },

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
              onClick={() => displayCheckOutForm(product)}
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

  const displayCheckOutForm = () => {
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

  const [whichService, setWhichService] = useState("");
  const showService = (e) => {
    setWhichService(e.target.value);
  };

  const handleChangeOnRestoBill = (e) => {
    const newFileds = { ...restoBill };
    newFileds[e.currentTarget.name] = e.currentTarget.value;
    setRestoBill(newFileds);
    console.log(restoBill);
  };
  const [restoBill, setRestoBill] = useState({
    foodItem: "",
    qty: "",
    price: "",
    tax: "",
    netAmount: "",
  });

  return (
    <>
      <TopHeader />
      <Container fluid>
        <Row className="no-gutters g-0">
          <Col lg={8} className=" p-1">
            <FrontOfficeNavbar />
            <div className=" px-2">
              {checkinFormStatus && (
                <Card body className="slideIn mb-2 px-2">
                  <AddCheckoutForm
                    displayCompanyForm={displayCompanyForm}
                    roomInfo={location.state}
                    addReservation={addReservation}
                    companyFormStatus={companyFormStatus}
                    formData={reservationFields}
                    handleChange={handleChange}
                    whichService={whichService}
                    restoData={restoBill}
                    showService={showService}
                    showRooms={showRooms}
                    showRoomStatus={showRoomStatus}
                    displayCheckOutForm={displayCheckOutForm}
                  />
                </Card>
              )}

              {!checkinFormStatus && (
                <Row className="row px-2 no-gutters">
                  <div className="col-md-6">
                    <h4 className="text-dark"> Check Outs</h4>
                  </div>

                  <div className="col-md-6 text-end">
                    <Row>
                      <Col className=" col-md-4">
                        <Search />
                      </Col>
                      <Col className=" col-md-4">
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
                      <Col className=" col-md-4">
                        <ThreeDots />
                      </Col>
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
                  onClick={displayCheckOutForm}
                >
                  Create New Reservation
                </Button>
              </Card>
            )}
          </Col>
          <Col lg={4}>
            <MasterSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CheckOutPage;
