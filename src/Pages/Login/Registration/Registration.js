import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialMediaLogin from "../../Shared/SocialMediaLogin/SocialMediaLogin";

const Registration = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const verifiEmail = async () => {
    await sendEmailVerification(auth.currentUser);
    alert("Verification email sent");
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      const error = "Password don't match";
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
      return setError(error);
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate("/");
        }
        // console.log(user);
        verifiEmail();
        emailRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
        setError("");
      })
      .catch((error) => {
        setError(error?.message);
      });
  };

  return (
    <div>
      <h2
        className="mt-50px mb-5 text-white text-center"
        style={{ fontSize: "35px" }}
      >
        Registration
      </h2>
      <div className="form">
        <Form onSubmit={handleRegistration}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              ref={confirmPasswordRef}
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <p className="text-danger text-center m-0 fs-5">{error}</p>
          <p className="my-2 fs-4 text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              Please Login
            </Link>
          </p>
          <button className="btns buttons mt-2  w-100">Registration</button>
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
