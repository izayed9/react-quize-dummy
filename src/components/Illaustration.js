import React from "react";
import image from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";

export const Illaustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
};
