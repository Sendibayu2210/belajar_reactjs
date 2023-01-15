import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
export const NavbarComponent = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <div className="h2 fw-bold">ReactJS</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 border"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <div className="d-flex">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="mx-2" href="#action1">
                About Us
              </Nav.Link>
              <Nav.Link className="mx-2" href="#action2">
                Our Service
              </Nav.Link>
              <Nav.Link className="mx-2" href="#action2">
                The Team
              </Nav.Link>
              <Nav.Link className="mx-2" href="#action2">
                Portofolio
              </Nav.Link>
            </Nav>
            <div className="btn btn-primary btn-login">Login</div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
