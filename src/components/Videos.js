import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Videos.module.css";
import Video from "./Video";
export const Videos = () => {
  return (
    <div className={classes.videos}>
      <Link to="quize">
        <Video />
      </Link>
      <Link to="quize">
        <Video />
      </Link>
      <Link to="quize">
        <Video />
      </Link>
      <Link to="quize">
        <Video />
      </Link>
      <Link to="quize">
        <Video />
      </Link>
      <Link to="quize">
        <Video />
      </Link>
      <Link to="quize">
        <Video />
      </Link>
    </div>
  );
};
