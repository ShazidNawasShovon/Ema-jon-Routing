import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="container">
      <div
        className="container mt-5 border p-5 rounded-3"
        variant="rounded"
        style={{ width: "30rem", height: "40rem" }}
      >
        <h3>Create New Account</h3>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Re-Enter Password</Form.Label>
            <Form.Control type="password" placeholder="Again Same Password" />
          </Form.Group>

          <Button variant="outline-success" type="submit">
            Sign Up
          </Button>
        </Form>
        <p className="mt-2">
          <Link to="/login">Already Have an Account ?</Link>
        </p>
        {/* <div className="container mt-3 mx-auto">
          ----------OR----------
          <br />
          <Button variant="outline-dark" type="submit">
            <i class="fab fa-google"></i>
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default CreateAccount;
