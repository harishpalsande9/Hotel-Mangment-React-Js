import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BaseHeader = () => {
  return (
    <Navbar className="border-7">
      <Container>
        <Navbar.Brand href="#home">Hoodie Techno</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/login">
            <Button className="mx-2" size="sm" variant="dark">
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button className="mx-2" size="sm" variant="warning">
              Create Account
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BaseHeader;
