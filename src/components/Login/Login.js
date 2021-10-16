import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const Login = () => {
  const { signInWithGoogle, signInWithFacebook } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/shop";
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleFacebookSignIn = () => {
    signInWithFacebook().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="container">
      <div
        className="container mt-5 border p-5 rounded-3"
        variant="rounded"
        style={{ width: "30rem", height: "40rem" }}
      >
        <h3>Login</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password at least 6 characters"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="outline-success" type="submit">
            Login
          </Button>
        </Form>
        <p className="mt-2">
          New to EMA-JOHN ? <Link to="/signup">Create New Account</Link>
        </p>
        <p>
          <Link to="/resetPassword">Forget Password ?</Link>
        </p>
        <div className="container mt-5 mx-auto text-center">
          ----------OR----------
          <br />
          <Button
            onClick={handleGoogleLogin}
            variant="outline-dark"
            type="submit"
          >
            <i className="fab fa-google"></i>
          </Button>
          <Button
            onClick={handleFacebookSignIn}
            className="m-3 "
            variant="outline-dark"
            type="submit"
          >
            <i className="fab fa-facebook "></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
