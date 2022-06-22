import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { PersonCheck, Search } from "react-bootstrap-icons";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function TransactionsNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        expand="lg"
        bg=""
        variant=""
        className="border-2 mb-3 py-0 slideIn dextopFON snav"
      >
        <Nav className="me-auto mx-auto mx-5  py-1">
          <Link to="/transactions" className="text-decoration-none">
            <a class="text-dark text-decoration-none m-2  text-white">
              <small>Home</small>
            </a>
          </Link>

          <Link to="/postings" className="text-decoration-none">
            <a class="text-dark text-decoration-none m-2  text-white">
              <small>Postings</small>
            </a>
          </Link>
          <Link to="/advances" className="text-decoration-none">
            <a class="text-dark text-decoration-none m-2 text-white">
              <small>Advance</small>
            </a>
          </Link>
          <Link to="/update-rooms" className="text-decoration-none">
            <a class="text-dark text-decoration-none m-2 text-white">
              <small>Allocate Rooms</small>
            </a>
          </Link>
          <Link to="/settle-bills" className="text-decoration-none">
            <a class="text-dark text-decoration-none m-2 text-white">
              <small>Settle Bills</small>
            </a>
          </Link>
        </Nav>
      </Navbar>

      <div className="  mobileFON py-1 my-2 text-center">
        <div className="mobile-div" id="style-1">
          <Link to="/transactions" className="text-decoration-none">
            <a class="text-dark text-decoration-none m-2  text-white">
              <small>Home</small>
            </a>
          </Link>

          <Link to="/postings" className="text-decoration-none">
            <a class="text-dark text-decoration-none m-2  text-white">
              <small>Postings</small>
            </a>
          </Link>
          <Link to="/advances" className="text-decoration-none">
            <a class="text-dark text-decoration-none m-2 text-white">
              <small>Advance</small>
            </a>
          </Link>
          <Link to="/update-rooms" className="text-decoration-none">
            <a class="text-dark text-decoration-none m-2 text-white">
              <small>Allocate Rooms</small>
            </a>
          </Link>
          <Link to="/settle-bills" className="text-decoration-none">
            <a class="text-dark text-decoration-none m-2 text-white">
              <small>Settle Bills</small>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TransactionsNavbar;
