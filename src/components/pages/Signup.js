import React from "react";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import { CheckBox } from "../CheckBox";
import { Form } from "../Form";
import { Illaustration } from "../Illaustration";
import { TextInput } from "../TextInput";
const Signup = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illaustration />
        <Form className={`${classes.signup} form`}>
          <TextInput type="text" placeholder="enter name" icon="person" />
          <TextInput
            type="email"
            placeholder="enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm pasword"
            icon="lock_clock"
          />
          <CheckBox type="text" text="I agree to the Terms & Conditions" />
          Login
          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
