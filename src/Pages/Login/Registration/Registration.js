import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialMediaLogin from "../../Shared/SocialMediaLogin/SocialMediaLogin";

const Registration = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState("");

  const verifiEmail = async () => {
    await sendEmailVerification(auth.currentUser);
    alert("Verification email sent");
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(password.length);
    if (password.length < 6) {
      setError("give 6 or more words for password");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        verifiEmail();
      })
      .catch((error) => {
        console.error(error);
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
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <p className="text-danger">{error}</p>
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
