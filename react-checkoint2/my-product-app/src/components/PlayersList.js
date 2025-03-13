import React from "react";
import players from "../players";
import Player from "./Player";
import { Container, Row, Col } from "react-bootstrap";

const PlayersList = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} md={4}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
