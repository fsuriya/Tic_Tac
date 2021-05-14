import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AppCSS from "../App.css";

// import firebase
import firebaseApp from "../components/firebase";
const db = firebaseApp.firestore();
const historyCollection = db.collection("History");
// End import firebase

const Detail = () => {
  // Define responsive
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  // End Define responsive

  var id = new URLSearchParams(useLocation().search).get("id");
  const [Board, SetBoard] = useState();
  const [Dim, SetDim] = useState();
  const [Message, SetMessage] = useState();
  const [Boardrender, SetBoardrender] = useState();
  var sizeBoard = 280;

  useEffect(() => {
    function getHistory() {
      historyCollection
        .doc(id)
        .get()
        .then((querySnapshot) => {
          SetBoard(querySnapshot.data().board);
          SetDim(querySnapshot.data().dim);
          let time = querySnapshot.data().time.split(" ");
          if (querySnapshot.data().win == 0) {
            SetMessage(
              `Draw at ${time[4]} ${time[2]} ${time[1]} ${
                time[3]
              } in Game match dimesion ${querySnapshot.data().dim}.`
            );
          } else if (querySnapshot.data().win == 1) {
            SetMessage(
              `Player X won at ${time[4]} ${time[2]} ${time[1]} ${
                time[3]
              } in Game match dimesion ${querySnapshot.data().dim} x ${
                querySnapshot.data().dim
              }.`
            );
          } else if (querySnapshot.data().win == 2) {
            SetMessage(
              `Player O won at ${time[4]} ${time[2]} ${time[1]} ${
                time[3]
              } ${"\n"} in Game match dimesion ${querySnapshot.data().dim} x ${
                querySnapshot.data().dim
              }.`
            );
          }
        });
    }
    getHistory();
  }, []);

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <div className="Center">
            <br />
            <div className="message">{Message}</div>
            {/* {Boardrender} */}
            <Container>
              <Row>
                <Col></Col>
                <Col xs={4}>
                  {Board ? (
                    Board.map((tempBoard, index) => {
                      // reder button to board
                      if (tempBoard === 0) {
                        return (
                          <button
                            style={{ width: sizeBoard / Dim, height: sizeBoard / Dim }}
                            className="Board"
                          >
                            <div style={{ fontSize: 240 / Dim }} className="Text-Board">
                              &nbsp;
                            </div>
                          </button>
                        );
                      }
                      // render card X to board
                      else if (tempBoard === 1) {
                        return (
                          <button
                            style={{ width: sizeBoard / Dim, height: sizeBoard / Dim }}
                            className="Board-notclick"
                          >
                            <div
                              className="Text-Board"
                              style={{ fontSize: 240 / Dim }}
                            >
                              X
                            </div>
                          </button>
                        );
                      }
                      // render card X to board
                      else if (tempBoard === 2) {
                        return (
                          <button
                            style={{ width: sizeBoard / Dim, height: sizeBoard / Dim }}
                            className="Board-notclick"
                          >
                            <div
                              className="Text-Board"
                              style={{ fontSize: 240 / Dim }}
                            >
                              O
                            </div>
                          </button>
                        );
                      }
                    })
                  ) : (
                    <a></a>
                  )}
                </Col>
                <Col></Col>
              </Row>
            </Container>
            <br />
            <Button variant="dark" href="history">
              Back
            </Button>
          </div>
        </>
      )}
      {isTabletOrMobileDevice && (
        <>
          <div className="Center">
            <br />
            <div className="message">{Message}</div>
            {/* {Boardrender} */}
            {Board ? (
              Board.map((tempBoard, index) => {
                // reder button to board
                if (tempBoard === 0) {
                  return (
                    <button
                      style={{ width: sizeBoard / Dim, height: sizeBoard / Dim }}
                      className="Board"
                    >
                      <div style={{fontSize: 240 / Dim}} className="Text-Board">
                        &nbsp;
                      </div>
                    </button>
                  );
                }
                // render card X to board
                else if (tempBoard === 1) {
                  return (
                    <button
                      style={{ width: sizeBoard / Dim, height: sizeBoard / Dim }}
                      className="Board-notclick"
                    >
                      <div
                        className="Text-Board"
                        style={{ fontSize: 240 / Dim }}
                      >
                        X
                      </div>
                    </button>
                  );
                }
                // render card X to board
                else if (tempBoard === 2) {
                  return (
                    <button
                      style={{ width: sizeBoard / Dim, height: sizeBoard / Dim }}
                      className="Board-notclick"
                    >
                      <div
                        className="Text-Board"
                        style={{ fontSize: 240 / Dim }}
                      >
                        O
                      </div>
                    </button>
                  );
                }
              })
            ) : (
              <a></a>
            )}
            <br />
            <Button variant="dark" href="history">
              Back
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
