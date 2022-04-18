import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const SocialMediaLogin = () => {
  // react-firebase-hooks
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);

  // navigate & location for from
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // if (loading1 || loading2 || loading3) {
  //   return <Loading></Loading>;
  // }

  // user
  if (user1 || user2 || user3) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <p className="text-danger text-center mt-2">
        {error1 ? error1.message : ""}
      </p>
      <button
        onClick={() => signInWithGoogle()}
        className="d-block w-100 fs-4 rounded-3 btns buttons"
      >
        Login With Google
      </button>
      <p className="text-danger text-center mt-3">
        {error3 ? error3.message : ""}
      </p>
      <button
        onClick={() => signInWithFacebook()}
        className="d-block w-100 fs-4 rounded-3 btns buttons"
      >
        Login With Facebook
      </button>
      <p className="text-danger text-center mt-3">
        {error2 ? error2.message : ""}
      </p>
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
