import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialMediaLogin = () => {
  const [signInWithGoogle, user, loading, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, error3] = useSignInWithFacebook(auth);

  let handelError;
  if (error1 || error2 || error3) {
    handelError = (
      <>
        <p className="text-danger">
          {error1?.message}
          {error2?.message}
          {error3?.message}
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
