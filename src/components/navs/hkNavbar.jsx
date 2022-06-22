import React from "react";
import { Button, Breadcrumb } from "react-bootstrap";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { PersonCheck, Search } from "react-bootstrap-icons";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function HKNavbar() {
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
          <Link to="/lost-found" className="text-decoration-none">
            <a class="text-decoration-none m-2 p-2  text-white">
              <small className="">Lost & Found</small>
            </a>
          </Link>

          <Link to="/linen" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Linen</small>
            </a>
          </Link>
          <Link to="/laundry" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Laundry</small>
            </a>
          </Link>

          <Link to="/minibar" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Minibar</small>
            </a>
          </Link>

          <Link to="/breakages" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2  text-white">
              <small>Breakages</small>
            </a>
          </Link>
          <Link to="/aminities" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2  text-white">
              <small>Amenities</small>
            </a>
          </Link>
        </Nav>
      </Navbar>

      <div className="  mobileFON py-1 my-2 text-center">
        <div className="mobile-div" id="style-1">
          {" "}
          <Link to="/lost-found" className="text-decoration-none">
            <a class="text-decoration-none m-2 p-2  text-white">
              <small className="">Lost & Found</small>
            </a>
          </Link>
          <Link to="/linen" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Linen</small>
            </a>
          </Link>
          <Link to="/laundry" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Laundry</small>
            </a>
          </Link>
          <Link to="/minibar" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Minibar</small>
            </a>
          </Link>
          <Link to="/breakages" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2  text-white">
              <small>Breakages</small>
            </a>
          </Link>
          <Link to="/aminities" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2  text-white">
              <small>Amenities</small>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HKNavbar;
