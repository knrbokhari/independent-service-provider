import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Checkout = () => {
  // get user from firebase
  const [user] = useAuthState(auth);
  // const [updateProfile, updating, error] = useUpdateProfile(auth);

  // get input
  const displayNameRef = useRef("");
  const addressRef = useRef("");
  const phoneNumberRef = useRef("");

  // if (updating) {
  //   return <Loading></Loading>;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("Thank you for the booking");

    // const displayName = displayNameRef.current.value;
    // const address = addressRef.current.value;
    // const phoneNumber = phoneNumberRef.current.value;

    // await updateProfile();
  };
  return (
    <div className="container">
      <h1>Checkout</h1>
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User name</Form.Label>
            <Form.Control
              ref={displayNameRef}
              type="text"
              value={user ? user?.displayName : ""}
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={user?.email} readOnly />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              ref={addressRef}
              type="text"
              placeholder="Your address"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              ref={phoneNumberRef}
              type="number"
              placeholder="Phone number"
              required
            />
          </Form.Group>
          {/* <p className="text-danger text-center fs-5">{error?.message}</p> */}
          <button type="submit" className="btns buttons mt-2  w-100">
            submit
          </button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Checkout;
