import React from "react";
import { useState } from "react";
import TopHeader from "../../components/navs/topHeader";
import {
  Button,
  Container,
  Offcanvas,
  Row,
  Col,
  Form,
  Image,
} from "react-bootstrap";

import login from "../../assets/img/login.jpg";
import { Link } from "react-router-dom";
import BaseHeader from "../../components/navs/baseHeader";
import RegisterComponent from "../../components/auth/registerComponent";
import RegisterBusiness from "../../components/auth/registerBusiness";
function RegisterPage() {
  return (
    <>
      <BaseHeader />
      <Container fluid>
        <Row className="mt-1">
          <Col sm={4} md={{ span: 6, offset: 3 }}>
            <div className="border-0 p-4 m-2">
              <h3 class="display-6 headings text-center text-dark mb-4 mt-2">
                Create Account
              </h3>
              {/* <RegisterBusiness /> */}
              <RegisterComponent />
              <p className="text-center py-2 ">
                Already have an account ?{" "}
                <Link to="/login " className="text-decoration-none">
                  {" "}
                  <span className="text-primary"> Sin in</span>{" "}
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RegisterPage;
