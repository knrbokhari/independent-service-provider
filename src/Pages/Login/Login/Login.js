import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialMediaLogin from "../../Shared/SocialMediaLogin/SocialMediaLogin";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const email = emailRef.current.value;
  const password = passwordRef.current.value;

  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(user);
  };
  return (
    <div className="container">
      <h2
        className="mt-50px mb-5 text-white text-center"
        style={{ fontSize: "35px" }}
      >
        Login
      </h2>

      <h2 className="text-danger text-center">{user?.user?.email}</h2>
      <h2 className="text-danger text-center">{error?.message}</h2>

      <div className="form">
        <Form onSubmit={handleLogin}>
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
          <p className="my-2 fs-4 text-white">
            Don't have an account?{" "}
            <Link to="/registration" className="text-decoration-none">
              Create New Account
            </Link>{" "}
          </p>
          <button type="submit" className="btns buttons mt-2  w-100">
            Log in
          </button>
        </Form>
        <button className="forgot-pass fs-4">Forgotten password?</button>
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
