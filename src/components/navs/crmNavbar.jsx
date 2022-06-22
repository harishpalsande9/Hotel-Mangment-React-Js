import React from "react";
import { Button, Breadcrumb } from "react-bootstrap";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { PersonCheck, Search } from "react-bootstrap-icons";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function CRMNavbar() {
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
          <Link to="/crm" className="text-decoration-none">
            <a class="text-decoration-none m-2 p-2  text-white">
              <small className="">Index</small>
            </a>
          </Link>

          <Link to="/customers" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Customers</small>
            </a>
          </Link>
          <Link to="/leads" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Leads</small>
            </a>
          </Link>
          <Link to="/agents" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Agents</small>
            </a>
          </Link>
          <Link to="/agents" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Company</small>
            </a>
          </Link>
          <Link to="/agents" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Vendors</small>
            </a>
          </Link>
        </Nav>
      </Navbar>

      <div className="  mobileFON py-1 my-2 text-center">
        <div className="mobile-div" id="style-1">
          {" "}
          <Link to="/crm" className="text-decoration-none">
            <a class="text-decoration-none m-2 p-2  text-white">
              <small className="">Index</small>
            </a>
          </Link>
          <Link to="/customers" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Customers</small>
            </a>
          </Link>
          <Link to="/leads" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Leads</small>
            </a>
          </Link>
          <Link to="/agents" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Agents</small>
            </a>
          </Link>
          <Link to="/agents" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Company</small>
            </a>
          </Link>
          <Link to="/agents" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Vendors</small>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CRMNavbar;
