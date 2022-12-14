import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
import {
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authContainer">
      <FontAwesomeIcon
        icon={faShoppingCart}
        color={"#04AAFF"}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm />
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          구글 로그인 <FontAwesomeIcon icon={faGoogle} />
        </button>
      </div>
    </div>
  );
};
export default Auth;