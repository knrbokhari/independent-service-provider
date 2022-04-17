import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../../../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect className="" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{ padding: "15px 0" }}>
          <CustomLink to="/">
            <img src="https://technext.github.io/gymlife/img/logo.png" alt="" />
          </CustomLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ margin: "0 auto" }}>
            <CustomLink className="nav-link" to="/">
              Home
            </CustomLink>
            <CustomLink className="nav-link" to="/services">
              Services
            </CustomLink>
            <CustomLink className="nav-link" to="/checkout">
              Check Out
            </CustomLink>
            <CustomLink className="nav-link" to="/blogs">
              Blogs
            </CustomLink>
            <CustomLink className="nav-link" to="/aboutme">
              About Me
            </CustomLink>
          </Nav>
          <Nav>
            <CustomLink className="nav-link" to="/login">
              Login
            </CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
