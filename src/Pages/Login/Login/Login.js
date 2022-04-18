import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialMediaLogin from "../../Shared/SocialMediaLogin/SocialMediaLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error1] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  let handleError;
  if (error1 || error2) {
    handleError = (
      <>
        {error1?.message}
        {error2?.message}
      </>
    );
  }

  if (user) {
    navigate("/");
  }

  if (loading || sending) {
    return <Loading></Loading>;
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    passwordRef.current.value = "";
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sent email");
    passwordRef.current.value = "";
  };
  return (
    <div className="container">
      <h2
        className="mt-50px mb-5 text-white text-center"
        style={{ fontSize: "35px" }}
      >
        Login
      </h2>
      <div className="form">
        <Form onSubmit={handleLogin}>
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
          <p className="my-2 fs-4 text-white">
            Don't have an account?{" "}
            <Link to="/registration" className="text-decoration-none">
              Create New Account
            </Link>
          </p>
          <p className="text-danger text-center fs-5">{handleError}</p>
          <button type="submit" className="btns buttons mt-2  w-100">
            Log in
          </button>
        </Form>
        <button className="forgot-pass fs-4" onClick={resetPassword}>
          Forgotten password?
        </button>
        <div className="d-flex align-items-center">
          <div className="line"></div>
          <div className="or text-white">OR</div>
          <div className="line"></div>
        </div>
        <SocialMediaLogin></SocialMediaLogin>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
