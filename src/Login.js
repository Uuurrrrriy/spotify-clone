import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

export const Login = () => {
  return (
    <div className="login">
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <div className="login__button">
        <a href={loginUrl}> LOGIN WITH SPOTIFY </a>
      </div>
    </div>
  );
};
