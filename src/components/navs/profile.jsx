import React from "react";
import { Button, Breadcrumb } from "react-bootstrap";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { PersonCheck, Search } from "react-bootstrap-icons";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        expand="lg"
        bg=""
        variant=""
        className="snav border-top border-bottom py-1 mb-3"
      >
        <Nav className=" me-auto mx-auto mx-5 text-white  py-0">
          <Link to="/reservations" className="text-decoration-none">
            <a class="text-decoration-none m-2 p-2  text-white">
              <small className="">Rooms</small>
            </a>
          </Link>

          <Link to="/checkin" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Aminities</small>
            </a>
          </Link>
          <Link to="/checkout" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Activities</small>
            </a>
          </Link>

          <Link to="/night-audits" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Foods</small>
            </a>
          </Link>

          <Link to="/reports" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2  text-white">
              <small>Reviews</small>
            </a>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Profile;
