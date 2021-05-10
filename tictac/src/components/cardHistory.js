import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AppCSS from "../App.css";

// import firebase
import firebaseApp from "./firebase";
const db = firebaseApp.firestore();
const historyCollection = db.collection("History");
// End import firebase

const CardHistory = ({ info }) => {
  // Define responsive
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  // End Define responsive

  const DeleteHistory = () => {
    const deleteHis = historyCollection
      .doc(info.id)
      .delete()
      .then(() => console.log(`Delete ${info.id} successfully!`));
  };

  let winnerDesktop;
  if (info.win == 0) {
    winnerDesktop = <a style={{ fontSize: 15}}>Draw</a>;
  } else if (info.win == 1) {
    winnerDesktop = <a style={{ fontSize: 15}}>Play X is won</a>;
  } else if (info.win == 2) {
    winnerDesktop = <a style={{ fontSize: 15}}>Play O is won</a>;
  }

  let winnerMobile;
  if (info.win == 0) {
    winnerMobile = <a style={{ fontSize: 12}}>Draw</a>;
  } else if (info.win == 1) {
    winnerMobile = <a style={{ fontSize: 12}}>Play X is won</a>;
  } else if (info.win == 2) {
    winnerMobile = <a style={{ fontSize: 12}}>Play O is won</a>;
  }

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <Card>
            <Card.Body>
              <Container>
                <Row>
                  <Col xs={10}>
                    <h5 style={{ color: "DarkGray" }}>
                      {info.time[4]} {info.time[2]} {info.time[1]}{" "}
                      {info.time[3]}
                    </h5>
                    {winnerDesktop}
                    <br/>
                    <a style={{ fontSize: 15}}>Dimension : {info.dim}</a>
                  </Col>
                  <Col xs={2} style={{ alignItems: "center"}}>
                    <Row>
                      <Button variant="danger" onClick={DeleteHistory}>
                      Delete
                    </Button>
                    </Row>
                    <Row>
                      <Button variant="dark" href={`detail?id=${info.id}`}>
                      Detail
                    </Button>
                    </Row>
                    
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
          <br />
        </>
      )}
      {isTabletOrMobileDevice && (
        <>
          <Card>
            <Card.Body>
              <Container>
                <Row>
                  <Col xs={8}>
                    <h6 style={{ color: "DarkGray" }}>
                      {info.time[4]}
                    </h6>
                    <h6 style={{ color: "DarkGray" }}>
                    {info.time[2]} {info.time[1]} {info.time[3]}
                    </h6>
                    {winnerMobile}
                    <br/>
                    <a style={{ fontSize: 12}}>Dimension : {info.dim}</a>
                  </Col>
                  <Col xs={4}>
                  <Row>
                      <Button variant="danger" onClick={DeleteHistory}>
                      Delete
                    </Button>
                    </Row>
                    <br/>
                    <Row>
                      <Button variant="dark" href={`detail?id=${info.id}`}>
                      Detail
                    </Button>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
          <br />
        </>
      )}
    </div>
  );
};

export default CardHistory;
