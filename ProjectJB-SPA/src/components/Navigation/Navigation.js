import React from "react";
import "./Navigation.css";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  NavItem,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const navigation = props => {
  return (
    <Navbar bg="light" expand="md">
      <LinkContainer to={"/"} exact>
        <Nav.Link>
          <NavItem>Home Page</NavItem>
        </Nav.Link>
      </LinkContainer>{" "}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

            <LinkContainer to={"/owner-list"}>
              <Nav.Link className="border">
                <Nav.Item>Owner List</Nav.Item>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/link2"}>
              <Nav.Link className="border">
                <Nav.Item>
                  Link 2
                </Nav.Item>
              </Nav.Link>
            </LinkContainer>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navigation;
