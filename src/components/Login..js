import React from "react";
import "./Login.css";
import { Spotify_Logo } from "../config";
import { loginUrl } from "../utils/Spotify";

const Login = () => {
  return (
    <div className="login">
      <img className="logo" src={`${Spotify_Logo}`} alt="spotify-logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
