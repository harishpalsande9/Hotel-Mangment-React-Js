import React from "react";
import { Button, Breadcrumb } from "react-bootstrap";
import { useState } from "react";
import { Navbar, Nav, Row } from "react-bootstrap";
import { PersonCheck, Search } from "react-bootstrap-icons";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function FrontOfficeNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        bg=""
        variant=""
        className=" slideIn dextopFON snav border-top border-bottom py-1 mb-3"
      >
        <Nav className="  me-auto mx-auto mx-5 text-white  py-0">
          <Link to="/reservations" className="text-decoration-none">
            <a class="text-decoration-none m-2 p-2  text-white">
              <small className="">Reservation</small>
            </a>
          </Link>

          <Link to="/checkin" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Check In</small>
            </a>
          </Link>
          <Link to="/checkout" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>CheckOut</small>
            </a>
          </Link>

          <Link to="/night-audits" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Night Audits</small>
            </a>
          </Link>

          <Link to="/reports" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2  text-white">
              <small>Reports</small>
            </a>
          </Link>
        </Nav>
      </Navbar>

      <div className="  mobileFON py-1 my-2 text-center">
        <div className="mobile-div" id="style-1">
          <Link to="/reservations" className="text-decoration-none">
            <a class="text-decoration-none px-2  text-white">
              <span className="">Reservation</span>
            </a>
          </Link>

          <Link to="/checkin" className="text-decoration-none">
            <a class=" text-decoration-none px-2 text-white">
              <span>Check In</span>
            </a>
          </Link>
          <Link to="/checkout" className="text-decoration-none">
            <a class=" text-decoration-none px-2 text-white">
              <span>CheckOut</span>
            </a>
          </Link>
          <Link to="/night-audits" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2 text-white">
              <small>Night Audits</small>
            </a>
          </Link>

          <Link to="/reports" className="text-decoration-none">
            <a class=" text-decoration-none m-2 p-2  text-white">
              <small>Reports</small>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FrontOfficeNavbar;
