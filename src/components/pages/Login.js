import classes from "../../styles/Login.module.css";
import Button from "../Button";
import { Form } from "../Form";
import { Illaustration } from "../Illaustration";
import { TextInput } from "../TextInput";
export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illaustration />
        <Form className={`${classes.login} from`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
