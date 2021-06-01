import React from "react";
import { Form } from "react-bootstrap";

const BankConnectionDetails = () => {
  return (
    <div className="w-50">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Account Number</Form.Label>
          <Form.Control type="text" placeholder="123-456-789" />
        </Form.Group>
        <br />
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Account Type</Form.Label>
          <Form.Control as="select">
            <option value="">--select--</option>
            <option value="savings">Savings</option>
            <option value="credit">Credit</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default BankConnectionDetails;
