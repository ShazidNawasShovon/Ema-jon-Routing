import React from "react";
import { Form, Button } from "react-bootstrap";

const ResetPassword = () => {
  return (
    <div className="container">
      <div
        className="container mt-5 border p-5 rounded-3"
        variant="rounded"
        style={{ width: "30rem", height: "40rem" }}
      >
        <h3>Reset Password</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control type="password" placeholder="Old PassWord" />
            <Form.Text className="text-muted">
              We'll never share your Password with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="outline-success" type="submit">
            Reset
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
