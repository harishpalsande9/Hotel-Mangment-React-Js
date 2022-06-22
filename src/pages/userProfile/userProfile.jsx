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

function UserProfile() {
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
              <CheckCircle />
            </a>

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
          <Col lg={4}>
            <div className="mt-2">
              <Image
                className="mt-2"
                src={profile}
                width="420"
                className="rounded"
              />
            </div>
            <Card className="mx-5 mt-2">
              <Card.Body>
                <Card.Title>Naved Naik</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Change Profile Picture{" "}
                  <Pencil className="text-primary float-end" />
                </ListGroupItem>
                <ListGroupItem>
                  Description will appear here and user can change it on pencil
                  click <Pencil className="text-primary float-end" />
                </ListGroupItem>
                <ListGroupItem className="text-primary">
                  98 90 98 0947 <Pencil className="text-primary float-end" />
                </ListGroupItem>
                <ListGroupItem className="text-primary">
                  NaikNaved9@gmail.com{" "}
                  <Pencil className="text-primary float-end" />
                </ListGroupItem>

                <ListGroupItem>
                  Change Password <Pencil className="text-primary float-end" />
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col lg={8} className="">
            <Card body className="no-border mx-4 m-0 mt-2">
              <Image src={ho1} width="100%" height="250" className="" />
              <Row className="mt-2">
                <h2 className="text-primary">Hotel Celeberations INN</h2>

                <p>
                  <strong className="text-primary  text-muted">
                    Hotel Name{" "}
                  </strong>
                  Hotel Celeberations INN{" "}
                  <Pencil className="text-primary float-end" />
                </p>

                <p>
                  <strong className="text-muted">Address </strong>
                  Near Chinchwad Station xyz Address and so on{" "}
                  <Pencil className="text-primary float-end" />
                </p>
                <Row>
                  <Col>
                    {" "}
                    <p>
                      <strong className="text-muted">Mobile </strong>
                      98 90 98 0947
                    </p>
                  </Col>
                  <Col>
                    {" "}
                    <p>
                      <strong className="text-muted">Email </strong>
                      NaikNaved9@gmail.com
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong className="text-muted">Front Desk </strong>
                      02164-226919
                    </p>
                  </Col>
                </Row>
              </Row>
              <Row>
                <Profile />
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserProfile;
