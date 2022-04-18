import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../../../hook/CustomLink/CustomLink";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

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
              Checkout
            </CustomLink>
            <CustomLink className="nav-link" to="/blogs">
              Blogs
            </CustomLink>
            <CustomLink className="nav-link" to="/aboutme">
              About Me
            </CustomLink>
          </Nav>
          <Nav>
            {user ? (
              <button
                className="btn btn-link d-flex text-decoration-none fs-3 text-white"
                onClick={logout}
              >
                Sign Out
              </button>
            ) : (
              <CustomLink className="nav-link" to="/login">
                Login
              </CustomLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
