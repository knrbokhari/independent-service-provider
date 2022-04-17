import React from "react";
import { Form } from "react-bootstrap";
import SocialMediaLogin from "../../Shared/SocialMediaLogin/SocialMediaLogin";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <h2
        className="mt-50px mb-5 text-white text-center"
        style={{ fontSize: "35px" }}
      >
        Login
      </h2>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <button type="submit" className="btns buttons mt-2  w-100">
            Log in
          </button>
        </Form>
        <button className="forgot-pass">Forgotten password?</button>
        <div className="d-flex align-items-center">
          <div className="line"></div>
          <div className="or text-white">OR</div>
          <div className="line"></div>
        </div>
        <SocialMediaLogin></SocialMediaLogin>
      </div>
    </div>
  );
};

export default Login;
