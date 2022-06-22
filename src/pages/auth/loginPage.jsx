import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import login from "../../assets/img/login.jpg";
import LoginComponent from "../../components/auth/loginComponent";
import { Link } from "react-router-dom";
import BaseHeader from "../../components/navs/baseHeader";
import TopHeader from "../../components/navs/topHeader";
function LoginPage() {
  return (
    <>
      <BaseHeader />
      <Container fluid>
        <Row className="mt-3">
          <Col sm={8} className="text-center">
            <Image className="mobile-img" src={login} />
          </Col>
          <Col sm={4}>
            <div className="border-1 p-4 m-2">
              <h3 class="display-3 headings text-center mb-5 mt-2 ">Login</h3>

              <LoginComponent />
              <p className="text-center py-2 ">
                Don't have an account ?{" "}
                <Link to="/register " className="text-decoration-none">
                  {" "}
                  <span className="text-primary"> Sin Up</span>{" "}
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;
