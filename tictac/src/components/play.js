import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col } from "react-bootstrap";

const Play = () => {
  return (
    <div className="Center">
      <div>
        <Form.Group as={Row} controlId="formDim">
          <Form.Label column sm="2">
            Dimension
          </Form.Label>
          <Col sm="20">
            <Form.Control type="number" placeholder="Enter Dimension" />
          </Col>
        </Form.Group>
      </div>
      <div className="message">test</div>
      <div className="btns">Reset</div>
      <div className="github">
        <iframe
          frameBorder="0"
          height="20px"
          scrolling="0"
          src="https://ghbtns.com/github-btn.html?user=fsuriya&repo=Tic_Tac&type=star"
          title="github-star"
          width="51px"
        />
        <iframe
          frameBorder="0"
          height="20px"
          scrolling="0"
          src="https://ghbtns.com/github-btn.html?user=fsuriya&type=follow"
          title="github-follow"
          width="123px"
        />
      </div>
    </div>
  );
};

export default Play;
