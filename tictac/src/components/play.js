import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Container } from "react-bootstrap";

const Play = () => {
  const [Message, SetMessage] = useState("");
  const [Dim, SetDim] = useState(3);
  // const [Turn, SetTurn] = useState(1);
  var Turn = 1;
  const [Board, SetBoard] = useState();
  const [Boardrender, SetBoardrender] = useState();

  function setDimension(value) {
    console.log(value);
    if (value < 3) {
      SetMessage(`Please set Dimension more than 3`);
    } else {
      SetDim(value);
    }
  }

  function initBoard() {
    let temp = [];
    for (let i = 0; i < Dim; i++) {
      for (let j = 0; j < Dim; j++) {
        temp.push(0);
      }
    }
    SetBoard(temp);
  }

  function renderBoard() {
    let temp = [];
    for (let i = 0; i < Dim; i++) {
      // temp.push();
      for (let j = 0; j < Dim; j++) {
        // reder button to board
        if (Board != null && Board[i * Dim + j] === 0) {
          temp.push(
            <button
              id={i * Dim + j}
              style={{ width: 200, height: 200 }}
              className="Board"
              onClick={(e) => {
                clickButton(e);
              }}
            >
              <div style={{ }} className="Text-Board">&nbsp;</div>
            </button>
          );
        }
        // render card X to board
        else if (Board != null && Board[i * Dim + j] === 1) {
          temp.push(
            <button
          id={i * Dim + j}
          style={{ width: 200, height: 200 }}
          className="Board-notclick"
        >
          <div className="Text-Board">X</div>
        </button>
          );
        }
        // render card X to board
        else if (Board != null && Board[i * Dim + j] === 2) {
          temp.push(
            <button
          id={i * Dim + j}
          style={{ width: 200, height: 200 }}
          className="Board-notclick"
        >
          <div className="Text-Board">O</div>
        </button>
          );
        }
      }
    }
    SetBoardrender(temp);
  }

  async function changeTurn() {
    await renderBoard();
    // check winner
    console.log(Board);
    // End check winner

    // change turn
    if (Turn === 1) {
      // await SetTurn(2);
      Turn = 2;
      SetMessage(`Player O turn.`);
    } else if (Turn === 2) {
      // await SetTurn(1);
      Turn = 1;
      SetMessage(`Player X turn.`);
    }
    // End change turn
  }

  function reset() {
    //  let temp = Board;
    //  SetBoard([1])
    // temp[0] = 0
    initBoard();
    SetMessage(`Game reset!!!`);
    renderBoard();
    console.log(Board);
  }

  function clickButton(e) {
    let temp = Board;
    if(Turn === 1){
      temp[parseInt(e.currentTarget.id)] = 1;
    }
    else if(Turn === 2){
      temp[parseInt(e.currentTarget.id)] = 2;
    }
    changeTurn();
    console.log(`${Turn}`);
    SetBoard(temp);
  }

  // Change state
  useEffect(() => {
    setDimension(3);
  }, []);

  useEffect(() => {
    SetMessage(`Set dimension to ${Dim} X ${Dim}`);
    initBoard();
  }, [Dim]);

  useEffect(() => {
    console.log(Board);
    renderBoard();
  }, [Board]);
  // End

  return (
    <div className="Center">
      <br />
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col xs={3}>
            <Form.Label column sm="2">
              Dimension
            </Form.Label>
          </Col>
          <Col xs={7}>
            <Form.Control
              type="number"
              placeholder="Enter Dimension"
              onChange={(e) => setDimension(parseInt(e.target.value))}
            />
          </Col>
        </Row>
      </Container>
      <br />
      <div className="message">{Message}</div>
      {Boardrender}
      <div className="btns" onClick={(e) => reset()}>
        Reset
      </div>
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
