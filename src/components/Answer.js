import React from "react";
import classes from "../styles/Answer.module.css";
import { CheckBox } from "./CheckBox";
const Answer = () => {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="test answer" />
    </div>
  );
};
export default Answer;
