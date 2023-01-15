import React, { Component, useState } from "react";
import { Col, Row } from "react-bootstrap";

export const LandingClient = () => {
  const [gambar, setGambar] = useState([
    {
      id: 1,
      gambar: "logo-amazon.png",
    },
    {
      id: 2,
      gambar: "logo-slack.png",
    },
    {
      id: 1,
      gambar: "logo-woocommerce.png",
    },
  ]);

  return (
    <div className="mt-5 landing-client">
      <div className="container">
        <Row className="d-flex align-items-center">
          <Col md={4}>
            <div className="pt-2 border-top border-2 text-center">
              Proud parters at Hubspot & Segment
            </div>
          </Col>
          <Col md={8}>
            <div className="d-flex justify-content-center">
              {gambar.map((img) => (
                <img src={"assets/" + img.gambar} className="img-client" />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
