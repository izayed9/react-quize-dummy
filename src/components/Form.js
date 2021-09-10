import React from "react";
import classes from "../styles/Form.modul.css";
export const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} {...rest}>
      {children}
    </form>
  );
};
