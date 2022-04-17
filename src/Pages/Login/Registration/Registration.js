import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialMediaLogin from "../../Shared/SocialMediaLogin/SocialMediaLogin";

const Registration = () => {
  return (
    <div>
      <h2
        className="mt-50px mb-5 text-white text-center"
        style={{ fontSize: "35px" }}
      >
        Registration
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
          <p className="my-2 fs-4 text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              Please Login
            </Link>{" "}
          </p>
          <button type="submit" className="btns buttons mt-2  w-100">
            Registration
          </button>
        </Form>
        <div className="d-flex align-items-center mt-3">
          <div className="line"></div>
          <div className="or text-white">OR</div>
          <div className="line"></div>
        </div>
        <SocialMediaLogin></SocialMediaLogin>
      </div>
    </div>
  );
};

export default Registration;
