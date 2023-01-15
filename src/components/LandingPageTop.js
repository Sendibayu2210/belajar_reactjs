import React from "react";
import { Col, Row, Form } from "react-bootstrap";

export const LandingPageTop = () => {
  return (
    <div className="container pt-5">
      <Row className="mt-4">
        <Col md={6}>
          <div className="text-primary mb-2 fw-bold">
            Jump start your growth
          </div>
          <div className="fw-bold h1">
            We boost the growth for{" "}
            <span className="text-primary">Startup</span> to Fortune 500
            Companies
          </div>
          <div className="mt-3">
            Get the most accurate leads, sales people training and convensions,
            tools and more -- all within the same one biling.
          </div>
          <div className="mt-4 w-100">
            <Form className="d-flex">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>
              <button className="btn btn-primary ms-1">Send</button>
            </Form>
          </div>
        </Col>
        <Col md={6}></Col>
      </Row>
    </div>
  );
};
