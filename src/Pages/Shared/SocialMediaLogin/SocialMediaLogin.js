import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const SocialMediaLogin = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();

  // if (loading1 || loading2 || loading3) {
  //   return <Loading></Loading>;
  // }

  if (user1 || user2 || user3) {
    navigate("/");
  }

  let handelError;
  if (error1 || error2 || error3) {
    handelError = (
      <>
        <p className="text-danger">
          {error1 ? "" : error1.message}
          {error2 ? "" : error2.message}
          {error3 ? "" : error3.message}
        </p>
      </>
    );
  }
  return (
    <div>
      {handelError}
      <p className="text-danger">{error2?.message}</p>
      <button
        onClick={() => signInWithGoogle()}
        className="d-block w-100 fs-4 rounded-3 btns buttons"
      >
        Login With Google
      </button>
      <button
        onClick={() => signInWithFacebook()}
        className="d-block w-100 fs-4 rounded-3 btns buttons"
      >
        Login With Facebook
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="d-block w-100 fs-4 rounded-3 btns buttons"
      >
        Login With GitHub
      </button>
    </div>
  );
};

export default SocialMediaLogin;
