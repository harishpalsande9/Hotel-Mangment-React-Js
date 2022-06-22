import React from "react";
import { Button, Breadcrumb } from "react-bootstrap";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { PersonCheck, Search } from "react-bootstrap-icons";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function MastersNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        expand="lg"
        bg=""
        variant=""
        className="dextopFON snav border-top border-bottom py-1 mb-3"
      >
        <Nav className=" me-auto mx-auto mx-5 text-white  py-0">
          <Link to="/rooms" className="text-decoration-none">
            <a class="text-decoration-none m-2 p-2  text-white">
              <small className="">Rooms</small>
            </a>
          </Link>
          <Link to="/ids" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Id's</small>
            </a>
          </Link>
          <Link to="/staff" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Staff</small>
            </a>
          </Link>
        </Nav>
      </Navbar>

      <div className="  mobileFON py-1 my-2 text-center">
        <div className="mobile-div" id="style-1">
          {" "}
          <Link to="/rooms" className="text-decoration-none">
            <a class="text-decoration-none m-2 p-2  text-white">
              <small className="">Rooms</small>
            </a>
          </Link>
          <Link to="/ids" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Id's</small>
            </a>
          </Link>
          <Link to="/staff" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Staff</small>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MastersNav;
