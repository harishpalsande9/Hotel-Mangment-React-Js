import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Trash,
  ArchiveFill,
  PencilSquare,
  FunnelFill,
  Building,
  PersonBoundingBox,
  Bag,
  Gear,
  Bell,
  Magic,
  MegaphoneFill,
  ArrowRepeat,
  JournalCheck,
  Shop,
} from "react-bootstrap-icons";
import {
  Navbar,
  Nav,
  Image,
  Form,
  InputGroup,
  ListGroup,
  Row,
  Col,
  Dropdown,
  Container,
  Offcanvas,
  DropdownButton,
  Card,
  FormControl,
  Modal,
  Badge,
  Tab,
  Tabs,
  ListGroupItem,
} from "react-bootstrap";
import profile from "../../assets/img/profile.png";
import { PersonCheck, Search, Sliders } from "react-bootstrap-icons";
import logo from "../../assets/img/logo.png";
import chart from "../../assets/img/chart.png";
import configMenu from "../../config/navBar.json";

function TopHeader() {
  const [menu, setMenu] = useState([
    { name: "Front Desk", path: "/front-desk", icon: <Building /> },
    { name: "CRM", path: "/crm", icon: <PersonBoundingBox /> },
    // { name: "Transactions", path: "/transactions", icon: <Bag /> },
    { name: "House Keeping", path: "/house-keeping", icon: <ArrowRepeat /> },
    { name: "Store", path: "/house-keeping", icon: <Shop /> },
    { name: "Reports", path: "/reports", icon: <JournalCheck /> },
    { name: "Masters", path: "/masters", icon: <Gear /> },
  ]);

  const [noti, setNoti] = useState(false);
  const [userBox, setUserBox] = useState(false);

  const showNoti = () => {
    noti ? setNoti(false) : setNoti(true);
  };
  const showUserBox = () => {
    userBox ? setUserBox(false) : setUserBox(true);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRight, setShowRight] = useState(false);

  const handleCloseRight = () => setShowRight(false);
  const handleShowRight = () => setShowRight(true);
  return (
    <>
      <Navbar
        expand="lg"
        size="sm"
        bg="light"
        variant="light"
        className="customNavbar py-0 mb-2 dextop-nav text-dark"
      >
        <Navbar.Brand href="#home">
          <Image src={logo} width="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-5  text-decoration-none text-dark">
            {menu.map((item) => (
              <NavLink
                to={item.path}
                exact
                activeClassName="active-link"
                className="mx-2 text-dark text-decoration-none"
              >
                <small className="text-primary "> {item.icon}</small>
                <small className="mx-2 text-secondary">{item.name}</small>
              </NavLink>
            ))}
          </Nav>
          <Nav className="float-right">
            <div>
              <Button
                onClick={showNoti}
                variant="white"
                size="sm"
                className="no-focus-btn"
              >
                <Bell className=" " color="orange" size={18} />
                <small className="text-primary">4</small>
              </Button>

              {noti && (
                <ListGroup className="d-flex justify-content-center subMenu">
                  <ListGroup.Item className="text-primary">
                    <small>Checkout On Room 302</small>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-success">
                    Salary Pending
                  </ListGroup.Item>
                  <ListGroup.Item className="text-warning">
                    Notification 1
                  </ListGroup.Item>
                  <ListGroup.Item className="text-dark">
                    Notification 1
                  </ListGroup.Item>
                </ListGroup>
              )}
            </div>
            <Form className="mx-2">
              <InputGroup>
                <FormControl
                  placeholder="Search"
                  size="sm"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="light" className="no-gutters" size="sm">
                  <Search className="text-primary" />
                </Button>
              </InputGroup>
            </Form>

            <div>
              <Button
                onClick={showUserBox}
                variant="white"
                size="sm"
                className="no-focus-btn"
              >
                <PersonCheck className="" color="royalblue" size={18} />
              </Button>
              {userBox && (
                <Card body className="d-flex justify-content-center subProfile">
                  <Row className="g-1">
                    <Col>
                      <Image src={profile} size="10" />
                    </Col>
                    <Col>
                      <p className="lead">Naved Naik</p>
                      <Link to="/user">
                        <Button className="mx-1" variant="light" size="sm">
                          Profile
                        </Button>
                      </Link>
                      <Button className="mx-1" variant="danger" size="sm">
                        Logout
                      </Button>
                    </Col>
                  </Row>
                </Card>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="mobile-nav">
        <Col className="row">
          <Col className="">
            <Button variant="" onClick={handleShow}>
              <div className="menuIcon"></div>
              <div className="menuIcon"></div>
              <div className="menuIcon"></div>
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Navbar.Brand href="#home">
                  <Image src={logo} width="80" />
                </Navbar.Brand>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {menu.map((item) => (
                  <li className="list-group-item my-2">
                    <NavLink
                      to={item.path}
                      exact
                      activeClassName="active-link"
                      className="mx-2 text-dark text-decoration-none"
                    >
                      <small className="text-primary "> {item.icon}</small>
                      <small className="mx-2 text-secondary">{item.name}</small>
                    </NavLink>
                  </li>
                ))}
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col className="">
            <div>
              <Image src={logo} width="80" />
            </div>
          </Col>
          <Col className=" ">
            <div>
              <Button
                onClick={showNoti}
                variant="white"
                size="sm"
                className="btn-noti no-focus-btn"
              >
                <Bell className=" " color="orange" size={18} />
                <small className="text-primary">4</small>
              </Button>

              {noti && (
                <ListGroup className="d-flex justify-content-center subMenu">
                  <ListGroup.Item className="text-primary">
                    <small>Checkout On Room 302</small>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-success">
                    Salary Pending
                  </ListGroup.Item>
                  <ListGroup.Item className="text-warning">
                    Notification 1
                  </ListGroup.Item>
                  <ListGroup.Item className="text-dark">
                    Notification 1
                  </ListGroup.Item>
                </ListGroup>
              )}

              <div
                className=" btn-mobile"
                variant="primary"
                onClick={handleShowRight}
              >
                <p className=" icon-mobile"> &#10247;</p>
              </div>
            </div>
            <Offcanvas
              placement="end"
              show={showRight}
              onHide={handleCloseRight}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Dashboard</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Card body className="border-1 d-flex align-items-stretch">
                  <InputGroup className="mb-2">
                    <FormControl
                      placeholder="Username"
                      className="mr-1"
                      type="date"
                      size="sm"
                      value="12 Nov"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <FormControl
                      placeholder="Username"
                      type="date"
                      className="mr-1"
                      size="sm"
                      value="12 Nov"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text id="basic-addon1" className="bg-light">
                      <Search className="text-primary" />
                    </InputGroup.Text>
                  </InputGroup>

                  <Tabs
                    defaultActiveKey="home"
                    transition={true}
                    id="noanim-tab-example"
                    className="mb-3 p-0 btn btn-sm btn-light bg-light p-1  nav justify-content-center nav-fill"
                  >
                    <Tab className="" eventKey="home" title="Dashboard">
                      <div class="row">
                        <div class="c-dashboardInfo col-lg-6 col-md-6">
                          <div class="wrap zoom">
                            <span>Revenue Today</span>
                            <h4 className="text-success">&#8377; 12,500/-</h4>
                          </div>
                        </div>
                        <div class="c-dashboardInfo col-lg-6 col-md-6">
                          <div class="wrap zoom">
                            <span>Revenue(Month)</span>
                            <h4 className="text-success"> &#8377; 98,500/-</h4>
                          </div>
                        </div>

                        <div class="c-dashboardInfo col-lg-6 col-md-6">
                          <div class="wrap zoom">
                            <span>Expctd. Arrivals</span>
                            <h4 className="text-info">9</h4>
                          </div>
                        </div>
                        <div class="c-dashboardInfo col-lg-6 col-md-6">
                          <div class="wrap zoom">
                            <span>Rooms Booked</span>
                            <h4 className="text-dark">16</h4>
                          </div>
                        </div>
                        <div class="c-dashboardInfo col-lg-6 col-md-6">
                          <div class="wrap zoom">
                            <span>Expctd. checkout</span>
                            <h4 className="text-dark">6</h4>
                          </div>
                        </div>

                        <div class="c-dashboardInfo col-lg-6 col-md-6">
                          <div class="wrap zoom">
                            <span>Transactions</span>
                            <h4 className="text-danger">2 Pending</h4>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="profile" title="Revenue">
                      <Card className="">
                        <Card.Img
                          className="px-5"
                          width={80}
                          height={140}
                          variant="top"
                          src={chart}
                        />
                        <Card.Body>
                          <Card.Title className="text-primary text-center">
                            Revenue
                          </Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem>Revenue Today - 12000</ListGroupItem>
                          <ListGroupItem>
                            Revenue This Month - 12000
                          </ListGroupItem>
                        </ListGroup>
                        <Card.Body className="text-center">
                          <Card.Link href="#">See Details</Card.Link>
                        </Card.Body>
                      </Card>
                    </Tab>
                    <Tab eventKey="contact" title="Customers">
                      <ListGroup as="ul">
                        <ListGroup.Item className="bg-secondary" as="li" active>
                          Recent Customers
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          Naved Naik{" "}
                          <Badge bg="primary" className="float-end">
                            {" "}
                            Completed
                          </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          Moin Shaikh{" "}
                          <Badge bg="success" className="float-end">
                            Staying
                          </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          Furqan B
                          <Badge bg="danger" className="float-end">
                            Settle Bill
                          </Badge>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab>
                  </Tabs>
                </Card>
              </Offcanvas.Body>
            </Offcanvas>{" "}
          </Col>
        </Col>
      </div>
    </>
  );
}

export default TopHeader;
