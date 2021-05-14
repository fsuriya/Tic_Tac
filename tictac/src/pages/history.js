import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Row, Col, Card } from "react-bootstrap";

// import component
import CardHistory from '../components/cardHistory';
// End import component

// import firebase
import firebaseApp from "../components/firebase";
const db = firebaseApp.firestore();
const historyCollection = db.collection("History");
// End import firebase

const History = () => {
  // Define responsive
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  // End Define responsive

  const [His, setHis] = useState();

  useEffect(() => {
    function getHistory() {
      historyCollection.onSnapshot((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((doc) => {
          let d = doc.data().time.split(" ");
          // ["Sun", "May", "09", "2021", "14:54:21", "GMT+0700", "(Indochina", "Time)"]
          // console.log(Date().toLocaleString());
          temp.push({
            id: doc.id,
            dim: doc.data().dim,
            board: doc.data().board,
            time: d,
            win: doc.data().win,
          });
        });
        setHis(temp);
      });
    }
    getHistory();
  }, []);

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <br />
          <h2 className="Center">History</h2>
          <br />
          <Container>
            <Row>
              <Col></Col>
              <Col xs={10}>
                {His ? (
                  His.map((history, index) => 
                    <CardHistory info={history} key={index} />
                  )
                ) : (
                  <Card>
                    <Card.Body>Game history not found!!!</Card.Body>
                  </Card>
                )}
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </>
      )}
      {isTabletOrMobileDevice && (
        <>
          <br />
          <h2 className="Center">History</h2>
          <br />
          <Container>
            <Row>
              <Col></Col>
              <Col xs={12}>
              {His ? (
                  His.map((history, index) => 
                    <CardHistory info={history} key={index} />
                  )
                ) : (
                  <Card>
                    <Card.Body>Game history not found!!!</Card.Body>
                  </Card>
                )}
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default History;