import React from 'react';
import { Navbar, Container, Offcanvas, Nav, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Bootstrap() {
  return (
    <Navbar bg="body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">Offcanvas navbar</Navbar.Brand>
        <Button variant="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Offcanvas placement="end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Item>
                <Nav.Link href="#" active>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item dropdown">
                <Nav.Link href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Nav.Link>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </Nav.Item>
            </Nav>
            <Form className="d-flex mt-3" role="search">
              <FormControl type="search" placeholder="Search" aria-label="Search" />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}
