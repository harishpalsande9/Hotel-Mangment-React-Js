import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BaseHeader from "../../components/navs/baseHeader";
import RegisterBusiness from "../../components/auth/registerBusiness";
function RegisterBusinessPage() {
  return (
    <>
      <BaseHeader />
      <Container fluid>
        <Row className="mt-1">
          <Col sm={4} md={{ span: 6, offset: 3 }}>
            <div className="border-0 p-1 m-2">
              <h3 class="display-6 headings  text-center text-dark mb-4 mt-2">
                Register Business
              </h3>
              <RegisterBusiness />{" "}
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

export default RegisterBusinessPage;
