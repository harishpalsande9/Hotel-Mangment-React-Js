import React from "react";
import {
  Container,
  Row,
  ListGroup,
  Col,
  Tabs,
  Tab,
  Card,
  Badge,
  Form,
  Table,
  ListGroupItem,
  ButtonGroup,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import chart from "../../assets/img/chart.png";
const MasterSidebar = () => {
  return (
    <Card body className=" mobileSideBar border-1 d-flex align-items-stretch">
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
          <Card className="p-5">
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
              <ListGroupItem>Revenue This Month - 12000</ListGroupItem>
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
  );
};

export default MasterSidebar;
